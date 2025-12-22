export const translations = {
  zh: {
    nav: {
      home: '首页',
      indices: '指数',
      research: '研究',
      exchange: '交流',
      learning: '学习',
      action: '行动',
      sub: {
        news: '研究院新闻',
        achievements: '最新成果',
        methodology: '研究方法',
        totalIndex: '总指数',
        breakdownIndex: '区域与行业指数',
        specialIndex: '专题指数',
        palantir: 'Palantir研究',
        aiGovernance: 'AI数据治理',
        fde: 'FDE先锋',
        techTrends: '技术热点',
        events: '私享会',
        contest: '数智杯大赛',
        conference: '会议',
        terminology: '术语开源计划',
        training: 'CDP培训',
        webinar: '大咖Webinar',
        bootcamp: '实战训练营',
        dcmm: 'DCMM贯标',
        consulting: '企业数据治理咨询'
      }
    },
    hero: {
      title_start: '构建智能时代的',
      title_highlight: '数据治理',
      title_end: '新范式',
      subtitle: 'AI数据治理研究院致力于为企业提供全球领先的治理策略、标准指引与实施路径，赋能数据资产价值化。',
      cta_research: '浏览最新研究',
      cta_consulting: '开启咨询服务'
    },
    home: {
      news_title: '研究院新闻',
      view_more: '查看更多',
      achievements_title: '最新成果',
      achievements_desc: '通过持续的行业洞察与实践积累，我们不断输出具有行业影响力的标准与方法论。',
      achievements_1_title: 'DCMM 指数报告',
      achievements_1_desc: '全面量化区域与行业数据管理能力现状，为政策制定与企业决策提供权威数据支撑。',
      achievements_2_title: 'FDE 先锋研究',
      achievements_2_desc: '追踪全球 Future Data Enterprise (FDE) 创新实践，深度解析新锐厂商技术路径。',
      achievements_3_title: '术语开源计划',
      achievements_3_desc: '构建数据治理领域的“巴别塔”，统一行业认知，促进知识的高效流转与共享。',
      cta_title: '准备好提升企业数据管理能力了吗？',
      cta_desc: '加入数智杯大赛，或预约专家进行 DCMM 贯标咨询，开启数据驱动的转型之旅。',
      cta_btn: '立即行动',
      read_details: '了解详情',
      read_report: '阅读报告',
      contribute: '参与贡献',
      news_items: [
        { 
          title: "2024 AI数据治理白皮书正式发布", 
          date: "2024-05-15", 
          img: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=800" 
        },
        { 
          title: "第四届数智杯大赛启动仪式在京举行", 
          date: "2024-05-10", 
          img: "https://mmbiz.qpic.cn/sz_mmbiz_png/8PQre9BGSSBugIfJMkm5mJ3S7ibgT7rRia67vEsutFv6UyDfR20JuibZdvFc1vvvdWvu3dPpib14RibtmXiamhMUVHfA/640?from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1" 
        },
        { 
          title: "与某央企在Palantir研究和探索方面达成战略合作", 
          date: "2024-04-28", 
          img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800" 
        }
      ]
    },
    indices: {
      title: '中国DCMM行业发展指数（DCMM-DI）',
      desc: '中国数据管理能力成熟度指数（DCMM Index）是衡量区域、行业及企业数据管理水平的权威风向标。基于数万家企业的评估数据，我们定期发布多维度指数报告。',
      total_trend: '数据管理能力总指数趋势',
      updated: '2024 Q2 更新',
      industry_index: '行业指数 (Top 6)',
      regional_index: '区域指数概览',
      methodology: '研究方法论',
      methodology_desc: '深入了解 DCMM 指数的计算模型与权重分配体系。',
      download_whitepaper: '下载白皮书',
      soe_index: '国企专题指数',
      soe_desc: '针对国有企业数字化转型特点的专项数据治理评估。',
      public_co_index: '上市公司指数',
      public_co_desc: 'A股上市公司数据资产入表与治理能力关联分析。',
      view_details: '查看详情',
      current_index: '当前指数',
      benchmark: '基准线',
      growth: '同比增长(%)',
      total_index: '总指数',
      regional_index_label: '区域指数'
    },
    research: {
      title: '前沿研究',
      desc: '汇聚全球智慧，聚焦数据治理前沿技术与管理范式。从 Palantir 到 DataOps，我们持续追踪行业变革。',
      categories: ["全部", "AI数据治理", "Palantir研究", "FDE先锋", "技术热点"],
      read_more: '阅读全文',
      articles: [
        {
          id: 1,
          category: "Palantir研究",
          title: "Palantir Foundry 的本体层设计与数据治理启示",
          summary: "深入剖析 Palantir 如何通过 Ontology 动态建模实现业务与数据的无缝连接，以及对传统元数据管理的颠覆。",
          date: "2024-05-12",
          image: "photo-1518186285589-2f7649de83e0"
        },
        {
          id: 2,
          category: "技术热点",
          title: "从 Data Fabric 到 ChatBI：生成式 AI 驱动的数据消费革命",
          summary: "探讨 Data Fabric 架构如何为 ChatBI 提供可信的数据底座，以及 LLM 在 Text-to-SQL 中的最新应用挑战。",
          date: "2024-05-08",
          image: "photo-1551288049-bbbda536339a"
        },
        {
          id: 3,
          category: "AI数据治理",
          title: "大模型时代的数据毒化防御体系构建",
          summary: "针对 AI 训练数据集的安全风险，提出基于主动元数据的数据清洗与血缘追踪防御机制。",
          date: "2024-04-30",
          image: "photo-1563986768609-322da13575f3"
        },
        {
          id: 4,
          category: "FDE先锋",
          title: "Atlan：现代数据协作平台的崛起之路",
          summary: "解析 FDE 新锐厂商 Atlan 如何通过“嵌入式协作”重定义元数据管理体验。",
          date: "2024-04-22",
          image: "photo-1552664730-d307ca884978"
        },
        {
          id: 5,
          category: "技术热点",
          title: "构建企业级智能知识库：RAG 架构下的数据治理关键点",
          summary: "非结构化数据治理是 RAG 成功的关键。本文详述了向量化前的数据分块与清洗策略。",
          date: "2024-04-15",
          image: "photo-1454165833772-d996d4ad50a7"
        },
        {
          id: 6,
          category: "AI数据治理",
          title: "DataOps 实践指南：自动化数据流水线中的质量门禁",
          summary: "如何在 CI/CD 流程中嵌入数据质量检测？来自一线互联网大厂的最佳实践分享。",
          date: "2024-04-10",
          image: "photo-1460925895917-afdab827c52f"
        }
      ]
    },
    exchange: {
      title: '交流与活动',
      desc: '连接行业精英，搭建思想碰撞的平台。通过私享会、专业赛事与年度峰会，共建数据治理生态圈。',
      contest: {
        label: '重磅赛事',
        title: '第四届“数智杯”数据治理创新应用大赛',
        desc: '面向全国企业与高校，征集优秀的数据治理实践案例与技术解决方案。获奖项目将入选年度白皮书，并获得行业顶级VC对接机会。',
        stat_enterprises: '参赛企业',
        stat_prize: '总奖金池',
        btn: '立即报名'
      },
      events: {
        upcoming_title: '近期活动',
        past_title: '往期回顾',
        btn_details: '详情',
        list: [
          {
            day: "15",
            month: "JUN",
            title: "CDO 私享会：大模型落地中的治理挑战",
            location: "北京 · 柏悦酒店",
            type: "闭门会议"
          },
          {
            day: "28",
            month: "JUN",
            title: "2024 夏季数据架构峰会",
            location: "上海 · 国际会议中心",
            type: "行业会议"
          },
          {
            day: "10",
            month: "JUL",
            title: "金融行业数据资产入表实战研讨",
            location: "深圳 · 华侨城",
            type: "专题沙龙"
          }
        ],
        past_list_title: '2023 年度数据治理高峰论坛精彩瞬间'
      }
    },
    learning: {
      title: '学习与成长',
      desc: '从理论到实战，构建完整的数据治理知识体系。',
      terminology: {
        title: '术语开源计划',
        desc: '我们正在构建全球最大的中文数据治理术语库。目前已收录 500+ 标准术语，涵盖元数据、数据质量、主数据等 12 个领域。欢迎贡献您的智慧。',
        btn_view: '查阅术语库',
        btn_submit: '提交新词条'
      },
      training: {
        title: 'CDP 认证培训',
        desc: 'Certified Data Practitioner. 系统化的数据从业者能力认证，涵盖 DAMA 知识体系与实战技能。',
        levels: ['CDP-A 助理数据师', 'CDP-P 专业数据师', 'CDP-M 数据管理专家'],
        link: '查看课表'
      },
      webinar: {
        title: '大咖 Webinar',
        desc: '每月邀请行业 CTO/CDO 在线直播，深度复盘一线实战案例，解答您的治理困惑。',
        next_label: '下期预告：06/20',
        next_topic: '某国有银行数据中台建设复盘',
        link: '预约直播'
      },
      bootcamp: {
        title: '实战训练营',
        desc: '3天2夜封闭式训练。通过沙盘模拟、真实数据环境演练，手把手教您搭建数据治理平台。',
        link: '了解营期'
      }
    },
    action: {
      hero_title: '从战略到执行',
      hero_desc: '我们不仅仅提供报告，更与企业并肩作战。通过专业的咨询服务与工具导入，确保数据治理成效落地。',
      dcmm: {
        label: '国家标准认证',
        title: 'DCMM 贯标服务',
        desc: '依据 GB/T 36073-2018《数据管理能力成熟度评估模型》，为企业提供从差距分析、制度建设、流程优化到模拟评估的全周期贯标服务。',
        items: ['成熟度等级评估', '数据管理制度体系建设', '迎检材料辅导', '模拟评审与整改'],
        btn: '预约诊断'
      },
      consulting: {
        label: '定制化咨询',
        title: '企业数据治理咨询',
        desc: '针对企业数字化转型的痛点，提供主数据管理、数据质量提升、数据资产入表等专项咨询服务。结合 AI 技术，打造自动化的治理体系。',
        items: ['数据资产盘点与目录构建', '数据标准与质量体系', '数据安全与隐私合规', '数据中台架构规划'],
        btn: '获取方案'
      },
      methodology: {
        title: '我们的方法论',
        steps: [
          { title: "评估 (Assess)", desc: "现状诊断与差距分析" },
          { title: "规划 (Plan)", desc: "顶层设计与路线图制定" },
          { title: "实施 (Implement)", desc: "体系建设与工具落地" },
          { title: "运营 (Operate)", desc: "持续监控与长效机制" },
        ]
      }
    },
    footer: {
      desc: '致力于推动中国乃至全球的数据治理标准化进程，赋能企业数字化转型，构建可信的数字未来。',
      about_us: '关于我们',
      expert_team: '专家团队',
      join_us: '加入我们',
      contact: '联系方式',
      dcmm_consulting: 'DCMM 贯标咨询',
      ent_governance: '企业数据治理',
      ai_research: 'AI 治理研究',
      contest: '数智杯大赛',
      address: '北京市海淀区中关村南大街1号 数智大厦 A座 18层',
      rights: '© 2024 AI数据治理研究院. All rights reserved.',
      privacy: '隐私政策',
      terms: '服务条款'
    }
  },
  en: {
    nav: {
      home: 'Home',
      indices: 'Indices',
      research: 'Research',
      exchange: 'Exchange',
      learning: 'Learning',
      action: 'Action',
      sub: {
        news: 'Institute News',
        achievements: 'Latest Achievements',
        methodology: 'Methodology',
        totalIndex: 'Total Index',
        breakdownIndex: 'Regional & Industry',
        specialIndex: 'Special Index',
        palantir: 'Palantir Research',
        aiGovernance: 'AI Governance',
        fde: 'FDE Pioneers',
        techTrends: 'Tech Trends',
        events: 'Private Salons',
        contest: 'Digital Intelligence Cup',
        conference: 'Conferences',
        terminology: 'Open Terminology',
        training: 'CDP Training',
        webinar: 'Expert Webinar',
        bootcamp: 'Bootcamp',
        dcmm: 'DCMM Certification',
        consulting: 'Consulting Services'
      }
    },
    hero: {
      title_start: 'Building the New Paradigm of',
      title_highlight: 'Data Governance',
      title_end: 'in the AI Era',
      subtitle: 'AI Data Governance Institute is dedicated to providing world-leading strategies, standards, and implementation paths to empower data asset valuation.',
      cta_research: 'Latest Research',
      cta_consulting: 'Start Consulting'
    },
    home: {
      news_title: 'Institute News',
      view_more: 'View More',
      achievements_title: 'Latest Achievements',
      achievements_desc: 'Through continuous industry insight and practice, we output influential standards and methodologies.',
      achievements_1_title: 'DCMM Index Report',
      achievements_1_desc: 'Quantifying regional and industrial data management capabilities to support policy making and corporate decisions.',
      achievements_2_title: 'FDE Pioneer Research',
      achievements_2_desc: 'Tracking global Future Data Enterprise (FDE) practices and analyzing the technical paths of emerging vendors.',
      achievements_3_title: 'Open Source Terminology',
      achievements_3_desc: 'Building the "Tower of Babel" for data governance to unify industry cognition and promote knowledge sharing.',
      cta_title: 'Ready to elevate your data management capability?',
      cta_desc: 'Join the Digital Intelligence Cup or book an expert for DCMM consultation to start your data-driven transformation.',
      cta_btn: 'Act Now',
      read_details: 'Learn More',
      read_report: 'Read Report',
      contribute: 'Contribute',
      news_items: [
        { 
          title: "2024 AI Data Governance Whitepaper Released", 
          date: "2024-05-15", 
          img: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=800" 
        },
        { 
          title: "4th Digital Intelligence Cup Launch Ceremony in Beijing", 
          date: "2024-05-10", 
          img: "https://mmbiz.qpic.cn/sz_mmbiz_png/8PQre9BGSSBugIfJMkm5mJ3S7ibgT7rRia67vEsutFv6UyDfR20JuibZdvFc1vvvdWvu3dPpib14RibtmXiamhMUVHfA/640?from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1" 
        },
        { 
          title: "Strategic Cooperation with Central SOE on Palantir Research", 
          date: "2024-04-28", 
          img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800" 
        }
      ]
    },
    indices: {
      title: 'China DCMM Development Index (DCMM-DI)',
      desc: 'The China Data Management Capability Maturity Index (DCMM Index) is the authoritative benchmark for measuring data management levels across regions and industries. Based on assessment data from thousands of enterprises, we regularly release multi-dimensional index reports.',
      total_trend: 'Total Data Management Capability Index Trend',
      updated: 'Updated 2024 Q2',
      industry_index: 'Industry Index (Top 6)',
      regional_index: 'Regional Index Overview',
      methodology: 'Methodology',
      methodology_desc: 'Deep dive into the calculation model and weight distribution of the DCMM Index.',
      download_whitepaper: 'Download Whitepaper',
      soe_index: 'SOE Special Index',
      soe_desc: 'Specialized data governance assessment for State-Owned Enterprises digital transformation.',
      public_co_index: 'Public Company Index',
      public_co_desc: 'Analysis of data asset inclusion and governance capabilities of A-share listed companies.',
      view_details: 'View Details',
      current_index: 'Current Index',
      benchmark: 'Benchmark',
      growth: 'YoY Growth(%)',
      total_index: 'Total Index',
      regional_index_label: 'Regional Index'
    },
    research: {
      title: 'Frontier Research',
      desc: 'Gathering global wisdom to focus on cutting-edge technologies and management paradigms in data governance. From Palantir to DataOps, we continuously track industry transformations.',
      categories: ["All", "AI Governance", "Palantir Research", "FDE Pioneers", "Tech Trends"],
      read_more: 'Read Full Article',
      articles: [
        {
          id: 1,
          category: "Palantir Research",
          title: "Palantir Foundry's Ontology Design and Governance Implications",
          summary: "An in-depth analysis of how Palantir connects business and data seamlessly through dynamic Ontology modeling, and its disruption of traditional metadata management.",
          date: "2024-05-12",
          image: "photo-1518186285589-2f7649de83e0"
        },
        {
          id: 2,
          category: "Tech Trends",
          title: "From Data Fabric to ChatBI: The GenAI-Driven Data Consumption Revolution",
          summary: "Exploring how Data Fabric architecture provides a trusted data foundation for ChatBI, and the latest challenges of LLMs in Text-to-SQL applications.",
          date: "2024-05-08",
          image: "photo-1551288049-bbbda536339a"
        },
        {
          id: 3,
          category: "AI Governance",
          title: "Building a Defense System Against Data Poisoning in the LLM Era",
          summary: "Addressing security risks in AI training datasets by proposing a defense mechanism based on active metadata for data cleansing and lineage tracking.",
          date: "2024-04-30",
          image: "photo-1563986768609-322da13575f3"
        },
        {
          id: 4,
          category: "FDE Pioneers",
          title: "Atlan: The Rise of the Modern Data Collaboration Platform",
          summary: "Analyzing how emerging FDE vendor Atlan is redefining the metadata management experience through 'embedded collaboration'.",
          date: "2024-04-22",
          image: "photo-1552664730-d307ca884978"
        },
        {
          id: 5,
          category: "Tech Trends",
          title: "Building an Enterprise Intelligent Knowledge Base: Governance Keys in RAG",
          summary: "Unstructured data governance is key to RAG success. This article details data chunking and cleansing strategies prior to vectorization.",
          date: "2024-04-15",
          image: "photo-1454165833772-d996d4ad50a7"
        },
        {
          id: 6,
          category: "AI Governance",
          title: "DataOps Practice Guide: Quality Gates in Automated Data Pipelines",
          summary: "How to embed data quality checks in CI/CD processes? Best practices shared from top-tier internet companies.",
          date: "2024-04-10",
          image: "photo-1460925895917-afdab827c52f"
        }
      ]
    },
    exchange: {
      title: 'Exchange & Events',
      desc: 'Connecting industry elites and building a platform for thought leadership. Through private salons, professional competitions, and annual summits, we co-create the data governance ecosystem.',
      contest: {
        label: 'Major Event',
        title: '4th "Digital Intelligence Cup" Data Governance Innovation Competition',
        desc: 'Soliciting excellent data governance practices and technical solutions from enterprises and universities nationwide. Winning projects will be included in the annual whitepaper and gain access to top-tier industry VCs.',
        stat_enterprises: 'Enterprises',
        stat_prize: 'Prize Pool',
        btn: 'Register Now'
      },
      events: {
        upcoming_title: 'Upcoming Events',
        past_title: 'Past Highlights',
        btn_details: 'Details',
        list: [
          {
            day: "15",
            month: "JUN",
            title: "CDO Private Salon: Governance Challenges in LLM Deployment",
            location: "Beijing · Park Hyatt",
            type: "Closed Door"
          },
          {
            day: "28",
            month: "JUN",
            title: "2024 Summer Data Architecture Summit",
            location: "Shanghai · Int'l Convention Center",
            type: "Conference"
          },
          {
            day: "10",
            month: "JUL",
            title: "Financial Industry Data Asset Valuation Workshop",
            location: "Shenzhen · OCT",
            type: "Workshop"
          }
        ],
        past_list_title: 'Highlights from the 2023 Annual Data Governance Summit'
      }
    },
    learning: {
      title: 'Learning & Growth',
      desc: 'From theory to practice, building a complete data governance knowledge system.',
      terminology: {
        title: 'Open Source Terminology Project',
        desc: 'We are building the world\'s largest Chinese data governance terminology database. Over 500 standard terms covering 12 domains like metadata and data quality have been indexed. Your contribution is welcome.',
        btn_view: 'View Glossary',
        btn_submit: 'Submit Entry'
      },
      training: {
        title: 'CDP Certification Training',
        desc: 'Certified Data Practitioner. A systematic competency certification for data practitioners, covering the DAMA body of knowledge and practical skills.',
        levels: ['CDP-A Associate', 'CDP-P Professional', 'CDP-M Master'],
        link: 'View Schedule'
      },
      webinar: {
        title: 'Expert Webinar',
        desc: 'Monthly live streams with industry CTOs/CDOs, deeply reviewing frontline practical cases and answering your governance questions.',
        next_label: 'Next Up: 06/20',
        next_topic: 'Review of Data Middle Platform Construction in a State-owned Bank',
        link: 'Book Live Stream'
      },
      bootcamp: {
        title: 'Practical Bootcamp',
        desc: '3-Day/2-Night closed training. Hands-on teaching to build a data governance platform through sand table simulations and real data environments.',
        link: 'Learn More'
      }
    },
    action: {
      hero_title: 'From Strategy to Execution',
      hero_desc: 'We provide more than just reports; we fight alongside enterprises. Through professional consulting services and tool implementation, we ensure data governance results land effectively.',
      dcmm: {
        label: 'National Standard Certification',
        title: 'DCMM Implementation Service',
        desc: 'Based on GB/T 36073-2018 "Data Management Capability Maturity Assessment Model", we provide full-cycle implementation services from gap analysis and system construction to process optimization and mock assessment.',
        items: ['Maturity Level Assessment', 'Data Mgmt System Construction', 'Inspection Material Guidance', 'Mock Review & Rectification'],
        btn: 'Book Diagnosis'
      },
      consulting: {
        label: 'Customized Consulting',
        title: 'Enterprise Data Governance Consulting',
        desc: 'Addressing pain points in digital transformation, providing specialized consulting on master data management, data quality improvement, and data asset valuation. Combined with AI technology to build automated governance systems.',
        items: ['Data Asset Inventory & Catalog', 'Data Standards & Quality System', 'Data Security & Privacy Compliance', 'Data Middle Platform Architecture'],
        btn: 'Get Solution'
      },
      methodology: {
        title: 'Our Methodology',
        steps: [
          { title: "Assess", desc: "Status Diagnosis & Gap Analysis" },
          { title: "Plan", desc: "Top-level Design & Roadmap" },
          { title: "Implement", desc: "System Construction & Tooling" },
          { title: "Operate", desc: "Continuous Monitoring & Mechanism" },
        ]
      }
    },
    footer: {
      desc: 'Dedicated to promoting data governance standardization in China and globally, empowering digital transformation, and building a trusted digital future.',
      about_us: 'About Us',
      expert_team: 'Experts',
      join_us: 'Join Us',
      contact: 'Contact',
      dcmm_consulting: 'DCMM Certification',
      ent_governance: 'Enterprise Governance',
      ai_research: 'AI Research',
      contest: 'DI Cup',
      address: '18F, Block A, Shuzhi Building, No.1 Zhongguancun South St, Haidian Dist, Beijing',
      rights: '© 2024 AI Data Governance Institute. All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service'
    }
  }
};