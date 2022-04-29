import React from 'react';
import { Image, StyleSheet, Pressable } from 'react-native';
import { CategoryCardProps } from '../../types/categoryCard';

export default function CategoryCard({ category }: CategoryCardProps) {
  const handlePress = () => {
    console.log(category.id);
  };

  return (
    <Pressable
      onPress={handlePress}
      style={[styles.conatiner, { backgroundColor: category.color }]}
    >
      <Image
        source={category.photo}
        resizeMode="contain"
        style={styles.photo}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    marginVertical: 5,
    height: 250,
  },
  photo: {
    width: '90%',
  },
});
