import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
  Image
} from 'react-native';

export default class DisplayData extends Component{
  render() {
    return (
      <View style = {styles.container}>
      <Text>
         YAAAAY
      </Text>
          </View>
    );
  }
}
const styles = StyleSheet.create ({
   container: {
      flex: 1,
      alignItems: 'center',
      justifyContent:'center',
      paddingBottom: 40
   }
})

module.exports = DisplayData;
