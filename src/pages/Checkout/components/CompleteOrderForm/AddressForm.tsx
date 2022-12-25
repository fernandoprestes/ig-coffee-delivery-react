import { useFormContext } from 'react-hook-form';
import Input from '~/components/Input';
import { AddressFormContainer } from './styles';

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string;
    };
  };
}

export function AddressForm() {
  const { register, formState } = useFormContext();

  const { errors } = formState as unknown as ErrorsType;
  return (
    <AddressFormContainer>
      <Input
        placeholder='CEP'
        type='text'
        className='cep'
        {...register('codePostal')}
        error={errors.codePostal?.message}
        maxLength={8}
      />
      <Input
        placeholder='Rua'
        className='street'
        {...register('street')}
        error={errors.street?.message}
      />
      <Input
        placeholder='Número'
        type='number'
        {...register('streetNumber')}
        error={errors.streetNumber?.message}
      />
      <Input
        placeholder='Complemento'
        className='complement'
      />
      <Input
        placeholder='Bairro'
        {...register('neighborhood')}
        error={errors.neighborhood?.message}
      />
      <Input
        placeholder='Cidade'
        {...register('city')}
        error={errors.city?.message}
      />
      <Input
        placeholder='UF'
        {...register('state')}
        error={errors.state?.message}
        maxLength={2}
      />
    </AddressFormContainer>
  );
}
