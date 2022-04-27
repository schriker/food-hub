import { Image } from 'react-native';

export default function LogoTitle() {
  return (
    <Image
      style={{ width: 110, height: 35, marginBottom: 5 }}
      resizeMode="contain"
      source={require('../../assets/images/logo.png')}
    />
  );
}
