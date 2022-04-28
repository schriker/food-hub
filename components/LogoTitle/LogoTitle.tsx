import React from 'react';
import { Image, View } from 'react-native';

export default function LogoTitle() {
  return (
    <View style={{ width: '100%' }}>
      <Image
        style={{ width: 110, height: 35, marginBottom: 5 }}
        resizeMode="contain"
        source={require('../../assets/images/logo.png')}
      />
    </View>
  );
}
