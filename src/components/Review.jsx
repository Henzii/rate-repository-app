import ReviewContainer from "./ReviewContainer";
import React from 'react';
import { useMutation } from "@apollo/client";
import { CREATE_REVIEW } from "../graphql/mutations";
import { useHistory } from "react-router-native";

const Review = () => {

    const [ mutate ] = useMutation(CREATE_REVIEW);
    
    const historia = useHistory();

    const handleSubmit = async (values) => {
        try {
            const result = await mutate( { variables: { ...values, rating: Number(values.rating) } });
            console.log(result);
            const id = result.data.createReview.repositoryId;
            historia.push(`/repository/${id}`);
        } catch(e) {
            console.log(e);
        }
    };

    return (
        <ReviewContainer handleSubmit={handleSubmit} />
    );
};
export default Review;