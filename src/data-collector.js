/**
 * World Bank APIからデータを取得するモジュール
 */

require('dotenv').config();
const axios = require("axios");
const fs = require("fs").promises;
const path = require("path");

// 対象国のコード
const COUNTRIES = {
    'JPN': '日本',
    'USA': 'アメリカ',
    'CHN': '中国',
    'DEU': 'ドイツ',
    'GBR': 'イギリス',
    'FRA': 'フランス',
    'IND': 'インド',
    'BRA': 'ブラジル',
    'CAN': 'カナダ',
    'AUS': 'オーストラリア',
    'IDN': 'インドネシア',
    'PER': 'ペルー'
};

// 経済指標のコード
const INDICATORS = {
    'NY.GDP.MKTP.CD': 'GDP（現在価格、米ドル）',
    'NY.GDP.MKTP.KD.ZG': 'GDP成長率（年率）',
    'SL.UEM.TOTL.ZS': '失業率（%）',
    'FP.CPI.TOTL.ZG': 'インフレ率（%）',
    'NY.GDP.PCAP.CD': '一人当たりGDP（米ドル）',
    'NE.TRD.GNFS.ZS': '貿易（GDP比%）',
    'GC.DPT.TOTL.GD.ZS': '政府債務（GDP比%）',
    'SP.POP.TOTL': '総人口',
    'BX.KLT.DINV.CD.WD': '外国直接投資（米ドル）' // 単位を米ドルに変更
};

// World Bank API基本URL
const BASE_URL = 'https://api.worldbank.org/v2';

/**
 * 指定された国と指標のデータを取得
 */
async function fetchIndicatorData(countryCode, indicatorCode, endYear = new Date().getFullYear(), startYear = endYear - 19) { // 直近20年間に変更
    try {
        const url = `${BASE_URL}/country/${countryCode}/indicator/${indicatorCode}`;
        const params = {
            format: 'json',
            date: `${startYear}:${endYear}`,
            per_page: 100
        };
        
        console.log(`  📈 ${COUNTRIES[countryCode]} - ${INDICATORS[indicatorCode]} を取得中...`);
        
        const response = await axios.get(url, { params });
        
        // World Bank APIは配列の2番目の要素にデータが含まれる
        if (response.data && response.data[1]) {
            return response.data[1]
                .filter(item => item.value !== null)
                .map(item => ({
                    country: item.country.value,
                    countryCode: item.countryiso3code,
                    indicator: INDICATORS[indicatorCode],
                    indicatorCode: indicatorCode,
                    year: parseInt(item.date),
                    value: item.value,
                    unit: getUnit(indicatorCode)
                }))
                .sort((a, b) => a.year - b.year);
        }
        
        return [];
        
    } catch (error) {
        console.error(`  ❌ ${countryCode} - ${indicatorCode} の取得に失敗:`, error.message);
        return [];
    }
}

/**
 * 指標コードに基づいて単位を返す
 */
function getUnit(indicatorCode) {
    const units = {
        'NY.GDP.MKTP.CD': '米ドル',
        'NY.GDP.MKTP.KD.ZG': '%',
        'SL.UEM.TOTL.ZS': '%',
        'FP.CPI.TOTL.ZG': '%',
        'NY.GDP.PCAP.CD': '米ドル',
        'NE.TRD.GNFS.ZS': '%',
        'GC.DPT.TOTL.GD.ZS': '%',
        'SP.POP.TOTL': '人',
        'BX.KLT.DINV.CD.WD': '米ドル' // 単位を米ドルに変更
    };
    return units[indicatorCode] || '';
}

/**
 * 全ての国と指標のデータを取得
 */
async function collectAllData() {
    const allData = [];
    const countries = Object.keys(COUNTRIES);
    const indicators = Object.keys(INDICATORS);
    
    console.log(`📊 ${countries.length}カ国 × ${indicators.length}指標のデータを取得開始...`);
    
    for (const countryCode of countries) {
        console.log(`🌍 ${COUNTRIES[countryCode]} のデータを取得中...`);
        
        for (const indicatorCode of indicators) {
            const data = await fetchIndicatorData(countryCode, indicatorCode);
            allData.push(...data);
            
            // API制限を考慮して少し待機
            await new Promise(resolve => setTimeout(resolve, 100));
        }
    }
    
    return allData;
}

/**
 * データを国別・指標別に整理
 */
function organizeData(rawData) {
    const organized = {
        byCountry: {},
        byIndicator: {},
        summary: {
            totalRecords: rawData.length,
            countries: Object.keys(COUNTRIES),
            indicators: Object.keys(INDICATORS),
            yearRange: {
                min: Math.min(...rawData.map(d => d.year)),
                max: Math.max(...rawData.map(d => d.year))
            },
            lastUpdated: new Date().toISOString()
        }
    };
    
    // 国別に整理
    for (const countryCode of Object.keys(COUNTRIES)) {
        organized.byCountry[countryCode] = {
            name: COUNTRIES[countryCode],
            data: rawData.filter(d => d.countryCode === countryCode)
        };
    }
    
    // 指標別に整理
    for (const indicatorCode of Object.keys(INDICATORS)) {
        organized.byIndicator[indicatorCode] = {
            name: INDICATORS[indicatorCode],
            data: rawData.filter(d => d.indicatorCode === indicatorCode)
        };
    }
    
    return organized;
}

/**
 * データをファイルに保存
 */
async function saveData(data, filename) {
    try {
        const dataDir = path.join(__dirname, '..', 'data');
        const filePath = path.join(dataDir, filename);
        
        await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf8');
        console.log(`💾 データを保存しました: ${filename}`);
        
    } catch (error) {
        console.error(`❌ データ保存に失敗: ${filename}`, error);
        throw error;
    }
}

/**
 * メイン関数：データ収集の実行
 */
async function collectData() {
    try {
        console.log('🚀 World Bank データ収集開始...');
        
        // 生データを取得
        const rawData = await collectAllData();
        
        if (rawData.length === 0) {
            throw new Error('データが取得できませんでした');
        }
        
        // データを整理
        const organizedData = organizeData(rawData);
        
        // ファイルに保存
        await saveData(rawData, 'raw-data.json');
        await saveData(organizedData, 'organized-data.json');
        await saveData(organizedData, 'economic-data.json'); // Gemini分析用のファイル名でも保存
        
        console.log(`✅ データ収集完了: ${rawData.length}件のレコードを取得`);
        console.log(`📅 期間: ${organizedData.summary.yearRange.min}-${organizedData.summary.yearRange.max}`);
        
        return organizedData;
        
    } catch (error) {
        console.error('❌ データ収集でエラーが発生:', error);
        throw error;
    }
}

module.exports = {
    collectData,
    COUNTRIES,
    INDICATORS
};



// スクリプトが直接実行された場合のみcollectData関数を実行
if (require.main === module) {
    collectData()
        .then(() => {
            console.log('🎉 データ収集スクリプト完了');
            process.exit(0);
        })
        .catch((error) => {
            console.error('💥 データ収集スクリプトでエラー:', error);
            process.exit(1);
        });
}

