import { useQuery } from '@apollo/client';
import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { AUTHORIZED_USER } from '../graphql/queries';
//import Constants from 'expo-constants';

import Tab from './Tab';

const styles = StyleSheet.create({
  container: {
    // paddingTop: Constants.statusBarHeight,
    padding: 20,
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

  const loggedData = useQuery(AUTHORIZED_USER);
  const loggedIn = (!loggedData.loading && loggedData.data)
    ? (loggedData.data.authorizedUser !== null) ? true : false
    : false;

  return (
    <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={styles.scrollview}>
        <Tab text="Repositories" to="/" />
        {(loggedIn === true)
          ? <>
              <Tab text="Create a review" to="/review" />
              <Tab text="My reviews" to="/myreviews" />
              <Tab text="Sign out" to="/signout" />
            </>
          : <>
            <Tab text="Sign in" to="/sigin" />
            <Tab text="Sign up" to="/signup" />
            </>
        }
      </ScrollView>
    </View>);
};

export default AppBar;