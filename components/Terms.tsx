import React from 'react';

export default function Terms() {
  return (
    <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto text-gray-300">
      <h1 className="text-4xl font-display font-bold text-white mb-10">Conditions Générales de <span className="text-primary">Vente</span></h1>

      <div className="space-y-8 bg-dark-card border border-white/5 p-8 rounded-2xl">
        <section>
          <h2 className="text-xl font-bold text-white mb-4">Article 1 : Objet</h2>
          <p>
            Les présentes conditions régissent les ventes de coupons de recharge PCS effectuées par la société ItPCS via son site internet.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4">Article 2 : Prix</h2>
          <p>
            Les prix de nos produits sont indiqués en euros toutes taxes comprises (TTC). ItPCS se réserve le droit de modifier ses prix à tout moment, mais le produit sera facturé sur la base du tarif en vigueur au moment de la validation de la commande.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4">Article 3 : Commandes</h2>
          <p>
            Toute commande figure sur le site internet suppose l'adhésion aux présentes Conditions Générales. Toute confirmation de commande entraîne votre adhésion pleine et entière aux présentes conditions générales de vente, sans exception ni réserve.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4">Article 4 : Paiement</h2>
          <p>
            Le fait de valider votre commande implique pour vous l'obligation de payer le prix indiqué. Le règlement de vos achats s'effectue par carte bancaire grâce au système sécurisé 3D Secure.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4">Article 5 : Livraison</h2>
          <p>
            Les produits (codes de recharge) sont livrés exclusivement par voie électronique à l'adresse email indiquée au cours du processus de commande. Le délai de livraison est généralement instantané après validation du paiement.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4">Article 6 : Rétractation</h2>
          <p>
            Conformément à l'article L.221-28 du Code de la consommation, le droit de rétractation ne peut être exercé pour les contrats de fourniture d'un contenu numérique non fourni sur un support matériel dont l'exécution a commencé après accord préalable exprès du consommateur et renoncement exprès à son droit de rétractation. En validant sa commande, le client accepte que la fourniture du code commence immédiatement et renonce expressément à son droit de rétractation.
          </p>
        </section>
      </div>
    </div>
  );
}