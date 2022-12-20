import { HeaderButton, HeaderButtonsContainer, HeaderContainer, HeaderContent } from './styles';
import DeliveryLogo from '~/assets/images/delivery-logo.svg';
import { MapPin, ShoppingCart } from 'phosphor-react';
import { NavLink } from 'react-router-dom';

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent className='container'>
        <img
          src={DeliveryLogo}
          alt='Logo Coffee Delivery'
        />
        <HeaderButtonsContainer>
          <NavLink to='/'>
            <HeaderButton variant='purple'>
              <MapPin
                size={20}
                weight='fill'
              />
              Porto Alegre, RS
            </HeaderButton>
          </NavLink>
          <NavLink to='/checkout'>
            <HeaderButton variant='yellow'>
              <ShoppingCart
                size={20}
                weight='fill'
              />
            </HeaderButton>
          </NavLink>
        </HeaderButtonsContainer>
      </HeaderContent>
    </HeaderContainer>
  );
}
