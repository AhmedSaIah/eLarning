import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { TextInput } from 'react-native-paper';

const { width, height } = Dimensions.get('screen');

export default function GInput({ labelName, modeValue, ...rest }) {
  return (
    <TextInput
      mode={modeValue}
      label={labelName}
      style={styles.input}
      numberOfLines={1}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    marginTop: 10,
    marginBottom: 10,
    width: width * 0.85,
    height: height / 17,
  },
});
