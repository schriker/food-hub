import { FieldError } from 'react-hook-form';

export type StepsFormProps = {
  steps: string[];
  error: FieldError | undefined | boolean;
  addStep: (step: string) => void;
};
