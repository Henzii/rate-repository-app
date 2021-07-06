import React from 'react';
import { View, Text, Pressable, StyleSheet} from 'react-native';
import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';

import theme from '../theme';
import * as yup from 'yup';

const initialValues = {
  username: '',
  password: '',
};

const validationSchema = yup.object().shape( {
    username: yup
      .string()
      .required('Username is required'),
    password: yup
      .string()
      .required('Password is required')
});


const SignIn = () => {

  const onSubmit = (values) => {
    console.log(`Submitted ${values.username} and ${values.password}`);
  };

  return (
      <Formik 
        initialValues={initialValues} 
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({handleSubmit}) => <SignInForm handleSubmit={handleSubmit} />}
      </Formik>
  );
};

const SignInForm = ({handleSubmit}) => {
  const style = StyleSheet.create({
      root: {
        margin: '5%'
      },
      nappi: {
        backgroundColor: theme.colors.primary,
        color: 'white',
        fontWeight: theme.fontWeights.bold,
        padding: '12px',
        borderRadius: '6px',
        justifyContent: 'space-around',
        display: 'flex'
      }
  });
  return (
    <View style={style.root}>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" />
      <Pressable onPress={handleSubmit}>
        <Text style={style.nappi}>Sign in</Text>
      </Pressable>
    </View>
  );
};
export default SignIn;