import { CompleteOrderForm } from './components/CompleteOrderForm';
import { SelectedCoffees } from './components/SelectedsCoffees';
import { CheckoutContainer } from './styles';

import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, FormProvider } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

enum PaymentMethods {
  credit = 'credit',
  debit = 'debit',
  money = 'money',
}

const completeOrderFormValidationSchema = zod.object({
  codePostal: zod.string().min(8, 'CEP é obrigatório').max(8),
  street: zod.string().min(1, 'Nome da rua é obrigatório'),
  streetNumber: zod.string().min(1, 'Numero é obrigatório'),
  neighborhood: zod.string().min(1, 'Nome do bairro é obrigatório'),
  city: zod.string().min(1, 'Nome da cidade é obrigatório'),
  state: zod.string().min(1, 'Nome da UF é obrigatório'),
  paymentMethod: zod.nativeEnum(PaymentMethods, {
    errorMap: () => {
      return { message: 'Metodos de pagamento obrigatório' };
    },
  }),
});

export type OrderData = zod.infer<typeof completeOrderFormValidationSchema>;

type CompleteOrderFormData = OrderData;

export function CheckoutPage() {
  const completeOrderForm = useForm<CompleteOrderFormData>({
    resolver: zodResolver(completeOrderFormValidationSchema),
  });

  const { handleSubmit } = completeOrderForm;

  function handleCompleteOrder(data: CompleteOrderFormData) {
    console.log(data);
  }

  return (
    <FormProvider {...completeOrderForm}>
      <CheckoutContainer
        className='container'
        onSubmit={handleSubmit(handleCompleteOrder)}
      >
        <CompleteOrderForm />
        <SelectedCoffees />
      </CheckoutContainer>
    </FormProvider>
  );
}
