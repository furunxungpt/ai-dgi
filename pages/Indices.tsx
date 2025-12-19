import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts';
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

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
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
           <div id="methodology" className="bg-white p-6 border-l-4 border-brand-900 shadow-sm scroll-mt-24">
             <h4 className="font-bold text-lg mb-2">{t.methodology}</h4>
             <p className="text-sm text-slate-500 mb-4">{t.methodology_desc}</p>
             <a href="#" className="text-brand-accent text-sm font-semibold hover:underline">{t.download_whitepaper} &rarr;</a>
           </div>
           <div id="special" className="bg-white p-6 border-l-4 border-brand-900 shadow-sm scroll-mt-24">
             <h4 className="font-bold text-lg mb-2">{t.soe_index}</h4>
             <p className="text-sm text-slate-500 mb-4">{t.soe_desc}</p>
             <a href="#" className="text-brand-accent text-sm font-semibold hover:underline">{t.view_details} &rarr;</a>
           </div>
           <div className="bg-white p-6 border-l-4 border-brand-900 shadow-sm">
             <h4 className="font-bold text-lg mb-2">{t.public_co_index}</h4>
             <p className="text-sm text-slate-500 mb-4">{t.public_co_desc}</p>
             <a href="#" className="text-brand-accent text-sm font-semibold hover:underline">{t.view_details} &rarr;</a>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Indices;