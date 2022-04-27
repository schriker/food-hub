import { Text, TextProps } from 'react-native';

export default function Paragraph({
  children,
  style,
  ...rest
}: { children: React.ReactNode } & TextProps) {
  return (
    <Text style={[style, { fontFamily: 'Poppins_400Regular', fontSize: 28 }]} {...rest}>
      {children}
    </Text>
  );
}
