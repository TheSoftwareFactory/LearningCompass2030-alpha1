import React from 'react';
import { WebView } from 'react-native';


export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const url = `https://tlk.io/OECD_${global.construct}`;
    return (
      <WebView
        source={{uri: url}}
        style={{flex: 1}}
      />
    );
  }
}
