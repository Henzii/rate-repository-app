import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    main: {
        border: '1px solid gray',
        borderRadius: '3px',
        padding: '10px',
        marginBottom: '5px',
    },
    error: {
        border: '2px solid red',
        marginBottom: '0px'
    }
});

// eslint-disable-next-line no-unused-vars
const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [
      styles.main,
      error && styles.error
];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;