import { QuantityInput } from '~/components/QuantityInput';
import { RegularText, TitleText } from '~/styles/Typography';
import {
  AddCartButton,
  AddCartContainer,
  Chips,
  CoffeeCardContainer,
  CoffeeCardDescription,
  CoffeeCardFooter,
  CoffeeCardTags,
  CoffeeCardTitle,
} from './styles';
import { ShoppingCart } from 'phosphor-react';
import { Coffee } from '~/@types/Coffee';
import { formatterCurrency } from '~/helpers/formatterCurrency';

interface CoffeeCardProps {
  coffee: Coffee;
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  return (
    <CoffeeCardContainer>
      <img
        src={`coffees/${coffee.photo}`}
        alt={coffee.name}
      />
      <CoffeeCardTags>
        {coffee.tags.map(tag => (
          <Chips key={coffee.id}>{tag}</Chips>
        ))}
      </CoffeeCardTags>
      <CoffeeCardTitle>{coffee.name}</CoffeeCardTitle>
      <CoffeeCardDescription>{coffee.description}</CoffeeCardDescription>
      <CoffeeCardFooter>
        <div>
          <RegularText size='s'>R$</RegularText>
          <TitleText
            size='m'
            color='text'
            as='strong'
          >
            {formatterCurrency(coffee.price)}
          </TitleText>
        </div>
        <AddCartContainer>
          <QuantityInput />
          <AddCartButton
            type='button'
            title='add cart'
          >
            <ShoppingCart
              size={22}
              weight='fill'
            />
          </AddCartButton>
        </AddCartContainer>
      </CoffeeCardFooter>
    </CoffeeCardContainer>
  );
}
