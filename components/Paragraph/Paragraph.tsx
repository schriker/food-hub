import { Text } from 'react-native';
import { TextComponentProps } from '../../types/text';

export default function Paragraph({
  children,
  style,
  ...rest
}: TextComponentProps) {
  return (
    <Text
      style={[{ fontFamily: 'Poppins_400Regular', fontSize: 14 }, style]}
      {...rest}
    >
      {children}
    </Text>
  );
}
