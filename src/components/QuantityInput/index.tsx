import { ButtonControl, QuantityInputContainer } from './styles';

import { Minus, Plus } from 'phosphor-react';

interface QuantityInputProps {
  onIncrease: () => void;
  onDecrease: () => void;
  quantity: number;
}

export function QuantityInput({ onIncrease, onDecrease, quantity }: QuantityInputProps) {
  return (
    <QuantityInputContainer>
      <ButtonControl onClick={onDecrease}>
        <Minus
          size={14}
          weight='fill'
        />
      </ButtonControl>
      <input
        type='number'
        min='1'
        value={quantity}
        placeholder='1'
        readOnly
      />
      <ButtonControl onClick={onIncrease}>
        <Plus
          size={14}
          weight='fill'
        />
      </ButtonControl>
    </QuantityInputContainer>
  );
}
