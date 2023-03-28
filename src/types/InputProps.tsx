import { ControlErrors } from '../routes/Form';

export type InputProps = {
  label: string;
  inputRef?: React.RefObject<any>;
  inputRefs?: React.RefObject<any>[];
  name: string;
  placeholder?: string;
  errors: ControlErrors;
};
