import { coffees } from '~/@fake-data/coffees';
import { TitleText } from '~/styles/Typography';
import { CoffeeCard } from './CoffeeCard';
import { CoffeesList, OurCoffeesContainer } from './styles';

export function OurCoffees() {
  return (
    <OurCoffeesContainer className='container'>
      <TitleText
        size='l'
        color='subtitle'
      >
        Nossos cafés
      </TitleText>
      <CoffeesList>
        {coffees.map(coffee => (
          <CoffeeCard
            key={coffee.id}
            coffee={coffee}
          />
        ))}
      </CoffeesList>
    </OurCoffeesContainer>
  );
}
