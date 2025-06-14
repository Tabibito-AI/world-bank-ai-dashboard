/**
 * データ収集スクリプトのテスト実行
 */

require('dotenv').config();
const dataCollector = require('./src/data-collector');

async function testDataCollection() {
    try {
        console.log('🧪 データ収集のテスト実行...');
        const data = await dataCollector.collectData();
        console.log('✅ テスト完了');
        console.log('📊 取得データ概要:');
        console.log(`  - 国数: ${Object.keys(data.byCountry).length}`);
        console.log(`  - 指標数: ${Object.keys(data.byIndicator).length}`);
        console.log(`  - 総レコード数: ${data.summary.totalRecords}`);
        console.log(`  - 期間: ${data.summary.yearRange.min}-${data.summary.yearRange.max}`);
    } catch (error) {
        console.error('❌ テスト失敗:', error);
    }
}

testDataCollection();

