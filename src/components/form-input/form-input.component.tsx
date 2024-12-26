import { Input, Group, FormInputLabel } from './form-input.styles';
import React, { InputHTMLAttributes } from 'react';

type FormInputProps = {
  label?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const FormInput = ({ label, ...otherProps }: FormInputProps) => {
  const { value } = otherProps;
  const hasValue = typeof value === 'string' && value.length > 0;
  return (
    <Group>
      <Input {...otherProps} />
      {label && <FormInputLabel shrink={hasValue}>{label}</FormInputLabel>}
    </Group>
  );
};

export default FormInput;
