import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const { langData } = useLanguage();
  const t = langData.footer;
  const [logoExpanded, setLogoExpanded] = useState(false);

  useEffect(() => {
    // Logo Animation Loop - Identical logic to Header
    let timeoutId: ReturnType<typeof setTimeout>;

    const runAnimation = () => {
       // 1. Expand (Open)
       setLogoExpanded(true);
       
       // 2. Wait for open transition (1s) + hold (2s) = 3000ms
       timeoutId = setTimeout(() => {
         // 3. Collapse (Close)
         setLogoExpanded(false);
         
         // 4. Wait for close transition (1s) + hold (2s) = 3000ms before opening again
         timeoutId = setTimeout(runAnimation, 3000);
       }, 3000);
    };

    // Initial start delay
    timeoutId = setTimeout(runAnimation, 500);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <footer className="bg-brand-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-slate-700 pb-12">
          
          <div className="col-span-1 md:col-span-1">
            {/* Animated Logo Component */}
            <Link to="/" className="flex items-center space-x-2 group mb-6">
              <div className="w-10 h-10 flex items-center justify-center border-2 border-white text-white rounded-sm">
                <span className="font-serif font-bold text-xl">AI</span>
              </div>
              <div className="flex flex-col">
                <div className="font-serif text-lg font-bold leading-none flex text-white">
                  <span>A</span>
                  
                  {/* Expandable part: I _ D */}
                  <div className={`transition-all duration-1000 ease-in-out overflow-hidden flex ${logoExpanded ? 'w-[1.4em] opacity-100' : 'w-0 opacity-0'}`}>
                    <span>I</span>
                    <span>&nbsp;</span>
                    <span className="text-brand-accent">D</span>
                  </div>

                  {/* G: Changes from Base to Accent */}
                  <span className={`transition-colors duration-1000 ${logoExpanded ? 'text-brand-accent' : ''}`}>G</span>
                  
                  <span>I</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] tracking-widest uppercase font-bold mt-0.5 text-slate-100">
                     AI数据治理研究院
                  </span>
                  <span className="text-[8px] tracking-widest uppercase text-slate-300 scale-90 origin-left">
                     Data Governance Institute
                  </span>
                </div>
              </div>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              {t.desc}
            </p>
            <div className="flex space-x-4">
              <Linkedin className="w-5 h-5 text-slate-400 hover:text-white cursor-pointer" />
              <Twitter className="w-5 h-5 text-slate-400 hover:text-white cursor-pointer" />
              <Facebook className="w-5 h-5 text-slate-400 hover:text-white cursor-pointer" />
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Institute</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">{t.about_us}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t.expert_team}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t.join_us}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t.contact}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Core Business</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">{t.dcmm_consulting}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t.ent_governance}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t.ai_research}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t.contest}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 flex-shrink-0" />
                <span>{t.address}</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 flex-shrink-0" />
                <span>contact@cdmp.com</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 flex-shrink-0" />
                <span>+86 10 8888 6666</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>{t.rights}</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">{t.privacy}</a>
            <a href="#" className="hover:text-white">{t.terms}</a>
            <a href="#" className="hover:text-white">京ICP备12345678号</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;