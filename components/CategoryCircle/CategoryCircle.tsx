import React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';
import Colors from '../../constants/Colors';
import { CategoryCircleProps } from '../../types/categoryCircle';
import MediumHeading from '../MediumHeading/MediumHeading';

export default function CategoryCircle({ category }: CategoryCircleProps) {
  return (
    <View style={styles.container}>
      <View
        style={[styles.photoBachground, { backgroundColor: category.color }]}
      >
        <Image
          style={styles.photo}
          source={category.photo}
          resizeMode="contain"
        />
      </View>
      <MediumHeading>{category.name}</MediumHeading>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  photoBachground: {
    width: 50,
    height: 50,
    margin: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    borderWidth: 2,
    borderColor: Colors.main,
  },
  photo: { width: 40, height: 40 },
});
