import { FieldError } from 'react-hook-form';

export type AddPhotoProps = {
  image: string;
  onSelected: (file: string) => void;
  error: FieldError | undefined | null;
};
