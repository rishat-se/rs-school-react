import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

export type InputProps = {
  label: string;
  name: string;
  placeholder?: string;
  errors: FieldErrors<FieldValues>;
  register: UseFormRegister<FieldValues>;
};
