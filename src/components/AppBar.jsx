import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
//import Constants from 'expo-constants';

import Tab from './Tab';

const styles = StyleSheet.create({
  container: {
    // paddingTop: Constants.statusBarHeight,
    padding: '20px',
    backgroundColor: '#252423',
    // ...
  },
  scrollview: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%'
  }
  // ...
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={styles.scrollview}>
        <Tab text="Repositories" to="/" />
        <Tab text="Sign in" to="/sigin" />
      </ScrollView>
    </View>);
};

export default AppBar;