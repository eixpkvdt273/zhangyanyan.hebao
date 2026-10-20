/* ============================================================
   补充信息材料表（material.js）—— 新补充材料层纯数据
   架构：4 维度 = ①globalItems(通用4条) + ②types(19类型模板) + ③diseaseMap(每病一行) + ④specialCases(独苗)
   病理三档机制已退役（20261020 三段式改造）：病理条全部显式配置，层归属见 LAYER_ASSIGN
   拒保病：type=真实类型(复用模板) + isRejectAll:true 标志；渲染时拒保病加"说明块+指路"，材料标"仅供复核/其他险种"
   specialCases：先心4个(房缺/室缺/卵圆孔未闭/动脉导管未闭)
   归类型规则见 _材料表架构设计_v1.md 第六节（2026-10-14 定稿）
   说明：本文件为纯数据，已被 5.0 运行时引用（_useMaterialMap 开关，默认 true）。
   ============================================================ */
const MATERIAL = {
  "globalItems": [
    "确诊时间、病程及目前状态（何时发现、因何发现、是否痊愈/控制情况）",
    "目前治疗情况：用药请注明药名、剂量、频率。",
    "随访及复查材料（病历、检查单等），如有请提供",
    "如有住院或手术史，请提供住院病案首页、出院记录、手术记录及检查检验报告等完整材料。"
  ],
  "types": [
    {
      "id": "tumor",
      "name": "肿瘤型",
      "pathologyNeed": "none",
      "items": [
        "病理报告（含组织学类型及分化程度）",
        "TNM分期及治疗方案",
        "手术、放化疗及靶向治疗情况",
        "肿瘤标志物结果（如有）及历次复查对比"
      ]
    },
    {
      "id": "nodule",
      "name": "结节型",
      "pathologyNeed": "none",
      "items": [
        "影像报告（含分级）",
        "病理报告（如有手术或穿刺/活检史，请提供术后或穿刺病理报告）"
      ]
    },
    {
      "id": "space",
      "name": "占位型",
      "pathologyNeed": "none",
      "items": [
        "影像检查结果（含大小、位置及历次复查对比）",
        "病理报告（如有手术或穿刺/活检史，请提供术后或穿刺病理报告）"
      ]
    },
    {
      "id": "stone",
      "name": "结石型",
      "pathologyNeed": "none",
      "items": [
        "影像检查：结石大小、位置、数目及历次复查对比",
        "有无梗阻（肾积水/胆管扩张）",
        "功能检查（肾功能/肝功能）",
        "是否已碎石/手术，治疗时间",
        "有无感染等并发症"
      ]
    },
    {
      "id": "polyp",
      "name": "息肉型",
      "pathologyNeed": "none",
      "items": [
        "内镜检查及病理结果（类型、大小、数量、发现时间）及历次复查对比",
        "手术及病理情况（如有切除，提供切缘及术后病理）"
      ]
    },
    {
      "id": "chronic",
      "name": "慢病型",
      "pathologyNeed": "none",
      "items": [
        "化验或检查报告（含核心指标数值及测量记录）",
        "目前控制情况",
        "用药情况（药名、剂量、频率）",
        "有无相关并发症（靶器官损害）"
      ]
    },
    {
      "id": "cardio",
      "name": "心血管型",
      "pathologyNeed": "none",
      "items": [
        "确诊及治疗经过（是否住院、手术、介入）",
        "冠脉造影/CTA、支架或搭桥情况（如有）",
        "心电图、心脏彩超检查结果",
        "心功能分级（NYHA）情况（如有）",
        "抗凝、抗血小板或降脂药物治疗史（如有）"
      ]
    },
    {
      "id": "resp",
      "name": "呼吸型",
      "pathologyNeed": "none",
      "items": [
        "肺功能检查结果",
        "胸部CT/胸片检查结果",
        "是否规律用药及药名、剂量、频率",
        "发作频率及目前控制情况"
      ]
    },
    {
      "id": "digest",
      "name": "消化型",
      "pathologyNeed": "none",
      "items": [
        "胃镜/肠镜或相关检查报告",
        "病理检查结果（如曾活检，请提供）",
        "幽门螺杆菌（HP）检测结果",
        "是否手术切除及术后恢复情况"
      ]
    },
    {
      "id": "hepatobil",
      "name": "肝胆胰型",
      "pathologyNeed": "none",
      "items": [
        "腹部B超或CT检查（肝胆胰脾）结果",
        "肝功能检查结果",
        "是否手术切除及术后病理（如胆囊/胰腺切除）"
      ]
    },
    {
      "id": "urinary",
      "name": "泌尿型",
      "pathologyNeed": "none",
      "items": [
        "泌尿系统B超或CT检查结果",
        "肾功能及尿常规检查结果",
        "是否手术及术后恢复情况",
        "有无积水、感染等并发症"
      ]
    },
    {
      "id": "endocrine",
      "name": "内分泌型",
      "pathologyNeed": "none",
      "items": [
        "甲状腺功能/相关激素检查结果",
        "影像检查结果",
        "是否服药及药名、剂量、频率",
        "有无相关症状及表现"
      ]
    },
    {
      "id": "blood",
      "name": "血液型",
      "pathologyNeed": "none",
      "items": [
        "血常规检查结果",
        "病因是否明确",
        "是否治疗及具体方案",
        "复查恢复情况"
      ]
    },
    {
      "id": "mental",
      "name": "精神型",
      "pathologyNeed": "none",
      "items": [
        "确诊及治疗情况",
        "目前用药及剂量、频率",
        "病情稳定期时长",
        "有无住院或复发史"
      ]
    },
    {
      "id": "musculo",
      "name": "骨骼肌肉免疫型",
      "pathologyNeed": "none",
      "items": [
        "影像学检查结果（X线/MRI）",
        "是否影响活动功能",
        "是否用药及具体方案（药名、剂量、频率）",
        "相关化验指标（如血尿酸、类风湿因子）"
      ]
    },
    {
      "id": "preg",
      "name": "妊娠新生儿型",
      "pathologyNeed": "none",
      "items": [
        "孕周/出生史及分娩方式",
        "相关指标（血压/血糖/OGTT等）",
        "是否住院治疗及经过",
        "产后/出生后恢复及随访情况"
      ]
    },
    {
      "id": "gyn",
      "name": "妇科生殖型",
      "pathologyNeed": "none",
      "items": [
        "妇科B超/宫腔镜检查结果",
        "相关病理检查（如TCT/HPV/活检）",
        "是否手术及术后情况"
      ]
    },
    {
      "id": "malegen",
      "name": "男性生殖型",
      "pathologyNeed": "none",
      "items": [
        "泌尿系B超（含精索/睾丸/阴囊）检查结果",
        "是否手术及术后恢复情况",
        "有无疼痛、坠胀等症状"
      ]
    },
    {
      "id": "ent",
      "name": "五官型",
      "pathologyNeed": "none",
      "items": [
        "专科检查结果",
        "功能评估（视力/听力等）",
        "是否用药及方案（药名、剂量、频率）"
      ]
    },
    {
      "id": "neuro",
      "name": "神经系统型",
      "pathologyNeed": "none",
      "items": [
        "影像检查结果（CT/MRI）及历次复查对比",
        "功能评估",
        "是否用药及方案（药名、剂量、频率）"
      ]
    }
  ],
  "diseaseMap": [
    {
      "disease": "原发性高血压（收缩压达到140mmHg或舒张压达到90mmHg）",
      "type": "慢病型",
      "metrics": "门诊病历病史材料（含发现时最高血压、目前规律治疗及血压控制情况、有无并发症）",
      "extraItems": [
        "心电图及心脏彩超检查结果",
        "肾功能及尿常规检查结果",
        "血糖、血脂等代谢指标情况",
        "吸烟、饮酒习惯及身高体重（BMI）"
      ]
    },
    {
      "disease": "低血压（收缩压低于90mmHg或舒张压低于60mmHg）",
      "type": "心血管型"
    },
    {
      "disease": "窦性心动过速（窦速）",
      "type": "心血管型"
    },
    {
      "disease": "窦性心动过缓（窦缓）",
      "type": "心血管型"
    },
    {
      "disease": "房性心动过速（房速）",
      "type": "心血管型"
    },
    {
      "disease": "室上性心动过速（室上速）",
      "type": "心血管型"
    },
    {
      "disease": "室性心动过速（室速）",
      "type": "心血管型",
      "isRejectAll": true
    },
    {
      "disease": "室性期前收缩（室性早搏",
      "type": "心血管型"
    },
    {
      "disease": "预激综合征",
      "type": "心血管型"
    },
    {
      "disease": "房室传导阻滞",
      "type": "心血管型"
    },
    {
      "disease": "右束支传导阻滞",
      "type": "心血管型"
    },
    {
      "disease": "双分支阻滞",
      "type": "心血管型"
    },
    {
      "disease": "三分支阻滞",
      "type": "心血管型"
    },
    {
      "disease": "窦性心动不齐（窦不齐）",
      "type": "心血管型"
    },
    {
      "disease": "窦性停搏",
      "type": "心血管型",
      "isRejectAll": true
    },
    {
      "disease": "窦房传导阻滞",
      "type": "心血管型",
      "isRejectAll": true
    },
    {
      "disease": "病态窦房结综合征",
      "type": "心血管型",
      "isRejectAll": true
    },
    {
      "disease": "房性期前收缩（房性早搏",
      "type": "心血管型"
    },
    {
      "disease": "心房扑动",
      "type": "心血管型",
      "isRejectAll": true
    },
    {
      "disease": "心室扑动",
      "type": "心血管型",
      "isRejectAll": true
    },
    {
      "disease": "心房颤动（房颤",
      "type": "心血管型"
    },
    {
      "disease": "心室颤动（室颤",
      "type": "心血管型",
      "isRejectAll": true
    },
    {
      "disease": "心脏起搏器植入术后",
      "type": "心血管型",
      "isRejectAll": true
    },
    {
      "disease": "左束支传导阻滞",
      "type": "心血管型",
      "isRejectAll": true
    },
    {
      "disease": "st段或T波异常",
      "type": "心血管型"
    },
    {
      "disease": "异常Q波",
      "type": "心血管型",
      "isRejectAll": true
    },
    {
      "disease": "QT间期延长",
      "type": "心血管型",
      "isRejectAll": true
    },
    {
      "disease": "左室高电压",
      "type": "心血管型"
    },
    {
      "disease": "短PR综合症",
      "type": "心血管型"
    },
    {
      "disease": "PR间期延长",
      "type": "心血管型"
    },
    {
      "disease": "房间隔缺损（房缺）",
      "type": "specialCase"
    },
    {
      "disease": "室间隔缺损（室缺）",
      "type": "specialCase"
    },
    {
      "disease": "卵圆孔未闭",
      "type": "specialCase"
    },
    {
      "disease": "动脉导管未闭",
      "type": "specialCase"
    },
    {
      "disease": "右位心",
      "type": "心血管型"
    },
    {
      "disease": "法洛四联症",
      "type": "心血管型",
      "isRejectAll": true
    },
    {
      "disease": "其他先天性心脏病",
      "type": "心血管型"
    },
    {
      "disease": "冠状动脉粥样硬化性心脏病（冠心病）",
      "type": "心血管型",
      "isRejectAll": true
    },
    {
      "disease": "心绞痛",
      "type": "心血管型",
      "isRejectAll": true
    },
    {
      "disease": "心肌梗塞",
      "type": "心血管型",
      "isRejectAll": true
    },
    {
      "disease": "介入治疗术后（PTCA术后",
      "type": "心血管型",
      "isRejectAll": true
    },
    {
      "disease": "心脏搭桥术后",
      "type": "心血管型",
      "isRejectAll": true
    },
    {
      "disease": "风湿性心脏病（风心病）",
      "type": "心血管型",
      "isRejectAll": true
    },
    {
      "disease": "瓣膜性心脏病（瓣膜病）",
      "type": "心血管型",
      "isRejectAll": true
    },
    {
      "disease": "高血压性心脏病（高心病）",
      "type": "慢病型",
      "isRejectAll": true,
      "extraItems": [
        "心电图及心脏彩超检查结果",
        "心功能分级（NYHA）情况（如有）"
      ]
    },
    {
      "disease": "缺血性心脏病",
      "type": "心血管型",
      "isRejectAll": true
    },
    {
      "disease": "肺原性心脏病（肺心病）",
      "type": "心血管型",
      "isRejectAll": true
    },
    {
      "disease": "肺动脉高压",
      "type": "心血管型"
    },
    {
      "disease": "心内膜炎",
      "type": "心血管型"
    },
    {
      "disease": "心脏扩大",
      "type": "心血管型"
    },
    {
      "disease": "心肌劳损（心肌缺血）",
      "type": "心血管型"
    },
    {
      "disease": "心功能不全",
      "type": "心血管型"
    },
    {
      "disease": "心功能衰竭（心衰）",
      "type": "心血管型",
      "isRejectAll": true
    },
    {
      "disease": "心脏瓣膜疾病",
      "type": "心血管型"
    },
    {
      "disease": "心肌炎",
      "type": "心血管型"
    },
    {
      "disease": "心肌病",
      "type": "心血管型"
    },
    {
      "disease": "心脏移植术后",
      "type": "心血管型",
      "isRejectAll": true
    },
    {
      "disease": "急性心包炎",
      "type": "心血管型"
    },
    {
      "disease": "缩窄性心包炎",
      "type": "心血管型",
      "isRejectAll": true
    },
    {
      "disease": "心包积液",
      "type": "心血管型"
    },
    {
      "disease": "心包填塞",
      "type": "心血管型",
      "isRejectAll": true
    },
    {
      "disease": "白塞氏病",
      "type": "骨骼肌肉免疫型",
      "isRejectAll": true
    },
    {
      "disease": "颞动脉炎",
      "type": "骨骼肌肉免疫型"
    },
    {
      "disease": "下肢静脉曲张",
      "type": "心血管型"
    },
    {
      "disease": "血栓性静脉炎",
      "type": "心血管型"
    },
    {
      "disease": "动脉斑块",
      "type": "心血管型",
      "isRejectAll": true
    },
    {
      "disease": "静脉血栓",
      "type": "心血管型"
    },
    {
      "disease": "主动脉狭窄",
      "type": "心血管型",
      "isRejectAll": true
    },
    {
      "disease": "主动脉瘤",
      "type": "心血管型",
      "isRejectAll": true
    },
    {
      "disease": "主动脉血管瘤",
      "type": "心血管型",
      "isRejectAll": true
    },
    {
      "disease": "室壁瘤",
      "type": "心血管型",
      "isRejectAll": true
    },
    {
      "disease": "主动脉夹层",
      "type": "心血管型",
      "isRejectAll": true
    },
    {
      "disease": "克山病",
      "type": "fallback",
      "isRejectAll": true
    },
    {
      "disease": "川崎病",
      "type": "心血管型"
    },
    {
      "disease": "雷诺氏综合征（雷诺氏病）",
      "type": "骨骼肌肉免疫型",
      "isRejectAll": true
    },
    {
      "disease": "缺铁性贫血",
      "type": "血液型"
    },
    {
      "disease": "地中海贫血",
      "type": "血液型"
    },
    {
      "disease": "G6PD缺乏症",
      "type": "血液型"
    },
    {
      "disease": "巨幼细胞贫血",
      "type": "血液型",
      "isRejectAll": true
    },
    {
      "disease": "再生障碍性贫血（再障）",
      "type": "血液型",
      "isRejectAll": true
    },
    {
      "disease": "镰状细胞贫血",
      "type": "血液型",
      "isRejectAll": true
    },
    {
      "disease": "自身免疫性溶血性贫血（自免溶贫）",
      "type": "血液型",
      "isRejectAll": true
    },
    {
      "disease": "过敏性紫癜",
      "type": "血液型"
    },
    {
      "disease": "特发性血小板减少性紫癜",
      "type": "血液型"
    },
    {
      "disease": "白血病",
      "type": "肿瘤型",
      "isRejectAll": true
    },
    {
      "disease": "骨髓瘤",
      "type": "肿瘤型",
      "isRejectAll": true
    },
    {
      "disease": "淋巴瘤",
      "type": "肿瘤型",
      "isRejectAll": true
    },
    {
      "disease": "白细胞减少",
      "type": "血液型"
    },
    {
      "disease": "粒细胞增多症",
      "type": "血液型"
    },
    {
      "disease": "粒细胞缺乏",
      "type": "血液型"
    },
    {
      "disease": "浆细胞病",
      "type": "血液型"
    },
    {
      "disease": "组织细胞病",
      "type": "血液型",
      "isRejectAll": true
    },
    {
      "disease": "淋巴细胞增多症",
      "type": "血液型"
    },
    {
      "disease": "淋巴结持续肿大",
      "type": "指引确诊"
    },
    {
      "disease": "淋巴结炎",
      "type": "血液型"
    },
    {
      "disease": "真性红细胞增多症",
      "type": "血液型",
      "isRejectAll": true
    },
    {
      "disease": "继发性血小板增多",
      "type": "血液型"
    },
    {
      "disease": "原发性血小板增多症",
      "type": "血液型",
      "isRejectAll": true
    },
    {
      "disease": "原发性骨髓纤维化症",
      "type": "肿瘤型",
      "isRejectAll": true
    },
    {
      "disease": "骨髓增生异常综合征",
      "type": "肿瘤型",
      "isRejectAll": true
    },
    {
      "disease": "造血干细胞移植（骨髓移植）",
      "type": "血液型",
      "isRejectAll": true
    },
    {
      "disease": "遗传性球形细胞增多症",
      "type": "血液型",
      "isRejectAll": true
    },
    {
      "disease": "阵发性睡眠性血红蛋白尿（酱油尿）",
      "type": "血液型",
      "isRejectAll": true
    },
    {
      "disease": "遗传性出血性毛细血管扩张症",
      "type": "血液型",
      "isRejectAll": true
    },
    {
      "disease": "血友病",
      "type": "血液型",
      "isRejectAll": true
    },
    {
      "disease": "维生素K缺乏症",
      "type": "血液型",
      "isRejectAll": true
    },
    {
      "disease": "凝血功能障碍",
      "type": "血液型",
      "isRejectAll": true
    },
    {
      "disease": "弥散性血管内凝血（DIC）",
      "type": "血液型",
      "isRejectAll": true
    },
    {
      "disease": "上呼吸道感染（上感）",
      "type": "呼吸型"
    },
    {
      "disease": "感冒",
      "type": "fallback"
    },
    {
      "disease": "急性气管炎",
      "type": "呼吸型"
    },
    {
      "disease": "急性支气管炎",
      "type": "呼吸型"
    },
    {
      "disease": "慢性气管炎",
      "type": "呼吸型"
    },
    {
      "disease": "支气管扩张（支扩）",
      "type": "呼吸型"
    },
    {
      "disease": "支气管哮喘（哮喘）",
      "type": "呼吸型"
    },
    {
      "disease": "肺炎（SARS",
      "type": "呼吸型"
    },
    {
      "disease": "肺气肿",
      "type": "呼吸型"
    },
    {
      "disease": "慢性阻塞性肺疾病（慢阻肺/COPD）",
      "type": "呼吸型",
      "isRejectAll": true
    },
    {
      "disease": "肺大泡",
      "type": "呼吸型"
    },
    {
      "disease": "肺结核（肺痨/痨病）",
      "type": "呼吸型"
    },
    {
      "disease": "肺脓肿（肺脓疡）",
      "type": "呼吸型"
    },
    {
      "disease": "肺源性心脏病（肺心病）",
      "type": "心血管型",
      "isRejectAll": true
    },
    {
      "disease": "肺不张",
      "type": "呼吸型"
    },
    {
      "disease": "肺水肿",
      "type": "呼吸型",
      "isRejectAll": true
    },
    {
      "disease": "肺纤维化",
      "type": "呼吸型",
      "isRejectAll": true
    },
    {
      "disease": "间质性肺病（间质性肺炎）",
      "type": "呼吸型",
      "isRejectAll": true
    },
    {
      "disease": "尘肺",
      "type": "呼吸型",
      "isRejectAll": true
    },
    {
      "disease": "矽肺",
      "type": "呼吸型",
      "isRejectAll": true
    },
    {
      "disease": "石棉肺",
      "type": "呼吸型",
      "isRejectAll": true
    },
    {
      "disease": "肺栓塞",
      "type": "呼吸型",
      "isRejectAll": true
    },
    {
      "disease": "肺癌",
      "type": "肿瘤型",
      "isRejectAll": true
    },
    {
      "disease": "肺寄生虫病",
      "type": "呼吸型",
      "isRejectAll": true
    },
    {
      "disease": "肺结节",
      "type": "结节型",
      "grading": "Lung-RADS",
      "imagingItem": "胸部CT报告（含Lung-RADS分级、影像描述及历次复查对比）",
      "extraItems": [
        "有无吸烟史（烟龄、日吸烟量）",
        "目前症状（咳嗽、咯血、胸痛等）"
      ]
    },
    {
      "disease": "肺部异常密度影",
      "type": "呼吸型"
    },
    {
      "disease": "癌性胸膜炎及胸腔积液",
      "type": "肿瘤型",
      "isRejectAll": true
    },
    {
      "disease": "结核性胸膜炎",
      "type": "呼吸型"
    },
    {
      "disease": "胸膜炎或胸腔积液类型不详",
      "type": "呼吸型"
    },
    {
      "disease": "气胸",
      "type": "呼吸型"
    },
    {
      "disease": "血气胸",
      "type": "呼吸型"
    },
    {
      "disease": "脓胸",
      "type": "呼吸型"
    },
    {
      "disease": "甲型肝炎（甲肝）",
      "type": "肝胆胰型"
    },
    {
      "disease": "急性乙型肝炎（急性乙肝）",
      "type": "肝胆胰型"
    },
    {
      "disease": "乙肝病毒携带者（澳抗阳性",
      "type": "肝胆胰型"
    },
    {
      "disease": "乙肝小三阳（HbsAg阳性且HbeAb阳性且HbcAb阳性）",
      "type": "肝胆胰型"
    },
    {
      "disease": "乙肝大三阳（HbsAg阳性且HbeAg阳性且HbcAb阳性）",
      "type": "肝胆胰型"
    },
    {
      "disease": "慢性迁延性肝炎",
      "type": "肝胆胰型",
      "isRejectAll": true
    },
    {
      "disease": "慢性活动性肝炎",
      "type": "肝胆胰型",
      "isRejectAll": true
    },
    {
      "disease": "其他慢性肝炎",
      "type": "肝胆胰型",
      "isRejectAll": true
    },
    {
      "disease": "自身免疫性肝炎",
      "type": "肝胆胰型",
      "isRejectAll": true
    },
    {
      "disease": "丙型肝炎（丙肝）",
      "type": "肝胆胰型"
    },
    {
      "disease": "丁型肝炎（丁肝）",
      "type": "肝胆胰型"
    },
    {
      "disease": "戊型肝炎（戊肝）",
      "type": "肝胆胰型"
    },
    {
      "disease": "酒精性肝炎",
      "type": "肝胆胰型",
      "isRejectAll": true
    },
    {
      "disease": "药物性肝炎",
      "type": "肝胆胰型"
    },
    {
      "disease": "肝脏增大（肝大）",
      "type": "肝胆胰型"
    },
    {
      "disease": "脂肪肝",
      "type": "肝胆胰型"
    },
    {
      "disease": "肝血管瘤",
      "type": "占位型",
      "organ": "肝功能检查结果",
      "imagingItem": "腹部彩超报告（含病灶大小、位置及历次复查对比）",
      "pathologyNeedOverride": "none"
    },
    {
      "disease": "肝囊肿",
      "type": "占位型",
      "organ": "肝功能检查结果",
      "imagingItem": "腹部彩超报告（含病灶大小、位置及历次复查对比）",
      "pathologyNeedOverride": "none"
    },
    {
      "disease": "多囊肝",
      "type": "肝胆胰型",
      "isRejectAll": true
    },
    {
      "disease": "肝脓肿",
      "type": "肝胆胰型"
    },
    {
      "disease": "肝功能异常（肝酶异常）",
      "type": "肝胆胰型"
    },
    {
      "disease": "肝硬化",
      "type": "肝胆胰型",
      "isRejectAll": true
    },
    {
      "disease": "原发性硬化性胆管炎",
      "type": "肝胆胰型",
      "isRejectAll": true
    },
    {
      "disease": "肝癌",
      "type": "肿瘤型",
      "isRejectAll": true
    },
    {
      "disease": "肝昏迷",
      "type": "肝胆胰型",
      "isRejectAll": true
    },
    {
      "disease": "肝性脑病",
      "type": "肝胆胰型",
      "isRejectAll": true
    },
    {
      "disease": "肝移植术后",
      "type": "肝胆胰型",
      "isRejectAll": true
    },
    {
      "disease": "胆结石",
      "type": "结石型",
      "imagingItem": "腹部彩超报告（含结石大小、位置、数目及历次复查对比）",
      "extraItems": [
        "有无胆绞痛、黄疸、胰腺炎史",
        "是否已手术切除胆囊及术后恢复"
      ]
    },
    {
      "disease": "胆囊炎",
      "type": "肝胆胰型"
    },
    {
      "disease": "胆囊息肉",
      "type": "息肉型"
    },
    {
      "disease": "胆囊癌",
      "type": "肿瘤型",
      "isRejectAll": true
    },
    {
      "disease": "脾肿大",
      "type": "血液型",
      "isRejectAll": true
    },
    {
      "disease": "脾功能亢进（脾亢）",
      "type": "血液型",
      "isRejectAll": true
    },
    {
      "disease": "脾修补",
      "type": "fallback"
    },
    {
      "disease": "胰腺炎",
      "type": "肝胆胰型"
    },
    {
      "disease": "胰腺囊肿",
      "type": "占位型",
      "organ": "胰酶/淀粉酶及CA19-9检查结果",
      "imagingItem": "腹部彩超或CT/MRI报告（含病灶大小、位置及历次复查对比）"
    },
    {
      "disease": "胰腺脓肿",
      "type": "肝胆胰型"
    },
    {
      "disease": "胰腺癌",
      "type": "肿瘤型",
      "isRejectAll": true
    },
    {
      "disease": "腹膜炎",
      "type": "消化型"
    },
    {
      "disease": "腹水",
      "type": "消化型"
    },
    {
      "disease": "疝（疝气）",
      "type": "消化型"
    },
    {
      "disease": "门静脉高压",
      "type": "肝胆胰型",
      "isRejectAll": true
    },
    {
      "disease": "黄疸（高胆红素血症）",
      "type": "肝胆胰型"
    },
    {
      "disease": "胃粘膜脱垂症",
      "type": "消化型"
    },
    {
      "disease": "消化道憩室病（食道",
      "type": "消化型"
    },
    {
      "disease": "胃穿孔",
      "type": "消化型"
    },
    {
      "disease": "胃出血",
      "type": "消化型"
    },
    {
      "disease": "幽门螺旋杆菌阳性",
      "type": "消化型"
    },
    {
      "disease": "胃炎",
      "type": "消化型"
    },
    {
      "disease": "上消化道溃疡",
      "type": "消化型"
    },
    {
      "disease": "胃癌",
      "type": "肿瘤型",
      "isRejectAll": true
    },
    {
      "disease": "胃大部切除术后",
      "type": "消化型",
      "isRejectAll": true
    },
    {
      "disease": "胃部息肉",
      "type": "息肉型"
    },
    {
      "disease": "胃全切除术后",
      "type": "消化型",
      "isRejectAll": true
    },
    {
      "disease": "肠息肉",
      "type": "息肉型"
    },
    {
      "disease": "急性肠炎（胃肠炎/腹泻）",
      "type": "消化型"
    },
    {
      "disease": "肠易激综合征",
      "type": "消化型"
    },
    {
      "disease": "慢性结肠炎",
      "type": "消化型"
    },
    {
      "disease": "慢性直肠炎",
      "type": "消化型"
    },
    {
      "disease": "溃疡性结肠炎",
      "type": "消化型",
      "isRejectAll": true
    },
    {
      "disease": "克罗恩病",
      "type": "消化型",
      "isRejectAll": true
    },
    {
      "disease": "肠结核",
      "type": "消化型",
      "isRejectAll": true
    },
    {
      "disease": "阑尾炎",
      "type": "消化型"
    },
    {
      "disease": "肠梗阻",
      "type": "消化型"
    },
    {
      "disease": "巨结肠",
      "type": "消化型",
      "isRejectAll": true
    },
    {
      "disease": "肠癌",
      "type": "肿瘤型",
      "isRejectAll": true
    },
    {
      "disease": "结肠黑病变",
      "type": "消化型"
    },
    {
      "disease": "痔（痔疮）",
      "type": "消化型"
    },
    {
      "disease": "肛周脓肿",
      "type": "消化型"
    },
    {
      "disease": "肛门脓肿",
      "type": "消化型"
    },
    {
      "disease": "肛瘘",
      "type": "消化型"
    },
    {
      "disease": "肛裂",
      "type": "消化型"
    },
    {
      "disease": "肛门息肉",
      "type": "息肉型"
    },
    {
      "disease": "胃食管反流病（反流性食管炎/反流性食道炎）",
      "type": "消化型"
    },
    {
      "disease": "食管癌（食道癌）",
      "type": "肿瘤型",
      "isRejectAll": true
    },
    {
      "disease": "食管静脉曲张（食道静脉曲张）",
      "type": "消化型",
      "isRejectAll": true
    },
    {
      "disease": "食管狭窄（食道狭窄）",
      "type": "消化型"
    },
    {
      "disease": "食管憩室（食道憩室）",
      "type": "消化型"
    },
    {
      "disease": "食管裂孔疝（食道裂孔疝）",
      "type": "消化型"
    },
    {
      "disease": "乳腺纤维瘤",
      "type": "占位型",
      "imagingItem": "乳腺B超或钼靶报告（含BI-RADS分级、影像描述及历次复查对比）"
    },
    {
      "disease": "乳腺增生",
      "type": "妇科生殖型",
      "imagingItem": "乳腺B超或钼靶报告（含BI-RADS分级、影像描述及历次复查对比）"
    },
    {
      "disease": "乳腺炎",
      "type": "妇科生殖型"
    },
    {
      "disease": "乳腺结节",
      "type": "结节型",
      "grading": "BI-RADS",
      "imagingItem": "乳腺B超或钼靶报告（含BI-RADS分级、影像描述及历次复查对比）",
      "extraItems": [
        "有无乳头溢液、皮肤改变等症状"
      ]
    },
    {
      "disease": "甲状腺结节",
      "type": "结节型",
      "grading": "TI-RADS",
      "imagingItem": "甲状腺B超报告（含TI-RADS分级、影像描述及历次复查对比）",
      "extraItems": [
        "甲状腺功能检查（FT3/FT4/TSH）",
        "目前用药情况（请注明所有药名、剂量、频率，如优甲乐、赛治等）"
      ]
    },
    {
      "disease": "乳腺原位癌",
      "type": "肿瘤型",
      "isRejectAll": true
    },
    {
      "disease": "乳腺癌",
      "type": "肿瘤型",
      "isRejectAll": true
    },
    {
      "disease": "乳腺隆胸手术",
      "type": "妇科生殖型"
    },
    {
      "disease": "盆腔炎",
      "type": "妇科生殖型"
    },
    {
      "disease": "卵巢炎",
      "type": "妇科生殖型"
    },
    {
      "disease": "附件炎",
      "type": "妇科生殖型"
    },
    {
      "disease": "输卵管炎",
      "type": "妇科生殖型"
    },
    {
      "disease": "卵巢囊肿",
      "type": "占位型",
      "imagingItem": "妇科B超（子宫及双附件，含历次复查对比）"
    },
    {
      "disease": "附件囊肿",
      "type": "占位型",
      "imagingItem": "妇科B超报告（子宫及双附件，含病灶大小及历次复查对比）"
    },
    {
      "disease": "多囊卵巢综合症",
      "type": "妇科生殖型"
    },
    {
      "disease": "子宫肌瘤",
      "type": "占位型",
      "imagingItem": "妇科B超（子宫及双附件，含历次复查对比）"
    },
    {
      "disease": "子宫腺肌症",
      "type": "妇科生殖型"
    },
    {
      "disease": "子宫内膜息肉",
      "type": "息肉型"
    },
    {
      "disease": "子宫内膜增生",
      "type": "妇科生殖型"
    },
    {
      "disease": "不孕症",
      "type": "妊娠新生儿型"
    },
    {
      "disease": "功能性子宫出血（功血）",
      "type": "妇科生殖型"
    },
    {
      "disease": "畸胎瘤",
      "type": "占位型",
      "organ": "AFP、β-HCG检查结果（CA125/CA199 可作参考）",
      "imagingItem": "妇科B超报告（子宫及双附件，含病灶大小及历次复查对比）",
      "extraItems": [
        "确诊时间及病理报告"
      ]
    },
    {
      "disease": "子宫脱垂",
      "type": "妇科生殖型"
    },
    {
      "disease": "子宫内膜异位症",
      "type": "妇科生殖型"
    },
    {
      "disease": "巧克力囊肿",
      "type": "占位型",
      "imagingItem": "妇科B超报告（子宫及双附件，含病灶大小及历次复查对比）"
    },
    {
      "disease": "葡萄胎",
      "type": "妇科生殖型"
    },
    {
      "disease": "宫颈糜烂",
      "type": "妇科生殖型",
      "imagingItem": "宫颈专科检查（含TCT、HPV等报告及历次复查对比）",
      "excludeItems": ["相关病理检查（如TCT/HPV/活检）"]
    },
    {
      "disease": "宫颈纳囊",
      "type": "妇科生殖型",
      "imagingItem": "宫颈专科检查（含TCT、HPV等报告及历次复查对比）",
      "excludeItems": ["相关病理检查（如TCT/HPV/活检）"]
    },
    {
      "disease": "宫颈上皮非典型增生",
      "type": "妇科生殖型",
      "imagingItem": "宫颈专科检查（含TCT、HPV等报告及历次复查对比）",
      "excludeItems": ["相关病理检查（如TCT/HPV/活检）"]
    },
    {
      "disease": "慢性宫颈炎",
      "type": "妇科生殖型",
      "imagingItem": "宫颈专科检查（含TCT、HPV等报告及历次复查对比）",
      "excludeItems": ["相关病理检查（如TCT/HPV/活检）"]
    },
    {
      "disease": "宫颈息肉",
      "type": "息肉型"
    },
    {
      "disease": "宫颈原位癌",
      "type": "肿瘤型",
      "isRejectAll": true
    },
    {
      "disease": "宫颈癌",
      "type": "肿瘤型",
      "isRejectAll": true
    },
    {
      "disease": "阴道炎",
      "type": "妇科生殖型"
    },
    {
      "disease": "不规则阴道出血",
      "type": "妇科生殖型"
    },
    {
      "disease": "外阴炎",
      "type": "妇科生殖型"
    },
    {
      "disease": "前列腺炎",
      "type": "泌尿型"
    },
    {
      "disease": "前列腺增生",
      "type": "泌尿型"
    },
    {
      "disease": "前列腺肥大",
      "type": "泌尿型"
    },
    {
      "disease": "前列腺钙化",
      "type": "泌尿型"
    },
    {
      "disease": "前列腺结石",
      "type": "结石型",
      "imagingItem": "前列腺B超报告（含结石大小、位置、数目及历次复查对比）",
      "extraItems": [
        "有无排尿困难、会阴不适等症状"
      ]
    },
    {
      "disease": "前列腺癌",
      "type": "肿瘤型",
      "isRejectAll": true
    },
    {
      "disease": "睾丸鞘膜积液",
      "type": "男性生殖型"
    },
    {
      "disease": "精索静脉曲张",
      "type": "男性生殖型"
    },
    {
      "disease": "睾丸炎",
      "type": "男性生殖型"
    },
    {
      "disease": "肾囊肿",
      "type": "占位型",
      "organ": "肾功能检查结果",
      "imagingItem": "腹部彩超报告（含病灶大小、位置及历次复查对比）",
      "pathologyNeedOverride": "none"
    },
    {
      "disease": "多囊肾",
      "type": "泌尿型",
      "isRejectAll": true
    },
    {
      "disease": "肾炎",
      "type": "泌尿型"
    },
    {
      "disease": "IgA肾病",
      "type": "泌尿型",
      "isRejectAll": true
    },
    {
      "disease": "肾盂肾炎",
      "type": "泌尿型"
    },
    {
      "disease": "肾病综合征",
      "type": "泌尿型",
      "isRejectAll": true
    },
    {
      "disease": "肾结石",
      "type": "结石型",
      "imagingItem": "泌尿系彩超报告（含结石大小、位置、数目及历次复查对比）",
      "extraItems": [
        "尿蛋白、尿潜血",
        "有无反复发作"
      ]
    },
    {
      "disease": "泌尿系结石",
      "type": "结石型",
      "imagingItem": "泌尿系彩超报告（含结石大小、位置、数目及历次复查对比）",
      "extraItems": [
        "尿蛋白、尿潜血",
        "有无反复发作"
      ]
    },
    {
      "disease": "输尿管结石",
      "type": "结石型",
      "imagingItem": "泌尿系彩超报告（含结石大小、位置、数目及历次复查对比）",
      "extraItems": [
        "尿蛋白、尿潜血",
        "有无反复发作"
      ]
    },
    {
      "disease": "肾错构瘤",
      "type": "占位型",
      "organ": "肾功能检查结果",
      "imagingItem": "腹部彩超或CT报告（含病灶大小、位置及历次复查对比）"
    },
    {
      "disease": "肾切除术后（单侧）",
      "type": "泌尿型"
    },
    {
      "disease": "肾周围脓肿",
      "type": "泌尿型"
    },
    {
      "disease": "肾小管酸中毒",
      "type": "泌尿型",
      "isRejectAll": true
    },
    {
      "disease": "肾动脉狭窄",
      "type": "泌尿型",
      "isRejectAll": true
    },
    {
      "disease": "肾动脉栓塞",
      "type": "泌尿型",
      "isRejectAll": true
    },
    {
      "disease": "小动脉性肾硬化症",
      "type": "泌尿型",
      "isRejectAll": true
    },
    {
      "disease": "肾功能衰竭（肾衰）",
      "type": "泌尿型",
      "isRejectAll": true
    },
    {
      "disease": "尿毒症",
      "type": "泌尿型",
      "isRejectAll": true
    },
    {
      "disease": "肾透析治疗",
      "type": "泌尿型",
      "isRejectAll": true
    },
    {
      "disease": "肾积水",
      "type": "泌尿型"
    },
    {
      "disease": "肾移植术后",
      "type": "泌尿型",
      "isRejectAll": true
    },
    {
      "disease": "肾功能异常",
      "type": "泌尿型"
    },
    {
      "disease": "膀胱癌",
      "type": "肿瘤型",
      "isRejectAll": true
    },
    {
      "disease": "膀胱炎",
      "type": "泌尿型"
    },
    {
      "disease": "尿道下裂",
      "type": "泌尿型"
    },
    {
      "disease": "尿路感染",
      "type": "泌尿型"
    },
    {
      "disease": "尿蛋白异常",
      "type": "指引确诊"
    },
    {
      "disease": "尿潜血异常（男性）",
      "type": "指引确诊"
    },
    {
      "disease": "尿潜血异常（女性）",
      "type": "指引确诊"
    },
    {
      "disease": "血糖升高",
      "type": "慢病型",
      "metrics": "化验报告（含空腹血糖、餐后2小时血糖、糖化血红蛋白）",
      "extraItems": [
        "尿微量白蛋白及肾功能检查结果",
        "眼底检查结果",
        "血压、血脂等合并情况"
      ]
    },
    {
      "disease": "妊娠糖尿病",
      "type": "妊娠新生儿型"
    },
    {
      "disease": "妊娠高血压",
      "type": "妊娠新生儿型"
    },
    {
      "disease": "宫外孕",
      "type": "妊娠新生儿型"
    },
    {
      "disease": "剖腹产",
      "type": "妊娠新生儿型"
    },
    {
      "disease": "怀孕",
      "type": "妊娠新生儿型"
    },
    {
      "disease": "人工受孕（试管婴儿）",
      "type": "妇科生殖型"
    },
    {
      "disease": "人工流产",
      "type": "妊娠新生儿型"
    },
    {
      "disease": "非人工流产",
      "type": "妊娠新生儿型"
    },
    {
      "disease": "其他异常妊娠",
      "type": "妊娠新生儿型"
    },
    {
      "disease": "甲状腺功能亢进",
      "type": "内分泌型",
      "imagingItem": "甲状腺B超报告（含影像描述及历次复查对比）"
    },
    {
      "disease": "甲状腺功能减退",
      "type": "内分泌型",
      "imagingItem": "甲状腺B超报告（含影像描述及历次复查对比）"
    },
    {
      "disease": "甲状腺腺瘤",
      "type": "占位型",
      "organ": "甲状腺功能检查结果",
      "imagingItem": "甲状腺B超报告（含TI-RADS分级、影像描述及历次复查对比）"
    },
    {
      "disease": "甲状腺炎",
      "type": "内分泌型",
      "imagingItem": "甲状腺B超报告（含影像描述及历次复查对比）"
    },
    {
      "disease": "甲状腺癌",
      "type": "肿瘤型",
      "isRejectAll": true
    },
    {
      "disease": "甲状旁腺功能亢进",
      "type": "内分泌型",
      "imagingItem": "颈部超声或核素显像（MIBI）报告（含甲状旁腺位置及大小）"
    },
    {
      "disease": "甲状旁腺功能减退",
      "type": "内分泌型",
      "excludeItems": [
        "影像检查结果"
      ]
    },
    {
      "disease": "甲状旁腺腺瘤",
      "type": "占位型",
      "organ": "甲状旁腺激素及血钙检查结果",
      "imagingItem": "甲状旁腺B超或核素显像（MIBI）报告（含病灶位置及大小）"
    },
    {
      "disease": "高血脂（高胆固醇）",
      "type": "慢病型",
      "metrics": "化验报告（含血脂四项）",
      "extraItems": [
        "肝功能检查结果（评估用药影响）",
        "有无心脑血管并发症"
      ]
    },
    {
      "disease": "高血脂（高甘油三酯）",
      "type": "慢病型",
      "metrics": "化验报告（含血脂四项）",
      "extraItems": [
        "肝功能检查结果（评估用药影响）",
        "有无心脑血管并发症"
      ]
    },
    {
      "disease": "低血糖",
      "type": "慢病型",
      "metrics": "化验报告（含血糖数值）及发作情况"
    },
    {
      "disease": "糖原累积病",
      "type": "内分泌型",
      "isRejectAll": true
    },
    {
      "disease": "痛风或尿酸升高",
      "type": "慢病型",
      "metrics": "化验报告（含血尿酸，历次对比）",
      "extraItems": [
        "肾功能检查结果（排查尿酸相关肾损害）",
        "关节超声或双能CT（尿酸盐结晶）结果",
        "发作频率、诱因及受累关节情况"
      ]
    },
    {
      "disease": "垂体瘤",
      "type": "占位型",
      "organ": "垂体激素六项检查、视力视野检查",
      "imagingItem": "垂体MRI报告（含鞍区占位大小及历次复查对比）"
    },
    {
      "disease": "垂体功能减退",
      "type": "内分泌型",
      "isRejectAll": true
    },
    {
      "disease": "巨人症",
      "type": "内分泌型",
      "isRejectAll": true
    },
    {
      "disease": "肢端肥大症",
      "type": "内分泌型",
      "isRejectAll": true
    },
    {
      "disease": "侏儒症",
      "type": "内分泌型"
    },
    {
      "disease": "卟啉病",
      "type": "内分泌型",
      "isRejectAll": true
    },
    {
      "disease": "尿崩症",
      "type": "内分泌型"
    },
    {
      "disease": "库欣综合征（Cushing综合征）",
      "type": "内分泌型",
      "imagingItem": "肾上腺CT或MRI报告（含肾上腺形态及占位）",
      "isRejectAll": true
    },
    {
      "disease": "皮质功能减退综合症（Addisen氏病）",
      "type": "内分泌型",
      "isRejectAll": true
    },
    {
      "disease": "原发性醛固酮增多症（原醛）",
      "type": "内分泌型",
      "imagingItem": "肾上腺CT报告（含肾上腺形态及占位）",
      "isRejectAll": true
    },
    {
      "disease": "原发性慢性肾上腺皮质功能减退症",
      "type": "泌尿型",
      "isRejectAll": true
    },
    {
      "disease": "嗜铬细胞瘤",
      "type": "占位型",
      "imagingItem": "肾上腺CT或MRI报告（含瘤体大小、位置）",
      "isRejectAll": true
    },
    {
      "disease": "脑膜炎",
      "type": "神经系统型"
    },
    {
      "disease": "脑炎",
      "type": "神经系统型"
    },
    {
      "disease": "脑瘤",
      "type": "肿瘤型",
      "isRejectAll": true
    },
    {
      "disease": "脑膜瘤",
      "type": "占位型",
      "imagingItem": "头颅MRI报告（含肿瘤大小、位置）",
      "isRejectAll": true
    },
    {
      "disease": "脑萎缩",
      "type": "神经系统型",
      "isRejectAll": true
    },
    {
      "disease": "脑积水",
      "type": "神经系统型",
      "isRejectAll": true
    },
    {
      "disease": "脑囊肿",
      "type": "占位型",
      "imagingItem": "头颅CT或MRI报告（含囊肿大小、位置）",
      "isRejectAll": true
    },
    {
      "disease": "下丘脑疾病",
      "type": "神经系统型",
      "isRejectAll": true
    },
    {
      "disease": "脑垂体疾病",
      "type": "内分泌型",
      "isRejectAll": true
    },
    {
      "disease": "脑寄生虫病",
      "type": "神经系统型",
      "isRejectAll": true
    },
    {
      "disease": "颅内出血（蛛网膜下腔出血",
      "type": "神经系统型",
      "isRejectAll": true
    },
    {
      "disease": "脑血管意外",
      "type": "神经系统型",
      "isRejectAll": true
    },
    {
      "disease": "脑中风",
      "type": "神经系统型",
      "isRejectAll": true
    },
    {
      "disease": "脑卒中",
      "type": "神经系统型",
      "isRejectAll": true
    },
    {
      "disease": "脑出血",
      "type": "神经系统型",
      "isRejectAll": true
    },
    {
      "disease": "脑梗塞",
      "type": "神经系统型",
      "isRejectAll": true
    },
    {
      "disease": "脑血栓",
      "type": "神经系统型",
      "isRejectAll": true
    },
    {
      "disease": "脑栓塞",
      "type": "神经系统型",
      "isRejectAll": true
    },
    {
      "disease": "腔隙性脑梗塞（腔梗）",
      "type": "神经系统型"
    },
    {
      "disease": "短暂性脑血管缺血（TIA）",
      "type": "神经系统型",
      "isRejectAll": true
    },
    {
      "disease": "脑血管瘤",
      "type": "占位型",
      "imagingItem": "头颅MRI报告（含瘤体大小、位置及历次复查对比）"
    },
    {
      "disease": "脑动静脉畸形（脑血管畸形）",
      "type": "神经系统型",
      "isRejectAll": true
    },
    {
      "disease": "脊髓灰质炎后遗症（小儿麻痹）",
      "type": "神经系统型"
    },
    {
      "disease": "椎管狭窄",
      "type": "神经系统型"
    },
    {
      "disease": "急性脊髓炎",
      "type": "神经系统型",
      "isRejectAll": true
    },
    {
      "disease": "脊髓空洞症",
      "type": "神经系统型",
      "isRejectAll": true
    },
    {
      "disease": "面神经麻痹（面瘫）",
      "type": "神经系统型"
    },
    {
      "disease": "三叉神经痛",
      "type": "神经系统型"
    },
    {
      "disease": "头痛",
      "type": "指引确诊"
    },
    {
      "disease": "偏头痛",
      "type": "神经系统型"
    },
    {
      "disease": "不明原因的头痛",
      "type": "指引确诊"
    },
    {
      "disease": "美尼尔综合征（梅尼埃）",
      "type": "五官型"
    },
    {
      "disease": "神经官能症",
      "type": "神经系统型"
    },
    {
      "disease": "晕厥",
      "type": "五官型"
    },
    {
      "disease": "阿尔兹海默病（老年痴呆）",
      "type": "精神型",
      "isRejectAll": true
    },
    {
      "disease": "帕金森（震颤麻痹）",
      "type": "神经系统型",
      "isRejectAll": true
    },
    {
      "disease": "肝豆状核变性",
      "type": "肝胆胰型",
      "isRejectAll": true
    },
    {
      "disease": "舞蹈病",
      "type": "神经系统型",
      "isRejectAll": true
    },
    {
      "disease": "多发性硬化",
      "type": "神经系统型",
      "isRejectAll": true
    },
    {
      "disease": "重症肌无力",
      "type": "神经系统型",
      "isRejectAll": true
    },
    {
      "disease": "运动神经元病",
      "type": "神经系统型",
      "isRejectAll": true
    },
    {
      "disease": "周期性麻痹",
      "type": "神经系统型",
      "isRejectAll": true
    },
    {
      "disease": "进行性肌营养不良",
      "type": "骨骼肌肉免疫型",
      "isRejectAll": true
    },
    {
      "disease": "多发性肌炎",
      "type": "骨骼肌肉免疫型",
      "isRejectAll": true
    },
    {
      "disease": "癫痫",
      "type": "神经系统型",
      "isRejectAll": true
    },
    {
      "disease": "智力残障或智力残疾",
      "type": "精神型",
      "isRejectAll": true
    },
    {
      "disease": "癔症",
      "type": "精神型",
      "isRejectAll": true
    },
    {
      "disease": "抑郁症",
      "type": "精神型",
      "isRejectAll": true
    },
    {
      "disease": "精神分裂症",
      "type": "精神型",
      "isRejectAll": true
    },
    {
      "disease": "焦虑症",
      "type": "精神型",
      "isRejectAll": true
    },
    {
      "disease": "躁狂症",
      "type": "精神型",
      "isRejectAll": true
    },
    {
      "disease": "自闭症",
      "type": "精神型",
      "isRejectAll": true
    },
    {
      "disease": "双相情感障碍",
      "type": "精神型",
      "isRejectAll": true
    },
    {
      "disease": "腱鞘囊肿",
      "type": "占位型",
      "imagingItem": "局部B超报告（含囊肿大小、位置）"
    },
    {
      "disease": "骨折（不含颅骨及脊柱）",
      "type": "骨骼肌肉免疫型"
    },
    {
      "disease": "股骨头坏死",
      "type": "骨骼肌肉免疫型"
    },
    {
      "disease": "人工装置物",
      "type": "fallback"
    },
    {
      "disease": "关节损伤",
      "type": "骨骼肌肉免疫型"
    },
    {
      "disease": "手指/脚趾残缺",
      "type": "fallback"
    },
    {
      "disease": "部分手掌/脚掌残缺",
      "type": "fallback"
    },
    {
      "disease": "腕关节以上缺失或功能障碍",
      "type": "骨骼肌肉免疫型"
    },
    {
      "disease": "踝关节以上缺失或功能障碍",
      "type": "骨骼肌肉免疫型"
    },
    {
      "disease": "软组织挫伤",
      "type": "fallback"
    },
    {
      "disease": "颅脑外伤",
      "type": "fallback"
    },
    {
      "disease": "脊柱严重侧弯",
      "type": "骨骼肌肉免疫型",
      "isRejectAll": true
    },
    {
      "disease": "骨质增生（骨刺）",
      "type": "骨骼肌肉免疫型"
    },
    {
      "disease": "颈椎间盘突出（颈椎病）",
      "type": "骨骼肌肉免疫型"
    },
    {
      "disease": "腰椎间盘突出（腰突症）",
      "type": "骨骼肌肉免疫型"
    },
    {
      "disease": "坏死性筋膜炎",
      "type": "骨骼肌肉免疫型",
      "isRejectAll": true
    },
    {
      "disease": "骨软骨瘤",
      "type": "占位型",
      "imagingItem": "X线或MRI报告（含病灶大小、位置及历次复查对比）"
    },
    {
      "disease": "骨肿瘤（不含骨软骨瘤）",
      "type": "占位型",
      "imagingItem": "影像学检查（X线/MRI/CT）报告（含病灶大小、位置）",
      "isRejectAll": true
    },
    {
      "disease": "骨髓炎",
      "type": "血液型"
    },
    {
      "disease": "骨质疏松",
      "type": "骨骼肌肉免疫型"
    },
    {
      "disease": "关节炎",
      "type": "骨骼肌肉免疫型"
    },
    {
      "disease": "脊柱关节病（包含脊柱侧弯）",
      "type": "骨骼肌肉免疫型"
    },
    {
      "disease": "骨关节病",
      "type": "骨骼肌肉免疫型"
    },
    {
      "disease": "脊柱裂",
      "type": "骨骼肌肉免疫型"
    },
    {
      "disease": "大骨节病",
      "type": "骨骼肌肉免疫型",
      "isRejectAll": true
    },
    {
      "disease": "系统性红斑狼疮",
      "type": "骨骼肌肉免疫型",
      "isRejectAll": true
    },
    {
      "disease": "皮肌炎",
      "type": "骨骼肌肉免疫型",
      "isRejectAll": true
    },
    {
      "disease": "强直性脊柱炎",
      "type": "骨骼肌肉免疫型"
    },
    {
      "disease": "大动脉炎",
      "type": "骨骼肌肉免疫型"
    },
    {
      "disease": "硬皮病及系统性硬化",
      "type": "骨骼肌肉免疫型",
      "isRejectAll": true
    },
    {
      "disease": "特发性炎性肌病",
      "type": "骨骼肌肉免疫型",
      "isRejectAll": true
    },
    {
      "disease": "斯蒂尔病",
      "type": "骨骼肌肉免疫型",
      "isRejectAll": true
    },
    {
      "disease": "多发性肌炎及皮肌炎",
      "type": "骨骼肌肉免疫型",
      "isRejectAll": true
    },
    {
      "disease": "重叠综合症",
      "type": "骨骼肌肉免疫型",
      "isRejectAll": true
    },
    {
      "disease": "混合性结缔组织病",
      "type": "骨骼肌肉免疫型",
      "isRejectAll": true
    },
    {
      "disease": "干燥综合症",
      "type": "骨骼肌肉免疫型"
    },
    {
      "disease": "血管炎",
      "type": "骨骼肌肉免疫型"
    },
    {
      "disease": "淀粉样变性",
      "type": "骨骼肌肉免疫型",
      "isRejectAll": true
    },
    {
      "disease": "单眼失明",
      "type": "五官型"
    },
    {
      "disease": "双眼失明",
      "type": "五官型",
      "isRejectAll": true
    },
    {
      "disease": "视野残缺",
      "type": "五官型"
    },
    {
      "disease": "结膜炎",
      "type": "五官型"
    },
    {
      "disease": "视神经病变（视神经炎",
      "type": "神经系统型"
    },
    {
      "disease": "白内障",
      "type": "五官型"
    },
    {
      "disease": "青光眼",
      "type": "五官型"
    },
    {
      "disease": "眼震",
      "type": "五官型"
    },
    {
      "disease": "视网膜变性",
      "type": "五官型"
    },
    {
      "disease": "视网膜脱离",
      "type": "五官型"
    },
    {
      "disease": "虹膜睫状体炎",
      "type": "五官型"
    },
    {
      "disease": "角膜瘢痕和混浊",
      "type": "五官型"
    },
    {
      "disease": "眼底出血",
      "type": "五官型"
    },
    {
      "disease": "慢性中耳炎",
      "type": "五官型"
    },
    {
      "disease": "听力近期急剧下降",
      "type": "五官型"
    },
    {
      "disease": "传导性聋",
      "type": "五官型"
    },
    {
      "disease": "感音神经性聋",
      "type": "五官型"
    },
    {
      "disease": "混合型聋",
      "type": "五官型"
    },
    {
      "disease": "中枢性聋",
      "type": "五官型"
    },
    {
      "disease": "先天性耳前瘘管",
      "type": "五官型"
    },
    {
      "disease": "鼻息肉",
      "type": "息肉型"
    },
    {
      "disease": "腺样体肥大",
      "type": "五官型"
    },
    {
      "disease": "鼻炎",
      "type": "五官型"
    },
    {
      "disease": "鼻窦炎",
      "type": "五官型"
    },
    {
      "disease": "鼻出血",
      "type": "五官型"
    },
    {
      "disease": "鼻中隔偏曲",
      "type": "五官型"
    },
    {
      "disease": "语言障碍",
      "type": "fallback"
    },
    {
      "disease": "牙齿脱落",
      "type": "五官型"
    },
    {
      "disease": "牙（龈）出血",
      "type": "五官型"
    },
    {
      "disease": "声带息肉",
      "type": "息肉型"
    },
    {
      "disease": "声带结节",
      "type": "结节型",
      "imagingItem": "喉镜检查报告（含影像描述及历次复查对比）",
      "extraItems": [
        "有无声音嘶哑、发音疲劳或失声等症状"
      ]
    },
    {
      "disease": "眼",
      "type": "五官型"
    },
    {
      "disease": "脑脊液鼻漏或耳漏",
      "type": "五官型",
      "isRejectAll": true
    },
    {
      "disease": "上",
      "type": "fallback",
      "isRejectAll": true
    },
    {
      "disease": "颜面部软组织缺失",
      "type": "fallback"
    },
    {
      "disease": "咽炎",
      "type": "五官型"
    },
    {
      "disease": "喉炎",
      "type": "五官型"
    },
    {
      "disease": "睡眠呼吸暂停综合症（鼾症)",
      "type": "呼吸型"
    },
    {
      "disease": "呼吸衰竭（呼衰）",
      "type": "呼吸型",
      "isRejectAll": true
    },
    {
      "disease": "良性肿瘤",
      "type": "占位型",
      "imagingItem": "相关部位影像检查报告（含病灶大小、位置及历次复查对比）"
    },
    {
      "disease": "恶性肿瘤（癌",
      "type": "肿瘤型",
      "isRejectAll": true
    },
    {
      "disease": "皮下结节",
      "type": "结节型",
      "imagingItem": "皮下超声或触诊检查报告（含影像描述及历次复查对比）",
      "extraItems": []
    },
    {
      "disease": "皮下囊肿",
      "type": "占位型",
      "imagingItem": "局部B超报告（含病灶大小、位置）"
    },
    {
      "disease": "皮下肿瘤",
      "type": "占位型",
      "imagingItem": "局部B超报告（含病灶大小、位置）"
    },
    {
      "disease": "皮下包块",
      "type": "占位型",
      "imagingItem": "局部B超报告（含病灶大小、位置）"
    },
    {
      "disease": "皮肤血管瘤",
      "type": "占位型",
      "imagingItem": "皮肤科专科检查或局部B超报告（含瘤体大小、范围）"
    },
    {
      "disease": "皮下出血点",
      "type": "指引确诊"
    },
    {
      "disease": "皮肤溃烂",
      "type": "fallback"
    },
    {
      "disease": "烧伤",
      "type": "fallback"
    },
    {
      "disease": "银屑病（牛皮癣）",
      "type": "fallback"
    },
    {
      "disease": "神经性皮炎",
      "type": "神经系统型"
    },
    {
      "disease": "接触性皮炎",
      "type": "fallback"
    },
    {
      "disease": "荨麻疹",
      "type": "fallback"
    },
    {
      "disease": "脂肪瘤",
      "type": "占位型",
      "imagingItem": "局部B超报告（含瘤体大小、位置及数目）"
    },
    {
      "disease": "黑痣",
      "type": "fallback"
    },
    {
      "disease": "黑色素瘤",
      "type": "肿瘤型",
      "isRejectAll": true
    },
    {
      "disease": "皮肤癌",
      "type": "肿瘤型",
      "isRejectAll": true
    },
    {
      "disease": "带状疱疹",
      "type": "fallback"
    },
    {
      "disease": "天疱疮",
      "type": "fallback"
    },
    {
      "disease": "丹毒",
      "type": "fallback"
    },
    {
      "disease": "早产",
      "type": "妊娠新生儿型"
    },
    {
      "disease": "难产",
      "type": "妊娠新生儿型"
    },
    {
      "disease": "产伤",
      "type": "妊娠新生儿型"
    },
    {
      "disease": "过期产",
      "type": "妊娠新生儿型"
    },
    {
      "disease": "脐炎",
      "type": "妊娠新生儿型"
    },
    {
      "disease": "脐疝",
      "type": "妊娠新生儿型"
    },
    {
      "disease": "新生儿败血症",
      "type": "妊娠新生儿型"
    },
    {
      "disease": "新生儿脓毒血症",
      "type": "妊娠新生儿型"
    },
    {
      "disease": "新生儿产瘤",
      "type": "妊娠新生儿型"
    },
    {
      "disease": "新生儿胎粪吸入综合症",
      "type": "妊娠新生儿型"
    },
    {
      "disease": "新生儿羊水吸入综合征",
      "type": "妊娠新生儿型"
    },
    {
      "disease": "新生儿胎粪吸入性肺炎",
      "type": "妊娠新生儿型"
    },
    {
      "disease": "新生儿咽下综合征",
      "type": "妊娠新生儿型"
    },
    {
      "disease": "新生儿低氧血症",
      "type": "妊娠新生儿型"
    },
    {
      "disease": "新生儿酸中毒",
      "type": "妊娠新生儿型"
    },
    {
      "disease": "新生儿ABO溶血病",
      "type": "妊娠新生儿型"
    },
    {
      "disease": "肠套叠",
      "type": "消化型"
    },
    {
      "disease": "腮腺炎",
      "type": "fallback"
    },
    {
      "disease": "新生儿黄疸/新生儿高胆红素血症",
      "type": "妊娠新生儿型"
    },
    {
      "disease": "心肌损害",
      "type": "心血管型"
    },
    {
      "disease": "热性痉挛",
      "type": "fallback"
    },
    {
      "disease": "新生儿窒息",
      "type": "妊娠新生儿型"
    },
    {
      "disease": "新生儿抢救史或被置于保温箱",
      "type": "妊娠新生儿型"
    },
    {
      "disease": "发育迟缓",
      "type": "妊娠新生儿型"
    },
    {
      "disease": "抽搐",
      "type": "指引确诊"
    },
    {
      "disease": "新生儿脑瘫",
      "type": "妊娠新生儿型",
      "isRejectAll": true
    },
    {
      "disease": "儿保检查",
      "type": "妊娠新生儿型"
    },
    {
      "disease": "新生儿体检异常",
      "type": "妊娠新生儿型"
    },
    {
      "disease": "兔唇",
      "type": "妊娠新生儿型"
    },
    {
      "disease": "多指",
      "type": "妊娠新生儿型"
    },
    {
      "disease": "并指",
      "type": "妊娠新生儿型"
    },
    {
      "disease": "包茎",
      "type": "妊娠新生儿型"
    },
    {
      "disease": "隐睾",
      "type": "泌尿型"
    },
    {
      "disease": "先天性斜颈",
      "type": "骨骼肌肉免疫型"
    },
    {
      "disease": "血尿（镜下红细胞大于标准值）",
      "type": "指引确诊"
    },
    {
      "disease": "尿糖异常",
      "type": "指引确诊"
    },
    {
      "disease": "肌酐异常",
      "type": "指引确诊"
    },
    {
      "disease": "肾小球滤过率异常",
      "type": "泌尿型"
    },
    {
      "disease": "肿瘤标志物异常",
      "type": "指引确诊"
    },
    {
      "disease": "HCV抗体（丙型肝炎抗体）阳性",
      "type": "肝胆胰型"
    },
    {
      "disease": "宫颈TCT或HPV（或活检）",
      "type": "妇科生殖型"
    },
    {
      "disease": "心电图异常",
      "type": "指引确诊"
    },
    {
      "disease": "脑电图异常",
      "type": "fallback",
      "isRejectAll": true
    },
    {
      "disease": "黑便",
      "type": "指引确诊"
    },
    {
      "disease": "腹痛",
      "type": "fallback"
    },
    {
      "disease": "眩晕",
      "type": "指引确诊"
    },
    {
      "disease": "咯血",
      "type": "指引确诊"
    },
    {
      "disease": "胸痛",
      "type": "指引确诊"
    },
    {
      "disease": "呼吸困难",
      "type": "呼吸型"
    },
    {
      "disease": "呕血",
      "type": "指引确诊"
    },
    {
      "disease": "便血",
      "type": "指引确诊"
    },
    {
      "disease": "听力下降",
      "type": "五官型"
    },
    {
      "disease": "耳鸣",
      "type": "五官型"
    },
    {
      "disease": "复视",
      "type": "指引确诊"
    },
    {
      "disease": "视力明显下降",
      "type": "五官型"
    },
    {
      "disease": "皮肤或粘膜或牙龈出血",
      "type": "五官型"
    },
    {
      "disease": "发热",
      "type": "指引确诊"
    },
    {
      "disease": "体重下降（6个月内超过5公斤）",
      "type": "指引确诊"
    },
    {
      "disease": "肌肉萎缩",
      "type": "指引确诊"
    },
    {
      "disease": "吞咽困难",
      "type": "五官型"
    },
    {
      "disease": "声嘶",
      "type": "指引确诊"
    },
    {
      "disease": "长期干咳",
      "type": "指引确诊"
    },
    {
      "disease": "骨关节疼痛",
      "type": "骨骼肌肉免疫型"
    },
    {
      "disease": "心脏损伤",
      "type": "心血管型",
      "isRejectAll": true
    },
    {
      "disease": "脾切除",
      "type": "fallback"
    },
    {
      "disease": "肺切除",
      "type": "呼吸型"
    },
    {
      "disease": "胃窦切除术/胃切除术/\n半胃切除术",
      "type": "消化型"
    },
    {
      "disease": "小肠/乙状结肠/横结肠/结肠/直肠切除术",
      "type": "消化型"
    },
    {
      "disease": "胰腺切除术（头部/部分切除术）",
      "type": "肝胆胰型"
    },
    {
      "disease": "肝节段切除\n半肝切除\n肝切除",
      "type": "肝胆胰型"
    },
    {
      "disease": "输尿管闭锁或缺失",
      "type": "泌尿型"
    },
    {
      "disease": "尿道狭窄",
      "type": "泌尿型"
    },
    {
      "disease": "膀胱切除",
      "type": "泌尿型"
    },
    {
      "disease": "睾丸萎缩或缺失",
      "type": "男性生殖型"
    },
    {
      "disease": "输精管闭锁或缺失",
      "type": "男性生殖型"
    },
    {
      "disease": "宫颈锥切术",
      "type": "妇科生殖型"
    },
    {
      "disease": "子宫切除术",
      "type": "妇科生殖型"
    },
    {
      "disease": "乳房切除术",
      "type": "fallback"
    },
    {
      "disease": "梅毒",
      "type": "fallback",
      "isRejectAll": true
    },
    {
      "disease": "淋病",
      "type": "fallback",
      "isRejectAll": true
    },
    {
      "disease": "艾滋病",
      "type": "fallback",
      "isRejectAll": true
    },
    {
      "disease": "一氧化碳中毒",
      "type": "fallback",
      "isRejectAll": true
    },
    {
      "disease": "苯中毒",
      "type": "fallback",
      "isRejectAll": true
    },
    {
      "disease": "动物咬伤",
      "type": "fallback"
    },
    {
      "disease": "吸毒",
      "type": "fallback",
      "isRejectAll": true
    },
    {
      "disease": "药物滥用",
      "type": "fallback",
      "isRejectAll": true
    },
    {
      "disease": "其他情况",
      "type": "fallback"
    }
  ],
  "specialCases": [
    {
      "disease": "房间隔缺损（房缺）",
      "items": [
        "儿童期是否自然闭合（须有超声报告证实）",
        "10岁前是否已行修补或封堵治疗，具体方式与出院小结",
        "治疗后是否满3年，及最近一次复查记录",
        "目前症状（活动后气促、紫绀、反复呼吸道感染、发育落后）",
        "是否合并其他心内畸形或肺动脉高压",
        "心电图报告"
      ]
    },
    {
      "disease": "室间隔缺损（室缺）",
      "items": [
        "儿童期是否自然闭合（须有超声报告证实）",
        "10岁前是否已行修补或封堵治疗，具体方式与出院小结",
        "治疗后是否满3年，及最近一次复查记录",
        "目前症状（活动后气促、紫绀、反复呼吸道感染、发育落后）",
        "是否合并其他心内畸形或肺动脉高压",
        "心电图报告"
      ]
    },
    {
      "disease": "卵圆孔未闭",
      "items": [
        "是否已自然闭合（须有超声报告证实）",
        "是否已行封堵治疗，具体方式与出院小结",
        "治疗后是否满3年，及最近一次复查记录",
        "目前症状（活动后气促、紫绀、反复呼吸道感染、发育落后）",
        "是否合并其他心内畸形或肺动脉高压",
        "心电图报告"
      ]
    },
    {
      "disease": "动脉导管未闭",
      "items": [
        "是否已自然闭合（须有超声报告证实）",
        "是否已行介入封堵或手术结扎治疗，具体方式与出院小结",
        "治疗后是否满3年，及最近一次复查记录",
        "目前症状（活动后气促、紫绀、反复呼吸道感染、发育落后）",
        "是否合并其他心内畸形或肺动脉高压",
        "心电图报告"
      ]
    }
  ]
};

if (typeof module !== 'undefined') module.exports = MATERIAL;

/* ===== 三段式层归属（20261020 S1）=====
   report=请提供以下检查报告 / conditional=如有请一并提供 / ask=请简要告知（病史事实，健告通常涉及）
   病级 imagingItem 天然属 report 无需打标；其余条目必须在此显式打标（layer_guard 强制校验，缺打即红） */
const LAYER_ASSIGN = {
  // ---- 通用 ----
  "确诊时间、病程及目前状态（何时发现、因何发现、是否痊愈/控制情况）": "ask",
  "目前治疗情况：用药请注明药名、剂量、频率。": "ask",
  "随访及复查材料（病历、检查单等），如有请提供": "conditional",
  "如有住院或手术史，请提供住院病案首页、出院记录、手术记录及检查检验报告等完整材料。": "conditional",
  // ---- 肿瘤型 ----
  "病理报告（含组织学类型及分化程度）": "report",
  "TNM分期及治疗方案": "report",
  "手术、放化疗及靶向治疗情况": "ask",
  "肿瘤标志物结果（如有）及历次复查对比": "conditional",
  // ---- 结节型 ----
  "影像报告（含分级）": "report",
  "病理报告（如有手术或穿刺/活检史，请提供术后或穿刺病理报告）": "conditional",
  // ---- 占位型 ----
  "影像检查结果（含大小、位置及历次复查对比）": "report",
  // ---- 结石型 ----
  "影像检查：结石大小、位置、数目及历次复查对比": "report",
  "有无梗阻（肾积水/胆管扩张）": "ask",
  "功能检查（肾功能/肝功能）": "report",
  "是否已碎石/手术，治疗时间": "ask",
  "有无感染等并发症": "ask",
  // ---- 息肉型 ----
  "内镜检查及病理结果（类型、大小、数量、发现时间）及历次复查对比": "report",
  "手术及病理情况（如有切除，提供切缘及术后病理）": "conditional",
  // ---- 慢病型 ----
  "化验或检查报告（含核心指标数值及测量记录）": "report",
  "门诊病历病史材料（含发现时最高血压、目前规律治疗及血压控制情况、有无并发症）": "report",
  "化验报告（含空腹血糖、餐后2小时血糖、糖化血红蛋白）": "report",
  "化验报告（含血脂四项）": "report",
  "化验报告（含血糖数值）及发作情况": "report",
  "化验报告（含血尿酸，历次对比）": "report",
  "目前控制情况": "ask",
  "用药情况（药名、剂量、频率）": "ask",
  "有无相关并发症（靶器官损害）": "ask",
  "心电图及心脏彩超检查结果": "report",
  "血糖、血脂等代谢指标情况": "report",
  "吸烟、饮酒习惯及身高体重（BMI）": "ask",
  // ---- 心血管型 ----
  "确诊及治疗经过（是否住院、手术、介入）": "ask",
  "冠脉造影/CTA、支架或搭桥情况（如有）": "conditional",
  "心电图、心脏彩超检查结果": "report",
  "心功能分级（NYHA）情况（如有）": "ask",
  "抗凝、抗血小板或降脂药物治疗史（如有）": "ask",
  // ---- 呼吸型 ----
  "肺功能检查结果": "report",
  "胸部CT/胸片检查结果": "report",
  "是否规律用药及药名、剂量、频率": "ask",
  "发作频率及目前控制情况": "ask",
  // ---- 消化型 ----
  "胃镜/肠镜或相关检查报告": "report",
  "病理检查结果（如曾活检，请提供）": "conditional",
  "幽门螺杆菌（HP）检测结果": "report",
  "是否手术切除及术后恢复情况": "ask",
  // ---- 肝胆胰型 ----
  "腹部B超或CT检查（肝胆胰脾）结果": "report",
  "肝功能检查结果": "report",
  "是否手术切除及术后病理（如胆囊/胰腺切除）": "conditional",
  "肝功能检查结果（评估用药影响）": "report",
  // ---- 泌尿型 ----
  "泌尿系统B超或CT检查结果": "report",
  "肾功能及尿常规检查结果": "report",
  "是否手术及术后恢复情况": "ask",
  "有无积水、感染等并发症": "ask",
  "尿蛋白、尿潜血": "report",
  // ---- 内分泌型 ----
  "甲状腺功能/相关激素检查结果": "report",
  "影像检查结果": "report",
  "是否服药及药名、剂量、频率": "ask",
  "有无相关症状及表现": "ask",
  "甲状腺功能检查（FT3/FT4/TSH）": "report",
  "目前用药情况（请注明所有药名、剂量、频率，如优甲乐、赛治等）": "ask",
  "尿微量白蛋白及肾功能检查结果": "report",
  "有无心脑血管并发症": "ask",
  "甲状腺功能检查结果": "report",
  "甲状旁腺激素及血钙检查结果": "report",
  // ---- 血液型 ----
  "血常规检查结果": "report",
  "病因是否明确": "ask",
  "是否治疗及具体方案": "ask",
  "复查恢复情况": "ask",
  // ---- 精神型 ----
  "确诊及治疗情况": "ask",
  "目前用药及剂量、频率": "ask",
  "病情稳定期时长": "ask",
  "有无住院或复发史": "ask",
  // ---- 骨骼肌肉免疫型 ----
  "影像学检查结果（X线/MRI）": "report",
  "是否影响活动功能": "ask",
  "是否用药及具体方案（药名、剂量、频率）": "ask",
  "相关化验指标（如血尿酸、类风湿因子）": "report",
  "肾功能检查结果（排查尿酸相关肾损害）": "report",
  "关节超声或双能CT（尿酸盐结晶）结果": "report",
  // ---- 妊娠新生儿型 ----
  "孕周/出生史及分娩方式": "ask",
  "相关指标（血压/血糖/OGTT等）": "report",
  "是否住院治疗及经过": "ask",
  "产后/出生后恢复及随访情况": "ask",
  "眼底检查结果": "report",
  // ---- 妇科生殖型 ----
  "妇科B超/宫腔镜检查结果": "report",
  "相关病理检查（如TCT/HPV/活检）": "conditional",
  "是否手术及术后情况": "ask",
  // ---- 男性生殖型 ----
  "泌尿系B超（含精索/睾丸/阴囊）检查结果": "report",
  "有无疼痛、坠胀等症状": "ask",
  // ---- 五官/神经型 ----
  "专科检查结果": "report",
  "功能评估（视力/听力等）": "ask",
  "是否用药及方案（药名、剂量、频率）": "ask",
  "影像检查结果（CT/MRI）及历次复查对比": "report",
  "功能评估": "ask",
  // ---- 内分泌病级 ----
  "颈部超声或核素显像（MIBI）报告（含甲状旁腺位置及大小）": "report",
  "肾上腺CT或MRI报告（含肾上腺形态及占位）": "report",
  "肾上腺CT报告（含肾上腺形态及占位）": "report",
  // ---- 结节/占位病级 ----
  "有无乳头溢液、皮肤改变等症状": "ask",
  "目前症状（咳嗽、咯血、胸痛等）": "ask",
  "有无吸烟史（烟龄、日吸烟量）": "ask",
  "有无声音嘶哑、发音疲劳或失声等症状": "ask",
  "有无胆绞痛、黄疸、胰腺炎史": "ask",
  "是否已手术切除胆囊及术后恢复": "ask",
  "有无排尿困难、会阴不适等症状": "ask",
  "有无反复发作": "ask",
  "发作频率、诱因及受累关节情况": "ask",
  "血压、血脂等合并情况": "report",
  "确诊时间及病理报告": "report",
  "胰酶/淀粉酶及CA19-9检查结果": "report",
  "AFP、β-HCG检查结果（CA125/CA199 可作参考）": "report",
  "垂体激素六项检查、视力视野检查": "report",
  "肝功能检查结果": "report",
  "肾功能检查结果": "report",
  // ---- 特例（先心） ----
  "治疗后是否满3年，及最近一次复查记录": "ask",
  "儿童期是否自然闭合（须有超声报告证实）": "conditional",
  "是否已自然闭合（须有超声报告证实）": "conditional",
  "10岁前是否已行修补或封堵治疗，具体方式与出院小结": "conditional",
  "是否已行封堵治疗，具体方式与出院小结": "conditional",
  "是否已行介入封堵或手术结扎治疗，具体方式与出院小结": "conditional",
  "目前症状（活动后气促、紫绀、反复呼吸道感染、发育落后）": "ask",
  "是否合并其他心内畸形或肺动脉高压": "ask",
  "胸部CT报告（含Lung-RADS分级、影像描述及历次复查对比）": "report",
  "腹部彩超报告（含病灶大小、位置及历次复查对比）": "report",
  "腹部彩超报告（含结石大小、位置、数目及历次复查对比）": "report",
  "腹部彩超或CT/MRI报告（含病灶大小、位置及历次复查对比）": "report",
  "乳腺B超或钼靶报告（含BI-RADS分级、影像描述及历次复查对比）": "report",
  "甲状腺B超报告（含TI-RADS分级、影像描述及历次复查对比）": "report",
  "妇科B超（子宫及双附件，含历次复查对比）": "report",
  "妇科B超报告（子宫及双附件，含病灶大小及历次复查对比）": "report",
  "宫颈专科检查（含TCT、HPV等报告及历次复查对比）": "report",
  "前列腺B超报告（含结石大小、位置、数目及历次复查对比）": "report",
  "泌尿系彩超报告（含结石大小、位置、数目及历次复查对比）": "report",
  "腹部彩超或CT报告（含病灶大小、位置及历次复查对比）": "report",
  "甲状腺B超报告（含影像描述及历次复查对比）": "report",
  "甲状旁腺B超或核素显像（MIBI）报告（含病灶位置及大小）": "report",
  "垂体MRI报告（含鞍区占位大小及历次复查对比）": "report",
  "肾上腺CT或MRI报告（含瘤体大小、位置）": "report",
  "头颅MRI报告（含肿瘤大小、位置）": "report",
  "头颅CT或MRI报告（含囊肿大小、位置）": "report",
  "头颅MRI报告（含瘤体大小、位置及历次复查对比）": "report",
  "局部B超报告（含囊肿大小、位置）": "report",
  "X线或MRI报告（含病灶大小、位置及历次复查对比）": "report",
  "影像学检查（X线/MRI/CT）报告（含病灶大小、位置）": "report",
  "喉镜检查报告（含影像描述及历次复查对比）": "report",
  "相关部位影像检查报告（含病灶大小、位置及历次复查对比）": "report",
  "皮下超声或触诊检查报告（含影像描述及历次复查对比）": "report",
  "局部B超报告（含病灶大小、位置）": "report",
  "皮肤科专科检查或局部B超报告（含瘤体大小、范围）": "report",
  "局部B超报告（含瘤体大小、位置及数目）": "report",
  "心电图报告": "report"
};
