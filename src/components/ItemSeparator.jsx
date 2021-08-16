import { View, StyleSheet } from "react-native";
import React from 'react';

const ItemSeparator = () => {
    const styles = StyleSheet.create({
        separator: {
            height: 10,
            backgroundColor: 'lightgray'
        },
    });
    return <View style={styles.separator} />;
};
export default ItemSeparator;
