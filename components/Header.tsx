import React from 'react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const navItems = [
    { id: 'how-it-works', label: 'Comment ça marche' },
    { id: 'pricing', label: 'Tarifs' },
    { id: 'help', label: 'Aide' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-dark-bg/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div 
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-black font-bold font-display text-xl group-hover:scale-105 transition-transform">
            I
          </div>
          <span className="text-xl font-display font-bold tracking-tight text-white">
            ItPCS
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`text-sm font-medium transition-colors ${
                currentPage === item.id 
                  ? 'text-primary' 
                  : 'text-gray-400 hover:text-primary'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button 
          onClick={() => onNavigate('home')}
          className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 hover:border-primary/50 hover:bg-white/5 transition-all group"
        >
          <span className="material-icons-outlined text-sm text-primary">account_balance_wallet</span>
          <span className="text-sm font-medium">Recharger</span>
        </button>
        
        {/* Mobile menu button could be expanded here */}
        <button className="md:hidden text-white">
          <span className="material-icons-outlined">menu</span>
        </button>
      </div>
    </header>
  );
}