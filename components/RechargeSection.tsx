import React, { useState } from 'react';
import { CardProduct, RECHARGE_OPTIONS } from '../types';

export default function RechargeSection() {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCard || !email) return;
    
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      alert(`Redirection vers le paiement pour le coupon de ${RECHARGE_OPTIONS.find(c => c.id === selectedCard)?.amount}€`);
    }, 1500);
  };

  const selectedOption = RECHARGE_OPTIONS.find(c => c.id === selectedCard);

  return (
    <section className="pt-8 pb-20 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Card Selection */}
          <div>
            <h2 className="text-2xl font-display font-bold text-white mb-6 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-black text-sm">1</span>
              Choisissez votre montant
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {RECHARGE_OPTIONS.map((card) => (
                <button
                  key={card.id}
                  onClick={() => setSelectedCard(card.id)}
                  className={`group relative p-6 rounded-xl border transition-all duration-300 text-left hover:-translate-y-1 ${
                    selectedCard === card.id
                      ? 'bg-primary/10 border-primary shadow-[0_0_30px_rgba(243,245,159,0.15)]'
                      : 'bg-dark-card border-white/5 hover:border-white/20'
                  }`}
                >
                  {card.isPopular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-black text-xs font-bold rounded-full uppercase tracking-wider">
                      Populaire
                    </span>
                  )}
                  
                  <div className="flex justify-between items-start mb-4">
                    <span className={`text-3xl font-bold font-display ${selectedCard === card.id ? 'text-primary' : 'text-white'}`}>
                      {card.amount}{card.currency}
                    </span>
                    {selectedCard === card.id && (
                      <span className="material-icons-round text-primary animate-pulse">check_circle</span>
                    )}
                  </div>
                  
                  <div className="flex justify-between items-end">
                    <div className="text-sm text-gray-400">Coupon PCS</div>
                    <div className={`text-lg font-medium ${selectedCard === card.id ? 'text-white' : 'text-gray-300'}`}>
                      {card.price.toFixed(2)}{card.currency}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Checkout Form */}
          <div className={`transition-all duration-500 ${selectedCard ? 'opacity-100 translate-x-0' : 'opacity-50 translate-x-10 grayscale pointer-events-none'}`}>
             <h2 className="text-2xl font-display font-bold text-white mb-6 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-white text-sm">2</span>
              Vos coordonnées
            </h2>

            <div className="bg-dark-card border border-white/5 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-32 bg-primary/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
              
              <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                    Adresse email de réception
                  </label>
                  <div className="relative group">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-primary transition-colors material-icons-outlined">
                      email
                    </span>
                    <input
                      type="email"
                      id="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="exemple@email.com"
                      className="w-full bg-dark-bg border border-white/10 rounded-lg py-4 pl-12 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                    />
                  </div>
                  <p className="mt-2 text-xs text-gray-500 flex items-center gap-1">
                    <span className="material-icons-outlined text-[14px]">info</span>
                    Le code sera envoyé uniquement à cette adresse.
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-gray-400">Total à payer</span>
                    <span className="text-3xl font-bold text-white font-display">
                      {selectedOption ? selectedOption.price.toFixed(2) : '0.00'}€
                    </span>
                  </div>

                  <button
                    type="submit"
                    disabled={!selectedCard || loading}
                    className="w-full group relative overflow-hidden rounded-lg bg-primary py-4 px-6 text-center font-bold text-black transition-transform active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {loading ? (
                         <svg className="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                           <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                           <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                         </svg>
                      ) : (
                        <>
                          Procéder au paiement
                          <span className="material-icons-round group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </>
                      )}
                    </span>
                    <div className="absolute inset-0 z-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  </button>
                  
                  <div className="mt-4 flex justify-center items-center gap-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    <span className="text-xs text-gray-500">Paiement sécurisé par</span>
                    {/* Mock logos text for simplicity as I cannot load external images reliably without urls */}
                    <span className="font-bold text-white text-xs tracking-wider border border-white/20 px-2 py-0.5 rounded">VISA</span>
                    <span className="font-bold text-white text-xs tracking-wider border border-white/20 px-2 py-0.5 rounded">MASTERCARD</span>
                  </div>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}