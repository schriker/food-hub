import React from 'react';
import { View, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
import useRecipe from '../../hooks/useRecipe';
import Paragraph from '../Paragraph/Paragraph';

export default function IngredientsTab() {
  const recipe = useRecipe();

  return (
    <View style={styles.container}>
      {recipe?.ingredients.map((ingredient, index) => (
        <View key={index} style={styles.ingredient}>
          <Paragraph>{ingredient.name}</Paragraph>
          <Paragraph style={styles.amount}>{ingredient.amount}</Paragraph>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ingredient: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderBottomColor: Colors.lightGrey,
    borderBottomWidth: 1,
  },
  amount: {
    color: Colors.grey,
  },
});
