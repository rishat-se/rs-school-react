import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

export type InputProps = {
  label: string;
  inputRef?: React.RefObject<HTMLInputElement>;
  selectRef?: React.RefObject<HTMLSelectElement>;
  inputRefs?: React.RefObject<HTMLInputElement>[];
  name: string;
  placeholder?: string;
  errors: FieldErrors<FieldValues>;
  register: UseFormRegister<FieldValues>;
};
