import React from 'react';

export default function Privacy() {
  return (
    <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto text-gray-300">
      <h1 className="text-4xl font-display font-bold text-white mb-10">Politique de <span className="text-primary">Confidentialité</span></h1>

      <div className="space-y-8 bg-dark-card border border-white/5 p-8 rounded-2xl">
        <section>
          <h2 className="text-xl font-bold text-white mb-4">1. Collecte de l'information</h2>
          <p>
            Nous recueillons des informations lorsque vous effectuez un achat sur notre site. Les informations recueillies incluent votre adresse email et les détails de transaction nécessaires au traitement de votre commande.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4">2. Utilisation des informations</h2>
          <p>
            Toutes les informations que nous recueillons auprès de vous peuvent être utilisées pour :
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Traiter votre transaction et livrer votre commande.</li>
              <li>Vous envoyer des emails concernant votre commande (facture, code).</li>
              <li>Améliorer le service client.</li>
            </ul>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4">3. Confidentialité du commerce en ligne</h2>
          <p>
            Nous sommes les seuls propriétaires des informations recueillies sur ce site. Vos informations personnelles ne seront pas vendues, échangées, transférées, ou données à une autre société pour n'importe quelle raison, sans votre consentement, en dehors de ce qui est nécessaire pour répondre à une demande et / ou une transaction (par exemple pour la validation bancaire).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4">4. Protection des informations</h2>
          <p>
            Nous mettons en œuvre une variété de mesures de sécurité pour préserver la sécurité de vos informations personnelles. Nous utilisons un cryptage à la pointe de la technologie pour protéger les informations sensibles transmises en ligne.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4">5. Cookies</h2>
          <p>
            Nos cookies améliorent l'accès à notre site et identifient les visiteurs réguliers. Cependant, cette utilisation de cookies n'est en aucune façon liée à des informations personnelles identifiables sur notre site.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4">6. Consentement</h2>
          <p>
            En utilisant notre site, vous consentez à notre politique de confidentialité.
          </p>
        </section>
      </div>
    </div>
  );
}