import { NativeSyntheticEvent, TextInputFocusEventData } from 'react-native';
import { FieldError } from 'react-hook-form';

export type InputProps = {
  label: string;
  onBlur?:
    | ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void)
    | undefined;
  onChangeText: (...event: any[]) => void;
  value: any;
  error: FieldError | boolean | undefined;
  errorMessage: string;
};
