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


const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
class DisplayData extends Component {

  constructor(props){
    super(props)
    console.log(this.props)

    this.state = {
      earthquakes: ds.cloneWithRows([])
    };
  }

  componentDidMount() {
    console.log(this.props.Latitude)
    var REQUEST_URL = 'http://api.geonames.org/earthquakesJSON?north='+(this.props.Latitude+10)+'&south='+-(this.props.Latitude-10)+'&east='+-(this.props.Longitude+10)+'&west='+(this.props.Longitude-10)+'&username=bettyjing'
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
            <View style={{flex: 1, paddingTop: 10, paddingBottom: 10, borderWidth: 0.5, paddingLeft: 10, borderColor: '#D3D3D3'}}>
              <Text style={{fontSize: 25}}>{rowData.src}</Text>
              <Text>Longitude: {rowData.lng}</Text>
              <Text>Latitude: {rowData.lat}</Text>
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
