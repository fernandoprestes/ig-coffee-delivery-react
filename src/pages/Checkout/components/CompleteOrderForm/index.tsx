import { TitleText } from '~/styles/Typography';
import { SectionTitle } from '../SectionTitle';
import { CompleteOrderFormContainer, WrapperFormSection } from './styles';
import { MapPinLine } from 'phosphor-react';
import { useTheme } from 'styled-components';
import { AddressForm } from './AddressForm';

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
    </CompleteOrderFormContainer>
  );
}
