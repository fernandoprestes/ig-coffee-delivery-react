import { QuantityInput } from '~/components/QuantityInput';
import { RegularText } from '~/styles/Typography';
import { ActionsContainer, CoffeeCartCardContainer, CoffeeCartCardContent, RemoveButton } from './styles';
import { Trash } from 'phosphor-react';
import { CartItem } from '~/@types/CartItem';
import { formatterCurrency } from '~/helpers/formatterCurrency';
import { useCart } from '~/hooks/useCart';

interface CoffeeCartCardProps {
  coffee: CartItem;
}

export function CoffeeCartCard({ coffee }: CoffeeCartCardProps) {
  const coffeeTotal = coffee.price * coffee.quantity;
  const formattedPrice = formatterCurrency(coffeeTotal);
  const { changeCartItemQuantity, removeCartItem } = useCart();

  function handleIncrease() {
    changeCartItemQuantity(coffee.id, 'increase');
  }
  function handleDecrease() {
    changeCartItemQuantity(coffee.id, 'decrease');
  }
  function handleRemove() {
    removeCartItem(coffee.id);
  }

  return (
    <CoffeeCartCardContainer>
      <CoffeeCartCardContent>
        <img
          src={`coffees/${coffee.photo}`}
          alt={coffee.name}
        />
        <div>
          <RegularText color='subtitle'>{coffee.name}</RegularText>
          <ActionsContainer>
            <QuantityInput
              quantity={coffee.quantity}
              onDecrease={handleDecrease}
              onIncrease={handleIncrease}
            />
            <RemoveButton onClick={handleRemove}>
              <Trash size={16} />
              Remover
            </RemoveButton>
          </ActionsContainer>
        </div>
      </CoffeeCartCardContent>
      <p>{formattedPrice}</p>
    </CoffeeCartCardContainer>
  );
}
