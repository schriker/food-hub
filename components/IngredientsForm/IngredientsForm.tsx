import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
import { IngredientsFormProps } from '../../types/ingredientsForm';
import IngredientsTab from '../IngredientsTab/IngredientsTab';
import Input from '../Input/Input';
import PrimaryButton from '../PrimaryButton/PrimaryButton';

export default function IngredientsForm({
  ingredients,
  error,
  addIngredient,
}: IngredientsFormProps) {
  const [ingredien, setIngredient] = useState('');
  const [ingredienAmount, setIngredientAmount] = useState('');

  const handleAdd = () => {
    if (ingredien.length === 0 || ingredienAmount.length === 0) return;
    addIngredient({ name: ingredien, amount: ingredienAmount });
    setIngredient('');
    setIngredientAmount('');
  };

  return (
    <View style={styles.ingredientsForm}>
      <View style={styles.whiteBg}>
        <IngredientsTab ingredients={ingredients} />
      </View>
      <Input
        onChangeText={(text) => setIngredient(text)}
        value={ingredien}
        label="Ingredient"
        error={error}
        errorMessage="Required"
      />
      <Input
        onChangeText={(text) => setIngredientAmount(text)}
        value={ingredienAmount}
        label="Ingredient amount"
        error={error}
        errorMessage="Required"
      />
      <PrimaryButton title="Add Ingredient" onPress={handleAdd} />
    </View>
  );
}

const styles = StyleSheet.create({
  ingredientsForm: {
    marginVertical: 20,
  },
  whiteBg: {
    backgroundColor: Colors.white,
    borderRadius: 5,
    marginBottom: 10,
  },
});
