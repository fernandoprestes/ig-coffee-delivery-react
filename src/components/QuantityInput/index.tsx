import { ButtonControl, QuantityInputContainer } from './styles';

import { Minus, Plus } from 'phosphor-react';

export function QuantityInput() {
  return (
    <QuantityInputContainer>
      <ButtonControl>
        <Minus
          size={14}
          weight='fill'
        />
      </ButtonControl>
      <input
        type='number'
        min='1'
        value={1}
        placeholder='1'
        readOnly
      />
      <ButtonControl>
        <Plus
          size={14}
          weight='fill'
        />
      </ButtonControl>
    </QuantityInputContainer>
  );
}
