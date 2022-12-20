import { PaymentMethodCard } from '../PaymentMethodCard';
import { PaymentMethodOptionsContainer } from './styles';

export function PaymentMethodOptions() {
  return (
    <PaymentMethodOptionsContainer>
      <PaymentMethodCard />
      <PaymentMethodCard />
      <PaymentMethodCard />
    </PaymentMethodOptionsContainer>
  );
}
