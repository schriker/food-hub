import { Pressable, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
import { PrimaryButtonProps } from '../../types/primaryButton';
import Paragraph from '../Paragraph/Paragraph';

export default function PrimaryButton({ title, onPress }: PrimaryButtonProps) {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Paragraph style={styles.title}>{title}</Paragraph>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    backgroundColor: Colors.main,
    width: '100%',
  },
  title: {
    color: Colors.white,
    textAlign: 'center',
    fontSize: 18,
    padding: 10,
  },
});
