import { useNavigation } from '@react-navigation/native';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import Colors from '../../constants/Colors';
import { RecipeCardProps } from '../../types/recipeCard';
import Paragraph from '../Paragraph/Paragraph';

export default function RecipeCard({ recipe, index, length }: RecipeCardProps) {
  const navigation = useNavigation();

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
        <Paragraph>{recipe.id}</Paragraph>
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
