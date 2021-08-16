import { View } from "react-native";
import React from 'react';
import FormikTextInput from "./FormikTextInput";
import Button from "./Button";

const SignUpForm = ({ handleSignUp }) => {
    return (
        <View>
            <FormikTextInput name="username" placeholder="Username..." />
            <FormikTextInput name="password" placeholder="Password..." />
            <FormikTextInput name="password2" placeholder="Repeat password..." />
            <Button text="Sign up!" onPress={handleSignUp} />
        </View>
    );
};
export default SignUpForm;