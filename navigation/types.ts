import { NavigatorScreenParams, RouteProp } from '@react-navigation/native';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootTabParamList {}
    interface RootParamList extends FeedStackParamList {}
  }
}

export type RootTabParamList = {
  Feed: NavigatorScreenParams<FeedStackParamList> | undefined;
  Explore: undefined;
  Search: undefined;
  Bookmarks: undefined;
  User: undefined;
};

export type FeedStackParamList = {
  Home: undefined;
  Recipe: { id: number };
};

export type RecipeScreenRouteProp = RouteProp<FeedStackParamList, 'Recipe'>;
