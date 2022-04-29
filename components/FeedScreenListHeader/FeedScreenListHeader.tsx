import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { categories } from '../../data/categories';
import CategoryCard from '../CategoryCard/CategoryCard';
import PromoCarousel from '../PromoCarousel/PromoCarousel';

export default function FeedScreenListHeader() {
  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={categories}
          horizontal
          ListHeaderComponent={<View style={styles.spacer}></View>}
          ListFooterComponent={<View style={styles.spacer}></View>}
          renderItem={({ item }) => (
            <CategoryCard category={item} style={styles.categoryCard} />
          )}
          keyExtractor={(item) => item.id.toString()}
          showsHorizontalScrollIndicator={false}
        />
        <View style={styles.spacer}></View>
      </View>
      <PromoCarousel />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    marginTop: 10,
    paddingHorizontal: 0,
  },
  categoryCard: {
    width: 80,
    height: 120,
    borderRadius: 10,
  },
  spacer: {
    width: 5,
    flex: 1,
  },
});
