import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Route, Switch, Redirect } from 'react-router-native';

import RepositoryList from './RepositoryList';
import SignIn from './SigIn';
import SignOut from './SignOut';

import AppBar from './AppBar';
import RepositorySingleView from './RepositorySingleView';
import Review from './Review';
import SignUp from './SignUp';
import MyReviews from './MyReviews';
const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        flexShrink: 1,
    },
});

const Main = () => {
    return (
        <View style={styles.container}>
            <AppBar />
            <Switch>
                <Route path="/repository/:id">
                    <RepositorySingleView />
                </Route>
                <Route path="/signout">
                    <SignOut />
                </Route>
                <Route path="/sigin">
                    <SignIn />
                </Route>
                <Route path="/signup">
                    <SignUp />
                </Route>
                <Route path="/review">
                    <Review />
                </Route>
                <Route path="/myreviews">
                    <MyReviews />
                </Route>
                <Route path="/" exact>
                    <RepositoryList />
                </Route>
                <Redirect to="/sigup" />
            </Switch>
        </View>
    );
};

export default Main;