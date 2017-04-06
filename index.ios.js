/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

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


export default class AwesomeProject extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <Image source={require('./logo.png')}/>
             <TextInput
                style = {styles.input}
                placeholder = 'Latitude'
                autoCapitalize = 'none'
             />
             <TextInput
                style = {styles.input}
                placeholder = 'Longitude'
                autoCapitalize = 'none'
             />
             <TouchableHighlight
                style = {styles.submit}
                //onPress = { () => props.login(props.email, props.password)}
              >
                <Text>
                   Submit
                </Text>
             </TouchableHighlight>
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
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: 'grey',
      borderWidth: 1
   },
   submit: {
      backgroundColor: '#FFDD03',
      padding: 10
   }
})
AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
