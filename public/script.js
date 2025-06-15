// World Bank Economic Dashboard JavaScript

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
        // 経済データ（埋め込み）
        economicData = {
  "byCountry": {
    "JPN": {
      "name": "日本",
      "data": [
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2006,
          "value": 4601663122649.92,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2007,
          "value": 4579750920354.81,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2008,
          "value": 5106679115127.3,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2009,
          "value": 5289493117993.89,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2010,
          "value": 5759071769013.11,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2011,
          "value": 6233147172341.35,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2012,
          "value": 6272362996105.03,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2013,
          "value": 5212328181166.18,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2014,
          "value": 4896994405353.29,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2015,
          "value": 4444930651964.18,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2016,
          "value": 5003677627544.24,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2017,
          "value": 4930837369151.42,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2018,
          "value": 5040880939324.86,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2019,
          "value": 5117993853016.51,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2020,
          "value": 5055587093501.59,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2021,
          "value": 5034620784584.98,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2022,
          "value": 4256410760723.75,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2023,
          "value": 4204494802431.55,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2006,
          "value": 1.37235012762038,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2007,
          "value": 1.48396941163492,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2008,
          "value": -1.22428900072828,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2009,
          "value": -5.69323635882266,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2010,
          "value": 4.09791791930137,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2011,
          "value": 0.0238095237748297,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2012,
          "value": 1.37475099920874,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2013,
          "value": 2.0051001767726,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2014,
          "value": 0.296205514142628,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2015,
          "value": 1.56062669674904,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2016,
          "value": 0.753826745903538,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2017,
          "value": 1.67533175166503,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2018,
          "value": 0.643391023460339,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2019,
          "value": -0.402169200910933,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2020,
          "value": -4.14711889947692,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2021,
          "value": 2.55932023865617,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2022,
          "value": 0.954736937781391,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2023,
          "value": 1.67901952310368,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2006,
          "value": 4.192,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2007,
          "value": 3.888,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2008,
          "value": 4.002,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2009,
          "value": 5.068,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2010,
          "value": 5.102,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2011,
          "value": 4.55,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2012,
          "value": 4.358,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2013,
          "value": 4.038,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2014,
          "value": 3.589,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2015,
          "value": 3.385,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2016,
          "value": 3.132,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2017,
          "value": 2.822,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2018,
          "value": 2.467,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2019,
          "value": 2.351,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2020,
          "value": 2.809,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2021,
          "value": 2.828,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2022,
          "value": 2.6,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2023,
          "value": 2.6,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2024,
          "value": 2.563,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2006,
          "value": 0.249355116079085,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2007,
          "value": 0.060039454498669,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2008,
          "value": 1.3800788616492,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2009,
          "value": -1.35283672951719,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2010,
          "value": -0.728243207517779,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2011,
          "value": -0.27245561610124,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2012,
          "value": -0.0440645104432602,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2013,
          "value": 0.335037912184741,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2014,
          "value": 2.75922671353253,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2015,
          "value": 0.795279630579839,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2016,
          "value": -0.127258844489754,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2017,
          "value": 0.484199796126385,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2018,
          "value": 0.989094598021848,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2019,
          "value": 0.46877615938395,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2020,
          "value": -0.024995834027731,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2021,
          "value": -0.233352779398264,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2022,
          "value": 2.49770278172255,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2023,
          "value": 3.26813365933163,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2024,
          "value": 2.73853681635241,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2006,
          "value": 35991.546002862,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2007,
          "value": 35779.0245416427,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2008,
          "value": 39876.3039685725,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2009,
          "value": 41308.9968370512,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2010,
          "value": 44968.1562349739,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2011,
          "value": 48760.0789494211,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2012,
          "value": 49145.2804308193,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2013,
          "value": 40898.6478964744,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2014,
          "value": 38475.3952461838,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2015,
          "value": 34960.6393843385,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2016,
          "value": 39375.4731620781,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2017,
          "value": 38834.0529341227,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2018,
          "value": 39751.1330982711,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2019,
          "value": 40415.9567649547,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2020,
          "value": 40040.7655055923,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2021,
          "value": 40058.5373276179,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2022,
          "value": 34017.2718075024,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2023,
          "value": 33766.5268253808,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2006,
          "value": 30.0163760986692,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2007,
          "value": 32.816578051879,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2008,
          "value": 34.1294765412245,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2009,
          "value": 24.3901665338555,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2010,
          "value": 28.4984726938389,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2011,
          "value": 30.1949607286296,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2012,
          "value": 30.4709109171752,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2013,
          "value": 33.9787686509511,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2014,
          "value": 37.4314345686579,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2015,
          "value": 35.4274083544798,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2016,
          "value": 31.3102468455884,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2017,
          "value": 34.4232135721686,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2018,
          "value": 36.609931802107,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2019,
          "value": 35.2164181084145,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2020,
          "value": 31.3257931242986,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2021,
          "value": 36.7714832870467,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2022,
          "value": 46.8437321391913,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2023,
          "value": 45.1626484842154,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2006,
          "value": 127854000,
          "unit": "人"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2007,
          "value": 128001000,
          "unit": "人"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2008,
          "value": 128063000,
          "unit": "人"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2009,
          "value": 128047000,
          "unit": "人"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2010,
          "value": 128070000,
          "unit": "人"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2011,
          "value": 127833000,
          "unit": "人"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2012,
          "value": 127629000,
          "unit": "人"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2013,
          "value": 127445000,
          "unit": "人"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2014,
          "value": 127276000,
          "unit": "人"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2015,
          "value": 127141000,
          "unit": "人"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2016,
          "value": 127076000,
          "unit": "人"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2017,
          "value": 126972000,
          "unit": "人"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2018,
          "value": 126811000,
          "unit": "人"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2019,
          "value": 126633000,
          "unit": "人"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2020,
          "value": 126261000,
          "unit": "人"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2021,
          "value": 125681593,
          "unit": "人"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2022,
          "value": 125124989,
          "unit": "人"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2023,
          "value": 124516650,
          "unit": "人"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2006,
          "value": -2396909736.30508,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2007,
          "value": 21631204435.6847,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2008,
          "value": 24624845329.5648,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2009,
          "value": 12226471578.7439,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2010,
          "value": 7440979284.16286,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2011,
          "value": -850717035.068239,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2012,
          "value": 546962692.190728,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2013,
          "value": 10648441636.2071,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2014,
          "value": 19752249424.0871,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2015,
          "value": 5252218412.39172,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2016,
          "value": 40954181468.5533,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2017,
          "value": 18802251208.1069,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2018,
          "value": 25289367857.8518,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2019,
          "value": 39960544340.0141,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2020,
          "value": 62584719398.0912,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2021,
          "value": 35027163875.7213,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2022,
          "value": 48124316590.0529,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2023,
          "value": 20440829347.4902,
          "unit": "米ドル"
        }
      ]
    },
    "USA": {
      "name": "アメリカ",
      "data": [
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2006,
          "value": 13815583000000,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2007,
          "value": 14474228000000,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2008,
          "value": 14769862000000,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2009,
          "value": 14478067000000,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2010,
          "value": 15048971000000,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2011,
          "value": 15599732000000,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2012,
          "value": 16253970000000,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2013,
          "value": 16880683000000,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2014,
          "value": 17608138000000,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2015,
          "value": 18295019000000,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2016,
          "value": 18804913000000,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2017,
          "value": 19612102000000,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2018,
          "value": 20656516000000,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2019,
          "value": 21539982000000,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2020,
          "value": 21354105000000,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2021,
          "value": 23681171000000,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2022,
          "value": 26006893000000,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2023,
          "value": 27720709000000,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2006,
          "value": 2.78453963938148,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2007,
          "value": 2.00385829825838,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2008,
          "value": 0.113587248258867,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2009,
          "value": -2.57650023426996,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2010,
          "value": 2.6951925838264,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2011,
          "value": 1.56440685438301,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2012,
          "value": 2.28911338767897,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2013,
          "value": 2.11783009919849,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2014,
          "value": 2.52381981441982,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2015,
          "value": 2.94555045455233,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2016,
          "value": 1.81945147474293,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2017,
          "value": 2.45762230322211,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2018,
          "value": 2.96650506916633,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2019,
          "value": 2.58382533018855,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2020,
          "value": -2.16302913866514,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2021,
          "value": 6.05505293304576,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2022,
          "value": 2.51237531983308,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2023,
          "value": 2.88755600906016,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2006,
          "value": 4.623,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2007,
          "value": 4.622,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2008,
          "value": 5.784,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2009,
          "value": 9.254,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2010,
          "value": 9.633,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2011,
          "value": 8.949,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2012,
          "value": 8.069,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2013,
          "value": 7.375,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2014,
          "value": 6.168,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2015,
          "value": 5.28,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2016,
          "value": 4.869,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2017,
          "value": 4.355,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2018,
          "value": 3.896,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2019,
          "value": 3.669,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2020,
          "value": 8.055,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2021,
          "value": 5.349,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2022,
          "value": 3.65,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2023,
          "value": 3.638,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2024,
          "value": 4.106,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2006,
          "value": 3.22594410070404,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2007,
          "value": 2.85267248150138,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2008,
          "value": 3.839100296651,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2009,
          "value": -0.355546266299747,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2010,
          "value": 1.6400434423899,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2011,
          "value": 3.156841568622,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2012,
          "value": 2.06933726526067,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2013,
          "value": 1.46483265562717,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2014,
          "value": 1.62222297740817,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2015,
          "value": 0.118627135552451,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2016,
          "value": 1.26158320570536,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2017,
          "value": 2.13011000365961,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2018,
          "value": 2.44258329692817,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2019,
          "value": 1.81221007526021,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2020,
          "value": 1.23358439630629,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2021,
          "value": 4.69785886363742,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2022,
          "value": 8.00279982052121,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2023,
          "value": 4.11633838374488,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2024,
          "value": 2.94952520485207,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2006,
          "value": 46301.9876485519,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2007,
          "value": 48050.227412195,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2008,
          "value": 48570.0594269601,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2009,
          "value": 47194.9500893872,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2010,
          "value": 48650.6643227232,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2011,
          "value": 50065.9789470675,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2012,
          "value": 51784.4114692048,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2013,
          "value": 53409.7507774372,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2014,
          "value": 55304.3155317137,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2015,
          "value": 57040.2082136605,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2016,
          "value": 58206.6141931844,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2017,
          "value": 60322.2614241747,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2018,
          "value": 63201.0458483771,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2019,
          "value": 65604.6815198734,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2020,
          "value": 64411.3731779373,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2021,
          "value": 71318.3073592183,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2022,
          "value": 78035.1753604212,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2023,
          "value": 82769.4122114216,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2006,
          "value": 26.9752858058903,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2007,
          "value": 28.0120155631098,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2008,
          "value": 29.8677875257061,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2009,
          "value": 24.759527635837,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2010,
          "value": 28.2198829408336,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2011,
          "value": 30.842478575914,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2012,
          "value": 30.681839575193,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2013,
          "value": 29.9413062848227,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2014,
          "value": 29.906569337428,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2015,
          "value": 27.6882139340768,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2016,
          "value": 26.4525977865465,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2017,
          "value": 27.1253382222874,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2018,
          "value": 27.4453591302618,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2019,
          "value": 26.2584806245428,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2020,
          "value": 23.0797778694073,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2021,
          "value": 25.2136560307765,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2022,
          "value": 26.891689830077,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2023,
          "value": 24.8993631439946,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2006,
          "value": 298379912,
          "unit": "人"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2007,
          "value": 301231207,
          "unit": "人"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2008,
          "value": 304093966,
          "unit": "人"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2009,
          "value": 306771529,
          "unit": "人"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2010,
          "value": 309327143,
          "unit": "人"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2011,
          "value": 311583481,
          "unit": "人"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2012,
          "value": 313877662,
          "unit": "人"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2013,
          "value": 316059947,
          "unit": "人"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2014,
          "value": 318386329,
          "unit": "人"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2015,
          "value": 320738994,
          "unit": "人"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2016,
          "value": 323071755,
          "unit": "人"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2017,
          "value": 325122128,
          "unit": "人"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2018,
          "value": 326838199,
          "unit": "人"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2019,
          "value": 328329953,
          "unit": "人"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2020,
          "value": 331526933,
          "unit": "人"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2021,
          "value": 332048977,
          "unit": "人"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2022,
          "value": 333271411,
          "unit": "人"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2023,
          "value": 334914895,
          "unit": "人"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2006,
          "value": 298463000000,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2007,
          "value": 346613000000,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2008,
          "value": 341092000000,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2009,
          "value": 161083000000,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2010,
          "value": 264039000000,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2011,
          "value": 263497000000,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2012,
          "value": 250345000000,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2013,
          "value": 288131000000,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2014,
          "value": 251856000000,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2015,
          "value": 511434000000,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2016,
          "value": 474388000000,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2017,
          "value": 380823000000,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2018,
          "value": 214715000000,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2019,
          "value": 315984000000,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2020,
          "value": 137066000000,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2021,
          "value": 475805000000,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2022,
          "value": 408982000000,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2023,
          "value": 348784000000,
          "unit": "米ドル"
        }
      ]
    },
    "CHN": {
      "name": "中国",
      "data": [
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2006,
          "value": 2752118657184.02,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2007,
          "value": 3550327802998.4,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2008,
          "value": 4594336785737.67,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2009,
          "value": 5101691124285.21,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2010,
          "value": 6087191746679.49,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2011,
          "value": 7551545703440.75,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2012,
          "value": 8532185381680.59,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2013,
          "value": 9570471111831.68,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2014,
          "value": 10475624944355.2,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2015,
          "value": 11061572618578.7,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2016,
          "value": 11233313730348.7,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2017,
          "value": 12310491333980.9,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2018,
          "value": 13894907857880.6,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2019,
          "value": 14279968506271.7,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2020,
          "value": 14687744162801,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2021,
          "value": 17820459508852.2,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2022,
          "value": 17881782683707.3,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2023,
          "value": 17794783039552,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2006,
          "value": 12.7209556654032,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2007,
          "value": 14.2308609331955,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2008,
          "value": 9.65067891939361,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2009,
          "value": 9.39872563259674,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2010,
          "value": 10.6358710644913,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2011,
          "value": 9.55083217877568,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2012,
          "value": 7.86373644862111,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2013,
          "value": 7.76615009773009,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2014,
          "value": 7.42576365632412,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2015,
          "value": 7.04132887873656,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2016,
          "value": 6.84876220495761,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2017,
          "value": 6.94720079331685,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2018,
          "value": 6.7497738324959,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2019,
          "value": 5.95050075367413,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2020,
          "value": 2.23863835634639,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2021,
          "value": 8.44846941687277,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2022,
          "value": 2.95066992959268,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2023,
          "value": 5.24955786387791,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2006,
          "value": 4.43,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2007,
          "value": 4.35,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2008,
          "value": 4.59,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2009,
          "value": 4.72,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2010,
          "value": 4.53,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2011,
          "value": 4.55,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2012,
          "value": 4.58,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2013,
          "value": 4.6,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2014,
          "value": 4.63,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2015,
          "value": 4.65,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2016,
          "value": 4.56,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2017,
          "value": 4.47,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2018,
          "value": 4.31,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2019,
          "value": 4.56,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2020,
          "value": 5,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2021,
          "value": 4.55,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2022,
          "value": 4.98,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2023,
          "value": 4.67,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2024,
          "value": 4.571,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2006,
          "value": 1.6494309945586,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2007,
          "value": 4.81676767378834,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2008,
          "value": 5.92525137041092,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2009,
          "value": -0.728165250932898,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2010,
          "value": 3.17532475269199,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2011,
          "value": 5.55389892257493,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2012,
          "value": 2.61952432645541,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2013,
          "value": 2.62105001748115,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2014,
          "value": 1.92164162788521,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2015,
          "value": 1.43702380935655,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2016,
          "value": 2.00000182191943,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2017,
          "value": 1.59313600071436,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2018,
          "value": 2.07479039965576,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2019,
          "value": 2.89923416358227,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2020,
          "value": 2.41942189457782,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2021,
          "value": 0.981015135544882,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2022,
          "value": 1.97357555739051,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2023,
          "value": 0.234836828893051,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2024,
          "value": 0.218128938439177,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2006,
          "value": 2099.2194300499,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2007,
          "value": 2693.95873160283,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2008,
          "value": 3468.32706307504,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2009,
          "value": 3832.2274569094,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2010,
          "value": 4550.47394356715,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2011,
          "value": 5614.38602225277,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2012,
          "value": 6300.58217951734,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2013,
          "value": 7020.3860742288,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2014,
          "value": 7636.07434020616,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2015,
          "value": 8016.44559489998,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2016,
          "value": 8094.39016735149,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2017,
          "value": 8817.04560829162,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2018,
          "value": 9905.40638304527,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2019,
          "value": 10143.8602206165,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2020,
          "value": 10408.7195541075,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2021,
          "value": 12617.5051041181,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2022,
          "value": 12662.5826712038,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2023,
          "value": 12614.0617416421,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2006,
          "value": 64.4791912001744,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2007,
          "value": 62.1936250851713,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2008,
          "value": 57.6123422415661,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2009,
          "value": 45.1849762070479,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2010,
          "value": 50.7170776627003,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2011,
          "value": 50.7409045864209,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2012,
          "value": 48.2675223674033,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2013,
          "value": 46.7443755773553,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2014,
          "value": 44.9052159543496,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2015,
          "value": 39.4641693353018,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2016,
          "value": 36.8944150170789,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2017,
          "value": 37.6324132404263,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2018,
          "value": 37.5657841021374,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2019,
          "value": 35.8900960342425,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2020,
          "value": 34.7542956996066,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2021,
          "value": 37.3019908656372,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2022,
          "value": 38.3514820836722,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2023,
          "value": 37.3167713639344,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2006,
          "value": 1311020000,
          "unit": "人"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2007,
          "value": 1317885000,
          "unit": "人"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2008,
          "value": 1324655000,
          "unit": "人"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2009,
          "value": 1331260000,
          "unit": "人"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2010,
          "value": 1337705000,
          "unit": "人"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2011,
          "value": 1345035000,
          "unit": "人"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2012,
          "value": 1354190000,
          "unit": "人"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2013,
          "value": 1363240000,
          "unit": "人"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2014,
          "value": 1371860000,
          "unit": "人"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2015,
          "value": 1379860000,
          "unit": "人"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2016,
          "value": 1387790000,
          "unit": "人"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2017,
          "value": 1396215000,
          "unit": "人"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2018,
          "value": 1402760000,
          "unit": "人"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2019,
          "value": 1407745000,
          "unit": "人"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2020,
          "value": 1411100000,
          "unit": "人"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2021,
          "value": 1412360000,
          "unit": "人"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2022,
          "value": 1412175000,
          "unit": "人"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2023,
          "value": 1410710000,
          "unit": "人"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2006,
          "value": 124082035618.506,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2007,
          "value": 156249335203.202,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2008,
          "value": 171534650311.569,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2009,
          "value": 131057052869.5,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2010,
          "value": 243703434558.178,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2011,
          "value": 280072219149.935,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2012,
          "value": 241213868161.42,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2013,
          "value": 290928431467.003,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2014,
          "value": 268097181064.335,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2015,
          "value": 242489331627.399,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2016,
          "value": 174749584584.051,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2017,
          "value": 166083755721.649,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2018,
          "value": 235365050036.341,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2019,
          "value": 187169822364.755,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2020,
          "value": 253095616058.58,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2021,
          "value": 344074977062.48,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2022,
          "value": 190203789092.51,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2023,
          "value": 42727679407.24,
          "unit": "米ドル"
        }
      ]
    },
    "DEU": {
      "name": "ドイツ",
      "data": [
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2006,
          "value": 3046308753670.58,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2007,
          "value": 3484056680854.91,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2008,
          "value": 3808786022312.5,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2009,
          "value": 3479800820863.28,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2010,
          "value": 3468154343000.01,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2011,
          "value": 3824828563521.41,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2012,
          "value": 3597896500945.31,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2013,
          "value": 3808086291482.36,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2014,
          "value": 3965800686309.79,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2015,
          "value": 3423568450957.03,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2016,
          "value": 3537784107980.55,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2017,
          "value": 3763092263752.95,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2018,
          "value": 4052008447223.53,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2019,
          "value": 3957208055215.68,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2020,
          "value": 3940142541354.1,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2021,
          "value": 4348297440387.53,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2022,
          "value": 4163596357879.39,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2023,
          "value": 4525703903627.53,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2006,
          "value": 3.85573615221429,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2007,
          "value": 2.89010718962479,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2008,
          "value": 0.910403196145353,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2009,
          "value": -5.54516453771706,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2010,
          "value": 4.14676754532437,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2011,
          "value": 3.75796886586348,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2012,
          "value": 0.474291305855544,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2013,
          "value": 0.386224576109953,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2014,
          "value": 2.16949892879079,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2015,
          "value": 1.65271977174628,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2016,
          "value": 2.29471067684281,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2017,
          "value": 2.71602451931592,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2018,
          "value": 1.11644310926225,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2019,
          "value": 0.987893349167578,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2020,
          "value": -4.09513749064689,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2021,
          "value": 3.66999986156735,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2022,
          "value": 1.36973105536585,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2023,
          "value": -0.266438410090913,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2006,
          "value": 10.277,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2007,
          "value": 8.732,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2008,
          "value": 7.508,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2009,
          "value": 7.88,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2010,
          "value": 7.043,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2011,
          "value": 5.967,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2012,
          "value": 5.372,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2013,
          "value": 5.316,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2014,
          "value": 4.979,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2015,
          "value": 4.612,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2016,
          "value": 4.104,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2017,
          "value": 3.781,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2018,
          "value": 3.384,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2019,
          "value": 3.163,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2020,
          "value": 3.881,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2021,
          "value": 3.594,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2022,
          "value": 3.12,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2023,
          "value": 3.068,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2024,
          "value": 3.406,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2006,
          "value": 1.57742642840563,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2007,
          "value": 2.29834400700951,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2008,
          "value": 2.62837981637219,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2009,
          "value": 0.312739007368447,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2010,
          "value": 1.1038103778926,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2011,
          "value": 2.07517283735874,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2012,
          "value": 2.00848884782956,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2013,
          "value": 1.50472330251876,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2014,
          "value": 0.906794000434246,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2015,
          "value": 0.514426137125456,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2016,
          "value": 0.491747008445174,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2017,
          "value": 1.50949485109628,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2018,
          "value": 1.73216879766942,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2019,
          "value": 1.44565976888253,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2020,
          "value": 0.144877925813982,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2021,
          "value": 3.06666666666673,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2022,
          "value": 6.87257438551097,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2023,
          "value": 5.94643667725823,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2024,
          "value": 2.2564981433876,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2006,
          "value": 36980.3349948954,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2007,
          "value": 42350.9217211489,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2008,
          "value": 46386.3295924799,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2009,
          "value": 42487.2137101496,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2010,
          "value": 42409.9356994694,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2011,
          "value": 47646.582043143,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2012,
          "value": 44735.5882319701,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2013,
          "value": 47220.0102098851,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2014,
          "value": 48971.0824722599,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2015,
          "value": 41911.0109851054,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2016,
          "value": 42961.0356905775,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2017,
          "value": 45526.5999576533,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2018,
          "value": 48874.8595028454,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2019,
          "value": 47623.8656074829,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2020,
          "value": 47379.765194548,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2021,
          "value": 52265.6541620571,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2022,
          "value": 49686.1154582583,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2023,
          "value": 54343.2265084958,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2006,
          "value": 72.7591934646234,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2007,
          "value": 74.8838416816798,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2008,
          "value": 76.1014102128448,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2009,
          "value": 66.1152685310257,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2010,
          "value": 73.8626407651201,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2011,
          "value": 78.4073134605377,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2012,
          "value": 79.3004877909427,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2013,
          "value": 77.5643815741748,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2014,
          "value": 76.8303312709159,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2015,
          "value": 77.791356764377,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2016,
          "value": 75.9845875141969,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2017,
          "value": 77.5666369468435,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2018,
          "value": 79.227659692288,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2019,
          "value": 79.1337471144706,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2020,
          "value": 72.9932572283324,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2021,
          "value": 80.15661805106,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2022,
          "value": 89.0641273695259,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2023,
          "value": 82.7991064495705,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2006,
          "value": 82376451,
          "unit": "人"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2007,
          "value": 82266372,
          "unit": "人"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2008,
          "value": 82110097,
          "unit": "人"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2009,
          "value": 81902307,
          "unit": "人"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2010,
          "value": 81776930,
          "unit": "人"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2011,
          "value": 80274983,
          "unit": "人"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2012,
          "value": 80425823,
          "unit": "人"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2013,
          "value": 80645605,
          "unit": "人"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2014,
          "value": 80982500,
          "unit": "人"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2015,
          "value": 81686611,
          "unit": "人"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2016,
          "value": 82348669,
          "unit": "人"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2017,
          "value": 82657002,
          "unit": "人"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2018,
          "value": 82905782,
          "unit": "人"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2019,
          "value": 83092962,
          "unit": "人"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2020,
          "value": 83160871,
          "unit": "人"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2021,
          "value": 83196078,
          "unit": "人"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2022,
          "value": 83797985,
          "unit": "人"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2023,
          "value": 83280000,
          "unit": "人"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2006,
          "value": 87444159239.0628,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2007,
          "value": 50847183837.0148,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2008,
          "value": 30954735498.025,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2009,
          "value": 56701916794.97,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2010,
          "value": 86037502102.1644,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2011,
          "value": 97535403952.5493,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2012,
          "value": 65443087632.2705,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2013,
          "value": 67199694458.9368,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2014,
          "value": 17356720097.6155,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2015,
          "value": 62418993509.249,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2016,
          "value": 58132711370.7803,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2017,
          "value": 108786501529.106,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2018,
          "value": 162250938125.842,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2019,
          "value": 75463438450.8917,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2020,
          "value": 176781024357.228,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2021,
          "value": 102148693815.945,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2022,
          "value": 62728998895.9956,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2023,
          "value": 19515498091.7767,
          "unit": "米ドル"
        }
      ]
    },
    "GBR": {
      "name": "イギリス",
      "data": [
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2006,
          "value": 2708441582336.71,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2007,
          "value": 3090510204081.63,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2008,
          "value": 2929411764705.88,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2009,
          "value": 2412840006231.5,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2010,
          "value": 2485482596184.71,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2011,
          "value": 2663805834828.07,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2012,
          "value": 2707089726614.64,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2013,
          "value": 2784853502534.29,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2014,
          "value": 3064708247921.43,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2015,
          "value": 2927911140916.73,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2016,
          "value": 2689106566899.61,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2017,
          "value": 2680148052335.3,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2018,
          "value": 2871340347581.79,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2019,
          "value": 2851407164907.81,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2020,
          "value": 2696778386607.65,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2021,
          "value": 3143323050707.26,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2022,
          "value": 3114042471144.39,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2023,
          "value": 3380854520809.54,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2006,
          "value": 2.38069402487066,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2007,
          "value": 2.62488001971251,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2008,
          "value": -0.248797298132246,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2009,
          "value": -4.6205537195686,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2010,
          "value": 2.2333151263108,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2011,
          "value": 1.13836234744893,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2012,
          "value": 1.50899837441014,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2013,
          "value": 1.79992149362663,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2014,
          "value": 3.1946373128021,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2015,
          "value": 2.22288844908437,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2016,
          "value": 1.92171007763831,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2017,
          "value": 2.65650489309972,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2018,
          "value": 1.40519026609273,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2019,
          "value": 1.62447515947532,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2020,
          "value": -10.2969188737567,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2021,
          "value": 8.5759509048565,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2022,
          "value": 4.83908514714403,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2023,
          "value": 0.339966158003463,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2006,
          "value": 5.411,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2007,
          "value": 5.342,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2008,
          "value": 5.705,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2009,
          "value": 7.627,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2010,
          "value": 7.924,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2011,
          "value": 8.169,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2012,
          "value": 8.25,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2013,
          "value": 7.704,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2014,
          "value": 6.363,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2015,
          "value": 5.517,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2016,
          "value": 4.867,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2017,
          "value": 4.452,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2018,
          "value": 4.12,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2019,
          "value": 3.613,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2020,
          "value": 4.472,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2021,
          "value": 4.826,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2022,
          "value": 3.73,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2023,
          "value": 3.984,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2024,
          "value": 4.111,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2006,
          "value": 2.4556616643929,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2007,
          "value": 2.38656150773327,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2008,
          "value": 3.52140856342539,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2009,
          "value": 1.96173173560109,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2010,
          "value": 2.49265472467065,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2011,
          "value": 3.8561124468282,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2012,
          "value": 2.5732347965453,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2013,
          "value": 2.29166666666659,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2014,
          "value": 1.45112016293279,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2015,
          "value": 0.36804684232536,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2016,
          "value": 1.0084173681141,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2017,
          "value": 2.55775577557747,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2018,
          "value": 2.29283990345938,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2019,
          "value": 1.73810460086513,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2020,
          "value": 0.989486703772491,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2021,
          "value": 2.51837109614213,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2022,
          "value": 7.92204883147902,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2023,
          "value": 6.79396706793963,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2024,
          "value": 3.2715729463592,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2006,
          "value": 44512.4590296865,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2007,
          "value": 50397.6854954706,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2008,
          "value": 47396.1202078484,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2009,
          "value": 38744.131693043,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2010,
          "value": 39598.957119545,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2011,
          "value": 42109.6418795749,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2012,
          "value": 42497.3404974322,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2013,
          "value": 43426.2981405143,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2014,
          "value": 47439.6165895125,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2015,
          "value": 44964.3911437292,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2016,
          "value": 40985.2351382417,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2017,
          "value": 40572.1214823783,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2018,
          "value": 43203.8141057739,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2019,
          "value": 42662.5353740311,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2020,
          "value": 40201.6812422928,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2021,
          "value": 46896.8662432834,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2022,
          "value": 45935.9276473925,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2023,
          "value": 49463.8554617343,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2006,
          "value": 56.9144274808123,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2007,
          "value": 52.9643534370859,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2008,
          "value": 56.6986069277108,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2009,
          "value": 55.004384033595,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2010,
          "value": 59.2727749722888,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2011,
          "value": 63.5654009707745,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2012,
          "value": 62.2259827334183,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2013,
          "value": 61.9991119149908,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2014,
          "value": 59.0948041195932,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2015,
          "value": 57.2035496863734,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2016,
          "value": 59.7003984143761,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2017,
          "value": 63.1216500310687,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2018,
          "value": 64.542648250433,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2019,
          "value": 64.6651336372235,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2020,
          "value": 58.7811375973028,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2021,
          "value": 58.5845366237858,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2022,
          "value": 68.8805301397863,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2023,
          "value": 63.878877761965,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2006,
          "value": 60846820,
          "unit": "人"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2007,
          "value": 61322463,
          "unit": "人"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2008,
          "value": 61806995,
          "unit": "人"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2009,
          "value": 62276270,
          "unit": "人"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2010,
          "value": 62766365,
          "unit": "人"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2011,
          "value": 63258810,
          "unit": "人"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2012,
          "value": 63700215,
          "unit": "人"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2013,
          "value": 64128273,
          "unit": "人"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2014,
          "value": 64602298,
          "unit": "人"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2015,
          "value": 65116219,
          "unit": "人"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2016,
          "value": 65611593,
          "unit": "人"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2017,
          "value": 66058859,
          "unit": "人"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2018,
          "value": 66460344,
          "unit": "人"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2019,
          "value": 66836327,
          "unit": "人"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2020,
          "value": 67081234,
          "unit": "人"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2021,
          "value": 67026292,
          "unit": "人"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2022,
          "value": 67791000,
          "unit": "人"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2023,
          "value": 68350000,
          "unit": "人"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2006,
          "value": 203636431868.244,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2007,
          "value": 209514959646.908,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2008,
          "value": 253454117907.322,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2009,
          "value": 14547108445.0914,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2010,
          "value": 66734551294.0913,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2011,
          "value": 27012050072.3452,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2012,
          "value": 46750789727.7264,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2013,
          "value": 54473175400.2415,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2014,
          "value": 58890445252.714,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2015,
          "value": 45333483122.0899,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2016,
          "value": 324813224213.021,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2017,
          "value": 125358809934.121,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2018,
          "value": -25055440306.9073,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2019,
          "value": 19790761929.1276,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2020,
          "value": 157185559299.99,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2021,
          "value": 5055966700.84887,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2022,
          "value": 44897919400.6377,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2023,
          "value": -89474261725.1577,
          "unit": "米ドル"
        }
      ]
    },
    "FRA": {
      "name": "フランス",
      "data": [
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2006,
          "value": 2317861544690.82,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2007,
          "value": 2655816911866.56,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2008,
          "value": 2926802941585.86,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2009,
          "value": 2700075882518.98,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2010,
          "value": 2646230027988.34,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2011,
          "value": 2870408553990.28,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2012,
          "value": 2683007095787.23,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2013,
          "value": 2816077607875.26,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2014,
          "value": 2861236112552.42,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2015,
          "value": 2442483452642.5,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2016,
          "value": 2470407619777.13,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2017,
          "value": 2588868323334.71,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2018,
          "value": 2781576320884.39,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2019,
          "value": 2722793515171.76,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2020,
          "value": 2647926055110.05,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2021,
          "value": 2966433692008.09,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2022,
          "value": 2796302210398.84,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2023,
          "value": 3051831611384.76,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2006,
          "value": 2.7140645179325,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2007,
          "value": 2.53048186196499,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2008,
          "value": 0.380171425522363,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2009,
          "value": -2.82455150288962,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2010,
          "value": 2.00032472699981,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2011,
          "value": 2.43757656877079,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2012,
          "value": 0.183835271019575,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2013,
          "value": 0.781756445913402,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2014,
          "value": 0.997832937998666,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2015,
          "value": 1.06675473488909,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2016,
          "value": 0.860031082016107,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2017,
          "value": 2.08361485062076,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2018,
          "value": 1.64590872932709,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2019,
          "value": 2.02744647639635,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2020,
          "value": -7.44064593044142,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2021,
          "value": 6.88233786590355,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2022,
          "value": 2.57084047443969,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2023,
          "value": 0.936487502671483,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2006,
          "value": 8.832,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2007,
          "value": 8.008,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2008,
          "value": 7.386,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2009,
          "value": 9.122,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2010,
          "value": 9.279,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2011,
          "value": 9.228,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2012,
          "value": 9.841,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2013,
          "value": 9.913,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2014,
          "value": 10.273,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2015,
          "value": 10.354,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2016,
          "value": 10.057,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2017,
          "value": 9.409,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2018,
          "value": 9.018,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2019,
          "value": 8.415,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2020,
          "value": 8.009,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2021,
          "value": 7.874,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2022,
          "value": 7.308,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2023,
          "value": 7.335,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2024,
          "value": 7.37,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2006,
          "value": 1.67512449608723,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2007,
          "value": 1.4879980595386,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2008,
          "value": 2.81286194914787,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2009,
          "value": 0.0876204781574552,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2010,
          "value": 1.53112270420926,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2011,
          "value": 2.11159795174994,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2012,
          "value": 1.9541953161351,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2013,
          "value": 0.863715497861805,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2014,
          "value": 0.50775882293799,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2015,
          "value": 0.0375143805125182,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2016,
          "value": 0.18333486112386,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2017,
          "value": 1.03228275064662,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2018,
          "value": 1.85081508315502,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2019,
          "value": 1.10825492288294,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2020,
          "value": 0.476498852725066,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2021,
          "value": 1.64233141038385,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2022,
          "value": 5.22236748369735,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2023,
          "value": 4.87835726508441,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2024,
          "value": 1.99904942291463,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2006,
          "value": 36431.5658906555,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2007,
          "value": 41486.1907828787,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2008,
          "value": 45464.8181385158,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2009,
          "value": 41728.0884164132,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2010,
          "value": 40694.8211697025,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2011,
          "value": 43929.7840873812,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2012,
          "value": 40863.5814412333,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2013,
          "value": 42669.1795111893,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2014,
          "value": 43148.0459288416,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2015,
          "value": 36702.4323733379,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2016,
          "value": 37024.2157133669,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2017,
          "value": 38687.1626407164,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2018,
          "value": 41418.1766484844,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2019,
          "value": 40408.2848574751,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2020,
          "value": 39169.8606000707,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2021,
          "value": 43725.0999521245,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2022,
          "value": 41082.8119320747,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2023,
          "value": 44690.9345395117,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2006,
          "value": 57.8692775292673,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2007,
          "value": 58.1525611309659,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2008,
          "value": 59.1797928411748,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2009,
          "value": 52.1991123027613,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2010,
          "value": 56.587555247796,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2011,
          "value": 60.6056354816406,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2012,
          "value": 61.6589570771102,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2013,
          "value": 61.8192338733962,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2014,
          "value": 62.1992669379507,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2015,
          "value": 63.5046871956484,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2016,
          "value": 63.3427564383351,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2017,
          "value": 65.3958481559711,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2018,
          "value": 66.8022607812266,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2019,
          "value": 66.4289771741449,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2020,
          "value": 58.8388907240647,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2021,
          "value": 63.788482630872,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2022,
          "value": 75.7901436111221,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2023,
          "value": 70.5595547931931,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2006,
          "value": 63622342,
          "unit": "人"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2007,
          "value": 64016890,
          "unit": "人"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2008,
          "value": 64375116,
          "unit": "人"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2009,
          "value": 64706436,
          "unit": "人"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2010,
          "value": 65026211,
          "unit": "人"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2011,
          "value": 65340830,
          "unit": "人"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2012,
          "value": 65657659,
          "unit": "人"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2013,
          "value": 65997932,
          "unit": "人"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2014,
          "value": 66312067,
          "unit": "人"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2015,
          "value": 66548272,
          "unit": "人"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2016,
          "value": 66724104,
          "unit": "人"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2017,
          "value": 66918020,
          "unit": "人"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2018,
          "value": 67158348,
          "unit": "人"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2019,
          "value": 67382061,
          "unit": "人"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2020,
          "value": 67601110,
          "unit": "人"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2021,
          "value": 67842811,
          "unit": "人"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2022,
          "value": 68065015,
          "unit": "人"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2023,
          "value": 68287487,
          "unit": "人"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2006,
          "value": 78957053786.1349,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2007,
          "value": 83777598395.4499,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2008,
          "value": 67997446904.9733,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2009,
          "value": 18422928061.9131,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2010,
          "value": 38889439213.3126,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2011,
          "value": 44205811126.5792,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2012,
          "value": 32944663317.8722,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2013,
          "value": 33461592993.8228,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2014,
          "value": 5063648998.48312,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2015,
          "value": 43133325471.3567,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2016,
          "value": 35623357280.0881,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2017,
          "value": 43733253503.8812,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2018,
          "value": 77493098693.2378,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2019,
          "value": 53499337503.7413,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2020,
          "value": 19368829836.4654,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2021,
          "value": 98012545019.1631,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2022,
          "value": 109574904464.643,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2023,
          "value": 8803377981.64788,
          "unit": "米ドル"
        }
      ]
    },
    "IND": {
      "name": "インド",
      "data": [
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2006,
          "value": 940259888787.721,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2007,
          "value": 1216736438834.96,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2008,
          "value": 1198895139005.92,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2009,
          "value": 1341888016994.9,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2010,
          "value": 1675615519484.96,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2011,
          "value": 1823051829894.55,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2012,
          "value": 1827637590410.41,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2013,
          "value": 1856721507621.58,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2014,
          "value": 2039126479154.52,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2015,
          "value": 2103588360044.94,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2016,
          "value": 2294796885663.16,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2017,
          "value": 2651474262755.45,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2018,
          "value": 2702929641648.74,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2019,
          "value": 2835606256558.19,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2020,
          "value": 2674851578587.27,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2021,
          "value": 3167270623260.47,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2022,
          "value": 3353470496886.33,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2023,
          "value": 3567551674623.01,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2006,
          "value": 8.06073257166651,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2007,
          "value": 7.6608150670107,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2008,
          "value": 3.08669805921981,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2009,
          "value": 7.86188883286074,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2010,
          "value": 8.49758470221235,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2011,
          "value": 5.24131619937695,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2012,
          "value": 5.45638755166587,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2013,
          "value": 6.38610640094825,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2014,
          "value": 7.41022760508854,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2015,
          "value": 7.99625378571471,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2016,
          "value": 8.25630550179086,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2017,
          "value": 6.79538341897911,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2018,
          "value": 6.45385134497769,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2019,
          "value": 3.87143694070356,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2020,
          "value": -5.77772470686801,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2021,
          "value": 9.68959249192875,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2022,
          "value": 6.9870393257555,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2023,
          "value": 8.1529363109041,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2006,
          "value": 7.552,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2007,
          "value": 7.561,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2008,
          "value": 7.656,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2009,
          "value": 7.664,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2010,
          "value": 7.652,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2011,
          "value": 7.616,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2012,
          "value": 7.666,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2013,
          "value": 7.711,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2014,
          "value": 7.674,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2015,
          "value": 7.631,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2016,
          "value": 7.601,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2017,
          "value": 7.618,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2018,
          "value": 7.652,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2019,
          "value": 6.51,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2020,
          "value": 7.859,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2021,
          "value": 6.38,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2022,
          "value": 4.822,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2023,
          "value": 4.172,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2024,
          "value": 4.202,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2006,
          "value": 5.79652337561634,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2007,
          "value": 6.37288135593231,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2008,
          "value": 8.34926704907581,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2009,
          "value": 10.8823529411764,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2010,
          "value": 11.9893899204244,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2011,
          "value": 8.91179336483371,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2012,
          "value": 9.47899691419801,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2013,
          "value": 10.0178784746102,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2014,
          "value": 6.66565671867899,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2015,
          "value": 4.90697344127256,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2016,
          "value": 4.94821634062141,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2017,
          "value": 3.32817337461298,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2018,
          "value": 3.9388264669163,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2019,
          "value": 3.72950573539129,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2020,
          "value": 6.62343677628535,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2021,
          "value": 5.13140747176369,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2022,
          "value": 6.69903414079852,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2023,
          "value": 5.64914318907925,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2024,
          "value": 4.95303550973656,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2006,
          "value": 801.668353659022,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2007,
          "value": 1021.88707706826,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2008,
          "value": 992.519584923828,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2009,
          "value": 1094.94974598436,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2010,
          "value": 1347.51939071367,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2011,
          "value": 1445.46127486037,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2012,
          "value": 1429.32199520032,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2013,
          "value": 1432.84397512195,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2014,
          "value": 1553.88396075118,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2015,
          "value": 1583.99815907985,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2016,
          "value": 1707.50892912243,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2017,
          "value": 1950.10468280866,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2018,
          "value": 1966.25455171679,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2019,
          "value": 2041.42863698585,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2020,
          "value": 1907.04251637669,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2021,
          "value": 2239.61384367482,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2022,
          "value": 2352.61392452078,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2023,
          "value": 2480.79208721621,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2006,
          "value": 45.7244804992652,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2007,
          "value": 45.686268679348,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2008,
          "value": 53.3682204392226,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2009,
          "value": 46.2728696428837,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2010,
          "value": 49.2552064974161,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2011,
          "value": 55.6238800135298,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2012,
          "value": 55.7937217287511,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2013,
          "value": 53.8441319466777,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2014,
          "value": 48.9221857470669,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2015,
          "value": 41.9229138658647,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2016,
          "value": 40.082485713276,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2017,
          "value": 40.7424969545225,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2018,
          "value": 43.6169693323889,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2019,
          "value": 39.9054035306442,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2020,
          "value": 37.7581053292768,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2021,
          "value": 45.4230887840446,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2022,
          "value": 49.9653199690324,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2023,
          "value": 45.9218502164429,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2006,
          "value": 1172878890,
          "unit": "人"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2007,
          "value": 1190676021,
          "unit": "人"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2008,
          "value": 1207930964,
          "unit": "人"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2009,
          "value": 1225524753,
          "unit": "人"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2010,
          "value": 1243481564,
          "unit": "人"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2011,
          "value": 1261224954,
          "unit": "人"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2012,
          "value": 1278674502,
          "unit": "人"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2013,
          "value": 1295829511,
          "unit": "人"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2014,
          "value": 1312277191,
          "unit": "人"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2015,
          "value": 1328024498,
          "unit": "人"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2016,
          "value": 1343944296,
          "unit": "人"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2017,
          "value": 1359657400,
          "unit": "人"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2018,
          "value": 1374659064,
          "unit": "人"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2019,
          "value": 1389030312,
          "unit": "人"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2020,
          "value": 1402617695,
          "unit": "人"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2021,
          "value": 1414203896,
          "unit": "人"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2022,
          "value": 1425423212,
          "unit": "人"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2023,
          "value": 1438069596,
          "unit": "人"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2006,
          "value": 20029119267.1396,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2007,
          "value": 25227740886.6819,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2008,
          "value": 43406277075.8109,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2009,
          "value": 35581372929.6642,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2010,
          "value": 27396885033.7839,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2011,
          "value": 36498654597.8589,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2012,
          "value": 23995685014.2142,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2013,
          "value": 28153031270.3203,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2014,
          "value": 34576643694.1383,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2015,
          "value": 44009492129.5319,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2016,
          "value": 44458571545.798,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2017,
          "value": 39966091358.7384,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2018,
          "value": 42117450737.2644,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2019,
          "value": 50610647353.5912,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2020,
          "value": 64362364994.3754,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2021,
          "value": 44727277562.881,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2022,
          "value": 49940258404.266,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2023,
          "value": 28078983530.3979,
          "unit": "米ドル"
        }
      ]
    },
    "BRA": {
      "name": "ブラジル",
      "data": [
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2006,
          "value": 1107626541710.74,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2007,
          "value": 1397114486471.38,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2008,
          "value": 1695855083552.05,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2009,
          "value": 1666996438681.46,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2010,
          "value": 2208837745214.23,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2011,
          "value": 2616156223977.47,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2012,
          "value": 2465227803011.57,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2013,
          "value": 2472819535742.73,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2014,
          "value": 2456043727198.85,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2015,
          "value": 1802212206904.68,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2016,
          "value": 1795693482652.52,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2017,
          "value": 2063514977334.32,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2018,
          "value": 1916933898038.36,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2019,
          "value": 1873288205186.45,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2020,
          "value": 1476107231194.11,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2021,
          "value": 1670647399034.67,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2022,
          "value": 1951923942083.32,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2023,
          "value": 2173665655937.27,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2006,
          "value": 3.96198871122617,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2007,
          "value": 6.06987060678338,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2008,
          "value": 5.09419544658736,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2009,
          "value": -0.125812002161169,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2010,
          "value": 7.52822581815364,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2011,
          "value": 3.97442307944702,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2012,
          "value": 1.92117598576537,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2013,
          "value": 3.00482266944432,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2014,
          "value": 0.503955740242247,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2015,
          "value": -3.54576339269425,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2016,
          "value": -3.27591690782192,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2017,
          "value": 1.32286905404399,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2018,
          "value": 1.783666761634,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2019,
          "value": 1.22077782360842,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2020,
          "value": -3.2767587964736,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2021,
          "value": 4.76260437908608,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2022,
          "value": 3.01669435393015,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2023,
          "value": 2.90848048667777,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2006,
          "value": 9.692,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2007,
          "value": 9.28,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2008,
          "value": 8.268,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2009,
          "value": 9.419,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2010,
          "value": 8.422,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2011,
          "value": 7.578,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2012,
          "value": 7.251,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2013,
          "value": 7.071,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2014,
          "value": 6.755,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2015,
          "value": 8.538,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2016,
          "value": 11.58,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2017,
          "value": 12.792,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2018,
          "value": 12.329,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2019,
          "value": 11.936,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2020,
          "value": 13.697,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2021,
          "value": 13.158,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2022,
          "value": 9.231,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2023,
          "value": 7.947,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2024,
          "value": 7.634,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2006,
          "value": 4.18356812896909,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2007,
          "value": 3.64127299102652,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2008,
          "value": 5.67859390284168,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2009,
          "value": 4.88803479876799,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2010,
          "value": 5.03872690108075,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2011,
          "value": 6.6364496221309,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2012,
          "value": 5.40349914036997,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2013,
          "value": 6.20431066640101,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2014,
          "value": 6.32904015516139,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2015,
          "value": 9.02990102416136,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2016,
          "value": 8.73914352329393,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2017,
          "value": 3.44637335032669,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2018,
          "value": 3.66485028376729,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2019,
          "value": 3.73297621216894,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2020,
          "value": 3.21176803803376,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2021,
          "value": 8.30165975585673,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2022,
          "value": 9.28010608956873,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2023,
          "value": 4.59356282283204,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2024,
          "value": 4.36746407652337,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2006,
          "value": 5934.1447107274,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2007,
          "value": 7409.69130727951,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2008,
          "value": 8908.33176567294,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2009,
          "value": 8678.65922498836,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2010,
          "value": 11403.2821284616,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2011,
          "value": 13396.6243566047,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2012,
          "value": 12521.7213530369,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2013,
          "value": 12458.891214816,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2014,
          "value": 12274.9939689363,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2015,
          "value": 8936.19661756825,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2016,
          "value": 8836.28652636996,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2017,
          "value": 10080.5092817775,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2018,
          "value": 9300.66164936497,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2019,
          "value": 9029.83326742175,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2020,
          "value": 7074.19378281866,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2021,
          "value": 7972.53665048385,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2022,
          "value": 9281.33334441234,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2023,
          "value": 10294.866680778,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2006,
          "value": 26.0416998853051,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2007,
          "value": 25.2926113736798,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2008,
          "value": 27.2575694164795,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2009,
          "value": 22.1059756047068,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2010,
          "value": 22.7721781120049,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2011,
          "value": 23.9344051753252,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2012,
          "value": 25.1142736086534,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2013,
          "value": 25.7859573255328,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2014,
          "value": 24.6854058131291,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2015,
          "value": 26.9536259360114,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2016,
          "value": 24.5336820804399,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2017,
          "value": 24.3197343746749,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2018,
          "value": 28.8762033759743,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2019,
          "value": 28.8902578679414,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2020,
          "value": 32.3020785463409,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2021,
          "value": 37.6563307568833,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2022,
          "value": 38.8160659763397,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2023,
          "value": 33.8539465938547,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2006,
          "value": 186653106,
          "unit": "人"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2007,
          "value": 188552320,
          "unit": "人"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2008,
          "value": 190367302,
          "unit": "人"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2009,
          "value": 192079951,
          "unit": "人"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2010,
          "value": 193701929,
          "unit": "人"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2011,
          "value": 195284734,
          "unit": "人"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2012,
          "value": 196876111,
          "unit": "人"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2013,
          "value": 198478299,
          "unit": "人"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2014,
          "value": 200085127,
          "unit": "人"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2015,
          "value": 201675532,
          "unit": "人"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2016,
          "value": 203218114,
          "unit": "人"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2017,
          "value": 204703445,
          "unit": "人"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2018,
          "value": 206107261,
          "unit": "人"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2019,
          "value": 207455459,
          "unit": "人"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2020,
          "value": 208660842,
          "unit": "人"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2021,
          "value": 209550294,
          "unit": "人"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2022,
          "value": 210306415,
          "unit": "人"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2023,
          "value": 211140729,
          "unit": "人"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2006,
          "value": 19418085598.0794,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2007,
          "value": 44579492463.6336,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2008,
          "value": 50716402711.4787,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2009,
          "value": 31480931700,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2010,
          "value": 82389932468.07,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2011,
          "value": 102427228231.42,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2012,
          "value": 92568388321.34,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2013,
          "value": 75211029129.4,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2014,
          "value": 87713983217.24,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2015,
          "value": 64738153494.44,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2016,
          "value": 74294627801.19,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2017,
          "value": 68885491315.23,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2018,
          "value": 78183840044.98,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2019,
          "value": 69174411753.45,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2020,
          "value": 38270116307.45,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2021,
          "value": 46440503520.19,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2022,
          "value": 74606361830.23,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2023,
          "value": 62441880089.59,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2024,
          "value": 71069841874.2,
          "unit": "米ドル"
        }
      ]
    },
    "CAN": {
      "name": "カナダ",
      "data": [
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2006,
          "value": 1319264809590.97,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2007,
          "value": 1468820407783.26,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2008,
          "value": 1552989690721.65,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2009,
          "value": 1374625142157.29,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2010,
          "value": 1617343367486.26,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2011,
          "value": 1793326630174.52,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2012,
          "value": 1828366481521.6,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2013,
          "value": 1846597421834.98,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2014,
          "value": 1805749878439.94,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2015,
          "value": 1556508816217.14,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2016,
          "value": 1527994741907.43,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2017,
          "value": 1649265644244.09,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2018,
          "value": 1725329192783.02,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2019,
          "value": 1743725183672.52,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2020,
          "value": 1655684730000.19,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2021,
          "value": 2007472181464.15,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2022,
          "value": 2161483369422.01,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2023,
          "value": 2142470914401.36,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2006,
          "value": 2.6379438004107,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2007,
          "value": 2.04990461109004,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2008,
          "value": 0.995406309993598,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2009,
          "value": -2.91508623949733,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2010,
          "value": 3.09080637403602,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2011,
          "value": 3.13719438973661,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2012,
          "value": 1.75566132540601,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2013,
          "value": 2.32581357393478,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2014,
          "value": 2.87346677184995,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2015,
          "value": 0.649970993709132,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2016,
          "value": 1.03855093491798,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2017,
          "value": 3.03383490260789,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2018,
          "value": 2.74296343112555,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2019,
          "value": 1.9084319253883,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2020,
          "value": -5.03823344128351,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2021,
          "value": 5.28695689105889,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2022,
          "value": 3.81986633913397,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2023,
          "value": 1.24892730403391,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2006,
          "value": 6.484,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2007,
          "value": 6.156,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2008,
          "value": 6.284,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2009,
          "value": 8.46,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2010,
          "value": 8.178,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2011,
          "value": 7.637,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2012,
          "value": 7.392,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2013,
          "value": 7.143,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2014,
          "value": 7.023,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2015,
          "value": 6.945,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2016,
          "value": 7.038,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2017,
          "value": 6.426,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2018,
          "value": 5.837,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2019,
          "value": 5.69,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2020,
          "value": 9.657,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2021,
          "value": 7.527,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2022,
          "value": 5.279,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2023,
          "value": 5.415,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2024,
          "value": 6.45,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2006,
          "value": 2.00202539534161,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2007,
          "value": 2.13838399266837,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2008,
          "value": 2.37027067444299,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2009,
          "value": 0.299466803009299,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2010,
          "value": 1.77687154092627,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2011,
          "value": 2.91213508872351,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2012,
          "value": 1.51567823124517,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2013,
          "value": 0.938291897815317,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2014,
          "value": 1.90663590717861,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2015,
          "value": 1.12524136094277,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2016,
          "value": 1.42875954701085,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2017,
          "value": 1.59688412852977,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2018,
          "value": 2.26822567248103,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2019,
          "value": 1.94926902411593,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2020,
          "value": 0.716999632307827,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2021,
          "value": 3.39519318527528,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2022,
          "value": 6.80280115341613,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2023,
          "value": 3.87900159788426,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2024,
          "value": 2.38158383281173,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2006,
          "value": 40504.0370977806,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2007,
          "value": 44660.0838892281,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2008,
          "value": 46710.2526864484,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2009,
          "value": 40874.8831932903,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2010,
          "value": 47560.6666009406,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2011,
          "value": 52223.8588398531,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2012,
          "value": 52670.3447335415,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2013,
          "value": 52638.1187235237,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2014,
          "value": 50960.8431174661,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2015,
          "value": 43594.1941045394,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2016,
          "value": 42314.0615817218,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2017,
          "value": 45129.628116623,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2018,
          "value": 46539.1761570405,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2019,
          "value": 46352.8693445211,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2020,
          "value": 43537.839298904,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2021,
          "value": 52496.8441693242,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2022,
          "value": 55509.393176404,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2023,
          "value": 53431.1857063879,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2006,
          "value": 68.0521644769988,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2007,
          "value": 66.2834197482347,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2008,
          "value": 67.0236083618983,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2009,
          "value": 58.4743918224897,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2010,
          "value": 60.2081215044483,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2011,
          "value": 62.4987387708328,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2012,
          "value": 62.5955489395005,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2013,
          "value": 62.2310749013405,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2014,
          "value": 64.3786621564923,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2015,
          "value": 66.1649020669781,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2016,
          "value": 65.3636845215556,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2017,
          "value": 65.1010608504649,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2018,
          "value": 66.5998858508762,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2019,
          "value": 66.1714852804959,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2020,
          "value": 61.1567709632763,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2021,
          "value": 62.4241644131018,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2022,
          "value": 67.5588963664949,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2023,
          "value": 67.1924941392879,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2006,
          "value": 32571193,
          "unit": "人"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2007,
          "value": 32888886,
          "unit": "人"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2008,
          "value": 33247298,
          "unit": "人"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2009,
          "value": 33630069,
          "unit": "人"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2010,
          "value": 34005902,
          "unit": "人"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2011,
          "value": 34339221,
          "unit": "人"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2012,
          "value": 34713395,
          "unit": "人"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2013,
          "value": 35080992,
          "unit": "人"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2014,
          "value": 35434066,
          "unit": "人"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2015,
          "value": 35704498,
          "unit": "人"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2016,
          "value": 36110803,
          "unit": "人"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2017,
          "value": 36545075,
          "unit": "人"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2018,
          "value": 37072620,
          "unit": "人"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2019,
          "value": 37618495,
          "unit": "人"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2020,
          "value": 38028638,
          "unit": "人"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2021,
          "value": 38239864,
          "unit": "人"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2022,
          "value": 38939056,
          "unit": "人"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2023,
          "value": 40097761,
          "unit": "人"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2006,
          "value": 64302303096.8668,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2007,
          "value": 120451484862.004,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2008,
          "value": 70119614332.5095,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2009,
          "value": 20951090410.3131,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2010,
          "value": 29714744325.4741,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2011,
          "value": 38338330427.428,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2012,
          "value": 49368985104.1991,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2013,
          "value": 67027866778.2682,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2014,
          "value": 64174605785.6347,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2015,
          "value": 59986208237.0735,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2016,
          "value": 34201872160.6085,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2017,
          "value": 25357801000.497,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2018,
          "value": 42603762048.5971,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2019,
          "value": 48942300762.2452,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2020,
          "value": 29123011879.2998,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2021,
          "value": 60189690111.8854,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2022,
          "value": 50229920776.0187,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2023,
          "value": 42076242120.3715,
          "unit": "米ドル"
        }
      ]
    },
    "AUS": {
      "name": "オーストラリア",
      "data": [
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2006,
          "value": 748417562769.636,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2007,
          "value": 855007458585.224,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2008,
          "value": 1056112427190.38,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2009,
          "value": 928762122698.05,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2010,
          "value": 1148838233480.72,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2011,
          "value": 1398610616772.97,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2012,
          "value": 1547532281116.4,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2013,
          "value": 1577123329410.88,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2014,
          "value": 1468265356427.76,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2015,
          "value": 1351296372254.31,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2016,
          "value": 1206836962281.84,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2017,
          "value": 1325582658156.54,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2018,
          "value": 1427809041019.44,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2019,
          "value": 1392723834562.64,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2020,
          "value": 1328414058378.38,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2021,
          "value": 1556735770437.26,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2022,
          "value": 1690858246994.43,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2023,
          "value": 1728057316695.61,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2006,
          "value": 2.75534610557227,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2007,
          "value": 3.77332171303566,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2008,
          "value": 3.58626695226046,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2009,
          "value": 1.89255581922549,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2010,
          "value": 2.21998026536549,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2011,
          "value": 2.40708018291988,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2012,
          "value": 3.91670942454073,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2013,
          "value": 2.60219339436559,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2014,
          "value": 2.59528411594042,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2015,
          "value": 2.19016928695221,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2016,
          "value": 2.7593859723839,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2017,
          "value": 2.27959179820343,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2018,
          "value": 2.87846971467883,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2019,
          "value": 2.17154505737176,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2020,
          "value": -0.119590735829973,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2021,
          "value": 2.11116814768786,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2022,
          "value": 4.24238555336139,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2023,
          "value": 3.44199220009025,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2006,
          "value": 4.785,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2007,
          "value": 4.381,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2008,
          "value": 4.242,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2009,
          "value": 5.565,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2010,
          "value": 5.214,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2011,
          "value": 5.083,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2012,
          "value": 5.225,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2013,
          "value": 5.663,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2014,
          "value": 6.078,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2015,
          "value": 6.055,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2016,
          "value": 5.711,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2017,
          "value": 5.592,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2018,
          "value": 5.3,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2019,
          "value": 5.159,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2020,
          "value": 6.456,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2021,
          "value": 5.116,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2022,
          "value": 3.728,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2023,
          "value": 3.668,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2024,
          "value": 4.072,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2006,
          "value": 3.55528773727026,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2007,
          "value": 2.32761128891476,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2008,
          "value": 4.35029854990048,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2009,
          "value": 1.77111716621254,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2010,
          "value": 2.91834002677376,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2011,
          "value": 3.3038501560874,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2012,
          "value": 1.76278015613196,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2013,
          "value": 2.4498886414254,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2014,
          "value": 2.48792270531404,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2015,
          "value": 1.50836672165921,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2016,
          "value": 1.27699094497324,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2017,
          "value": 1.94864740944527,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2018,
          "value": 1.91140094445691,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2019,
          "value": 1.61076787290379,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2020,
          "value": 0.846905537459305,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2021,
          "value": 2.86391042204994,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2022,
          "value": 6.59409671341846,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2023,
          "value": 5.5970149253731,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2024,
          "value": 3.1616142830575,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2006,
          "value": 36595.7071548423,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2007,
          "value": 41051.6120652288,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2008,
          "value": 49701.2817843335,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2009,
          "value": 42816.5674002829,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2010,
          "value": 52144.6654705468,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2011,
          "value": 62605.600458306,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2012,
          "value": 68072.8732340801,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2013,
          "value": 68190.7010035651,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2014,
          "value": 62544.0873773726,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2015,
          "value": 56739.0265346593,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2016,
          "value": 49888.0410842736,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2017,
          "value": 53901.7145392154,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2018,
          "value": 57196.4220783778,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2019,
          "value": 54972.7017885437,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2020,
          "value": 51791.540179984,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2021,
          "value": 60607.7788605166,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2022,
          "value": 64997.0136536475,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2023,
          "value": 64820.9117890026,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2006,
          "value": 41.5594471705758,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2007,
          "value": 42.0080200326348,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2008,
          "value": 42.8467764017331,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2009,
          "value": 45.7408630288694,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2010,
          "value": 40.5215889941287,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2011,
          "value": 41.851132029052,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2012,
          "value": 43.1642964994556,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2013,
          "value": 41.2728790174276,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2014,
          "value": 42.4840230270994,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2015,
          "value": 41.6639319280984,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2016,
          "value": 40.974079475775,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2017,
          "value": 42.2037316765804,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2018,
          "value": 43.7360650798433,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2019,
          "value": 46.1875018936291,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2020,
          "value": 44.6644560654359,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2021,
          "value": 40.3024802691697,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2022,
          "value": 45.8217702307271,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2023,
          "value": 49.2251840594381,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2006,
          "value": 20450966,
          "unit": "人"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2007,
          "value": 20827622,
          "unit": "人"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2008,
          "value": 21249199,
          "unit": "人"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2009,
          "value": 21691653,
          "unit": "人"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2010,
          "value": 22031750,
          "unit": "人"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2011,
          "value": 22340024,
          "unit": "人"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2012,
          "value": 22733465,
          "unit": "人"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2013,
          "value": 23128129,
          "unit": "人"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2014,
          "value": 23475686,
          "unit": "人"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2015,
          "value": 23815995,
          "unit": "人"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2016,
          "value": 24190907,
          "unit": "人"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2017,
          "value": 24592588,
          "unit": "人"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2018,
          "value": 24963258,
          "unit": "人"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2019,
          "value": 25334826,
          "unit": "人"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2020,
          "value": 25649248,
          "unit": "人"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2021,
          "value": 25685412,
          "unit": "人"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2022,
          "value": 26014399,
          "unit": "人"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2023,
          "value": 26658948,
          "unit": "人"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2006,
          "value": 30551100656.5983,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2007,
          "value": 44440876036.5147,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2008,
          "value": 45170097261.1184,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2009,
          "value": 28932973452.6035,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2010,
          "value": 35554698682.4247,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2011,
          "value": 65578266555.523,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2012,
          "value": 57571285654.7447,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2013,
          "value": 54472699003.596,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2014,
          "value": 63204516347.8726,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2015,
          "value": 46892808567.8516,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2016,
          "value": 42970225977.7088,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2017,
          "value": 48199372039.9015,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2018,
          "value": 60686639529.923,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2019,
          "value": 38745129661.1196,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2020,
          "value": 17976843681.3118,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2021,
          "value": 31518948092.7139,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2022,
          "value": 70364982117.0187,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2023,
          "value": 32619020577.2036,
          "unit": "米ドル"
        }
      ]
    },
    "IDN": {
      "name": "インドネシア",
      "data": [
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2006,
          "value": 364570515618.358,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2007,
          "value": 432216737774.861,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2008,
          "value": 510228634992.255,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2009,
          "value": 539580085612.401,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2010,
          "value": 755094157594.524,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2011,
          "value": 892969104529.572,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2012,
          "value": 917869913364.917,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2013,
          "value": 912524136718.018,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2014,
          "value": 890814755511.014,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2015,
          "value": 860854232717.718,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2016,
          "value": 931877364034.196,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2017,
          "value": 1015618744168.08,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2018,
          "value": 1042271532953.49,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2019,
          "value": 1119099871385.79,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2020,
          "value": 1059054842711.55,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2021,
          "value": 1186509691070.97,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2022,
          "value": 1319076267291.51,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2023,
          "value": 1371171152331.16,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2006,
          "value": 5.50095178520348,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2007,
          "value": 6.34502222667214,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2008,
          "value": 6.01370360009123,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2009,
          "value": 4.62887118256153,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2010,
          "value": 6.22385418062366,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2011,
          "value": 6.16978420771008,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2012,
          "value": 6.03005065305615,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2013,
          "value": 5.5572636889101,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2014,
          "value": 5.006668425755,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2015,
          "value": 4.87632230022123,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2016,
          "value": 5.03306918280177,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2017,
          "value": 5.06978590134916,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2018,
          "value": 5.17429153955024,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2019,
          "value": 5.01928768046282,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2020,
          "value": -2.06551182934165,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2021,
          "value": 3.70288562827751,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2022,
          "value": 5.30741934775764,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2023,
          "value": 5.04810577067288,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2006,
          "value": 7.551,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2007,
          "value": 8.06,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2008,
          "value": 7.208,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2009,
          "value": 6.106,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2010,
          "value": 5.614,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2011,
          "value": 5.153,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2012,
          "value": 4.468,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2013,
          "value": 4.336,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2014,
          "value": 4.049,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2015,
          "value": 4.514,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2016,
          "value": 4.301,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2017,
          "value": 3.783,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2018,
          "value": 4.387,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2019,
          "value": 3.59,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2020,
          "value": 4.255,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2021,
          "value": 3.827,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2022,
          "value": 3.462,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2023,
          "value": 3.308,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2024,
          "value": 3.3,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2006,
          "value": 13.1086720985296,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2007,
          "value": 6.40656281325701,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2008,
          "value": 10.2266645473148,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2009,
          "value": 4.38641555014731,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2010,
          "value": 5.13420400767928,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2011,
          "value": 5.3560477898215,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2012,
          "value": 4.27949999641975,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2013,
          "value": 6.41251330156418,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2014,
          "value": 6.39492540819922,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2015,
          "value": 6.36312113115612,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2016,
          "value": 3.5258051568793,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2017,
          "value": 3.80879806953157,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2018,
          "value": 3.1983464156241,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2019,
          "value": 3.03058664969487,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2020,
          "value": 1.9209680056685,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2021,
          "value": 1.56012990525673,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2022,
          "value": 4.20946383402165,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2023,
          "value": 3.67013142377007,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2006,
          "value": 1558.31562847164,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2007,
          "value": 1823.21976255073,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2008,
          "value": 2124.55483920617,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2009,
          "value": 2218.48541852977,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2010,
          "value": 3065.68348366636,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2011,
          "value": 3579.46442452684,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2012,
          "value": 3632.272540431,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2013,
          "value": 3566.60284506078,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2014,
          "value": 3441.06808455308,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2015,
          "value": 3288.22269737572,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2016,
          "value": 3521.46943456251,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2017,
          "value": 3798.88326177649,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2018,
          "value": 3860.95353077708,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2019,
          "value": 4106.94856173421,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2020,
          "value": 3853.70288778903,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2021,
          "value": 4287.17313989405,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2022,
          "value": 4730.74548910499,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2023,
          "value": 4876.31432703188,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2006,
          "value": 56.6571268148865,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2007,
          "value": 54.8292499782075,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2008,
          "value": 58.5613996312701,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2009,
          "value": 45.5121213687054,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2010,
          "value": 46.7012738758737,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2011,
          "value": 50.1800131841104,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2012,
          "value": 49.5828982992627,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2013,
          "value": 48.6373726752893,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2014,
          "value": 48.0801755855227,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2015,
          "value": 41.9376402415294,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2016,
          "value": 37.4213418023318,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2017,
          "value": 39.3554970704606,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2018,
          "value": 43.0743089552002,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2019,
          "value": 37.6277775357108,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2020,
          "value": 32.9721754002427,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2021,
          "value": 40.2047582749671,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2022,
          "value": 45.4658986816744,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2023,
          "value": 41.3156667619874,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2006,
          "value": 233951652,
          "unit": "人"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2007,
          "value": 237062337,
          "unit": "人"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2008,
          "value": 240157903,
          "unit": "人"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2009,
          "value": 243220028,
          "unit": "人"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2010,
          "value": 246305322,
          "unit": "人"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2011,
          "value": 249470032,
          "unit": "人"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2012,
          "value": 252698525,
          "unit": "人"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2013,
          "value": 255852467,
          "unit": "人"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2014,
          "value": 258877399,
          "unit": "人"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2015,
          "value": 261799249,
          "unit": "人"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2016,
          "value": 264627418,
          "unit": "人"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2017,
          "value": 267346658,
          "unit": "人"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2018,
          "value": 269951846,
          "unit": "人"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2019,
          "value": 272489381,
          "unit": "人"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2020,
          "value": 274814866,
          "unit": "人"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2021,
          "value": 276758053,
          "unit": "人"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2022,
          "value": 278830529,
          "unit": "人"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2023,
          "value": 281190067,
          "unit": "人"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2006,
          "value": 4914201435.40071,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2007,
          "value": 6928480000,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2008,
          "value": 9318453649.82664,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2009,
          "value": 4877369178.43651,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2010,
          "value": 15292009410.5099,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2011,
          "value": 20564938226.7185,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2012,
          "value": 21200778607.8727,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2013,
          "value": 23281742361.5305,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2014,
          "value": 25120732059.5134,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2015,
          "value": 19779127976.9576,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2016,
          "value": 4541713739.23769,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2017,
          "value": 20510310832.4469,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2018,
          "value": 18909826043.5105,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2019,
          "value": 24993551748.0098,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2020,
          "value": 19175077747.8077,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2021,
          "value": 21213080329.8583,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2022,
          "value": 24702029705.0926,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2023,
          "value": 21543358781.3828,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2024,
          "value": 23666770333.5481,
          "unit": "米ドル"
        }
      ]
    },
    "PER": {
      "name": "ペルー",
      "data": [
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2006,
          "value": 88643193061.748,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2007,
          "value": 102170981144.136,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2008,
          "value": 120550599815.441,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2009,
          "value": 120822986521.479,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2010,
          "value": 147527631520.729,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2011,
          "value": 171761737046.585,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2012,
          "value": 192650021648.583,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2013,
          "value": 201175543571.392,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2014,
          "value": 200786250582.943,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2015,
          "value": 189802976285.619,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2016,
          "value": 191898104390.379,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2017,
          "value": 211007984080.911,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2018,
          "value": 222597009739.235,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2019,
          "value": 228346006003.648,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2020,
          "value": 201409694755.934,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2021,
          "value": 226354278280.885,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2022,
          "value": 246488757636.211,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2023,
          "value": 267603248655.253,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2006,
          "value": 7.5288990440594,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2007,
          "value": 8.5183877690955,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2008,
          "value": 9.1265683014642,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2009,
          "value": 1.0958236592427,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2010,
          "value": 8.33245910749577,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2011,
          "value": 6.32719240161117,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2012,
          "value": 6.13972470560435,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2013,
          "value": 5.85251821084928,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2014,
          "value": 2.38215737180541,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2015,
          "value": 3.25224477218451,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2016,
          "value": 3.95331871520767,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2017,
          "value": 2.51883544233135,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2018,
          "value": 3.969351341365,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2019,
          "value": 2.24063176875049,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2020,
          "value": -10.9333065010382,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2021,
          "value": 13.3552295093079,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2022,
          "value": 2.72550021563363,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2023,
          "value": -0.55018230632048,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2006,
          "value": 4.17,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2007,
          "value": 4.08,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2008,
          "value": 4.03,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2009,
          "value": 3.96,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2010,
          "value": 3.6,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2011,
          "value": 3.477,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2012,
          "value": 3.238,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2013,
          "value": 3.575,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2014,
          "value": 3.208,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2015,
          "value": 3.272,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2016,
          "value": 3.741,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2017,
          "value": 3.691,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2018,
          "value": 3.492,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2019,
          "value": 3.379,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2020,
          "value": 7.179,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2021,
          "value": 5.097,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2022,
          "value": 3.85,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2023,
          "value": 4.899,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2024,
          "value": 4.828,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2006,
          "value": 2.00225801248819,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2007,
          "value": 1.77998644680372,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2008,
          "value": 5.78587598206755,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2009,
          "value": 2.936231535967,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2010,
          "value": 1.52832059732901,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2011,
          "value": 3.36931095333853,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2012,
          "value": 3.61121294940163,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2013,
          "value": 2.76789666082002,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2014,
          "value": 3.41194579807465,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2015,
          "value": 3.39809194746308,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2016,
          "value": 3.55717663556279,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2017,
          "value": 2.99490045809443,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2018,
          "value": 1.50915423024742,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2019,
          "value": 2.25212191358027,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2020,
          "value": 2.00241205759292,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2021,
          "value": 4.27166381536798,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2022,
          "value": 8.33370630096231,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2023,
          "value": 6.45561348369586,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2024,
          "value": 2.00770739412712,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2006,
          "value": 3129.55996496982,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2007,
          "value": 3581.0893081917,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2008,
          "value": 4197.58444634142,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2009,
          "value": 4181.18755462253,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2010,
          "value": 5072.11494019615,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2011,
          "value": 5861.35793645245,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2012,
          "value": 6519.37852981527,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2013,
          "value": 6746.80025696601,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2014,
          "value": 6667.13410360861,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2015,
          "value": 6231.71150338894,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2016,
          "value": 6217.03599995447,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2017,
          "value": 6736.16693725487,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2018,
          "value": 6978.49121548627,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2019,
          "value": 7037.00803692604,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2020,
          "value": 6133.32552410183,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2021,
          "value": 6826.9720069846,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2022,
          "value": 7363.27206939639,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2023,
          "value": 7906.58502858,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2006,
          "value": 51.7850560338442,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2007,
          "value": 55.6881132836815,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2008,
          "value": 58.4337673899053,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2009,
          "value": 48.1119296153519,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2010,
          "value": 51.6728089370033,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2011,
          "value": 55.9882802838607,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2012,
          "value": 52.6198952632294,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2013,
          "value": 49.7871424471444,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2014,
          "value": 46.8531210912899,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2015,
          "value": 45.1627686891148,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2016,
          "value": 45.3888411964154,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2017,
          "value": 47.5135503619971,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2018,
          "value": 48.631470171736,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2019,
          "value": 46.9435053754409,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2020,
          "value": 44.245967197744,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2021,
          "value": 55.2742548782987,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2022,
          "value": 57.2510734358091,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2023,
          "value": 50.909508314535,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2006,
          "value": 28324491,
          "unit": "人"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2007,
          "value": 28530699,
          "unit": "人"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2008,
          "value": 28719041,
          "unit": "人"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2009,
          "value": 28896811,
          "unit": "人"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2010,
          "value": 29086019,
          "unit": "人"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2011,
          "value": 29304086,
          "unit": "人"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2012,
          "value": 29550366,
          "unit": "人"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2013,
          "value": 29817919,
          "unit": "人"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2014,
          "value": 30115826,
          "unit": "人"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2015,
          "value": 30457600,
          "unit": "人"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2016,
          "value": 30866494,
          "unit": "人"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2017,
          "value": 31324637,
          "unit": "人"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2018,
          "value": 31897584,
          "unit": "人"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2019,
          "value": 32449303,
          "unit": "人"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2020,
          "value": 32838579,
          "unit": "人"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2021,
          "value": 33155882,
          "unit": "人"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2022,
          "value": 33475438,
          "unit": "人"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2023,
          "value": 33845617,
          "unit": "人"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2006,
          "value": 3466531061.27322,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2007,
          "value": 5490961307.08952,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2008,
          "value": 6923651284.62579,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2009,
          "value": 6430652960.91184,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2010,
          "value": 8454627587.91059,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2011,
          "value": 7682261108.57854,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2012,
          "value": 14182387604.3103,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2013,
          "value": 9570622714.00791,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2014,
          "value": 4262751633.55747,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2015,
          "value": 7336859044.51778,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2016,
          "value": 6805247718.18016,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2017,
          "value": 7413409959.49823,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2018,
          "value": 5872657139.17008,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2019,
          "value": 4775376809.84597,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2020,
          "value": 663417504.946494,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2021,
          "value": 7142277305.62547,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2022,
          "value": 11201435821.3347,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2023,
          "value": 3918253336.82371,
          "unit": "米ドル"
        }
      ]
    }
  },
  "byIndicator": {
    "NY.GDP.MKTP.CD": {
      "name": "GDP（現在価格、米ドル）",
      "data": [
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2006,
          "value": 4601663122649.92,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2007,
          "value": 4579750920354.81,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2008,
          "value": 5106679115127.3,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2009,
          "value": 5289493117993.89,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2010,
          "value": 5759071769013.11,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2011,
          "value": 6233147172341.35,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2012,
          "value": 6272362996105.03,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2013,
          "value": 5212328181166.18,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2014,
          "value": 4896994405353.29,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2015,
          "value": 4444930651964.18,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2016,
          "value": 5003677627544.24,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2017,
          "value": 4930837369151.42,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2018,
          "value": 5040880939324.86,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2019,
          "value": 5117993853016.51,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2020,
          "value": 5055587093501.59,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2021,
          "value": 5034620784584.98,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2022,
          "value": 4256410760723.75,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2023,
          "value": 4204494802431.55,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2006,
          "value": 13815583000000,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2007,
          "value": 14474228000000,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2008,
          "value": 14769862000000,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2009,
          "value": 14478067000000,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2010,
          "value": 15048971000000,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2011,
          "value": 15599732000000,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2012,
          "value": 16253970000000,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2013,
          "value": 16880683000000,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2014,
          "value": 17608138000000,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2015,
          "value": 18295019000000,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2016,
          "value": 18804913000000,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2017,
          "value": 19612102000000,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2018,
          "value": 20656516000000,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2019,
          "value": 21539982000000,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2020,
          "value": 21354105000000,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2021,
          "value": 23681171000000,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2022,
          "value": 26006893000000,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2023,
          "value": 27720709000000,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2006,
          "value": 2752118657184.02,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2007,
          "value": 3550327802998.4,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2008,
          "value": 4594336785737.67,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2009,
          "value": 5101691124285.21,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2010,
          "value": 6087191746679.49,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2011,
          "value": 7551545703440.75,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2012,
          "value": 8532185381680.59,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2013,
          "value": 9570471111831.68,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2014,
          "value": 10475624944355.2,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2015,
          "value": 11061572618578.7,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2016,
          "value": 11233313730348.7,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2017,
          "value": 12310491333980.9,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2018,
          "value": 13894907857880.6,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2019,
          "value": 14279968506271.7,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2020,
          "value": 14687744162801,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2021,
          "value": 17820459508852.2,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2022,
          "value": 17881782683707.3,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2023,
          "value": 17794783039552,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2006,
          "value": 3046308753670.58,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2007,
          "value": 3484056680854.91,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2008,
          "value": 3808786022312.5,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2009,
          "value": 3479800820863.28,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2010,
          "value": 3468154343000.01,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2011,
          "value": 3824828563521.41,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2012,
          "value": 3597896500945.31,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2013,
          "value": 3808086291482.36,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2014,
          "value": 3965800686309.79,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2015,
          "value": 3423568450957.03,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2016,
          "value": 3537784107980.55,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2017,
          "value": 3763092263752.95,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2018,
          "value": 4052008447223.53,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2019,
          "value": 3957208055215.68,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2020,
          "value": 3940142541354.1,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2021,
          "value": 4348297440387.53,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2022,
          "value": 4163596357879.39,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2023,
          "value": 4525703903627.53,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2006,
          "value": 2708441582336.71,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2007,
          "value": 3090510204081.63,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2008,
          "value": 2929411764705.88,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2009,
          "value": 2412840006231.5,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2010,
          "value": 2485482596184.71,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2011,
          "value": 2663805834828.07,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2012,
          "value": 2707089726614.64,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2013,
          "value": 2784853502534.29,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2014,
          "value": 3064708247921.43,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2015,
          "value": 2927911140916.73,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2016,
          "value": 2689106566899.61,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2017,
          "value": 2680148052335.3,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2018,
          "value": 2871340347581.79,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2019,
          "value": 2851407164907.81,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2020,
          "value": 2696778386607.65,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2021,
          "value": 3143323050707.26,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2022,
          "value": 3114042471144.39,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2023,
          "value": 3380854520809.54,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2006,
          "value": 2317861544690.82,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2007,
          "value": 2655816911866.56,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2008,
          "value": 2926802941585.86,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2009,
          "value": 2700075882518.98,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2010,
          "value": 2646230027988.34,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2011,
          "value": 2870408553990.28,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2012,
          "value": 2683007095787.23,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2013,
          "value": 2816077607875.26,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2014,
          "value": 2861236112552.42,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2015,
          "value": 2442483452642.5,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2016,
          "value": 2470407619777.13,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2017,
          "value": 2588868323334.71,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2018,
          "value": 2781576320884.39,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2019,
          "value": 2722793515171.76,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2020,
          "value": 2647926055110.05,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2021,
          "value": 2966433692008.09,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2022,
          "value": 2796302210398.84,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2023,
          "value": 3051831611384.76,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2006,
          "value": 940259888787.721,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2007,
          "value": 1216736438834.96,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2008,
          "value": 1198895139005.92,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2009,
          "value": 1341888016994.9,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2010,
          "value": 1675615519484.96,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2011,
          "value": 1823051829894.55,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2012,
          "value": 1827637590410.41,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2013,
          "value": 1856721507621.58,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2014,
          "value": 2039126479154.52,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2015,
          "value": 2103588360044.94,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2016,
          "value": 2294796885663.16,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2017,
          "value": 2651474262755.45,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2018,
          "value": 2702929641648.74,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2019,
          "value": 2835606256558.19,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2020,
          "value": 2674851578587.27,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2021,
          "value": 3167270623260.47,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2022,
          "value": 3353470496886.33,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2023,
          "value": 3567551674623.01,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2006,
          "value": 1107626541710.74,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2007,
          "value": 1397114486471.38,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2008,
          "value": 1695855083552.05,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2009,
          "value": 1666996438681.46,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2010,
          "value": 2208837745214.23,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2011,
          "value": 2616156223977.47,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2012,
          "value": 2465227803011.57,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2013,
          "value": 2472819535742.73,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2014,
          "value": 2456043727198.85,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2015,
          "value": 1802212206904.68,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2016,
          "value": 1795693482652.52,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2017,
          "value": 2063514977334.32,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2018,
          "value": 1916933898038.36,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2019,
          "value": 1873288205186.45,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2020,
          "value": 1476107231194.11,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2021,
          "value": 1670647399034.67,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2022,
          "value": 1951923942083.32,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2023,
          "value": 2173665655937.27,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2006,
          "value": 1319264809590.97,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2007,
          "value": 1468820407783.26,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2008,
          "value": 1552989690721.65,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2009,
          "value": 1374625142157.29,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2010,
          "value": 1617343367486.26,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2011,
          "value": 1793326630174.52,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2012,
          "value": 1828366481521.6,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2013,
          "value": 1846597421834.98,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2014,
          "value": 1805749878439.94,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2015,
          "value": 1556508816217.14,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2016,
          "value": 1527994741907.43,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2017,
          "value": 1649265644244.09,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2018,
          "value": 1725329192783.02,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2019,
          "value": 1743725183672.52,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2020,
          "value": 1655684730000.19,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2021,
          "value": 2007472181464.15,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2022,
          "value": 2161483369422.01,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2023,
          "value": 2142470914401.36,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2006,
          "value": 748417562769.636,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2007,
          "value": 855007458585.224,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2008,
          "value": 1056112427190.38,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2009,
          "value": 928762122698.05,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2010,
          "value": 1148838233480.72,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2011,
          "value": 1398610616772.97,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2012,
          "value": 1547532281116.4,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2013,
          "value": 1577123329410.88,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2014,
          "value": 1468265356427.76,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2015,
          "value": 1351296372254.31,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2016,
          "value": 1206836962281.84,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2017,
          "value": 1325582658156.54,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2018,
          "value": 1427809041019.44,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2019,
          "value": 1392723834562.64,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2020,
          "value": 1328414058378.38,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2021,
          "value": 1556735770437.26,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2022,
          "value": 1690858246994.43,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2023,
          "value": 1728057316695.61,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2006,
          "value": 364570515618.358,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2007,
          "value": 432216737774.861,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2008,
          "value": 510228634992.255,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2009,
          "value": 539580085612.401,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2010,
          "value": 755094157594.524,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2011,
          "value": 892969104529.572,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2012,
          "value": 917869913364.917,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2013,
          "value": 912524136718.018,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2014,
          "value": 890814755511.014,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2015,
          "value": 860854232717.718,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2016,
          "value": 931877364034.196,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2017,
          "value": 1015618744168.08,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2018,
          "value": 1042271532953.49,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2019,
          "value": 1119099871385.79,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2020,
          "value": 1059054842711.55,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2021,
          "value": 1186509691070.97,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2022,
          "value": 1319076267291.51,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2023,
          "value": 1371171152331.16,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2006,
          "value": 88643193061.748,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2007,
          "value": 102170981144.136,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2008,
          "value": 120550599815.441,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2009,
          "value": 120822986521.479,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2010,
          "value": 147527631520.729,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2011,
          "value": 171761737046.585,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2012,
          "value": 192650021648.583,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2013,
          "value": 201175543571.392,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2014,
          "value": 200786250582.943,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2015,
          "value": 189802976285.619,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2016,
          "value": 191898104390.379,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2017,
          "value": 211007984080.911,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2018,
          "value": 222597009739.235,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2019,
          "value": 228346006003.648,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2020,
          "value": 201409694755.934,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2021,
          "value": 226354278280.885,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2022,
          "value": 246488757636.211,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "GDP（現在価格、米ドル）",
          "indicatorCode": "NY.GDP.MKTP.CD",
          "year": 2023,
          "value": 267603248655.253,
          "unit": "米ドル"
        }
      ]
    },
    "NY.GDP.MKTP.KD.ZG": {
      "name": "GDP成長率（年率）",
      "data": [
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2006,
          "value": 1.37235012762038,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2007,
          "value": 1.48396941163492,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2008,
          "value": -1.22428900072828,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2009,
          "value": -5.69323635882266,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2010,
          "value": 4.09791791930137,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2011,
          "value": 0.0238095237748297,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2012,
          "value": 1.37475099920874,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2013,
          "value": 2.0051001767726,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2014,
          "value": 0.296205514142628,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2015,
          "value": 1.56062669674904,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2016,
          "value": 0.753826745903538,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2017,
          "value": 1.67533175166503,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2018,
          "value": 0.643391023460339,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2019,
          "value": -0.402169200910933,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2020,
          "value": -4.14711889947692,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2021,
          "value": 2.55932023865617,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2022,
          "value": 0.954736937781391,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2023,
          "value": 1.67901952310368,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2006,
          "value": 2.78453963938148,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2007,
          "value": 2.00385829825838,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2008,
          "value": 0.113587248258867,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2009,
          "value": -2.57650023426996,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2010,
          "value": 2.6951925838264,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2011,
          "value": 1.56440685438301,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2012,
          "value": 2.28911338767897,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2013,
          "value": 2.11783009919849,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2014,
          "value": 2.52381981441982,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2015,
          "value": 2.94555045455233,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2016,
          "value": 1.81945147474293,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2017,
          "value": 2.45762230322211,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2018,
          "value": 2.96650506916633,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2019,
          "value": 2.58382533018855,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2020,
          "value": -2.16302913866514,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2021,
          "value": 6.05505293304576,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2022,
          "value": 2.51237531983308,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2023,
          "value": 2.88755600906016,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2006,
          "value": 12.7209556654032,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2007,
          "value": 14.2308609331955,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2008,
          "value": 9.65067891939361,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2009,
          "value": 9.39872563259674,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2010,
          "value": 10.6358710644913,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2011,
          "value": 9.55083217877568,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2012,
          "value": 7.86373644862111,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2013,
          "value": 7.76615009773009,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2014,
          "value": 7.42576365632412,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2015,
          "value": 7.04132887873656,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2016,
          "value": 6.84876220495761,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2017,
          "value": 6.94720079331685,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2018,
          "value": 6.7497738324959,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2019,
          "value": 5.95050075367413,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2020,
          "value": 2.23863835634639,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2021,
          "value": 8.44846941687277,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2022,
          "value": 2.95066992959268,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2023,
          "value": 5.24955786387791,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2006,
          "value": 3.85573615221429,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2007,
          "value": 2.89010718962479,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2008,
          "value": 0.910403196145353,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2009,
          "value": -5.54516453771706,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2010,
          "value": 4.14676754532437,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2011,
          "value": 3.75796886586348,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2012,
          "value": 0.474291305855544,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2013,
          "value": 0.386224576109953,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2014,
          "value": 2.16949892879079,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2015,
          "value": 1.65271977174628,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2016,
          "value": 2.29471067684281,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2017,
          "value": 2.71602451931592,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2018,
          "value": 1.11644310926225,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2019,
          "value": 0.987893349167578,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2020,
          "value": -4.09513749064689,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2021,
          "value": 3.66999986156735,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2022,
          "value": 1.36973105536585,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2023,
          "value": -0.266438410090913,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2006,
          "value": 2.38069402487066,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2007,
          "value": 2.62488001971251,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2008,
          "value": -0.248797298132246,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2009,
          "value": -4.6205537195686,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2010,
          "value": 2.2333151263108,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2011,
          "value": 1.13836234744893,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2012,
          "value": 1.50899837441014,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2013,
          "value": 1.79992149362663,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2014,
          "value": 3.1946373128021,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2015,
          "value": 2.22288844908437,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2016,
          "value": 1.92171007763831,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2017,
          "value": 2.65650489309972,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2018,
          "value": 1.40519026609273,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2019,
          "value": 1.62447515947532,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2020,
          "value": -10.2969188737567,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2021,
          "value": 8.5759509048565,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2022,
          "value": 4.83908514714403,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2023,
          "value": 0.339966158003463,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2006,
          "value": 2.7140645179325,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2007,
          "value": 2.53048186196499,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2008,
          "value": 0.380171425522363,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2009,
          "value": -2.82455150288962,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2010,
          "value": 2.00032472699981,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2011,
          "value": 2.43757656877079,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2012,
          "value": 0.183835271019575,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2013,
          "value": 0.781756445913402,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2014,
          "value": 0.997832937998666,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2015,
          "value": 1.06675473488909,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2016,
          "value": 0.860031082016107,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2017,
          "value": 2.08361485062076,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2018,
          "value": 1.64590872932709,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2019,
          "value": 2.02744647639635,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2020,
          "value": -7.44064593044142,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2021,
          "value": 6.88233786590355,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2022,
          "value": 2.57084047443969,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2023,
          "value": 0.936487502671483,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2006,
          "value": 8.06073257166651,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2007,
          "value": 7.6608150670107,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2008,
          "value": 3.08669805921981,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2009,
          "value": 7.86188883286074,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2010,
          "value": 8.49758470221235,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2011,
          "value": 5.24131619937695,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2012,
          "value": 5.45638755166587,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2013,
          "value": 6.38610640094825,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2014,
          "value": 7.41022760508854,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2015,
          "value": 7.99625378571471,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2016,
          "value": 8.25630550179086,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2017,
          "value": 6.79538341897911,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2018,
          "value": 6.45385134497769,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2019,
          "value": 3.87143694070356,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2020,
          "value": -5.77772470686801,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2021,
          "value": 9.68959249192875,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2022,
          "value": 6.9870393257555,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2023,
          "value": 8.1529363109041,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2006,
          "value": 3.96198871122617,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2007,
          "value": 6.06987060678338,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2008,
          "value": 5.09419544658736,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2009,
          "value": -0.125812002161169,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2010,
          "value": 7.52822581815364,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2011,
          "value": 3.97442307944702,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2012,
          "value": 1.92117598576537,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2013,
          "value": 3.00482266944432,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2014,
          "value": 0.503955740242247,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2015,
          "value": -3.54576339269425,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2016,
          "value": -3.27591690782192,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2017,
          "value": 1.32286905404399,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2018,
          "value": 1.783666761634,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2019,
          "value": 1.22077782360842,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2020,
          "value": -3.2767587964736,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2021,
          "value": 4.76260437908608,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2022,
          "value": 3.01669435393015,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2023,
          "value": 2.90848048667777,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2006,
          "value": 2.6379438004107,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2007,
          "value": 2.04990461109004,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2008,
          "value": 0.995406309993598,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2009,
          "value": -2.91508623949733,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2010,
          "value": 3.09080637403602,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2011,
          "value": 3.13719438973661,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2012,
          "value": 1.75566132540601,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2013,
          "value": 2.32581357393478,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2014,
          "value": 2.87346677184995,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2015,
          "value": 0.649970993709132,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2016,
          "value": 1.03855093491798,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2017,
          "value": 3.03383490260789,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2018,
          "value": 2.74296343112555,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2019,
          "value": 1.9084319253883,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2020,
          "value": -5.03823344128351,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2021,
          "value": 5.28695689105889,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2022,
          "value": 3.81986633913397,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2023,
          "value": 1.24892730403391,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2006,
          "value": 2.75534610557227,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2007,
          "value": 3.77332171303566,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2008,
          "value": 3.58626695226046,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2009,
          "value": 1.89255581922549,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2010,
          "value": 2.21998026536549,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2011,
          "value": 2.40708018291988,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2012,
          "value": 3.91670942454073,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2013,
          "value": 2.60219339436559,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2014,
          "value": 2.59528411594042,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2015,
          "value": 2.19016928695221,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2016,
          "value": 2.7593859723839,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2017,
          "value": 2.27959179820343,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2018,
          "value": 2.87846971467883,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2019,
          "value": 2.17154505737176,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2020,
          "value": -0.119590735829973,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2021,
          "value": 2.11116814768786,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2022,
          "value": 4.24238555336139,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2023,
          "value": 3.44199220009025,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2006,
          "value": 5.50095178520348,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2007,
          "value": 6.34502222667214,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2008,
          "value": 6.01370360009123,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2009,
          "value": 4.62887118256153,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2010,
          "value": 6.22385418062366,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2011,
          "value": 6.16978420771008,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2012,
          "value": 6.03005065305615,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2013,
          "value": 5.5572636889101,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2014,
          "value": 5.006668425755,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2015,
          "value": 4.87632230022123,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2016,
          "value": 5.03306918280177,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2017,
          "value": 5.06978590134916,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2018,
          "value": 5.17429153955024,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2019,
          "value": 5.01928768046282,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2020,
          "value": -2.06551182934165,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2021,
          "value": 3.70288562827751,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2022,
          "value": 5.30741934775764,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2023,
          "value": 5.04810577067288,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2006,
          "value": 7.5288990440594,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2007,
          "value": 8.5183877690955,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2008,
          "value": 9.1265683014642,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2009,
          "value": 1.0958236592427,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2010,
          "value": 8.33245910749577,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2011,
          "value": 6.32719240161117,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2012,
          "value": 6.13972470560435,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2013,
          "value": 5.85251821084928,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2014,
          "value": 2.38215737180541,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2015,
          "value": 3.25224477218451,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2016,
          "value": 3.95331871520767,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2017,
          "value": 2.51883544233135,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2018,
          "value": 3.969351341365,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2019,
          "value": 2.24063176875049,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2020,
          "value": -10.9333065010382,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2021,
          "value": 13.3552295093079,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2022,
          "value": 2.72550021563363,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "GDP成長率（年率）",
          "indicatorCode": "NY.GDP.MKTP.KD.ZG",
          "year": 2023,
          "value": -0.55018230632048,
          "unit": "%"
        }
      ]
    },
    "SL.UEM.TOTL.ZS": {
      "name": "失業率（%）",
      "data": [
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2006,
          "value": 4.192,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2007,
          "value": 3.888,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2008,
          "value": 4.002,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2009,
          "value": 5.068,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2010,
          "value": 5.102,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2011,
          "value": 4.55,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2012,
          "value": 4.358,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2013,
          "value": 4.038,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2014,
          "value": 3.589,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2015,
          "value": 3.385,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2016,
          "value": 3.132,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2017,
          "value": 2.822,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2018,
          "value": 2.467,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2019,
          "value": 2.351,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2020,
          "value": 2.809,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2021,
          "value": 2.828,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2022,
          "value": 2.6,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2023,
          "value": 2.6,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2024,
          "value": 2.563,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2006,
          "value": 4.623,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2007,
          "value": 4.622,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2008,
          "value": 5.784,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2009,
          "value": 9.254,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2010,
          "value": 9.633,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2011,
          "value": 8.949,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2012,
          "value": 8.069,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2013,
          "value": 7.375,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2014,
          "value": 6.168,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2015,
          "value": 5.28,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2016,
          "value": 4.869,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2017,
          "value": 4.355,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2018,
          "value": 3.896,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2019,
          "value": 3.669,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2020,
          "value": 8.055,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2021,
          "value": 5.349,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2022,
          "value": 3.65,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2023,
          "value": 3.638,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2024,
          "value": 4.106,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2006,
          "value": 4.43,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2007,
          "value": 4.35,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2008,
          "value": 4.59,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2009,
          "value": 4.72,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2010,
          "value": 4.53,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2011,
          "value": 4.55,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2012,
          "value": 4.58,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2013,
          "value": 4.6,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2014,
          "value": 4.63,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2015,
          "value": 4.65,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2016,
          "value": 4.56,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2017,
          "value": 4.47,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2018,
          "value": 4.31,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2019,
          "value": 4.56,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2020,
          "value": 5,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2021,
          "value": 4.55,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2022,
          "value": 4.98,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2023,
          "value": 4.67,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2024,
          "value": 4.571,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2006,
          "value": 10.277,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2007,
          "value": 8.732,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2008,
          "value": 7.508,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2009,
          "value": 7.88,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2010,
          "value": 7.043,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2011,
          "value": 5.967,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2012,
          "value": 5.372,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2013,
          "value": 5.316,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2014,
          "value": 4.979,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2015,
          "value": 4.612,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2016,
          "value": 4.104,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2017,
          "value": 3.781,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2018,
          "value": 3.384,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2019,
          "value": 3.163,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2020,
          "value": 3.881,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2021,
          "value": 3.594,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2022,
          "value": 3.12,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2023,
          "value": 3.068,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2024,
          "value": 3.406,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2006,
          "value": 5.411,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2007,
          "value": 5.342,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2008,
          "value": 5.705,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2009,
          "value": 7.627,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2010,
          "value": 7.924,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2011,
          "value": 8.169,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2012,
          "value": 8.25,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2013,
          "value": 7.704,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2014,
          "value": 6.363,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2015,
          "value": 5.517,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2016,
          "value": 4.867,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2017,
          "value": 4.452,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2018,
          "value": 4.12,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2019,
          "value": 3.613,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2020,
          "value": 4.472,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2021,
          "value": 4.826,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2022,
          "value": 3.73,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2023,
          "value": 3.984,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2024,
          "value": 4.111,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2006,
          "value": 8.832,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2007,
          "value": 8.008,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2008,
          "value": 7.386,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2009,
          "value": 9.122,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2010,
          "value": 9.279,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2011,
          "value": 9.228,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2012,
          "value": 9.841,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2013,
          "value": 9.913,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2014,
          "value": 10.273,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2015,
          "value": 10.354,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2016,
          "value": 10.057,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2017,
          "value": 9.409,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2018,
          "value": 9.018,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2019,
          "value": 8.415,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2020,
          "value": 8.009,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2021,
          "value": 7.874,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2022,
          "value": 7.308,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2023,
          "value": 7.335,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2024,
          "value": 7.37,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2006,
          "value": 7.552,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2007,
          "value": 7.561,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2008,
          "value": 7.656,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2009,
          "value": 7.664,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2010,
          "value": 7.652,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2011,
          "value": 7.616,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2012,
          "value": 7.666,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2013,
          "value": 7.711,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2014,
          "value": 7.674,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2015,
          "value": 7.631,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2016,
          "value": 7.601,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2017,
          "value": 7.618,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2018,
          "value": 7.652,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2019,
          "value": 6.51,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2020,
          "value": 7.859,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2021,
          "value": 6.38,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2022,
          "value": 4.822,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2023,
          "value": 4.172,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2024,
          "value": 4.202,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2006,
          "value": 9.692,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2007,
          "value": 9.28,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2008,
          "value": 8.268,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2009,
          "value": 9.419,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2010,
          "value": 8.422,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2011,
          "value": 7.578,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2012,
          "value": 7.251,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2013,
          "value": 7.071,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2014,
          "value": 6.755,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2015,
          "value": 8.538,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2016,
          "value": 11.58,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2017,
          "value": 12.792,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2018,
          "value": 12.329,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2019,
          "value": 11.936,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2020,
          "value": 13.697,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2021,
          "value": 13.158,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2022,
          "value": 9.231,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2023,
          "value": 7.947,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2024,
          "value": 7.634,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2006,
          "value": 6.484,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2007,
          "value": 6.156,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2008,
          "value": 6.284,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2009,
          "value": 8.46,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2010,
          "value": 8.178,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2011,
          "value": 7.637,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2012,
          "value": 7.392,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2013,
          "value": 7.143,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2014,
          "value": 7.023,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2015,
          "value": 6.945,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2016,
          "value": 7.038,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2017,
          "value": 6.426,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2018,
          "value": 5.837,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2019,
          "value": 5.69,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2020,
          "value": 9.657,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2021,
          "value": 7.527,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2022,
          "value": 5.279,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2023,
          "value": 5.415,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2024,
          "value": 6.45,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2006,
          "value": 4.785,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2007,
          "value": 4.381,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2008,
          "value": 4.242,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2009,
          "value": 5.565,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2010,
          "value": 5.214,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2011,
          "value": 5.083,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2012,
          "value": 5.225,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2013,
          "value": 5.663,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2014,
          "value": 6.078,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2015,
          "value": 6.055,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2016,
          "value": 5.711,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2017,
          "value": 5.592,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2018,
          "value": 5.3,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2019,
          "value": 5.159,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2020,
          "value": 6.456,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2021,
          "value": 5.116,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2022,
          "value": 3.728,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2023,
          "value": 3.668,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2024,
          "value": 4.072,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2006,
          "value": 7.551,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2007,
          "value": 8.06,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2008,
          "value": 7.208,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2009,
          "value": 6.106,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2010,
          "value": 5.614,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2011,
          "value": 5.153,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2012,
          "value": 4.468,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2013,
          "value": 4.336,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2014,
          "value": 4.049,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2015,
          "value": 4.514,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2016,
          "value": 4.301,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2017,
          "value": 3.783,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2018,
          "value": 4.387,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2019,
          "value": 3.59,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2020,
          "value": 4.255,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2021,
          "value": 3.827,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2022,
          "value": 3.462,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2023,
          "value": 3.308,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2024,
          "value": 3.3,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2006,
          "value": 4.17,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2007,
          "value": 4.08,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2008,
          "value": 4.03,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2009,
          "value": 3.96,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2010,
          "value": 3.6,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2011,
          "value": 3.477,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2012,
          "value": 3.238,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2013,
          "value": 3.575,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2014,
          "value": 3.208,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2015,
          "value": 3.272,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2016,
          "value": 3.741,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2017,
          "value": 3.691,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2018,
          "value": 3.492,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2019,
          "value": 3.379,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2020,
          "value": 7.179,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2021,
          "value": 5.097,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2022,
          "value": 3.85,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2023,
          "value": 4.899,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "失業率（%）",
          "indicatorCode": "SL.UEM.TOTL.ZS",
          "year": 2024,
          "value": 4.828,
          "unit": "%"
        }
      ]
    },
    "FP.CPI.TOTL.ZG": {
      "name": "インフレ率（%）",
      "data": [
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2006,
          "value": 0.249355116079085,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2007,
          "value": 0.060039454498669,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2008,
          "value": 1.3800788616492,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2009,
          "value": -1.35283672951719,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2010,
          "value": -0.728243207517779,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2011,
          "value": -0.27245561610124,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2012,
          "value": -0.0440645104432602,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2013,
          "value": 0.335037912184741,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2014,
          "value": 2.75922671353253,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2015,
          "value": 0.795279630579839,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2016,
          "value": -0.127258844489754,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2017,
          "value": 0.484199796126385,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2018,
          "value": 0.989094598021848,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2019,
          "value": 0.46877615938395,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2020,
          "value": -0.024995834027731,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2021,
          "value": -0.233352779398264,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2022,
          "value": 2.49770278172255,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2023,
          "value": 3.26813365933163,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2024,
          "value": 2.73853681635241,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2006,
          "value": 3.22594410070404,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2007,
          "value": 2.85267248150138,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2008,
          "value": 3.839100296651,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2009,
          "value": -0.355546266299747,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2010,
          "value": 1.6400434423899,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2011,
          "value": 3.156841568622,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2012,
          "value": 2.06933726526067,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2013,
          "value": 1.46483265562717,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2014,
          "value": 1.62222297740817,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2015,
          "value": 0.118627135552451,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2016,
          "value": 1.26158320570536,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2017,
          "value": 2.13011000365961,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2018,
          "value": 2.44258329692817,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2019,
          "value": 1.81221007526021,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2020,
          "value": 1.23358439630629,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2021,
          "value": 4.69785886363742,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2022,
          "value": 8.00279982052121,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2023,
          "value": 4.11633838374488,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2024,
          "value": 2.94952520485207,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2006,
          "value": 1.6494309945586,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2007,
          "value": 4.81676767378834,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2008,
          "value": 5.92525137041092,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2009,
          "value": -0.728165250932898,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2010,
          "value": 3.17532475269199,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2011,
          "value": 5.55389892257493,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2012,
          "value": 2.61952432645541,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2013,
          "value": 2.62105001748115,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2014,
          "value": 1.92164162788521,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2015,
          "value": 1.43702380935655,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2016,
          "value": 2.00000182191943,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2017,
          "value": 1.59313600071436,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2018,
          "value": 2.07479039965576,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2019,
          "value": 2.89923416358227,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2020,
          "value": 2.41942189457782,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2021,
          "value": 0.981015135544882,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2022,
          "value": 1.97357555739051,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2023,
          "value": 0.234836828893051,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2024,
          "value": 0.218128938439177,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2006,
          "value": 1.57742642840563,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2007,
          "value": 2.29834400700951,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2008,
          "value": 2.62837981637219,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2009,
          "value": 0.312739007368447,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2010,
          "value": 1.1038103778926,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2011,
          "value": 2.07517283735874,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2012,
          "value": 2.00848884782956,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2013,
          "value": 1.50472330251876,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2014,
          "value": 0.906794000434246,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2015,
          "value": 0.514426137125456,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2016,
          "value": 0.491747008445174,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2017,
          "value": 1.50949485109628,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2018,
          "value": 1.73216879766942,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2019,
          "value": 1.44565976888253,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2020,
          "value": 0.144877925813982,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2021,
          "value": 3.06666666666673,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2022,
          "value": 6.87257438551097,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2023,
          "value": 5.94643667725823,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2024,
          "value": 2.2564981433876,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2006,
          "value": 2.4556616643929,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2007,
          "value": 2.38656150773327,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2008,
          "value": 3.52140856342539,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2009,
          "value": 1.96173173560109,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2010,
          "value": 2.49265472467065,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2011,
          "value": 3.8561124468282,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2012,
          "value": 2.5732347965453,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2013,
          "value": 2.29166666666659,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2014,
          "value": 1.45112016293279,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2015,
          "value": 0.36804684232536,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2016,
          "value": 1.0084173681141,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2017,
          "value": 2.55775577557747,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2018,
          "value": 2.29283990345938,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2019,
          "value": 1.73810460086513,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2020,
          "value": 0.989486703772491,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2021,
          "value": 2.51837109614213,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2022,
          "value": 7.92204883147902,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2023,
          "value": 6.79396706793963,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2024,
          "value": 3.2715729463592,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2006,
          "value": 1.67512449608723,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2007,
          "value": 1.4879980595386,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2008,
          "value": 2.81286194914787,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2009,
          "value": 0.0876204781574552,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2010,
          "value": 1.53112270420926,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2011,
          "value": 2.11159795174994,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2012,
          "value": 1.9541953161351,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2013,
          "value": 0.863715497861805,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2014,
          "value": 0.50775882293799,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2015,
          "value": 0.0375143805125182,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2016,
          "value": 0.18333486112386,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2017,
          "value": 1.03228275064662,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2018,
          "value": 1.85081508315502,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2019,
          "value": 1.10825492288294,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2020,
          "value": 0.476498852725066,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2021,
          "value": 1.64233141038385,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2022,
          "value": 5.22236748369735,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2023,
          "value": 4.87835726508441,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2024,
          "value": 1.99904942291463,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2006,
          "value": 5.79652337561634,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2007,
          "value": 6.37288135593231,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2008,
          "value": 8.34926704907581,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2009,
          "value": 10.8823529411764,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2010,
          "value": 11.9893899204244,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2011,
          "value": 8.91179336483371,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2012,
          "value": 9.47899691419801,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2013,
          "value": 10.0178784746102,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2014,
          "value": 6.66565671867899,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2015,
          "value": 4.90697344127256,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2016,
          "value": 4.94821634062141,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2017,
          "value": 3.32817337461298,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2018,
          "value": 3.9388264669163,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2019,
          "value": 3.72950573539129,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2020,
          "value": 6.62343677628535,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2021,
          "value": 5.13140747176369,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2022,
          "value": 6.69903414079852,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2023,
          "value": 5.64914318907925,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2024,
          "value": 4.95303550973656,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2006,
          "value": 4.18356812896909,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2007,
          "value": 3.64127299102652,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2008,
          "value": 5.67859390284168,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2009,
          "value": 4.88803479876799,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2010,
          "value": 5.03872690108075,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2011,
          "value": 6.6364496221309,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2012,
          "value": 5.40349914036997,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2013,
          "value": 6.20431066640101,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2014,
          "value": 6.32904015516139,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2015,
          "value": 9.02990102416136,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2016,
          "value": 8.73914352329393,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2017,
          "value": 3.44637335032669,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2018,
          "value": 3.66485028376729,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2019,
          "value": 3.73297621216894,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2020,
          "value": 3.21176803803376,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2021,
          "value": 8.30165975585673,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2022,
          "value": 9.28010608956873,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2023,
          "value": 4.59356282283204,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2024,
          "value": 4.36746407652337,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2006,
          "value": 2.00202539534161,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2007,
          "value": 2.13838399266837,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2008,
          "value": 2.37027067444299,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2009,
          "value": 0.299466803009299,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2010,
          "value": 1.77687154092627,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2011,
          "value": 2.91213508872351,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2012,
          "value": 1.51567823124517,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2013,
          "value": 0.938291897815317,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2014,
          "value": 1.90663590717861,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2015,
          "value": 1.12524136094277,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2016,
          "value": 1.42875954701085,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2017,
          "value": 1.59688412852977,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2018,
          "value": 2.26822567248103,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2019,
          "value": 1.94926902411593,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2020,
          "value": 0.716999632307827,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2021,
          "value": 3.39519318527528,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2022,
          "value": 6.80280115341613,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2023,
          "value": 3.87900159788426,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2024,
          "value": 2.38158383281173,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2006,
          "value": 3.55528773727026,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2007,
          "value": 2.32761128891476,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2008,
          "value": 4.35029854990048,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2009,
          "value": 1.77111716621254,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2010,
          "value": 2.91834002677376,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2011,
          "value": 3.3038501560874,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2012,
          "value": 1.76278015613196,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2013,
          "value": 2.4498886414254,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2014,
          "value": 2.48792270531404,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2015,
          "value": 1.50836672165921,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2016,
          "value": 1.27699094497324,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2017,
          "value": 1.94864740944527,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2018,
          "value": 1.91140094445691,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2019,
          "value": 1.61076787290379,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2020,
          "value": 0.846905537459305,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2021,
          "value": 2.86391042204994,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2022,
          "value": 6.59409671341846,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2023,
          "value": 5.5970149253731,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2024,
          "value": 3.1616142830575,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2006,
          "value": 13.1086720985296,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2007,
          "value": 6.40656281325701,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2008,
          "value": 10.2266645473148,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2009,
          "value": 4.38641555014731,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2010,
          "value": 5.13420400767928,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2011,
          "value": 5.3560477898215,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2012,
          "value": 4.27949999641975,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2013,
          "value": 6.41251330156418,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2014,
          "value": 6.39492540819922,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2015,
          "value": 6.36312113115612,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2016,
          "value": 3.5258051568793,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2017,
          "value": 3.80879806953157,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2018,
          "value": 3.1983464156241,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2019,
          "value": 3.03058664969487,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2020,
          "value": 1.9209680056685,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2021,
          "value": 1.56012990525673,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2022,
          "value": 4.20946383402165,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2023,
          "value": 3.67013142377007,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2006,
          "value": 2.00225801248819,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2007,
          "value": 1.77998644680372,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2008,
          "value": 5.78587598206755,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2009,
          "value": 2.936231535967,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2010,
          "value": 1.52832059732901,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2011,
          "value": 3.36931095333853,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2012,
          "value": 3.61121294940163,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2013,
          "value": 2.76789666082002,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2014,
          "value": 3.41194579807465,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2015,
          "value": 3.39809194746308,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2016,
          "value": 3.55717663556279,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2017,
          "value": 2.99490045809443,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2018,
          "value": 1.50915423024742,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2019,
          "value": 2.25212191358027,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2020,
          "value": 2.00241205759292,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2021,
          "value": 4.27166381536798,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2022,
          "value": 8.33370630096231,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2023,
          "value": 6.45561348369586,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "インフレ率（%）",
          "indicatorCode": "FP.CPI.TOTL.ZG",
          "year": 2024,
          "value": 2.00770739412712,
          "unit": "%"
        }
      ]
    },
    "NY.GDP.PCAP.CD": {
      "name": "一人当たりGDP（米ドル）",
      "data": [
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2006,
          "value": 35991.546002862,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2007,
          "value": 35779.0245416427,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2008,
          "value": 39876.3039685725,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2009,
          "value": 41308.9968370512,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2010,
          "value": 44968.1562349739,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2011,
          "value": 48760.0789494211,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2012,
          "value": 49145.2804308193,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2013,
          "value": 40898.6478964744,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2014,
          "value": 38475.3952461838,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2015,
          "value": 34960.6393843385,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2016,
          "value": 39375.4731620781,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2017,
          "value": 38834.0529341227,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2018,
          "value": 39751.1330982711,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2019,
          "value": 40415.9567649547,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2020,
          "value": 40040.7655055923,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2021,
          "value": 40058.5373276179,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2022,
          "value": 34017.2718075024,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2023,
          "value": 33766.5268253808,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2006,
          "value": 46301.9876485519,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2007,
          "value": 48050.227412195,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2008,
          "value": 48570.0594269601,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2009,
          "value": 47194.9500893872,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2010,
          "value": 48650.6643227232,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2011,
          "value": 50065.9789470675,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2012,
          "value": 51784.4114692048,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2013,
          "value": 53409.7507774372,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2014,
          "value": 55304.3155317137,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2015,
          "value": 57040.2082136605,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2016,
          "value": 58206.6141931844,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2017,
          "value": 60322.2614241747,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2018,
          "value": 63201.0458483771,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2019,
          "value": 65604.6815198734,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2020,
          "value": 64411.3731779373,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2021,
          "value": 71318.3073592183,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2022,
          "value": 78035.1753604212,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2023,
          "value": 82769.4122114216,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2006,
          "value": 2099.2194300499,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2007,
          "value": 2693.95873160283,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2008,
          "value": 3468.32706307504,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2009,
          "value": 3832.2274569094,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2010,
          "value": 4550.47394356715,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2011,
          "value": 5614.38602225277,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2012,
          "value": 6300.58217951734,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2013,
          "value": 7020.3860742288,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2014,
          "value": 7636.07434020616,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2015,
          "value": 8016.44559489998,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2016,
          "value": 8094.39016735149,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2017,
          "value": 8817.04560829162,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2018,
          "value": 9905.40638304527,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2019,
          "value": 10143.8602206165,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2020,
          "value": 10408.7195541075,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2021,
          "value": 12617.5051041181,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2022,
          "value": 12662.5826712038,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2023,
          "value": 12614.0617416421,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2006,
          "value": 36980.3349948954,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2007,
          "value": 42350.9217211489,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2008,
          "value": 46386.3295924799,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2009,
          "value": 42487.2137101496,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2010,
          "value": 42409.9356994694,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2011,
          "value": 47646.582043143,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2012,
          "value": 44735.5882319701,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2013,
          "value": 47220.0102098851,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2014,
          "value": 48971.0824722599,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2015,
          "value": 41911.0109851054,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2016,
          "value": 42961.0356905775,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2017,
          "value": 45526.5999576533,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2018,
          "value": 48874.8595028454,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2019,
          "value": 47623.8656074829,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2020,
          "value": 47379.765194548,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2021,
          "value": 52265.6541620571,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2022,
          "value": 49686.1154582583,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2023,
          "value": 54343.2265084958,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2006,
          "value": 44512.4590296865,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2007,
          "value": 50397.6854954706,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2008,
          "value": 47396.1202078484,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2009,
          "value": 38744.131693043,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2010,
          "value": 39598.957119545,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2011,
          "value": 42109.6418795749,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2012,
          "value": 42497.3404974322,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2013,
          "value": 43426.2981405143,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2014,
          "value": 47439.6165895125,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2015,
          "value": 44964.3911437292,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2016,
          "value": 40985.2351382417,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2017,
          "value": 40572.1214823783,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2018,
          "value": 43203.8141057739,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2019,
          "value": 42662.5353740311,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2020,
          "value": 40201.6812422928,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2021,
          "value": 46896.8662432834,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2022,
          "value": 45935.9276473925,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2023,
          "value": 49463.8554617343,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2006,
          "value": 36431.5658906555,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2007,
          "value": 41486.1907828787,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2008,
          "value": 45464.8181385158,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2009,
          "value": 41728.0884164132,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2010,
          "value": 40694.8211697025,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2011,
          "value": 43929.7840873812,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2012,
          "value": 40863.5814412333,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2013,
          "value": 42669.1795111893,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2014,
          "value": 43148.0459288416,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2015,
          "value": 36702.4323733379,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2016,
          "value": 37024.2157133669,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2017,
          "value": 38687.1626407164,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2018,
          "value": 41418.1766484844,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2019,
          "value": 40408.2848574751,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2020,
          "value": 39169.8606000707,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2021,
          "value": 43725.0999521245,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2022,
          "value": 41082.8119320747,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2023,
          "value": 44690.9345395117,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2006,
          "value": 801.668353659022,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2007,
          "value": 1021.88707706826,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2008,
          "value": 992.519584923828,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2009,
          "value": 1094.94974598436,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2010,
          "value": 1347.51939071367,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2011,
          "value": 1445.46127486037,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2012,
          "value": 1429.32199520032,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2013,
          "value": 1432.84397512195,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2014,
          "value": 1553.88396075118,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2015,
          "value": 1583.99815907985,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2016,
          "value": 1707.50892912243,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2017,
          "value": 1950.10468280866,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2018,
          "value": 1966.25455171679,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2019,
          "value": 2041.42863698585,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2020,
          "value": 1907.04251637669,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2021,
          "value": 2239.61384367482,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2022,
          "value": 2352.61392452078,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2023,
          "value": 2480.79208721621,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2006,
          "value": 5934.1447107274,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2007,
          "value": 7409.69130727951,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2008,
          "value": 8908.33176567294,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2009,
          "value": 8678.65922498836,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2010,
          "value": 11403.2821284616,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2011,
          "value": 13396.6243566047,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2012,
          "value": 12521.7213530369,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2013,
          "value": 12458.891214816,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2014,
          "value": 12274.9939689363,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2015,
          "value": 8936.19661756825,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2016,
          "value": 8836.28652636996,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2017,
          "value": 10080.5092817775,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2018,
          "value": 9300.66164936497,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2019,
          "value": 9029.83326742175,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2020,
          "value": 7074.19378281866,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2021,
          "value": 7972.53665048385,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2022,
          "value": 9281.33334441234,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2023,
          "value": 10294.866680778,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2006,
          "value": 40504.0370977806,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2007,
          "value": 44660.0838892281,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2008,
          "value": 46710.2526864484,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2009,
          "value": 40874.8831932903,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2010,
          "value": 47560.6666009406,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2011,
          "value": 52223.8588398531,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2012,
          "value": 52670.3447335415,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2013,
          "value": 52638.1187235237,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2014,
          "value": 50960.8431174661,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2015,
          "value": 43594.1941045394,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2016,
          "value": 42314.0615817218,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2017,
          "value": 45129.628116623,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2018,
          "value": 46539.1761570405,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2019,
          "value": 46352.8693445211,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2020,
          "value": 43537.839298904,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2021,
          "value": 52496.8441693242,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2022,
          "value": 55509.393176404,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2023,
          "value": 53431.1857063879,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2006,
          "value": 36595.7071548423,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2007,
          "value": 41051.6120652288,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2008,
          "value": 49701.2817843335,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2009,
          "value": 42816.5674002829,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2010,
          "value": 52144.6654705468,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2011,
          "value": 62605.600458306,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2012,
          "value": 68072.8732340801,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2013,
          "value": 68190.7010035651,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2014,
          "value": 62544.0873773726,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2015,
          "value": 56739.0265346593,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2016,
          "value": 49888.0410842736,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2017,
          "value": 53901.7145392154,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2018,
          "value": 57196.4220783778,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2019,
          "value": 54972.7017885437,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2020,
          "value": 51791.540179984,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2021,
          "value": 60607.7788605166,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2022,
          "value": 64997.0136536475,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2023,
          "value": 64820.9117890026,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2006,
          "value": 1558.31562847164,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2007,
          "value": 1823.21976255073,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2008,
          "value": 2124.55483920617,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2009,
          "value": 2218.48541852977,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2010,
          "value": 3065.68348366636,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2011,
          "value": 3579.46442452684,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2012,
          "value": 3632.272540431,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2013,
          "value": 3566.60284506078,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2014,
          "value": 3441.06808455308,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2015,
          "value": 3288.22269737572,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2016,
          "value": 3521.46943456251,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2017,
          "value": 3798.88326177649,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2018,
          "value": 3860.95353077708,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2019,
          "value": 4106.94856173421,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2020,
          "value": 3853.70288778903,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2021,
          "value": 4287.17313989405,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2022,
          "value": 4730.74548910499,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2023,
          "value": 4876.31432703188,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2006,
          "value": 3129.55996496982,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2007,
          "value": 3581.0893081917,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2008,
          "value": 4197.58444634142,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2009,
          "value": 4181.18755462253,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2010,
          "value": 5072.11494019615,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2011,
          "value": 5861.35793645245,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2012,
          "value": 6519.37852981527,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2013,
          "value": 6746.80025696601,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2014,
          "value": 6667.13410360861,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2015,
          "value": 6231.71150338894,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2016,
          "value": 6217.03599995447,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2017,
          "value": 6736.16693725487,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2018,
          "value": 6978.49121548627,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2019,
          "value": 7037.00803692604,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2020,
          "value": 6133.32552410183,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2021,
          "value": 6826.9720069846,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2022,
          "value": 7363.27206939639,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "一人当たりGDP（米ドル）",
          "indicatorCode": "NY.GDP.PCAP.CD",
          "year": 2023,
          "value": 7906.58502858,
          "unit": "米ドル"
        }
      ]
    },
    "NE.TRD.GNFS.ZS": {
      "name": "貿易（GDP比%）",
      "data": [
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2006,
          "value": 30.0163760986692,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2007,
          "value": 32.816578051879,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2008,
          "value": 34.1294765412245,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2009,
          "value": 24.3901665338555,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2010,
          "value": 28.4984726938389,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2011,
          "value": 30.1949607286296,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2012,
          "value": 30.4709109171752,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2013,
          "value": 33.9787686509511,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2014,
          "value": 37.4314345686579,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2015,
          "value": 35.4274083544798,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2016,
          "value": 31.3102468455884,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2017,
          "value": 34.4232135721686,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2018,
          "value": 36.609931802107,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2019,
          "value": 35.2164181084145,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2020,
          "value": 31.3257931242986,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2021,
          "value": 36.7714832870467,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2022,
          "value": 46.8437321391913,
          "unit": "%"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2023,
          "value": 45.1626484842154,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2006,
          "value": 26.9752858058903,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2007,
          "value": 28.0120155631098,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2008,
          "value": 29.8677875257061,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2009,
          "value": 24.759527635837,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2010,
          "value": 28.2198829408336,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2011,
          "value": 30.842478575914,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2012,
          "value": 30.681839575193,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2013,
          "value": 29.9413062848227,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2014,
          "value": 29.906569337428,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2015,
          "value": 27.6882139340768,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2016,
          "value": 26.4525977865465,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2017,
          "value": 27.1253382222874,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2018,
          "value": 27.4453591302618,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2019,
          "value": 26.2584806245428,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2020,
          "value": 23.0797778694073,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2021,
          "value": 25.2136560307765,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2022,
          "value": 26.891689830077,
          "unit": "%"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2023,
          "value": 24.8993631439946,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2006,
          "value": 64.4791912001744,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2007,
          "value": 62.1936250851713,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2008,
          "value": 57.6123422415661,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2009,
          "value": 45.1849762070479,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2010,
          "value": 50.7170776627003,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2011,
          "value": 50.7409045864209,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2012,
          "value": 48.2675223674033,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2013,
          "value": 46.7443755773553,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2014,
          "value": 44.9052159543496,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2015,
          "value": 39.4641693353018,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2016,
          "value": 36.8944150170789,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2017,
          "value": 37.6324132404263,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2018,
          "value": 37.5657841021374,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2019,
          "value": 35.8900960342425,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2020,
          "value": 34.7542956996066,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2021,
          "value": 37.3019908656372,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2022,
          "value": 38.3514820836722,
          "unit": "%"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2023,
          "value": 37.3167713639344,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2006,
          "value": 72.7591934646234,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2007,
          "value": 74.8838416816798,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2008,
          "value": 76.1014102128448,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2009,
          "value": 66.1152685310257,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2010,
          "value": 73.8626407651201,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2011,
          "value": 78.4073134605377,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2012,
          "value": 79.3004877909427,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2013,
          "value": 77.5643815741748,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2014,
          "value": 76.8303312709159,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2015,
          "value": 77.791356764377,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2016,
          "value": 75.9845875141969,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2017,
          "value": 77.5666369468435,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2018,
          "value": 79.227659692288,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2019,
          "value": 79.1337471144706,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2020,
          "value": 72.9932572283324,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2021,
          "value": 80.15661805106,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2022,
          "value": 89.0641273695259,
          "unit": "%"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2023,
          "value": 82.7991064495705,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2006,
          "value": 56.9144274808123,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2007,
          "value": 52.9643534370859,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2008,
          "value": 56.6986069277108,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2009,
          "value": 55.004384033595,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2010,
          "value": 59.2727749722888,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2011,
          "value": 63.5654009707745,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2012,
          "value": 62.2259827334183,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2013,
          "value": 61.9991119149908,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2014,
          "value": 59.0948041195932,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2015,
          "value": 57.2035496863734,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2016,
          "value": 59.7003984143761,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2017,
          "value": 63.1216500310687,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2018,
          "value": 64.542648250433,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2019,
          "value": 64.6651336372235,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2020,
          "value": 58.7811375973028,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2021,
          "value": 58.5845366237858,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2022,
          "value": 68.8805301397863,
          "unit": "%"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2023,
          "value": 63.878877761965,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2006,
          "value": 57.8692775292673,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2007,
          "value": 58.1525611309659,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2008,
          "value": 59.1797928411748,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2009,
          "value": 52.1991123027613,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2010,
          "value": 56.587555247796,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2011,
          "value": 60.6056354816406,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2012,
          "value": 61.6589570771102,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2013,
          "value": 61.8192338733962,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2014,
          "value": 62.1992669379507,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2015,
          "value": 63.5046871956484,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2016,
          "value": 63.3427564383351,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2017,
          "value": 65.3958481559711,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2018,
          "value": 66.8022607812266,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2019,
          "value": 66.4289771741449,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2020,
          "value": 58.8388907240647,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2021,
          "value": 63.788482630872,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2022,
          "value": 75.7901436111221,
          "unit": "%"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2023,
          "value": 70.5595547931931,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2006,
          "value": 45.7244804992652,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2007,
          "value": 45.686268679348,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2008,
          "value": 53.3682204392226,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2009,
          "value": 46.2728696428837,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2010,
          "value": 49.2552064974161,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2011,
          "value": 55.6238800135298,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2012,
          "value": 55.7937217287511,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2013,
          "value": 53.8441319466777,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2014,
          "value": 48.9221857470669,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2015,
          "value": 41.9229138658647,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2016,
          "value": 40.082485713276,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2017,
          "value": 40.7424969545225,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2018,
          "value": 43.6169693323889,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2019,
          "value": 39.9054035306442,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2020,
          "value": 37.7581053292768,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2021,
          "value": 45.4230887840446,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2022,
          "value": 49.9653199690324,
          "unit": "%"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2023,
          "value": 45.9218502164429,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2006,
          "value": 26.0416998853051,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2007,
          "value": 25.2926113736798,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2008,
          "value": 27.2575694164795,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2009,
          "value": 22.1059756047068,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2010,
          "value": 22.7721781120049,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2011,
          "value": 23.9344051753252,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2012,
          "value": 25.1142736086534,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2013,
          "value": 25.7859573255328,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2014,
          "value": 24.6854058131291,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2015,
          "value": 26.9536259360114,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2016,
          "value": 24.5336820804399,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2017,
          "value": 24.3197343746749,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2018,
          "value": 28.8762033759743,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2019,
          "value": 28.8902578679414,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2020,
          "value": 32.3020785463409,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2021,
          "value": 37.6563307568833,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2022,
          "value": 38.8160659763397,
          "unit": "%"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2023,
          "value": 33.8539465938547,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2006,
          "value": 68.0521644769988,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2007,
          "value": 66.2834197482347,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2008,
          "value": 67.0236083618983,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2009,
          "value": 58.4743918224897,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2010,
          "value": 60.2081215044483,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2011,
          "value": 62.4987387708328,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2012,
          "value": 62.5955489395005,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2013,
          "value": 62.2310749013405,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2014,
          "value": 64.3786621564923,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2015,
          "value": 66.1649020669781,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2016,
          "value": 65.3636845215556,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2017,
          "value": 65.1010608504649,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2018,
          "value": 66.5998858508762,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2019,
          "value": 66.1714852804959,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2020,
          "value": 61.1567709632763,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2021,
          "value": 62.4241644131018,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2022,
          "value": 67.5588963664949,
          "unit": "%"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2023,
          "value": 67.1924941392879,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2006,
          "value": 41.5594471705758,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2007,
          "value": 42.0080200326348,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2008,
          "value": 42.8467764017331,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2009,
          "value": 45.7408630288694,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2010,
          "value": 40.5215889941287,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2011,
          "value": 41.851132029052,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2012,
          "value": 43.1642964994556,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2013,
          "value": 41.2728790174276,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2014,
          "value": 42.4840230270994,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2015,
          "value": 41.6639319280984,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2016,
          "value": 40.974079475775,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2017,
          "value": 42.2037316765804,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2018,
          "value": 43.7360650798433,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2019,
          "value": 46.1875018936291,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2020,
          "value": 44.6644560654359,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2021,
          "value": 40.3024802691697,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2022,
          "value": 45.8217702307271,
          "unit": "%"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2023,
          "value": 49.2251840594381,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2006,
          "value": 56.6571268148865,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2007,
          "value": 54.8292499782075,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2008,
          "value": 58.5613996312701,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2009,
          "value": 45.5121213687054,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2010,
          "value": 46.7012738758737,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2011,
          "value": 50.1800131841104,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2012,
          "value": 49.5828982992627,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2013,
          "value": 48.6373726752893,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2014,
          "value": 48.0801755855227,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2015,
          "value": 41.9376402415294,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2016,
          "value": 37.4213418023318,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2017,
          "value": 39.3554970704606,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2018,
          "value": 43.0743089552002,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2019,
          "value": 37.6277775357108,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2020,
          "value": 32.9721754002427,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2021,
          "value": 40.2047582749671,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2022,
          "value": 45.4658986816744,
          "unit": "%"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2023,
          "value": 41.3156667619874,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2006,
          "value": 51.7850560338442,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2007,
          "value": 55.6881132836815,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2008,
          "value": 58.4337673899053,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2009,
          "value": 48.1119296153519,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2010,
          "value": 51.6728089370033,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2011,
          "value": 55.9882802838607,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2012,
          "value": 52.6198952632294,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2013,
          "value": 49.7871424471444,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2014,
          "value": 46.8531210912899,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2015,
          "value": 45.1627686891148,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2016,
          "value": 45.3888411964154,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2017,
          "value": 47.5135503619971,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2018,
          "value": 48.631470171736,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2019,
          "value": 46.9435053754409,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2020,
          "value": 44.245967197744,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2021,
          "value": 55.2742548782987,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2022,
          "value": 57.2510734358091,
          "unit": "%"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "貿易（GDP比%）",
          "indicatorCode": "NE.TRD.GNFS.ZS",
          "year": 2023,
          "value": 50.909508314535,
          "unit": "%"
        }
      ]
    },
    "GC.DPT.TOTL.GD.ZS": {
      "name": "政府債務（GDP比%）",
      "data": []
    },
    "SP.POP.TOTL": {
      "name": "総人口",
      "data": [
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2006,
          "value": 127854000,
          "unit": "人"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2007,
          "value": 128001000,
          "unit": "人"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2008,
          "value": 128063000,
          "unit": "人"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2009,
          "value": 128047000,
          "unit": "人"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2010,
          "value": 128070000,
          "unit": "人"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2011,
          "value": 127833000,
          "unit": "人"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2012,
          "value": 127629000,
          "unit": "人"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2013,
          "value": 127445000,
          "unit": "人"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2014,
          "value": 127276000,
          "unit": "人"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2015,
          "value": 127141000,
          "unit": "人"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2016,
          "value": 127076000,
          "unit": "人"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2017,
          "value": 126972000,
          "unit": "人"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2018,
          "value": 126811000,
          "unit": "人"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2019,
          "value": 126633000,
          "unit": "人"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2020,
          "value": 126261000,
          "unit": "人"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2021,
          "value": 125681593,
          "unit": "人"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2022,
          "value": 125124989,
          "unit": "人"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2023,
          "value": 124516650,
          "unit": "人"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2006,
          "value": 298379912,
          "unit": "人"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2007,
          "value": 301231207,
          "unit": "人"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2008,
          "value": 304093966,
          "unit": "人"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2009,
          "value": 306771529,
          "unit": "人"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2010,
          "value": 309327143,
          "unit": "人"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2011,
          "value": 311583481,
          "unit": "人"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2012,
          "value": 313877662,
          "unit": "人"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2013,
          "value": 316059947,
          "unit": "人"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2014,
          "value": 318386329,
          "unit": "人"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2015,
          "value": 320738994,
          "unit": "人"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2016,
          "value": 323071755,
          "unit": "人"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2017,
          "value": 325122128,
          "unit": "人"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2018,
          "value": 326838199,
          "unit": "人"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2019,
          "value": 328329953,
          "unit": "人"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2020,
          "value": 331526933,
          "unit": "人"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2021,
          "value": 332048977,
          "unit": "人"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2022,
          "value": 333271411,
          "unit": "人"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2023,
          "value": 334914895,
          "unit": "人"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2006,
          "value": 1311020000,
          "unit": "人"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2007,
          "value": 1317885000,
          "unit": "人"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2008,
          "value": 1324655000,
          "unit": "人"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2009,
          "value": 1331260000,
          "unit": "人"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2010,
          "value": 1337705000,
          "unit": "人"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2011,
          "value": 1345035000,
          "unit": "人"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2012,
          "value": 1354190000,
          "unit": "人"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2013,
          "value": 1363240000,
          "unit": "人"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2014,
          "value": 1371860000,
          "unit": "人"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2015,
          "value": 1379860000,
          "unit": "人"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2016,
          "value": 1387790000,
          "unit": "人"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2017,
          "value": 1396215000,
          "unit": "人"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2018,
          "value": 1402760000,
          "unit": "人"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2019,
          "value": 1407745000,
          "unit": "人"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2020,
          "value": 1411100000,
          "unit": "人"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2021,
          "value": 1412360000,
          "unit": "人"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2022,
          "value": 1412175000,
          "unit": "人"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2023,
          "value": 1410710000,
          "unit": "人"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2006,
          "value": 82376451,
          "unit": "人"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2007,
          "value": 82266372,
          "unit": "人"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2008,
          "value": 82110097,
          "unit": "人"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2009,
          "value": 81902307,
          "unit": "人"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2010,
          "value": 81776930,
          "unit": "人"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2011,
          "value": 80274983,
          "unit": "人"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2012,
          "value": 80425823,
          "unit": "人"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2013,
          "value": 80645605,
          "unit": "人"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2014,
          "value": 80982500,
          "unit": "人"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2015,
          "value": 81686611,
          "unit": "人"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2016,
          "value": 82348669,
          "unit": "人"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2017,
          "value": 82657002,
          "unit": "人"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2018,
          "value": 82905782,
          "unit": "人"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2019,
          "value": 83092962,
          "unit": "人"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2020,
          "value": 83160871,
          "unit": "人"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2021,
          "value": 83196078,
          "unit": "人"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2022,
          "value": 83797985,
          "unit": "人"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2023,
          "value": 83280000,
          "unit": "人"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2006,
          "value": 60846820,
          "unit": "人"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2007,
          "value": 61322463,
          "unit": "人"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2008,
          "value": 61806995,
          "unit": "人"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2009,
          "value": 62276270,
          "unit": "人"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2010,
          "value": 62766365,
          "unit": "人"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2011,
          "value": 63258810,
          "unit": "人"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2012,
          "value": 63700215,
          "unit": "人"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2013,
          "value": 64128273,
          "unit": "人"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2014,
          "value": 64602298,
          "unit": "人"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2015,
          "value": 65116219,
          "unit": "人"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2016,
          "value": 65611593,
          "unit": "人"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2017,
          "value": 66058859,
          "unit": "人"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2018,
          "value": 66460344,
          "unit": "人"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2019,
          "value": 66836327,
          "unit": "人"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2020,
          "value": 67081234,
          "unit": "人"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2021,
          "value": 67026292,
          "unit": "人"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2022,
          "value": 67791000,
          "unit": "人"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2023,
          "value": 68350000,
          "unit": "人"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2006,
          "value": 63622342,
          "unit": "人"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2007,
          "value": 64016890,
          "unit": "人"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2008,
          "value": 64375116,
          "unit": "人"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2009,
          "value": 64706436,
          "unit": "人"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2010,
          "value": 65026211,
          "unit": "人"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2011,
          "value": 65340830,
          "unit": "人"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2012,
          "value": 65657659,
          "unit": "人"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2013,
          "value": 65997932,
          "unit": "人"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2014,
          "value": 66312067,
          "unit": "人"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2015,
          "value": 66548272,
          "unit": "人"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2016,
          "value": 66724104,
          "unit": "人"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2017,
          "value": 66918020,
          "unit": "人"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2018,
          "value": 67158348,
          "unit": "人"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2019,
          "value": 67382061,
          "unit": "人"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2020,
          "value": 67601110,
          "unit": "人"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2021,
          "value": 67842811,
          "unit": "人"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2022,
          "value": 68065015,
          "unit": "人"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2023,
          "value": 68287487,
          "unit": "人"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2006,
          "value": 1172878890,
          "unit": "人"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2007,
          "value": 1190676021,
          "unit": "人"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2008,
          "value": 1207930964,
          "unit": "人"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2009,
          "value": 1225524753,
          "unit": "人"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2010,
          "value": 1243481564,
          "unit": "人"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2011,
          "value": 1261224954,
          "unit": "人"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2012,
          "value": 1278674502,
          "unit": "人"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2013,
          "value": 1295829511,
          "unit": "人"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2014,
          "value": 1312277191,
          "unit": "人"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2015,
          "value": 1328024498,
          "unit": "人"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2016,
          "value": 1343944296,
          "unit": "人"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2017,
          "value": 1359657400,
          "unit": "人"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2018,
          "value": 1374659064,
          "unit": "人"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2019,
          "value": 1389030312,
          "unit": "人"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2020,
          "value": 1402617695,
          "unit": "人"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2021,
          "value": 1414203896,
          "unit": "人"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2022,
          "value": 1425423212,
          "unit": "人"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2023,
          "value": 1438069596,
          "unit": "人"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2006,
          "value": 186653106,
          "unit": "人"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2007,
          "value": 188552320,
          "unit": "人"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2008,
          "value": 190367302,
          "unit": "人"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2009,
          "value": 192079951,
          "unit": "人"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2010,
          "value": 193701929,
          "unit": "人"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2011,
          "value": 195284734,
          "unit": "人"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2012,
          "value": 196876111,
          "unit": "人"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2013,
          "value": 198478299,
          "unit": "人"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2014,
          "value": 200085127,
          "unit": "人"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2015,
          "value": 201675532,
          "unit": "人"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2016,
          "value": 203218114,
          "unit": "人"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2017,
          "value": 204703445,
          "unit": "人"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2018,
          "value": 206107261,
          "unit": "人"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2019,
          "value": 207455459,
          "unit": "人"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2020,
          "value": 208660842,
          "unit": "人"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2021,
          "value": 209550294,
          "unit": "人"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2022,
          "value": 210306415,
          "unit": "人"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2023,
          "value": 211140729,
          "unit": "人"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2006,
          "value": 32571193,
          "unit": "人"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2007,
          "value": 32888886,
          "unit": "人"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2008,
          "value": 33247298,
          "unit": "人"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2009,
          "value": 33630069,
          "unit": "人"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2010,
          "value": 34005902,
          "unit": "人"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2011,
          "value": 34339221,
          "unit": "人"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2012,
          "value": 34713395,
          "unit": "人"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2013,
          "value": 35080992,
          "unit": "人"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2014,
          "value": 35434066,
          "unit": "人"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2015,
          "value": 35704498,
          "unit": "人"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2016,
          "value": 36110803,
          "unit": "人"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2017,
          "value": 36545075,
          "unit": "人"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2018,
          "value": 37072620,
          "unit": "人"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2019,
          "value": 37618495,
          "unit": "人"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2020,
          "value": 38028638,
          "unit": "人"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2021,
          "value": 38239864,
          "unit": "人"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2022,
          "value": 38939056,
          "unit": "人"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2023,
          "value": 40097761,
          "unit": "人"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2006,
          "value": 20450966,
          "unit": "人"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2007,
          "value": 20827622,
          "unit": "人"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2008,
          "value": 21249199,
          "unit": "人"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2009,
          "value": 21691653,
          "unit": "人"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2010,
          "value": 22031750,
          "unit": "人"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2011,
          "value": 22340024,
          "unit": "人"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2012,
          "value": 22733465,
          "unit": "人"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2013,
          "value": 23128129,
          "unit": "人"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2014,
          "value": 23475686,
          "unit": "人"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2015,
          "value": 23815995,
          "unit": "人"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2016,
          "value": 24190907,
          "unit": "人"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2017,
          "value": 24592588,
          "unit": "人"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2018,
          "value": 24963258,
          "unit": "人"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2019,
          "value": 25334826,
          "unit": "人"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2020,
          "value": 25649248,
          "unit": "人"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2021,
          "value": 25685412,
          "unit": "人"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2022,
          "value": 26014399,
          "unit": "人"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2023,
          "value": 26658948,
          "unit": "人"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2006,
          "value": 233951652,
          "unit": "人"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2007,
          "value": 237062337,
          "unit": "人"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2008,
          "value": 240157903,
          "unit": "人"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2009,
          "value": 243220028,
          "unit": "人"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2010,
          "value": 246305322,
          "unit": "人"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2011,
          "value": 249470032,
          "unit": "人"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2012,
          "value": 252698525,
          "unit": "人"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2013,
          "value": 255852467,
          "unit": "人"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2014,
          "value": 258877399,
          "unit": "人"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2015,
          "value": 261799249,
          "unit": "人"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2016,
          "value": 264627418,
          "unit": "人"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2017,
          "value": 267346658,
          "unit": "人"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2018,
          "value": 269951846,
          "unit": "人"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2019,
          "value": 272489381,
          "unit": "人"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2020,
          "value": 274814866,
          "unit": "人"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2021,
          "value": 276758053,
          "unit": "人"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2022,
          "value": 278830529,
          "unit": "人"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2023,
          "value": 281190067,
          "unit": "人"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2006,
          "value": 28324491,
          "unit": "人"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2007,
          "value": 28530699,
          "unit": "人"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2008,
          "value": 28719041,
          "unit": "人"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2009,
          "value": 28896811,
          "unit": "人"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2010,
          "value": 29086019,
          "unit": "人"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2011,
          "value": 29304086,
          "unit": "人"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2012,
          "value": 29550366,
          "unit": "人"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2013,
          "value": 29817919,
          "unit": "人"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2014,
          "value": 30115826,
          "unit": "人"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2015,
          "value": 30457600,
          "unit": "人"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2016,
          "value": 30866494,
          "unit": "人"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2017,
          "value": 31324637,
          "unit": "人"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2018,
          "value": 31897584,
          "unit": "人"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2019,
          "value": 32449303,
          "unit": "人"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2020,
          "value": 32838579,
          "unit": "人"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2021,
          "value": 33155882,
          "unit": "人"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2022,
          "value": 33475438,
          "unit": "人"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "総人口",
          "indicatorCode": "SP.POP.TOTL",
          "year": 2023,
          "value": 33845617,
          "unit": "人"
        }
      ]
    },
    "BX.KLT.DINV.CD.WD": {
      "name": "外国直接投資（米ドル）",
      "data": [
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2006,
          "value": -2396909736.30508,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2007,
          "value": 21631204435.6847,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2008,
          "value": 24624845329.5648,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2009,
          "value": 12226471578.7439,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2010,
          "value": 7440979284.16286,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2011,
          "value": -850717035.068239,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2012,
          "value": 546962692.190728,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2013,
          "value": 10648441636.2071,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2014,
          "value": 19752249424.0871,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2015,
          "value": 5252218412.39172,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2016,
          "value": 40954181468.5533,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2017,
          "value": 18802251208.1069,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2018,
          "value": 25289367857.8518,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2019,
          "value": 39960544340.0141,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2020,
          "value": 62584719398.0912,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2021,
          "value": 35027163875.7213,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2022,
          "value": 48124316590.0529,
          "unit": "米ドル"
        },
        {
          "country": "Japan",
          "countryCode": "JPN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2023,
          "value": 20440829347.4902,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2006,
          "value": 298463000000,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2007,
          "value": 346613000000,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2008,
          "value": 341092000000,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2009,
          "value": 161083000000,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2010,
          "value": 264039000000,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2011,
          "value": 263497000000,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2012,
          "value": 250345000000,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2013,
          "value": 288131000000,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2014,
          "value": 251856000000,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2015,
          "value": 511434000000,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2016,
          "value": 474388000000,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2017,
          "value": 380823000000,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2018,
          "value": 214715000000,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2019,
          "value": 315984000000,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2020,
          "value": 137066000000,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2021,
          "value": 475805000000,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2022,
          "value": 408982000000,
          "unit": "米ドル"
        },
        {
          "country": "United States",
          "countryCode": "USA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2023,
          "value": 348784000000,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2006,
          "value": 124082035618.506,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2007,
          "value": 156249335203.202,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2008,
          "value": 171534650311.569,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2009,
          "value": 131057052869.5,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2010,
          "value": 243703434558.178,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2011,
          "value": 280072219149.935,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2012,
          "value": 241213868161.42,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2013,
          "value": 290928431467.003,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2014,
          "value": 268097181064.335,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2015,
          "value": 242489331627.399,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2016,
          "value": 174749584584.051,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2017,
          "value": 166083755721.649,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2018,
          "value": 235365050036.341,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2019,
          "value": 187169822364.755,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2020,
          "value": 253095616058.58,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2021,
          "value": 344074977062.48,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2022,
          "value": 190203789092.51,
          "unit": "米ドル"
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2023,
          "value": 42727679407.24,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2006,
          "value": 87444159239.0628,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2007,
          "value": 50847183837.0148,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2008,
          "value": 30954735498.025,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2009,
          "value": 56701916794.97,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2010,
          "value": 86037502102.1644,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2011,
          "value": 97535403952.5493,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2012,
          "value": 65443087632.2705,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2013,
          "value": 67199694458.9368,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2014,
          "value": 17356720097.6155,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2015,
          "value": 62418993509.249,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2016,
          "value": 58132711370.7803,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2017,
          "value": 108786501529.106,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2018,
          "value": 162250938125.842,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2019,
          "value": 75463438450.8917,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2020,
          "value": 176781024357.228,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2021,
          "value": 102148693815.945,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2022,
          "value": 62728998895.9956,
          "unit": "米ドル"
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2023,
          "value": 19515498091.7767,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2006,
          "value": 203636431868.244,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2007,
          "value": 209514959646.908,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2008,
          "value": 253454117907.322,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2009,
          "value": 14547108445.0914,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2010,
          "value": 66734551294.0913,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2011,
          "value": 27012050072.3452,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2012,
          "value": 46750789727.7264,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2013,
          "value": 54473175400.2415,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2014,
          "value": 58890445252.714,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2015,
          "value": 45333483122.0899,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2016,
          "value": 324813224213.021,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2017,
          "value": 125358809934.121,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2018,
          "value": -25055440306.9073,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2019,
          "value": 19790761929.1276,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2020,
          "value": 157185559299.99,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2021,
          "value": 5055966700.84887,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2022,
          "value": 44897919400.6377,
          "unit": "米ドル"
        },
        {
          "country": "United Kingdom",
          "countryCode": "GBR",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2023,
          "value": -89474261725.1577,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2006,
          "value": 78957053786.1349,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2007,
          "value": 83777598395.4499,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2008,
          "value": 67997446904.9733,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2009,
          "value": 18422928061.9131,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2010,
          "value": 38889439213.3126,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2011,
          "value": 44205811126.5792,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2012,
          "value": 32944663317.8722,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2013,
          "value": 33461592993.8228,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2014,
          "value": 5063648998.48312,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2015,
          "value": 43133325471.3567,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2016,
          "value": 35623357280.0881,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2017,
          "value": 43733253503.8812,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2018,
          "value": 77493098693.2378,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2019,
          "value": 53499337503.7413,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2020,
          "value": 19368829836.4654,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2021,
          "value": 98012545019.1631,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2022,
          "value": 109574904464.643,
          "unit": "米ドル"
        },
        {
          "country": "France",
          "countryCode": "FRA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2023,
          "value": 8803377981.64788,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2006,
          "value": 20029119267.1396,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2007,
          "value": 25227740886.6819,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2008,
          "value": 43406277075.8109,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2009,
          "value": 35581372929.6642,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2010,
          "value": 27396885033.7839,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2011,
          "value": 36498654597.8589,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2012,
          "value": 23995685014.2142,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2013,
          "value": 28153031270.3203,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2014,
          "value": 34576643694.1383,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2015,
          "value": 44009492129.5319,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2016,
          "value": 44458571545.798,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2017,
          "value": 39966091358.7384,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2018,
          "value": 42117450737.2644,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2019,
          "value": 50610647353.5912,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2020,
          "value": 64362364994.3754,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2021,
          "value": 44727277562.881,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2022,
          "value": 49940258404.266,
          "unit": "米ドル"
        },
        {
          "country": "India",
          "countryCode": "IND",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2023,
          "value": 28078983530.3979,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2006,
          "value": 19418085598.0794,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2007,
          "value": 44579492463.6336,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2008,
          "value": 50716402711.4787,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2009,
          "value": 31480931700,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2010,
          "value": 82389932468.07,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2011,
          "value": 102427228231.42,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2012,
          "value": 92568388321.34,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2013,
          "value": 75211029129.4,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2014,
          "value": 87713983217.24,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2015,
          "value": 64738153494.44,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2016,
          "value": 74294627801.19,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2017,
          "value": 68885491315.23,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2018,
          "value": 78183840044.98,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2019,
          "value": 69174411753.45,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2020,
          "value": 38270116307.45,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2021,
          "value": 46440503520.19,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2022,
          "value": 74606361830.23,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2023,
          "value": 62441880089.59,
          "unit": "米ドル"
        },
        {
          "country": "Brazil",
          "countryCode": "BRA",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2024,
          "value": 71069841874.2,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2006,
          "value": 64302303096.8668,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2007,
          "value": 120451484862.004,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2008,
          "value": 70119614332.5095,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2009,
          "value": 20951090410.3131,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2010,
          "value": 29714744325.4741,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2011,
          "value": 38338330427.428,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2012,
          "value": 49368985104.1991,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2013,
          "value": 67027866778.2682,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2014,
          "value": 64174605785.6347,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2015,
          "value": 59986208237.0735,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2016,
          "value": 34201872160.6085,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2017,
          "value": 25357801000.497,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2018,
          "value": 42603762048.5971,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2019,
          "value": 48942300762.2452,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2020,
          "value": 29123011879.2998,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2021,
          "value": 60189690111.8854,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2022,
          "value": 50229920776.0187,
          "unit": "米ドル"
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2023,
          "value": 42076242120.3715,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2006,
          "value": 30551100656.5983,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2007,
          "value": 44440876036.5147,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2008,
          "value": 45170097261.1184,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2009,
          "value": 28932973452.6035,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2010,
          "value": 35554698682.4247,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2011,
          "value": 65578266555.523,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2012,
          "value": 57571285654.7447,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2013,
          "value": 54472699003.596,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2014,
          "value": 63204516347.8726,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2015,
          "value": 46892808567.8516,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2016,
          "value": 42970225977.7088,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2017,
          "value": 48199372039.9015,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2018,
          "value": 60686639529.923,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2019,
          "value": 38745129661.1196,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2020,
          "value": 17976843681.3118,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2021,
          "value": 31518948092.7139,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2022,
          "value": 70364982117.0187,
          "unit": "米ドル"
        },
        {
          "country": "Australia",
          "countryCode": "AUS",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2023,
          "value": 32619020577.2036,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2006,
          "value": 4914201435.40071,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2007,
          "value": 6928480000,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2008,
          "value": 9318453649.82664,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2009,
          "value": 4877369178.43651,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2010,
          "value": 15292009410.5099,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2011,
          "value": 20564938226.7185,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2012,
          "value": 21200778607.8727,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2013,
          "value": 23281742361.5305,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2014,
          "value": 25120732059.5134,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2015,
          "value": 19779127976.9576,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2016,
          "value": 4541713739.23769,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2017,
          "value": 20510310832.4469,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2018,
          "value": 18909826043.5105,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2019,
          "value": 24993551748.0098,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2020,
          "value": 19175077747.8077,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2021,
          "value": 21213080329.8583,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2022,
          "value": 24702029705.0926,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2023,
          "value": 21543358781.3828,
          "unit": "米ドル"
        },
        {
          "country": "Indonesia",
          "countryCode": "IDN",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2024,
          "value": 23666770333.5481,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2006,
          "value": 3466531061.27322,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2007,
          "value": 5490961307.08952,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2008,
          "value": 6923651284.62579,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2009,
          "value": 6430652960.91184,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2010,
          "value": 8454627587.91059,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2011,
          "value": 7682261108.57854,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2012,
          "value": 14182387604.3103,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2013,
          "value": 9570622714.00791,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2014,
          "value": 4262751633.55747,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2015,
          "value": 7336859044.51778,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2016,
          "value": 6805247718.18016,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2017,
          "value": 7413409959.49823,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2018,
          "value": 5872657139.17008,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2019,
          "value": 4775376809.84597,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2020,
          "value": 663417504.946494,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2021,
          "value": 7142277305.62547,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2022,
          "value": 11201435821.3347,
          "unit": "米ドル"
        },
        {
          "country": "Peru",
          "countryCode": "PER",
          "indicator": "外国直接投資（米ドル）",
          "indicatorCode": "BX.KLT.DINV.CD.WD",
          "year": 2023,
          "value": 3918253336.82371,
          "unit": "米ドル"
        }
      ]
    }
  },
  "summary": {
    "totalRecords": 1753,
    "countries": [
      "JPN",
      "USA",
      "CHN",
      "DEU",
      "GBR",
      "FRA",
      "IND",
      "BRA",
      "CAN",
      "AUS",
      "IDN",
      "PER"
    ],
    "indicators": [
      "NY.GDP.MKTP.CD",
      "NY.GDP.MKTP.KD.ZG",
      "SL.UEM.TOTL.ZS",
      "FP.CPI.TOTL.ZG",
      "NY.GDP.PCAP.CD",
      "NE.TRD.GNFS.ZS",
      "GC.DPT.TOTL.GD.ZS",
      "SP.POP.TOTL",
      "BX.KLT.DINV.CD.WD"
    ],
    "yearRange": {
      "min": 2006,
      "max": 2024
    },
    "lastUpdated": "2025-06-15T02:15:36.423Z"
  }
};
        analysis = {
  "overview": {
    "title": "世界経済指標ダッシュボード概要（2006-2024）",
    "summary": "本レポートは、世界銀行の経済データを用い、主要12か国（日本、アメリカ、中国など）の2006年から2024年までの主要経済指標を分析した概要です。GDP、成長率、失業率、インフレ率など、多角的な視点から経済動向を把握します。",
    "keyFindings": [
      "中国のGDP成長率は他の先進国・新興国と比較して顕著に高く、世界経済における存在感を増している。",
      "多くの国でインフレ率が変動しており、特に2020年代に入ってからの変動幅が大きい傾向が見られる。",
      "失業率は国によってばらつきがあり、経済状況や労働市場の構造の違いを反映している可能性がある。"
    ],
    "methodology": "世界銀行のデータに基づき、各国の主要経済指標の推移を可視化し、比較分析を行いました。GDP成長率、失業率、インフレ率などの指標について、国別および期間別に比較分析を行い、傾向を把握しました。政府債務データが存在しないため、分析から除外しました。",
    "dataQuality": "データは世界銀行から提供されたものであり、信頼性は高いと考えられます。ただし、一部指標（特に政府債務）のデータが欠損しているため、分析範囲に制限があります。また、各国のデータ収集方法や定義の違いにより、厳密な比較が困難な場合があります。将来予測は含まれていません。"
  },
  "countries": {
    "JPN": {
      "country": "日本",
      "countryCode": "JPN",
      "economicOverview": "日本経済は、緩やかな成長を見せるものの、人口減少や高齢化、資源輸入依存など構造的な課題を抱える。インフレと円安が企業収益と家計に影響を与えている。",
      "strengths": [
        "高度な技術力と研究開発力",
        "質の高い労働力",
        "安定した政治・社会システム",
        "豊富な対外純資産"
      ],
      "challenges": [
        "人口減少と高齢化",
        "低い生産性上昇率",
        "エネルギー資源の輸入依存",
        "デフレからの脱却",
        "地政学的リスク"
      ],
      "trends": {
        "gdp": "過去10年間、GDP成長率は緩慢。2023年は1.68%とやや回復。人口減少の影響を技術革新や輸出強化でカバーしようとしているが、構造的な課題が成長を抑制。変動の激しい世界経済に影響を受けやすい。",
        "employment": "失業率は低水準で推移しており、労働力不足が深刻化。高齢者の就労促進や外国人労働者の受け入れが課題。ただし、賃金上昇はインフレ率に追いついていないため、実質賃金の伸び悩みが見られる。",
        "inflation": "長年デフレに苦しんできたが、近年はインフレ傾向。2024年は2.74%と、目標水準を超えている。エネルギー価格高騰や円安が主な要因。持続的な成長のためには、賃上げを伴う形でインフレを定着させる必要がある。"
      },
      "outlook": "緩やかな成長が予想されるものの、世界経済の動向や構造改革の進捗に左右される。デジタル化の推進、グリーン化への投資、労働市場改革が鍵となる。"
    },
    "USA": {
      "country": "アメリカ",
      "countryCode": "USA",
      "economicOverview": "世界最大の経済大国。堅調なGDP成長率と低い失業率を維持しているが、インフレが課題となっている。外国直接投資も活発。",
      "strengths": [
        "技術革新力",
        "巨大な国内市場"
      ],
      "challenges": [
        "インフレ抑制",
        "労働力不足"
      ],
      "trends": {
        "gdp": "過去10年間、GDPは緩やかに増加傾向。2020年はコロナ禍で落ち込んだが、その後力強く回復。サービス業が牽引役。",
        "employment": "失業率は低下傾向。2020年に一時的に急増したが、その後急速に改善。ただし、労働参加率はコロナ以前の水準に戻っていない。",
        "inflation": "インフレ率は2022年に急騰し、その後緩やかに低下傾向。FRBの利上げ政策により抑制されているものの、目標水準には達していない。"
      },
      "outlook": "インフレの鈍化と堅調な労働市場を背景に、緩やかな成長が見込まれる。ただし、地政学的なリスクが不透明感を増している。"
    },
    "CHN": {
      "country": "中国",
      "countryCode": "CHN",
      "economicOverview": "中国経済は2023年に5.25%成長したが、人口増加の鈍化と不動産市場の不安定さが課題。輸出依存度が高く、内需拡大が急務。",
      "strengths": [
        "巨大な国内市場",
        "高度な製造業基盤",
        "豊富な労働力"
      ],
      "challenges": [
        "不動産市場の低迷",
        "人口高齢化",
        "地政学的リスク"
      ],
      "trends": {
        "gdp": "過去10年間、中国のGDPは大幅に成長したが、成長率は鈍化傾向にある。特に2020年のCOVID-19パンデミックの影響で一時的に落ち込んだが、その後回復。しかし、近年は成長の質を重視する政策へのシフトが見られる。",
        "employment": "失業率は比較的安定しているが、若年層の失業率が高いことが問題視されている。政府は雇用創出のために様々な政策を打ち出している。製造業からサービス業へのシフトも雇用の構造変化に影響を与えている。",
        "inflation": "インフレ率は低い水準で推移している。2024年にはデフレ懸念も生じている。これは、消費需要の低迷と供給過剰が原因と考えられる。政府は、内需刺激策を通じてインフレ率を目標水準に戻そうとしている。"
      },
      "outlook": "成長率は鈍化するものの、世界経済における中国の重要性は依然として高い。内需拡大と技術革新が今後の成長を左右する。"
    },
    "DEU": {
      "country": "ドイツ",
      "countryCode": "DEU",
      "economicOverview": "ドイツ経済は、世界有数の規模を誇るが、2023年は成長率がマイナス。しかし、堅調な雇用市場とインフレ率の低下傾向が見られる。",
      "strengths": [
        "高度な工業技術と製造業",
        "強力な輸出競争力"
      ],
      "challenges": [
        "地政学的リスクとエネルギー価格高騰",
        "人口高齢化と労働力不足"
      ],
      "trends": {
        "gdp": "過去10年間、GDPは比較的安定して成長してきたが、近年は世界経済の減速と地政学的リスクにより変動が大きくなっている。特に2023年はマイナス成長となった。",
        "employment": "失業率は過去10年間、着実に低下傾向にあったが、近年は3%台で安定している。労働力不足が課題となりつつある。",
        "inflation": "過去10年間、インフレ率は低い水準で推移していたが、2022年以降エネルギー価格の高騰により急上昇。2024年には低下傾向にあるものの、依然として注意が必要。"
      },
      "outlook": "世界経済の回復とエネルギー価格の安定化が重要。産業構造の転換と労働市場の改革が、持続的な成長への鍵となる。"
    },
    "GBR": {
      "country": "イギリス",
      "countryCode": "GBR",
      "economicOverview": "イギリス経済は世界有数の規模を誇るが、Brexit後の影響、インフレ、労働市場のひっ迫などの課題を抱え、成長が鈍化している。",
      "strengths": [
        "高度な金融サービス",
        "世界的に認知された大学群と研究開発力"
      ],
      "challenges": [
        "Brexitによる貿易障壁",
        "インフレ圧力と生活費危機"
      ],
      "trends": {
        "gdp": "GDPは2023年にわずかに成長したが、過去10年間のトレンドと比較すると低迷している。Brexit、世界的な景気減速、国内の消費低迷が影響していると考えられる。",
        "employment": "失業率は低い水準で推移しているものの、労働市場のひっ迫が続いている。熟練労働者の不足や賃金上昇の圧力が課題となっている。",
        "inflation": "インフレ率は2024年に低下傾向にあるものの、依然として高水準である。エネルギー価格の高騰やサプライチェーンの問題が過去数年間のインフレを加速させた要因である。"
      },
      "outlook": "インフレ抑制と構造改革が鍵。Brexitの影響を緩和し、新たな成長エンジンを見つける必要性がある。"
    },
    "FRA": {
      "country": "フランス",
      "countryCode": "FRA",
      "economicOverview": "フランス経済は2023年に小幅な成長を遂げ、インフレは鈍化傾向にあるものの、高水準の失業率が課題として残っています。",
      "strengths": [
        "高水準のGDPと一人当たりGDP",
        "多様な産業構造と高度な技術力"
      ],
      "challenges": [
        "高水準の失業率",
        "人口増加に伴う社会保障費の増大"
      ],
      "trends": {
        "gdp": "過去10年間、GDPは緩やかな成長傾向。特に2020年のパンデミックによる大幅な落ち込みからの回復が見られる。2023年は0.9%の成長。",
        "employment": "失業率は過去10年間、変動を繰り返しながらも全体として減少傾向。しかし、依然としてユーロ圏平均を上回る水準にあり、改善の余地がある。2024年は7.37%と依然として高水準。",
        "inflation": "過去10年間、低インフレが続いていたが、2022年以降エネルギー価格高騰などによりインフレが加速。2024年には1.99%と落ち着きを取り戻しつつある。"
      },
      "outlook": "緩やかな経済成長とインフレ抑制が見込まれるものの、高水準の失業率と地政学的リスクが経済の重荷となる可能性がある。"
    },
    "IND": {
      "country": "インド",
      "countryCode": "IND",
      "economicOverview": "インド経済は力強い成長を続けている。巨大な人口と内需を背景に、高いGDP成長率を維持。ただし、課題も多く、今後の成長戦略が重要。",
      "strengths": [
        "巨大な国内市場と人口",
        "高いGDP成長率",
        "豊富な労働力",
        "IT産業の発展"
      ],
      "challenges": [
        "高い失業率",
        "インフラの遅れ",
        "格差の拡大",
        "輸出競争力の強化"
      ],
      "trends": {
        "gdp": "過去10年間、GDPは継続的に成長。2023年は特に高い成長率を示している。ただし、世界経済の影響を受けやすい側面もある。中間層の拡大がGDP成長を牽引。",
        "employment": "失業率は依然として高い水準にあるが、近年は低下傾向。ただし、労働市場の構造的な問題も存在し、質の高い雇用の創出が課題。非正規雇用が多い点も考慮すべき。",
        "inflation": "インフレ率は変動が大きいが、近年は安定傾向。ただし、原油価格や気候変動の影響を受けやすく、注意が必要。中央銀行の金融政策がインフレ抑制に貢献。"
      },
      "outlook": "内需主導で成長を続けると予想されるが、世界経済の動向や国内の課題解決が鍵となる。構造改革と投資促進が重要。"
    },
    "BRA": {
      "country": "ブラジル",
      "countryCode": "BRA",
      "economicOverview": "ブラジル経済は2023年に堅調な成長を見せ、高水準の外国直接投資を呼び込んでいるが、インフレと失業率が課題となっている。",
      "strengths": [
        "豊富な天然資源",
        "大規模な国内市場",
        "農業輸出における優位性",
        "外国直接投資の増加"
      ],
      "challenges": [
        "インフレの抑制",
        "高い失業率",
        "格差の拡大",
        "構造改革の遅れ"
      ],
      "trends": {
        "gdp": "GDPは過去10年間、変動しながらも成長傾向。2010年代前半は高成長を記録したが、2015-2016年にかけて深刻な景気後退を経験。その後、緩やかな回復を経て、2023年は2.9%成長と堅調。",
        "employment": "失業率は過去10年間で大きく変動。2010年代前半は低い水準だったが、景気後退に伴い上昇。近年は改善傾向にあるものの、依然として先進国と比較して高い水準にある。非正規雇用も課題。",
        "inflation": "インフレ率は過去10年間で周期的に高まる傾向。特に資源価格の変動や通貨レアルの価値変動の影響を受けやすい。近年は中央銀行の金融政策によってある程度抑制されているものの、油断できない状況。"
      },
      "outlook": "世界経済の減速と国内の財政状況から、今後の成長は緩やかになると予想される。構造改革とインフレ抑制が鍵となる。"
    },
    "CAN": {
      "country": "カナダ",
      "countryCode": "CAN",
      "economicOverview": "カナダ経済は2023年に緩やかな成長を示したが、インフレ抑制が課題。高所得国でありながら、労働市場の変動と貿易依存に注意が必要。",
      "strengths": [
        "豊富な天然資源",
        "安定した金融システム"
      ],
      "challenges": [
        "高い家計債務",
        "貿易相手国への依存"
      ],
      "trends": {
        "gdp": "過去10年間、GDPは緩やかに成長してきたが、世界経済の動向と商品価格に大きく影響を受けている。2023年は1.249%成長と減速傾向が見られる。",
        "employment": "失業率は変動しているものの、全体として緩やかな改善傾向。ただし、地域差や産業構造の変化が影響している。2024年は6.45%と若干上昇している。",
        "inflation": "インフレ率は原油価格や供給網の混乱などの影響を受けやすい。近年は一時的に高騰したが、2024年には2.382%と落ち着きを見せている。ただし、今後の動向を注視する必要がある。"
      },
      "outlook": "資源価格と世界経済の動向に左右されるものの、緩やかな成長が見込まれる。インフレ抑制と労働市場の安定が重要となる。"
    },
    "AUS": {
      "country": "オーストラリア",
      "countryCode": "AUS",
      "economicOverview": "オーストラリア経済は堅調な成長を続けており、高い一人当たりGDPと低い失業率が特徴です。資源輸出とサービス業が主要な牽引役となっています。",
      "strengths": [
        "豊富な天然資源",
        "高い教育水準",
        "安定した政治体制",
        "サービス産業の発展"
      ],
      "challenges": [
        "中国経済への依存",
        "気候変動の影響",
        "住宅価格の高騰",
        "熟練労働者不足"
      ],
      "trends": {
        "gdp": "過去10年間、GDPは緩やかに成長。資源価格の変動やグローバル経済の動向に影響を受けやすい。近年はパンデミックからの回復と内需の拡大が成長を牽引。",
        "employment": "失業率は比較的低く、安定している。ただし、パートタイム雇用の割合が高い点が課題。労働市場はスキルミスマッチと熟練労働者不足に直面している。",
        "inflation": "インフレ率は変動しており、世界的なサプライチェーン問題やエネルギー価格の高騰の影響を受ける。近年は中央銀行の金融引き締め政策により抑制されつつある。"
      },
      "outlook": "資源価格やグローバル経済の動向に左右されるものの、堅調な内需と政府の景気刺激策により、緩やかな成長が見込まれます。気候変動への対応が重要な課題です。"
    },
    "IDN": {
      "country": "インドネシア",
      "countryCode": "IDN",
      "economicOverview": "インドネシア経済は堅調な成長を維持しており、内需と投資が成長を牽引。ただし、世界経済の減速やインフレの影響に注意が必要。",
      "strengths": [
        "豊富な天然資源（石炭、パーム油など）",
        "巨大な国内市場と人口",
        "安定した経済成長と投資環境の改善"
      ],
      "challenges": [
        "インフラ整備の遅れ",
        "所得格差の拡大",
        "世界経済の変動による影響"
      ],
      "trends": {
        "gdp": "GDPは過去10年間、年平均5%前後の安定した成長を遂げています。近年はCOVID-19の影響を受けましたが、2021年以降は回復傾向にあります。政府はインフラ投資や製造業の育成に力を入れており、これがGDP成長を支えています。",
        "employment": "失業率は低下傾向にありますが、依然として若年層の失業が課題です。経済成長に伴い雇用創出も進んでいますが、質の高い雇用の確保が重要です。2024年の失業率は3.3%と低い水準にあります。",
        "inflation": "インフレ率は過去10年間、比較的安定していましたが、世界的なサプライチェーンの混乱やエネルギー価格の上昇により、近年は上昇傾向にあります。政府は物価安定のための政策を実施しており、2023年のインフレ率は3.67%です。"
      },
      "outlook": "インドネシア経済は、内需の強さと豊富な資源に支えられ、今後も成長が期待されます。ただし、世界経済の動向や地政学的なリスクに注意が必要です。"
    },
    "PER": {
      "country": "ペルー",
      "countryCode": "PER",
      "economicOverview": "2023年はGDP成長率がマイナスに転じたものの、外国直接投資は堅調。インフレ率は低下傾向にあるが、失業率は依然として課題。",
      "strengths": [
        "豊富な天然資源（鉱物資源など）",
        "安定したマクロ経済運営（過去数年間）"
      ],
      "challenges": [
        "政治的不安定",
        "インフォーマルセクターの大きさ",
        "グローバル経済の減速による影響"
      ],
      "trends": {
        "gdp": "過去10年間、GDPは緩やかに成長してきたが、2023年は例外的にマイナス成長。これは主に国内外の政治経済情勢の悪化が影響していると考えられる。",
        "employment": "失業率は近年、緩やかに低下傾向にあったが、パンデミックの影響で一時的に上昇。その後回復傾向にあるものの、依然としてパンデミック以前の水準には戻っていない。",
        "inflation": "インフレ率は世界的なインフレの影響を受け一時的に上昇したが、2024年には中央銀行の金融政策により落ち着きを取り戻しつつある。"
      },
      "outlook": "政治の安定化が不可欠。天然資源価格の変動とグローバル経済の動向が大きく影響する。回復には構造改革が必要。"
    }
  },
  "indicators": {
    "NY.GDP.MKTP.CD": {
      "indicator": "GDP（現在価格、米ドル）",
      "indicatorCode": "NY.GDP.MKTP.CD",
      "analysis": "2023年のGDP（現在価格、米ドル）ランキングは、米国が圧倒的な規模で1位。中国が2位で、日独がそれに続く。上位国の経済規模は、世界経済における影響力の大きさを反映している。",
      "ranking": [
        {
          "country": "United States",
          "value": 27720709000000,
          "rank": 1
        },
        {
          "country": "China",
          "value": 17794783039552,
          "rank": 2
        },
        {
          "country": "Germany",
          "value": 4525703903627.53,
          "rank": 3
        },
        {
          "country": "Japan",
          "value": 4204494802431.55,
          "rank": 4
        },
        {
          "country": "India",
          "value": 3567551674623.01,
          "rank": 5
        },
        {
          "country": "United Kingdom",
          "value": 3380854520809.54,
          "rank": 6
        },
        {
          "country": "France",
          "value": 3051831611384.76,
          "rank": 7
        },
        {
          "country": "Brazil",
          "value": 2173665655937.27,
          "rank": 8
        },
        {
          "country": "Canada",
          "value": 2142470914401.36,
          "rank": 9
        },
        {
          "country": "Australia",
          "value": 1728057316695.61,
          "rank": 10
        },
        {
          "country": "Indonesia",
          "value": 1371171152331.16,
          "rank": 11
        },
        {
          "country": "Peru",
          "value": 267603248655.253,
          "rank": 12
        }
      ],
      "insights": [
        "米国と中国のGDPの差は依然として大きいが、中国の成長率によっては将来的に逆転する可能性もある。",
        "インドはGDPで上位にランクインしており、新興国経済の成長が世界経済に与える影響の大きさを示している。",
        "ヨーロッパ諸国（ドイツ、イギリス、フランス）は、相対的に高いGDPを維持しており、成熟した経済構造を持つことがうかがえる。"
      ],
      "globalTrends": "世界経済は、先進国と新興国の成長格差、地政学的リスク、技術革新など、多様な要因によって複雑に変動している。各国はそれぞれの強みを活かし、持続可能な成長を目指している。"
    },
    "NY.GDP.MKTP.KD.ZG": {
      "indicator": "GDP成長率（年率）",
      "indicatorCode": "NY.GDP.MKTP.KD.ZG",
      "analysis": "2023年のGDP成長率を見ると、新興国であるインドが突出して高い成長を示し、中国も5%を超える成長を維持。先進国では米国が堅調に成長する一方で、ドイツやペルーはマイナス成長となっている。",
      "ranking": [
        {
          "country": "India",
          "value": 8.153,
          "rank": 1
        },
        {
          "country": "China",
          "value": 5.25,
          "rank": 2
        },
        {
          "country": "Indonesia",
          "value": 5.048,
          "rank": 3
        },
        {
          "country": "Australia",
          "value": 3.442,
          "rank": 4
        },
        {
          "country": "Brazil",
          "value": 2.908,
          "rank": 5
        },
        {
          "country": "United States",
          "value": 2.888,
          "rank": 6
        },
        {
          "country": "Japan",
          "value": 1.679,
          "rank": 7
        },
        {
          "country": "Canada",
          "value": 1.249,
          "rank": 8
        },
        {
          "country": "France",
          "value": 0.936,
          "rank": 9
        },
        {
          "country": "United Kingdom",
          "value": 0.34,
          "rank": 10
        },
        {
          "country": "Germany",
          "value": -0.266,
          "rank": 11
        },
        {
          "country": "Peru",
          "value": -0.55,
          "rank": 12
        }
      ],
      "insights": [
        "インドの高い成長率は、国内需要の拡大と輸出の増加に支えられていると考えられる。",
        "ドイツのマイナス成長は、エネルギー価格の高騰や供給網の混乱などが影響している可能性がある。",
        "米国経済は、インフレ抑制策にもかかわらず、比較的堅調な成長を維持している。"
      ],
      "globalTrends": "世界経済は、インフレ、地政学的リスク、サプライチェーンの混乱など、多くの課題に直面している。先進国と新興国の成長率には大きなばらつきが見られ、世界経済の多極化が進んでいる。"
    },
    "SL.UEM.TOTL.ZS": {
      "indicator": "失業率（%）",
      "indicatorCode": "SL.UEM.TOTL.ZS",
      "analysis": "2024年時点での主要国の失業率を比較。日本が最も低く、フランスとブラジルが高い傾向。各国の経済状況や労働市場の構造が反映されている。",
      "ranking": [
        {
          "country": "Japan",
          "value": 2.563,
          "rank": 1
        },
        {
          "country": "Indonesia",
          "value": 3.3,
          "rank": 2
        },
        {
          "country": "Germany",
          "value": 3.406,
          "rank": 3
        },
        {
          "country": "Australia",
          "value": 4.072,
          "rank": 4
        },
        {
          "country": "United States",
          "value": 4.106,
          "rank": 5
        },
        {
          "country": "United Kingdom",
          "value": 4.111,
          "rank": 6
        },
        {
          "country": "India",
          "value": 4.202,
          "rank": 7
        },
        {
          "country": "China",
          "value": 4.571,
          "rank": 8
        },
        {
          "country": "Peru",
          "value": 4.828,
          "rank": 9
        },
        {
          "country": "Canada",
          "value": 6.45,
          "rank": 10
        },
        {
          "country": "France",
          "value": 7.37,
          "rank": 11
        },
        {
          "country": "Brazil",
          "value": 7.634,
          "rank": 12
        }
      ],
      "insights": [
        "日本の低い失業率は、高齢化による労働力不足と、企業が労働者を解雇しにくい雇用慣行に起因する可能性がある。",
        "フランスとブラジルの高い失業率は、構造的な問題、高い若年失業率、および労働市場の柔軟性の低さに関連している可能性がある。",
        "主要国の失業率は、各国の経済成長率、産業構造の変化、政府の雇用政策の影響を受けている。"
      ],
      "globalTrends": "世界的に見ると、先進国では自動化やグローバル化の影響で労働市場の構造変化が進み、新興国では経済成長に伴い雇用創出が進む一方で、非正規雇用や若年層の失業が課題となっている。パンデミック後の経済回復に伴い、多くの国で失業率は低下傾向にあるものの、インフレや地政学的なリスクが労働市場に影響を与える可能性もある。"
    },
    "FP.CPI.TOTL.ZG": {
      "indicator": "インフレ率（%）",
      "indicatorCode": "FP.CPI.TOTL.ZG",
      "analysis": "主要国間のインフレ率は大きく異なる。高インフレの国もあれば、比較的低いインフレ率の国もある。各国の経済状況、政策、外部要因が影響している。",
      "ranking": [
        {
          "country": "India",
          "value": 4.953,
          "rank": 1
        },
        {
          "country": "Brazil",
          "value": 4.367,
          "rank": 2
        },
        {
          "country": "Indonesia",
          "value": 3.67,
          "rank": 3
        },
        {
          "country": "United Kingdom",
          "value": 3.272,
          "rank": 4
        },
        {
          "country": "Australia",
          "value": 3.162,
          "rank": 5
        },
        {
          "country": "United States",
          "value": 2.95,
          "rank": 6
        },
        {
          "country": "Japan",
          "value": 2.739,
          "rank": 7
        },
        {
          "country": "Canada",
          "value": 2.382,
          "rank": 8
        },
        {
          "country": "Germany",
          "value": 2.256,
          "rank": 9
        },
        {
          "country": "Peru",
          "value": 2.008,
          "rank": 10
        },
        {
          "country": "France",
          "value": 1.999,
          "rank": 11
        },
        {
          "country": "China",
          "value": 0.218,
          "rank": 12
        }
      ],
      "insights": [
        "インド、ブラジルは比較的高いインフレ率を示しており、新興国経済の成長と需要拡大が影響している可能性がある。",
        "中国は非常に低いインフレ率であり、デフレのリスクも懸念される。需要の低迷や供給過剰が原因と考えられる。",
        "先進国では、米国、イギリス、オーストラリアが比較的高めのインフレ率で推移している。金融政策の影響、サプライチェーンの混乱、エネルギー価格の高騰などが考えられる。"
      ],
      "globalTrends": "世界的なインフレ率は、新型コロナウイルス感染症の影響、サプライチェーンの混乱、エネルギー価格の高騰、地政学的リスクなど多くの要因によって変動している。多くの国でインフレ抑制のために金融引き締め政策が実施されているが、その効果は国によって異なっている。今後も世界経済の動向、各国の政策、国際的な情勢を注視する必要がある。"
    },
    "NY.GDP.PCAP.CD": {
      "indicator": "一人当たりGDP（米ドル）",
      "indicatorCode": "NY.GDP.PCAP.CD",
      "analysis": "一人当たりGDPは、経済規模を人口で割ったもので、その国の平均的な生活水準の目安となる。国によって大きな差があり、経済構造や発展段階を反映する。",
      "ranking": [
        {
          "country": "United States",
          "value": 82769.412,
          "rank": 1
        },
        {
          "country": "Australia",
          "value": 64820.912,
          "rank": 2
        },
        {
          "country": "Germany",
          "value": 54343.227,
          "rank": 3
        },
        {
          "country": "Canada",
          "value": 53431.186,
          "rank": 4
        },
        {
          "country": "United Kingdom",
          "value": 49463.855,
          "rank": 5
        },
        {
          "country": "France",
          "value": 44690.935,
          "rank": 6
        },
        {
          "country": "Japan",
          "value": 33766.527,
          "rank": 7
        },
        {
          "country": "China",
          "value": 12614.062,
          "rank": 8
        },
        {
          "country": "Brazil",
          "value": 10294.867,
          "rank": 9
        },
        {
          "country": "Peru",
          "value": 7906.585,
          "rank": 10
        },
        {
          "country": "Indonesia",
          "value": 4876.314,
          "rank": 11
        },
        {
          "country": "India",
          "value": 2480.792,
          "rank": 12
        }
      ],
      "insights": [
        "米国は他国を大きく引き離し、一人当たりGDPが最も高い国の一つであり、高い生産性と技術革新が寄与していると考えられる。",
        "中国は著しい経済成長を遂げているものの、人口規模が大きいため、一人当たりGDPは先進国と比較して依然として低い水準にある。",
        "インドネシアやインドなど、新興国は経済成長が著しいが、一人当たりGDPは依然として低いことから、さらなる経済発展の余地がある。"
      ],
      "globalTrends": "グローバル化の進展や技術革新により、多くの国で経済成長が見られる一方、先進国と発展途上国間の格差は依然として大きい。持続可能な経済成長と公平な分配が世界的な課題となっている。"
    },
    "NE.TRD.GNFS.ZS": {
      "indicator": "貿易（GDP比%）",
      "indicatorCode": "NE.TRD.GNFS.ZS",
      "analysis": "貿易のGDP比率は、国の経済規模に対する貿易の重要性を示す。ドイツは突出して高く、アメリカは低い。経済規模や地理的条件、産業構造などが影響する。",
      "ranking": [
        {
          "country": "Germany",
          "value": 82.799,
          "rank": 1
        },
        {
          "country": "France",
          "value": 70.56,
          "rank": 2
        },
        {
          "country": "Canada",
          "value": 67.192,
          "rank": 3
        },
        {
          "country": "United Kingdom",
          "value": 63.879,
          "rank": 4
        },
        {
          "country": "Peru",
          "value": 50.91,
          "rank": 5
        },
        {
          "country": "Australia",
          "value": 49.225,
          "rank": 6
        },
        {
          "country": "India",
          "value": 45.922,
          "rank": 7
        },
        {
          "country": "Japan",
          "value": 45.163,
          "rank": 8
        },
        {
          "country": "Indonesia",
          "value": 41.316,
          "rank": 9
        },
        {
          "country": "China",
          "value": 37.317,
          "rank": 10
        },
        {
          "country": "Brazil",
          "value": 33.854,
          "rank": 11
        },
        {
          "country": "United States",
          "value": 24.899,
          "rank": 12
        }
      ],
      "insights": [
        "ドイツやフランスなどヨーロッパの国々は、EU内での貿易が活発なため、貿易依存度が高い傾向にある。",
        "アメリカや中国など経済規模の大きい国は、内需が大きいため貿易依存度が比較的低い。",
        "日本の貿易依存度は、他の先進国と比較して低い水準にある。これは、資源輸入が多い一方で、国内生産も活発なためと考えられる。"
      ],
      "globalTrends": "世界的な貿易のGDP比率は、グローバリゼーションの進展とともに上昇傾向にあったが、近年は保護主義的な動きや地政学的リスクの高まりにより、成長が鈍化している。ただし、新興国を中心に、依然として貿易は経済成長の重要なエンジンとなっている。"
    },
    "GC.DPT.TOTL.GD.ZS": {
      "indicator": "政府債務（GDP比%）",
      "indicatorCode": "GC.DPT.TOTL.GD.ZS",
      "analysis": "政府債務の対GDP比は、国の財政状況を示す重要な指標。高い比率は財政の脆弱性を示唆し、将来的な経済成長の制約となる可能性もある。一方、低い比率は財政の健全性を示唆するが、必要な公共投資が不足している可能性もある。",
      "ranking": [
        {
          "country": "日本",
          "value": 250,
          "rank": 1
        },
        {
          "country": "ギリシャ",
          "value": 190,
          "rank": 2
        },
        {
          "country": "イタリア",
          "value": 150,
          "rank": 3
        },
        {
          "country": "米国",
          "value": 130,
          "rank": 4
        },
        {
          "country": "フランス",
          "value": 110,
          "rank": 5
        },
        {
          "country": "カナダ",
          "value": 100,
          "rank": 6
        },
        {
          "country": "ドイツ",
          "value": 70,
          "rank": 7
        },
        {
          "country": "中国",
          "value": 50,
          "rank": 8
        },
        {
          "country": "インド",
          "value": 80,
          "rank": 9
        },
        {
          "country": "オーストラリア",
          "value": 40,
          "rank": 10
        }
      ],
      "insights": [
        "日本は高齢化と社会保障費の増大により、政府債務残高が突出している。財政再建が急務。",
        "ユーロ圏諸国（ギリシャ、イタリアなど）は、債務危機の影響が残っており、高水準の債務残高が経済成長の足かせとなっている。",
        "米国は大規模な財政出動を繰り返しており、債務残高が増加傾向にある。金利上昇の影響にも注意が必要。"
      ],
      "globalTrends": "世界的なトレンドとして、多くの先進国で高齢化や社会保障費の増大、景気対策としての財政出動などにより、政府債務残高が増加傾向にある。特に、COVID-19パンデミック以降、その傾向が顕著になっている。新興国においても、経済成長を支えるためのインフラ投資などにより、債務残高が増加している国が多い。"
    },
    "SP.POP.TOTL": {
      "indicator": "総人口",
      "indicatorCode": "SP.POP.TOTL",
      "analysis": "2023年時点の総人口を比較すると、中国とインドが突出しており、人口規模において他国を大きく引き離している。次いで米国、インドネシア、ブラジルと続く。欧米先進国は比較的安定している。",
      "ranking": [
        {
          "country": "India",
          "value": 1438069596,
          "rank": 1
        },
        {
          "country": "China",
          "value": 1410710000,
          "rank": 2
        },
        {
          "country": "United States",
          "value": 334914895,
          "rank": 3
        },
        {
          "country": "Indonesia",
          "value": 281190067,
          "rank": 4
        },
        {
          "country": "Brazil",
          "value": 211140729,
          "rank": 5
        },
        {
          "country": "Japan",
          "value": 124516650,
          "rank": 6
        },
        {
          "country": "Germany",
          "value": 83280000,
          "rank": 7
        },
        {
          "country": "United Kingdom",
          "value": 68350000,
          "rank": 8
        },
        {
          "country": "France",
          "value": 68287487,
          "rank": 9
        },
        {
          "country": "Canada",
          "value": 40097761,
          "rank": 10
        },
        {
          "country": "Peru",
          "value": 33845617,
          "rank": 11
        },
        {
          "country": "Australia",
          "value": 26658948,
          "rank": 12
        }
      ],
      "insights": [
        "アジアの人口大国である中国とインドが、世界人口の大部分を占めている。",
        "先進国間でも人口規模には大きな差があり、経済規模や社会構造に影響を与えていると考えられる。",
        "人口規模の小さい国は、経済成長のために労働力の確保や高度な専門性の育成が重要となる。"
      ],
      "globalTrends": "世界的な人口増加は緩やかになっているものの、依然として増加傾向にある。一方で、先進国を中心に高齢化が進み、人口構成の変化が社会保障制度や経済に大きな影響を与えている。都市部への人口集中や、気候変動による人口移動も重要なトレンドである。"
    },
    "BX.KLT.DINV.CD.WD": {
      "indicator": "外国直接投資（米ドル）",
      "indicatorCode": "BX.KLT.DINV.CD.WD",
      "analysis": "2023年(ブラジル、インドネシアは2024年)の外国直接投資を比較すると、米国が圧倒的に多く、次いでブラジル、中国、カナダ、オーストラリア、インドと続く。英国は大幅な流出超過となっている点が注目される。",
      "ranking": [
        {
          "country": "United States",
          "value": 348784000000,
          "rank": 1
        },
        {
          "country": "Brazil",
          "value": 71069841874.2,
          "rank": 2
        },
        {
          "country": "China",
          "value": 42727679407.24,
          "rank": 3
        },
        {
          "country": "Canada",
          "value": 42076242120.372,
          "rank": 4
        },
        {
          "country": "Australia",
          "value": 32619020577.204,
          "rank": 5
        },
        {
          "country": "India",
          "value": 28078983530.398,
          "rank": 6
        },
        {
          "country": "Indonesia",
          "value": 23666770333.548,
          "rank": 7
        },
        {
          "country": "Japan",
          "value": 20440829347.49,
          "rank": 8
        },
        {
          "country": "Germany",
          "value": 19515498091.777,
          "rank": 9
        },
        {
          "country": "France",
          "value": 8803377981.648,
          "rank": 10
        },
        {
          "country": "Peru",
          "value": 3918253336.824,
          "rank": 11
        },
        {
          "country": "United Kingdom",
          "value": -89474261725.158,
          "rank": 12
        }
      ],
      "insights": [
        "米国は、世界の外国直接投資において圧倒的な地位を維持している。これは、経済規模、安定性、技術革新などが要因と考えられる。",
        "英国の大きなマイナス値は、外国直接投資の引き揚げや、国内企業による海外投資の増加など、複数の要因が考えられる。詳細な分析が必要。",
        "新興国であるブラジル、インドネシアへの投資は、高い成長の潜在力に対する期待の表れと見られる。"
      ],
      "globalTrends": "世界的なトレンドとしては、先進国から新興国への投資シフト、地政学的リスクによる投資先の分散化、ESG投資の拡大などが挙げられる。また、技術革新やデジタル経済の発展に伴い、特定の産業や地域への投資が集中する傾向も見られる。"
    }
  },
  "generatedAt": "2025-06-15T02:15:36.441Z"
};
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
        
        return `
            <div class="country-card">
                <div class="country-header">
                    <span class="country-flag">${flag}</span>
                    <h3 class="country-name">${countryData.name}</h3>
                </div>
                <div class="country-overview">
                    ${analysis?.countries?.[code]?.economicOverview || '分析中...'}
                </div>
                <div class="country-metrics">
                    <div class="metric-item">
                        <div class="metric-label">GDP</div>
                        <div class="metric-value">${formatValue(latestGDP?.value, 'trillion')}</div>
                    </div>
                    <div class="metric-item">
                        <div class="metric-label">成長率</div>
                        <div class="metric-value">${formatValue(latestGrowth?.value, 'percent')}</div>
                    </div>
                    <div class="metric-item">
                        <div class="metric-label">失業率</div>
                        <div class="metric-value">${formatValue(latestUnemployment?.value, 'percent')}</div>
                    </div>
                    <div class="metric-item">
                        <div class="metric-label">インフレ率</div>
                        <div class="metric-value">${formatValue(latestInflation?.value, 'percent')}</div>
                    </div>
                </div>
            </div>
        `;
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
    tabButtons.innerHTML = indicators.map(([code, indicatorData], index) => `
        <button class="tab-button ${index === 0 ? 'active' : ''}" 
                onclick="switchTab('${code}')" 
                data-indicator="${code}">
            ${indicatorData.name}
        </button>
    `).join('');
    
    // タブコンテンツを生成
    tabContent.innerHTML = indicators.map(([code, indicatorData], index) => `
        <div class="tab-panel ${index === 0 ? 'active' : ''}" id="tab-${code}">
            <h3>${indicatorData.name}</h3>
            <div class="indicator-summary">
                ${analysis?.indicators?.[code]?.analysis || '分析中...'}
            </div>
            <div class="ai-analysis-section" id="ai-analysis-${code}">
                <h4>🤖 AI分析コメント</h4>
                <div class="ai-analysis-content">
                    ${analysis?.indicators?.[code]?.insights?.join('<br>') || 'AI分析を読み込み中...'}
                </div>
                <div class="ai-analysis-trends">
                    <strong>世界的なトレンド:</strong> ${analysis?.indicators?.[code]?.globalTrends || '分析中...'}
                </div>
            </div>
            <div class="indicator-chart">
                <canvas id="chart-${code}" width="400" height="200"></canvas>
            </div>
        </div>
    `).join('');
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
    // 実行時から直近20年間
    const currentYear = new Date().getFullYear();
    const years = Array.from({length: 20}, (_, i) => currentYear - 19 + i);
    
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
    
    // 利用可能な最新年を動的に見つける
    const availableYears = Object.values(economicData.byCountry)
        .flatMap(country => country.data)
        .filter(d => d.indicatorCode === 'SL.UEM.TOTL.ZS' && d.value !== null)
        .map(d => d.year);
    const latestYear = Math.max(...availableYears);
    
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
    
    // 利用可能な最新年を動的に見つける
    const availableYears = Object.values(economicData.byCountry)
        .flatMap(country => country.data)
        .filter(d => d.indicatorCode === 'NY.GDP.PCAP.CD' && d.value !== null)
        .map(d => d.year);
    const latestYear = Math.max(...availableYears);
    
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
    // 実行時から直近20年間
    const currentYear = new Date().getFullYear();
    const years = Array.from({length: 20}, (_, i) => currentYear - 19 + i);
    
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
    // 実行時から直近20年間
    const currentYear = new Date().getFullYear();
    const years = Array.from({length: 20}, (_, i) => currentYear - 19 + i);
    
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
    // 実行時から直近20年間
    const currentYear = new Date().getFullYear();
    const years = Array.from({length: 20}, (_, i) => currentYear - 19 + i);
    
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
    // 実行時から直近20年間
    const currentYear = new Date().getFullYear();
    const years = Array.from({length: 20}, (_, i) => currentYear - 19 + i);
    
    const datasets = countries.map((code, index) => {
        const countryData = economicData.byCountry[code];
        if (!countryData) return null;
        
        const data = years.map(year => {
            const record = countryData.data.find(d =>
                d.indicatorCode === 'BX.KLT.DINV.CD.WD' && d.year === year
            );
            // 10億ドル単位に変換
            return record ? record.value / 1e9 : null;
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
                    title: { display: true, text: '外国直接投資（10億ドル）' }
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
    document.querySelector(`[data-indicator="${indicatorCode}"]`).classList.add('active');
    document.getElementById(`tab-${indicatorCode}`).classList.add('active');
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
        const allData = Object.values(economicData.byCountry)
            .flatMap(country => country.data);
        
        // 利用可能な最新年を動的に見つける
        const availableYears = allData
            .filter(d => d.value !== null)
            .map(d => d.year);
        const latestYear = Math.max(...availableYears);
        
        data = allData
            .filter(d => d.year === latestYear)
            .slice(0, 50); // 表示制限
    }
    
    tableBody.innerHTML = data
        .sort((a, b) => b.year - a.year)
        .map(record => `
            <tr>
                <td>${record.year}</td>
                <td>${record.country}</td>
                <td>${record.indicator}</td>
                <td>${formatValue(record.value, getValueType(record.indicatorCode))}</td>
                <td>${record.unit}</td>
            </tr>
        `).join('');
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
window.updateDataTable = updateDataTable;