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
import { useCart } from '~/hooks/useCart';
import { useState } from 'react';

interface CoffeeCardProps {
  coffee: Coffee;
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const [quantity, setQuantity] = useState(1);
  const { addCoffeeToCart } = useCart();

  function handleIncrease() {
    setQuantity(state => state + 1);
  }
  function handleDecrease() {
    if (quantity === 1) return;
    setQuantity(state => state - 1);
  }

  function handleAddToCart() {
    const coffeeToCart = {
      ...coffee,
      quantity,
    };

    addCoffeeToCart(coffeeToCart);
  }
  return (
    <CoffeeCardContainer>
      <img
        src={`coffees/${coffee.photo}`}
        alt={coffee.name}
      />
      <CoffeeCardTags>
        {coffee.tags.map(tag => (
          <Chips key={`${coffee.id}${tag}`}>{tag}</Chips>
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
          <QuantityInput
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            quantity={quantity}
          />
          <AddCartButton
            type='button'
            title='add cart'
            onClick={handleAddToCart}
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
