const stems = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"];
const branches = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];
const elements = ["木", "火", "土", "金", "水"];
const elementColors = { "木": "#4f795b", "火": "#a54c3e", "土": "#b0894b", "金": "#8b8a80", "水": "#3c6575" };
const stemElements = ["木", "木", "火", "火", "土", "土", "金", "金", "水", "水"];
const branchElements = ["水", "土", "木", "木", "土", "火", "火", "土", "金", "金", "土", "水"];
const stemYinYang = ["阳", "阴", "阳", "阴", "阳", "阴", "阳", "阴", "阳", "阴"];
const branchAnimals = ["鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪"];
const hiddenStems = [
  [9], [5, 9, 7], [0, 2, 4], [1], [4, 1, 9], [2, 6, 4],
  [3, 5], [5, 3, 1], [6, 8, 4], [7], [4, 7, 3], [8, 0]
];
const pillarLabels = ["年柱", "月柱", "日柱", "时柱"];
const elementCycle = ["木", "火", "土", "金", "水"];
const naYinPairs = [
  "海中金", "炉中火", "大林木", "路旁土", "剑锋金", "山头火",
  "涧下水", "城头土", "白蜡金", "杨柳木", "泉中水", "屋上土",
  "霹雳火", "松柏木", "长流水", "沙中金", "山下火", "平地木",
  "壁上土", "金箔金", "覆灯火", "天河水", "大驿土", "钗钏金",
  "桑柘木", "大溪水", "沙中土", "天上火", "石榴木", "大海水"
];
const lunarDayNames = [
  "初一", "初二", "初三", "初四", "初五", "初六", "初七", "初八", "初九", "初十",
  "十一", "十二", "十三", "十四", "十五", "十六", "十七", "十八", "十九", "二十",
  "廿一", "廿二", "廿三", "廿四", "廿五", "廿六", "廿七", "廿八", "廿九", "三十"
];
const nameElementDictionary = {
  "木": "木本术朱朴杉李杏材村杜杞杨杭杰松林柏柳栋栩桐桥梅梓森楚楠榕槿樱兰芳芷芸茵荣荣菲萱蓉若英茗蔚蕴青东卿",
  "火": "火炎炜炫炬炯烁烨焕焱煜熙照煦燕灵灿阳旭明昕昊昌昭映晖晗晓晴晶景智曜曦星晨丽丹彤夏南",
  "土": "土山屹岐岚岩岳峰峻崇城培基堂坤垚均圣境墨辰宇安宁容宛宸怡恩悠远衡和田里",
  "金": "金鑫钊钧钰铭铮银锋锐锦键锡镇铠铎铃钟鉴镜铁钱銮琛瑜瑞瑾璟珂珊珠玉白西秋辛",
  "水": "水永冰泉汐江河沐沛沁沙沅沐沂沫泓波泽洁洋洛津洪洲涵淇淋淼清渊湘溪源滢漪潇澜雨雪霖露云北子亥玄"
};
const fallbackChinaLocationRows = [
  ["北京市", 116.40, "北京市", "", "province", 39.90],
  ["上海市", 121.47, "上海市", "", "province", 31.23],
  ["广州市", 113.26, "广东省", "", "city", 23.13],
  ["深圳市", 114.06, "广东省", "", "city", 22.54],
  ["杭州市", 120.15, "浙江省", "", "city", 30.27],
  ["南京市", 118.80, "江苏省", "", "city", 32.06],
  ["成都市", 104.07, "四川省", "", "city", 30.57],
  ["重庆市", 106.55, "重庆市", "", "province", 29.56],
  ["武汉市", 114.30, "湖北省", "", "city", 30.59],
  ["西安市", 108.94, "陕西省", "", "city", 34.34],
  ["乌鲁木齐市", 87.62, "新疆维吾尔自治区", "", "city", 43.82],
  ["香港特别行政区", 114.17, "香港特别行政区", "", "province", 22.32],
  ["澳门特别行政区", 113.54, "澳门特别行政区", "", "province", 22.20],
  ["台北市", 121.56, "台湾省", "", "city", 25.03]
];
const supplementalChinaLocationRows = [
  ["台北市", 121.56, "台湾省", "", "city", 25.03]
];
const locationLatitudeHints = {
  "北京市": 39.90, "上海市": 31.23, "天津市": 39.12, "重庆市": 29.56,
  "广州市": 23.13, "深圳市": 22.54, "杭州市": 30.27, "南京市": 32.06,
  "成都市": 30.57, "武汉市": 30.59, "西安市": 34.34, "郑州市": 34.75,
  "长沙市": 28.23, "合肥市": 31.82, "福州市": 26.08, "厦门市": 24.48,
  "南昌市": 28.68, "济南市": 36.65, "青岛市": 36.07, "太原市": 37.87,
  "石家庄市": 38.04, "沈阳市": 41.80, "大连市": 38.91, "长春市": 43.82,
  "哈尔滨市": 45.80, "呼和浩特市": 40.82, "银川市": 38.47, "兰州市": 36.06,
  "西宁市": 36.62, "乌鲁木齐市": 43.82, "拉萨市": 29.65, "昆明市": 25.04,
  "贵阳市": 26.65, "南宁市": 22.82, "海口市": 20.04, "三亚市": 18.25,
  "香港特别行政区": 22.32, "澳门特别行政区": 22.20, "台北市": 25.03
};
const externalChinaLocationRows = typeof window !== "undefined" && Array.isArray(window.CHINA_LOCATION_ROWS) ? window.CHINA_LOCATION_ROWS : [];
const internationalLocationPresets = [
  { label: "新加坡", longitude: 103.82, latitude: 1.35, timezone: 8, aliases: ["Singapore", "新加坡市"] },
  { label: "日本·东京", longitude: 139.69, latitude: 35.68, timezone: 9, aliases: ["东京", "東京", "Tokyo"] },
  { label: "韩国·首尔", longitude: 126.98, latitude: 37.57, timezone: 9, aliases: ["首尔", "首爾", "Seoul"] },
  { label: "印度·新德里", longitude: 77.21, latitude: 28.61, timezone: 5.5, aliases: ["新德里", "New Delhi", "Delhi", "德里"] },
  { label: "印度·孟买", longitude: 72.88, latitude: 19.08, timezone: 5.5, aliases: ["孟买", "Mumbai", "Bombay"] }
];
const locationPresets = [
  ...uniqueChinaLocationRows(externalChinaLocationRows.length ? [...externalChinaLocationRows, ...supplementalChinaLocationRows] : fallbackChinaLocationRows).map(createChinaLocationPreset),
  ...internationalLocationPresets
].map(prepareLocationPreset);
const locationLookup = new Map();
const vedicSigns = [
  { zh: "白羊", en: "Mesha", element: "火", mode: "启动" },
  { zh: "金牛", en: "Vrishabha", element: "土", mode: "固定" },
  { zh: "双子", en: "Mithuna", element: "风", mode: "变动" },
  { zh: "巨蟹", en: "Karka", element: "水", mode: "启动" },
  { zh: "狮子", en: "Simha", element: "火", mode: "固定" },
  { zh: "处女", en: "Kanya", element: "土", mode: "变动" },
  { zh: "天秤", en: "Tula", element: "风", mode: "启动" },
  { zh: "天蝎", en: "Vrischika", element: "水", mode: "固定" },
  { zh: "射手", en: "Dhanu", element: "火", mode: "变动" },
  { zh: "摩羯", en: "Makara", element: "土", mode: "启动" },
  { zh: "水瓶", en: "Kumbha", element: "风", mode: "固定" },
  { zh: "双鱼", en: "Meena", element: "水", mode: "变动" }
];
const vedicSignLords = ["Mars", "Venus", "Mercury", "Moon", "Sun", "Mercury", "Venus", "Mars", "Jupiter", "Saturn", "Saturn", "Jupiter"];
const vedicPlanets = [
  { id: "Lagna", zh: "上升", abbr: "As", copy: "身体入口、命盘方向与现实承载力。" },
  { id: "Sun", zh: "太阳", abbr: "Su", copy: "自我光源、父亲/权威、使命感与可见度。" },
  { id: "Moon", zh: "月亮", abbr: "Mo", copy: "心智、情绪节律、母亲经验与安全感。" },
  { id: "Mars", zh: "火星", abbr: "Ma", copy: "行动、冲突、勇气、执行速度与边界推进。" },
  { id: "Mercury", zh: "水星", abbr: "Me", copy: "语言、学习、交易、分析和适应能力。" },
  { id: "Jupiter", zh: "木星", abbr: "Ju", copy: "老师、信念、扩张、智慧与保护性资源。" },
  { id: "Venus", zh: "金星", abbr: "Ve", copy: "关系、美感、愉悦、协商和价值交换。" },
  { id: "Saturn", zh: "土星", abbr: "Sa", copy: "时间、责任、延迟、结构、耐受力和现实检验。" },
  { id: "Rahu", zh: "罗睺", abbr: "Ra", copy: "放大、异质经验、欲望、突破与不稳定吸引。" },
  { id: "Ketu", zh: "计都", abbr: "Ke", copy: "剥离、内化、切断、前因与非世俗专注。" }
];
const vedicPlanetIds = vedicPlanets.map(planet => planet.id);
const vedicKarakaOrder = ["AK", "AmK", "BK", "MK", "PK", "GK", "DK"];
const vedicKarakaLabels = {
  AK: "Atmakaraka 灵魂主线",
  AmK: "Amatyakaraka 事业执行",
  BK: "Bhratrikaraka 同辈/勇气",
  MK: "Matrikaraka 照护/根基",
  PK: "Putrakaraka 创造/恋爱",
  GK: "Gnatikaraka 压力/竞争",
  DK: "Darakaraka 伴侣镜像"
};
const vedicDashaOrder = ["Ketu", "Venus", "Sun", "Moon", "Mars", "Rahu", "Jupiter", "Saturn", "Mercury"];
const vedicDashaYears = { Ketu: 7, Venus: 20, Sun: 6, Moon: 10, Mars: 7, Rahu: 18, Jupiter: 16, Saturn: 19, Mercury: 17 };
const vedicNakshatras = [
  "Ashwini", "Bharani", "Krittika", "Rohini", "Mrigashira", "Ardra", "Punarvasu", "Pushya", "Ashlesha",
  "Magha", "Purva Phalguni", "Uttara Phalguni", "Hasta", "Chitra", "Swati", "Vishakha", "Anuradha", "Jyeshtha",
  "Mula", "Purva Ashadha", "Uttara Ashadha", "Shravana", "Dhanishta", "Shatabhisha", "Purva Bhadrapada", "Uttara Bhadrapada", "Revati"
];
const vedicNakshatraLords = vedicNakshatras.map((_, index) => vedicDashaOrder[index % vedicDashaOrder.length]);
const vedicDignities = {
  Sun: { own: [4], exalted: 0, debilitated: 6 },
  Moon: { own: [3], exalted: 1, debilitated: 7 },
  Mars: { own: [0, 7], exalted: 9, debilitated: 3 },
  Mercury: { own: [2, 5], exalted: 5, debilitated: 11 },
  Jupiter: { own: [8, 11], exalted: 3, debilitated: 9 },
  Venus: { own: [1, 6], exalted: 11, debilitated: 5 },
  Saturn: { own: [9, 10], exalted: 6, debilitated: 0 }
};
const vedicGrahaDrishti = {
  Mars: [4, 7, 8],
  Jupiter: [5, 7, 9],
  Saturn: [3, 7, 10]
};
const vedicSkillCoverage = [
  { key: "reader", title: "vedic-reader", body: "统一读盘入口，前端按 structured_data 契约展示 D1、月宿、Chara Karaka 与校验边界。" },
  { key: "calculator", title: "vedic-calculator", body: "以离线近似恒星黄道生成 D1/D9 与 Vimshottari 预览；精排应交给 pysweph/JHora。" },
  { key: "core", title: "vedic-core", body: "按 P1-P12 思路拆角色、尊贵度、宫位、相位、月宿、Yoga 与 Dasha 线索。" },
  { key: "love", title: "vedic-love", body: "聚焦 5宫、7宫、Venus/Jupiter、PK/DK 与关系时间窗口，不做宿命化定断。" },
  { key: "career", title: "vedic-career", body: "聚焦 10宫、10主、AmK、Saturn/Jupiter 与 D9 支撑，提示事业生态位。" },
  { key: "rectifier", title: "vedic-rectifier", body: "时辰不确定时引导收集五类人生事件，用 Dasha/宫位映射做校时线索。" },
  { key: "synastry", title: "vedic-synastry", body: "合盘按 A→B 与 B→A 分向分析，月宿只作筛查，不输出单一匹配分。" }
];
const vedicRectifierEvents = [
  { event: "升学/毕业/考试", houses: "4/5/9", cue: "教育、证书、师承或方向转换" },
  { event: "入职/转岗/创业", houses: "10/6/2", cue: "职业身份、职责压力与收入结构" },
  { event: "恋爱/订婚/结婚", houses: "5/7/UL", cue: "关系启动、承诺、公开化节点" },
  { event: "搬家/买房/远行", houses: "4/12/9", cue: "居住根基、远方环境、空间变化" },
  { event: "疾病/手术/事故", houses: "6/8/12", cue: "压力峰值、损伤、修复与隐性消耗" }
];
let currentVedicChart = null;
let currentVedicBirthData = null;
let currentVedicMeta = null;

const trigrams = [
  { number: 1, name: "乾", image: "天", element: "金", lines: [1, 1, 1], direction: "西北", quality: "刚健、开阔、决断" },
  { number: 2, name: "兑", image: "泽", element: "金", lines: [1, 1, 0], direction: "西", quality: "表达、悦纳、协商" },
  { number: 3, name: "离", image: "火", element: "火", lines: [1, 0, 1], direction: "南", quality: "照见、审美、分辨" },
  { number: 4, name: "震", image: "雷", element: "木", lines: [1, 0, 0], direction: "东", quality: "启动、震发、行动" },
  { number: 5, name: "巽", image: "风", element: "木", lines: [0, 1, 1], direction: "东南", quality: "渗透、沟通、渐进" },
  { number: 6, name: "坎", image: "水", element: "水", lines: [0, 1, 0], direction: "北", quality: "风险、流动、智慧" },
  { number: 7, name: "艮", image: "山", element: "土", lines: [0, 0, 1], direction: "东北", quality: "止息、边界、沉着" },
  { number: 8, name: "坤", image: "地", element: "土", lines: [0, 0, 0], direction: "西南", quality: "承载、配合、滋养" }
];
const trigramByName = Object.fromEntries(trigrams.map(trigram => [trigram.name, trigram]));
const trigramByLineKey = Object.fromEntries(trigrams.map(trigram => [trigram.lines.join(""), trigram]));
const hexagramNames = {
  "乾-乾": "乾为天", "乾-兑": "天泽履", "乾-离": "天火同人", "乾-震": "天雷无妄", "乾-巽": "天风姤", "乾-坎": "天水讼", "乾-艮": "天山遁", "乾-坤": "天地否",
  "兑-乾": "泽天夬", "兑-兑": "兑为泽", "兑-离": "泽火革", "兑-震": "泽雷随", "兑-巽": "泽风大过", "兑-坎": "泽水困", "兑-艮": "泽山咸", "兑-坤": "泽地萃",
  "离-乾": "火天大有", "离-兑": "火泽睽", "离-离": "离为火", "离-震": "火雷噬嗑", "离-巽": "火风鼎", "离-坎": "火水未济", "离-艮": "火山旅", "离-坤": "火地晋",
  "震-乾": "雷天大壮", "震-兑": "雷泽归妹", "震-离": "雷火丰", "震-震": "震为雷", "震-巽": "雷风恒", "震-坎": "雷水解", "震-艮": "雷山小过", "震-坤": "雷地豫",
  "巽-乾": "风天小畜", "巽-兑": "风泽中孚", "巽-离": "风火家人", "巽-震": "风雷益", "巽-巽": "巽为风", "巽-坎": "风水涣", "巽-艮": "风山渐", "巽-坤": "风地观",
  "坎-乾": "水天需", "坎-兑": "水泽节", "坎-离": "水火既济", "坎-震": "水雷屯", "坎-巽": "水风井", "坎-坎": "坎为水", "坎-艮": "水山蹇", "坎-坤": "水地比",
  "艮-乾": "山天大畜", "艮-兑": "山泽损", "艮-离": "山火贲", "艮-震": "山雷颐", "艮-巽": "山风蛊", "艮-坎": "山水蒙", "艮-艮": "艮为山", "艮-坤": "山地剥",
  "坤-乾": "地天泰", "坤-兑": "地泽临", "坤-离": "地火明夷", "坤-震": "地雷复", "坤-巽": "地风升", "坤-坎": "地水师", "坤-艮": "地山谦", "坤-坤": "坤为地"
};
const trigramInsights = {
  "乾": "先看目标、规则和主导权，适合把模糊愿望整理成明确承诺。",
  "兑": "先看沟通、交换和情绪气氛，适合用更清楚的表达减少误会。",
  "离": "先看信息、证据和可见度，适合把判断放到事实光线下检验。",
  "震": "先看行动、启动和突发变化，适合把第一步做小并及时复盘。",
  "巽": "先看渗透、协商和长期影响，适合用柔和但连续的方式推进。",
  "坎": "先看风险、压力和未知水位，适合预留缓冲并确认真实约束。",
  "艮": "先看停止、边界和节奏，适合先暂停消耗，再决定是否继续。",
  "坤": "先看承载、资源和配合，适合稳住基本盘，避免独自硬扛。"
};
const lineLabels = ["初爻", "二爻", "三爻", "四爻", "五爻", "上爻"];
const yaoStates = {
  6: { name: "老阴", change: "变阳", moving: true },
  7: { name: "少阳", change: "静爻", moving: false },
  8: { name: "少阴", change: "静爻", moving: false },
  9: { name: "老阳", change: "变阴", moving: true }
};
const sixSpirits = ["青龙", "朱雀", "勾陈", "腾蛇", "白虎", "玄武"];
const sixKinCopy = {
  "兄弟": "同类、伙伴、竞争与自我立场",
  "子孙": "输出、结果、放松与消解压力",
  "妻财": "资源、现实收益与可管理事项",
  "官鬼": "规则、压力、责任与风险约束",
  "父母": "文书、支持、学习与保护条件"
};

const qimenPalaces = [
  { num: 4, name: "巽", direction: "东南", branch: "辰巳", element: "木" },
  { num: 9, name: "离", direction: "南", branch: "午", element: "火" },
  { num: 2, name: "坤", direction: "西南", branch: "未申", element: "土" },
  { num: 3, name: "震", direction: "东", branch: "卯", element: "木" },
  { num: 5, name: "中", direction: "中", branch: "中", element: "土" },
  { num: 7, name: "兑", direction: "西", branch: "酉", element: "金" },
  { num: 8, name: "艮", direction: "东北", branch: "丑寅", element: "土" },
  { num: 1, name: "坎", direction: "北", branch: "子", element: "水" },
  { num: 6, name: "乾", direction: "西北", branch: "戌亥", element: "金" }
];
const qimenFlow = [1, 8, 3, 4, 9, 2, 7, 6];
const qimenDoors = ["休门", "生门", "伤门", "杜门", "景门", "死门", "惊门", "开门"];
const qimenStars = ["天蓬", "天任", "天冲", "天辅", "天英", "天芮", "天柱", "天心", "天禽"];
const qimenGods = ["值符", "腾蛇", "太阴", "六合", "白虎", "玄武", "九地", "九天"];
const qimenStems = ["戊", "己", "庚", "辛", "壬", "癸", "丁", "丙", "乙"];
const qimenXunshou = ["甲子戊", "甲戌己", "甲申庚", "甲午辛", "甲辰壬", "甲寅癸"];
const qimenDoorCopy = {
  "休门": "利休整、沟通、学习和恢复秩序。",
  "生门": "利增长、资源、经营和稳步推进。",
  "伤门": "主动作、损耗与冲撞，宜控制成本。",
  "杜门": "主隐藏、阻隔和保密，宜先做准备。",
  "景门": "主展示、传播、文书和可见度。",
  "死门": "主停滞、收束和旧事处理，宜保守。",
  "惊门": "主消息、惊动和不确定，宜核实信息。",
  "开门": "利开启、公开、谈判和执行。"
};

const tenGodCopy = {
  "比肩": { group: "自主", brief: "同类支持", reading: "关注自主性、同辈协作与边界。适合在保持主见的同时，为他人留出参与空间。" },
  "劫财": { group: "自主", brief: "竞合与行动", reading: "关注竞争、合作与资源分配。行动力可贵，重要决定前也要核对成本和共识。" },
  "食神": { group: "表达", brief: "输出与滋养", reading: "关注创造、享受与稳定输出。把知识变成可持续的作品，往往比一时的灵感更有价值。" },
  "伤官": { group: "表达", brief: "突破与质疑", reading: "关注独立表达、改良规则与观点锋芒。表达前先区分“真实”和“有效”，更容易被听见。" },
  "偏财": { group: "资源", brief: "机会与流动", reading: "关注机会识别、外部资源与弹性决策。保持开放的同时，用预算和边界管理不确定性。" },
  "正财": { group: "资源", brief: "累积与责任", reading: "关注现实经营、稳定累积和承诺。长期系统通常比短期起伏更值得信赖。" },
  "七杀": { group: "规则", brief: "压力与决断", reading: "关注挑战、竞争环境与快速决策。把压力转换为可分解的任务，比一味硬撑更有效。" },
  "正官": { group: "规则", brief: "秩序与信誉", reading: "关注规范、角色责任和长期信誉。有清晰标准时容易发挥，也要避免用外部标准压缩自我空间。" },
  "偏印": { group: "学习", brief: "洞察与转换", reading: "关注独立学习、非标准视角和知识迁移。给探索设置阶段性产出，可以减少反复跳转。" },
  "正印": { group: "学习", brief: "吸收与支持", reading: "关注学习、资源支持与安全感。吸收信息之后进入实践，才能让“知道”变成“做得到”。" }
};

const elementCopy = {
  "木": { nature: "生发与舒展", organ: "肝、胆（传统对应）", care: "保持规律伸展和户外步行，情绪紧绷时先放慢呼吸。" },
  "火": { nature: "温暖与活力", organ: "心、小肠（传统对应）", care: "避免连续熬夜与过度兴奋，安排有节律的休息和社交。" },
  "土": { nature: "承载与转化", organ: "脾、胃（传统对应）", care: "三餐尽量定时，细嚼慢咽，不以极端忌口替代营养均衡。" },
  "金": { nature: "收敛与边界", organ: "肺、大肠（传统对应）", care: "留意通风和环境湿度，适度有氧运动，建立稳定排便习惯。" },
  "水": { nature: "储藏与滋养", organ: "肾、膀胱（传统对应）", care: "保证睡眠和适量饮水，久坐后起身活动，避免盲目进补。" }
};

const phaseSenses = {
  "木": { color: "青", taste: "酸", tone: "角", solfege: "mi", hex: "#4f795b", sequence: [329.63, 392, 440, 523.25, 659.25, 523.25, 440, 392, 329.63] },
  "火": { color: "赤", taste: "苦", tone: "徵", solfege: "sol", hex: "#a54c3e", sequence: [392, 440, 523.25, 659.25, 783.99, 659.25, 523.25, 440, 392] },
  "土": { color: "黄", taste: "甘", tone: "宫", solfege: "do", hex: "#b18a45", sequence: [261.63, 293.66, 329.63, 392, 523.25, 392, 329.63, 293.66, 261.63] },
  "金": { color: "白", taste: "辛", tone: "商", solfege: "re", hex: "#a6a398", sequence: [293.66, 329.63, 392, 440, 587.33, 440, 392, 329.63, 293.66] },
  "水": { color: "黑", taste: "咸", tone: "羽", solfege: "la", hex: "#3c6575", sequence: [220, 261.63, 293.66, 329.63, 440, 392, 329.63, 261.63, 220] }
};

const organClock = [
  { branch: "子", organ: "胆经", range: "23:00–01:00", advice: "尽量进入稳定睡眠，让光线和信息刺激逐渐减少。" },
  { branch: "丑", organ: "肝经", range: "01:00–03:00", advice: "传统养生强调深度休息，不需要特意醒来做任何调理。" },
  { branch: "寅", organ: "肺经", range: "03:00–05:00", advice: "保持安静睡眠环境；若反复因呼吸不适醒来，应就医评估。" },
  { branch: "卯", organ: "大肠经", range: "05:00–07:00", advice: "起床后可少量饮水、轻缓活动，不必强求固定排便时刻。" },
  { branch: "辰", organ: "胃经", range: "07:00–09:00", advice: "为自己准备营养均衡的早餐，进食过程尽量从容。" },
  { branch: "巳", organ: "脾经", range: "09:00–11:00", advice: "专注工作之余起身活动，正常饮水，不追求“排毒”食品。" },
  { branch: "午", organ: "心经", range: "11:00–13:00", advice: "午间适合短暂休息，饭后可缓步活动，避免立即剧烈运动。" },
  { branch: "未", organ: "小肠经", range: "13:00–15:00", advice: "午后保持舒适坐姿，每隔一段时间伸展肩颈与背部。" },
  { branch: "申", organ: "膀胱经", range: "15:00–17:00", advice: "可安排适度活动并按口渴饮水，无需为“冲洗”而过量饮水。" },
  { branch: "酉", organ: "肾经", range: "17:00–19:00", advice: "从工作向晚间放松过渡，饮食清淡均衡，不盲目使用补益药。" },
  { branch: "戌", organ: "心包经", range: "19:00–21:00", advice: "适合温和交流与放松，让情绪和心率逐渐平稳。" },
  { branch: "亥", organ: "三焦经", range: "21:00–23:00", advice: "调暗灯光、减少屏幕刺激，建立可重复的睡前程序。" }
];

const palaceNames = ["命宫", "兄弟", "夫妻", "子女", "财帛", "疾厄", "迁移", "交友", "官禄", "田宅", "福德", "父母"];
const palacePositions = [
  [4,1], [3,1], [2,1], [1,1], [1,2], [1,3],
  [1,4], [2,4], [3,4], [4,4], [4,3], [4,2]
];
const branchQualities = {
  "子": "潜藏、流动、起念",
  "丑": "蓄积、承载、耐心",
  "寅": "发端、行动、开创",
  "卯": "生发、协调、人缘",
  "辰": "整合、转化、蓄势",
  "巳": "辨明、表达、洞察",
  "午": "显明、热度、担当",
  "未": "沉淀、照顾、修整",
  "申": "变通、规则、效率",
  "酉": "审美、边界、精炼",
  "戌": "守成、检视、责任",
  "亥": "蓄养、想象、回归"
};
const palaceInterpretations = {
  "命宫": {
    topic: "自我气质",
    reading: "观察一个人习惯如何认识自己、面对选择，以及外界最容易感受到的气质。这里强时，适合先梳理核心价值，再决定行动顺序。",
    prompt: "把“我是谁”落到每天稳定的选择上。"
  },
  "兄弟": {
    topic: "同辈协作",
    reading: "观察手足、同辈、伙伴之间的互动方式，也可延伸为团队中的互助与边界。这里提醒你分清支持、竞争和责任归属。",
    prompt: "合作前先说清资源、时间和期待。"
  },
  "夫妻": {
    topic: "亲密关系",
    reading: "观察亲密伴侣、长期契约与相处模式。它不等同婚姻结论，更适合用来反思沟通节奏、承诺方式和彼此空间。",
    prompt: "关系里的稳定感，常来自可重复的沟通。"
  },
  "子女": {
    topic: "延展创造",
    reading: "观察子女缘、作品、创意延伸与照顾他人的方式。现代使用时，也可看作项目成果、培养后辈和长期输出的象。",
    prompt: "把灵感变成可被照看、可被交付的成果。"
  },
  "财帛": {
    topic: "资源经营",
    reading: "观察收入、消费、资源调度和价值交换。它不是财富保证，而是提醒你看见自己如何取得、保存和使用资源。",
    prompt: "让预算、节奏和价值判断一起工作。"
  },
  "疾厄": {
    topic: "身心警讯",
    reading: "传统上用于观察体质与隐忧；本应用只作健康教育提醒，不做疾病判断。可把它理解为压力、作息和风险管理的观察位。",
    prompt: "不舒服先看现实指标，必要时及时就医。"
  },
  "迁移": {
    topic: "外部舞台",
    reading: "观察外出、环境变化、远方机会和公众场域。它也代表离开熟悉环境后，个人能力如何被放大或重新校准。",
    prompt: "换环境前，先确认目标、资源和退路。"
  },
  "交友": {
    topic: "人脉网络",
    reading: "观察朋友、部属、社群和合作圈层。它提醒你辨别谁能同行、谁只适合短期协作，以及圈层对选择的影响。",
    prompt: "人脉的质量，往往比数量更影响方向。"
  },
  "官禄": {
    topic: "事业角色",
    reading: "观察职业路径、职责、名声与长期成就。这里适合反思自己更适合规则清晰、专业深耕，还是弹性开创的舞台。",
    prompt: "把能力放进能累积信用的位置。"
  },
  "田宅": {
    topic: "居所根基",
    reading: "观察家宅、不动产、居住环境与安全感来源。现代使用时，也可延伸为个人基地、工作空间和生活秩序。",
    prompt: "空间会塑造习惯，先整理最常待的位置。"
  },
  "福德": {
    topic: "精神余裕",
    reading: "观察内在满足、休息能力、兴趣与精神滋养。这里不是享乐指标，而是提醒你是否有让心安顿下来的方法。",
    prompt: "会休息的人，才更容易长期稳定。"
  },
  "父母": {
    topic: "来源支持",
    reading: "观察父母、长辈、师承、制度资源与早年背景。它可帮助你分辨哪些支持值得承接，哪些旧模式需要重新整理。",
    prompt: "承接资源，也要更新自己的选择权。"
  }
};

function mod(value, base) { return ((value % base) + base) % base; }

function normalizeLocation(value) {
  return value.trim().normalize("NFKC")
    .replace(/\s+/g, "")
    .replace(/[·•,，.。\-－—_/]/g, "")
    .replace(/^中华人民共和国/, "")
    .replace(/^中国/, "")
    .replace(/特别行政区$/, "")
    .replace(/市$/, "")
    .toLowerCase();
}

function shortRegionName(name) {
  return name
    .replace(/特别行政区$/, "")
    .replace(/维吾尔自治区$/, "")
    .replace(/壮族自治区$/, "")
    .replace(/回族自治区$/, "")
    .replace(/自治区$/, "")
    .replace(/省$/, "")
    .replace(/市$/, "")
    .replace(/地区$/, "")
    .replace(/自治州$/, "")
    .replace(/盟$/, "")
    .replace(/新区$/, "")
    .replace(/自治县$/, "")
    .replace(/县$/, "")
    .replace(/区$/, "");
}

function uniqueList(items) {
  return items.filter((item, index, list) => item && list.indexOf(item) === index);
}

function uniqueChinaLocationRows(rows) {
  const seenRows = new Set();
  return rows.filter(row => {
    const key = `${row[0]}|${row[2]}|${row[3]}`;
    if (seenRows.has(key)) return false;
    seenRows.add(key);
    return true;
  });
}

function createChinaLocationPreset(row) {
  const [name, longitude, province, parentCity, level, latitude] = row;
  const provinceShort = shortRegionName(province);
  const cityShort = parentCity ? shortRegionName(parentCity) : "";
  const nameShort = shortRegionName(name);
  const displayName = level === "district" && (!nameShort || nameShort === cityShort) ? name : nameShort;
  const parts = ["中国", provinceShort];
  if (level === "district" && cityShort && cityShort !== provinceShort) parts.push(cityShort);
  if (displayName && displayName !== parts[parts.length - 1]) parts.push(displayName);
  const aliases = uniqueList([
    name, nameShort,
    `中国${name}`, `中国${nameShort}`,
    `${province}${name}`, `${provinceShort}${nameShort}`,
    parentCity && `${parentCity}${name}`,
    cityShort && `${cityShort}${nameShort}`,
    parentCity && `${province}${parentCity}${name}`,
    parentCity && `${provinceShort}${cityShort}${nameShort}`
  ]);
  const inferredLatitude = Number.isFinite(Number(latitude))
    ? Number(latitude)
    : locationLatitudeHints[name] ?? locationLatitudeHints[parentCity] ?? locationLatitudeHints[province] ?? null;
  return {
    label: parts.join("·"),
    longitude: Number(longitude),
    latitude: inferredLatitude,
    timezone: 8,
    level,
    province,
    city: parentCity,
    aliases
  };
}

function prepareLocationPreset(preset) {
  const aliases = preset.aliases || [];
  return {
    ...preset,
    aliases,
    searchText: [preset.label, ...aliases].map(alias => normalizeLocation(alias)).join("|")
  };
}

function addLocationAlias(alias, preset) {
  const normalized = normalizeLocation(alias);
  if (!normalized) return;
  const matches = locationLookup.get(normalized) || [];
  if (!matches.some(match => match.label === preset.label)) matches.push(preset);
  locationLookup.set(normalized, matches);
}

locationPresets.forEach(preset => {
  [preset.label, ...preset.aliases].forEach(alias => {
    addLocationAlias(alias, preset);
  });
});

function resolveLocationPreset(value) {
  const normalized = normalizeLocation(value);
  if (!normalized) return { status: "empty", matches: [] };
  const matches = locationLookup.get(normalized) || [];
  if (matches.length === 1) return { status: "match", preset: matches[0], matches };
  if (matches.length > 1) return { status: "ambiguous", matches };
  return { status: "missing", matches: [] };
}

function findLocationPreset(value) {
  const resolution = resolveLocationPreset(value);
  return resolution.status === "match" ? resolution.preset : null;
}

function formatLocationExamples(matches) {
  return matches.slice(0, 3).map(match => match.label.replace(/^中国·/, "")).join("、");
}

function formatLongitude(longitude) {
  return `${longitude >= 0 ? "东经" : "西经"}${Math.abs(longitude).toFixed(2)}`;
}

function formatLatitude(latitude) {
  return `${latitude >= 0 ? "北纬" : "南纬"}${Math.abs(latitude).toFixed(2)}`;
}

function formatTimezone(timezone) {
  const numeric = Number(timezone);
  const abs = Math.abs(numeric);
  const hours = Math.floor(abs);
  const minutes = Math.round((abs - hours) * 60);
  return `UTC${numeric >= 0 ? "+" : "-"}${hours}${minutes ? `:${String(minutes).padStart(2, "0")}` : ""}`;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;"
  })[char]);
}

function degToRad(degrees) { return degrees * Math.PI / 180; }

function radToDeg(radians) { return radians * 180 / Math.PI; }

function rev(degrees) { return mod(degrees, 360); }

function sinDeg(degrees) { return Math.sin(degToRad(degrees)); }

function cosDeg(degrees) { return Math.cos(degToRad(degrees)); }

function tanDeg(degrees) { return Math.tan(degToRad(degrees)); }

function localBirthToUtcMillis(year, month, day, hour, minute, timezone) {
  return Date.UTC(year, month - 1, day, hour || 0, minute || 0) - Number(timezone) * 60 * 60 * 1000;
}

function julianDayFromUtcMillis(utcMillis) {
  return utcMillis / 86400000 + 2440587.5;
}

function getAyanamsaApprox(julianDay) {
  const centuries = (julianDay - 2451545.0) / 36525;
  return 23.85675 + 1.396971 * centuries + 0.0003086 * centuries * centuries;
}

function solveKepler(meanAnomaly, eccentricity) {
  let eccentricAnomaly = degToRad(meanAnomaly) + eccentricity * Math.sin(degToRad(meanAnomaly)) * (1 + eccentricity * Math.cos(degToRad(meanAnomaly)));
  for (let index = 0; index < 6; index += 1) {
    eccentricAnomaly -= (eccentricAnomaly - eccentricity * Math.sin(eccentricAnomaly) - degToRad(meanAnomaly)) / (1 - eccentricity * Math.cos(eccentricAnomaly));
  }
  return eccentricAnomaly;
}

function getOrbitalElements(planet, days) {
  const data = {
    Mercury: {
      N: 48.3313 + 3.24587e-5 * days,
      i: 7.0047 + 5.00e-8 * days,
      w: 29.1241 + 1.01444e-5 * days,
      a: 0.387098,
      e: 0.205635 + 5.59e-10 * days,
      M: 168.6562 + 4.0923344368 * days
    },
    Venus: {
      N: 76.6799 + 2.46590e-5 * days,
      i: 3.3946 + 2.75e-8 * days,
      w: 54.8910 + 1.38374e-5 * days,
      a: 0.723330,
      e: 0.006773 - 1.302e-9 * days,
      M: 48.0052 + 1.6021302244 * days
    },
    Earth: {
      N: 0,
      i: 0,
      w: 282.9404 + 4.70935e-5 * days,
      a: 1.000000,
      e: 0.016709 - 1.151e-9 * days,
      M: 356.0470 + 0.9856002585 * days
    },
    Mars: {
      N: 49.5574 + 2.11081e-5 * days,
      i: 1.8497 - 1.78e-8 * days,
      w: 286.5016 + 2.92961e-5 * days,
      a: 1.523688,
      e: 0.093405 + 2.516e-9 * days,
      M: 18.6021 + 0.5240207766 * days
    },
    Jupiter: {
      N: 100.4542 + 2.76854e-5 * days,
      i: 1.3030 - 1.557e-7 * days,
      w: 273.8777 + 1.64505e-5 * days,
      a: 5.20256,
      e: 0.048498 + 4.469e-9 * days,
      M: 19.8950 + 0.0830853001 * days
    },
    Saturn: {
      N: 113.6634 + 2.38980e-5 * days,
      i: 2.4886 - 1.081e-7 * days,
      w: 339.3939 + 2.97661e-5 * days,
      a: 9.55475,
      e: 0.055546 - 9.499e-9 * days,
      M: 316.9670 + 0.0334442282 * days
    }
  };
  return data[planet];
}

function heliocentricPosition(planet, days) {
  const elementsData = getOrbitalElements(planet, days);
  const eccentricAnomaly = solveKepler(rev(elementsData.M), elementsData.e);
  const xv = elementsData.a * (Math.cos(eccentricAnomaly) - elementsData.e);
  const yv = elementsData.a * Math.sqrt(1 - elementsData.e * elementsData.e) * Math.sin(eccentricAnomaly);
  const trueAnomaly = radToDeg(Math.atan2(yv, xv));
  const radius = Math.sqrt(xv * xv + yv * yv);
  const node = elementsData.N;
  const inclination = elementsData.i;
  const perihelion = elementsData.w;
  return {
    x: radius * (cosDeg(node) * cosDeg(trueAnomaly + perihelion) - sinDeg(node) * sinDeg(trueAnomaly + perihelion) * cosDeg(inclination)),
    y: radius * (sinDeg(node) * cosDeg(trueAnomaly + perihelion) + cosDeg(node) * sinDeg(trueAnomaly + perihelion) * cosDeg(inclination)),
    z: radius * sinDeg(trueAnomaly + perihelion) * sinDeg(inclination)
  };
}

function calculateMoonTropicalLongitude(julianDay) {
  const centuries = (julianDay - 2451545.0) / 36525;
  const meanLongitude = rev(218.3164477 + 481267.88123421 * centuries);
  const elongation = rev(297.8501921 + 445267.1114034 * centuries);
  const sunAnomaly = rev(357.5291092 + 35999.0502909 * centuries);
  const moonAnomaly = rev(134.9633964 + 477198.8675055 * centuries);
  return rev(
    meanLongitude
    + 6.289 * sinDeg(moonAnomaly)
    + 1.274 * sinDeg(2 * elongation - moonAnomaly)
    + 0.658 * sinDeg(2 * elongation)
    + 0.214 * sinDeg(2 * moonAnomaly)
    - 0.186 * sinDeg(sunAnomaly)
    - 0.059 * sinDeg(2 * elongation - 2 * moonAnomaly)
  );
}

function calculateTropicalLongitude(planet, julianDay) {
  const days = julianDay - 2451543.5;
  if (planet === "Moon") return calculateMoonTropicalLongitude(julianDay);
  if (planet === "Rahu") return rev(125.04452 - 0.0529538083 * days);
  if (planet === "Ketu") return rev(calculateTropicalLongitude("Rahu", julianDay) + 180);
  const earth = heliocentricPosition("Earth", days);
  if (planet === "Sun") return rev(radToDeg(Math.atan2(-earth.y, -earth.x)));
  const body = heliocentricPosition(planet, days);
  return rev(radToDeg(Math.atan2(body.y - earth.y, body.x - earth.x)));
}

function calculateAscendantLongitude(julianDay, longitude, latitude) {
  const centuries = (julianDay - 2451545.0) / 36525;
  const siderealTime = rev(280.46061837 + 360.98564736629 * (julianDay - 2451545.0) + 0.000387933 * centuries * centuries - centuries * centuries * centuries / 38710000 + longitude);
  const obliquity = 23.439291 - 0.0130042 * centuries;
  const ascendant = rev(radToDeg(Math.atan2(
    -cosDeg(siderealTime),
    sinDeg(siderealTime) * cosDeg(obliquity) + tanDeg(latitude) * sinDeg(obliquity)
  )));
  return Number.isFinite(ascendant) ? ascendant : rev(siderealTime + 90);
}

function getVedicSignInfo(longitude) {
  const normalized = rev(longitude);
  const signIndex = Math.floor(normalized / 30);
  const degree = normalized - signIndex * 30;
  const nakshatraSize = 360 / 27;
  const padaSize = 360 / 108;
  const nakshatraIndex = Math.min(26, Math.floor(normalized / nakshatraSize));
  const pada = Math.floor((normalized - nakshatraIndex * nakshatraSize) / padaSize) + 1;
  return {
    signIndex,
    sign: vedicSigns[signIndex],
    degree,
    nakshatraIndex,
    nakshatra: vedicNakshatras[nakshatraIndex],
    nakshatraLord: vedicNakshatraLords[nakshatraIndex],
    pada
  };
}

function getNavamshaSign(signIndex, degree) {
  const padaInSign = Math.min(8, Math.floor(degree / (30 / 9)));
  const start = signIndex % 3 === 0 ? signIndex : signIndex % 3 === 1 ? mod(signIndex + 8, 12) : mod(signIndex + 4, 12);
  return mod(start + padaInSign, 12);
}

function formatVedicDegree(planet) {
  return `${vedicSigns[planet.signIndex].zh} ${planet.degree.toFixed(1)}°`;
}

function getPlanetZh(planetId) {
  return vedicPlanets.find(planet => planet.id === planetId)?.zh || planetId;
}

function getVedicPlanet(chart, planetId) {
  return chart.planets.find(planet => planet.id === planetId);
}

function calculateHouse(signIndex, lagnaSignIndex) {
  return mod(signIndex - lagnaSignIndex, 12) + 1;
}

function getVedicDignity(planetId, signIndex) {
  const dignity = vedicDignities[planetId];
  if (!dignity) return { label: "节点", tone: "非传统尊贵度", weight: 0 };
  if (dignity.exalted === signIndex) return { label: "Exalted", tone: "擢升，力量容易被看见", weight: 2 };
  if (dignity.debilitated === signIndex) return { label: "Debilitated", tone: "落陷，需要现实训练", weight: -2 };
  if (dignity.own.includes(signIndex)) return { label: "Own Sign", tone: "入庙/守护星座，表达稳定", weight: 1.5 };
  return { label: "Neutral", tone: "常态发挥，需看宫位与相位", weight: 0 };
}

function calculateHouseLords(lagnaSignIndex) {
  return Array.from({ length: 12 }, (_, index) => {
    const signIndex = mod(lagnaSignIndex + index, 12);
    return { house: index + 1, signIndex, lord: vedicSignLords[signIndex] };
  });
}

function calculateCharaKarakas(planetEntries) {
  const karakaPlanets = planetEntries
    .filter(planet => ["Sun", "Moon", "Mars", "Mercury", "Jupiter", "Venus", "Saturn"].includes(planet.id))
    .map(planet => ({ ...planet, degreeInSign: planet.degree }))
    .sort((left, right) => right.degreeInSign - left.degreeInSign);
  return Object.fromEntries(karakaPlanets.map((planet, index) => [vedicKarakaOrder[index], planet.id]));
}

function calculateVimshottariPreview(moonLongitude, birthUtcMillis) {
  const nakshatraSize = 360 / 27;
  const nakshatraIndex = Math.floor(rev(moonLongitude) / nakshatraSize);
  const birthLord = vedicNakshatraLords[nakshatraIndex];
  const lordIndex = vedicDashaOrder.indexOf(birthLord);
  const elapsedInNakshatra = (rev(moonLongitude) % nakshatraSize) / nakshatraSize;
  const firstRemaining = vedicDashaYears[birthLord] * (1 - elapsedInNakshatra);
  const ageYears = Math.max(0, (Date.now() - birthUtcMillis) / 31556952000);
  let cursor = 0;
  let current = { lord: birthLord, startAge: 0, endAge: firstRemaining, length: firstRemaining, sequenceIndex: lordIndex };
  for (let index = 0; index < 27; index += 1) {
    const dashaLord = vedicDashaOrder[(lordIndex + index) % vedicDashaOrder.length];
    const length = index === 0 ? firstRemaining : vedicDashaYears[dashaLord];
    const end = cursor + length;
    if (ageYears <= end) {
      current = { lord: dashaLord, startAge: cursor, endAge: end, length, sequenceIndex: (lordIndex + index) % vedicDashaOrder.length };
      break;
    }
    cursor = end;
  }
  const elapsedInCurrent = Math.max(0, ageYears - current.startAge);
  let antarCursor = 0;
  let antarLord = current.lord;
  const antarStart = vedicDashaOrder.indexOf(current.lord);
  for (let index = 0; index < vedicDashaOrder.length; index += 1) {
    const lord = vedicDashaOrder[(antarStart + index) % vedicDashaOrder.length];
    const segment = current.length * vedicDashaYears[lord] / 120;
    if (elapsedInCurrent <= antarCursor + segment) {
      antarLord = lord;
      break;
    }
    antarCursor += segment;
  }
  return {
    birthNakshatra: vedicNakshatras[nakshatraIndex],
    birthLord,
    firstRemaining,
    ageYears,
    mahaLord: current.lord,
    antarLord,
    periodLabel: `${getPlanetZh(current.lord)}大限 / ${getPlanetZh(antarLord)}小限`,
    ageRange: `${current.startAge.toFixed(1)}-${current.endAge.toFixed(1)}岁`
  };
}

function calculateVedicChart(birthData, meta) {
  const latitude = Number(meta.latitude);
  const longitude = Number(meta.longitude);
  const timezone = Number(meta.timezone);
  if (!birthData.timeKnown) return { unavailable: true, reason: "Vedic 上升点、分盘与合盘需要出生时间；当前为时辰未知。" };
  if (![latitude, longitude, timezone].every(Number.isFinite)) return { unavailable: true, reason: "请填写出生地经度、纬度与时区，才能生成印占上升点。" };
  const utcMillis = localBirthToUtcMillis(birthData.year, birthData.month, birthData.day, birthData.hour, birthData.minute, timezone);
  const julianDay = julianDayFromUtcMillis(utcMillis);
  const ayanamsa = getAyanamsaApprox(julianDay);
  const lagnaTropical = calculateAscendantLongitude(julianDay, longitude, latitude);
  const planetEntries = vedicPlanetIds.map(planetId => {
    const tropicalLongitude = planetId === "Lagna" ? lagnaTropical : calculateTropicalLongitude(planetId, julianDay);
    const longitudeSidereal = rev(tropicalLongitude - ayanamsa);
    const signInfo = getVedicSignInfo(longitudeSidereal);
    const navamshaSignIndex = getNavamshaSign(signInfo.signIndex, signInfo.degree);
    return {
      id: planetId,
      zh: getPlanetZh(planetId),
      longitude: longitudeSidereal,
      tropicalLongitude,
      signIndex: signInfo.signIndex,
      sign: signInfo.sign,
      degree: signInfo.degree,
      nakshatraIndex: signInfo.nakshatraIndex,
      nakshatra: signInfo.nakshatra,
      nakshatraLord: signInfo.nakshatraLord,
      pada: signInfo.pada,
      navamshaSignIndex,
      dignity: getVedicDignity(planetId, signInfo.signIndex)
    };
  });
  const lagna = planetEntries.find(planet => planet.id === "Lagna");
  planetEntries.forEach(planet => {
    planet.house = calculateHouse(planet.signIndex, lagna.signIndex);
  });
  const houseLords = calculateHouseLords(lagna.signIndex);
  const karakas = calculateCharaKarakas(planetEntries);
  const moon = planetEntries.find(planet => planet.id === "Moon");
  const dasha = calculateVimshottariPreview(moon.longitude, utcMillis);
  const chart = {
    birthData,
    meta: { ...meta, latitude, longitude, timezone },
    utcMillis,
    julianDay,
    ayanamsa,
    planets: planetEntries,
    lagna,
    houseLords,
    karakas,
    dasha
  };
  chart.yogas = detectVedicYogas(chart);
  chart.validation = getVedicValidation(chart);
  return chart;
}

function getHouseLord(chart, house) {
  return chart.houseLords.find(item => item.house === house)?.lord || "";
}

function getHousesOwnedBy(chart, planetId) {
  return chart.houseLords.filter(item => item.lord === planetId).map(item => item.house);
}

function getPlanetsInHouse(chart, house, { includeLagna = false } = {}) {
  return chart.planets.filter(planet => planet.house === house && (includeLagna || planet.id !== "Lagna"));
}

function getPlanetsInSign(chart, signIndex, { includeLagna = false } = {}) {
  return chart.planets.filter(planet => planet.signIndex === signIndex && (includeLagna || planet.id !== "Lagna"));
}

function getKarakaForPlanet(chart, planetId) {
  const entry = Object.entries(chart.karakas).find(([, id]) => id === planetId);
  return entry ? entry[0] : "";
}

function getVedicFunctionalRole(chart, planetId) {
  if (planetId === "Lagna") return "Core-Driver · 命盘入口";
  if (planetId === "Rahu" || planetId === "Ketu") return "Karmic Node · 放大/剥离";
  const houses = getHousesOwnedBy(chart, planetId);
  const ownsKendra = houses.some(house => [1, 4, 7, 10].includes(house));
  const ownsTrikona = houses.some(house => [1, 5, 9].includes(house));
  if (ownsKendra && ownsTrikona) return "Yogakaraka · 角宫/三方联动";
  if (houses.some(house => [1, 5, 9].includes(house))) return "Core-Driver · 方向与福德";
  if (houses.some(house => [6, 8, 12].includes(house))) return "Growth-Hacker · 压力转化";
  if (houses.some(house => [2, 7].includes(house))) return "Trader/Maraka Gate · 契约与价值";
  if (houses.some(house => [3, 11].includes(house))) return "Network Builder · 输出与圈层";
  return "Faithful · 支撑性角色";
}

function getPlanetAspectHouses(planet) {
  const houses = vedicGrahaDrishti[planet.id] || [7];
  if (!vedicGrahaDrishti[planet.id] && planet.id !== "Lagna") return houses;
  if (planet.id === "Lagna") return [];
  return houses;
}

function hasWholeSignAspect(sourcePlanet, targetPlanet) {
  const distance = mod(targetPlanet.house - sourcePlanet.house, 12) + 1;
  return getPlanetAspectHouses(sourcePlanet).includes(distance);
}

function detectVedicYogas(chart) {
  const moon = getVedicPlanet(chart, "Moon");
  const jupiter = getVedicPlanet(chart, "Jupiter");
  const mars = getVedicPlanet(chart, "Mars");
  const saturn = getVedicPlanet(chart, "Saturn");
  const yogaList = [];
  const moonToJupiter = mod(jupiter.house - moon.house, 12) + 1;
  if ([1, 4, 7, 10].includes(moonToJupiter)) {
    yogaList.push({ title: "Gajakesari Yoga", body: "月亮与木星呈角宫关系，传统视为学习、保护与公众回应的增强线索。" });
  }
  const moonToMars = mod(mars.house - moon.house, 12) + 1;
  if ([1, 7].includes(moonToMars)) {
    yogaList.push({ title: "Chandra-Mangala", body: "月亮与火星强相连，情绪、行动和资源获取容易互相点燃。" });
  }
  ["Mars", "Mercury", "Jupiter", "Venus", "Saturn"].forEach(planetId => {
    const planet = getVedicPlanet(chart, planetId);
    if ([1, 4, 7, 10].includes(planet.house) && planet.dignity.weight > 0) {
      yogaList.push({ title: "Pancha Mahapurusha 线索", body: `${planet.zh}在角宫且尊贵度较强，可作为人格/职业能力的支柱之一。` });
    }
  });
  if ([6, 8, 12].includes(saturn.house) && saturn.dignity.weight >= 0) {
    yogaList.push({ title: "Viparita 线索", body: "土星落压力宫但不弱，困难议题可能通过长期纪律转为能力。" });
  }
  return yogaList.length ? yogaList.slice(0, 5) : [{ title: "Yoga 边界", body: "离线预览未抓到强 Yoga；完整判断需结合精确 Shadbala、Dasha 与多分盘。" }];
}

function getVedicValidation(chart) {
  const rahu = getVedicPlanet(chart, "Rahu");
  const ketu = getVedicPlanet(chart, "Ketu");
  const nodeSeparation = Math.abs(rev(rahu.longitude - ketu.longitude));
  const nodeDistance = Math.abs(180 - nodeSeparation);
  return [
    { label: "行星完整性", value: chart.planets.length === vedicPlanets.length ? "通过" : "待复核", note: "含 Lagna、七曜与 Rahu/Ketu。" },
    { label: "Rahu/Ketu", value: nodeDistance < 0.5 ? "对冲" : "近似", note: `节点夹角约 ${nodeSeparation.toFixed(1)}°。` },
    { label: "Ayanamsa", value: `${chart.ayanamsa.toFixed(2)}°`, note: "前端近似 Lahiri，不替代 Swiss Ephemeris。" },
    { label: "Dasha", value: chart.dasha.periodLabel, note: `出生月宿 ${chart.dasha.birthNakshatra}，当前约 ${chart.dasha.ageRange}。` }
  ];
}

function renderVedicStatus(chart) {
  const lagna = chart.lagna;
  const moon = getVedicPlanet(chart, "Moon");
  const dk = chart.karakas.DK;
  const amk = chart.karakas.AmK;
  document.querySelector("#vedic-status").innerHTML = [
    { label: "上升", value: `${lagna.sign.zh} ${lagna.degree.toFixed(1)}°`, note: `${formatLatitude(chart.meta.latitude)} · ${formatLongitude(chart.meta.longitude)}` },
    { label: "月宿", value: `${moon.nakshatra} p${moon.pada}`, note: `月宿主 ${getPlanetZh(moon.nakshatraLord)}，Dasha 由此起算` },
    { label: "当前 Dasha", value: chart.dasha.periodLabel, note: chart.dasha.ageRange },
    { label: "Karaka", value: `AmK ${getPlanetZh(amk)} · DK ${getPlanetZh(dk)}`, note: "7K Chara Karaka 排序预览" }
  ].map(item => `<div class="vedic-status-item"><small>${item.label}</small><strong>${item.value}</strong><span>${item.note}</span></div>`).join("");
}

function renderVedicWheel(chart) {
  const cells = vedicSigns.map((sign, signIndex) => {
    const planets = getPlanetsInSign(chart, signIndex, { includeLagna: true });
    const isAsc = chart.lagna.signIndex === signIndex;
    return `<div class="vedic-sign-cell${isAsc ? " asc" : ""}">
      <small>${sign.en} · ${sign.mode}</small>
      <b>${sign.zh}</b>
      <div class="vedic-sign-planets">
        ${planets.map(planet => `<span>${planet.id === "Lagna" ? "ASC" : planet.zh}</span>`).join("") || "<span>—</span>"}
      </div>
    </div>`;
  }).join("");
  document.querySelector("#vedic-chart-wheel").innerHTML = cells;
}

function renderVedicPlanetTable(chart) {
  const rows = chart.planets.map(planet => {
    const karaka = getKarakaForPlanet(chart, planet.id);
    return `<tr>
      <td><strong>${planet.zh}</strong><small>${planet.id}${karaka ? ` · ${karaka}` : ""}</small></td>
      <td>${formatVedicDegree(planet)}<small>${planet.sign.en}</small></td>
      <td>第${planet.house}宫<small>${planet.id === "Lagna" ? "上升基准" : getVedicFunctionalRole(chart, planet.id)}</small></td>
      <td>${planet.nakshatra} p${planet.pada}<small>主 ${getPlanetZh(planet.nakshatraLord)}</small></td>
      <td>D9 ${vedicSigns[planet.navamshaSignIndex].zh}<small>${planet.dignity.label}</small></td>
    </tr>`;
  }).join("");
  document.querySelector("#vedic-planet-table").innerHTML = `<table>
    <thead><tr><th>星体</th><th>D1 位置</th><th>宫位 / P1</th><th>Nakshatra</th><th>Navamsa / P7</th></tr></thead>
    <tbody>${rows}</tbody>
  </table>`;
}

function renderVedicSkillGrid() {
  document.querySelector("#vedic-skill-grid").innerHTML = vedicSkillCoverage.map((skill, index) => `
    <article class="vedic-skill-item">
      <small>${String(index + 1).padStart(2, "0")} · ${skill.key}</small>
      <strong>${skill.title}</strong>
      <span>${skill.body}</span>
    </article>
  `).join("");
}

function renderVedicAudit(chart) {
  const auditPlanets = chart.planets.filter(planet => planet.id !== "Lagna");
  document.querySelector("#vedic-audit-grid").innerHTML = auditPlanets.map(planet => {
    const owned = getHousesOwnedBy(chart, planet.id);
    const karaka = getKarakaForPlanet(chart, planet.id);
    const aspects = getPlanetAspectHouses(planet).map(offset => mod(planet.house + offset - 2, 12) + 1);
    return `<article class="vedic-audit-item">
      <small>P1 ${getVedicFunctionalRole(chart, planet.id)}</small>
      <strong>${planet.zh}${karaka ? ` · ${karaka}` : ""}</strong>
      <span>P4 宫位：第${planet.house}宫${owned.length ? `，掌 ${owned.join("/")}宫` : ""}。P7 尊贵度：${planet.dignity.label}，${planet.dignity.tone}。P10 相位：${aspects.length ? `照第${aspects.join("/")}宫` : "节点/上升不取常规相位"}。P11 月宿：${planet.nakshatra} p${planet.pada}。</span>
    </article>`;
  }).join("");
}

function renderVedicLove(chart) {
  const venus = getVedicPlanet(chart, "Venus");
  const jupiter = getVedicPlanet(chart, "Jupiter");
  const fifthLord = getHouseLord(chart, 5);
  const seventhLord = getHouseLord(chart, 7);
  const pk = chart.karakas.PK;
  const dk = chart.karakas.DK;
  const seventhPlanets = getPlanetsInHouse(chart, 7).map(planet => planet.zh).join("、") || "无主要星体";
  document.querySelector("#vedic-love").innerHTML = `
    <div class="vedic-topic-item"><small>5宫 / PK</small><strong>${getPlanetZh(fifthLord)} · ${getPlanetZh(pk)}</strong><span>恋爱启动看 5宫主与 PK。5宫主在第${getVedicPlanet(chart, fifthLord)?.house || "—"}宫，PK 为${getPlanetZh(pk)}，提示创造、心动与表达方式。</span></div>
    <div class="vedic-topic-item"><small>7宫 / DK</small><strong>${getPlanetZh(seventhLord)} · ${getPlanetZh(dk)}</strong><span>长期关系看 7宫主、DK 与 7宫占星。7宫内：${seventhPlanets}；DK 落第${getVedicPlanet(chart, dk)?.house || "—"}宫，像伴侣议题投射的位置。</span></div>
    <div class="vedic-topic-item"><small>Venus / Jupiter</small><strong>${venus.zh}第${venus.house}宫 · ${jupiter.zh}第${jupiter.house}宫</strong><span>金星看吸引与协商，木星看保护与承诺。此处只给结构线索，真实关系仍看双方选择与沟通。</span></div>`;
}

function renderVedicCareer(chart) {
  const tenthLord = getHouseLord(chart, 10);
  const amk = chart.karakas.AmK;
  const saturn = getVedicPlanet(chart, "Saturn");
  const jupiter = getVedicPlanet(chart, "Jupiter");
  const tenthPlanets = getPlanetsInHouse(chart, 10).map(planet => planet.zh).join("、") || "无主要星体";
  const tenthLordPlanet = getVedicPlanet(chart, tenthLord);
  document.querySelector("#vedic-career").innerHTML = `
    <div class="vedic-topic-item"><small>10宫 / L10</small><strong>${getPlanetZh(tenthLord)} · 第${tenthLordPlanet?.house || "—"}宫</strong><span>事业角色以 10宫主为入口。10宫内：${tenthPlanets}；10主落宫提示职业舞台的现实落点。</span></div>
    <div class="vedic-topic-item"><small>AmK</small><strong>${getPlanetZh(amk)} · ${vedicKarakaLabels.AmK}</strong><span>AmK 代表执行型才能。${getPlanetZh(amk)}落第${getVedicPlanet(chart, amk)?.house || "—"}宫，适合结合 D10 精盘再细化行业与职位。</span></div>
    <div class="vedic-topic-item"><small>Saturn / Jupiter</small><strong>土星第${saturn.house}宫 · 木星第${jupiter.house}宫</strong><span>土星看长期训练和组织结构，木星看资源、导师与增长。两者一起决定事业能否沉淀为信用。</span></div>`;
}

function renderVedicRectifier(chart) {
  const sensitivity = chart.lagna.degree < 2 || chart.lagna.degree > 28 ? "上升接近换座边界，建议做生时校准。" : "上升未贴近换座边界，但若出生时间有误差仍建议复核。";
  document.querySelector("#vedic-rectifier").innerHTML = `
    <div class="vedic-topic-item"><small>出生时间敏感度</small><strong>${sensitivity}</strong><span>Vedic rectifier 建议至少准备 5 个有日期的重大事件，再与 Dasha、宫位和分盘触发交叉核对。</span></div>
    ${vedicRectifierEvents.map(item => `<div class="vedic-topic-item"><small>${item.houses}</small><strong>${item.event}</strong><span>${item.cue}</span></div>`).join("")}`;
}

function renderVedicYogas(chart) {
  const boundary = `<div class="vedic-boundary">边界：本页为浏览器离线近似预览，未调用 Swiss Ephemeris、Shadbala、Ashtakavarga 或完整 divisional charts；专业精盘仍应输出 structured_data.md 后由 Vedic skills 深读。</div>`;
  document.querySelector("#vedic-chart-note").textContent = `Lahiri 近似 ayanamsa ${chart.ayanamsa.toFixed(2)}° · ${chart.validation[0].value}`;
  const yogaHtml = chart.yogas.map(yoga => `<div class="vedic-topic-item"><small>Yoga</small><strong>${yoga.title}</strong><span>${yoga.body}</span></div>`).join("");
  const validationHtml = chart.validation.map(item => `<div class="vedic-topic-item"><small>${item.label}</small><strong>${item.value}</strong><span>${item.note}</span></div>`).join("");
  return `<div class="synastry-matrix">${validationHtml}${yogaHtml}</div>${boundary}`;
}

function renderVedicUnavailable(message) {
  currentVedicChart = null;
  currentVedicBirthData = null;
  currentVedicMeta = null;
  renderVedicSkillGrid();
  document.querySelector("#vedic-status").innerHTML = `<div class="vedic-status-item"><small>状态</small><strong>暂不可排</strong><span>${message}</span></div>`;
  document.querySelector("#vedic-chart-note").textContent = "等待完整出生时间、经纬度与时区";
  const unavailable = `<div class="vedic-unavailable"><strong>印占预览暂不可用</strong><p>${message}</p></div>`;
  document.querySelector("#vedic-chart-wheel").innerHTML = unavailable;
  document.querySelector("#vedic-planet-table").innerHTML = "";
  document.querySelector("#vedic-audit-grid").innerHTML = unavailable;
  document.querySelector("#vedic-love").innerHTML = unavailable;
  document.querySelector("#vedic-career").innerHTML = unavailable;
  document.querySelector("#vedic-rectifier").innerHTML = `
    <div class="vedic-topic-item"><small>RECTIFIER</small><strong>可先记录五个事件</strong><span>出生时间未知时，先收集升学、职业、关系、搬迁、疾病/手术等有明确年月日的事件，再进入校时。</span></div>
    ${vedicRectifierEvents.map(item => `<div class="vedic-topic-item"><small>${item.houses}</small><strong>${item.event}</strong><span>${item.cue}</span></div>`).join("")}`;
  document.querySelector("#vedic-synastry-result").innerHTML = `<div class="vedic-boundary">合盘需要双方都有可用的 Vedic 本命盘。</div>`;
}

function syncPartnerDefaults(meta, birthData) {
  const longitude = document.querySelector("#partner-longitude");
  const latitude = document.querySelector("#partner-latitude");
  const timezone = document.querySelector("#partner-timezone");
  const date = document.querySelector("#partner-date");
  if (!longitude.value && Number.isFinite(meta.longitude)) longitude.value = meta.longitude.toFixed(2);
  if (!latitude.value && Number.isFinite(meta.latitude)) latitude.value = meta.latitude.toFixed(2);
  if (!timezone.value && Number.isFinite(meta.timezone)) timezone.value = String(meta.timezone);
  timezone.value = String(meta.timezone);
  if (!date.value && birthData?.year) date.value = toIsoDateParts(birthData.year, birthData.month, birthData.day);
}

function renderVedic(result, birthData, meta) {
  const chart = calculateVedicChart(birthData, meta);
  if (chart.unavailable) {
    renderVedicUnavailable(chart.reason);
    return;
  }
  currentVedicChart = chart;
  currentVedicBirthData = birthData;
  currentVedicMeta = meta;
  renderVedicStatus(chart);
  renderVedicWheel(chart);
  renderVedicPlanetTable(chart);
  renderVedicSkillGrid();
  renderVedicAudit(chart);
  renderVedicLove(chart);
  renderVedicCareer(chart);
  renderVedicRectifier(chart);
  document.querySelector("#vedic-synastry-result").innerHTML = renderVedicYogas(chart);
  syncPartnerDefaults(meta, birthData);
}

function describeSynastryHouse(house) {
  const map = {
    1: "直接触发自我感和身体反应",
    2: "触发价值、安全感与资源议题",
    3: "触发沟通、行动和日常互动",
    4: "触发亲密感、家宅和情绪根基",
    5: "触发恋爱、创作、玩心与被看见感",
    6: "触发磨合、责任、压力与服务",
    7: "触发伴侣镜像、契约与公开关系",
    8: "触发信任、共享、危机与深层转化",
    9: "触发信念、远方、学习和人生方向",
    10: "触发事业、名声、目标与社会角色",
    11: "触发社群、愿景、收益和朋友圈层",
    12: "触发退隐、消耗、梦境、远距离与潜意识"
  };
  return map[house] || "触发关系主题";
}

function getMoonCompatibility(leftChart, rightChart) {
  const leftMoon = getVedicPlanet(leftChart, "Moon");
  const rightMoon = getVedicPlanet(rightChart, "Moon");
  const signDistance = mod(rightMoon.signIndex - leftMoon.signIndex, 12) + 1;
  const nakDistance = mod(rightMoon.nakshatraIndex - leftMoon.nakshatraIndex, 27) + 1;
  if ([1, 5, 7, 9].includes(signDistance)) return { title: "月亮同步", value: "较顺", body: `月亮呈 ${signDistance} 宫关系，情绪节律较容易互相理解；月宿距离 ${nakDistance}。` };
  if ([6, 8, 12].includes(signDistance)) return { title: "月亮同步", value: "需调频", body: `月亮呈 ${signDistance} 宫关系，容易在安全感与反应速度上错位；月宿距离 ${nakDistance}。` };
  return { title: "月亮同步", value: "中性", body: `月亮呈 ${signDistance} 宫关系，重点看日常沟通与 Dasha 是否同步；月宿距离 ${nakDistance}。` };
}

function getSynastryDirectionSignals(sourceChart, targetChart, sourceName, targetName) {
  const sourceMoon = getVedicPlanet(sourceChart, "Moon");
  const sourceVenus = getVedicPlanet(sourceChart, "Venus");
  const sourceMars = getVedicPlanet(sourceChart, "Mars");
  const sourceJupiter = getVedicPlanet(sourceChart, "Jupiter");
  const sourceSaturn = getVedicPlanet(sourceChart, "Saturn");
  const sourceRahu = getVedicPlanet(sourceChart, "Rahu");
  const targetMoon = getVedicPlanet(targetChart, "Moon");
  const targetVenus = getVedicPlanet(targetChart, "Venus");
  const moonHouse = calculateHouse(sourceMoon.signIndex, targetChart.lagna.signIndex);
  const venusHouse = calculateHouse(sourceVenus.signIndex, targetChart.lagna.signIndex);
  const marsHouse = calculateHouse(sourceMars.signIndex, targetChart.lagna.signIndex);
  const saturnHouse = calculateHouse(sourceSaturn.signIndex, targetChart.lagna.signIndex);
  const signals = [
    { label: `${sourceName}月亮落${targetName}第${moonHouse}宫`, text: describeSynastryHouse(moonHouse) },
    { label: `${sourceName}金星落${targetName}第${venusHouse}宫`, text: describeSynastryHouse(venusHouse) },
    { label: `${sourceName}火星落${targetName}第${marsHouse}宫`, text: describeSynastryHouse(marsHouse) },
    { label: `${sourceName}土星落${targetName}第${saturnHouse}宫`, text: describeSynastryHouse(saturnHouse) }
  ];
  if (hasWholeSignAspect(sourceJupiter, targetMoon)) {
    signals.push({ label: `${sourceName}木星照${targetName}月亮`, text: "有保护、鼓励和修复力，但也可能放大期待。" });
  }
  if (sourceRahu.signIndex === targetMoon.signIndex || sourceRahu.signIndex === targetVenus.signIndex) {
    signals.push({ label: `${sourceName}Rahu 触发${targetName}月亮/金星`, text: "吸引力和投射感增强，需要确认现实边界。" });
  }
  return signals.slice(0, 6);
}

function getSynastryMatrix(leftChart, rightChart, relation) {
  const leftMoon = getVedicPlanet(leftChart, "Moon");
  const rightMoon = getVedicPlanet(rightChart, "Moon");
  const leftVenus = getVedicPlanet(leftChart, "Venus");
  const rightMars = getVedicPlanet(rightChart, "Mars");
  const leftMercury = getVedicPlanet(leftChart, "Mercury");
  const rightMercury = getVedicPlanet(rightChart, "Mercury");
  const moonItem = getMoonCompatibility(leftChart, rightChart);
  const venusMarsDistance = mod(rightMars.signIndex - leftVenus.signIndex, 12) + 1;
  const mercuryDistance = mod(rightMercury.signIndex - leftMercury.signIndex, 12) + 1;
  const relationTone = {
    romantic: "恋爱合盘优先看吸引、承诺与冲突修复。",
    business: "合作合盘优先看目标、职责和收益结构。",
    friendship: "朋友合盘优先看月亮、3宫/11宫和日常支持。",
    family: "家人合盘优先看月亮、4宫、9宫与责任边界。",
    general: "通用合盘先看触发模式，再看是否能被现实承载。"
  }[relation] || "通用合盘先看触发模式，再看是否能被现实承载。";
  return [
    moonItem,
    { title: "吸引/火花", value: [1, 7].includes(venusMarsDistance) ? "强刺激" : [5, 9].includes(venusMarsDistance) ? "流动" : "需经营", body: `金星到火星为 ${venusMarsDistance} 宫关系，显示吸引与行动节奏的配合方式。` },
    { title: "沟通", value: [1, 5, 9].includes(mercuryDistance) ? "易同步" : [6, 8, 12].includes(mercuryDistance) ? "需翻译" : "中性", body: `双方水星为 ${mercuryDistance} 宫关系，决定误会如何产生、又如何被澄清。` },
    { title: "责任承载", value: "看土星", body: "土星触发的宫位决定关系里的义务、延迟和长期成本。" },
    { title: "成长资源", value: "看木星", body: "木星触发处是鼓励、师承、远景和宽容度的来源。" },
    { title: "关系口径", value: "不打总分", body: relationTone }
  ];
}

function renderSynastryResult(leftChart, rightChart, relation, partnerName) {
  const selfName = currentVedicMeta?.name || "你";
  const targetName = partnerName || "对方";
  const matrix = getSynastryMatrix(leftChart, rightChart, relation).map(item => `
    <article class="vedic-topic-item">
      <small>${item.title}</small>
      <strong>${item.value}</strong>
      <span>${item.body}</span>
    </article>
  `).join("");
  const forward = getSynastryDirectionSignals(leftChart, rightChart, selfName, targetName)
    .map(item => `<div class="synastry-signal"><b>${item.label}</b>${item.text}</div>`).join("");
  const backward = getSynastryDirectionSignals(rightChart, leftChart, targetName, selfName)
    .map(item => `<div class="synastry-signal"><b>${item.label}</b>${item.text}</div>`).join("");
  document.querySelector("#vedic-synastry-result").innerHTML = `
    <div class="synastry-matrix">${matrix}</div>
    <div class="synastry-signal-list">
      <div class="vedic-boundary">方向铁规：下面分开看 ${selfName}→${targetName} 与 ${targetName}→${selfName}，不混成一个总分。</div>
      ${forward}
      ${backward}
    </div>`;
}

function renderPartnerSynastry() {
  const resultRoot = document.querySelector("#vedic-synastry-result");
  if (!currentVedicChart) {
    resultRoot.innerHTML = `<div class="vedic-unavailable"><strong>请先生成本命印占盘</strong><p>合盘需要你的 Vedic 本命盘和对方完整出生资料。</p></div>`;
    return;
  }
  const dateValue = document.querySelector("#partner-date").value;
  const timeValue = document.querySelector("#partner-time").value;
  const longitude = Number(document.querySelector("#partner-longitude").value);
  const latitude = Number(document.querySelector("#partner-latitude").value);
  const timezone = Number(document.querySelector("#partner-timezone").value);
  if (!dateValue || !timeValue || ![longitude, latitude, timezone].every(Number.isFinite)) {
    resultRoot.innerHTML = `<div class="vedic-unavailable"><strong>对方资料不完整</strong><p>请填写对方出生日期、时间、经度、纬度与时区。</p></div>`;
    return;
  }
  const [year, month, day] = dateValue.split("-").map(Number);
  const [hour, minute] = timeValue.split(":").map(Number);
  const partnerChart = calculateVedicChart({ year, month, day, hour, minute, timeKnown: true }, { longitude, latitude, timezone });
  if (partnerChart.unavailable) {
    resultRoot.innerHTML = `<div class="vedic-unavailable"><strong>对方星盘暂不可用</strong><p>${partnerChart.reason}</p></div>`;
    return;
  }
  renderSynastryResult(currentVedicChart, partnerChart, document.querySelector("#partner-relation").value, document.querySelector("#partner-name").value.trim());
}

function getNameCharacters(name) {
  return [...name.trim().normalize("NFKC")]
    .filter(char => !/[\s·•,，.。_\-－—\/]/u.test(char))
    .slice(0, 12);
}

function inferNameElement(char) {
  const dictionaryEntry = elements.find(element => nameElementDictionary[element].includes(char));
  if (dictionaryEntry) return { element: dictionaryEntry, method: "字义/形旁" };
  return { element: elements[char.codePointAt(0) % elements.length], method: "字形编码" };
}

function analyzeName(name) {
  const characters = getNameCharacters(name);
  const counts = Object.fromEntries(elements.map(element => [element, 0]));
  const items = characters.map(char => {
    const inferred = inferNameElement(char);
    counts[inferred.element] += 1;
    return { char, ...inferred };
  });
  const firstElementIndex = element => {
    const index = items.findIndex(item => item.element === element);
    return index === -1 ? Number.POSITIVE_INFINITY : index;
  };
  const sortedElements = [...elements].sort((a, b) => counts[b] - counts[a] || firstElementIndex(a) - firstElementIndex(b) || elements.indexOf(a) - elements.indexOf(b));
  const activeElements = sortedElements.filter(element => counts[element] > 0);
  const dominantElements = activeElements.filter(element => counts[element] === counts[sortedElements[0]]);
  return {
    hasName: items.length > 0,
    items,
    counts,
    activeElements,
    dominantElements,
    dominantLabel: activeElements.length ? dominantElements.join("与") : "未填写",
    elementTrail: items.map(item => `${escapeHtml(item.char)}(${item.element})`).join(" · ")
  };
}

function applyNameInfluence(analysis, nameAnalysis) {
  const originalBalanceElements = [...analysis.balanceElements];
  if (!nameAnalysis.hasName) {
    return {
      originalBalanceElements,
      balanceElements: originalBalanceElements,
      summary: "未填写姓名",
      reading: "未填写称呼时，命局深读仅依据出生时间、地点校正后的四柱结构。",
      balanceCopy: analysis.balanceCopy
    };
  }

  const suppliedBalance = originalBalanceElements.filter(element => nameAnalysis.counts[element] > 0);
  const missingBalance = originalBalanceElements.filter(element => nameAnalysis.counts[element] === 0);
  let balanceElements = originalBalanceElements;
  let reading;
  if (missingBalance.length === 1) {
    balanceElements = [missingBalance[0], suppliedBalance[0]];
    reading = `姓名已带出${suppliedBalance[0]}的意象，因此后续平衡建议会先观察尚未被姓名覆盖的${missingBalance[0]}。`;
  } else if (missingBalance.length === 0) {
    reading = `姓名已经覆盖命局建议的${originalBalanceElements.join("与")}方向，后续建议保留原排序，用于观察这些意象是否在现实中被稳定使用。`;
  } else {
    const dominant = nameAnalysis.dominantElements.join("与");
    reading = `姓名目前偏向${dominant}，与命局建议的${originalBalanceElements.join("与")}不完全重合；后续建议仍以命局平衡方向为主，姓名作为辅助气质参考。`;
  }

  const nameCopy = `姓名五行：${nameAnalysis.elementTrail || "未形成有效字符"}。${reading}`;
  return {
    originalBalanceElements,
    balanceElements,
    summary: nameAnalysis.dominantLabel,
    reading: nameCopy,
    balanceCopy: `${analysis.balanceCopy}${reading}`
  };
}

function getTenGod(dayStem, targetStem) {
  const dayElementIndex = elementCycle.indexOf(stemElements[dayStem]);
  const targetElementIndex = elementCycle.indexOf(stemElements[targetStem]);
  const samePolarity = dayStem % 2 === targetStem % 2;
  const relation = mod(targetElementIndex - dayElementIndex, 5);
  if (relation === 0) return samePolarity ? "比肩" : "劫财";
  if (relation === 1) return samePolarity ? "食神" : "伤官";
  if (relation === 2) return samePolarity ? "偏财" : "正财";
  if (relation === 3) return samePolarity ? "七杀" : "正官";
  return samePolarity ? "偏印" : "正印";
}

function getElementRelation(dayElement, targetElement) {
  const relation = mod(elementCycle.indexOf(targetElement) - elementCycle.indexOf(dayElement), 5);
  return ["同行支持", "表达输出", "现实经营", "规则压力", "学习生扶"][relation];
}

function analyzeChart(result) {
  const weightedElements = Object.fromEntries(elements.map(element => [element, 0]));
  const tenGodScores = Object.fromEntries(Object.keys(tenGodCopy).map(god => [god, 0]));
  const hiddenWeights = [0.65, 0.25, 0.1];

  result.pillars.forEach((pillar, pillarIndex) => {
    if (pillar.unknown) return;
    weightedElements[stemElements[pillar.stem]] += 1;
    if (pillarIndex !== 2) tenGodScores[getTenGod(result.dayStem, pillar.stem)] += 1;
    const branchHidden = hiddenStems[pillar.branch];
    branchHidden.forEach((stem, hiddenIndex) => {
      const weight = branchHidden.length === 1 ? 1 : branchHidden.length === 2 ? [0.7, 0.3][hiddenIndex] : hiddenWeights[hiddenIndex];
      weightedElements[stemElements[stem]] += weight;
      tenGodScores[getTenGod(result.dayStem, stem)] += weight;
    });
  });

  const monthMainStem = hiddenStems[result.pillars[1].branch][0];
  weightedElements[stemElements[monthMainStem]] += 1.5;
  const dayElement = stemElements[result.dayStem];
  const dayElementIndex = elementCycle.indexOf(dayElement);
  const resourceElement = elementCycle[mod(dayElementIndex - 1, 5)];
  const total = Object.values(weightedElements).reduce((sum, value) => sum + value, 0);
  const supportRatio = (weightedElements[dayElement] + weightedElements[resourceElement]) / total;
  const strength = supportRatio >= 0.57 ? "偏强" : supportRatio <= 0.43 ? "偏弱" : "相对平衡";
  const sortedGods = Object.entries(tenGodScores).sort((a, b) => b[1] - a[1]);
  const sortedElements = Object.entries(weightedElements).sort((a, b) => a[1] - b[1]);

  let balanceElements;
  let balanceCopy;
  if (strength === "偏弱") {
    balanceElements = [resourceElement, dayElement];
    balanceCopy = `简化模型中，${resourceElement}与${dayElement}可作为支持和稳定的观察方向。`;
  } else if (strength === "偏强") {
    balanceElements = [elementCycle[mod(dayElementIndex + 1, 5)], elementCycle[mod(dayElementIndex + 2, 5)]];
    balanceCopy = `简化模型中，${balanceElements.join("、")}所代表的表达与实践，有助于把能量导向具体产出。`;
  } else {
    balanceElements = [sortedElements[0][0], sortedElements[1][0]];
    balanceCopy = `结构相对平衡，可多观察${balanceElements.join("、")}所对应的能力是否在现实生活中被充分使用。`;
  }
  return { weightedElements, tenGodScores, sortedGods, dayElement, resourceElement, supportRatio, strength, balanceElements, balanceCopy };
}

function pickStrongestGod(analysis, gods) {
  return gods
    .map(god => [god, analysis.tenGodScores[god] || 0])
    .sort((left, right) => right[1] - left[1] || gods.indexOf(left[0]) - gods.indexOf(right[0]))[0][0];
}

function renderLifeDomainSummary(analysis, result) {
  const balanceCareCopy = {
    "木": "别一直憋着和硬扛，规律散步、拉伸、晒太阳，会比临时补救更有用。",
    "火": "最怕透支兴奋感，少熬夜、少连续高刺激，给自己固定的放空时间。",
    "土": "先把吃饭和作息稳住，三餐、睡眠、运动一乱，状态很容易跟着散。",
    "金": "适合用秩序感养状态：清爽环境、规律有氧、把边界和节奏说清楚。",
    "水": "重点是恢复电量，睡眠、饮水、久坐起身，比盲目进补更值得坚持。"
  };
  const studyCopy = {
    "正印": "你更适合系统学习：跟着教材、老师或成熟课程走，先把框架搭起来，再慢慢深入。",
    "偏印": "你适合带着兴趣和问题学，冷门资料、跨学科联想会点燃你；但要给探索设一个交付日期。",
    "食神": "你越讲越会，适合用笔记、讲解、作品来巩固。学完马上输出，记得会更牢。",
    "伤官": "你不适合死记硬背太久，适合带着质疑做题、拆解规则、找更聪明的方法。"
  };
  const careerCopy = {
    "正官": "适合走专业信誉路线：规则清楚、标准明确、能长期累积口碑的位置，会让你更稳。",
    "七杀": "适合处理难题和压力场：项目推进、竞争环境、快速决策里容易被看见，但别长期硬撑。",
    "正财": "适合做能持续经营的事：预算、流程、客户维护、稳定交付，越做越有底气。",
    "偏财": "适合资源整合和机会型工作：客户、市场、合作、流动项目会带来灵感，但要管住节奏和成本。",
    "食神": "适合把能力做成体验好的产品、内容或服务。稳定输出，比偶尔爆发更能帮你打开局面。",
    "伤官": "适合改流程、做创意、讲观点、解决低效问题。表达锋利时，先想清楚听众能不能接住。"
  };
  const loveCopy = {
    "正财": "你在关系里会看重真实照顾和稳定兑现，空话不如行动。适合把钱、时间、期待讲明白。",
    "偏财": "你容易被有趣、松弛、有空间感的人吸引。关系想长久，要把自由感和责任感同时放进来。",
    "正官": "你会在意对方是否可靠、尊重规则、给出明确态度。太模糊的关系会消耗安全感。",
    "七杀": "吸引力来得快时，也要慢一点确认边界。强烈不等于适合，稳定回应才更能说明问题。",
    "比肩": "你需要平等感和个人空间。适合找能并肩成长的人，不适合长期单方面迁就。",
    "劫财": "关系里容易出现较劲或试探，越喜欢越要把话说开。少猜，多确认，会轻松很多。"
  };
  const studyGod = pickStrongestGod(analysis, ["正印", "偏印", "食神", "伤官"]);
  const careerGod = pickStrongestGod(analysis, ["正官", "七杀", "正财", "偏财", "食神", "伤官"]);
  const loveGod = pickStrongestGod(analysis, ["正财", "偏财", "正官", "七杀", "比肩", "劫财"]);
  const primaryBalance = analysis.balanceElements[0];
  const dayBranchElement = branchElements[result.pillars[2].branch];
  const dayBranchRelation = getElementRelation(analysis.dayElement, dayBranchElement);
  const studyTone = ["正印", "偏印"].includes(studyGod) ? "吸收型" : "输出型";
  const careerTone = ["正官", "七杀"].includes(careerGod) ? "规则型" : ["正财", "偏财"].includes(careerGod) ? "资源型" : "表达型";
  const loveTone = ["正财", "偏财", "正官", "七杀"].includes(loveGod) ? "承诺议题" : "边界议题";

  const summaries = [
    {
      title: "健康",
      tag: `重点照护·${primaryBalance}`,
      copy: `你的健康重点不是“缺什么补什么”，而是先把${primaryBalance}这股节律养起来。${balanceCareCopy[primaryBalance]} 日主${analysis.dayElement}对应${elementCopy[analysis.dayElement].organ}的传统意象；如果已经持续不舒服，别靠命盘判断，直接看医生更靠谱。`
    },
    {
      title: "学业",
      tag: `${studyTone}·${studyGod}`,
      copy: `${studyCopy[studyGod]} 对你来说，最有效的学习不是熬时间，而是把知识变成看得见的东西：一页复盘、一套错题、一次讲解，都会比“我看过了”更有用。`
    },
    {
      title: "事业",
      tag: `${careerTone}·${careerGod}`,
      copy: `${careerCopy[careerGod]} 你的命局显示为${analysis.strength}，所以事业上最值得经营的是“可持续”：别只靠一阵冲劲，要让别人持续看见你的交付、信用和解决问题的能力。`
    },
    {
      title: "爱情",
      tag: `${loveTone}·${loveGod}`,
      copy: `${loveCopy[loveGod]} 日支${branches[result.pillars[2].branch]}带出“${dayBranchRelation}”的相处感，提醒你：好的关系不是猜出来的，是靠清楚表达、稳定回应和彼此留空间慢慢养出来的。`
    }
  ];

  document.querySelector("#life-summary-grid").innerHTML = summaries.map(item => `
    <article class="life-summary-card">
      <div><small>${item.title}</small><strong>${item.tag}</strong></div>
      <p>${item.copy}</p>
    </article>`).join("");
}

function julianDayNumber(year, month, day) {
  const a = Math.floor((14 - month) / 12);
  const y = year + 4800 - a;
  const m = month + 12 * a - 3;
  return day + Math.floor((153 * m + 2) / 5) + 365 * y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) - 32045;
}

// Approximate civil dates of the 12 "jie" boundaries, suitable for a local preview.
function solarTermDay(year, month) {
  const constants20 = [6.11, 4.6295, 6.3826, 5.59, 6.318, 6.5, 7.928, 8.35, 8.44, 9.098, 8.218, 7.9];
  const constants21 = [5.4055, 3.87, 5.63, 4.81, 5.52, 5.678, 7.108, 7.5, 7.646, 8.318, 7.438, 7.18];
  const c = year <= 2000 ? constants20[month - 1] : constants21[month - 1];
  const shortYear = year % 100;
  return Math.floor(shortYear * 0.2422 + c) - Math.floor((shortYear - 1) / 4);
}

function dateKey(month, day) { return month * 100 + day; }

function toIsoDateParts(year, month, day) {
  return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

let chineseCalendarFormatter = null;

function getChineseCalendarFormatter() {
  chineseCalendarFormatter ||= new Intl.DateTimeFormat("zh-CN-u-ca-chinese", { year: "numeric", month: "long", day: "numeric" });
  return chineseCalendarFormatter;
}

function parseLunarMonth(monthText) {
  const monthMap = { "正月": 1, "二月": 2, "三月": 3, "四月": 4, "五月": 5, "六月": 6, "七月": 7, "八月": 8, "九月": 9, "十月": 10, "十一月": 11, "十二月": 12 };
  const normalizedMonth = monthText.replace("闰", "");
  return monthMap[normalizedMonth] || Number.parseInt(normalizedMonth, 10) || null;
}

function parseLunarDay(dayText) {
  const index = lunarDayNames.indexOf(dayText);
  if (index >= 0) return index + 1;
  return Number.parseInt(dayText, 10) || null;
}

function getKnownPillars(result) {
  return result.pillars.filter(pillar => !pillar.unknown);
}

function calculateBazi(year, month, day, hour, minute, options = {}) {
  const timeKnown = options.timeKnown !== false && Number.isFinite(hour) && Number.isFinite(minute);
  const liChunDay = solarTermDay(year, 2);
  const beforeLiChun = dateKey(month, day) < dateKey(2, liChunDay);
  const effectiveYear = beforeLiChun ? year - 1 : year;
  const yearStem = mod(effectiveYear - 4, 10);
  const yearBranch = mod(effectiveYear - 4, 12);

  const boundaries = [
    [2, solarTermDay(year, 2), 0], [3, solarTermDay(year, 3), 1],
    [4, solarTermDay(year, 4), 2], [5, solarTermDay(year, 5), 3],
    [6, solarTermDay(year, 6), 4], [7, solarTermDay(year, 7), 5],
    [8, solarTermDay(year, 8), 6], [9, solarTermDay(year, 9), 7],
    [10, solarTermDay(year, 10), 8], [11, solarTermDay(year, 11), 9],
    [12, solarTermDay(year, 12), 10]
  ];
  // Before Li Chun, early January is the previous Zi month; Xiao Han onward is Chou.
  let monthOrder = month === 1 && day < solarTermDay(year, 1) ? 10 : 11;
  for (const [termMonth, termDay, order] of boundaries) {
    if (dateKey(month, day) >= dateKey(termMonth, termDay)) monthOrder = order;
  }
  const monthStemOffset = monthOrder >= 10 ? monthOrder - 12 : monthOrder;
  const monthStem = mod((yearStem % 5) * 2 + 2 + monthStemOffset, 10);
  const monthBranch = mod(2 + monthOrder, 12);

  const dayIndex = mod(julianDayNumber(year, month, day) + 49, 60);
  const dayStem = dayIndex % 10;
  const dayBranch = dayIndex % 12;
  const hourBranch = timeKnown ? mod(Math.floor((hour + 1) / 2), 12) : null;
  const hourStem = timeKnown ? mod((dayStem % 5) * 2 + hourBranch, 10) : null;

  const nearTerm = [solarTermDay(year, month)].some(termDay => Math.abs(day - termDay) <= 1);
  return {
    pillars: [
      { label: "年柱", stem: yearStem, branch: yearBranch },
      { label: "月柱", stem: monthStem, branch: monthBranch },
      { label: "日柱", stem: dayStem, branch: dayBranch },
      timeKnown ? { label: "时柱", stem: hourStem, branch: hourBranch } : { label: "时柱", unknown: true }
    ],
    dayStem,
    dayIndex,
    hourBranch,
    timeKnown,
    nearTerm,
    adjustedTime: timeKnown ? `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}` : "未知"
  };
}

function applySolarCorrection(date, time, longitude, timezone) {
  const [year, month, day] = date.split("-").map(Number);
  const [hour, minute] = time.split(":").map(Number);
  const base = new Date(year, month - 1, day, hour, minute);
  const correctionMinutes = Math.round((longitude - timezone * 15) * 4);
  base.setMinutes(base.getMinutes() + correctionMinutes);
  return {
    year: base.getFullYear(), month: base.getMonth() + 1, day: base.getDate(),
    hour: base.getHours(), minute: base.getMinutes(), correctionMinutes
  };
}

function getLunarDate(year, month, day) {
  try {
    const date = new Date(year, month - 1, day, 12);
    const parts = getChineseCalendarFormatter().formatToParts(date);
    const monthText = parts.find(part => part.type === "month")?.value || "";
    const dayText = parts.find(part => part.type === "day")?.value || "";
    const relatedYear = Number(parts.find(part => part.type === "relatedYear")?.value) || year;
    const lunarMonth = parseLunarMonth(monthText) || month;
    const lunarDay = parseLunarDay(dayText) || day;
    return {
      year: relatedYear,
      month: lunarMonth,
      day: lunarDay,
      monthText,
      dayText,
      label: `${relatedYear}年${monthText}${dayText}日`,
      isLeap: monthText.includes("闰")
    };
  } catch {
    return { year, month, day, monthText: "", dayText: "", label: "当前浏览器不支持农历转换", isLeap: false, unsupported: true };
  }
}

function convertLunarToSolar(lunarYear, lunarMonth, lunarDay, isLeap) {
  if (!Number.isInteger(lunarYear) || !Number.isInteger(lunarMonth) || !Number.isInteger(lunarDay)) return null;
  const start = new Date(lunarYear, 0, 1, 12);
  const end = new Date(lunarYear + 1, 2, 15, 12);
  for (const cursor = new Date(start); cursor <= end; cursor.setDate(cursor.getDate() + 1)) {
    const lunar = getLunarDate(cursor.getFullYear(), cursor.getMonth() + 1, cursor.getDate());
    if (lunar.unsupported) return { unsupported: true };
    if (lunar.year === lunarYear && lunar.month === lunarMonth && lunar.day === lunarDay && lunar.isLeap === isLeap) {
      return {
        year: cursor.getFullYear(),
        month: cursor.getMonth() + 1,
        day: cursor.getDate(),
        iso: toIsoDateParts(cursor.getFullYear(), cursor.getMonth() + 1, cursor.getDate()),
        lunar
      };
    }
  }
  return null;
}

function renderPillars(result) {
  const root = document.querySelector("#pillars");
  root.innerHTML = result.pillars.map((pillar, index) => {
    if (pillar.unknown) {
      return `<div class="pillar unknown">
        <small>${pillar.label}</small>
        <strong>?</strong>
        <strong>未知</strong>
        <em>时辰未填</em>
        <span class="god-label">时柱、时支与相关十神暂不判断</span>
      </div>`;
    }
    return `
    <div class="pillar">
      <small>${pillar.label}</small>
      <strong style="color:${elementColors[stemElements[pillar.stem]]}">${stems[pillar.stem]}</strong>
      <strong style="color:${elementColors[branchElements[pillar.branch]]}">${branches[pillar.branch]}</strong>
      <em>${stemYinYang[pillar.stem]}${stemElements[pillar.stem]}·${branchAnimals[pillar.branch]}</em>
      <span class="god-label">${index === 2 ? "日主" : getTenGod(result.dayStem, pillar.stem)}·藏${hiddenStems[pillar.branch].map(stem => stems[stem]).join("")}</span>
    </div>`;
  }).join("");
}

function renderElements(result) {
  const counts = Object.fromEntries(elements.map(element => [element, 0]));
  const knownPillars = getKnownPillars(result);
  knownPillars.forEach(pillar => {
    counts[stemElements[pillar.stem]] += 1;
    counts[branchElements[pillar.branch]] += 1;
  });
  const scaleUnit = Math.max(1, knownPillars.length * 2);
  const sorted = [...elements].sort((a, b) => counts[b] - counts[a]);
  const strongest = sorted[0];
  const weakest = [...elements].sort((a, b) => counts[a] - counts[b])[0];
  const dayElement = stemElements[result.dayStem];
  document.querySelector("#element-orbit").innerHTML = `<div class="orbit-core"><strong>${dayElement}</strong><small>日主五行</small></div>`;
  document.querySelector("#element-bars").innerHTML = elements.map(element => `
    <div class="bar-row"><span>${element}</span><div class="bar"><i style="width:${Math.min(100, counts[element] / scaleUnit * 100)}%;background:${elementColors[element]}"></i></div><b>${counts[element]}</b></div>
  `).join("");
  document.querySelector("#element-insight").textContent = `表层八字中${strongest}元素较显，${weakest}元素较少。“少”不等于缺乏或疾病；下方深读会进一步计入藏干与月令权重。${result.timeKnown ? "" : "时辰未知时，统计暂不包含时柱。"}`;

  const featured = [dayElement, strongest, weakest].filter((item, index, list) => list.indexOf(item) === index);
  while (featured.length < 3) featured.push(elements.find(item => !featured.includes(item)));
  document.querySelector("#element-readings").innerHTML = featured.map((element, index) => {
    const titles = index === 0 ? `日主·${element}` : index === 1 ? `较显·${element}` : `较少·${element}`;
    return `<article class="reading-item"><b>${titles}</b><p>${elementCopy[element].nature}。${elementCopy[element].organ}。${elementCopy[element].care}</p></article>`;
  }).join("");
  return { counts, strongest, weakest, dayElement };
}

function renderChartAnalysis(result, name = "") {
  const analysis = analyzeChart(result);
  const nameAnalysis = analyzeName(name);
  const nameInfluence = applyNameInfluence(analysis, nameAnalysis);
  analysis.nameAnalysis = nameAnalysis;
  analysis.nameInfluence = nameInfluence;
  analysis.originalBalanceElements = nameInfluence.originalBalanceElements;
  analysis.balanceElements = nameInfluence.balanceElements;
  analysis.balanceCopy = nameInfluence.balanceCopy;
  const dayStemName = `${stems[result.dayStem]}${analysis.dayElement}`;
  const supportPercent = Math.round(analysis.supportRatio * 100);
  const dominantGods = analysis.sortedGods.slice(0, 2).map(([god]) => god);
  const timeStatus = result.timeKnown
    ? { title: "时辰状态", value: "已知", note: `时柱按${result.adjustedTime}生成` }
    : { title: "时辰状态", value: "未知", note: "时柱、紫微命身宫与时盘类结果已降级提示" };
  document.querySelector("#chart-summary").innerHTML = `
    <div class="summary-stat"><small>日主</small><strong>${stemYinYang[result.dayStem]}${dayStemName}</strong><span>${elementCopy[analysis.dayElement].nature}</span></div>
    <div class="summary-stat"><small>简化强弱</small><strong>${analysis.strength}</strong><span>生扶权重约 ${supportPercent}%，已计入月令与藏干</span></div>
    <div class="summary-stat"><small>主要十神</small><strong>${dominantGods.join("·")}</strong><span>${dominantGods.map(god => tenGodCopy[god].brief).join("，")}</span></div>
    <div class="summary-stat"><small>姓名主气</small><strong>${nameInfluence.summary}</strong><span>${nameAnalysis.hasName ? nameAnalysis.elementTrail : "填写称呼后参与辅助分析"}</span></div>
    <div class="summary-stat"><small>${timeStatus.title}</small><strong>${timeStatus.value}</strong><span>${timeStatus.note}</span></div>`;
  renderLifeDomainSummary(analysis, result);

  const monthMainStem = hiddenStems[result.pillars[1].branch][0];
  const godEntries = [
    ["年干", result.pillars[0].stem], ["月干", result.pillars[1].stem],
    ...(result.timeKnown ? [["时干", result.pillars[3].stem]] : []), ["月令本气", monthMainStem]
  ];
  document.querySelector("#ten-god-grid").innerHTML = godEntries.map(([label, stem]) => {
    const god = getTenGod(result.dayStem, stem);
    return `<div class="ten-god-item"><small>${label}·${stems[stem]}${stemElements[stem]}</small><strong>${god}</strong><span>${tenGodCopy[god].brief}</span></div>`;
  }).join("");

  const dominantReading = dominantGods.map(god => `${god}：${tenGodCopy[god].reading}`).join("");
  const strengthReading = analysis.strength === "偏强"
    ? `日主和生扶元素权重较高，通常适合把意愿转成作品、服务或可检验的行动。`
    : analysis.strength === "偏弱"
      ? `消耗与约束元素权重较高，可优先建立资源、知识和可靠协作，避免同时承担过多目标。`
      : `生扶与消耗权重接近，适合在“吸收”和“输出”之间保持往返，不必刻意追求某一端。`;
  document.querySelector("#chart-deep-readings").innerHTML = `
    <article class="narrative-item"><b>日主气质·${dayStemName}</b><p>${stemYinYang[result.dayStem]}${analysis.dayElement}以“${elementCopy[analysis.dayElement].nature}”为象。这是理解行为偏好的起点，不是固定性格标签。</p></article>
    <article class="narrative-item"><b>能量结构·${analysis.strength}</b><p>${strengthReading}</p></article>
    <article class="narrative-item"><b>十神聚焦·${dominantGods.join("与")}</b><p>${dominantReading}</p></article>
    <article class="narrative-item"><b>姓名参与·${nameInfluence.summary}</b><p>${nameInfluence.reading}</p></article>
    <article class="narrative-item"><b>平衡方向·${analysis.balanceElements.join("与")}</b><p>${analysis.balanceCopy}这是观察方向，不作为穿衣、起名、投资或治疗依据。</p></article>`;
  return analysis;
}

function getNaYin(stem, branch) {
  return naYinPairs[Math.floor(getGanzhiIndex(stem, branch) / 2)] || "—";
}

function getKongWang(result) {
  const dayPillar = result.pillars[2];
  const xunStartBranch = mod(dayPillar.branch - dayPillar.stem, 12);
  const emptyBranches = [mod(xunStartBranch + 10, 12), mod(xunStartBranch + 11, 12)];
  return {
    xun: `甲${branches[xunStartBranch]}旬`,
    branches: emptyBranches,
    label: `${branches[emptyBranches[0]]}${branches[emptyBranches[1]]}空`
  };
}

function formatHiddenStemDetails(result, branchIndex) {
  return hiddenStems[branchIndex].map((stem, index) => {
    const role = index === 0 ? "本气" : index === 1 ? "中气" : "余气";
    return `${role} ${stems[stem]}${stemElements[stem]} · ${getTenGod(result.dayStem, stem)}`;
  }).join("<br>");
}

function getProfessionalRelations(result) {
  const stemCombines = { "0-5": "甲己合土", "1-6": "乙庚合金", "2-7": "丙辛合水", "3-8": "丁壬合木", "4-9": "戊癸合火" };
  const stemClashes = { "0-6": "甲庚冲", "1-7": "乙辛冲", "2-8": "丙壬冲", "3-9": "丁癸冲" };
  const branchCombines = { "0-1": "子丑合", "2-11": "寅亥合", "3-10": "卯戌合", "4-9": "辰酉合", "5-8": "巳申合", "6-7": "午未合" };
  const branchClashes = { "0-6": "子午冲", "1-7": "丑未冲", "2-8": "寅申冲", "3-9": "卯酉冲", "4-10": "辰戌冲", "5-11": "巳亥冲" };
  const branchHarms = { "0-7": "子未害", "1-6": "丑午害", "2-5": "寅巳害", "3-4": "卯辰害", "8-11": "申亥害", "9-10": "酉戌害" };
  const branchPunishments = { "0-3": "子卯刑", "1-10": "丑戌刑", "1-7": "丑未刑", "2-5": "寅巳刑", "5-8": "巳申刑", "7-10": "未戌刑" };
  const triads = [
    { members: [8, 0, 4], label: "申子辰三合水" },
    { members: [11, 3, 7], label: "亥卯未三合木" },
    { members: [2, 6, 10], label: "寅午戌三合火" },
    { members: [5, 9, 1], label: "巳酉丑三合金" }
  ];
  const known = result.pillars
    .map((pillar, index) => ({ ...pillar, index, shortLabel: pillarLabels[index].slice(0, 1) }))
    .filter(pillar => !pillar.unknown);
  const relations = [];

  for (let leftIndex = 0; leftIndex < known.length; leftIndex += 1) {
    for (let rightIndex = leftIndex + 1; rightIndex < known.length; rightIndex += 1) {
      const left = known[leftIndex];
      const right = known[rightIndex];
      const stemKey = pairKey(left.stem, right.stem);
      const branchKey = pairKey(left.branch, right.branch);
      if (stemCombines[stemKey]) relations.push({ type: "天干合", text: `${left.shortLabel}干${stems[left.stem]}与${right.shortLabel}干${stems[right.stem]}见${stemCombines[stemKey]}` });
      if (stemClashes[stemKey]) relations.push({ type: "天干冲", text: `${left.shortLabel}干${stems[left.stem]}与${right.shortLabel}干${stems[right.stem]}见${stemClashes[stemKey]}` });
      if (branchCombines[branchKey]) relations.push({ type: "地支合", text: `${left.shortLabel}支${branches[left.branch]}与${right.shortLabel}支${branches[right.branch]}见${branchCombines[branchKey]}` });
      if (branchClashes[branchKey]) relations.push({ type: "地支冲", text: `${left.shortLabel}支${branches[left.branch]}与${right.shortLabel}支${branches[right.branch]}见${branchClashes[branchKey]}` });
      if (branchHarms[branchKey]) relations.push({ type: "地支害", text: `${left.shortLabel}支${branches[left.branch]}与${right.shortLabel}支${branches[right.branch]}见${branchHarms[branchKey]}` });
      if (branchPunishments[branchKey]) relations.push({ type: "地支刑", text: `${left.shortLabel}支${branches[left.branch]}与${right.shortLabel}支${branches[right.branch]}见${branchPunishments[branchKey]}` });
    }
  }

  const branchSet = new Set(known.map(pillar => pillar.branch));
  triads.forEach(triad => {
    if (triad.members.every(branch => branchSet.has(branch))) {
      relations.unshift({ type: "三合局", text: `${triad.label}成局，相关五行主题更集中` });
    } else {
      const present = triad.members.filter(branch => branchSet.has(branch));
      if (present.length === 2) relations.push({ type: "半合", text: `${present.map(branch => branches[branch]).join("")}见半合，向${triad.label.slice(-1)}气聚拢` });
    }
  });

  const unique = relations.filter((item, index, list) => list.findIndex(candidate => candidate.type === item.type && candidate.text === item.text) === index);
  return unique.length ? unique.slice(0, 8) : [{ type: "平", text: "前三柱未见明显合冲刑害，可把重点放在日主、月令与十神权重。" }];
}

function renderProfessionalChart(result, analysis, meta = {}) {
  const kongWang = getKongWang(result);
  const supportPercent = Math.round(analysis.supportRatio * 100);
  const monthBranch = result.pillars[1].branch;
  const monthMainStem = hiddenStems[monthBranch][0];
  const rows = result.pillars.map((pillar, index) => {
    if (pillar.unknown) {
      return `<tr>
        <td><strong>${pillar.label}</strong><small>时辰未知</small></td>
        <td class="unknown-cell">待补</td>
        <td class="unknown-cell">暂不判断</td>
        <td class="unknown-cell">时支藏干未知</td>
        <td class="unknown-cell">—</td>
        <td class="unknown-cell">—</td>
      </tr>`;
    }
    const pillarName = `${stems[pillar.stem]}${branches[pillar.branch]}`;
    const stemGod = index === 2 ? "日主" : getTenGod(result.dayStem, pillar.stem);
    const isEmpty = kongWang.branches.includes(pillar.branch);
    return `<tr>
      <td><strong>${pillar.label}</strong><small>${pillarName}</small></td>
      <td><strong>${pillarName}</strong><small>${stemYinYang[pillar.stem]}${stemElements[pillar.stem]} · ${branchElements[pillar.branch]}支</small></td>
      <td>${stemGod}<small>天干主星</small></td>
      <td>${formatHiddenStemDetails(result, pillar.branch)}</td>
      <td>${getNaYin(pillar.stem, pillar.branch)}<small>${getGanzhiIndex(pillar.stem, pillar.branch) + 1}甲子序</small></td>
      <td>${isEmpty ? "坐空" : "不空"}<small>${kongWang.label}</small></td>
    </tr>`;
  }).join("");

  const relationItems = getProfessionalRelations(result).map(item => `<div class="relationship-item"><b>${item.type}</b>${item.text}</div>`).join("");
  const detailBlocks = [
    {
      label: "历法与校时",
      value: meta.calendarLabel || "公历输入",
      note: [meta.lunarLabel, meta.correctionNote].filter(Boolean).join("；") || "采用表单输入的标准时间。"
    },
    {
      label: "月令",
      value: `${branches[monthBranch]}月 · 本气${stems[monthMainStem]}${stemElements[monthMainStem]}`,
      note: `月令本气对日主呈${getTenGod(result.dayStem, monthMainStem)}，是强弱估算中权重最高的季节背景。`
    },
    {
      label: "空亡",
      value: `${kongWang.xun} · ${kongWang.label}`,
      note: "空亡用于观察某些主题的虚实与延迟感；本页只作结构提示，不作事件定断。"
    },
    {
      label: "强弱与平衡",
      value: `${analysis.strength} · 生扶约${supportPercent}%`,
      note: `当前平衡观察方向为${analysis.balanceElements.join("、")}。未知时辰时，比例不含时柱。`
    },
    {
      label: "时柱可信度",
      value: result.timeKnown ? "完整四柱" : "时柱待补",
      note: result.timeKnown ? "当前细盘已包含时干、时支、时支藏干与时柱关系。" : "已保留年、月、日三柱；子女、晚年、时盘、命身宫等依赖时辰的内容不展开。"
    }
  ].map(item => `<article class="detail-block"><small>${item.label}</small><strong>${item.value}</strong><span>${item.note}</span></article>`).join("");

  document.querySelector("#professional-chart").innerHTML = `
    <div class="professional-chart-grid">
      <div class="detail-table">
        <table>
          <thead>
            <tr><th>柱位</th><th>干支</th><th>十神</th><th>藏干</th><th>纳音</th><th>空亡</th></tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
      <aside class="professional-side">
        ${detailBlocks}
        <article class="detail-block">
          <small>干支关系</small>
          <strong>合冲刑害速览</strong>
          <div class="relationship-list">${relationItems}</div>
        </article>
      </aside>
    </div>`;
}

let fiveToneAudioContext = null;
let activeTonePlayback = null;

function stopFiveToneMusic() {
  if (!activeTonePlayback) return;
  activeTonePlayback.nodes.forEach(node => {
    try { node.stop(); } catch { /* The note may have already ended. */ }
  });
  clearTimeout(activeTonePlayback.timer);
  activeTonePlayback.button.classList.remove("playing");
  activeTonePlayback.button.setAttribute("aria-pressed", "false");
  activeTonePlayback.button.textContent = "循环播放";
  activeTonePlayback = null;
}

function getFiveTonePhrase(phase, round) {
  const base = phase.sequence;
  if (round % 3 === 0) return [...base, ...base.slice(1, -1).reverse(), ...base.slice(0, 5)];
  if (round % 3 === 1) return [...base.slice(0, 5), ...base.slice(2), ...base.slice().reverse()];
  return [...base.slice().reverse(), ...base.slice(1), ...base.slice(3, 8)];
}

function scheduleFiveTonePhrase(playback) {
  if (activeTonePlayback !== playback) return;
  const { element, phase } = playback;
  const sequence = getFiveTonePhrase(phase, playback.round);
  const noteLength = 0.68;
  const startAt = fiveToneAudioContext.currentTime + 0.08;
  const nodes = [];
  sequence.forEach((frequency, index) => {
    const noteStart = startAt + index * noteLength;
    const oscillator = fiveToneAudioContext.createOscillator();
    const overtone = fiveToneAudioContext.createOscillator();
    const gain = fiveToneAudioContext.createGain();
    const overtoneGain = fiveToneAudioContext.createGain();
    oscillator.type = element === "水" ? "sine" : "triangle";
    overtone.type = "sine";
    oscillator.frequency.setValueAtTime(frequency, noteStart);
    overtone.frequency.setValueAtTime(frequency * 2, noteStart);
    gain.gain.setValueAtTime(0.0001, noteStart);
    gain.gain.exponentialRampToValueAtTime(0.15, noteStart + 0.08);
    gain.gain.exponentialRampToValueAtTime(0.0001, noteStart + noteLength * 0.94);
    overtoneGain.gain.setValueAtTime(0.0001, noteStart);
    overtoneGain.gain.exponentialRampToValueAtTime(0.022, noteStart + 0.1);
    overtoneGain.gain.exponentialRampToValueAtTime(0.0001, noteStart + noteLength * 0.86);
    oscillator.connect(gain).connect(fiveToneAudioContext.destination);
    overtone.connect(overtoneGain).connect(fiveToneAudioContext.destination);
    oscillator.start(noteStart);
    overtone.start(noteStart);
    oscillator.stop(noteStart + noteLength);
    overtone.stop(noteStart + noteLength);
    nodes.push(oscillator, overtone);
  });
  playback.nodes = nodes;
  document.querySelector("#audio-status").textContent = `循环播放中：${element}·${phase.tone}音（${phase.solfege}）·第 ${playback.round + 1} 段`;
  playback.timer = setTimeout(() => {
    if (activeTonePlayback !== playback) return;
    playback.round += 1;
    scheduleFiveTonePhrase(playback);
  }, sequence.length * noteLength * 1000 + 80);
}

async function playFiveToneMusic(element, button) {
  const status = document.querySelector("#audio-status");
  if (activeTonePlayback?.element === element) {
    stopFiveToneMusic();
    status.textContent = "循环播放已停止，可选择其他五音旋律。";
    return;
  }
  stopFiveToneMusic();
  const AudioEngine = window.AudioContext || window.webkitAudioContext;
  if (!AudioEngine) {
    status.textContent = "当前浏览器不支持实时音频合成。";
    return;
  }
  fiveToneAudioContext ||= new AudioEngine();
  if (fiveToneAudioContext.state === "suspended") await fiveToneAudioContext.resume();

  const phase = phaseSenses[element];
  button.classList.add("playing");
  button.setAttribute("aria-pressed", "true");
  button.textContent = "停止循环";
  const playback = { element, phase, button, nodes: [], timer: null, round: 0 };
  activeTonePlayback = playback;
  scheduleFiveTonePhrase(playback);
}

function renderFiveSenseRecommendations(analysis) {
  stopFiveToneMusic();
  const [primary, secondary] = analysis.balanceElements;
  const primarySense = phaseSenses[primary];
  const secondarySense = phaseSenses[secondary];
  document.querySelector("#sense-recommendation").innerHTML = `
    <div class="sense-symbol" style="color:${primarySense.hex}">${primary}</div>
    <div><small>当前优先观察·${primary}，辅助·${secondary}</small>
    <strong>${primarySense.color}色·${primarySense.tone}音，辅以${secondarySense.color}色·${secondarySense.tone}音</strong>
    <span>可将${primarySense.color}色用于空间、界面或衣物的小面积点缀，并试听${primarySense.tone}音旋律。${primarySense.taste}为传统味觉意象，不代表需要额外摄入。</span></div>`;

  const orderedElements = [primary, secondary, ...elements.filter(element => element !== primary && element !== secondary)];
  document.querySelector("#five-sense-grid").innerHTML = orderedElements.map((element, index) => {
    const sense = phaseSenses[element];
    const mark = index === 0 ? "优先" : index === 1 ? "辅助" : "";
    return `<article class="sense-card ${mark ? "recommended" : ""}" style="--phase-color:${sense.hex}">
      ${mark ? `<span class="recommend-mark">${mark}</span>` : ""}<small>五行</small><strong>${element}</strong>
      <div class="sense-triplet"><span>五色 <b>${sense.color}</b></span><span>五味 <b>${sense.taste}</b></span><span>五音 <b>${sense.tone}·${sense.solfege}</b></span></div>
      <button class="tone-button" type="button" data-tone-element="${element}" aria-pressed="false">循环播放</button></article>`;
  }).join("");
  document.querySelectorAll(".tone-button").forEach(button => {
    button.onclick = () => playFiveToneMusic(button.dataset.toneElement, button);
  });
  document.querySelector("#audio-status").textContent = `推荐先播放${primarySense.tone}音；每段约 15 秒，未点击停止前会持续循环。`;
}

function getPalaceAxis(name) {
  const index = palaceNames.indexOf(name);
  return {
    triad: [name, palaceNames[mod(index + 4, 12)], palaceNames[mod(index + 8, 12)]],
    opposite: palaceNames[mod(index + 6, 12)]
  };
}

function renderPalaceCard(placement, lifeBranchIndex, bodyBranchIndex) {
  const copy = palaceInterpretations[placement.name];
  const axis = getPalaceAxis(placement.name);
  const isLife = placement.branchIndex === lifeBranchIndex;
  const isBody = placement.branchIndex === bodyBranchIndex;
  const tags = [isLife ? "命宫定位" : "", isBody ? "身宫着力" : ""].filter(Boolean);
  return `<article class="palace-reading-card ${isLife ? "is-life" : ""} ${isBody ? "is-body" : ""}">
    <div class="palace-card-head">
      <small>${placement.branch}宫 · ${branchQualities[placement.branch]}</small>
      <h4>${placement.name}<span>${copy.topic}</span></h4>
    </div>
    ${tags.length ? `<div class="focus-tags">${tags.map(tag => `<span>${tag}</span>`).join("")}</div>` : ""}
    <p>${copy.reading}</p>
    <div class="palace-axis"><b>三方</b>${axis.triad.join(" / ")}<br><b>对宫</b>${axis.opposite}</div>
    <em>${copy.prompt}</em>
  </article>`;
}

function renderZiweiUnknown(year, month, day) {
  const lunar = getLunarDate(year, month, day);
  const palaceGrid = document.querySelector("#palace-grid");
  palaceGrid.classList.add("unavailable");
  palaceGrid.innerHTML = `<div class="unavailable-panel">
    <strong>紫微命身宫待补时辰</strong>
    <p>紫微十二宫需要出生时辰定位命宫与身宫。当前已保留农历日期显示，但不生成命宫、身宫和十二宫细盘。</p>
  </div>`;
  document.querySelector("#lunar-label").textContent = lunar.unsupported ? lunar.label : `农历 ${lunar.label}${lunar.isLeap ? "·闰月" : ""}`;
  document.querySelector("#life-palace").textContent = "—";
  document.querySelector("#body-palace").textContent = "—";
  document.querySelector("#life-branch-note").textContent = "时辰未知";
  document.querySelector("#body-palace-name").textContent = "待补";
  document.querySelector("#palace-reading").textContent = "请补充出生时辰后再查看紫微命宫、身宫、三方四正与十二宫逐宫解读。";
  document.querySelector("#ziwei-keynotes").innerHTML = [
    { label: "已保留", value: "农历生日", note: lunar.unsupported ? lunar.label : `${lunar.label}${lunar.isLeap ? "（闰月）" : ""}` },
    { label: "暂不展开", value: "命宫 / 身宫", note: "两者均依赖时辰，未知时辰时不做替代判断。" },
    { label: "建议", value: "先查出生证明", note: "若只知道大致时段，可回到表单填入接近的时辰，再对照可信度阅读。" }
  ].map(item => `<article><small>${item.label}</small><strong>${item.value}</strong><p>${item.note}</p></article>`).join("");
  document.querySelector("#palace-interpretations").innerHTML = `<article class="palace-reading-card">
    <div class="palace-card-head"><small>UNKNOWN HOUR</small><h4>十二宫暂缓<span>时辰依赖</span></h4></div>
    <p>在未知时辰下强行排十二宫，容易把不确定信息包装成确定结论。本页因此只保留边界说明。</p>
    <div class="palace-axis"><b>边界</b>不生成命宫、身宫、三方四正、十二宫落支</div>
    <em>补充时辰后可重新生成完整紫微基础盘。</em>
  </article>`;
}

function renderZiwei(year, month, day, hourBranch) {
  const lunar = getLunarDate(year, month, day);
  document.querySelector("#palace-grid").classList.remove("unavailable");
  const lifeBranchIndex = mod(2 + lunar.month - 1 - hourBranch, 12);
  const bodyBranchIndex = mod(2 + lunar.month - 1 + hourBranch, 12);
  const branchToPalace = {};
  palaceNames.forEach((name, index) => { branchToPalace[mod(lifeBranchIndex - index, 12)] = name; });
  const placements = palaceNames.map((name, index) => {
    const branchIndex = mod(lifeBranchIndex - index, 12);
    return { name, index, branchIndex, branch: branches[branchIndex] };
  });
  const palaceByName = Object.fromEntries(placements.map(placement => [placement.name, placement]));
  const lifeAxis = getPalaceAxis("命宫");
  const bodyPalaceName = branchToPalace[bodyBranchIndex];

  let html = `<div class="palace center"><div><strong>知时</strong><small>十二宫基础盘</small></div></div>`;
  palacePositions.forEach(([column, row], branchIndex) => {
    const isLife = branchIndex === lifeBranchIndex;
    const isBody = branchIndex === bodyBranchIndex;
    html += `<div class="palace ${isLife ? "active" : ""}" style="grid-column:${column};grid-row:${row}">
      <small>${branches[branchIndex]}宫</small><b>${branchToPalace[branchIndex]}</b>${isLife || isBody ? `<span class="badge">${isLife ? "命" : ""}${isBody ? "身" : ""}</span>` : ""}
    </div>`;
  });
  document.querySelector("#palace-grid").innerHTML = html;
  document.querySelector("#lunar-label").textContent = `农历 ${lunar.label}${lunar.isLeap ? "·闰月" : ""}`;
  document.querySelector("#life-palace").textContent = branches[lifeBranchIndex];
  document.querySelector("#body-palace").textContent = branches[bodyBranchIndex];
  document.querySelector("#life-branch-note").textContent = branchQualities[branches[lifeBranchIndex]];
  document.querySelector("#body-palace-name").textContent = bodyPalaceName;
  document.querySelector("#palace-reading").textContent = `命宫落${branches[lifeBranchIndex]}，身宫落${branches[bodyBranchIndex]}，身宫所在十二宫为${bodyPalaceName}。命宫用于观察先天倾向，身宫用于观察后天着力点；请把它们当作自我反思的角度，不要当作人生定论。`;
  document.querySelector("#ziwei-keynotes").innerHTML = [
    { label: "命宫三方", value: lifeAxis.triad.join(" / "), note: `对宫为${lifeAxis.opposite}，用于观察自我、资源、事业与外部环境的连动。` },
    { label: "身宫落点", value: `${bodyPalaceName} · ${branches[bodyBranchIndex]}宫`, note: palaceInterpretations[bodyPalaceName].prompt },
    { label: "命宫支气", value: branchQualities[branches[lifeBranchIndex]], note: `命宫${palaceByName["命宫"].branch}宫提供本盘的起点气质。` }
  ].map(item => `<article><small>${item.label}</small><strong>${item.value}</strong><p>${item.note}</p></article>`).join("");
  document.querySelector("#palace-interpretations").innerHTML = placements.map(placement => renderPalaceCard(placement, lifeBranchIndex, bodyBranchIndex)).join("");
}

function formatInputTime(birthData) {
  if (birthData.timeKnown === false || birthData.hour == null || birthData.minute == null) {
    return `${birthData.year}-${String(birthData.month).padStart(2, "0")}-${String(birthData.day).padStart(2, "0")} 时辰未知`;
  }
  return `${birthData.year}-${String(birthData.month).padStart(2, "0")}-${String(birthData.day).padStart(2, "0")} ${String(birthData.hour).padStart(2, "0")}:${String(birthData.minute).padStart(2, "0")}`;
}

function getDateTimeParts(date) {
  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
    hour: date.getHours(),
    minute: date.getMinutes()
  };
}

function getTrigramFromLines(lines) {
  return trigramByLineKey[lines.join("")] || trigrams[0];
}

function getHexagramFromLines(lines) {
  const lower = getTrigramFromLines(lines.slice(0, 3));
  const upper = getTrigramFromLines(lines.slice(3, 6));
  return { upper, lower, lines, name: getHexagramName(upper, lower) };
}

function getHexagramName(upper, lower) {
  return hexagramNames[`${upper.name}-${lower.name}`] || `${upper.image}${lower.image}卦`;
}

function renderHexagramLines(lines, movingLines = []) {
  const movingSet = new Set(Array.isArray(movingLines) ? movingLines : [movingLines].filter(Boolean));
  return Array.from({ length: 6 }, (_, index) => 6 - index).map(lineNumber => {
    const isYang = lines[lineNumber - 1] === 1;
    return `<div class="hex-line ${isYang ? "yang" : "yin"} ${movingSet.has(lineNumber) ? "moving" : ""}" aria-label="${lineLabels[lineNumber - 1]}${isYang ? "阳爻" : "阴爻"}">
      <i></i><i></i>
    </div>`;
  }).join("");
}

function renderHexagramBlock(label, hexagram, movingLines = []) {
  return `<article class="hexagram-block">
    <small>${label}</small>
    <strong>${hexagram.name}</strong>
    <span>${hexagram.upper.image}上${hexagram.lower.image}下 · ${hexagram.upper.name}${hexagram.lower.name}</span>
    <div class="hexagram-lines">${renderHexagramLines(hexagram.lines, movingLines)}</div>
  </article>`;
}

function flipLines(lines, movingLines) {
  const changed = [...lines];
  movingLines.forEach(lineNumber => { changed[lineNumber - 1] = changed[lineNumber - 1] ? 0 : 1; });
  return changed;
}

function getSixKin(dayElement, targetElement) {
  const relation = mod(elementCycle.indexOf(targetElement) - elementCycle.indexOf(dayElement), 5);
  if (relation === 0) return "兄弟";
  if (relation === 1) return "子孙";
  if (relation === 2) return "妻财";
  if (relation === 3) return "官鬼";
  return "父母";
}

function renderMiniYao(isYang) {
  return `<span class="mini-yao ${isYang ? "yang" : "yin"}"><i></i><i></i></span>`;
}

function renderLiuyao(result, birthData, sourceLabel = "输入时间") {
  const seed = birthData.year * 13 + birthData.month * 17 + birthData.day * 19 + birthData.hour * 23 + birthData.minute * 29 + result.dayStem * 31;
  const lineValues = Array.from({ length: 6 }, (_, index) => {
    const pillar = result.pillars[index % result.pillars.length];
    const valueIndex = mod(seed + (index + 1) * birthData.day + pillar.stem * 7 + pillar.branch * 11, 4);
    return [6, 7, 8, 9][valueIndex];
  });
  if (!lineValues.some(value => yaoStates[value].moving)) {
    const forcedIndex = mod(seed, 6);
    lineValues[forcedIndex] = lineValues[forcedIndex] % 2 === 1 ? 9 : 6;
  }

  const originalLines = lineValues.map(value => value % 2 === 1 ? 1 : 0);
  const movingLines = lineValues.map((value, index) => yaoStates[value].moving ? index + 1 : 0).filter(Boolean);
  const changedLines = flipLines(originalLines, movingLines);
  const originalHexagram = getHexagramFromLines(originalLines);
  const changedHexagram = getHexagramFromLines(changedLines);
  const dayElement = stemElements[result.dayStem];
  const worldLine = movingLines[0];
  const responseLine = mod(worldLine + 2, 6) + 1;
  const lineBranches = lineValues.map((_, index) => mod(result.pillars[1].branch + index * 2 + originalHexagram.upper.number + originalHexagram.lower.number, 12));
  const lineKins = lineBranches.map(branchIndex => getSixKin(dayElement, branchElements[branchIndex]));
  const focusKin = lineKins[worldLine - 1];

  document.querySelector("#liuyao-seed").textContent = `${formatInputTime(birthData)} · ${sourceLabel} · 时间模拟摇卦`;
  document.querySelector("#liuyao-original").innerHTML = renderHexagramBlock("本卦", originalHexagram, movingLines);
  document.querySelector("#liuyao-changed").innerHTML = renderHexagramBlock("变卦", changedHexagram);
  document.querySelector("#liuyao-lines").innerHTML = Array.from({ length: 6 }, (_, index) => 6 - index).map(lineNumber => {
    const lineIndex = lineNumber - 1;
    const value = lineValues[lineIndex];
    const branchIndex = lineBranches[lineIndex];
    const kin = lineKins[lineIndex];
    const roles = [
      lineNumber === worldLine ? "世" : "",
      lineNumber === responseLine ? "应" : "",
      yaoStates[value].moving ? "动" : ""
    ].filter(Boolean);
    return `<div class="yao-line ${yaoStates[value].moving ? "moving" : ""}">
      ${renderMiniYao(originalLines[lineIndex] === 1)}
      <b>${lineLabels[lineIndex]}</b>
      <span>${sixSpirits[mod(lineIndex + result.dayStem, 6)]} · ${branches[branchIndex]}${branchElements[branchIndex]} · ${kin}</span>
      <em>${roles.join(" / ") || "静"} · ${yaoStates[value].name}${yaoStates[value].moving ? yaoStates[value].change : ""}</em>
    </div>`;
  }).join("");

  const movingSummary = movingLines.map(lineNumber => `${lineLabels[lineNumber - 1]}${yaoStates[lineValues[lineNumber - 1]].name}`).join("、");
  document.querySelector("#liuyao-readings").innerHTML = [
    { title: "卦象焦点", copy: `本卦为${originalHexagram.name}，变卦为${changedHexagram.name}。上卦${originalHexagram.upper.name}主${originalHexagram.upper.quality}，下卦${originalHexagram.lower.name}主${originalHexagram.lower.quality}。` },
    { title: "动爻提示", copy: `${movingSummary}为本次时间卦的变化点。动爻越多，越适合先辨别问题边界，避免急于给单一结论。` },
    { title: `用神观察·${focusKin}`, copy: `简化定位把${lineLabels[worldLine - 1]}视作焦点，六亲为${focusKin}，可联想到${sixKinCopy[focusKin]}；应位在${lineLabels[responseLine - 1]}，用于观察外部回应。` }
  ].map(item => `<article class="divination-reading"><b>${item.title}</b><p>${item.copy}</p></article>`).join("");
}

function getBodyUseRelation(bodyElement, useElement) {
  const relation = mod(elementCycle.indexOf(useElement) - elementCycle.indexOf(bodyElement), 5);
  if (relation === 0) return { label: "体用比和", reading: "体卦与用卦同气，问题更像是同类资源的协调，重点在节奏和边界。" };
  if (relation === 1) return { label: "体生用", reading: "体卦生用卦，容易把自身精力投入外部事项，宜确认付出是否值得。" };
  if (relation === 2) return { label: "体克用", reading: "体卦克用卦，表示主动处理和管理外部议题，宜避免过度控制。" };
  if (relation === 3) return { label: "用克体", reading: "用卦克体卦，外部压力较明显，宜先降低风险、补足信息和支持。" };
  return { label: "用生体", reading: "用卦生体卦，外部条件对自身有支持，可观察哪些资源能被实际承接。" };
}

function renderMeihua(result, birthData, sourceLabel = "输入时间") {
  const yearBranchNumber = getYearPillar(birthData.year).branch + 1;
  const hourBranchNumber = result.hourBranch + 1;
  const upperNumber = mod(yearBranchNumber + birthData.month + birthData.day - 1, 8) + 1;
  const lowerNumber = mod(yearBranchNumber + birthData.month + birthData.day + hourBranchNumber - 1, 8) + 1;
  const movingLine = mod(yearBranchNumber + birthData.month + birthData.day + hourBranchNumber - 1, 6) + 1;
  const upper = trigrams[upperNumber - 1];
  const lower = trigrams[lowerNumber - 1];
  const originalLines = [...lower.lines, ...upper.lines];
  const changedLines = flipLines(originalLines, [movingLine]);
  const mutualLines = [originalLines[1], originalLines[2], originalLines[3], originalLines[2], originalLines[3], originalLines[4]];
  const originalHexagram = getHexagramFromLines(originalLines);
  const mutualHexagram = getHexagramFromLines(mutualLines);
  const changedHexagram = getHexagramFromLines(changedLines);
  const useTrigram = movingLine > 3 ? upper : lower;
  const bodyTrigram = movingLine > 3 ? lower : upper;
  const relation = getBodyUseRelation(bodyTrigram.element, useTrigram.element);

  document.querySelector("#meihua-seed").textContent = `${formatInputTime(birthData)} · ${sourceLabel} · 年支月日时取数`;
  document.querySelector("#meihua-hexagrams").innerHTML = [
    renderHexagramBlock("本卦", originalHexagram, [movingLine]),
    renderHexagramBlock("互卦", mutualHexagram),
    renderHexagramBlock("变卦", changedHexagram)
  ].join("");
  document.querySelector("#meihua-body-use").innerHTML = [
    { label: "体卦", trigram: bodyTrigram, role: "自身、主位、承接能力" },
    { label: "用卦", trigram: useTrigram, role: "外部、客位、所问之事" }
  ].map(item => `<div class="body-use-card">
    <small>${item.label}</small><strong>${item.trigram.name}·${item.trigram.image}</strong>
    <span>${item.trigram.element} · ${item.trigram.quality}</span><em>${item.role}</em>
  </div>`).join("");
  document.querySelector("#meihua-relation").textContent = `${relation.label}：${relation.reading}`;
  document.querySelector("#meihua-readings").innerHTML = [
    { title: "起卦取数", copy: `年支数 ${yearBranchNumber}，月数 ${birthData.month}，日数 ${birthData.day}，时支数 ${hourBranchNumber}；上卦取${upperNumber}为${upper.name}，下卦取${lowerNumber}为${lower.name}。` },
    { title: `动爻·${lineLabels[movingLine - 1]}`, copy: `${lineLabels[movingLine - 1]}发动，由${originalHexagram.name}转为${changedHexagram.name}。动在${movingLine > 3 ? "上卦" : "下卦"}，所以${useTrigram.name}为用、${bodyTrigram.name}为体。` },
    { title: "取象提示", copy: `本卦看现状，互卦${mutualHexagram.name}看中间过程，变卦看趋势。${trigramInsights[bodyTrigram.name]} ${trigramInsights[useTrigram.name]}` }
  ].map(item => `<article class="divination-reading"><b>${item.title}</b><p>${item.copy}</p></article>`).join("");
}

function getGanzhiIndex(stem, branch) {
  for (let index = 0; index < 60; index += 1) {
    if (index % 10 === stem && index % 12 === branch) return index;
  }
  return 0;
}

function getQimenDun(month, day) {
  const marker = dateKey(month, day);
  return marker >= 1221 || marker < 621 ? "阳遁" : "阴遁";
}

function renderQimen(result, birthData, sourceLabel = "输入时间") {
  const dun = getQimenDun(birthData.month, birthData.day);
  const isYang = dun === "阳遁";
  const ju = mod(birthData.year + birthData.month * 2 + birthData.day + birthData.hour + (isYang ? 0 : 4), 9) + 1;
  const hourPillar = result.pillars[3];
  const hourIndex = getGanzhiIndex(hourPillar.stem, hourPillar.branch);
  const xunIndex = Math.floor(hourIndex / 10);
  const xunshou = qimenXunshou[xunIndex];
  const shift = (isYang ? 1 : -1) * (ju + result.hourBranch + hourPillar.stem);
  const dutyDoor = qimenDoors[mod(ju + result.hourBranch - 1, 8)];
  const dutyStar = qimenStars[mod(ju + hourPillar.stem - 1, 9)];

  const palaceModels = qimenPalaces.map(palace => {
    if (palace.num === 5) {
      return {
        ...palace,
        door: "中宫",
        star: "天禽",
        god: "值符",
        heavenStem: qimenStems[mod(ju + 4, 9)],
        earthStem: qimenStems[4],
        tone: "center"
      };
    }
    const flowIndex = qimenFlow.indexOf(palace.num);
    const door = qimenDoors[mod(flowIndex + shift, 8)];
    const star = qimenStars[mod(flowIndex + shift + result.dayStem, 9)];
    const god = qimenGods[mod(flowIndex + shift + hourPillar.stem, 8)];
    return {
      ...palace,
      door,
      star,
      god,
      heavenStem: qimenStems[mod(flowIndex + shift + hourPillar.stem, 9)],
      earthStem: qimenStems[mod(flowIndex + ju - 1, 9)],
      tone: ["开门", "休门", "生门"].includes(door) ? "good" : ["伤门", "惊门", "死门"].includes(door) ? "caution" : ""
    };
  });
  const goodPalaces = palaceModels.filter(palace => palace.tone === "good");
  const dutyPalace = palaceModels.find(palace => palace.door === dutyDoor && palace.num !== 5) || goodPalaces[0] || palaceModels[0];

  document.querySelector("#qimen-time").textContent = `${formatInputTime(birthData)} · ${sourceLabel} · ${stems[hourPillar.stem]}${branches[hourPillar.branch]}时`;
  document.querySelector("#qimen-core").innerHTML = [
    { label: "遁局", value: `${dun}${ju}局`, note: isYang ? "冬至后至夏至前取阳遁框架" : "夏至后至冬至前取阴遁框架" },
    { label: "旬首", value: xunshou, note: `${stems[hourPillar.stem]}${branches[hourPillar.branch]}时所在旬` },
    { label: "符使", value: `${dutyStar} · ${dutyDoor}`, note: "简化值符和值使门提示" }
  ].map(item => `<div><small>${item.label}</small><strong>${item.value}</strong><span>${item.note}</span></div>`).join("");
  document.querySelector("#qimen-grid").innerHTML = palaceModels.map(palace => `<div class="qimen-palace ${palace.tone}">
    <div class="qimen-palace-head"><b>${palace.name}${palace.num}</b><small>${palace.direction} · ${palace.branch}</small></div>
    <div class="qimen-symbols"><span>${palace.heavenStem}/${palace.earthStem}</span><strong>${palace.door}</strong></div>
    <div class="qimen-tags"><span>${palace.star}</span><span>${palace.god}</span></div>
  </div>`).join("");
  document.querySelector("#qimen-readings").innerHTML = [
    { title: "三吉门", copy: goodPalaces.length ? goodPalaces.map(palace => `${palace.direction}${palace.name}宫见${palace.door}`).join("，") : "本盘未突出开、休、生三吉门，宜先保守观察。" },
    { title: `值使·${dutyDoor}`, copy: `${dutyDoor}落${dutyPalace.direction}${dutyPalace.name}宫。${qimenDoorCopy[dutyDoor] || "中宫提示先整合资源，再看外部方向。"}` },
    { title: "盘面取象", copy: `${dun}${ju}局以${dutyStar}为符、${xunshou}为旬首；可把九宫看作方向和场景清单，优先核实现实条件。` }
  ].map(item => `<article class="divination-reading"><b>${item.title}</b><p>${item.copy}</p></article>`).join("");
}

function getAdjacentJieDate(year, month, day, hour, minute, forward) {
  const birth = new Date(year, month - 1, day, hour, minute);
  const candidates = [];
  for (let candidateYear = year - 1; candidateYear <= year + 1; candidateYear += 1) {
    for (let candidateMonth = 1; candidateMonth <= 12; candidateMonth += 1) {
      candidates.push(new Date(candidateYear, candidateMonth - 1, solarTermDay(candidateYear, candidateMonth), 12, 0));
    }
  }
  const eligible = candidates.filter(date => forward ? date > birth : date < birth);
  eligible.sort((a, b) => forward ? a - b : b - a);
  return { birth, jie: eligible[0] };
}

function formatStartAge(age) {
  let years = Math.floor(age);
  let months = Math.round((age - years) * 12);
  if (months === 12) { years += 1; months = 0; }
  return `${years}岁${months ? `${months}个月` : ""}`;
}

function getYearPillar(year) {
  return { stem: mod(year - 4, 10), branch: mod(year - 4, 12) };
}

function pairKey(a, b) { return [a, b].sort((left, right) => left - right).join("-"); }

function getNatalInteractions(result, annualStem, annualBranch) {
  const stemCombines = { "0-5": "甲己合", "1-6": "乙庚合", "2-7": "丙辛合", "3-8": "丁壬合", "4-9": "戊癸合" };
  const stemClashes = { "0-6": "甲庚冲", "1-7": "乙辛冲", "2-8": "丙壬冲", "3-9": "丁癸冲" };
  const branchCombines = { "0-1": "子丑合", "2-11": "寅亥合", "3-10": "卯戌合", "4-9": "辰酉合", "5-8": "巳申合", "6-7": "午未合" };
  const branchClashes = { "0-6": "子午冲", "1-7": "丑未冲", "2-8": "寅申冲", "3-9": "卯酉冲", "4-10": "辰戌冲", "5-11": "巳亥冲" };
  const branchHarms = { "0-7": "子未害", "1-6": "丑午害", "2-5": "寅巳害", "3-4": "卯辰害", "8-11": "申亥害", "9-10": "酉戌害" };
  const labels = ["年", "月", "日", "时"];
  const interactions = [];

  result.pillars.forEach((pillar, index) => {
    if (pillar.unknown) return;
    const stemKey = pairKey(annualStem, pillar.stem);
    const branchKey = pairKey(annualBranch, pillar.branch);
    if (stemCombines[stemKey]) interactions.push({ type: "合", text: `${stemCombines[stemKey]}，与${labels[index]}干形成协同与牵引线索` });
    if (stemClashes[stemKey]) interactions.push({ type: "冲", text: `${stemClashes[stemKey]}，与${labels[index]}干的调整感增强` });
    if (branchCombines[branchKey]) interactions.push({ type: "合", text: `${branchCombines[branchKey]}，与${labels[index]}支形成连结线索` });
    if (branchClashes[branchKey]) interactions.push({ type: "冲", text: `${branchClashes[branchKey]}，与${labels[index]}支的变化与重组感增强` });
    if (branchHarms[branchKey]) interactions.push({ type: "害", text: `${branchHarms[branchKey]}，提醒关注沟通与细节磨合` });
    if (annualBranch === pillar.branch) interactions.push({ type: "叠", text: `${branches[annualBranch]}支与${labels[index]}支同见，原有主题容易被再次强调` });
  });

  const triads = [
    { members: [8, 0, 4], label: "申子辰三合水" }, { members: [11, 3, 7], label: "亥卯未三合木" },
    { members: [2, 6, 10], label: "寅午戌三合火" }, { members: [5, 9, 1], label: "巳酉丑三合金" }
  ];
  const natalBranches = getKnownPillars(result).map(pillar => pillar.branch);
  triads.forEach(triad => {
    if (triad.members.includes(annualBranch) && triad.members.filter(member => member !== annualBranch).every(member => natalBranches.includes(member))) {
      interactions.unshift({ type: "三合", text: `${triad.label}线索齐全，相关五行主题更集中` });
    }
  });
  const unique = interactions.filter((item, index, list) => list.findIndex(candidate => candidate.type === item.type && candidate.text === item.text) === index);
  return unique.length ? unique.slice(0, 4) : [{ type: "平", text: "与原局未见明显六合或六冲，可把重点放在流年十神主题" }];
}

let currentLuckContext = null;

function updateAnnualYear(year) {
  if (!currentLuckContext) return;
  const { result, analysis, cycles } = currentLuckContext;
  const pillar = getYearPillar(year);
  const god = getTenGod(result.dayStem, pillar.stem);
  const branchElement = branchElements[pillar.branch];
  const relation = getElementRelation(analysis.dayElement, branchElement);
  const cycle = cycles.find(item => year >= item.startYear && year < item.endYear);
  const interactions = getNatalInteractions(result, pillar.stem, pillar.branch);

  document.querySelector("#annual-year-select").value = String(year);
  document.querySelectorAll(".annual-year-button").forEach(button => button.classList.toggle("active", Number(button.dataset.year) === year));
  document.querySelector("#annual-pillar").innerHTML = `<div><strong>${stems[pillar.stem]}${branches[pillar.branch]}</strong><small>${year}·立春至次年立春</small></div>`;
  document.querySelector("#annual-cycle-label").textContent = cycle
    ? `行${stems[cycle.stem]}${branches[cycle.branch]}大运·${cycle.ageLabel}`
    : year < cycles[0].startYear ? "尚未起运·以原局与流年观察" : "超出当前八步大运展示范围";
  document.querySelector("#annual-theme").textContent = `${god}之年·${tenGodCopy[god].brief}`;
  document.querySelector("#annual-reading").textContent = `${year}年干为${stems[pillar.stem]}，对${stems[result.dayStem]}日主呈现${god}关系；年支${branches[pillar.branch]}属${branchElement}，对日主主要表达“${relation}”。${tenGodCopy[god].reading}`;
  document.querySelector("#annual-interactions").innerHTML = interactions.map(item => `<div class="interaction-item"><b>${item.type}</b>${item.text}</div>`).join("");
}

function renderLuck(result, analysis, birthData, gender) {
  const yearStemYang = result.pillars[0].stem % 2 === 0;
  const hasDirectionRule = gender === "male" || gender === "female";
  const forward = hasDirectionRule ? (gender === "male" ? yearStemYang : !yearStemYang) : true;
  const luckHour = birthData.timeKnown === false ? 12 : birthData.hour;
  const luckMinute = birthData.timeKnown === false ? 0 : birthData.minute;
  const adjacent = getAdjacentJieDate(birthData.year, birthData.month, birthData.day, luckHour, luckMinute, forward);
  const startAge = Math.max(0, Math.abs(adjacent.jie - adjacent.birth) / 86400000 / 3);
  const directionLabel = forward ? "顺排" : "逆排";
  const monthPillar = result.pillars[1];
  const currentDate = new Date();
  const currentAge = (currentDate - adjacent.birth) / 31556952000;
  const cycles = [];

  for (let index = 0; index < 8; index += 1) {
    const ageStart = startAge + index * 10;
    const ageEnd = ageStart + 10;
    const stem = mod(monthPillar.stem + (forward ? 1 : -1) * (index + 1), 10);
    const branch = mod(monthPillar.branch + (forward ? 1 : -1) * (index + 1), 12);
    const startYear = birthData.year + Math.floor(ageStart);
    const endYear = startYear + 10;
    cycles.push({
      stem, branch, ageStart, ageEnd, startYear, endYear,
      ageLabel: `${Math.floor(ageStart)}–${Math.floor(ageEnd)}岁`,
      current: currentAge >= ageStart && currentAge < ageEnd
    });
  }

  document.querySelector("#luck-direction").textContent = `${stemYinYang[result.pillars[0].stem]}年·${gender === "male" ? "男命" : gender === "female" ? "女命" : "未指定"}·${directionLabel}`;
  document.querySelector("#luck-start-age").textContent = `约 ${formatStartAge(startAge)}`;
  document.querySelector("#luck-method-note").textContent = hasDirectionRule
    ? `按“阳年男、阴年女顺；阴年男、阳年女逆”排运。${birthData.timeKnown === false ? "时辰未知，起运岁数按当日正午粗略估算。" : ""}`
    : `未选择性别，当前仅按顺排预览；逆排结果会不同。${birthData.timeKnown === false ? "时辰未知，起运岁数按当日正午粗略估算。" : ""}`;
  document.querySelector("#luck-cycles").innerHTML = cycles.map(cycle => {
    const god = getTenGod(result.dayStem, cycle.stem);
    return `<article class="luck-cycle ${cycle.current ? "current" : ""}">
      <small>${cycle.startYear}–${cycle.endYear - 1}</small><strong>${stems[cycle.stem]}${branches[cycle.branch]}</strong>
      <span>${god}</span><em>${cycle.ageLabel}·${getElementRelation(analysis.dayElement, branchElements[cycle.branch])}</em>
    </article>`;
  }).join("");

  const currentYear = new Date().getFullYear();
  const annualYears = Array.from({ length: 10 }, (_, index) => currentYear - 3 + index);
  const selectEndYear = Math.min(2099, Math.max(currentYear + 6, cycles[cycles.length - 1].endYear - 1));
  const selectYears = Array.from({ length: selectEndYear - birthData.year + 1 }, (_, index) => birthData.year + index);
  document.querySelector("#annual-year-select").innerHTML = selectYears.map(year => `<option value="${year}">${year}年·${stems[getYearPillar(year).stem]}${branches[getYearPillar(year).branch]}</option>`).join("");
  document.querySelector("#annual-years").innerHTML = annualYears.map(year => {
    const pillar = getYearPillar(year);
    return `<button class="annual-year-button" data-year="${year}" type="button"><b>${year}</b><small>${stems[pillar.stem]}${branches[pillar.branch]}</small></button>`;
  }).join("");
  currentLuckContext = { result, analysis, cycles };
  document.querySelector("#annual-year-select").onchange = event => updateAnnualYear(Number(event.target.value));
  document.querySelectorAll(".annual-year-button").forEach(button => {
    button.onclick = () => updateAnnualYear(Number(button.dataset.year));
  });
  updateAnnualYear(currentYear);
}

function getAnnualQi(year) {
  const stemIndex = mod(year - 4, 10);
  const branchIndex = mod(year - 4, 12);
  const movementMap = ["土", "金", "水", "木", "火", "土", "金", "水", "木", "火"];
  const movement = movementMap[stemIndex];
  const excess = stemIndex % 2 === 0 ? "太过" : "不及";
  const qiMap = [
    ["少阴君火", "阳明燥金"], ["太阴湿土", "太阳寒水"],
    ["少阳相火", "厥阴风木"], ["阳明燥金", "少阴君火"],
    ["太阳寒水", "太阴湿土"], ["厥阴风木", "少阳相火"],
    ["少阴君火", "阳明燥金"], ["太阴湿土", "太阳寒水"],
    ["少阳相火", "厥阴风木"], ["阳明燥金", "少阴君火"],
    ["太阳寒水", "太阴湿土"], ["厥阴风木", "少阳相火"]
  ];
  const adviceByQi = {
    "少阴君火": "传统理论关注热与心神，日常以充足睡眠、补水和避免高温时段剧烈运动为宜。",
    "太阴湿土": "传统理论关注湿与脾胃，日常保持食物多样、适度活动和居处通风。",
    "少阳相火": "传统理论关注温热变化，换季时逐步调整作息与运动强度。",
    "阳明燥金": "传统理论关注燥，可留意环境湿度、正常饮水和皮肤保湿。",
    "太阳寒水": "传统理论关注寒，根据实际气温增减衣物，运动前充分热身。",
    "厥阴风木": "传统理论关注风与变化，日常重视规律作息、拉伸和情绪放松。"
  };
  return { movement: `${movement}运${excess}`, heaven: qiMap[branchIndex][0], earth: qiMap[branchIndex][1], advice: adviceByQi[qiMap[branchIndex][0]] };
}

function renderHealth(elementSummary) {
  const now = new Date();
  const currentIndex = mod(Math.floor((now.getHours() + 1) / 2), 12);
  const current = organClock[currentIndex];
  document.querySelector("#current-branch").textContent = current.branch;
  document.querySelector("#current-organ").textContent = current.organ;
  document.querySelector("#current-range").textContent = current.range;
  document.querySelector("#current-advice").textContent = current.advice;
  document.querySelector("#hour-track").innerHTML = organClock.map((item, index) => `<div class="hour-node ${index === currentIndex ? "active" : ""}"><b>${item.branch}</b>${item.range.slice(0, 2)}</div>`).join("");

  const year = now.getFullYear();
  const annual = getAnnualQi(year);
  document.querySelector("#current-year").textContent = `${year}年`;
  document.querySelector("#annual-movement").textContent = annual.movement;
  document.querySelector("#heaven-qi").textContent = annual.heaven;
  document.querySelector("#annual-advice").textContent = `${annual.advice}在泉之气为${annual.earth}。`;

  const personalized = [
    ["作息", "尽量保持稳定的起床与入睡时间"],
    ["活动", elementCopy[elementSummary.dayElement].care.split("，")[0]],
    ["饮食", "优先多样、新鲜、适量，不因五行数量极端忌口"],
    ["观察", "以真实身体反应为准，持续不适请记录并就医"]
  ];
  document.querySelector("#wellness-list").innerHTML = personalized.map(([title, copy]) => `<div class="wellness-item"><b>${title}</b>${copy}</div>`).join("");
}

function renderUnavailableHexagramBlock(label) {
  return `<article class="hexagram-block unavailable">
    <div><small>${label}</small><strong>待起</strong><span>出生时辰未知</span></div>
  </article>`;
}

function renderBirthDivinationUnavailable(birthData) {
  const timeLabel = formatInputTime(birthData);
  document.querySelector("#liuyao-cast-status").textContent = `出生资料：${timeLabel}。可点击按钮改用当前时间摇卦。`;
  document.querySelector("#meihua-cast-status").textContent = `出生资料：${timeLabel}。可点击按钮改用当前时间起卦。`;
  document.querySelector("#qimen-cast-status").textContent = `出生资料：${timeLabel}。可点击按钮改用当前时间起局。`;

  document.querySelector("#liuyao-seed").textContent = `${timeLabel} · 出生时辰未知`;
  document.querySelector("#liuyao-original").innerHTML = renderUnavailableHexagramBlock("本卦");
  document.querySelector("#liuyao-changed").innerHTML = renderUnavailableHexagramBlock("变卦");
  document.querySelector("#liuyao-lines").innerHTML = `<div class="unavailable-panel"><strong>六爻出生时间卦暂不生成</strong><p>时间模拟摇卦需要明确时分。请使用当前时间按钮，或补充出生时辰后重新生成。</p></div>`;
  document.querySelector("#liuyao-readings").innerHTML = [
    { title: "为什么暂停", copy: "出生时辰未知时，世应、动爻和六亲模拟会被时柱牵动，强行生成容易造成误读。" },
    { title: "可用方式", copy: "若是占问当前处境，请点击“摇一摇”，系统会改用当下时间重新起卦。" },
    { title: "边界", copy: "六爻真实占断还需要明确问事、月建日辰、旬空、用神等条件。" }
  ].map(item => `<article class="divination-reading"><b>${item.title}</b><p>${item.copy}</p></article>`).join("");

  document.querySelector("#meihua-seed").textContent = `${timeLabel} · 出生时辰未知`;
  document.querySelector("#meihua-hexagrams").innerHTML = [
    renderUnavailableHexagramBlock("本卦"),
    renderUnavailableHexagramBlock("互卦"),
    renderUnavailableHexagramBlock("变卦")
  ].join("");
  document.querySelector("#meihua-body-use").innerHTML = `<div class="unavailable-panel" style="grid-column:1 / -1"><strong>体用待定</strong><p>梅花时间取数需要时支参与，未知时辰时暂不生成体用关系。</p></div>`;
  document.querySelector("#meihua-relation").textContent = "可点击“照一照”使用当前时间起卦。";
  document.querySelector("#meihua-readings").innerHTML = [
    { title: "取数暂停", copy: "年月日时取数中，时支会参与下卦与动爻计算。" },
    { title: "替代路径", copy: "若是当下问题，可用当前时间、所见外应或随机数另行起卦。" },
    { title: "阅读建议", copy: "补齐时辰后，再把出生时间卦作为结构展示，不直接当作事件预测。" }
  ].map(item => `<article class="divination-reading"><b>${item.title}</b><p>${item.copy}</p></article>`).join("");

  document.querySelector("#qimen-time").textContent = `${timeLabel} · 出生时辰未知`;
  document.querySelector("#qimen-core").innerHTML = [
    { label: "遁局", value: "待定", note: "时辰未知" },
    { label: "旬首", value: "待定", note: "需时柱定位" },
    { label: "符使", value: "待定", note: "需明确时盘" }
  ].map(item => `<div><small>${item.label}</small><strong>${item.value}</strong><span>${item.note}</span></div>`).join("");
  document.querySelector("#qimen-grid").innerHTML = `<div class="unavailable-panel" style="grid-column:1 / -1"><strong>奇门时盘暂不生成</strong><p>奇门局需要明确起局时刻。可点击“起一局”使用当前时间。</p></div>`;
  document.querySelector("#qimen-readings").innerHTML = [
    { title: "时盘依赖", copy: "符使、旬首、九宫飞布都依赖明确时辰。" },
    { title: "当前起局", copy: "点击按钮后会用当下时间重新生成简化时盘。" },
    { title: "使用边界", copy: "当前仍是离线文化体验，不用于择日、投资或出行决策。" }
  ].map(item => `<article class="divination-reading"><b>${item.title}</b><p>${item.copy}</p></article>`).join("");
}

const divinationCastConfigs = {
  liuyao: {
    statusSelector: "#liuyao-cast-status",
    buttonSelector: "#cast-liuyao-current",
    idleText: "摇一摇",
    doneText: "已按当前时间摇卦",
    currentLabel: "当前时间起卦",
    birthLabel: "出生时间参考",
    render: renderLiuyao
  },
  meihua: {
    statusSelector: "#meihua-cast-status",
    buttonSelector: "#cast-meihua-current",
    idleText: "照一照",
    doneText: "已按当前时间照见",
    currentLabel: "当前时间起卦",
    birthLabel: "出生时间参考",
    render: renderMeihua
  },
  qimen: {
    statusSelector: "#qimen-cast-status",
    buttonSelector: "#cast-qimen-current",
    idleText: "起一局",
    doneText: "已按当前时间起局",
    currentLabel: "当前时间起局",
    birthLabel: "出生时间参考",
    render: renderQimen
  }
};

function renderSingleDivination(kind, divinationData, source) {
  if (source !== "current" && divinationData.timeKnown === false) {
    renderBirthDivinationUnavailable(divinationData);
    return;
  }
  const config = divinationCastConfigs[kind];
  const result = calculateBazi(divinationData.year, divinationData.month, divinationData.day, divinationData.hour, divinationData.minute);
  const isCurrent = source === "current";
  config.render(result, divinationData, isCurrent ? config.currentLabel : config.birthLabel);
  document.querySelector(config.statusSelector).textContent = `当前采用${isCurrent ? "当前时间" : "出生资料时间"}：${formatInputTime(divinationData)}`;
}

function renderDivinationSuite(divinationData, source) {
  if (source !== "current" && divinationData.timeKnown === false) {
    renderBirthDivinationUnavailable(divinationData);
    return;
  }
  Object.keys(divinationCastConfigs).forEach(kind => renderSingleDivination(kind, divinationData, source));
}

function switchTab(targetId) {
  document.querySelectorAll(".report-nav button").forEach(button => button.classList.toggle("active", button.dataset.target === targetId));
  document.querySelectorAll(".report-panel").forEach(panel => panel.classList.toggle("active", panel.id === targetId));
}

function getLocationOptionMatches(query) {
  const normalized = normalizeLocation(query);
  const rankByLevel = { province: 0, city: 1, district: 2 };
  const matches = normalized
    ? locationPresets.filter(preset => preset.searchText.includes(normalized))
    : locationPresets.filter(preset => preset.level !== "district");
  return matches
    .sort((left, right) => (rankByLevel[left.level] ?? 3) - (rankByLevel[right.level] ?? 3) || left.label.localeCompare(right.label, "zh-Hans-CN"))
    .slice(0, 80);
}

const locationOptionState = {
  matches: [],
  activeIndex: -1
};

function getLocationControls() {
  return {
    input: document.querySelector("#location"),
    toggle: document.querySelector("#location-toggle"),
    options: document.querySelector("#location-options")
  };
}

function renderLocationOption(preset, index) {
  const latitudeText = Number.isFinite(Number(preset.latitude)) ? ` · ${formatLatitude(Number(preset.latitude))}` : "";
  return `<button class="location-option" id="location-option-${index}" type="button" role="option" aria-selected="false" data-location-index="${index}">
    <strong>${escapeHtml(preset.label)}</strong>
    <small>${formatLongitude(preset.longitude)}${latitudeText} · ${formatTimezone(preset.timezone)}</small>
  </button>`;
}

function updateLocationActiveOption() {
  const { input, options } = getLocationControls();
  const buttons = Array.from(options.querySelectorAll(".location-option"));
  buttons.forEach((button, index) => {
    const isActive = index === locationOptionState.activeIndex;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", String(isActive));
    if (isActive) {
      input.setAttribute("aria-activedescendant", button.id);
      button.scrollIntoView({ block: "nearest" });
    }
  });
  if (locationOptionState.activeIndex < 0) {
    input.removeAttribute("aria-activedescendant");
  }
}

function setLocationOptionsOpen(isOpen) {
  const { input, toggle, options } = getLocationControls();
  options.hidden = !isOpen;
  input.setAttribute("aria-expanded", String(isOpen));
  toggle.setAttribute("aria-expanded", String(isOpen));
  if (!isOpen) {
    locationOptionState.activeIndex = -1;
    updateLocationActiveOption();
  }
}

function populateLocationOptions(query = "", { open = false } = {}) {
  const { options } = getLocationControls();
  locationOptionState.matches = getLocationOptionMatches(query);
  locationOptionState.activeIndex = -1;
  options.innerHTML = locationOptionState.matches.map(renderLocationOption).join("");
  setLocationOptionsOpen(open && locationOptionState.matches.length > 0);
}

function chooseLocationOption(index) {
  const preset = locationOptionState.matches[index];
  if (!preset) return;
  const { input } = getLocationControls();
  input.value = preset.label;
  setLocationOptionsOpen(false);
  syncLocationPreset({ autoEnable: true });
  input.focus();
}

function syncLocationPreset({ autoEnable = false } = {}) {
  const locationInput = document.querySelector("#location");
  const longitudeInput = document.querySelector("#longitude");
  const latitudeInput = document.querySelector("#latitude");
  const timezoneSelect = document.querySelector("#timezone");
  const correctionInput = document.querySelector("#solar-correction");
  const hint = document.querySelector("#form-hint");
  const resolution = resolveLocationPreset(locationInput.value);
  if (resolution.status !== "match") {
    if (autoEnable && longitudeInput.dataset.autoLocation === "true") {
      longitudeInput.value = "";
      latitudeInput.value = "";
      correctionInput.checked = false;
    }
    if (autoEnable && locationInput.value.trim()) {
      hint.textContent = resolution.status === "ambiguous"
        ? `匹配到多个地点，请补充省市，例如：${formatLocationExamples(resolution.matches)}。`
        : "未匹配城市，可手填经度后校正。";
      hint.classList.remove("error");
    }
    return null;
  }

  const { preset } = resolution;
  const shouldUpdateLongitude = autoEnable || longitudeInput.value === "" || longitudeInput.dataset.autoLocation === "true";
  if (shouldUpdateLongitude) {
    longitudeInput.value = preset.longitude.toFixed(2);
    longitudeInput.dataset.autoLocation = "true";
  }
  const presetLatitude = Number(preset.latitude);
  const shouldUpdateLatitude = Number.isFinite(presetLatitude) && (autoEnable || latitudeInput.value === "" || latitudeInput.dataset.autoLocation === "true");
  if (shouldUpdateLatitude) {
    latitudeInput.value = presetLatitude.toFixed(2);
    latitudeInput.dataset.autoLocation = "true";
  }
  timezoneSelect.value = String(preset.timezone);
  if (autoEnable) correctionInput.checked = true;
  if (correctionInput.checked) {
    const latitudeText = Number.isFinite(presetLatitude) ? ` · ${formatLatitude(presetLatitude)}` : "";
    hint.textContent = `已匹配${preset.label} · ${formatLongitude(preset.longitude)}${latitudeText}，将按平太阳时校正。`;
    hint.classList.remove("error");
  }
  return preset;
}

function populateLunarDateControls() {
  const monthSelect = document.querySelector("#lunar-month");
  const daySelect = document.querySelector("#lunar-day");
  monthSelect.innerHTML = Array.from({ length: 12 }, (_, index) => `<option value="${index + 1}">${index + 1}月</option>`).join("");
  daySelect.innerHTML = lunarDayNames.map((name, index) => `<option value="${index + 1}">${name}</option>`).join("");
}

function setLunarFieldsFromSolarDate(dateValue) {
  if (!dateValue) return;
  const [year, month, day] = dateValue.split("-").map(Number);
  const lunar = getLunarDate(year, month, day);
  if (lunar.unsupported) return;
  document.querySelector("#lunar-year").value = lunar.year;
  document.querySelector("#lunar-month").value = String(lunar.month);
  document.querySelector("#lunar-day").value = String(lunar.day);
  document.querySelector("#lunar-leap").value = lunar.isLeap ? "yes" : "no";
}

function syncCalendarMode() {
  const isLunar = document.querySelector("#calendar-mode").value === "lunar";
  const solarField = document.querySelector("#solar-date-field");
  const birthDate = document.querySelector("#birth-date");
  const lunarControls = [document.querySelector("#lunar-year"), document.querySelector("#lunar-month"), document.querySelector("#lunar-day"), document.querySelector("#lunar-leap")];
  solarField.hidden = isLunar;
  document.querySelectorAll(".lunar-date-row").forEach(row => { row.hidden = !isLunar; });
  birthDate.disabled = isLunar;
  birthDate.required = !isLunar;
  lunarControls.forEach(control => { control.disabled = !isLunar; });
  document.querySelector("#lunar-year").required = isLunar;
  if (isLunar) {
    setLunarFieldsFromSolarDate(birthDate.value);
    document.querySelector("#form-hint").textContent = "农历生日会先在本地换算为公历，再进入四柱排盘。";
  } else {
    document.querySelector("#form-hint").textContent = "建议使用出生证明上的准确时间";
  }
  document.querySelector("#form-hint").classList.remove("error");
}

function syncTimeMode() {
  const unknown = document.querySelector("#time-mode").value === "unknown";
  const birthTime = document.querySelector("#birth-time");
  const correctionInput = document.querySelector("#solar-correction");
  birthTime.disabled = unknown;
  birthTime.required = !unknown;
  if (unknown) correctionInput.checked = false;
  correctionInput.disabled = unknown;
  document.querySelector("#form-hint").textContent = unknown
    ? "时辰未知时将只排年、月、日三柱；依赖时柱的模块会显示边界提示。"
    : "建议使用出生证明上的准确时间";
  document.querySelector("#form-hint").classList.remove("error");
}

populateLocationOptions();

document.querySelector("#location-toggle").addEventListener("mousedown", event => {
  event.preventDefault();
});
document.querySelector("#location-toggle").addEventListener("click", () => {
  const { input, options } = getLocationControls();
  if (options.hidden) {
    populateLocationOptions(input.value, { open: true });
    input.focus();
  } else {
    setLocationOptionsOpen(false);
  }
});
document.querySelector("#location-options").addEventListener("mousedown", event => {
  event.preventDefault();
});
document.querySelector("#location-options").addEventListener("click", event => {
  const optionButton = event.target instanceof Element ? event.target.closest(".location-option") : null;
  if (!optionButton) return;
  chooseLocationOption(Number(optionButton.dataset.locationIndex));
});
document.addEventListener("click", event => {
  if (event.target instanceof Element && event.target.closest(".location-input-wrap")) return;
  setLocationOptionsOpen(false);
});
document.querySelector("#location").addEventListener("focus", event => {
  populateLocationOptions(event.currentTarget.value, { open: true });
});
document.querySelector("#location").addEventListener("keydown", event => {
  const { options } = getLocationControls();
  if (event.key === "Escape") {
    setLocationOptionsOpen(false);
    return;
  }
  if (event.key !== "ArrowDown" && event.key !== "ArrowUp" && event.key !== "Enter") return;
  if (event.key === "Enter") {
    if (!options.hidden && locationOptionState.activeIndex >= 0) {
      event.preventDefault();
      chooseLocationOption(locationOptionState.activeIndex);
    }
    return;
  }
  event.preventDefault();
  if (options.hidden) {
    populateLocationOptions(event.currentTarget.value, { open: true });
  }
  if (!locationOptionState.matches.length) return;
  const direction = event.key === "ArrowDown" ? 1 : -1;
  locationOptionState.activeIndex = locationOptionState.activeIndex < 0
    ? (direction > 0 ? 0 : locationOptionState.matches.length - 1)
    : (locationOptionState.activeIndex + direction + locationOptionState.matches.length) % locationOptionState.matches.length;
  updateLocationActiveOption();
});
document.querySelector("#location").addEventListener("input", () => {
  const locationInput = document.querySelector("#location");
  populateLocationOptions(locationInput.value, { open: document.activeElement === locationInput });
  const resolution = resolveLocationPreset(locationInput.value);
  if (resolution.status === "match" || document.querySelector("#longitude").dataset.autoLocation === "true") {
    syncLocationPreset({ autoEnable: true });
  }
});
document.querySelector("#location").addEventListener("change", () => syncLocationPreset({ autoEnable: true }));
document.querySelector("#location").addEventListener("blur", () => {
  window.setTimeout(() => {
    if (document.activeElement instanceof Element && document.activeElement.closest(".location-input-wrap")) return;
    setLocationOptionsOpen(false);
  }, 80);
  syncLocationPreset({ autoEnable: true });
});
document.querySelector("#longitude").addEventListener("input", event => {
  event.currentTarget.dataset.autoLocation = "false";
});
document.querySelector("#latitude").addEventListener("input", event => {
  event.currentTarget.dataset.autoLocation = "false";
});
document.querySelector("#solar-correction").addEventListener("change", event => {
  if (event.currentTarget.checked) syncLocationPreset({ autoEnable: true });
});
document.querySelector("#calendar-mode").addEventListener("change", syncCalendarMode);
document.querySelector("#time-mode").addEventListener("change", syncTimeMode);

document.querySelectorAll(".report-nav button").forEach(button => {
  button.addEventListener("click", () => switchTab(button.dataset.target));
});

document.querySelector("#calculate-synastry").addEventListener("click", renderPartnerSynastry);

document.querySelector("#edit-profile").addEventListener("click", () => {
  document.querySelector("#birth-form").scrollIntoView({ behavior: "smooth", block: "center" });
  document.querySelector("#birth-date").focus({ preventScroll: true });
});

Object.entries(divinationCastConfigs).forEach(([kind, config]) => {
  document.querySelector(config.buttonSelector).addEventListener("click", () => {
    const nowData = getDateTimeParts(new Date());
    const button = document.querySelector(config.buttonSelector);
    renderSingleDivination(kind, nowData, "current");
    button.textContent = config.doneText;
    button.classList.add("just-cast");
    setTimeout(() => {
      button.textContent = config.idleText;
      button.classList.remove("just-cast");
    }, 1600);
  });
});

document.querySelector("#birth-form").addEventListener("submit", event => {
  event.preventDefault();
  const hint = document.querySelector("#form-hint");
  const calendarMode = document.querySelector("#calendar-mode").value;
  const timeKnown = document.querySelector("#time-mode").value !== "unknown";
  const timeValue = document.querySelector("#birth-time").value;
  let year;
  let month;
  let day;
  let hour = null;
  let minute = null;
  let solarIso = "";
  let calendarLabel = "公历输入";
  let lunarLabel = "";

  if (calendarMode === "lunar") {
    const lunarYear = Number(document.querySelector("#lunar-year").value);
    const lunarMonth = Number(document.querySelector("#lunar-month").value);
    const lunarDay = Number(document.querySelector("#lunar-day").value);
    const isLeap = document.querySelector("#lunar-leap").value === "yes";
    if (!Number.isInteger(lunarYear) || lunarYear < 1901 || lunarYear > 2099) {
      hint.textContent = "当前离线农历换算支持 1901–2099 年，请调整农历年份。";
      hint.classList.add("error");
      document.querySelector("#lunar-year").focus();
      return;
    }
    const converted = convertLunarToSolar(lunarYear, lunarMonth, lunarDay, isLeap);
    if (converted?.unsupported) {
      hint.textContent = "当前浏览器不支持内置农历换算，请改用公历生日。";
      hint.classList.add("error");
      return;
    }
    if (!converted) {
      hint.textContent = "没有找到对应的农历日期，请检查月份、日期或闰月选择。";
      hint.classList.add("error");
      return;
    }
    solarIso = converted.iso;
    if (solarIso < "1901-01-01" || solarIso > "2099-12-31") {
      hint.textContent = "换算后的公历日期超出当前离线历法范围。";
      hint.classList.add("error");
      return;
    }
    if (solarIso > todayIso) {
      hint.textContent = "换算后的公历出生日期不能晚于今天。";
      hint.classList.add("error");
      return;
    }
    ({ year, month, day } = converted);
    calendarLabel = `农历 ${lunarYear}年${isLeap ? "闰" : ""}${lunarMonth}月${lunarDayNames[lunarDay - 1]}`;
    lunarLabel = `换算为公历 ${solarIso}`;
  } else {
    const dateValue = document.querySelector("#birth-date").value;
    if (!dateValue) return;
    if (dateValue < "1901-01-01" || dateValue > "2099-12-31") {
      hint.textContent = "当前离线历法支持 1901–2099 年，请调整出生日期。";
      hint.classList.add("error");
      return;
    }
    if (dateValue > todayIso) {
      hint.textContent = "出生日期不能晚于今天。";
      hint.classList.add("error");
      return;
    }
    solarIso = dateValue;
    [year, month, day] = dateValue.split("-").map(Number);
    const lunar = getLunarDate(year, month, day);
    calendarLabel = `公历 ${dateValue}`;
    lunarLabel = lunar.unsupported ? "" : `农历 ${lunar.label}${lunar.isLeap ? "·闰月" : ""}`;
  }

  if (timeKnown) {
    if (!timeValue) {
      hint.textContent = "请选择出生时间，或将时辰状态改为“时辰未知”。";
      hint.classList.add("error");
      return;
    }
    [hour, minute] = timeValue.split(":").map(Number);
  }

  syncLocationPreset();
  const standardBirthData = { year, month, day, hour, minute, timeKnown, solarIso };
  let correctionNote = timeKnown ? "标准时间排盘" : "时辰未知 · 未进行平太阳时校正";
  const correctionInput = document.querySelector("#solar-correction");
  const locationPreset = correctionInput.checked ? syncLocationPreset() : null;
  if (timeKnown && correctionInput.checked) {
    const longitude = Number(document.querySelector("#longitude").value);
    const timezone = Number(document.querySelector("#timezone").value);
    if (!Number.isFinite(longitude) || document.querySelector("#longitude").value === "") {
      hint.textContent = "请先填写出生地经度，再启用平太阳时校正。";
      hint.classList.add("error");
      document.querySelector("#longitude").focus();
      return;
    }
    const adjusted = applySolarCorrection(solarIso, timeValue, longitude, timezone);
    ({ year, month, day, hour, minute } = adjusted);
    const locationNote = locationPreset ? `${locationPreset.label} · ` : "";
    correctionNote = `平太阳时 ${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")} · ${locationNote}${formatLongitude(longitude)} · 校正${adjusted.correctionMinutes >= 0 ? "+" : ""}${adjusted.correctionMinutes}分`;
  }

  hint.textContent = timeKnown ? "建议使用出生证明上的准确时间" : "已按时辰未知生成前三柱报告";
  hint.classList.remove("error");
  const name = document.querySelector("#name").value.trim();
  const result = calculateBazi(year, month, day, hour, minute, { timeKnown });
  renderPillars(result);
  const elementSummary = renderElements(result);
  const chartAnalysis = renderChartAnalysis(result, name);
  renderProfessionalChart(result, chartAnalysis, { calendarLabel, lunarLabel, correctionNote });
  renderFiveSenseRecommendations(chartAnalysis);
  const gender = document.querySelector("#gender").value;
  const birthData = { year, month, day, hour, minute, timeKnown, solarIso };
  const vedicMeta = {
    name,
    gender,
    calendarLabel,
    lunarLabel,
    correctionNote,
    location: document.querySelector("#location").value.trim(),
    longitude: Number(document.querySelector("#longitude").value),
    latitude: Number(document.querySelector("#latitude").value),
    timezone: Number(document.querySelector("#timezone").value)
  };
  renderVedic(result, standardBirthData, vedicMeta);
  renderLuck(result, chartAnalysis, birthData, gender);
  if (timeKnown) {
    renderZiwei(year, month, day, result.hourBranch);
  } else {
    renderZiweiUnknown(year, month, day);
  }
  renderDivinationSuite(birthData, "birth");
  renderHealth(elementSummary);

  document.querySelector("#report-name").textContent = name || "你";
  document.querySelector("#solar-time-note").textContent = correctionNote + (result.nearTerm ? " · 交节附近请复核" : "");
  document.querySelector("#reading").hidden = false;
  switchTab("bazi-panel");
  document.querySelector("#reading").scrollIntoView({ behavior: "smooth", block: "start" });
});

const today = new Date();
const todayIso = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
const defaultYear = Math.max(1901, today.getFullYear() - 30);
populateLunarDateControls();
document.querySelector("#birth-date").max = todayIso;
document.querySelector("#partner-date").max = todayIso;
document.querySelector("#birth-date").value = `${defaultYear}-06-15`;
document.querySelector("#lunar-year").value = defaultYear;
setLunarFieldsFromSolarDate(document.querySelector("#birth-date").value);
syncCalendarMode();
syncTimeMode();
syncLocationPreset();
