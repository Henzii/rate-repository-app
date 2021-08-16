import { Link } from 'react-router-native';
import Text from './Text';
import React from 'react';

const Tab = ({ text, to}) => {
    return (
            <Link to={to}>
                <Text fontWeight="bold" style={{ color: 'lightgray' }}>
                    {text}
                </Text>

            </Link>

    );
};

export default Tab;