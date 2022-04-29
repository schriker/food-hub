import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import PromoCarousel from '../components/PromoCarousel/PromoCarousel';
import RecipeCard from '../components/RecipeCard/RecipeCard';
import { useAppSelector } from '../hooks/useAppSelector';

export default function FeedScreen() {
  const data = useAppSelector((state) => state.recipes.data);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(recipe) => recipe.id.toString()}
        ListHeaderComponent={<PromoCarousel />}
        renderItem={({ item, index }) => (
          <RecipeCard recipe={item} index={index} length={data.length} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
