import React from 'react';

interface StaticVisualProps {
  type: 'nodes' | 'grid' | 'circuit' | 'security' | 'infrastructure' | 'platform' | 'tracks' | 'particles' | 'chart' | 'collaboration';
  className?: string;
}

const StaticVisual: React.FC<StaticVisualProps> = ({ type, className = "" }) => {
  const getSvg = () => {
    switch (type) {
      case 'nodes':
        return (
          <svg viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="800" height="500" fill="#0F172A"/>
            <circle cx="400" cy="250" r="150" stroke="#0EA5E9" strokeWidth="0.5" strokeDasharray="10 10"/>
            <g opacity="0.4">
              {[...Array(20)].map((_, i) => (
                <circle key={i} cx={200 + Math.random() * 400} cy={100 + Math.random() * 300} r="2" fill="#0EA5E9">
                  <animate attributeName="opacity" values="0.2;1;0.2" dur={`${2 + Math.random() * 3}s`} repeatCount="indefinite" />
                </circle>
              ))}
            </g>
            <path d="M200 100 L400 250 L600 100 M200 400 L400 250 L600 400" stroke="#0EA5E9" strokeWidth="0.5" opacity="0.3"/>
          </svg>
        );
      case 'grid':
        return (
          <svg viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="800" height="500" fill="#1E293B"/>
            <path d="M0 50H800M0 150H800M0 250H800M0 350H800M0 450H800" stroke="#334155" strokeWidth="1"/>
            <path d="M50 0V500M150 0V500M250 0V500M350 0V500M450 0V500M550 0V500M650 0V500M750 0V500" stroke="#334155" strokeWidth="1"/>
            <rect x="250" y="150" width="300" height="200" fill="#0EA5E9" fillOpacity="0.1" stroke="#0EA5E9"/>
          </svg>
        );
      case 'security':
        return (
          <svg viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="800" height="500" fill="#0F172A"/>
            <path d="M400 100L550 160V300C550 380 400 450 400 450C400 450 250 380 250 300V160L400 100Z" stroke="#0EA5E9" strokeWidth="2"/>
            <path d="M350 250L390 290L460 210" stroke="#0EA5E9" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'infrastructure':
        return (
          <svg viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="800" height="500" fill="#0F172A"/>
            <path d="M100 400L250 100L400 400M400 400L550 100L700 400" stroke="#0EA5E9" strokeWidth="2" opacity="0.6"/>
            <circle cx="250" cy="100" r="10" fill="#0EA5E9"/>
            <circle cx="550" cy="100" r="10" fill="#0EA5E9"/>
          </svg>
        );
      case 'platform':
        return (
          <svg viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="800" height="500" fill="#1E293B"/>
            <path d="M200 350L400 450L600 350L400 250L200 350Z" fill="#0EA5E9" fillOpacity="0.2" stroke="#0EA5E9"/>
            <path d="M200 250L400 350L600 250L400 150L200 250Z" fill="#0EA5E9" fillOpacity="0.4" stroke="#0EA5E9"/>
            <path d="M200 150L400 250L600 150L400 50L200 150Z" fill="#0EA5E9" fillOpacity="0.6" stroke="#0EA5E9"/>
          </svg>
        );
      case 'collaboration':
        return (
          <svg viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="800" height="500" fill="#0F172A"/>
            <circle cx="350" cy="250" r="60" stroke="#0EA5E9" strokeWidth="2"/>
            <circle cx="450" cy="250" r="60" stroke="#0EA5E9" strokeWidth="2"/>
            <path d="M300 250C300 150 500 150 500 250" stroke="#0EA5E9" strokeWidth="1" strokeDasharray="5 5"/>
          </svg>
        );
      case 'tracks':
        return (
          <svg viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="800" height="500" fill="#0F172A"/>
            <path d="M0 100L800 100M0 200L800 200M0 300L800 300M0 400L800 400" stroke="#334155" strokeWidth="10"/>
            <path d="M100 0V500M200 0V500M300 0V500M400 0V500M500 0V500M600 0V500M700 0V500" stroke="#1E293B" strokeWidth="2"/>
            <rect x="200" y="195" width="400" height="10" fill="#0EA5E9">
               <animate attributeName="x" from="-400" to="800" dur="3s" repeatCount="indefinite" />
            </rect>
          </svg>
        );
      case 'particles':
        return (
          <svg viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="800" height="500" fill="#0F172A"/>
            <defs>
              <radialGradient id="grad1" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0" />
              </radialGradient>
            </defs>
            {[...Array(30)].map((_, i) => (
              <circle key={i} cx={Math.random() * 800} cy={Math.random() * 500} r={2 + Math.random() * 4} fill="url(#grad1)">
                <animate attributeName="opacity" values="0;1;0" dur={`${1 + Math.random() * 2}s`} repeatCount="indefinite" />
              </circle>
            ))}
          </svg>
        );
      case 'chart':
        return (
          <svg viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="800" height="500" fill="#1E293B"/>
            <path d="M100 400 L200 300 L300 350 L400 200 L500 250 L600 100 L700 150" stroke="#0EA5E9" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M100 400 L200 300 L300 350 L400 200 L500 250 L600 100 L700 150 V400 H100 Z" fill="#0EA5E9" fillOpacity="0.1"/>
          </svg>
        );
      case 'circuit':
        return (
          <svg viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="800" height="500" fill="#0F172A"/>
            <path d="M100 100H300V300H500V100H700" stroke="#0EA5E9" strokeWidth="2" opacity="0.4"/>
            <rect x="95" y="95" width="10" height="10" fill="#0EA5E9"/>
            <rect x="295" y="295" width="10" height="10" fill="#0EA5E9"/>
            <rect x="495" y="95" width="10" height="10" fill="#0EA5E9"/>
            <rect x="695" y="95" width="10" height="10" fill="#0EA5E9"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`w-full h-full overflow-hidden flex items-center justify-center ${className}`}>
      {getSvg()}
    </div>
  );
};

export default StaticVisual;