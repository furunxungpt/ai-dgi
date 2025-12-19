import React from 'react';
import { BookOpen, Video, Users, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Learning: React.FC = () => {
  const { langData } = useLanguage();
  const t = langData.learning;

  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif font-bold text-brand-900 mb-6">{t.title}</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            {t.desc}
          </p>
        </div>

        {/* Feature: Open Source Terminology */}
        <div id="terminology" className="bg-slate-900 text-white p-10 mb-20 flex flex-col md:flex-row items-center justify-between scroll-mt-24">
          <div className="md:w-2/3 pr-8">
            <h2 className="text-3xl font-serif font-bold mb-4">{t.terminology.title}</h2>
            <p className="text-slate-300 mb-6 text-lg">
              {t.terminology.desc}
            </p>
            <div className="flex space-x-4">
              <button className="bg-brand-accent text-white px-6 py-2 font-medium hover:bg-sky-400 transition-colors">
                {t.terminology.btn_view}
              </button>
              <button className="border border-slate-500 text-slate-300 px-6 py-2 font-medium hover:text-white hover:border-white transition-colors">
                {t.terminology.btn_submit}
              </button>
            </div>
          </div>
          <div className="md:w-1/3 mt-8 md:mt-0 flex justify-center">
             <BookOpen className="w-32 h-32 text-slate-700" />
          </div>
        </div>

        {/* Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* CDP Training */}
          <div id="training" className="border border-slate-200 p-8 hover:shadow-lg transition-shadow scroll-mt-24">
            <div className="w-12 h-12 bg-blue-50 flex items-center justify-center mb-6">
               <CheckCircle className="w-6 h-6 text-brand-900" />
            </div>
            <h3 className="text-xl font-bold text-brand-900 mb-3">{t.training.title}</h3>
            <p className="text-slate-600 text-sm mb-6">
              {t.training.desc}
            </p>
            <ul className="space-y-2 mb-6 text-sm text-slate-500">
              {t.training.levels.map((level: string, i: number) => (
                <li key={i} className="flex items-center"><span className="w-1.5 h-1.5 bg-brand-accent rounded-full mr-2"></span>{level}</li>
              ))}
            </ul>
            <a href="#" className="text-brand-accent font-medium text-sm hover:underline">{t.training.link} &rarr;</a>
          </div>

          {/* Webinars */}
          <div id="webinar" className="border border-slate-200 p-8 hover:shadow-lg transition-shadow scroll-mt-24">
            <div className="w-12 h-12 bg-blue-50 flex items-center justify-center mb-6">
               <Video className="w-6 h-6 text-brand-900" />
            </div>
            <h3 className="text-xl font-bold text-brand-900 mb-3">{t.webinar.title}</h3>
            <p className="text-slate-600 text-sm mb-6">
              {t.webinar.desc}
            </p>
            <div className="mb-6">
              <div className="bg-slate-50 p-3 mb-2 rounded">
                <p className="text-xs font-bold text-brand-900 mb-1">{t.webinar.next_label}</p>
                <p className="text-xs text-slate-600">{t.webinar.next_topic}</p>
              </div>
            </div>
            <a href="#" className="text-brand-accent font-medium text-sm hover:underline">{t.webinar.link} &rarr;</a>
          </div>

          {/* Bootcamp */}
          <div id="bootcamp" className="border border-slate-200 p-8 hover:shadow-lg transition-shadow scroll-mt-24">
            <div className="w-12 h-12 bg-blue-50 flex items-center justify-center mb-6">
               <Users className="w-6 h-6 text-brand-900" />
            </div>
            <h3 className="text-xl font-bold text-brand-900 mb-3">{t.bootcamp.title}</h3>
            <p className="text-slate-600 text-sm mb-6">
              {t.bootcamp.desc}
            </p>
            <div className="flex -space-x-2 mb-6">
               <img className="w-8 h-8 rounded-full border-2 border-white" src="https://picsum.photos/id/1005/100/100" alt="Avatar" />
               <img className="w-8 h-8 rounded-full border-2 border-white" src="https://picsum.photos/id/1011/100/100" alt="Avatar" />
               <img className="w-8 h-8 rounded-full border-2 border-white" src="https://picsum.photos/id/1027/100/100" alt="Avatar" />
               <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[10px] text-slate-600 font-bold">+2k</div>
            </div>
            <a href="#" className="text-brand-accent font-medium text-sm hover:underline">{t.bootcamp.link} &rarr;</a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Learning;