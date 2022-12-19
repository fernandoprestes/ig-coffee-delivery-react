import { Banner } from './components/Banner';
import { OurCoffees } from './components/OurCoffees';
import { HomeContainer } from './styles';

export function HomePage() {
  return (
    <HomeContainer>
      <Banner />
      <OurCoffees />
    </HomeContainer>
  );
}
