import React from 'react';
import { WebView } from 'react-native';


export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <WebView
        source={{uri: 'https://www.quora.com/What-are-OECD-countries'}}
        style={{flex: 1}}
      />
    );
  }
}
