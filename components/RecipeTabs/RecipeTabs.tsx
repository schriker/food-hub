import * as React from 'react';
import { useState } from 'react';
import TabBar from '../TabBar/TabBar';
import { Dimensions, StyleSheet } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import IngredientsTab from '../IngredientsTab/IngredientsTab';
import StepsTab from '../StepsTab/StepsTab';
import Colors from '../../constants/Colors';

const renderScene = SceneMap({
  first: IngredientsTab,
  second: StepsTab,
});

const WIDTH = Dimensions.get('window').width;

export default function RecipeTabs() {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'Ingredients' },
    { key: 'second', title: 'Steps' },
  ]);

  return (
    <TabView
      style={styles.container}
      renderTabBar={TabBar}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: WIDTH }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: Colors.white,
    paddingBottom: 150
  },
});
