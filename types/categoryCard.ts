import { StyleProp, ViewStyle } from 'react-native';
import { Category } from './category';

export type CategoryCardProps = {
  category: Category;
  style?: StyleProp<ViewStyle>;
};
