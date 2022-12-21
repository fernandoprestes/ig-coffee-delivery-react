import { CompleteOrderForm } from './components/CompleteOrderForm';
import { SelectedCoffees } from './components/SelectedsCoffees';
import { CheckoutContainer } from './styles';

export function CheckoutPage() {
  return (
    <CheckoutContainer className='container'>
      <CompleteOrderForm />
      <SelectedCoffees />
    </CheckoutContainer>
  );
}
