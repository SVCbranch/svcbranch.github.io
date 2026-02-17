import React from 'react';
import { RECHARGE_OPTIONS } from '../types';

export default function Pricing() {
  return (
    <div className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
          Tarifs <span className="text-primary">Transparents</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Pas de surprises, pas de frais cachés. Voici le détail complet de nos tarifs pour chaque coupon PCS.
        </p>
      </div>

      <div className="bg-dark-card border border-white/5 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-white/5 border-b border-white/10">
                <th className="p-6 text-sm font-semibold text-gray-300 uppercase tracking-wider">Montant Recharge</th>
                <th className="p-6 text-sm font-semibold text-gray-300 uppercase tracking-wider">Frais de service</th>
                <th className="p-6 text-sm font-semibold text-white uppercase tracking-wider text-right">Prix Total</th>
                <th className="p-6 text-sm font-semibold text-gray-300 uppercase tracking-wider"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {RECHARGE_OPTIONS.map((option) => (
                <tr key={option.id} className="hover:bg-white/5 transition-colors group">
                  <td className="p-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold">
                        <span className="material-icons-round text-lg">credit_card</span>
                      </div>
                      <div>
                        <span className="block text-white font-bold text-lg">{option.amount}€</span>
                        <span className="text-xs text-gray-500">Coupon PCS</span>
                      </div>
                    </div>
                  </td>
                  <td className="p-6 text-gray-400">
                    {(option.price - option.amount).toFixed(2)}€
                  </td>
                  <td className="p-6 text-right">
                    <span className="text-xl font-bold text-primary">{option.price.toFixed(2)}€</span>
                  </td>
                  <td className="p-6 text-right">
                    {option.isPopular && (
                      <span className="inline-block px-2 py-1 bg-primary/20 text-primary text-xs font-bold rounded uppercase tracking-wider">
                        Populaire
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <div className="bg-dark-card border border-white/5 p-6 rounded-xl">
          <div className="text-primary mb-4">
            <span className="material-icons-outlined text-2xl">verified_user</span>
          </div>
          <h3 className="text-white font-bold mb-2">Garantie Prix</h3>
          <p className="text-sm text-gray-400">
            Nos tarifs sont mis à jour quotidiennement pour vous garantir les meilleurs prix du marché.
          </p>
        </div>
        <div className="bg-dark-card border border-white/5 p-6 rounded-xl">
          <div className="text-primary mb-4">
            <span className="material-icons-outlined text-2xl">receipt_long</span>
          </div>
          <h3 className="text-white font-bold mb-2">Facture Incluse</h3>
          <p className="text-sm text-gray-400">
            Une facture détaillée est envoyée automatiquement avec chaque commande par email.
          </p>
        </div>
        <div className="bg-dark-card border border-white/5 p-6 rounded-xl">
          <div className="text-primary mb-4">
            <span className="material-icons-outlined text-2xl">savings</span>
          </div>
          <h3 className="text-white font-bold mb-2">Frais Dégressifs</h3>
          <p className="text-sm text-gray-400">
            Profitez de frais de service réduits sur les montants de recharge plus élevés.
          </p>
        </div>
      </div>
    </div>
  );
}