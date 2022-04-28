import { Text, StyleSheet } from 'react-native';
import { TextComponentProps } from '../../types/text';

export default function MediumHeading({
  children,
  style,
  ...rest
}: TextComponentProps) {
  return (
    <Text
      style={[style, { fontFamily: 'Poppins_500Medium', fontSize: 18 }]}
      {...rest}
    >
      {children}
    </Text>
  );
}
