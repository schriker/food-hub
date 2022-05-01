import { NavigationState, SceneRendererProps } from 'react-native-tab-view';

export type TabBarProps = SceneRendererProps & {
  navigationState: NavigationState<{
    key: string;
    title: string;
  }>;
};
