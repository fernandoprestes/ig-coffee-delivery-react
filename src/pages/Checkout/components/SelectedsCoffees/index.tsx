import { useCart } from '~/hooks/useCart';
import { TitleText } from '~/styles/Typography';
import { CoffeeCartCard } from '../CoffeesCartCard';
import { DetailsContainer, SelectedsCoffeesContainer } from './styles';
import { SummationSection } from './SummationSection';

export function SelectedCoffees() {
  const { cartItems } = useCart();
  return (
    <SelectedsCoffeesContainer>
      <TitleText
        size='xs'
        color='subtitle'
      >
        Cafés Selecionados
      </TitleText>
      <DetailsContainer>
        {cartItems.map(item => (
          <CoffeeCartCard
            key={item.id}
            coffee={item}
          />
        ))}

        <SummationSection />
      </DetailsContainer>
    </SelectedsCoffeesContainer>
  );
}
