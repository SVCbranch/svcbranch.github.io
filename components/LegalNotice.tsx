import React from 'react';

export default function LegalNotice() {
  return (
    <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto text-gray-300">
      <h1 className="text-4xl font-display font-bold text-white mb-10">Mentions <span className="text-primary">Légales</span></h1>

      <div className="space-y-8 bg-dark-card border border-white/5 p-8 rounded-2xl">
        <section>
          <h2 className="text-xl font-bold text-white mb-4">1. Éditeur du site</h2>
          <p>
            Le site ItPCS est édité par la société ItPCS Ltd.<br />
            Siège social : 123 Avenue de la République, 75011 Paris, France.<br />
            Numéro SIRET : 123 456 789 00012<br />
            Directeur de la publication : Service Juridique ItPCS<br />
            Email : contact@itpcs.com
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4">2. Hébergement</h2>
          <p>
            Le site est hébergé par GitHub<br />
            Adresse : San Francisco, California, U.S.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4">3. Propriété intellectuelle</h2>
          <p>
            L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4">4. Limitation de responsabilité</h2>
          <p>
            Les informations contenues sur ce site sont aussi précises que possible et le site est périodiquement remis à jour, mais peut toutefois contenir des inexactitudes, des omissions ou des lacunes. Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, merci de bien vouloir le signaler par email.
          </p>
        </section>
      </div>
    </div>
  );
}