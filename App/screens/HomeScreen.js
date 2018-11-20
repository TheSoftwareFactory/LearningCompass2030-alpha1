import React, { Component } from 'react';
import {
  Image,
  Text,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  StatusBar,
  Alert, AppRegistry, Button
} from 'react-native';
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';
import Svg,{
    Circle,
    Ellipse,
    G,
    TSpan,
    TextPath,
    Path,
    Polygon,
    Polyline,
    Line,
    Rect,
    Use,
    Symbol,
    Defs,
    LinearGradient,
    RadialGradient,
    Stop,
    ClipPath,
    Pattern,
    Mask,
} from 'react-native-svg';



export default class HomeScreen extends React.Component {
  static navigationOptions = {
    // headerTitle instead of title
    title: "Home",
  };
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  render() {
    return (

      <View style={styles.container}>

      <ScrollView>
          <View >
            <View style={styles.coverGetStarted}>
              <Svg viewBox="0 0 128 128" width="80%" height="80%">
                <G fill="#e98363ff" x="32" y="64" transform="rotate(0,32,0)"><Path d="M32 2 C32 2 16 48 32 64 C32 64 48 48 32 2 Z"/></G>
                <G fill="#885d90ff" x="32" y="64" transform="rotate(33.18,32,0)"><Path d="M32 2 C32 2 16 48 32 64 C32 64 48 48 32 2 Z"/></G>
                <G fill="#d7b65cff" x="32" y="64" transform="rotate(66.36,32,0)"><Path d="M32 2 C32 2 16 48 32 64 C32 64 48 48 32 2 Z"/></G>
                <G fill="#46b983ff" x="32" y="64" transform="rotate(99.55,32,0)"><Path d="M32 2 C32 2 16 48 32 64 C32 64 48 48 32 2 Z"/></G>
                <G fill="#78a364ff" x="32" y="64" transform="rotate(132.73,32,0)"><Path d="M32 2 C32 2 16 48 32 64 C32 64 48 48 32 2 Z"/></G>
                <G fill="#b15e6eff" x="32" y="64" transform="rotate(165.91,32,0)"><Path d="M32 2 C32 2 16 48 32 64 C32 64 48 48 32 2 Z"/></G>
                <G fill="#487faeff" x="32" y="64" transform="rotate(199.09,32,0)"><Path d="M32 2 C32 2 16 48 32 64 C32 64 48 48 32 2 Z"/></G>
                <G fill="#52afe1ff" x="32" y="64" transform="rotate(232.27,32,0)"><Path d="M32 2 C32 2 16 48 32 64 C32 64 48 48 32 2 Z"/></G>
                <G fill="#56b0a4ff" x="32" y="64" transform="rotate(265.45,32,0)"><Path d="M32 2 C32 2 16 48 32 64 C32 64 48 48 32 2 Z"/></G>
                <G fill="#995455ff" x="32" y="64" transform="rotate(298,32,0)"><Path d="M32 2 C32 2 16 48 32 64 C32 64 48 48 32 2 Z"/></G>
                <G fill="#6f7074ff" x="32" y="64" transform="rotate(329.5,32,0)"><Path d="M32 2 C32 2 16 48 32 64 C32 64 48 48 32 2 Z"/></G>
              </Svg>
            </View>

            <View style={styles.buttonContainer}>
             <Button
               onPress={this._onPressButton}
               title="Press Me"
               color="#e98363ff"
              />
           </View>

            <View style={styles.textGetStarted}>
              <Text  style={styles.h1}>Learning Compass</Text>
              <Text style={styles.subtitle}>OECD Education 2030 aims to build a common understanding of the knowledge, skills, attitudes and values necessary to shape the future towards 2030.
              OECD Education 2030 aims to build a common understanding of the knowledge, skills, attitudes and values necessary to shape the future towards 2030.
              </Text>
            </View>
          </View>
      </ScrollView>
      </View>
    );
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}



const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  getStartedContainer: {
    flex:1,
    width: "100%",
    alignItems: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  coverGetStarted: {
    marginTop:30,
    width: "100%",
    height: 300,
    alignItems: 'center',
  },
  textGetStarted: {
    fontFamily: "noto-sans-light",
    color:'#fff',
    alignItems: 'center',
    margin: 20,
  },
  h1: {
    fontFamily: "noto-sans-light",
    color:'#212121',
    fontSize: 40,
  },
  subtitle: {
    fontFamily: "noto-sans-regular",
    color:'#212121',
    fontSize: 20,
  },
  buttonContainer: {
    margin: 20
  },


});
