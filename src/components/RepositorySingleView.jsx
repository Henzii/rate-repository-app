import { View, Text, FlatList, StyleSheet } from "react-native";
import React from 'react';
import { useParams } from "react-router-native";
import useSingleRepository from "../hooks/useSIngleRepository";
import RepositoryItem from "./RepositoryItem";
import Button from "./Button";
import * as Linking from 'expo-linking';
import ReviewItem from "./ReviewItem";

const sep = StyleSheet.create({
    root: {
        backgroundColor: 'lightgray',
        height: 10,
    }
});

const RepositorySingleView = () => {

    const { id } = useParams();
    const repository = useSingleRepository(id);
    if (repository === null) {
        return (<View><Text>Loading...</Text></View>);
    }
    const handleOpenGitGut = () => {
        Linking.openURL(repository.url);
    };
    const reviews = repository.reviews.edges;
    return (
        <FlatList
            data={reviews}
            renderItem={({ item }) => <ReviewItem item={item.node} />}
            keyExtractor={( item ) => item.node.id}
            ItemSeparatorComponent={() => <View style={sep.root} />}
            ListHeaderComponent={<RepositoryInfo repository={repository} handleOpenGitGut={handleOpenGitGut} />}
        />
    );

};

const RepositoryInfo = ({ repository, handleOpenGitGut }) => {
    return (
        <View>
            <RepositoryItem item={repository} />
            <Button text="Open in GitHub" onPress={handleOpenGitGut} />
        </View>
    );
};
export default RepositorySingleView;