import SignUpForm from './SignUpForm';
import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { View } from 'react-native';

const SignUpContainer = ({ handleSubmit }) => {
    const initialValues = {
        username: '',
        password: '',
        password2: '',
    };
    const validationSchema = yup.object().shape({
        username: yup
            .string()
            .min(1, 'Min length is one')
            .max(30, 'Max length is 30')
            .required('Username is required'),
        password: yup
            .string()
            .min(5, 'Min length is 5')
            .max(50, 'Max length is 50')
            .required('Password is required'),
        password2: yup
            .string()
            .oneOf([yup.ref('password')], 'Passwords do not match')
    });
    return (
        <View style={{ padding: '10%' }}>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
            { ({handleSubmit}) => <SignUpForm handleSignUp={handleSubmit} />}
            </Formik>
        </View>
    );
};
export default SignUpContainer;
