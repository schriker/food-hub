import { useNavigation, useRoute } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import RecipeSmall from '../components/RecipeSmall/RecipeSmall';
import { useAppSelector } from '../hooks/useAppSelector';
import { CategoryScreenRouteProp } from '../navigation/types';
import {
  getCategoryById,
  getRecipesByCategoryId,
} from '../store/slices/recipesSlice';

export default function CategoryScreen() {
  const navigation = useNavigation();
  const route = useRoute<CategoryScreenRouteProp>();
  const category = useAppSelector((state) =>
    getCategoryById(state, route.params.id)
  );
  const recipes = useAppSelector((state) =>
    getRecipesByCategoryId(state, route.params.id)
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: category?.name,
    });
  }, [category]);

  return (
    <View style={styles.container}>
      <FlatList
        data={recipes}
        renderItem={({ item }) => <RecipeSmall recipe={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
