import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import Colors from '../../constants/Colors';
import { useAppSelector } from '../../hooks/useAppSelector';
import { getCategoryById } from '../../store/slices/recipesSlice';
import { RecipeCardProps } from '../../types/recipeCard';
import CategoryCircle from '../CategoryCircle/CategoryCircle';

export default function RecipeCard({ recipe, index, length }: RecipeCardProps) {
  const navigation = useNavigation();
  const category = useAppSelector((state) =>
    getCategoryById(state, recipe.categoryId)
  );

  const handlePress = () => {
    navigation.navigate('Recipe', { id: recipe.id });
  };

  return (
    <View
      style={[
        styles.container,
        index === 0 ? styles.firstChild : null,
        index === length - 1 ? styles.lastChild : null,
      ]}
    >
      <Pressable onPress={handlePress}>
        <CategoryCircle category={category!} />
        <Image source={{ uri: recipe.photo }} style={styles.photo} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    backgroundColor: Colors.white,
  },
  firstChild: {
    marginTop: 20,
  },
  lastChild: {
    marginBottom: 115,
  },
  photo: {
    height: 300,
    width: '100%',
  },
});
