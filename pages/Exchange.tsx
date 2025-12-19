import React from 'react';
import { Calendar, MapPin, Users, Trophy } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Exchange: React.FC = () => {
  const { langData } = useLanguage();
  const t = langData.exchange;

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16">
          <h1 className="text-4xl font-serif font-bold text-brand-900 mb-6">{t.title}</h1>
          <p className="text-slate-600 max-w-3xl text-lg">
            {t.desc}
          </p>
        </div>

        {/* Featured Event - Contest */}
        <div id="contest" className="bg-brand-900 rounded-none overflow-hidden shadow-xl mb-20 text-white relative scroll-mt-24">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-800 opacity-20 transform skew-x-12 translate-x-20"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-12 z-10">
              <div className="flex items-center space-x-2 text-brand-accent mb-4">
                <Trophy className="w-6 h-6" />
                <span className="uppercase tracking-widest font-bold text-sm">{t.contest.label}</span>
              </div>
              <h2 className="text-4xl font-serif font-bold mb-6">{t.contest.title}</h2>
              <p className="text-slate-300 mb-8 leading-relaxed">
                {t.contest.desc}
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="text-3xl font-bold text-white">50+</div>
                  <div className="text-sm text-slate-400">{t.contest.stat_enterprises}</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">¥100w</div>
                  <div className="text-sm text-slate-400">{t.contest.stat_prize}</div>
                </div>
              </div>
              <button className="bg-brand-accent hover:bg-sky-400 text-white px-8 py-3 font-medium transition-colors">
                {t.contest.btn}
              </button>
            </div>
            <div className="relative h-64 lg:h-auto">
              <img src="https://picsum.photos/id/175/800/800" alt="Contest" className="w-full h-full object-cover opacity-80" />
            </div>
          </div>
        </div>

        {/* Event List */}
        <div id="events" className="grid grid-cols-1 lg:grid-cols-3 gap-12 scroll-mt-24">
          
          <div className="lg:col-span-2 space-y-8">
            <h3 className="text-2xl font-serif font-bold text-brand-900 mb-6">{t.events.upcoming_title}</h3>
            
            {t.events.list.map((event: any, idx: number) => (
              <div key={idx} className="bg-white p-6 border-l-4 border-brand-accent flex flex-col sm:flex-row items-start sm:items-center hover:shadow-md transition-shadow">
                <div className="flex flex-col items-center justify-center min-w-[80px] mr-6 mb-4 sm:mb-0">
                  <span className="text-3xl font-bold text-brand-900">{event.day}</span>
                  <span className="text-xs font-bold text-slate-500 uppercase">{event.month}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-semibold">{event.type}</span>
                  </div>
                  <h4 className="text-xl font-bold text-brand-900 mb-2 hover:text-brand-accent cursor-pointer">{event.title}</h4>
                  <div className="flex items-center text-sm text-slate-500">
                    <MapPin className="w-4 h-4 mr-2" />
                    {event.location}
                  </div>
                </div>
                <button className="mt-4 sm:mt-0 px-4 py-2 border border-slate-300 text-sm font-medium hover:bg-slate-50">
                  {t.events.btn_details}
                </button>
              </div>
            ))}
          </div>

          <div>
             <h3 className="text-2xl font-serif font-bold text-brand-900 mb-6">{t.events.past_title}</h3>
             <div className="space-y-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="group cursor-pointer">
                    <div className="h-40 overflow-hidden mb-3">
                      <img src={`https://picsum.photos/id/${i + 50}/400/250`} alt="Event" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                    </div>
                    <h4 className="font-bold text-brand-900 group-hover:text-brand-accent transition-colors">
                      {t.events.past_list_title}
                    </h4>
                  </div>
                ))}
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Exchange;