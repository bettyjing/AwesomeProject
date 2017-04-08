import React, {
  Component,
} from 'react';
import {
  AppRegistry,
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

var REQUEST_URL = 'http://api.geonames.org/earthquakesJSON?north=44.1&south=-9.9&east=-22.4&west=55.2&username=bettyjing';

class DisplayData extends Component {


  constructor(props){
    super(props)
    this.state = {
      earthquakes: []
    };
  }

  componentDidMount() {
    fetch(REQUEST_URL)
    .then((response) => response.json())
    .then((responseData) => this.setState({ earthquakes: responseData.earthquakes }))
    .catch(function(error) {
      console.warn(error);
    });
  }

  render() {
    return (
      <View>
        {this.state.earthquakes.map(earthquake => (
          <Text>{earthquake.datetime}</Text>
        ))}
      </View>
    );
  }
}

module.exports = DisplayData;
