import { View, Text } from "react-native";
import React from 'react';
import { useApolloClient } from "@apollo/client";
import useAuthStorage from "../hooks/useAuthStorage";


const SignOut = () => {
    
    const client = useApolloClient();
    const authStorage = useAuthStorage();

    authStorage.clearAccessToken();
    client.resetStore();
    
    return (
        <View>
            <Text>
                Thank you please come again
            </Text>
        </View>
    );
};

export default SignOut;