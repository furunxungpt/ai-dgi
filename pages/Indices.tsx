import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts';
import { X, Building2, BarChart3, TrendingUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const indicesData = [
  { year: '2020', index: 68.2, growth: 4.3 },
  { year: '2021', index: 72.5, growth: 6.3 },
  { year: '2022', index: 76.8, growth: 5.9 },
  { year: '2023', index: 81.4, growth: 6.0 },
  { year: '2024', index: 85.2, growth: 4.7 },
];

const Indices: React.FC = () => {
  const { langData, language } = useLanguage();
  const t = langData.indices;
  const isEn = language === 'en';
  
  const [showSoeDetail, setShowSoeDetail] = useState(false);

  const industryData = [
    { name: isEn ? 'Finance' : '金融', value: 88, benchmark: 75 },
    { name: isEn ? 'Telecom' : '电信', value: 85, benchmark: 75 },
    { name: isEn ? 'Energy' : '能源', value: 78, benchmark: 70 },
    { name: isEn ? 'Mfg' : '制造', value: 72, benchmark: 65 },
    { name: isEn ? 'Retail' : '零售', value: 68, benchmark: 60 },
    { name: isEn ? 'Health' : '医疗', value: 65, benchmark: 60 },
  ];
  
  const regionData = [
    { name: isEn ? 'JJJ' : '京津冀', value: 84 },
    { name: isEn ? 'YRD' : '长三角', value: 86 },
    { name: isEn ? 'PRD' : '珠三角', value: 83 },
    { name: isEn ? 'CY' : '成渝', value: 79 },
    { name: isEn ? 'West' : '中西部', value: 70 },
  ];

  // Updated Data for Central vs Local SOE Comparison with Counts
  const soeComparisonData = [
    { 
      level: isEn ? 'Level 5' : '五级', 
      label: isEn ? 'Optimized' : '优化级', 
      central: { pct: 4.8, count: 5 }, 
      local: { pct: 0.9, count: 12 } 
    },
    { 
      level: isEn ? 'Level 4' : '四级', 
      label: isEn ? 'Managed' : '量化管理级', 
      central: { pct: 22.5, count: 24 }, 
      local: { pct: 8.4, count: 115 } 
    },
    { 
      level: isEn ? 'Level 3' : '三级', 
      label: isEn ? 'Defined' : '稳健级', 
      central: { pct: 48.2, count: 51 }, 
      local: { pct: 38.5, count: 528 } 
    },
    { 
      level: isEn ? 'Below L3' : '三级以下', 
      label: isEn ? 'Initial' : '初始/受管理', 
      central: { pct: 24.5, count: 26 }, 
      local: { pct: 52.2, count: 716 } 
    },
  ];

  const getBubbleSize = (pct: number) => {
    // Map 0-100 to roughly 60px-130px for visualization
    return 60 + (Math.sqrt(pct) / 10) * 90;
  };

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-serif font-bold text-brand-900 mb-4">{t.title}</h1>
          <p className="text-slate-600 text-lg max-w-3xl">
            {t.desc}
          </p>
        </div>

        {/* Total Index Section */}
        <div id="total" className="bg-white p-8 shadow-sm border border-slate-200 mb-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-serif font-bold text-brand-900">{t.total_trend}</h2>
            <span className="bg-brand-100 text-brand-900 px-3 py-1 text-sm font-semibold">{t.updated}</span>
          </div>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={indicesData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="year" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} domain={[50, 100]} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1e293b', border: 'none', color: '#fff' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Legend />
                <Line type="monotone" dataKey="index" name={t.total_index} stroke="#0F172A" strokeWidth={3} dot={{ r: 6 }} activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="growth" name={t.growth} stroke="#0EA5E9" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Breakdown Section */}
        <div id="breakdown" className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Industry Index */}
          <div className="bg-white p-8 shadow-sm border border-slate-200">
            <h3 className="text-xl font-serif font-bold text-brand-900 mb-6">{t.industry_index}</h3>
            <div className="h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={industryData} layout="vertical" margin={{ left: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#e2e8f0" />
                  <XAxis type="number" domain={[0, 100]} hide />
                  <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} width={50} />
                  <Tooltip cursor={{fill: '#f1f5f9'}} />
                  <Legend />
                  <Bar dataKey="value" name={t.current_index} fill="#0F172A" radius={[0, 4, 4, 0]} barSize={20} />
                  <Bar dataKey="benchmark" name={t.benchmark} fill="#cbd5e1" radius={[0, 4, 4, 0]} barSize={10} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Regional Index */}
          <div className="bg-white p-8 shadow-sm border border-slate-200">
            <h3 className="text-xl font-serif font-bold text-brand-900 mb-6">{t.regional_index}</h3>
            <div className="h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={regionData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} />
                  <YAxis hide />
                  <Tooltip cursor={{fill: '#f1f5f9'}} />
                  <Bar dataKey="value" name={t.regional_index_label} fill="#0EA5E9" radius={[4, 4, 0, 0]} barSize={40} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Special Reports Links */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
           <div id="methodology" className="bg-white p-6 border-l-4 border-brand-900 shadow-sm scroll-mt-24 transition-transform hover:-translate-y-1">
             <div className="flex items-center mb-3">
               <BarChart3 className="w-6 h-6 text-brand-900 mr-2" />
               <h4 className="font-bold text-lg">{t.methodology}</h4>
             </div>
             <p className="text-sm text-slate-500 mb-4">{t.methodology_desc}</p>
             <a href="#" className="text-brand-accent text-sm font-semibold hover:underline flex items-center">{t.download_whitepaper} &rarr;</a>
           </div>
           
           {/* Central SOE Index Card */}
           <div 
             id="special" 
             className="bg-white p-6 border-l-4 border-brand-accent shadow-sm scroll-mt-24 cursor-pointer hover:shadow-lg transition-all hover:-translate-y-1 group relative overflow-hidden"
             onClick={() => setShowSoeDetail(true)}
           >
             <div className="relative z-10">
                <div className="flex items-center mb-3">
                  <Building2 className="w-6 h-6 text-brand-accent mr-2" />
                  <h4 className="font-bold text-lg group-hover:text-brand-accent transition-colors">{t.soe_index}</h4>
                </div>
                <p className="text-sm text-slate-500 mb-4 pr-8">{t.soe_desc}</p>
                <button className="text-brand-accent text-sm font-semibold group-hover:underline flex items-center">
                  {t.view_details} &rarr;
                </button>
             </div>
           </div>

           <div className="bg-white p-6 border-l-4 border-slate-300 shadow-sm transition-transform hover:-translate-y-1">
             <div className="flex items-center mb-3">
               <TrendingUp className="w-6 h-6 text-slate-600 mr-2" />
               <h4 className="font-bold text-lg text-slate-700">{t.public_co_index}</h4>
             </div>
             <p className="text-sm text-slate-500 mb-4">{t.public_co_desc}</p>
             <a href="#" className="text-brand-accent text-sm font-semibold hover:underline flex items-center">{t.view_details} &rarr;</a>
           </div>
        </div>

        {/* Modal / Detailed View for Central SOE Index */}
        {showSoeDetail && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-900/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white w-full max-w-6xl shadow-2xl rounded-sm overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col max-h-[95vh]">
              
              {/* Modal Header */}
              <div className="bg-brand-900 px-8 py-6 flex justify-between items-center text-white shrink-0 border-b border-brand-800">
                <div>
                  <h3 className="text-2xl font-serif font-bold flex items-center">
                    <Building2 className="mr-3" />
                    {isEn ? 'Central SOE DCMM Special Topic' : '央国企DCMM专题'}
                  </h3>
                  <p className="text-brand-100 text-sm mt-1 opacity-80">
                     {isEn ? 'Data analysis of DCMM implementation in Central SOE and Local SOE' : '央企及地方国企DCMM贯标数据分析'}
                  </p>
                </div>
                <button 
                  onClick={(e) => { e.stopPropagation(); setShowSoeDetail(false); }}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <X size={28} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-8 bg-white overflow-y-auto flex-grow flex flex-col">
                
                {/* Legend */}
                <div className="flex justify-center space-x-12 mb-8 shrink-0">
                   <div className="flex items-center">
                     <div className="w-4 h-4 rounded-full bg-brand-900 mr-3 shadow-sm"></div>
                     <span className="font-bold text-brand-900 text-sm tracking-wide">{isEn ? 'Central SOE' : '央企'}</span>
                   </div>
                   <div className="flex items-center">
                     <div className="w-4 h-4 rounded-full bg-brand-accent mr-3 shadow-sm"></div>
                     <span className="font-bold text-brand-900 text-sm tracking-wide">{isEn ? 'Local SOE' : '地方国企'}</span>
                   </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 flex-grow min-h-[400px]">
                  {soeComparisonData.map((item, index) => (
                    <div key={index} className="flex flex-col h-full bg-white border border-slate-200 shadow-sm rounded-sm overflow-hidden relative">
                      {/* Level Title */}
                      <div className="text-center py-4 border-b border-slate-100 bg-white z-10 relative">
                        <span className="text-lg font-bold text-brand-900 block">
                          {item.level}
                        </span>
                        <span className="text-xs text-slate-500">{item.label}</span>
                      </div>
                      
                      {/* Bubbles Container */}
                      <div className="flex-grow flex flex-col relative z-0">
                        
                        {/* Central Bubble (Top Half) - White BG */}
                        <div className="flex-1 relative flex items-center justify-center p-4 bg-white border-b border-slate-200">
                           {/* Horizontal Axis Line through Central Bubble - Perfectly centered */}
                           <div className="absolute top-1/2 left-0 right-0 h-px bg-slate-300 transform -translate-y-1/2 z-0"></div>
                           
                           <div 
                              style={{ width: `${getBubbleSize(item.central.pct)}px`, height: `${getBubbleSize(item.central.pct)}px` }} 
                              className="relative z-10 rounded-full bg-brand-900 text-white flex flex-col items-center justify-center shadow-lg transition-transform hover:scale-105"
                           >
                             <span className="text-xl md:text-2xl font-bold leading-none">{item.central.count}</span>
                             <span className="text-[10px] md:text-xs opacity-80 mt-1">{item.central.pct}%</span>
                           </div>
                        </div>

                        {/* Local Bubble (Bottom Half) - Slight Off-white BG for distinction */}
                        <div className="flex-1 relative flex items-center justify-center bg-slate-50 p-4">
                           {/* Horizontal Axis Line through Local Bubble - Perfectly centered */}
                           <div className="absolute top-1/2 left-0 right-0 h-px bg-slate-300 transform -translate-y-1/2 z-0"></div>

                           <div 
                              style={{ width: `${getBubbleSize(item.local.pct)}px`, height: `${getBubbleSize(item.local.pct)}px` }} 
                              className="relative z-10 rounded-full bg-brand-accent text-white flex flex-col items-center justify-center shadow-lg transition-transform hover:scale-105"
                           >
                             <span className="text-xl md:text-2xl font-bold leading-none">{item.local.count}</span>
                             <span className="text-[10px] md:text-xs opacity-80 mt-1">{item.local.pct}%</span>
                           </div>
                        </div>

                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 text-center border-t border-slate-200 pt-6 shrink-0">
                   <p className="text-slate-500 text-sm font-medium">
                     {isEn ? 'Data Source: China Information Technology Industry Federation, AI Data Governance Institute' : '数据来源：中国电子行业信息联合会，AI数据治理研究院'}
                   </p>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Indices;