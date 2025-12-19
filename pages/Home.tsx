import React, { useState, useEffect } from 'react';
import { ArrowRight, FileText, Award, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const CAROUSEL_IMAGES = [
  // 1. High Voltage Power Lines (Grid Infrastructure)
  'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80',
  
  // 2. Tesla/EV Structure (Complex Object Disassembly/Structure)
  'https://images.unsplash.com/photo-1503376763036-066120622c74?auto=format&fit=crop&q=80',
  
  // 3. Offshore Oil Platform (Industrial Data)
  'https://images.unsplash.com/photo-1551651765-5c1236113c75?auto=format&fit=crop&q=80',
  
  // 4. High Speed Train Station/Tracks from above (Scale & Logistics)
  // Switched to an aerial view showing multiple tracks/trains context
  'https://images.unsplash.com/photo-1527685216219-c72473855a01?auto=format&fit=crop&q=80',
  
  // 5. Particle Accelerator / Scientific Data (The "Math/Physics" visual)
  'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80',
  
  // 6. Financial Data / Quant Trading Screens
  'https://images.unsplash.com/photo-1611974765270-ca1258634369?auto=format&fit=crop&q=80'
];

const Home: React.FC = () => {
  const { langData } = useLanguage();
  const h = langData.hero;
  const t = langData.home;

  const [currentImageIdx, setCurrentImageIdx] = useState(0);

  useEffect(() => {
    // 1. Preload all images to minimize loading artifacts during carousel switch
    CAROUSEL_IMAGES.forEach(src => {
        const img = new Image();
        img.src = src;
    });

    // 2. Set up the carousel interval (5 seconds)
    const interval = setInterval(() => {
        setCurrentImageIdx(prev => (prev + 1) % CAROUSEL_IMAGES.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden bg-brand-900">
        
        {/* Carousel Background Layers */}
        {/* We render all images stacked, managing visibility via opacity. 
            This avoids the 'flash of black' by ensuring the image is in the DOM. */}
        {CAROUSEL_IMAGES.map((src, index) => (
          <div 
            key={src}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${index === currentImageIdx ? 'opacity-100' : 'opacity-0'}`}
            style={{ backgroundImage: `url('${src}')` }}
            aria-hidden="true"
          ></div>
        ))}
        
        {/* Overlay gradient to ensure text readability on any image */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-900/90 to-brand-900/40 z-10"></div>
        
        {/* Content */}
        <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              {h.title_start}<br />
              <span className="text-brand-accent">{h.title_highlight}</span> {h.title_end}
            </h1>
            <p className="text-xl text-slate-200 mb-10 font-light max-w-2xl leading-relaxed">
              {h.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/research" className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium text-brand-900 bg-white hover:bg-slate-100 transition-colors duration-300">
                {h.cta_research}
              </Link>
              <Link to="/action" className="inline-flex items-center justify-center px-8 py-4 border border-white text-base font-medium text-white hover:bg-white hover:text-brand-900 transition-colors duration-300">
                {h.cta_consulting}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* News Section */}
      <section id="news" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-serif font-bold text-brand-900 mb-2">{t.news_title}</h2>
              <div className="h-1 w-20 bg-brand-accent"></div>
            </div>
            <Link to="/research" className="hidden md:flex items-center text-brand-700 hover:text-brand-accent font-medium">
              {t.view_more} <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {t.news_items && t.news_items.map((item: any, index: number) => (
              <div key={index} className="group cursor-pointer">
                <div className="overflow-hidden mb-4 h-64">
                  <img 
                    src={`https://picsum.photos/id/${item.img}/600/400`} 
                    alt={item.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="text-xs text-brand-accent font-bold uppercase tracking-wider mb-2">News</div>
                <h3 className="text-xl font-serif font-semibold text-brand-900 group-hover:text-brand-accent transition-colors leading-snug mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500">{item.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements / Features */}
      <section id="achievements" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-serif font-bold text-brand-900 mb-4">{t.achievements_title}</h2>
            <p className="text-slate-600">
              {t.achievements_desc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-slate-200 hover:border-brand-accent hover:shadow-lg transition-all duration-300 group">
              <TrendingUp className="w-10 h-10 text-brand-900 group-hover:text-brand-accent mb-6 transition-colors" />
              <h3 className="text-xl font-bold text-brand-900 mb-3">{t.achievements_1_title}</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                {t.achievements_1_desc}
              </p>
              <Link to="/indices" className="inline-flex items-center text-sm font-semibold text-brand-900 group-hover:text-brand-accent">
                {t.read_details} <ArrowRight className="ml-1 w-3 h-3" />
              </Link>
            </div>

            <div className="p-8 border border-slate-200 hover:border-brand-accent hover:shadow-lg transition-all duration-300 group">
              <FileText className="w-10 h-10 text-brand-900 group-hover:text-brand-accent mb-6 transition-colors" />
              <h3 className="text-xl font-bold text-brand-900 mb-3">{t.achievements_2_title}</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                {t.achievements_2_desc}
              </p>
              <Link to="/research" className="inline-flex items-center text-sm font-semibold text-brand-900 group-hover:text-brand-accent">
                {t.read_report} <ArrowRight className="ml-1 w-3 h-3" />
              </Link>
            </div>

            <div className="p-8 border border-slate-200 hover:border-brand-accent hover:shadow-lg transition-all duration-300 group">
              <Award className="w-10 h-10 text-brand-900 group-hover:text-brand-accent mb-6 transition-colors" />
              <h3 className="text-xl font-bold text-brand-900 mb-3">{t.achievements_3_title}</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                {t.achievements_3_desc}
              </p>
              <Link to="/learning" className="inline-flex items-center text-sm font-semibold text-brand-900 group-hover:text-brand-accent">
                {t.contribute} <ArrowRight className="ml-1 w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick CTA */}
      <section className="py-20 bg-brand-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/cubes.png')` }}></div>
        <div className="max-w-4xl mx-auto px-4 relative text-center">
          <h2 className="text-3xl font-serif font-bold text-white mb-6">{t.cta_title}</h2>
          <p className="text-slate-300 mb-10 text-lg">
            {t.cta_desc}
          </p>
          <Link to="/action" className="inline-block bg-white text-brand-900 font-medium px-8 py-3 hover:bg-brand-accent hover:text-white transition-colors duration-300">
            {t.cta_btn}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;