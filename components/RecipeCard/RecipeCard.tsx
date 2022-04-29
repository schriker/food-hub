import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { ImageBackground, Pressable, StyleSheet, View } from 'react-native';
import Colors from '../../constants/Colors';
import { useAppSelector } from '../../hooks/useAppSelector';
import { getCategoryById } from '../../store/slices/recipesSlice';
import { RecipeCardProps } from '../../types/recipeCard';
import BookmarkButton from '../BookmarkButton/BookmarkButton';
import CategoryCircle from '../CategoryCircle/CategoryCircle';
import FeedRecipeDetails from '../FeedRecipeDetails/FeedRecipeDetails';
import MediumHeading from '../MediumHeading/MediumHeading';

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
      style={[styles.container, index === length - 1 ? styles.lastChild : null]}
    >
      <View style={styles.header}>
        <CategoryCircle category={category!} />
        <BookmarkButton recipeId={recipe.id} />
      </View>
      <Pressable onPress={handlePress}>
        <View>
          <ImageBackground source={{ uri: recipe.photo }} style={styles.photo}>
            <LinearGradient
              colors={['transparent', 'rgba(0,0,0,0.8)']}
              style={styles.gradient}
            />
            <MediumHeading style={styles.name}>{recipe.name}</MediumHeading>
          </ImageBackground>
        </View>
      </Pressable>
      <FeedRecipeDetails
        time={recipe.time}
        level={recipe.level}
        kcal={recipe.kcal}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    backgroundColor: Colors.white,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 20,
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 80,
  },
  lastChild: {
    marginBottom: 115,
  },
  photo: {
    height: 300,
    width: '100%',
    justifyContent: 'flex-end',
  },
  name: {
    color: Colors.white,
    marginHorizontal: 15,
    marginVertical: 20,
  },
});
