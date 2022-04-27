import { Feather } from '@expo/vector-icons';

export type TabBarIconProps = {
  name: React.ComponentProps<typeof Feather>['name'];
  color: string;
};
