import { Menu } from 'react-native-paper';
import { View } from 'react-native';
import React, { useState } from 'react';
import Button from './Button';

const RepositorySortMenu = ({ handleSort }) => {

    const [showMenu, setShowMenu] = useState(false);
    const handleMenuItemSelect = (value) => {
        setShowMenu(false);
        handleSort(value);
    };
    return (
            <View
                style={{
                    paddingTop:0,
                    flexDirection: 'row',
                    justifyContent: 'center',
                }}>
                <Menu visible={showMenu}
                    anchor={<Button onPress={() => setShowMenu(true)} text="Sort reps by..." />
                    }
                    onDismiss={() => setShowMenu(false)}
                >
                    <Menu.Item title="Latest repositories" onPress={() => handleMenuItemSelect( {orderBy: 'CREATED_AT'} )} />
                    <Menu.Item title="Highest rated" onPress={() =>  
                        handleMenuItemSelect({ orderBy: 'RATING_AVERAGE', orderDirection: 'DESC' })} />
                    <Menu.Item title="Lowest rated" onPress={() =>  
                        handleMenuItemSelect({ orderBy: 'RATING_AVERAGE', orderDirection: 'ASC' })} />
                </Menu>
            </View>

    );
};
export default RepositorySortMenu;