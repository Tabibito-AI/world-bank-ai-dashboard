/**
 * メインエントリーポイント
 * 全体のワークフローを制御
 */

require('dotenv').config();
const dataCollector = require('./data-collector');
const geminiAnalyzer = require('./gemini-analyzer');
const dashboardGenerator = require('./dashboard-generator');

async function main() {
    try {
        console.log('🚀 World Bank Dashboard 更新開始...');
        
        // 1. データ収集
        console.log('📊 World Bank APIからデータを取得中...');
        const economicData = await dataCollector.collectData();
        
        // 2. AI分析
        console.log('🤖 Gemini AIでデータを分析中...');
        const analysis = await geminiAnalyzer.analyzeData(economicData);
        
        // 3. 世界経済総括分析
        console.log('🌍 世界経済総括分析を生成中...');
        const latestYear = Math.max(...Object.values(economicData.byCountry)
            .flatMap(country => country.data)
            .map(d => d.year));
        analysis.globalEconomicSummary = await geminiAnalyzer.generateGlobalEconomicSummary(analysis.indicators, latestYear);
        
        // 4. ダッシュボード生成
        console.log('🎨 ダッシュボードを生成中...');
        await dashboardGenerator.generateDashboard(economicData, analysis);
        
        console.log('✅ ダッシュボード更新完了！');
        
    } catch (error) {
        console.error('❌ エラーが発生しました:', error);
        process.exit(1);
    }
}

// スクリプトが直接実行された場合のみmain関数を実行
if (require.main === module) {
    main();
}

module.exports = { main };

