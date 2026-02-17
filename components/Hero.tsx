import React from 'react';
import OrderCounter from './OrderCounter';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-8 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 animate-float">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-xs font-medium text-gray-300 tracking-wide uppercase">Système en ligne</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight tracking-tight">
          Rechargez votre carte PCS <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">
            en toute sécurité
          </span>
        </h1>
        
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Recevez votre code de recharge instantanément par email. 
          Paiement sécurisé, frais réduits et support disponible 24/7.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span className="material-icons-round text-primary text-base">verified</span>
            <span>Code officiel</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-gray-700 hidden sm:block"></div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span className="material-icons-round text-primary text-base">bolt</span>
            <span>Envoi immédiat</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-gray-700 hidden sm:block"></div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span className="material-icons-round text-primary text-base">lock</span>
            <span>Paiement 3DS</span>
          </div>
        </div>

        <OrderCounter />
      </div>
    </section>
  );
}