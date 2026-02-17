import React from 'react';

export default function Help() {
  const faqs = [
    {
      q: "Combien de temps faut-il pour recevoir mon code ?",
      a: "L'envoi est instantané. Une fois votre paiement validé, vous recevez votre code de recharge PCS par email en moins de 30 secondes en moyenne."
    },
    {
      q: "Je n'ai pas reçu mon email, que faire ?",
      a: "Vérifiez d'abord votre dossier 'Spams' ou 'Courriers indésirables'. Si vous ne trouvez toujours rien après 5 minutes, contactez notre support via le formulaire ci-dessous avec votre référence de transaction."
    },
    {
      q: "Comment utiliser mon coupon PCS ?",
      a: "Connectez-vous à votre compte MyPCS, allez dans la section 'Recharger ma carte', et entrez le code à 10 chiffres que nous vous avons envoyé. Le solde est mis à jour immédiatement."
    },
    {
      q: "Quels moyens de paiement acceptez-vous ?",
      a: "Nous acceptons les cartes bancaires Visa, Mastercard et Carte Bleue. Tous les paiements sont sécurisés par le protocole 3D Secure."
    },
    {
      q: "Est-ce que le service est ouvert le dimanche ?",
      a: "Oui ! Notre système est 100% automatisé. Vous pouvez acheter des recharges 24h/24 et 7j/7, y compris les weekends et jours fériés."
    }
  ];

  return (
    <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
          Centre <span className="text-primary">d'Aide</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Une question ? Trouvez votre réponse ci-dessous ou contactez notre équipe support.
        </p>
      </div>

      <div className="space-y-4 mb-20">
        {faqs.map((faq, index) => (
          <details key={index} className="group bg-dark-card border border-white/5 rounded-xl overflow-hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-white/5 transition-colors">
              <h3 className="text-lg font-medium text-white">{faq.q}</h3>
              <span className="material-icons-round text-gray-400 group-open:rotate-180 transition-transform duration-300">
                expand_more
              </span>
            </summary>
            <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
              {faq.a}
            </div>
          </details>
        ))}
      </div>

      <div className="bg-dark-surface border border-white/10 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        
        <h2 className="text-2xl font-bold text-white mb-4 relative z-10">Encore besoin d'aide ?</h2>
        <p className="text-gray-400 mb-8 max-w-lg mx-auto relative z-10">
          Notre équipe de support est disponible pour vous aider avec vos commandes et questions techniques.
        </p>
        
        <form className="max-w-md mx-auto space-y-4 relative z-10">
          <input 
            type="email" 
            placeholder="Votre adresse email" 
            className="w-full bg-dark-bg border border-white/10 rounded-lg p-3 text-white focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all"
          />
          <textarea 
            rows={4}
            placeholder="Comment pouvons-nous vous aider ?"
            className="w-full bg-dark-bg border border-white/10 rounded-lg p-3 text-white focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all resize-none"
          ></textarea>
          <button className="w-full bg-white text-black font-bold py-3 rounded-lg hover:bg-gray-200 transition-colors">
            Envoyer le message
          </button>
        </form>
      </div>
    </div>
  );
}