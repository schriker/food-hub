import { NavigatorScreenParams, RouteProp } from '@react-navigation/native';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootTabParamList {}
    interface RootParamList extends FeedStackParamList {}
    interface RootParamList extends ExploreStackParamList {}
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
  CategoryModal: { screen: 'Category'; params: { id: number } };
};

export type ExploreStackParamList = {
  Categories: undefined;
  CategoryModal: { screen: 'Category'; params: { id: number } };
} & CategoryStackParamList;

export type CategoryStackParamList = {
  Category: { id: number };
  Recipe: { id: number };
};

export type RecipeScreenRouteProp = RouteProp<FeedStackParamList, 'Recipe'>;
export type CategoryScreenRouteProp = RouteProp<
  ExploreStackParamList,
  'Category'
>;
