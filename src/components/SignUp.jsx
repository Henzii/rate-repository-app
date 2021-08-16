import SignUpContainer from "./SignUpContainer";
import React from 'react';
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../graphql/mutations";
import useSignIn from "../hooks/useSignIn";
import { useHistory } from "react-router-native";

const SignUp = () => {

    const [createUser ] = useMutation(CREATE_USER);
    const [signIn] = useSignIn();
    const historia = useHistory();

    const handleSubmit = async ({ username, password}) => {
        try {
            await createUser( {
                variables: {
                    username,
                    password
                }
            });
            await signIn({ username, password });
            historia.push('/');
        } catch (e) {
            console.log('Jokin meni vikaan', e);
        }

    };
    return (
        <SignUpContainer handleSubmit={handleSubmit} />
    );
};
export default SignUp;