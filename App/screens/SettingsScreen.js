import React from 'react';
import { WebView } from 'react-native';


export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const { navigation } = this.props;
    const name = navigation.getParam('url', 'ERROR');
    const url = `https://tlk.io/OECD_${global.construct}`;
    if (name.slice(0,2) == "ht") {
      return <WebView
      source={{uri: name}}
      style={{flex: 1}} 
    />
    } else {
    return (
      <WebView
        source={{uri: url}}
        style={{flex: 1}} 
      />
    ); }
  }
}

