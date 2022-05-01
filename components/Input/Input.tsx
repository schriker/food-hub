import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Colors from '../../constants/Colors';
import { InputProps } from '../../types/input';
import Paragraph from '../Paragraph/Paragraph';

export default function Input({
  onBlur,
  label,
  onChangeText,
  value,
  error,
  errorMessage,
}: InputProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[styles.input, error && { borderWidth: 1, borderColor: 'red' }]}
        onBlur={onBlur}
        onChangeText={onChangeText}
        value={value}
      />
      {error && <Paragraph style={styles.error}>{errorMessage}</Paragraph>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: Colors.grey,
    marginBottom: 5,
  },
  input: {
    backgroundColor: Colors.white,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  error: {
    color: 'red',
    marginVertical: 5,
  },
});
