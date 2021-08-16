import { View, Text, StyleSheet } from "react-native";
import React from 'react';

const ReviewItem = ({ item }) => {
    const reviewStyle = StyleSheet.create( {
        root: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            paddingTop: 10,
            paddingBottom: 10,
        },
        rating: {
            width: 60,
            height: 60,
            borderRadius: 30,
            paddingTop: 10,
            marginLeft: 10,
            marginRight: 10,
            display: 'flex',
            borderColor: 'lightblue',
            borderWidth: 3,
            alignItems: 'center',
            alignContent: 'center',
        },
        ratingText: {
            color: 'blue',
            fontSize: 20,
            fontWeight: 'bold',

        },
        content: {
            //display: 'flex',
            flexDirection: 'column',
            flexShrink: 1,
        },
        name: {
            fontWeight: 'bold',
            marginBottom: 5,
        },
        date: {
            fontWeight: '100',
            marginBottom: 5,
        },
        text: {
            flexShrink: 1,
        }
    });
    return (
        <View style={reviewStyle.root}>
            <View style={reviewStyle.rating}>
                <Text style={reviewStyle.ratingText}>{item.rating}</Text>
            </View>
            <View style={reviewStyle.content}>
                 <Text style={reviewStyle.name}>{item.user.username}</Text>
                 <Text style={reviewStyle.date}>{item.createdAt}</Text>
                 <Text style={reviewStyle.text}>{item.text}</Text>
            </View>
        </View>
    );
};
export default ReviewItem;