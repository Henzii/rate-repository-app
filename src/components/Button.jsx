import { Pressable, Text, StyleSheet } from "react-native";
import React from 'react';
import theme from '../theme';

const Button = ({ text, onPress, color = null, styleProps = null}) => {
    const tyyli = StyleSheet.create({
        nappi: {
            backgroundColor: color ? color : theme.colors.primary,
            color: 'white',
            marginTop: 7,
            marginBottom: 7,
            marginLeft: 5,
            marginRight: 5,
            fontWeight: theme.fontWeights.bold,
            padding: 12,
            borderRadius: 6,
            justifyContent: 'space-around',
            display: 'flex',
            ...styleProps
        }
    });
    return (
        <Pressable onPress={onPress}>
            <Text style={tyyli.nappi}>{text}</Text>
        </Pressable>
    );
};
export default Button;