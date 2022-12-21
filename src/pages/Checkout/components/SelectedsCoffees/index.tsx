import { TitleText } from '~/styles/Typography';
import { CoffeeCartCard } from '../CoffeesCartCard';
import { DetailsContainer, SelectedsCoffeesContainer } from './styles';
import { SummationSection } from './SummationSection';

export function SelectedCoffees() {
  return (
    <SelectedsCoffeesContainer>
      <TitleText
        size='xs'
        color='subtitle'
      >
        Cafés Selecionados
      </TitleText>
      <DetailsContainer>
        <CoffeeCartCard />
        <CoffeeCartCard />

        <SummationSection />
      </DetailsContainer>
    </SelectedsCoffeesContainer>
  );
}
