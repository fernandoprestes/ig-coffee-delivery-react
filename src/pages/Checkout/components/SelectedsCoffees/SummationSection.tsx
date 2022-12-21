import { Button } from '~/components/Button';
import { RegularText } from '~/styles/Typography';
import { SummationSectionContainer } from './styles';

export function SummationSection() {
  return (
    <SummationSectionContainer>
      <div>
        <RegularText size='s'>Total de itens</RegularText>
        <RegularText> R$ 9,98 </RegularText>
      </div>
      <div>
        <RegularText size='s'>Entrega</RegularText>
        <RegularText> R$ 9,98 </RegularText>
      </div>
      <div>
        <RegularText
          size='l'
          weight='700'
        >
          Total de itens
        </RegularText>
        <RegularText
          size='l'
          weight='700'
        >
          R$ 9,98
        </RegularText>
      </div>
      <Button text='Confirmar pedido' />
    </SummationSectionContainer>
  );
}
