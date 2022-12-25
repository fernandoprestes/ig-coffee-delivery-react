import { Bank, Money, CreditCard } from 'phosphor-react';
import { useFormContext } from 'react-hook-form';
import { RegularText } from '~/styles/Typography';
import PaymentMethodCard from '../PaymentMethodCard';
import { PaymentMethodOptionsContainer } from './styles';

const paymentMethod = {
  credit: { label: 'Cartão de crédito', icon: <CreditCard size={16} /> },
  debit: { label: 'Cartão de debito', icon: <Bank size={16} /> },
  money: { label: 'Dinheiro', icon: <Money size={16} /> },
};

export function PaymentMethodOptions() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const paymentMethodError = errors.paymentMethod?.message as string;

  return (
    <PaymentMethodOptionsContainer>
      {Object.entries(paymentMethod).map(([key, { label, icon }]) => (
        <PaymentMethodCard
          key={label}
          id={key}
          label={label}
          icon={icon}
          value={key}
          {...register('paymentMethod')}
        />
      ))}
      {paymentMethodError && <RegularText size='s'>{paymentMethodError}</RegularText>}
    </PaymentMethodOptionsContainer>
  );
}
