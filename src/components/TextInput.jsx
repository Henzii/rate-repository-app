import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    main: {
        borderColor: 'gray',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 3,
        padding: 10,
        marginBottom: 5,
    },
    error: {
        borderColor: 'red',
        borderStyle: 'solid',
        borderWidth: 1,
        marginBottom: 0
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