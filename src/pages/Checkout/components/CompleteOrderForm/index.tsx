import { TitleText } from '~/styles/Typography';
import { SectionTitle } from '../SectionTitle';
import { CompleteOrderFormContainer, WrapperFormSection } from './styles';
import { MapPinLine, CurrencyDollar } from 'phosphor-react';
import { useTheme } from 'styled-components';
import { AddressForm } from './AddressForm';
import { PaymentMethodOptions } from './PaymentMehodOptions';

export function CompleteOrderForm() {
  const { colors } = useTheme();
  return (
    <CompleteOrderFormContainer>
      <TitleText
        size='xs'
        color='subtitle'
      >
        Complete seu pedido
      </TitleText>
      <WrapperFormSection>
        <SectionTitle
          title='Endereço de entrega'
          subtitle='Informe o endereço onde deseja receber seu pedido'
          icon={
            <MapPinLine
              size={22}
              color={colors['brand-yellow-dark']}
            />
          }
        />
        <AddressForm />
      </WrapperFormSection>
      <WrapperFormSection>
        <SectionTitle
          title='Pagamento'
          subtitle='O pagamento é feito na entrega. Escolha a forma de deseja pagar'
          icon={
            <CurrencyDollar
              size={22}
              color={colors['brand-purple']}
            />
          }
        />
        <PaymentMethodOptions />
      </WrapperFormSection>
    </CompleteOrderFormContainer>
  );
}
