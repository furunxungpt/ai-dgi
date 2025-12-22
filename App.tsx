import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import Home from './pages/Home.tsx';
import Indices from './pages/Indices.tsx';
import Research from './pages/Research.tsx';
import Exchange from './pages/Exchange.tsx';
import Learning from './pages/Learning.tsx';
import Action from './pages/Action.tsx';
import { LanguageProvider } from './contexts/LanguageContext.tsx';

// Scroll to top component with hash support
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  React.useEffect(() => {
    if (hash) {
      // Small timeout to ensure DOM is rendered before scrolling
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <HashRouter>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-white text-brand-900">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/indices" element={<Indices />} />
              <Route path="/research" element={<Research />} />
              <Route path="/exchange" element={<Exchange />} />
              <Route path="/learning" element={<Learning />} />
              <Route path="/action" element={<Action />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </HashRouter>
    </LanguageProvider>
  );
};

export default App;