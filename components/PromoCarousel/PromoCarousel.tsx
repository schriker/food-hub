import { View, Image, StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const WIDTH = Dimensions.get('window').width - 20;
const DATA = [
  {
    id: 1,
    photo: require('../../assets/images/banner.png'),
  },
  {
    id: 2,

    photo: require('../../assets/images/banner.png'),
  },
  {
    id: 3,
    photo: require('../../assets/images/banner.png'),
  },
];

export default function PromoCarousel() {
  return (
    <View style={styles.container}>
      <Carousel
        loop
        autoPlay
        vertical={false}
        width={WIDTH}
        height={250}
        autoPlayInterval={3000}
        data={DATA}
        mode="parallax"
        modeConfig={{
            parallaxScrollingScale: 0.9,
            parallaxScrollingOffset: 50,
        }}
        renderItem={({ item }) => (
          <Image
            style={styles.photo}
            source={item.photo}
            resizeMode="contain"
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: -15,
    marginHorizontal: 10,
  },
  photo: {
    height: '100%',
    width: WIDTH,
  },
});
