import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import Colors from '../../constants/Colors';
import { RecipeSmallProps } from '../../types/recipeSmall';
import FeedRecipeDetails from '../FeedRecipeDetails/FeedRecipeDetails';
import Paragraph from '../Paragraph/Paragraph';

export default function RecipeSmall({ recipe }: RecipeSmallProps) {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate('Recipe', { id: recipe.id });
  };

  return (
    <Pressable style={styles.container} onPress={handlePress}>
      <Image style={styles.photo} source={{ uri: recipe.photo }} />
      <View style={styles.titleContainer}>
        <Paragraph style={styles.title}>{recipe.name}</Paragraph>
        <FeedRecipeDetails
          kcal={recipe.kcal}
          time={recipe.time}
          level={recipe.level}
        />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    borderBottomColor: Colors.lightGrey,
    borderBottomWidth: 1,
    alignItems: 'center',
    paddingRight: 5,
  },
  photo: {
    width: 100,
    height: '100%',
    minHeight: 100,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    marginTop: 10,
    marginHorizontal: 10,
  },
});
