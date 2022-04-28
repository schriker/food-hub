import { Feather } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Colors from '../../constants/Colors';
import { FeedRecipeDetailsProps } from '../../types/feedRecipeDetails';
import Paragraph from '../Paragraph/Paragraph';

export default function FeedRecipeDetails({
  time,
  kcal,
  level,
}: FeedRecipeDetailsProps) {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Feather name="info" size={18} color={Colors.main} />
        <Paragraph style={styles.text}>{`${kcal} kcal`}</Paragraph>
      </View>
      <View style={styles.item}>
        <Feather name="clock" size={18} color={Colors.main} />
        <Paragraph style={styles.text}>{time}</Paragraph>
      </View>
      <View style={styles.item}>
        <Feather name="bar-chart" size={18} color={Colors.main} />
        <Paragraph style={styles.text}>{level}</Paragraph>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    marginLeft: 10,
    color: Colors.grey,
  },
});
