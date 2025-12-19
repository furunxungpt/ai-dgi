import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Search } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoExpanded, setLogoExpanded] = useState(false);
  const location = useLocation();
  const { language, toggleLanguage, langData } = useLanguage();

  // Check if we are on the home page
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Logo Animation Loop
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

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    }
  }, []);

  const n = langData.nav;

  // Determine effective style state: Scrolled OR Not Home Page
  // If not on home page, we always want the "scrolled" (white bg) look for visibility
  const isScrolledState = scrolled || !isHomePage;

  const navItems = [
    { 
      label: n.home, 
      path: '/', 
      subItems: [
        { label: n.sub.news, path: '/#news' },
        { label: n.sub.achievements, path: '/#achievements' }
      ] 
    },
    { 
      label: n.indices, 
      path: '/indices', 
      subItems: [
        { label: n.sub.methodology, path: '/indices#methodology' },
        { label: n.sub.totalIndex, path: '/indices#total' },
        { label: n.sub.breakdownIndex, path: '/indices#breakdown' },
        { label: n.sub.specialIndex, path: '/indices#special' }
      ] 
    },
    { 
      label: n.research, 
      path: '/research', 
      subItems: [
        { label: n.sub.palantir, path: '/research?category=Palantir研究' },
        { label: n.sub.aiGovernance, path: '/research?category=AI数据治理' },
        { label: n.sub.fde, path: '/research?category=FDE先锋' },
        { label: n.sub.techTrends, path: '/research?category=技术热点' }
      ]
    },
    { 
      label: n.exchange, 
      path: '/exchange', 
      subItems: [
        { label: n.sub.events, path: '/exchange#events' },
        { label: n.sub.contest, path: '/exchange#contest' },
        { label: n.sub.conference, path: '/exchange#events' }
      ]
    },
    { 
      label: n.learning, 
      path: '/learning', 
      subItems: [
        { label: n.sub.terminology, path: '/learning#terminology' },
        { label: n.sub.training, path: '/learning#training' },
        { label: n.sub.webinar, path: '/learning#webinar' },
        { label: n.sub.bootcamp, path: '/learning#bootcamp' }
      ]
    },
    { 
      label: n.action, 
      path: '/action', 
      subItems: [
        { label: n.sub.dcmm, path: '/action#dcmm' },
        { label: n.sub.consulting, path: '/action#consulting' }
      ]
    },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolledState ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo with Animation */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className={`w-10 h-10 flex items-center justify-center border-2 ${isScrolledState ? 'border-brand-900 text-brand-900' : 'border-white text-white'} rounded-sm`}>
              <span className="font-serif font-bold text-xl">AI</span>
            </div>
            <div className="flex flex-col">
              <div className={`font-serif text-lg font-bold leading-none flex ${isScrolledState ? 'text-brand-900' : 'text-white'}`}>
                {/* 
                  Color Logic:
                  AGI: All Base Color (scrolled ? navy : white)
                  AI DGI: AI & I (Base), DG (Accent)
                */}
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
                <span className={`text-[10px] tracking-widest uppercase font-bold mt-0.5 ${isScrolledState ? 'text-brand-700' : 'text-slate-100'}`}>
                   AI数据治理研究院
                </span>
                <span className={`text-[8px] tracking-widest uppercase ${isScrolledState ? 'text-slate-500' : 'text-slate-300'} scale-90 origin-left`}>
                   Data Governance Institute
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-10 h-10 items-center">
            {navItems.map((item) => (
              <div key={item.path} className="relative group h-full flex items-center">
                <Link
                  to={item.path}
                  className={`flex items-center text-base font-medium transition-colors duration-200 uppercase tracking-wide
                    ${location.pathname === item.path 
                      ? (isScrolledState ? 'text-brand-accent border-b-2 border-brand-accent h-full' : 'text-white border-b-2 border-white h-full') 
                      : (isScrolledState ? 'text-slate-600 hover:text-brand-900' : 'text-slate-300 hover:text-white')}
                  `}
                >
                  {item.label}
                </Link>

                {/* Dropdown Menu - Gray Transparent, Left Aligned with parent item */}
                {item.subItems && (
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out">
                    <div className="bg-slate-900/90 backdrop-blur-md shadow-xl border-t-2 border-brand-accent py-3 min-w-[200px] rounded-b-sm">
                      {item.subItems.map((sub) => (
                        <Link 
                          key={sub.label} 
                          to={sub.path}
                          className="block px-5 py-3 text-base text-slate-300 hover:bg-white/10 hover:text-white transition-colors text-left font-medium"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Utilities */}
          <div className="hidden md:flex items-center space-x-4">
            <button className={`${isScrolledState ? 'text-slate-600' : 'text-white'} hover:text-brand-accent`}>
              <Search size={20} />
            </button>
            <button 
              onClick={toggleLanguage}
              className={`flex items-center space-x-1 ${isScrolledState ? 'text-slate-600' : 'text-white'} hover:text-brand-accent transition-colors`}
            >
              <Globe size={20} />
              <span className="text-xs font-bold uppercase">{language === 'zh' ? 'EN' : '中'}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
             <button 
              onClick={toggleLanguage}
              className={`${isScrolledState ? 'text-brand-900' : 'text-white'}`}
            >
              <span className="text-sm font-bold">{language === 'zh' ? 'EN' : 'CN'}</span>
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className={`${isScrolledState ? 'text-brand-900' : 'text-white'}`}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-slate-100 max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col py-4 px-6 space-y-4">
            {navItems.map((item) => (
              <div key={item.path}>
                <Link
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-serif font-medium block mb-2 ${location.pathname === item.path ? 'text-brand-accent' : 'text-slate-800'}`}
                >
                  {item.label}
                </Link>
                {item.subItems && (
                  <div className="pl-4 flex flex-col space-y-2 border-l-2 border-slate-100">
                    {item.subItems.map(sub => (
                      <Link
                        key={sub.label}
                        to={sub.path}
                        onClick={() => setIsOpen(false)}
                        className="text-sm text-slate-500 hover:text-brand-accent"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;