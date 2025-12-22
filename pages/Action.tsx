import React from 'react';
import { ShieldCheck, BarChart2, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import StaticVisual from '../components/StaticVisual.tsx';

const Action: React.FC = () => {
  const { langData } = useLanguage();
  const t = langData.action;

  return (
    <div className="bg-white min-h-screen">
      
      {/* Hero */}
      <div className="bg-brand-900 pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">{t.hero_title}</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            {t.hero_desc}
          </p>
        </div>
      </div>

      {/* Services Split */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Service 1: DCMM */}
        <div id="dcmm" className="flex flex-col md:flex-row items-center mb-24 gap-12 scroll-mt-24">
          <div className="md:w-1/2">
            <div className="inline-flex items-center space-x-2 mb-4">
              <ShieldCheck className="w-6 h-6 text-brand-accent" />
              <span className="text-brand-accent font-bold tracking-widest uppercase text-sm">{t.dcmm.label}</span>
            </div>
            <h2 className="text-3xl font-serif font-bold text-brand-900 mb-6">{t.dcmm.title}</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              {t.dcmm.desc}
            </p>
            <ul className="space-y-3 mb-8">
              {t.dcmm.items.map((item: string, i: number) => (
                <li key={i} className="flex items-center text-slate-700">
                  <div className="w-1.5 h-1.5 bg-brand-900 rounded-full mr-3"></div>
                  {item}
                </li>
              ))}
            </ul>
            <button className="bg-brand-900 text-white px-8 py-3 hover:bg-brand-800 transition-colors">
              {t.dcmm.btn}
            </button>
          </div>
          <div className="md:w-1/2 h-80 bg-slate-100 relative overflow-hidden group">
            <StaticVisual type="security" className="w-full h-full opacity-80 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>

        {/* Service 2: Consulting */}
        <div id="consulting" className="flex flex-col md:flex-row-reverse items-center gap-12 scroll-mt-24">
          <div className="md:w-1/2">
             <div className="inline-flex items-center space-x-2 mb-4">
              <Zap className="w-6 h-6 text-brand-accent" />
              <span className="text-brand-accent font-bold tracking-widest uppercase text-sm">{t.consulting.label}</span>
            </div>
            <h2 className="text-3xl font-serif font-bold text-brand-900 mb-6">{t.consulting.title}</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              {t.consulting.desc}
            </p>
            <ul className="space-y-3 mb-8">
              {t.consulting.items.map((item: string, i: number) => (
                <li key={i} className="flex items-center text-slate-700">
                  <div className="w-1.5 h-1.5 bg-brand-900 rounded-full mr-3"></div>
                  {item}
                </li>
              ))}
            </ul>
            <button className="border border-brand-900 text-brand-900 px-8 py-3 hover:bg-brand-900 hover:text-white transition-colors">
              {t.consulting.btn}
            </button>
          </div>
          <div className="md:w-1/2 h-80 bg-slate-100 relative overflow-hidden group">
             <StaticVisual type="platform" className="w-full h-full opacity-80 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>

      </div>

      {/* Methodology Section */}
      <div className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <h2 className="text-3xl font-serif font-bold text-brand-900 mb-12">{t.methodology.title}</h2>
           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {t.methodology.steps.map((step: any, idx: number) => (
                <div key={idx} className="bg-white p-8 border-t-4 border-brand-accent shadow-sm">
                  <div className="text-4xl font-bold text-slate-200 mb-4">0{idx + 1}</div>
                  <h3 className="text-xl font-bold text-brand-900 mb-2">{step.title}</h3>
                  <p className="text-slate-500 text-sm">{step.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default Action;