import { Text, TextProps } from 'react-native';
import { TextComponentProps } from '../../types/text';

export default function Paragraph({
  children,
  style,
  ...rest
}: TextComponentProps) {
  return (
    <Text
      style={[style, { fontFamily: 'Poppins_400Regular', fontSize: 14 }]}
      {...rest}
    >
      {children}
    </Text>
  );
}
