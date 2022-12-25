import { PaymentMethodCardContainer, ContentContainer } from './styles';
import { forwardRef, InputHTMLAttributes, ReactNode } from 'react';

type PaymentMethodCardProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode;
  label: string;
};

const PaymentMethodCard = forwardRef<HTMLInputElement, PaymentMethodCardProps>(({ id, label, icon, ...props }, ref) => {
  return (
    <PaymentMethodCardContainer>
      <input
        id={id}
        type='radio'
        name='paymentMethod'
        ref={ref}
        {...props}
      />
      <label htmlFor={id}>
        <ContentContainer>
          {icon}
          {label}
        </ContentContainer>
      </label>
    </PaymentMethodCardContainer>
  );
});

PaymentMethodCard.displayName = 'PaymentMethodCard';

export default PaymentMethodCard;
