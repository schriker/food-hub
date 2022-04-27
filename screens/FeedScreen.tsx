import React from 'react';
import { View } from 'react-native';
import Paragraph from '../components/Paragraph/Paragraph';
import { useAppSelector } from '../hooks/useAppSelector';

export default function FeedScreen() {
  const data = useAppSelector((state) => state.recipes.data);

  return (
    <View>
      <Paragraph>{data[0].name}</Paragraph>
    </View>
  );
}
