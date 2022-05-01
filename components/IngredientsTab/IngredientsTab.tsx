import React from 'react';
import { View, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
import useRecipe from '../../hooks/useRecipe';
import { IngredientsTabProps } from '../../types/ingredientsTab';
import Paragraph from '../Paragraph/Paragraph';

export default function IngredientsTab({ ingredients }: IngredientsTabProps) {
  const recipe = useRecipe();
  const data = ingredients ?? recipe?.ingredients;

  return (
    <View style={styles.container}>
      {data!.map((ingredient, index) => (
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
