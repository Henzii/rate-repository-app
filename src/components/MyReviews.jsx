import { useMutation, useQuery } from '@apollo/client';
import React from 'react';

import { Alert, FlatList, Text } from 'react-native';
import { AUTHORIZED_USER } from '../graphql/queries';
import ReviewItem from './ReviewItem';
import ItemSeparator from './ItemSeparator';

import Button from './Button';
import { useHistory } from 'react-router-native';
import { DELETE_REVIEW } from '../graphql/mutations';

const MyReviews = () => {

    const { data, loading, refetch }= useQuery(AUTHORIZED_USER, { variables: { includeReviews: true } });
    const [ deleteReview ] = useMutation(DELETE_REVIEW);
    const history = useHistory();

    const handleViewRepository = (id) => {
        history.push(`/repository/${id}`);
    };
    const handleDeleteRepository = (id) => {
        Alert.alert(
            "Delete review",
            "Are you sure?!?",
            [
                { text: 'Yes ma\'am', onPress: async () => {
                    await deleteReview({ variables: { id }});
                    await refetch();
                }},
                { text: "Oh shit no!", onPress: () => refetch() }
            ]
        );
    };

    if (data === null || loading) return (<Text>Loading...</Text>);
    return (
        <FlatList
            data={data.authorizedUser.reviews.edges}
            keyExtractor={(item) => item.node.id}
            ItemSeparatorComponent={ItemSeparator}
            renderItem={({ item }) => <MyReviewItem item={item.node}
                handleDeleteRepository={handleDeleteRepository}
                handleViewRepository={handleViewRepository} />}
        />
    );
};
const MyReviewItem = ({ item, handleViewRepository, handleDeleteRepository }) => {
    const altItem = { ...item, user: { username: item.repository.fullName } };
    return (
        <>
            <ReviewItem item={altItem} />
                <Button text="View repository" onPress={() => handleViewRepository(item.repository.id)} />
                <Button text="Delete review" onPress={() => handleDeleteRepository(item.id)} color="red" />
        </>
    );
};
export default MyReviews;