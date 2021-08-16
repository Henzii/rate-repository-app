import { View } from "react-native";
import React from 'react';
import FormikTextInput from "./FormikTextInput";
import Button from "./Button";

const ReviewForm = ({ handleSubmit }) => {

 
    return (
        <View>
            <FormikTextInput name="ownerName" placeholder="Rep's owner" />
            <FormikTextInput name="repositoryName" placeholder="Rep's name" />
            <FormikTextInput name="rating" placeholder="Rep's rating" />
            <FormikTextInput name="text" placeholder="Rep's review" multiline numberOfLines={5} />
            <Button text="Lisää arvostelu" onPress={handleSubmit} />
        </View>
    );
};
export default ReviewForm;
