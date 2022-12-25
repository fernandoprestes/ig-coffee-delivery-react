import { RegularText, TitleText } from '~/styles/Typography';
import { CompletedContainer, OrderDetailsContainer } from './styles';
import ImgConfirmed from '~/assets/images/confirmed-order.svg';
import { InfoWithIcon } from '~/components/InfoWithIcon';
import { MapPin, Clock, CurrencyDollar } from 'phosphor-react';
import { useTheme } from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { OrderData } from '../Checkout';
import { paymentMethod } from '../Checkout/components/CompleteOrderForm/PaymentMehodOptions';
import { useEffect } from 'react';

interface LocationType {
  state: OrderData;
}

export function CompletedPage() {
  const { colors } = useTheme();

  const { state } = useLocation() as LocationType;

  const navigate = useNavigate();

  useEffect(() => {
    if (!state) {
      navigate('/');
    }
  }, [navigate, state]);

  if (!state) return <></>;

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
                Entrega em{' '}
                <strong>
                  {state.street}, {state.streetNumber}
                </strong>
                <br /> {state.city} - {state.state}
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
                <br /> <strong>{paymentMethod[state.paymentMethod].label}</strong>
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
