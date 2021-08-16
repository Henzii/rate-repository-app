import ReviewForm from "./ReviewForm";
import React from 'react';
import { Formik } from "formik";
import * as yup from 'yup';
import { View } from "react-native";

const ReviewContainer = ( { handleSubmit }) => {
    const initValues = {
        repositoryName: '',
        ownerName: '',
        rating: '',
        text: '',
    };
    const validationSchema = yup.object().shape({
        ownerName: yup
            .string()
            .required('Repository owner is required'),
        repositoryName: yup
            .string()
            .required('Repository name is required'),
        rating: yup
            .number('Must be a number between 0 and 100')
            .required('Rating is required')
            .min(0, 'No negative numbers')
            .max(100, 'No rating over 100'),
        text: yup
            .string()
    });
    return (
        <View style={{ padding: 10 }}>
            <Formik
                initialValues={initValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ handleSubmit }) => <ReviewForm handleSubmit={handleSubmit} />}
            </Formik>
        </View>
    );

};
export default ReviewContainer;