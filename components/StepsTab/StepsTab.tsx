import React from 'react';
import { StyleSheet, View } from 'react-native';
import Colors from '../../constants/Colors';
import useRecipe from '../../hooks/useRecipe';
import Paragraph from '../Paragraph/Paragraph';

export default function StepsTab() {
  const recipe = useRecipe();

  return (
    <View style={styles.container}>
      {recipe?.steps.map((step, index) => (
        <View key={index} style={styles.step}>
          <Paragraph style={styles.stepNumber}>{index + 1}</Paragraph>
          <Paragraph style={styles.stepDescription}>{step}</Paragraph>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  step: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomColor: Colors.lightGrey,
    borderBottomWidth: 1,
  },
  stepNumber: {
    color: Colors.grey,
    fontSize: 28,
    width: 40,
  },
  stepDescription: {
    marginRight: 40
  },
});
