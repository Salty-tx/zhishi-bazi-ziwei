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
const elementCycle = ["木", "火", "土", "金", "水"];

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

function calculateBazi(year, month, day, hour, minute) {
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
  const hourBranch = mod(Math.floor((hour + 1) / 2), 12);
  const hourStem = mod((dayStem % 5) * 2 + hourBranch, 10);

  const nearTerm = [solarTermDay(year, month)].some(termDay => Math.abs(day - termDay) <= 1);
  return {
    pillars: [
      { label: "年柱", stem: yearStem, branch: yearBranch },
      { label: "月柱", stem: monthStem, branch: monthBranch },
      { label: "日柱", stem: dayStem, branch: dayBranch },
      { label: "时柱", stem: hourStem, branch: hourBranch }
    ],
    dayStem,
    hourBranch,
    nearTerm,
    adjustedTime: `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`
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
    const formatter = new Intl.DateTimeFormat("zh-CN-u-ca-chinese", { year: "numeric", month: "long", day: "numeric" });
    const parts = formatter.formatToParts(date);
    const monthText = parts.find(part => part.type === "month")?.value || "";
    const dayText = parts.find(part => part.type === "day")?.value || "";
    const relatedYear = parts.find(part => part.type === "relatedYear")?.value || year;
    const monthMap = { "正月": 1, "二月": 2, "三月": 3, "四月": 4, "五月": 5, "六月": 6, "七月": 7, "八月": 8, "九月": 9, "十月": 10, "十一月": 11, "十二月": 12 };
    const normalizedMonth = monthText.replace("闰", "");
    const lunarMonth = monthMap[normalizedMonth] || Number.parseInt(normalizedMonth, 10) || month;
    return { month: lunarMonth, label: `${relatedYear}年${monthText}${dayText}日`, isLeap: monthText.includes("闰") };
  } catch {
    return { month, label: "当前浏览器不支持农历转换", isLeap: false };
  }
}

function renderPillars(result) {
  const root = document.querySelector("#pillars");
  root.innerHTML = result.pillars.map((pillar, index) => `
    <div class="pillar">
      <small>${pillar.label}</small>
      <strong style="color:${elementColors[stemElements[pillar.stem]]}">${stems[pillar.stem]}</strong>
      <strong style="color:${elementColors[branchElements[pillar.branch]]}">${branches[pillar.branch]}</strong>
      <em>${stemYinYang[pillar.stem]}${stemElements[pillar.stem]}·${branchAnimals[pillar.branch]}</em>
      <span class="god-label">${index === 2 ? "日主" : getTenGod(result.dayStem, pillar.stem)}·藏${hiddenStems[pillar.branch].map(stem => stems[stem]).join("")}</span>
    </div>`).join("");
}

function renderElements(result) {
  const counts = Object.fromEntries(elements.map(element => [element, 0]));
  result.pillars.forEach(pillar => {
    counts[stemElements[pillar.stem]] += 1;
    counts[branchElements[pillar.branch]] += 1;
  });
  const sorted = [...elements].sort((a, b) => counts[b] - counts[a]);
  const strongest = sorted[0];
  const weakest = [...elements].sort((a, b) => counts[a] - counts[b])[0];
  const dayElement = stemElements[result.dayStem];
  document.querySelector("#element-orbit").innerHTML = `<div class="orbit-core"><strong>${dayElement}</strong><small>日主五行</small></div>`;
  document.querySelector("#element-bars").innerHTML = elements.map(element => `
    <div class="bar-row"><span>${element}</span><div class="bar"><i style="width:${counts[element] * 12.5}%;background:${elementColors[element]}"></i></div><b>${counts[element]}</b></div>
  `).join("");
  document.querySelector("#element-insight").textContent = `表层八字中${strongest}元素较显，${weakest}元素较少。“少”不等于缺乏或疾病；下方深读会进一步计入藏干与月令权重。`;

  const featured = [dayElement, strongest, weakest].filter((item, index, list) => list.indexOf(item) === index);
  while (featured.length < 3) featured.push(elements.find(item => !featured.includes(item)));
  document.querySelector("#element-readings").innerHTML = featured.map((element, index) => {
    const titles = index === 0 ? `日主·${element}` : index === 1 ? `较显·${element}` : `较少·${element}`;
    return `<article class="reading-item"><b>${titles}</b><p>${elementCopy[element].nature}。${elementCopy[element].organ}。${elementCopy[element].care}</p></article>`;
  }).join("");
  return { counts, strongest, weakest, dayElement };
}

function renderChartAnalysis(result) {
  const analysis = analyzeChart(result);
  const dayStemName = `${stems[result.dayStem]}${analysis.dayElement}`;
  const supportPercent = Math.round(analysis.supportRatio * 100);
  const dominantGods = analysis.sortedGods.slice(0, 2).map(([god]) => god);
  document.querySelector("#chart-summary").innerHTML = `
    <div class="summary-stat"><small>日主</small><strong>${stemYinYang[result.dayStem]}${dayStemName}</strong><span>${elementCopy[analysis.dayElement].nature}</span></div>
    <div class="summary-stat"><small>简化强弱</small><strong>${analysis.strength}</strong><span>生扶权重约 ${supportPercent}%，已计入月令与藏干</span></div>
    <div class="summary-stat"><small>主要十神</small><strong>${dominantGods.join("·")}</strong><span>${dominantGods.map(god => tenGodCopy[god].brief).join("，")}</span></div>`;

  const monthMainStem = hiddenStems[result.pillars[1].branch][0];
  const godEntries = [
    ["年干", result.pillars[0].stem], ["月干", result.pillars[1].stem],
    ["时干", result.pillars[3].stem], ["月令本气", monthMainStem]
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
    <article class="narrative-item"><b>平衡方向·${analysis.balanceElements.join("与")}</b><p>${analysis.balanceCopy}这是观察方向，不作为穿衣、起名、投资或治疗依据。</p></article>`;
  return analysis;
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

function renderZiwei(year, month, day, hourBranch) {
  const lunar = getLunarDate(year, month, day);
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
  const natalBranches = result.pillars.map(pillar => pillar.branch);
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
  const adjacent = getAdjacentJieDate(birthData.year, birthData.month, birthData.day, birthData.hour, birthData.minute, forward);
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
    ? `按“阳年男、阴年女顺；阴年男、阳年女逆”排运。`
    : `未选择性别，当前仅按顺排预览；逆排结果会不同。`;
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

function switchTab(targetId) {
  document.querySelectorAll(".report-nav button").forEach(button => button.classList.toggle("active", button.dataset.target === targetId));
  document.querySelectorAll(".report-panel").forEach(panel => panel.classList.toggle("active", panel.id === targetId));
}

document.querySelectorAll(".report-nav button").forEach(button => {
  button.addEventListener("click", () => switchTab(button.dataset.target));
});

document.querySelector("#edit-profile").addEventListener("click", () => {
  document.querySelector("#birth-form").scrollIntoView({ behavior: "smooth", block: "center" });
  document.querySelector("#birth-date").focus({ preventScroll: true });
});

document.querySelector("#birth-form").addEventListener("submit", event => {
  event.preventDefault();
  const hint = document.querySelector("#form-hint");
  const dateValue = document.querySelector("#birth-date").value;
  const timeValue = document.querySelector("#birth-time").value;
  if (!dateValue || !timeValue) return;

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

  let [year, month, day] = dateValue.split("-").map(Number);
  let [hour, minute] = timeValue.split(":").map(Number);
  let correctionNote = "标准时间排盘";
  if (document.querySelector("#solar-correction").checked) {
    const longitude = Number(document.querySelector("#longitude").value);
    const timezone = Number(document.querySelector("#timezone").value);
    if (!Number.isFinite(longitude) || document.querySelector("#longitude").value === "") {
      hint.textContent = "请先填写出生地经度，再启用平太阳时校正。";
      hint.classList.add("error");
      document.querySelector("#longitude").focus();
      return;
    }
    const adjusted = applySolarCorrection(dateValue, timeValue, longitude, timezone);
    ({ year, month, day, hour, minute } = adjusted);
    correctionNote = `平太阳时 ${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")} · 校正${adjusted.correctionMinutes >= 0 ? "+" : ""}${adjusted.correctionMinutes}分`;
  }

  hint.textContent = "建议使用出生证明上的准确时间";
  hint.classList.remove("error");
  const result = calculateBazi(year, month, day, hour, minute);
  renderPillars(result);
  const elementSummary = renderElements(result);
  const chartAnalysis = renderChartAnalysis(result);
  renderFiveSenseRecommendations(chartAnalysis);
  const gender = document.querySelector("#gender").value;
  renderLuck(result, chartAnalysis, { year, month, day, hour, minute }, gender);
  renderZiwei(year, month, day, result.hourBranch);
  renderHealth(elementSummary);

  const name = document.querySelector("#name").value.trim();
  document.querySelector("#report-name").textContent = name || "你";
  document.querySelector("#solar-time-note").textContent = correctionNote + (result.nearTerm ? " · 交节附近请复核" : "");
  document.querySelector("#reading").hidden = false;
  switchTab("bazi-panel");
  document.querySelector("#reading").scrollIntoView({ behavior: "smooth", block: "start" });
});

const today = new Date();
const todayIso = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
const defaultYear = Math.max(1901, today.getFullYear() - 30);
document.querySelector("#birth-date").max = todayIso;
document.querySelector("#birth-date").value = `${defaultYear}-06-15`;
