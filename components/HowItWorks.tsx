import React from 'react';

export default function HowItWorks() {
  const steps = [
    {
      icon: 'touch_app',
      title: '1. Sélectionnez le montant',
      desc: 'Choisissez le montant de recharge PCS souhaité parmi nos options disponibles (20€, 50€, 100€, etc.).'
    },
    {
      icon: 'email',
      title: '2. Indiquez votre email',
      desc: 'Renseignez l\'adresse email sur laquelle vous souhaitez recevoir votre code de rechargement.'
    },
    {
      icon: 'lock',
      title: '3. Payez en toute sécurité',
      desc: 'Effectuez votre règlement via notre plateforme de paiement sécurisée (3D Secure). Vos données sont cryptées.'
    },
    {
      icon: 'qr_code',
      title: '4. Recevez votre code',
      desc: 'Votre code de recharge est envoyé instantanément sur votre boite mail. Il est prêt à l\'emploi !'
    }
  ];

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
          Comment ça <span className="text-primary">marche ?</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Obtenir votre recharge PCS n'a jamais été aussi simple. 
          Suivez ces 4 étapes rapides pour créditer votre carte en quelques secondes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
        {/* Connecting line for desktop */}
        <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent -z-10"></div>

        {steps.map((step, index) => (
          <div key={index} className="bg-dark-card border border-white/5 p-8 rounded-2xl relative group hover:border-primary/30 transition-colors">
            <div className="w-16 h-16 rounded-2xl bg-dark-bg border border-white/10 flex items-center justify-center text-primary mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(243,245,159,0.1)]">
              <span className="material-icons-round text-3xl">{step.icon}</span>
            </div>
            <h3 className="text-xl font-display font-bold text-white mb-3 text-center">{step.title}</h3>
            <p className="text-sm text-gray-400 text-center leading-relaxed">
              {step.desc}
            </p>
            
            {/* Step Number Background */}
            <div className="absolute -top-6 -right-4 text-9xl font-display font-bold text-white/5 select-none pointer-events-none">
              {index + 1}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 bg-primary/5 border border-primary/20 rounded-2xl p-8 md:p-12 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Prêt à recharger ?</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          Rejoignez des milliers d'utilisateurs qui rechargent leur carte PCS en toute simplicité.
        </p>
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} // Simple reset if on same page, handled by parent usually but keeping simple
          className="inline-flex items-center gap-2 bg-primary text-black px-8 py-3 rounded-full font-bold hover:bg-primary-dark transition-colors"
        >
          Commencer maintenant
          <span className="material-icons-round">arrow_upward</span>
        </button>
      </div>
    </div>
  );
}