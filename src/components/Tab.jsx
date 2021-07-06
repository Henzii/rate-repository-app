import { Link } from 'react-router-native';
import Text from './Text';
import React from 'react';

const Tab = ({ text, to}) => {
    return (
            <Link to={to}>
                <Text style={{ color: 'lightgray', fontSize: '1.5em' }}>
                    {text}
                </Text>

            </Link>

    );
};

export default Tab;