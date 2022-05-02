import React from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, { Layout, FadeIn } from 'react-native-reanimated';
import Colors from '../../constants/Colors';
import useRecipe from '../../hooks/useRecipe';
import { StepsTabProps } from '../../types/stepsTab';
import Paragraph from '../Paragraph/Paragraph';

export default function StepsTab({ steps }: StepsTabProps) {
  const recipe = useRecipe();
  const data = steps ?? recipe?.steps;

  return (
    <View style={styles.container}>
      {data!.map((step, index) => (
        <Animated.View key={index} entering={FadeIn}>
          <View style={styles.step}>
            <Paragraph style={styles.stepNumber}>{index + 1}</Paragraph>
            <Paragraph style={styles.stepDescription}>{step}</Paragraph>
          </View>
        </Animated.View>
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
    marginRight: 40,
  },
});
