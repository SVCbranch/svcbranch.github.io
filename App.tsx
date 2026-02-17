import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import RechargeSection from './components/RechargeSection';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import Help from './components/Help';
import LegalNotice from './components/LegalNotice';
import Terms from './components/Terms';
import Privacy from './components/Privacy';
import Footer from './components/Footer';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentPage(page);
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'how-it-works':
        return <HowItWorks />;
      case 'pricing':
        return <Pricing />;
      case 'help':
        return <Help />;
      case 'legal':
        return <LegalNotice />;
      case 'terms':
        return <Terms />;
      case 'privacy':
        return <Privacy />;
      case 'home':
      default:
        return (
          <>
            <Hero />
            <RechargeSection />
            {/* Trust Section */}
            <section className="py-20 border-y border-white/5 bg-dark-surface/50 backdrop-blur-sm">
              <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                    <span className="material-icons-outlined">shield</span>
                  </div>
                  <h3 className="text-white font-bold mb-2">100% Sécurisé</h3>
                  <p className="text-sm text-gray-400">Vos transactions sont cryptées et protégées par les plus hauts standards bancaires.</p>
                </div>
                <div className="p-6 border-x border-white/5">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                    <span className="material-icons-outlined">schedule</span>
                  </div>
                  <h3 className="text-white font-bold mb-2">Livraison Instantanée</h3>
                  <p className="text-sm text-gray-400">Recevez votre code de recharge par email dans les 30 secondes suivant la validation.</p>
                </div>
                <div className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                    <span className="material-icons-outlined">support_agent</span>
                  </div>
                  <h3 className="text-white font-bold mb-2">Support 24/7</h3>
                  <p className="text-sm text-gray-400">Une question ? Notre équipe vous répond à tout moment, jour et nuit.</p>
                </div>
              </div>
            </section>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-dark-bg text-gray-100 font-sans selection:bg-primary selection:text-black overflow-x-hidden flex flex-col">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-matrix opacity-20"></div>
        <div className="absolute inset-0 bg-noise pointer-events-none mix-blend-overlay"></div>
        {/* Glow Orbs */}
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header currentPage={currentPage} onNavigate={handleNavigate} />
        
        <main className="flex-grow">
          {renderContent()}
        </main>
        
        <Footer onNavigate={handleNavigate} />
      </div>
    </div>
  );
}