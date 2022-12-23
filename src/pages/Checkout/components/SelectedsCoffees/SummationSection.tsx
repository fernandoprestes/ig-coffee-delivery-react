import { Button } from '~/components/Button';
import { formatterCurrency } from '~/helpers/formatterCurrency';
import { useCart } from '~/hooks/useCart';
import { RegularText } from '~/styles/Typography';
import { SummationSectionContainer } from './styles';

const DELIVERY_PRICE = 3.49;

export function SummationSection() {
  const { cartItemsTotal, cartQuantity } = useCart();
  const cartTotal = DELIVERY_PRICE + cartItemsTotal;

  const formattedCartTotal = formatterCurrency(cartTotal);
  const formattedItemsTotal = formatterCurrency(cartItemsTotal);
  const formattedDeliveryTotal = formatterCurrency(DELIVERY_PRICE);
  return (
    <SummationSectionContainer>
      <div>
        <RegularText size='s'>Total de itens</RegularText>
        <RegularText> R$ {formattedItemsTotal} </RegularText>
      </div>
      <div>
        <RegularText size='s'>Entrega</RegularText>
        <RegularText> R$ {formattedDeliveryTotal}</RegularText>
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
          R$ {formattedCartTotal}
        </RegularText>
      </div>
      <Button
        text='Confirmar pedido'
        disabled={cartQuantity < 1}
      />
    </SummationSectionContainer>
  );
}
