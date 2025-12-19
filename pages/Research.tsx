import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Research: React.FC = () => {
  const { langData, language } = useLanguage();
  const t = langData.research;
  const categories: string[] = t.categories;
  const articles = t.articles;

  // Since categories change when language changes, we need to map the selected category 
  // or reset it. For simplicity, if language changes, we reset to the first category (All).
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const location = useLocation();

  useEffect(() => {
    // Reset category on language switch or initial load to first category if current is invalid
    if (!categories.includes(activeCategory)) {
        setActiveCategory(categories[0]);
    }
  }, [language, categories]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get('category');
    if (categoryParam && categories.includes(categoryParam)) {
      setActiveCategory(categoryParam);
    }
  }, [location, categories]);

  const filteredArticles = activeCategory === categories[0]
    ? articles 
    : articles.filter((art: any) => art.category === activeCategory);

  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif font-bold text-brand-900 mb-6">{t.title}</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            {t.desc}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 text-sm font-medium transition-all duration-200 border 
                ${activeCategory === cat 
                  ? 'bg-brand-900 text-white border-brand-900' 
                  : 'bg-white text-slate-500 border-slate-200 hover:border-brand-900 hover:text-brand-900'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredArticles.map((article: any) => (
            <article key={article.id} className="flex flex-col group cursor-pointer">
              <div className="overflow-hidden mb-5">
                <img 
                  src={`https://picsum.photos/id/${article.image}/800/500`} 
                  alt={article.title} 
                  className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-brand-accent uppercase tracking-wider">{article.category}</span>
                  <span className="text-xs text-slate-400">{article.date}</span>
                </div>
                <h3 className="text-xl font-serif font-bold text-brand-900 mb-3 group-hover:text-brand-accent transition-colors">
                  {article.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {article.summary}
                </p>
              </div>
              <div className="mt-auto pt-4 border-t border-slate-100">
                <span className="text-sm font-medium text-brand-900 group-hover:underline">{t.read_more}</span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Research;