import {StyleSheet, TextInput} from 'react-native';
import React from 'react';

const TextInputField = ({onChangeText, value, placeholder}) => {
  return (
    <TextInput
      style={styles.inputField}
      onChangeText={onChangeText}
      value={value}
      placeholder={placeholder}
      keyboardType="numeric"
    />
  );
};

export default TextInputField;

const styles = StyleSheet.create({
  inputField: {
    padding: 10,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 4,
    color: 'black',
    borderWidth: 0.6,
    borderColor: 'black',
    width: ' 80%',
  },
});
