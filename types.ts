export interface CardProduct {
  id: string;
  amount: number;
  price: number;
  currency: string;
  isPopular?: boolean;
}

export const RECHARGE_OPTIONS: CardProduct[] = [
  { id: 'pcs-20', amount: 20, price: 21.50, currency: '€' },
  { id: 'pcs-50', amount: 50, price: 53.50, currency: '€', isPopular: true },
  { id: 'pcs-100', amount: 100, price: 106.00, currency: '€' },
  { id: 'pcs-250', amount: 250, price: 262.00, currency: '€' },
  { id: 'pcs-500', amount: 500, price: 524.00, currency: '€' },
  { id: 'pcs-1000', amount: 1000, price: 1048.00, currency: '€' },
];

export interface PaymentFormData {
  email: string;
  selectedCardId: string | null;
}