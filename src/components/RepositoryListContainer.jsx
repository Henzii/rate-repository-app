
import React from 'react';
import { FlatList, Pressable, View } from 'react-native';
import RepositoryItem from './RepositoryItem';
import { StyleSheet } from 'react-native';
import RepositorySeatch from './RepositorySearch';

const ItemSeparator = () => <View style={styles.separator} />;

const styles = StyleSheet.create({
    separator: {
        height: 10,
        backgroundColor: 'lightgray'
    },
});

//const RepositoryListContainer = ({ repositories, handleSearch }) => {
export class RepositoryListContainer extends React.Component {
    renderHeader = () => {
        return (<RepositorySeatch handleSearch={this.props.handleSearch} />);
    }
    render() {

        const { repositories, handleItemPress, onEndReached} = this.props;

        const repositoryNodes = repositories
            ? repositories.edges.map(edge => edge.node)
            : [];
        return (

                <FlatList
                    data={repositoryNodes}
                    ListHeaderComponent={this.renderHeader}
                    ItemSeparatorComponent={ItemSeparator}
                    onEndReached={onEndReached}
                    onEndReachedThreshold={0.1}
                    renderItem={({ item }) => <Pressable onPress={() => handleItemPress(item.id)}><RepositoryItem item={item} /></Pressable>}
                />
        );
    }
}


