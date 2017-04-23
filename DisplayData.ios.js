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
var Login = require('./Login');

var REQUEST_URL = 'http://api.geonames.org/earthquakesJSON?north='+5+'&south='+-9.9+'&east='+-22.4+'&west='+55.2+'&username=bettyjing'
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
       <Text>id: {this.props.Latitude}</Text>
        <ListView
          dataSource = {this.state.earthquakes}
          renderRow={(rowData) => (
            <View style={{flex: 1, paddingTop: 10, paddingBottom: 10, borderWidth: 0.5, paddingLeft: 10, borderColor: '#D3D3D3'}}>
              <Text style={{fontSize: 25}}>{rowData.src}</Text>
              <Text>DateTime: {rowData.datetime}</Text>
              <Text>Magnitude: {rowData.magnitude}</Text>
              <Text>EqID: {rowData.eqid}</Text>
              <Text>Depth: {rowData.depth}</Text>
            </View>
          )}
        />
      </View>
    );
  }
}

module.exports = DisplayData;
