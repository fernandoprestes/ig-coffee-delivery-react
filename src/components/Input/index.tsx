import { forwardRef, InputHTMLAttributes } from 'react';
import { RegularText } from '~/styles/Typography';
import { InputStyleContainer, InputWrapper } from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(({ error, className, ...props }, ref) => {
  return (
    <InputWrapper className={className}>
      <InputStyleContainer
        hasError={!!error}
        {...props}
        ref={ref}
      />
      {error && <RegularText size='s'>{error}</RegularText>}
    </InputWrapper>
  );
});

Input.displayName = 'Input';

export default Input;
