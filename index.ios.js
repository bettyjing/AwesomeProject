import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
  Image,
  Navigator

} from 'react-native';
var Login = require('./Login');
var Display = require('./DisplayData');

export default class AwesomeProject extends Component {
  render() {
    return (
      <Navigator
          initialRoute={{name: 'LoginView', component: Login}}
          configureScene={() => {
              return Navigator.SceneConfigs.FloatFromRight;
          }}
          renderScene={(route, navigator) => {
              console.log(route, navigator);
              if (route.component) {
                  return React.createElement(route.component, { ...this.props, ...route.passProps, navigator, route });
              }
          }}
       />
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
