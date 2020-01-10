import React, { Component } from 'react';
import { TextInput } from 'react-native';

export default function UselessTextInput(props) {
  const [value, onChangeText] = React.useState('汉');

  onChange = (text) => {
    if (text.length === 0) {
      onChangeText(text);
    } else {
      let newText = text.substring(text.length - 1, text.length)
      if (newText.length === 1 && this.isChinese(newText)) {
        props.textChangeCallback && props.textChangeCallback(newText);
        onChangeText(newText);
      }
    }
  }

  isChinese = (temp) => {
    return /[^\\u4e00-\\u9fa5]/.test(temp)
  }

  return (
    <TextInput
      style={{
        height: 100,
        width: 100,
        fontSize: 50,
        borderColor: 'green',
        borderWidth: 1,
        padding: 20,
      }}
      onChangeText={this.onChange}
      value={value}
    />
  );
}