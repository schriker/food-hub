import React from 'react';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import RecipeCard from '../components/RecipeCard/RecipeCard';
import RecipeTabs from '../components/RecipeTabs/RecipeTabs';
import useRecipe from '../hooks/useRecipe';

export default function RecipeScreen() {
  const recipe = useRecipe();

  return (
    <ScrollView style={styles.container}>
      <RecipeCard recipe={recipe!} />
      <RecipeTabs />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
