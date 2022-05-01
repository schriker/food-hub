import { GestureResponderEvent } from 'react-native';

export type PrimaryButtonProps = {
  onPress: ((event: GestureResponderEvent) => void) | null | undefined;
  title: string;
};
