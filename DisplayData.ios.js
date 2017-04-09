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
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
class DisplayData extends Component {

  constructor(props){
    super(props)

    this.state = {
      earthquakes: ds.cloneWithRows([])
    };
  }

  componentDidMount() {
    fetch(REQUEST_URL)
    .then((response) => response.json())
    .then((responseData) => this.setState({ earthquakes: ds.cloneWithRows(responseData.earthquakes) }))
    .catch(function(error) {
      console.warn(error);
    });
  }

  render() {
    return (
      <View>
        <ListView
          dataSource = {this.state.earthquakes}
          renderRow={(rowData) => (
            <View>
              <Text>{rowData.src}</Text>
              <Text>{rowData.datetime}</Text>
              <Text>{rowData.magnitude}</Text>
              <Text>{rowData.eqid}</Text>
              <Text>{rowData.depth}</Text>
            </View>
          )}
        />
      </View>
    );
  }
}

module.exports = DisplayData;
