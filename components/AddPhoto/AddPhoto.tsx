import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { launchImageLibraryAsync, MediaTypeOptions } from 'expo-image-picker';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import Paragraph from '../Paragraph/Paragraph';
import { AddPhotoProps } from '../../types/addPhoto';

export default function AddPhoto({ onSelected, error, image }: AddPhotoProps) {
  const pickImage = async () => {
    let result = await launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.cancelled) {
      onSelected(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      {image && (
        <Image
          source={{ uri: image }}
          style={styles.photo}
          resizeMode="contain"
        />
      )}
      {error && <Paragraph style={styles.error}>Photo is required</Paragraph>}
      <View style={styles.button}>
        <PrimaryButton title="Choose Photo" onPress={pickImage} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  photo: {
    height: 200,
  },
  button: {
    marginTop: 10,
    marginBottom: 20,
  },
  error: {
    color: 'red',
  },
});
