import { FieldError } from 'react-hook-form';

interface PickerOption {
  label: string;
  value: string;
}

export type ModalizePickerProps = {
  options: PickerOption[];
  value: any;
  label: string;
  buttonText: string;
  error: FieldError | undefined;
  errorMessage: string;
  onSelected: (value: any) => void;
};
