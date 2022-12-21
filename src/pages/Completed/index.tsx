import { RegularText, TitleText } from '~/styles/Typography';
import { CompletedContainer, OrderDetailsContainer } from './styles';
import ImgConfirmed from '~/assets/images/confirmed-order.svg';
import { InfoWithIcon } from '~/components/InfoWithIcon';
import { MapPin, Clock, CurrencyDollar } from 'phosphor-react';
import { useTheme } from 'styled-components';

export function CompletedPage() {
  const { colors } = useTheme();
  return (
    <CompletedContainer className='container'>
      <div>
        <TitleText size='l'>Uhul! Pedido Confirmado!</TitleText>
        <RegularText
          size='l'
          color='subtitle'
        >
          Agora é só aguardar que logo o café chegará até você
        </RegularText>
      </div>
      <section>
        <OrderDetailsContainer>
          <InfoWithIcon
            icon={<MapPin weight='fill' />}
            iconColor={colors['brand-purple']}
            text={
              <RegularText>
                Entrega em <strong>Rua, Andoria Amarela, 100</strong>
                <br /> Porto Alegre - RS
              </RegularText>
            }
          />
          <InfoWithIcon
            icon={<Clock weight='fill' />}
            iconColor={colors['brand-yellow']}
            text={
              <RegularText>
                Previsão de entrega
                <br /> <strong>20 min - 30 min</strong>
              </RegularText>
            }
          />
          <InfoWithIcon
            icon={<CurrencyDollar weight='fill' />}
            iconColor={colors['brand-yellow-dark']}
            text={
              <RegularText>
                Pagamento na entrega
                <br /> <strong>Cartão de debito</strong>
              </RegularText>
            }
          />
        </OrderDetailsContainer>
        <img
          src={ImgConfirmed}
          alt='oreder confirmed'
        />
      </section>
    </CompletedContainer>
  );
}
