import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import Paragraph from '../components/Paragraph/Paragraph';
import RecipeSmall from '../components/RecipeSmall/RecipeSmall';
import { useAppSelector } from '../hooks/useAppSelector';
import { getBookmarks } from '../store/slices/recipesSlice';

export default function BookmarksScreen() {
  const bookmarks = useAppSelector((state) => getBookmarks(state));

  return (
    <View style={styles.container}>
      {bookmarks.length === 0 ? (
        <Paragraph style={styles.empty}>You have no bookmarks :(</Paragraph>
      ) : (
        <FlatList
          data={bookmarks}
          renderItem={({ item }) => <RecipeSmall recipe={item} />}
          keyExtractor={(item) => item.id.toString()}
          ListFooterComponent={<View style={styles.spacer}></View>}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  empty: {
    textAlign: 'center',
    margin: 40,
  },
  spacer: {
    height: 130
  }
});
