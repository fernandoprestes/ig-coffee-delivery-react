import { BannerContainer, BannerContent, BannerTitle, BenefitsContainer } from './styles';
import BannerImg from '~/assets/images/banner-coffee.png';
import { RegularText } from '~/styles/Typography';
import { InfoWithIcon } from '~/components/InfoWithIcon';
import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react';
import { useTheme } from 'styled-components';

export function Banner() {
  const { colors } = useTheme();
  return (
    <BannerContainer>
      <BannerContent className='container'>
        <div>
          <BannerTitle size='xl'>Encontre o café perfeito para qualquer hora do dia</BannerTitle>
          <RegularText
            size='l'
            color='subtitle'
            as='h3'
          >
            Com o Coffee Delivery você receve seu café onde estiver, a qualquer hora
          </RegularText>
          <BenefitsContainer>
            <InfoWithIcon
              icon={<ShoppingCart weight='fill' />}
              iconColor={colors['brand-yellow-dark']}
              text='Compra simples e segura'
            />
            <InfoWithIcon
              icon={<Package weight='fill' />}
              iconColor={colors['base-text']}
              text='Embalagem mantém o café intacto'
            />
            <InfoWithIcon
              icon={<Timer weight='fill' />}
              iconColor={colors['brand-yellow']}
              text='Entrega rápida e rastreada'
            />
            <InfoWithIcon
              icon={<Coffee weight='fill' />}
              iconColor={colors['brand-purple']}
              text='O café chega fresquinho até você'
            />
          </BenefitsContainer>
        </div>
        <img
          src={BannerImg}
          alt='Coffee Banner'
        />
      </BannerContent>
    </BannerContainer>
  );
}
