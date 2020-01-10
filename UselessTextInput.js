import React, { Component } from 'react';
import { TextInput } from 'react-native';

export default function UselessTextInput(props) {
  const [value, onChangeText] = React.useState('汉');

  onChange = (text) => {
    let newText = text.substring(text.length - 1, text.length)
    onChangeText(newText);
    if (newText.length === 1) {
      props.textChangeCallback && props.textChangeCallback(newText);
    }
  }

  return (
    <TextInput
      style={{ height: 100, 
        width: 100, 
        fontSize: 50, 
        borderColor: 'green', 
        borderWidth: 1 ,
        padding:20,
      }}
      onChangeText={this.onChange}
      value={value}
    />
  );
}