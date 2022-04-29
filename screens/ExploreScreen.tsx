import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import CategoryCard from '../components/CategoryCard/CategoryCard';
import { categories } from '../data/categories';

export default function ExploreScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        numColumns={2}
        renderItem={({ item }) => <CategoryCard category={item} />}
        keyExtractor={(item) => item.id.toString()}
        ListFooterComponent={() => <View style={styles.listFooter}></View>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
  },
  listFooter: {
    height: 120,
  },
});
