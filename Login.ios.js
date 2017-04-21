import React, { Component } from 'react';
import './global.js'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
  Image
} from 'react-native';
var DisplayData = require('./DisplayData');

export default class Login extends Component{
  constructor(props){
   super(props)

   this.state = {
     Latitude: '',
     Longitude: '',
   }
 }

  onPressDisplayData() {
    global.Latitude = this.state.Latitude;
    global.Longitude = this.state.Longitude;
    console.log(global.Latitude);
    this.props.navigator.push({
        name: 'DisplayView',
        component: DisplayData
    });
  }
  render() {
    return (
      <View style = {styles.container}>
        <Image source={require('./logo.png')}/>
             <TextInput
                style = {styles.input}
                placeholder = 'Latitude'
                autoCapitalize = 'none'
                onChangeText={(text) => this.setState({Latitude:text})}
             />
             <TextInput
                style = {styles.input}
                placeholder = 'Longitude'
                autoCapitalize = 'none'
                onChangeText={(text) => this.setState({Longitude:text})}
             />
             <TouchableHighlight
                style = {styles.submit}
                onPress = {() => this.onPressDisplayData()
                }
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

module.exports = Login;
