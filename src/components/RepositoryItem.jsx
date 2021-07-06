import Text from './Text';
import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import theme from '../theme';

const itemStyles = StyleSheet.create(
    {
        language: {
            color: 'white',
            backgroundColor: theme.colors.primary,
            padding: '8px',
            marginBottom: '5px',
            borderRadius: '5px',
        },
        main: {
            flexDirection: 'row',
            justifyContent: 'flex-start'
        },
        header: {
            flexGrow: '1',
            display: 'inline-block',
            minWidth: '70%',
        },
        numbersContainer: {
            display: 'flex',
            flexDirection: 'row',
            width: '100%'
        },
        mainContainer: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start'
        },
        image: {
            width: '50px',
            height: '50px',
            margin: '10px'
        }
    }
);
const RepositoryItem = ({ item }) => {
    return (
        <View>
            <View style={itemStyles.mainContainer}>
                <Image
                    style={itemStyles.image}
                    source={{
                        uri: 'https://via.placeholder.com/50'
                    }}
                />
                <View>
                    <RepItemHeader
                        style={itemStyles.header}
                        title={item.fullName}
                        subtitle={item.description}
                    />
                    <RepItemLanguage style={itemStyles.language} language={item.language} />
                </View>
            </View>
            <RepItemNumbers
                forks={item.forksCount}
                stars={item.stargazersCount}
                reviews={item.reviewCount}
                rating={item.ratingAverage}
            />
        </View>
    );
};
const RepItemNumbersItem = ({ text, data }) => {
    return (
        <View style={{ flexGrow: '1', alignItems: 'center' }}>
            <Text fontWeight="bold">{(data >= 1000) ? (data / 1000) + "k" : data}</Text>
            <Text>{text}</Text>

        </View>);
};
const RepItemNumbers = ({ forks, stars, reviews, rating }) => {
    return (
        <View style={itemStyles.numbersContainer}>
            <RepItemNumbersItem text="Forks" data={forks} />
            <RepItemNumbersItem text="Stars" data={stars} />
            <RepItemNumbersItem text="Reviews" data={reviews} />
            <RepItemNumbersItem text="Rating" data={rating} />
        </View>
    );
};
const RepItemHeader = ({ title, subtitle }) => {
    return (
        <>
            <Text fontSize="subheading" fontWeight="bold">{title}</Text>
            <Text fontSize="subheading" color="textSecondary">{subtitle}</Text>
        </>
    );
};
const RepItemLanguage = ({ language }) => {
    return (
        <View style={{ display: 'flex', flexDirection: 'row'}}>
            <Text fontWeight="bold" style={itemStyles.language}>{language}</Text>
        </View>
    );
};

export default RepositoryItem;