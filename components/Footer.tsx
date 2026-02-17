import React from 'react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="border-t border-white/5 bg-black py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-white/10 flex items-center justify-center text-white font-bold text-xs">
            I
          </div>
          <span className="text-gray-400 font-medium">ItPCS &copy; 2026</span>
        </div>
        
        <div className="flex gap-6 text-sm text-gray-500">
          <button onClick={() => onNavigate('legal')} className="hover:text-primary transition-colors">Mentions légales</button>
          <button onClick={() => onNavigate('terms')} className="hover:text-primary transition-colors">CGV</button>
          <button onClick={() => onNavigate('privacy')} className="hover:text-primary transition-colors">Confidentialité</button>
        </div>
        
        <div className="flex items-center gap-2 text-xs text-gray-600">
          <span className="w-2 h-2 rounded-full bg-green-500"></span>
          Services opérationnels
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-6 pt-4 border-t border-white/5 text-center">
        <p className="text-[10px] text-gray-700 leading-relaxed">
          Ceci est un concept, ItPCS est une compagnie fictive. <br className="hidden sm:block" />
          Nous ne sommes pas affiliés à Mastercard ou à la International Telecommunications Public Correspondence Service.
        </p>
      </div>
    </footer>
  );
}