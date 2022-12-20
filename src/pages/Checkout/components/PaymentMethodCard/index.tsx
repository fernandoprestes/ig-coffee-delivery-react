import { PaymentMethodCardContainer } from './styles';
import { CreditCard } from 'phosphor-react';

export function PaymentMethodCard() {
  return (
    <PaymentMethodCardContainer>
      <CreditCard size={16} />
      <span>Cartão de crétido</span>
    </PaymentMethodCardContainer>
  );
}
