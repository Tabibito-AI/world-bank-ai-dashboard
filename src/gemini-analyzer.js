/**
 * Gemini AIを使用してデータを分析するモジュール
 */

require('dotenv').config();
const { GoogleGenerativeAI } = require('@google/generative-ai');
const fs = require('fs').promises;
const path = require('path');

// Gemini AIクライアントの初期化
let genAI;

function initializeGemini() {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        throw new Error('GEMINI_API_KEY環境変数が設定されていません');
    }
    genAI = new GoogleGenerativeAI(apiKey);
}

const MAX_RETRIES = 5;
const RETRY_DELAY_MS = 2000; // 2秒

/**
 * 経済データの概要分析を生成
 */
async function generateOverviewAnalysis(data) {
    for (let i = 0; i < MAX_RETRIES; i++) {
        try {
            const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
            
            const prompt = `
以下のWorld Bank経済データを分析して、日本語で概要レポートを作成してください。

データ概要:
- 対象国: ${data.summary.countries.join(', ')}
- 指標数: ${data.summary.indicators.length}
- 期間: ${data.summary.yearRange.min}-${data.summary.yearRange.max}
- 総レコード数: ${data.summary.totalRecords}

主要指標:
${Object.entries(data.byIndicator).map(([code, info]) => 
    `- ${info.name}: ${info.data.length}件のデータ`
).join('\n')}

以下のJSON形式で回答してください:
{
  "title": "経済指標ダッシュボード概要",
  "summary": "データ全体の概要説明（200文字程度）",
  "keyFindings": [
    "主要な発見1",
    "主要な発見2", 
    "主要な発見3"
  ],
  "methodology": "分析手法の説明",
  "dataQuality": "データの品質や制限事項について"
}
`;

            const result = await model.generateContent(prompt);
            const response = await result.response;
            const text = response.text();
            
            // JSONの抽出を改善
            let jsonText = text;
            if (text.includes('```json')) {
                const jsonMatch = text.match(/```json\s*([\s\S]*?)\s*```/);
                if (jsonMatch) {
                    jsonText = jsonMatch[1];
                }
            } else if (text.includes('```')) {
                const jsonMatch = text.match(/```\s*([\s\S]*?)\s*```/);
                if (jsonMatch) {
                    jsonText = jsonMatch[1];
                }
            }
            
            try {
                return JSON.parse(jsonText);
            } catch (parseError) {
                console.warn('JSON解析に失敗、デフォルト値を返します:', parseError.message);
                return {
                    title: "経済指標ダッシュボード概要",
                    summary: "主要10カ国の経済指標を分析し、各国の経済状況と世界的なトレンドを可視化しています。",
                    keyFindings: [
                        "各国の経済指標データを収集・分析",
                        "AI技術を活用した洞察の提供",
                        "リアルタイムでの情報更新"
                    ],
                    methodology: "Gemini AI分析",
                    dataQuality: "World Bank公式データを使用"
                };
            }
            
        } catch (error) {
            console.error(`概要分析の生成に失敗 (リトライ ${i + 1}/${MAX_RETRIES}):`, error);
            if (i < MAX_RETRIES - 1) {
                await new Promise(resolve => setTimeout(resolve, RETRY_DELAY_MS));
            } else {
                return {
                    title: "経済指標ダッシュボード概要",
                    summary: "主要10カ国の経済指標を分析し、各国の経済状況と世界的なトレンドを可視化しています。",
                    keyFindings: [
                        "各国の経済指標データを収集・分析",
                        "AI技術を活用した洞察の提供", 
                        "リアルタイムでの情報更新"
                    ],
                    methodology: "Gemini AI分析",
                    dataQuality: "World Bank公式データを使用"
                };
            }
        }
    }
}

/**
 * 国別分析を生成
 */
async function generateCountryAnalysis(countryData, countryCode) {
    for (let i = 0; i < MAX_RETRIES; i++) {
        try {
            const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
            
            // 最新年のデータを抽出
            const latestData = {};
            countryData.data.forEach(item => {
                if (!latestData[item.indicatorCode] || latestData[item.indicatorCode].year < item.year) {
                    latestData[item.indicatorCode] = item;
                }
            });
            
            const prompt = `
${countryData.name}の経済データを分析してください。

最新データ（利用可能な最新年）:
${Object.values(latestData).map(item => 
    `- ${item.indicator}: ${item.value.toLocaleString()} ${item.unit} (${item.year}年)`
).join('\n')}

過去10年間のトレンド分析も含めて、以下のJSON形式で回答してください:
{
  "country": "${countryData.name}",
  "countryCode": "${countryCode}",
  "economicOverview": "経済状況の概要（150文字程度）",
  "strengths": ["強み1", "強み2"],
  "challenges": ["課題1", "課題2"],
  "trends": {
    "gdp": "GDP関連のトレンド分析",
    "employment": "雇用関連のトレンド分析",
    "inflation": "インフレ関連のトレンド分析"
  },
  "outlook": "今後の見通し（100文字程度）"
}
`;

            const result = await model.generateContent(prompt);
            const response = await result.response;
            const text = response.text();
            
            // JSONの抽出を改善
            let jsonText = text;
            if (text.includes('```json')) {
                const jsonMatch = text.match(/```json\s*([\s\S]*?)\s*```/);
                if (jsonMatch) {
                    jsonText = jsonMatch[1];
                }
            } else if (text.includes('```')) {
                const jsonMatch = text.match(/```\s*([\s\S]*?)\s*```/);
                if (jsonMatch) {
                    jsonText = jsonMatch[1];
                }
            }
            
            try {
                return JSON.parse(jsonText);
            } catch (parseError) {
                console.warn(`${countryData.name}のJSON解析に失敗:`, parseError.message);
                return {
                    country: countryData.name,
                    countryCode: countryCode,
                    economicOverview: `${countryData.name}の経済指標データを分析し、最新の経済状況をお伝えします。`,
                    strengths: ["安定した経済基盤", "多様な産業構造"],
                    challenges: ["人口動態の変化", "グローバル競争の激化"],
                    trends: {
                        gdp: "GDP関連の長期トレンドを分析中",
                        employment: "雇用市場の動向を監視中", 
                        inflation: "物価動向を継続的に追跡中"
                    },
                    outlook: "継続的な経済成長と安定性を期待"
                };
            }
            
        } catch (error) {
            console.error(`${countryData.name}の分析に失敗 (リトライ ${i + 1}/${MAX_RETRIES}):`, error);
            if (i < MAX_RETRIES - 1) {
                await new Promise(resolve => setTimeout(resolve, RETRY_DELAY_MS));
            } else {
                return {
                    country: countryData.name,
                    countryCode: countryCode,
                    economicOverview: `${countryData.name}の経済指標データを分析し、最新の経済状況をお伝えします。`,
                    strengths: ["安定した経済基盤", "多様な産業構造"],
                    challenges: ["人口動態の変化", "グローバル競争の激化"],
                    trends: {
                        gdp: "GDP関連の長期トレンドを分析中",
                        employment: "雇用市場の動向を監視中",
                        inflation: "物価動向を継続的に追跡中"
                    },
                    outlook: "継続的な経済成長と安定性を期待"
                };
            }
        }
    }
}

/**
 * 指標別比較分析を生成
 */
async function generateIndicatorComparison(indicatorData, indicatorCode) {
    for (let i = 0; i < MAX_RETRIES; i++) {
        try {
            const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
            
            // 最新年のデータを国別に整理
            const latestByCountry = {};
            indicatorData.data.forEach(item => {
                if (!latestByCountry[item.countryCode] || latestByCountry[item.countryCode].year < item.year) {
                    latestByCountry[item.countryCode] = item;
                }
            });
            
            const prompt = `
「${indicatorData.name}」について、主要国の比較分析を行ってください。

最新データ:
${Object.values(latestByCountry).map(item => 
    `- ${item.country}: ${item.value.toLocaleString()} ${item.unit} (${item.year}年)`
).join('\n')}

以下のJSON形式で回答してください:
{
  "indicator": "${indicatorData.name}",
  "indicatorCode": "${indicatorCode}",
  "analysis": "指標の国際比較分析（200文字程度）",
  "ranking": [
    {"country": "国名", "value": 数値, "rank": 順位}
  ],
  "insights": [
    "洞察1",
    "洞察2",
    "洞察3"
  ],
  "globalTrends": "世界的なトレンドについて"
}
`;

            const result = await model.generateContent(prompt);
            const response = await result.response;
            const text = response.text();
            
            // JSONの抽出を改善
            let jsonText = text;
            if (text.includes('```json')) {
                const jsonMatch = text.match(/```json\s*([\s\S]*?)\s*```/);
                if (jsonMatch) {
                    jsonText = jsonMatch[1];
                }
            } else if (text.includes('```')) {
                const jsonMatch = text.match(/```\s*([\s\S]*?)\s*```/);
                if (jsonMatch) {
                    jsonText = jsonMatch[1];
                }
            }
            
            try {
                return JSON.parse(jsonText);
            } catch (parseError) {
                console.warn(`${indicatorData.name}のJSON解析に失敗:`, parseError.message);
                return {
                    indicator: indicatorData.name,
                    indicatorCode: indicatorCode,
                    analysis: `${indicatorData.name}の国際比較分析により、各国の経済状況の違いと共通点を明らかにします。`,
                    ranking: [],
                    insights: [
                        "各国間での指標値の差異を確認",
                        "地域的な経済トレンドの特徴を分析",
                        "グローバルな経済動向への影響を評価"
                    ],
                    globalTrends: "世界経済の動向と各国への影響を継続的に監視中"
                };
            }
            
        } catch (error) {
            console.error(`${indicatorData.name}の比較分析に失敗 (リトライ ${i + 1}/${MAX_RETRIES}):`, error);
            if (i < MAX_RETRIES - 1) {
                await new Promise(resolve => setTimeout(resolve, RETRY_DELAY_MS));
            } else {
                return {
                    indicator: indicatorData.name,
                    indicatorCode: indicatorCode,
                    analysis: `${indicatorData.name}の国際比較分析により、各国の経済状況の違いと共通点を明らかにします。`,
                    ranking: [],
                    insights: [
                        "各国間での指標値の差異を確認",
                        "地域的な経済トレンドの特徴を分析",
                        "グローバルな経済動向への影響を評価"
                    ],
                    globalTrends: "世界経済の動向と各国への影響を継続的に監視中"
                };
            }
        }
    }
}

/**
 * 分析結果をファイルに保存
 */
async function saveAnalysis(analysis, filename) {
    try {
        const dataDir = path.join(__dirname, '..', 'public');
        
        // dataディレクトリが存在しない場合は作成
        try {
            await fs.access(dataDir);
        } catch (error) {
            await fs.mkdir(dataDir, { recursive: true });
            console.log('📁 dataディレクトリを作成しました');
        }
        
        const filePath = path.join(dataDir, filename);
        
        await fs.writeFile(filePath, JSON.stringify(analysis, null, 2), 'utf8');
        console.log(`💾 分析結果を保存しました: ${filename}`);
        
    } catch (error) {
        console.error(`❌ 分析結果の保存に失敗: ${filename}`, error);
        throw error;
    }
}

/**
 * メイン分析関数
 */
async function analyzeData(economicData) {
    try {
        console.log('🤖 Gemini AI分析開始...');
        
        // Gemini AIを初期化
        initializeGemini();
        
        const analysis = {
            overview: null,
            countries: {},
            indicators: {},
            generatedAt: new Date().toISOString()
        };
        
        // 1. 概要分析
        console.log('  📊 概要分析を生成中...');
        analysis.overview = await generateOverviewAnalysis(economicData);
        
        // 2. 国別分析
        console.log('  🌍 国別分析を生成中...');
        for (const [countryCode, countryData] of Object.entries(economicData.byCountry)) {
            console.log(`    🏛️ ${countryData.name} を分析中...`);
            analysis.countries[countryCode] = await generateCountryAnalysis(countryData, countryCode);
            
            // API制限を考慮して待機
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
        
        // 3. 指標別比較分析
        console.log('  📈 指標別比較分析を生成中...');
        for (const [indicatorCode, indicatorData] of Object.entries(economicData.byIndicator)) {
            console.log(`    📊 ${indicatorData.name} を分析中...`);
            analysis.indicators[indicatorCode] = await generateIndicatorComparison(indicatorData, indicatorCode);
            
            // API制限を考慮して待機
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
        
        // 世界経済総括分析をanalysisオブジェクトに追加
        analysis.globalEconomicSummary = await generateGlobalEconomicSummary(analysis.indicators, Math.max(...Object.values(economicData.byCountry)
            .flatMap(country => country.data)
            .map(d => d.year)));
        
        // 分析結果を保存
        await saveAnalysis(analysis, 'ai-analysis.json');
        
        console.log('✅ AI分析完了');
        return analysis;
        
    } catch (error) {
        console.error('❌ AI分析でエラーが発生:', error);
        throw error;
    }
}

// メイン実行部分
async function main() {
    try {
        // 環境変数を読み込み
        require('dotenv').config();
        
        // 経済データファイルのパスを確認
        const dataPath = path.join(__dirname, '..', 'data', 'economic-data.json');
        
        // ファイルの存在確認
        try {
            await fs.access(dataPath);
        } catch (accessError) {
            console.error('❌ 経済データファイルが見つかりません:', dataPath);
            console.error('💡 data-collector.jsが正常に実行されているか確認してください');
            
            // データディレクトリの存在確認
            const dataDir = path.join(__dirname, '..', 'data');
            try {
                const files = await fs.readdir(dataDir);
                console.log('📁 dataディレクトリの内容:', files);
            } catch (dirError) {
                console.error('❌ dataディレクトリが存在しません:', dirError.message);
            }
            
            process.exit(1);
        }
        
        // 経済データを読み込み
        console.log('📖 経済データを読み込み中:', dataPath);
        const economicDataRaw = await fs.readFile(dataPath, 'utf8');
        
        // JSONの妥当性確認
        let economicData;
        try {
            economicData = JSON.parse(economicDataRaw);
        } catch (parseError) {
            console.error('❌ 経済データファイルのJSON形式が無効です:', parseError.message);
            process.exit(1);
        }
        
        // データの基本構造確認
        if (!economicData || typeof economicData !== 'object') {
            console.error('❌ 経済データの形式が無効です');
            process.exit(1);
        }
        
        console.log('✅ 経済データの読み込み完了');
        console.log('📊 データ概要:', {
            countries: economicData.summary?.countries?.length || 0,
            indicators: economicData.summary?.indicators?.length || 0,
            totalRecords: economicData.summary?.totalRecords || 0
        });
        
        // AI分析を実行
        await analyzeData(economicData);
        
    } catch (error) {
        console.error('❌ メイン処理でエラーが発生:', error);
        process.exit(1);
    }
}

// スクリプトが直接実行された場合のみmain関数を実行
if (require.main === module) {
    main();
}

/**
 * 世界経済情勢を含む指標別総括分析を生成
 */
async function generateGlobalEconomicSummary(indicatorAnalysis, latestYear) {
    for (let i = 0; i < MAX_RETRIES; i++) {
        try {
            const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
            
            // 指標分析結果から有効なデータを抽出
            const validAnalyses = Object.entries(indicatorAnalysis)
                .filter(([code, analysis]) => analysis && analysis.analysis)
                .map(([code, analysis]) => `${analysis.indicator}: ${analysis.analysis}`)
                .join('\n\n');
            
            if (!validAnalyses) {
                return `${latestYear}年の指標分析データが不足しているため、詳細な総括分析を生成できませんでした。`;
            }
            
            const prompt = `
あなたは経済アナリストです。${latestYear}年の世界経済情勢を踏まえて、以下の指標分析に対する総括を提供してください。

指標分析結果:
${validAnalyses}

${latestYear}年の主要な世界経済動向を考慮して、以下の要素を含む総括分析を200-300文字で提供してください:
- ${latestYear}年の主要な世界経済イベント（インフレ、金利政策、地政学的リスクなど）
- 上記指標分析結果と世界経済情勢の関連性
- 今後の展望

簡潔で分かりやすい日本語で回答してください。
`;

            const result = await model.generateContent(prompt);
            const response = await result.response;
            return response.text().trim();
            
        } catch (error) {
            console.error(`世界経済総括分析に失敗 (リトライ ${i + 1}/${MAX_RETRIES}):`, error.message);
            if (i === MAX_RETRIES - 1) {
                return `${latestYear}年の世界経済動向を踏まえた総括分析の生成に失敗しました。`;
            }
            // 指数バックオフで待機
            await new Promise(resolve => setTimeout(resolve, Math.pow(2, i) * 1000));
        }
    }
}

module.exports = {
    analyzeData,
    generateGlobalEconomicSummary
};


