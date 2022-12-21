import { QuantityInput } from '~/components/QuantityInput';
import { RegularText } from '~/styles/Typography';
import { ActionsContainer, CoffeeCartCardContainer, CoffeeCartCardContent, RemoveButton } from './styles';
import { Trash } from 'phosphor-react';

export function CoffeeCartCard() {
  return (
    <CoffeeCartCardContainer>
      <CoffeeCartCardContent>
        <img
          src='coffees/americano.png'
          alt='coffees'
        />
        <div>
          <RegularText color='subtitle'>Expresso Tradicional</RegularText>
          <ActionsContainer>
            <QuantityInput />
            <RemoveButton>
              <Trash size={16} />
              Remover
            </RemoveButton>
          </ActionsContainer>
        </div>
      </CoffeeCartCardContent>
      <p>R$ 9.8</p>
    </CoffeeCartCardContainer>
  );
}
