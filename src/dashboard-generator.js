/**
 * HTMLダッシュボードを生成するモジュール
 */

require('dotenv').config();
const fs = require('fs').promises;
const path = require('path');

/**
 * HTMLダッシュボードを生成
 */
async function generateDashboard(economicData, analysis) {
    try {
        console.log('🎨 HTMLダッシュボードを生成中...');
        
        // HTMLファイルを生成
        await generateHTML(economicData, analysis);
        
        // CSSファイルを生成
        await generateCSS();
        
        // JavaScriptファイルを生成
        await generateJS(economicData, analysis);
        
        console.log('✅ ダッシュボード生成完了');
        
    } catch (error) {
        console.error('❌ ダッシュボード生成でエラーが発生:', error);
        throw error;
    }
}

/**
 * HTMLファイルを生成
 */
async function generateHTML(economicData, analysis) {
    const html = `<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>World Bank Economic Dashboard</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/date-fns@2.29.3/index.min.js"></script>
</head>
<body>
    <div class="container">
        <!-- ヘッダー -->
        <header class="header">
            <div class="header-content">
                <h1 class="title">
                    <span class="title-icon">📊</span>
                    World Bank Economic Dashboard
                </h1>
                <p class="subtitle">主要10カ国の経済指標分析 - AI powered by Gemini</p>
                <div class="last-updated">
                    最終更新: <span id="lastUpdated">${new Date().toLocaleString('ja-JP')}</span>
                </div>
            </div>
        </header>

        <!-- 概要セクション -->
        <section class="overview-section">
            <div class="overview-card">
                <h2>📈 概要</h2>
                <div class="overview-content">
                    <p class="overview-text" id="overviewText">
                        ${analysis?.overview?.summary || 'データを読み込み中...'}
                    </p>
                    <div class="key-findings">
                        <h3>主要な発見</h3>
                        <ul id="keyFindings">
                            ${analysis?.overview?.keyFindings?.map(finding => 
                                `<li>${finding}</li>`
                            ).join('') || '<li>分析中...</li>'}
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <!-- 国別分析セクション -->
        <section class="countries-section">
            <h2>🌍 国別分析</h2>
            <div class="countries-grid" id="countriesGrid">
                <!-- 国別カードはJavaScriptで動的生成 -->
            </div>
        </section>

        <!-- 指標比較セクション -->
        <section class="indicators-section">
            <h2>📊 指標別比較</h2>
            <div class="indicators-tabs">
                <div class="tab-buttons" id="indicatorTabs">
                    <!-- タブボタンはJavaScriptで動的生成 -->
                </div>
                <div class="tab-content" id="indicatorContent">
                    <!-- タブコンテンツはJavaScriptで動的生成 -->
                </div>
            </div>
        </section>

        <!-- チャートセクション -->
        <section class="charts-section">
            <h2>📈 データ可視化</h2>
            <div class="charts-grid">
                <div class="chart-card">
                    <h3>GDP比較（最新年）</h3>
                    <canvas id="gdpChart"></canvas>
                </div>
                <div class="chart-card">
                    <h3>GDP成長率トレンド</h3>
                    <canvas id="gdpGrowthChart"></canvas>
                </div>
                <div class="chart-card">
                    <h3>失業率比較</h3>
                    <canvas id="unemploymentChart"></canvas>
                </div>
                <div class="chart-card">
                    <h3>一人当たりGDP比較</h3>
                    <canvas id="gdpPerCapitaChart"></canvas>
                </div>
                <div class="chart-card">
                    <h3>インフレ率トレンド</h3>
                    <canvas id="inflationChart"></canvas>
                </div>
                <div class="chart-card">
                    <h3>貿易トレンド</h3>
                    <canvas id="tradeChart"></canvas>
                </div>
                <div class="chart-card">
                    <h3>総人口トレンド</h3>
                    <canvas id="populationChart"></canvas>
                </div>
                <div class="chart-card">
                    <h3>外国直接投資トレンド</h3>
                    <canvas id="fdiChart"></canvas>
                </div>
            </div>
        </section>

        <!-- データテーブルセクション -->
        <section class="data-section">
            <h2>📋 詳細データ</h2>
            <div class="data-controls">
                <select id="countrySelect">
                    <option value="">国を選択</option>
                    ${Object.entries(economicData?.byCountry || {}).map(([code, data]) => 
                        `<option value="${code}">${data.name}</option>`
                    ).join('')}
                </select>
                <select id="indicatorSelect">
                    <option value="">指標を選択</option>
                    ${Object.entries(economicData?.byIndicator || {}).map(([code, data]) => 
                        `<option value="${code}">${data.name}</option>`
                    ).join('')}
                </select>
            </div>
            <div class="data-table-container">
                <table id="dataTable" class="data-table">
                    <thead>
                        <tr>
                            <th>年</th>
                            <th>国</th>
                            <th>指標</th>
                            <th>値</th>
                            <th>単位</th>
                        </tr>
                    </thead>
                    <tbody id="dataTableBody">
                        <!-- データはJavaScriptで動的生成 -->
                    </tbody>
                </table>
            </div>
        </section>

        <!-- フッター -->
        <footer class="footer">
            <div class="footer-content">
                <p>
                    データソース: <a href="https://data.worldbank.org/" target="_blank">World Bank Open Data</a> | 
                    AI分析: <a href="https://ai.google.dev/" target="_blank">Google Gemini</a> | 
                    更新: GitHub Actions
                </p>
                <p class="footer-note">
                    このダッシュボードは自動更新されます。最新のデータと分析をお楽しみください。
                </p>
            </div>
        </footer>
    </div>

    <script src="script.js"></script>
</body>
</html>`;

    const publicDir = path.join(__dirname, '..', 'public');
    
    // publicディレクトリが存在しない場合は作成
    try {
        await fs.access(publicDir);
    } catch (error) {
        await fs.mkdir(publicDir, { recursive: true });
        console.log('📁 publicディレクトリを作成しました');
    }
    
    const filePath = path.join(publicDir, 'index.html');
    
    await fs.writeFile(filePath, html, 'utf8');
    console.log('💾 HTMLファイルを生成しました: index.html');
}

/**
 * CSSファイルを生成
 */
async function generateCSS() {
    const css = `/* World Bank Economic Dashboard Styles */

/* リセットとベース */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: #333;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

/* ヘッダー */
.header {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    padding: 30px;
    margin-bottom: 30px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    text-align: center;
}

.title {
    font-size: 2.5rem;
    font-weight: 700;
    color: #2c3e50;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
}

.title-icon {
    font-size: 3rem;
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
}

.subtitle {
    font-size: 1.2rem;
    color: #7f8c8d;
    margin-bottom: 15px;
}

.last-updated {
    font-size: 0.9rem;
    color: #95a5a6;
    padding: 8px 16px;
    background: rgba(52, 152, 219, 0.1);
    border-radius: 20px;
    display: inline-block;
}

/* セクション共通 */
section {
    margin-bottom: 40px;
}

section h2 {
    font-size: 1.8rem;
    color: #2c3e50;
    margin-bottom: 20px;
    padding: 15px 20px;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 15px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

/* 概要セクション */
.overview-card {
    background: rgba(255, 255, 255, 0.95);
    border-radius: 20px;
    padding: 30px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
}

.overview-text {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 25px;
    color: #34495e;
}

.key-findings h3 {
    color: #e74c3c;
    margin-bottom: 15px;
    font-size: 1.2rem;
}

.key-findings ul {
    list-style: none;
}

.key-findings li {
    padding: 10px 0;
    padding-left: 25px;
    position: relative;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.key-findings li:before {
    content: "💡";
    position: absolute;
    left: 0;
    top: 10px;
}

/* 国別分析グリッド */
.countries-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 20px;
}

.country-card {
    background: rgba(255, 255, 255, 0.95);
    border-radius: 15px;
    padding: 25px;
    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    backdrop-filter: blur(10px);
}

.country-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

.country-header {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 20px;
}

.country-flag {
    font-size: 2rem;
}

.country-name {
    font-size: 1.4rem;
    font-weight: 600;
    color: #2c3e50;
}

.country-overview {
    font-size: 1rem;
    line-height: 1.6;
    color: #555;
    margin-bottom: 20px;
}

.country-metrics {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
}

.metric-item {
    text-align: center;
    padding: 15px;
    background: rgba(52, 152, 219, 0.1);
    border-radius: 10px;
}

.metric-label {
    font-size: 0.9rem;
    color: #7f8c8d;
    margin-bottom: 5px;
}

.metric-value {
    font-size: 1.2rem;
    font-weight: 600;
    color: #2c3e50;
}

/* AI分析セクション */
.ai-analysis-section {
    background: rgba(52, 152, 219, 0.05);
    border-radius: 10px;
    padding: 20px;
    margin: 20px 0;
    border-left: 4px solid #3498db;
}

.ai-analysis-section h4 {
    color: #2c3e50;
    margin-bottom: 15px;
    font-size: 1.1rem;
}

.ai-analysis-content {
    font-size: 1rem;
    line-height: 1.6;
    color: #34495e;
    margin-bottom: 15px;
}

.ai-analysis-trends {
    font-size: 0.95rem;
    color: #7f8c8d;
    font-style: italic;
}

.ai-analysis-trends strong {
    color: #2c3e50;
}

/* 指標タブ */
.indicators-tabs {
    background: rgba(255, 255, 255, 0.95);
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
}

.tab-buttons {
    display: flex;
    flex-wrap: wrap;
    background: rgba(52, 152, 219, 0.1);
}

.tab-button {
    flex: 1;
    min-width: 200px;
    padding: 15px 20px;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 500;
    color: #7f8c8d;
    transition: all 0.3s ease;
    border-bottom: 3px solid transparent;
}

.tab-button:hover {
    background: rgba(52, 152, 219, 0.2);
    color: #2c3e50;
}

.tab-button.active {
    background: rgba(52, 152, 219, 0.3);
    color: #2c3e50;
    border-bottom-color: #3498db;
}

.tab-content {
    padding: 30px;
}

.tab-panel {
    display: none;
}

.tab-panel.active {
    display: block;
}

/* チャートセクション */
.charts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 25px;
}

.chart-card {
    background: rgba(255, 255, 255, 0.95);
    border-radius: 15px;
    padding: 25px;
    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
}

.chart-card h3 {
    color: #2c3e50;
    margin-bottom: 20px;
    text-align: center;
    font-size: 1.2rem;
}

.chart-card canvas {
    max-height: 300px;
}

/* データテーブル */
.data-controls {
    display: flex;
    gap: 15px;
    margin-bottom: 20px;
    flex-wrap: wrap;
}

.data-controls select {
    padding: 12px 16px;
    border: 2px solid #ddd;
    border-radius: 10px;
    font-size: 1rem;
    background: white;
    cursor: pointer;
    transition: border-color 0.3s ease;
}

.data-controls select:focus {
    outline: none;
    border-color: #3498db;
}

.data-table-container {
    background: rgba(255, 255, 255, 0.95);
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
}

.data-table {
    width: 100%;
    border-collapse: collapse;
}

.data-table th {
    background: rgba(52, 152, 219, 0.2);
    padding: 15px;
    text-align: left;
    font-weight: 600;
    color: #2c3e50;
    border-bottom: 2px solid #3498db;
}

.data-table td {
    padding: 12px 15px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.data-table tbody tr:hover {
    background: rgba(52, 152, 219, 0.05);
}

/* フッター */
.footer {
    background: rgba(44, 62, 80, 0.9);
    color: white;
    border-radius: 15px;
    padding: 25px;
    text-align: center;
    margin-top: 40px;
    backdrop-filter: blur(10px);
}

.footer a {
    color: #3498db;
    text-decoration: none;
}

.footer a:hover {
    text-decoration: underline;
}

.footer-note {
    margin-top: 10px;
    font-size: 0.9rem;
    opacity: 0.8;
}

/* レスポンシブデザイン */
@media (max-width: 768px) {
    .container {
        padding: 15px;
    }
    
    .title {
        font-size: 2rem;
        flex-direction: column;
        gap: 10px;
    }
    
    .countries-grid {
        grid-template-columns: 1fr;
    }
    
    .charts-grid {
        grid-template-columns: 1fr;
    }
    
    .tab-buttons {
        flex-direction: column;
    }
    
    .data-controls {
        flex-direction: column;
    }
    
    .data-table {
        font-size: 0.9rem;
    }
    
    .country-metrics {
        grid-template-columns: 1fr;
    }
}

/* アニメーション */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.country-card,
.chart-card,
.overview-card {
    animation: fadeInUp 0.6s ease-out;
}

/* ローディング状態 */
.loading {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    font-size: 1.2rem;
    color: #7f8c8d;
}

.loading:before {
    content: "⏳";
    margin-right: 10px;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}`;

    const publicDir = path.join(__dirname, '..', 'public');
    
    // publicディレクトリが存在しない場合は作成
    try {
        await fs.access(publicDir);
    } catch (error) {
        await fs.mkdir(publicDir, { recursive: true });
        console.log('📁 publicディレクトリを作成しました');
    }
    
    const filePath = path.join(publicDir, 'style.css');
    
    await fs.writeFile(filePath, css, 'utf8');
    console.log('💾 CSSファイルを生成しました: style.css');
}

/**
 * JavaScriptファイルを生成
 */
async function generateJS(economicData, analysis) {
    const js = `// World Bank Economic Dashboard JavaScript

// グローバル変数
let economicData = null;
let analysis = null;
let charts = {};

// 国旗の絵文字マッピング
const countryFlags = {
    'JPN': '🇯🇵',
    'USA': '🇺🇸', 
    'CHN': '🇨🇳',
    'DEU': '🇩🇪',
    'GBR': '🇬🇧',
    'FRA': '🇫🇷',
    'IND': '🇮🇳',
    'BRA': '🇧🇷',
    'CAN': '🇨🇦',
    'AUS': '🇦🇺',
    'IDN': '🇮🇩',
    'PER': '🇵🇪'
};

// 初期化
document.addEventListener('DOMContentLoaded', async function() {
    console.log('🚀 ダッシュボード初期化開始...');
    
    try {
        await loadData();
        initializeComponents();
        renderCountries();
        renderIndicatorTabs();
        renderCharts();
        setupEventListeners();
        updateDataTable(); // データテーブルの初期表示
        
        console.log('✅ ダッシュボード初期化完了');
    } catch (error) {
        console.error('❌ 初期化エラー:', error);
        showError('ダッシュボードの初期化に失敗しました。');
    }
});

// データ読み込み
async function loadData() {
    try {
        // 経済データ（埋め        economicData = ${JSON.stringify(economicData, null, 2)};
        analysis = ${JSON.stringify(analysis, null, 2)};     
        console.log('📊 データ読み込み完了');
    } catch (error) {
        console.error('❌ データ読み込みエラー:', error);
        throw error;
    }
}

// コンポーネント初期化
function initializeComponents() {
    updateLastUpdateTime();
}

// 最終更新時刻を更新
function updateLastUpdateTime() {
    const now = new Date();
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'Asia/Tokyo'
    };
    
    const formattedTime = now.toLocaleDateString('ja-JP', options);
    const lastUpdateElement = document.getElementById('lastUpdated');
    if (lastUpdateElement) {
        lastUpdateElement.textContent = formattedTime;
    }
}

// 国別カードをレンダリング
function renderCountries() {
    if (!economicData || !economicData.byCountry) return;
    
    const countriesGrid = document.getElementById('countriesGrid');
    if (!countriesGrid) return;
    
    const countries = Object.entries(economicData.byCountry);
    
    countriesGrid.innerHTML = countries.map(([code, countryData]) => {
        const flag = countryFlags[code] || '🏳️';
        const latestGDP = getLatestValue(countryData.data, 'NY.GDP.MKTP.CD');
        const latestGrowth = getLatestValue(countryData.data, 'NY.GDP.MKTP.KD.ZG');
        const latestUnemployment = getLatestValue(countryData.data, 'SL.UEM.TOTL.ZS');
        const latestInflation = getLatestValue(countryData.data, 'FP.CPI.TOTL.ZG');
        
        return \`
            <div class="country-card">
                <div class="country-header">
                    <span class="country-flag">\${flag}</span>
                    <h3 class="country-name">\${countryData.name}</h3>
                </div>
                <div class="country-overview">
                    \${analysis?.countries?.[code]?.economicOverview || '分析中...'}
                </div>
                <div class="country-metrics">
                    <div class="metric-item">
                        <div class="metric-label">GDP</div>
                        <div class="metric-value">\${formatValue(latestGDP?.value, 'trillion')}</div>
                    </div>
                    <div class="metric-item">
                        <div class="metric-label">成長率</div>
                        <div class="metric-value">\${formatValue(latestGrowth?.value, 'percent')}</div>
                    </div>
                    <div class="metric-item">
                        <div class="metric-label">失業率</div>
                        <div class="metric-value">\${formatValue(latestUnemployment?.value, 'percent')}</div>
                    </div>
                    <div class="metric-item">
                        <div class="metric-label">インフレ率</div>
                        <div class="metric-value">\${formatValue(latestInflation?.value, 'percent')}</div>
                    </div>
                </div>
            </div>
        \`;
    }).join('');
}

// 指標タブをレンダリング
function renderIndicatorTabs() {
    if (!economicData || !economicData.byIndicator) return;
    
    const tabButtons = document.getElementById('indicatorTabs');
    const tabContent = document.getElementById('indicatorContent');
    
    if (!tabButtons || !tabContent) return;
    
    const indicators = Object.entries(economicData.byIndicator);
    
    // タブボタンを生成
    tabButtons.innerHTML = indicators.map(([code, indicatorData], index) => \`
        <button class="tab-button \${index === 0 ? 'active' : ''}" 
                onclick="switchTab('\${code}')" 
                data-indicator="\${code}">
            \${indicatorData.name}
        </button>
    \`).join('');
    
    // タブコンテンツを生成
    tabContent.innerHTML = indicators.map(([code, indicatorData], index) => \`
        <div class="tab-panel \${index === 0 ? 'active' : ''}" id="tab-\${code}">
            <h3>\${indicatorData.name}</h3>
            <div class="indicator-summary">
                \${analysis?.indicators?.[code]?.analysis || '分析中...'}
            </div>
            <div class="ai-analysis-section" id="ai-analysis-\${code}">
                <h4>🤖 AI分析コメント</h4>
                <div class="ai-analysis-content">
                    \${analysis?.indicators?.[code]?.insights?.join('<br>') || 'AI分析を読み込み中...'}
                </div>
                <div class="ai-analysis-trends">
                    <strong>世界的なトレンド:</strong> \${analysis?.indicators?.[code]?.globalTrends || '分析中...'}
                </div>
            </div>
            <div class="indicator-chart">
                <canvas id="chart-\${code}" width="400" height="200"></canvas>
            </div>
        </div>
    \`).join('');
}

// チャートをレンダリング
function renderCharts() {
    if (!economicData) return;
    
    // 各チャートを初期化
    initializeGDPChart();
    initializeGDPGrowthChart();
    initializeUnemploymentChart();
    initializeGDPPerCapitaChart();
    initializeInflationChart();
    initializeTradeChart();
    initializePopulationChart();
    initializeFDIChart();
}

// GDP比較チャート
function initializeGDPChart() {
    const ctx = document.getElementById('gdpChart');
    if (!ctx || !economicData) return;
    
    const countries = Object.keys(economicData.byCountry);
    const latestYear = Math.max(...Object.values(economicData.byCountry)
        .flatMap(country => country.data
            .filter(d => d.indicatorCode === 'NY.GDP.MKTP.CD')
            .map(d => d.year)
        )
    );
    
    const gdpData = countries.map(code => {
        const countryData = economicData.byCountry[code];
        const gdpRecord = countryData.data.find(d => 
            d.indicatorCode === 'NY.GDP.MKTP.CD' && d.year === latestYear
        );
        return {
            country: countryData.name,
            value: gdpRecord ? gdpRecord.value / 1e12 : 0 // 兆ドル単位
        };
    }).sort((a, b) => b.value - a.value);
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: gdpData.map(d => d.country),
            datasets: [{
                label: 'GDP（兆ドル）',
                data: gdpData.map(d => d.value),
                backgroundColor: [
                    '#3498db', '#e74c3c', '#f39c12', '#9b59b6', '#1abc9c',
                    '#34495e', '#e67e22', '#95a5a6', '#2ecc71', '#f1c40f'
                ]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: { display: true, text: 'GDP（兆ドル）' }
                }
            }
        }
    });
}

// GDP成長率トレンドチャート
function initializeGDPGrowthChart() {
    const ctx = document.getElementById('gdpGrowthChart');
    if (!ctx || !economicData) return;
    
    const countries = ['JPN', 'USA', 'CHN', 'DEU', 'GBR'];
    const years = [2019, 2020, 2021, 2022, 2023];
    
    const datasets = countries.map((code, index) => {
        const countryData = economicData.byCountry[code];
        if (!countryData) return null;
        
        const data = years.map(year => {
            const record = countryData.data.find(d => 
                d.indicatorCode === 'NY.GDP.MKTP.KD.ZG' && d.year === year
            );
            return record ? record.value : null;
        });
        
        const colors = ['#3498db', '#e74c3c', '#f39c12', '#9b59b6', '#1abc9c'];
        
        return {
            label: countryData.name,
            data: data,
            borderColor: colors[index],
            backgroundColor: colors[index] + '20',
            borderWidth: 2,
            fill: false
        };
    }).filter(Boolean);
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: years,
            datasets: datasets
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    title: { display: true, text: 'GDP成長率（%）' }
                }
            }
        }
    });
}

// 失業率比較チャート
function initializeUnemploymentChart() {
    const ctx = document.getElementById('unemploymentChart');
    if (!ctx || !economicData) return;
    
    const countries = Object.keys(economicData.byCountry);
    const latestYear = 2023;
    
    const unemploymentData = countries.map(code => {
        const countryData = economicData.byCountry[code];
        const record = countryData.data.find(d => 
            d.indicatorCode === 'SL.UEM.TOTL.ZS' && d.year === latestYear
        );
        return {
            country: countryData.name,
            value: record ? record.value : null
        };
    }).filter(d => d.value !== null).sort((a, b) => a.value - b.value);
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: unemploymentData.map(d => d.country),
            datasets: [{
                label: '失業率（%）',
                data: unemploymentData.map(d => d.value),
                backgroundColor: '#e74c3c'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: { display: true, text: '失業率（%）' }
                }
            }
        }
    });
}

// 一人当たりGDP比較チャート
function initializeGDPPerCapitaChart() {
    const ctx = document.getElementById('gdpPerCapitaChart');
    if (!ctx || !economicData) return;
    
    const countries = Object.keys(economicData.byCountry);
    const latestYear = 2023;
    
    const gdpPerCapitaData = countries.map(code => {
        const countryData = economicData.byCountry[code];
        const record = countryData.data.find(d => 
            d.indicatorCode === 'NY.GDP.PCAP.CD' && d.year === latestYear
        );
        return {
            country: countryData.name,
            value: record ? record.value : null
        };
    }).filter(d => d.value !== null).sort((a, b) => b.value - a.value);
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: gdpPerCapitaData.map(d => d.country),
            datasets: [{
                label: '一人当たりGDP（ドル）',
                data: gdpPerCapitaData.map(d => d.value),
                backgroundColor: '#1abc9c'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: { display: true, text: '一人当たりGDP（ドル）' }
                }
            }
        }
    });
}

// インフレ率トレンドチャート
function initializeInflationChart() {
    const ctx = document.getElementById('inflationChart');
    if (!ctx || !economicData) return;
    
    const countries = ['JPN', 'USA', 'CHN', 'DEU', 'GBR'];
    const years = [2019, 2020, 2021, 2022, 2023];
    
    const datasets = countries.map((code, index) => {
        const countryData = economicData.byCountry[code];
        if (!countryData) return null;
        
        const data = years.map(year => {
            const record = countryData.data.find(d => 
                d.indicatorCode === 'FP.CPI.TOTL.ZG' && d.year === year
            );
            return record ? record.value : null;
        });
        
        const colors = ['#3498db', '#e74c3c', '#f39c12', '#9b59b6', '#1abc9c'];
        
        return {
            label: countryData.name,
            data: data,
            borderColor: colors[index],
            backgroundColor: colors[index] + '20',
            borderWidth: 2,
            fill: false
        };
    }).filter(Boolean);
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: years,
            datasets: datasets
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    title: { display: true, text: 'インフレ率（%）' }
                }
            }
        }
    });
}

// 貿易トレンドチャート
function initializeTradeChart() {
    const ctx = document.getElementById('tradeChart');
    if (!ctx || !economicData) return;
    
    const countries = ['JPN', 'USA', 'CHN', 'DEU', 'GBR'];
    const years = [2019, 2020, 2021, 2022, 2023];
    
    const datasets = countries.map((code, index) => {
        const countryData = economicData.byCountry[code];
        if (!countryData) return null;
        
        const data = years.map(year => {
            const record = countryData.data.find(d => 
                d.indicatorCode === 'NE.TRD.GNFS.ZS' && d.year === year
            );
            return record ? record.value : null;
        });
        
        const colors = ['#3498db', '#e74c3c', '#f39c12', '#9b59b6', '#1abc9c'];
        
        return {
            label: countryData.name,
            data: data,
            borderColor: colors[index],
            backgroundColor: colors[index] + '20',
            borderWidth: 2,
            fill: false
        };
    }).filter(Boolean);
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: years,
            datasets: datasets
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    title: { display: true, text: '貿易（GDP比%）' }
                }
            }
        }
    });
}

// 総人口トレンドチャート
function initializePopulationChart() {
    const ctx = document.getElementById('populationChart');
    if (!ctx || !economicData) return;
    
    const countries = ['JPN', 'USA', 'CHN', 'DEU', 'GBR'];
    const years = [2019, 2020, 2021, 2022, 2023];
    
    const datasets = countries.map((code, index) => {
        const countryData = economicData.byCountry[code];
        if (!countryData) return null;
        
        const data = years.map(year => {
            const record = countryData.data.find(d => 
                d.indicatorCode === 'SP.POP.TOTL' && d.year === year
            );
            return record ? record.value / 1e6 : null; // 百万人単位
        });
        
        const colors = ['#3498db', '#e74c3c', '#f39c12', '#9b59b6', '#1abc9c'];
        
        return {
            label: countryData.name,
            data: data,
            borderColor: colors[index],
            backgroundColor: colors[index] + '20',
            borderWidth: 2,
            fill: false
        };
    }).filter(Boolean);
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: years,
            datasets: datasets
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    title: { display: true, text: '総人口（百万人）' }
                }
            }
        }
    });
}

// 外国直接投資トレンドチャート
function initializeFDIChart() {
    const ctx = document.getElementById('fdiChart');
    if (!ctx || !economicData) return;
    
    const countries = ['JPN', 'USA', 'CHN', 'DEU', 'GBR'];
    const years = [2019, 2020, 2021, 2022, 2023];
    
    const datasets = countries.map((code, index) => {
        const countryData = economicData.byCountry[code];
        if (!countryData) return null;
        
        const data = years.map(year => {
            const record = countryData.data.find(d => 
                d.indicatorCode === 'BX.KLT.DINV.CD.WD' && d.year === year
            );
            return record ? record.value : null;
        });
        
        const colors = ['#3498db', '#e74c3c', '#f39c12', '#9b59b6', '#1abc9c'];
        
        return {
            label: countryData.name,
            data: data,
            borderColor: colors[index],
            backgroundColor: colors[index] + '20',
            borderWidth: 2,
            fill: false
        };
    }).filter(Boolean);
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: years,
            datasets: datasets
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    title: { display: true, text: '外国直接投資（GDP比%）' }
                }
            }
        }
    });
}

// イベントリスナーを設定
function setupEventListeners() {
    // 国選択
    const countrySelect = document.getElementById('countrySelect');
    if (countrySelect) {
        countrySelect.addEventListener('change', updateDataTable);
    }
    
    // 指標選択
    const indicatorSelect = document.getElementById('indicatorSelect');
    if (indicatorSelect) {
        indicatorSelect.addEventListener('change', updateDataTable);
    }
}

// タブ切り替え
function switchTab(indicatorCode) {
    // すべてのタブボタンとパネルを非アクティブに
    document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach(panel => panel.classList.remove('active'));
    
    // 選択されたタブをアクティブに
    document.querySelector(\`[data-indicator="\${indicatorCode}"]\`).classList.add('active');
    document.getElementById(\`tab-\${indicatorCode}\`).classList.add('active');
}

// データテーブルを更新
function updateDataTable() {
    const countrySelect = document.getElementById('countrySelect');
    const indicatorSelect = document.getElementById('indicatorSelect');
    const tableBody = document.getElementById('dataTableBody');
    
    if (!countrySelect || !indicatorSelect || !tableBody || !economicData) return;
    
    const selectedCountry = countrySelect.value;
    const selectedIndicator = indicatorSelect.value;
    
    let data = [];
    
    if (selectedCountry && selectedIndicator) {
        // 特定の国と指標
        const countryData = economicData.byCountry[selectedCountry];
        if (countryData) {
            data = countryData.data.filter(d => d.indicatorCode === selectedIndicator);
        }
    } else if (selectedCountry) {
        // 特定の国のすべての指標
        const countryData = economicData.byCountry[selectedCountry];
        if (countryData) {
            data = countryData.data;
        }
    } else if (selectedIndicator) {
        // 特定の指標のすべての国
        const indicatorData = economicData.byIndicator[selectedIndicator];
        if (indicatorData) {
            data = indicatorData.data;
        }
    } else {
        // すべてのデータ（最新年のみ）
        data = Object.values(economicData.byCountry)
            .flatMap(country => country.data)
            .filter(d => d.year === 2023)
            .slice(0, 50); // 表示制限
    }
    
    tableBody.innerHTML = data
        .sort((a, b) => b.year - a.year)
        .map(record => \`
            <tr>
                <td>\${record.year}</td>
                <td>\${record.country}</td>
                <td>\${record.indicator}</td>
                <td>\${formatValue(record.value, getValueType(record.indicatorCode))}</td>
                <td>\${record.unit}</td>
            </tr>
        \`).join('');
}

// ユーティリティ関数
function getLatestValue(data, indicatorCode) {
    return data
        .filter(d => d.indicatorCode === indicatorCode)
        .sort((a, b) => b.year - a.year)[0];
}

function formatValue(value, type = 'number') {
    if (value === null || value === undefined) return 'N/A';
    
    switch (type) {
        case 'trillion':
            return (value / 1e12).toFixed(1) + '兆ドル';
        case 'billion':
            return (value / 1e9).toFixed(1) + '億ドル';
        case 'million':
            return (value / 1e6).toFixed(1) + '百万';
        case 'percent':
            return value.toFixed(1) + '%';
        case 'currency':
            return '$' + value.toLocaleString();
        default:
            return value.toLocaleString();
    }
}

function getValueType(indicatorCode) {
    const types = {
        'NY.GDP.MKTP.CD': 'trillion',
        'NY.GDP.MKTP.KD.ZG': 'percent',
        'SL.UEM.TOTL.ZS': 'percent',
        'FP.CPI.TOTL.ZG': 'percent',
        'NY.GDP.PCAP.CD': 'currency',
        'NE.TRD.GNFS.ZS': 'percent',
        'GC.DPT.TOTL.GD.ZS': 'percent',
        'SP.POP.TOTL': 'million',
        'BX.KLT.DINV.CD.WD': 'percent'
    };
    return types[indicatorCode] || 'number';
}

function showError(message) {
    console.error(message);
    // エラー表示の実装
}

// グローバル関数として公開
window.switchTab = switchTab;
window.updateDataTable = updateDataTable;`;

    const publicDir = path.join(__dirname, '..', 'public');
    
    // publicディレクトリが存在しない場合は作成
    try {
        await fs.access(publicDir);
    } catch (error) {
        await fs.mkdir(publicDir, { recursive: true });
        console.log('📁 publicディレクトリを作成しました');
    }
    
    const filePath = path.join(publicDir, 'script.js');
    
    await fs.writeFile(filePath, js, 'utf8');
    console.log('💾 JavaScriptファイルを生成しました: script.js');
}


/**
 * データファイルをpublicディレクトリにコピー
 */
async function copyDataFiles() {
    try {
        const dataDir = path.join(__dirname, '..', 'data');
        const publicDir = path.join(__dirname, '..', 'public');
        
        // organized-data.jsonをコピー
        const sourceFile = path.join(dataDir, 'organized-data.json');
        const targetFile = path.join(publicDir, 'organized-data.json');
        
        try {
            await fs.access(sourceFile);
            const data = await fs.readFile(sourceFile, 'utf8');
            await fs.writeFile(targetFile, data, 'utf8');
            console.log('💾 organized-data.jsonをpublicディレクトリにコピーしました');
        } catch (error) {
            console.warn('⚠️ organized-data.jsonが見つかりません:', error.message);
        }
        
    } catch (error) {
        console.error('❌ データファイルのコピーに失敗:', error);
        throw error;
    }
}

/**
 * メイン関数：ダッシュボード生成の実行
 */
async function generateDashboard(economicData, analysis) {
    try {
        console.log('🎨 HTMLダッシュボードを生成中...');
        
        // HTMLファイルを生成
        await generateHTML(economicData, analysis);
        
        // CSSファイルを生成
        await generateCSS();
        
        // JavaScriptファイルを生成
        await generateJS(economicData, analysis);
        
        // データファイルをpublicディレクトリにコピー
        await copyDataFiles();
        
        console.log('✅ ダッシュボード生成完了');
        
    } catch (error) {
        console.error('❌ ダッシュボード生成でエラーが発生:', error);
        throw error;
    }
}

module.exports = {
    generateDashboard
};

