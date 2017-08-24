import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  text: {
    backgroundColor: 'red',
  }
});

export default class Counter extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { text } = this.props;
    return (
      <Text style={styles.text}>{text}</Text>
    );
  }
}
