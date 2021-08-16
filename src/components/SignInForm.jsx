import { View, Text, Pressable, StyleSheet } from 'react-native';
import FormikTextInput from './FormikTextInput';
import theme from '../theme';
import React from 'react';

const SignInForm = ({ handleSubmit }) => {
  const style = StyleSheet.create({
    root: {
      margin: '5%'
    },
    nappi: {
      backgroundColor: theme.colors.primary,
      color: 'white',
      fontWeight: theme.fontWeights.bold,
      padding: 12,
      borderRadius: 6,
      justifyContent: 'space-around',
      display: 'flex'
    }
  });
  return (
    <View style={style.root}>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" />
      <Pressable onPress={handleSubmit}>
        <Text testID='signInButton' style={style.nappi}>Sign in</Text>
      </Pressable>
    </View>
  );
};
export default SignInForm;