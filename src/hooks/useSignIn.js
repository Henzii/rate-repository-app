import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../graphql/mutations";

import useAuthStorage from "./useAuthStorage";
import { useApolloClient } from "@apollo/client";

const useSignIn = () => {

    const [mutate, result] = useMutation(LOGIN_USER);
    
    const client = useApolloClient();

    const authStorage = useAuthStorage();

    const signIn = async ({ username, password }) => {
        try {
            const token = await mutate({
                variables: {
                    user: username,
                    pass: password
                }
            });
            await authStorage.setAccessToken( token.data.authorize.accessToken );
            await client.resetStore();
            
            return true;
        } catch (e) {
            throw new Error('Wrong username or password');
        }
        
    };

    return [signIn, result];
};

export default useSignIn;