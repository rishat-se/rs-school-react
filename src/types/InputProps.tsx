import { ControlErrors } from '../routes/Form';

export type InputProps = {
  label: string;
  inputRef?: React.RefObject<HTMLInputElement>;
  selectRef?: React.RefObject<HTMLSelectElement>;
  inputRefs?: React.RefObject<HTMLInputElement>[];
  name: string;
  placeholder?: string;
  errors: ControlErrors;
};
