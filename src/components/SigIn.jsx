import React from 'react';

import useSignIn from '../hooks/useSignIn';
import { useHistory } from 'react-router';
import SignInContainer from './SignInContainer';


const SignIn = () => {

  const [signIn] = useSignIn();
  const historia = useHistory();

  const onSubmit = async (values) => {

    const { username, password } = values;
    try {
      await signIn({ username, password });
      historia.push('/');
    } catch (e) {
      console.log(e.message);
    }

  };
  return (<SignInContainer onSubmit={onSubmit} />);

};


export default SignIn;