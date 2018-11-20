import React, { Component } from 'react';
import {Image, Text, Platform, ScrollView, StyleSheet, TouchableOpacity, View, StatusBar, Animated, Alert, AppRegistry, Button, TouchableHighlight, TouchableNativeFeedback, TouchableWithoutFeedback} from 'react-native';
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';
import { Constants, Svg } from 'expo';

export default class HomeScreen extends React.Component {

  /* Layout Configuration */
  static navigationOptions = {
    title: 'Home',
    headerStyle: {backgroundColor: '#1ebaf4',},
    headerTintColor: '#fff',
    headerTitleStyle: {fontFamily: "noto-sans-light",},
  };

  /* Scripts */
  _onPressButton() {WebBrowser.openBrowserAsync('http://www.oecd.org/');}

  /* Data Structure */
  state = { s: 0.5 };

  /* Body */
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.coverGetStarted}>
            <Svg viewBox="0 0 180 180" width="100%" height="100%">
              {/* Display */}
              <Svg.G fill="#e98363ff" x="58" y="90" transform="rotate(0,32,0)" onPress={() => alert('lol')} ><Svg.Path d="M32 2 C32 2 16 48 32 64 C32 64 48 48 32 2 Z" /><Svg.Circle cx="32" cy="80" r="10"/></Svg.G>
              <Svg.G fill="#885d90ff" x="58" y="90" transform="rotate(33.18,32,0)"><Svg.Path d="M32 2 C32 2 16 48 32 64 C32 64 48 48 32 2 Z" transform={"scale(1 "+this.state.s+")"}/><Svg.Circle cx="32" cy="80" r="10"/></Svg.G>
              <Svg.G fill="#d7b65cff" x="58" y="90" transform="rotate(66.36,32,0)"><Svg.Path d="M32 2 C32 2 16 48 32 64 C32 64 48 48 32 2 Z"/><Svg.Circle cx="32" cy="80" r="10"/></Svg.G>
              <Svg.G fill="#46b983ff" x="58" y="90" transform="rotate(99.55,32,0)"><Svg.Path d="M32 2 C32 2 16 48 32 64 C32 64 48 48 32 2 Z"/><Svg.Circle cx="32" cy="80" r="10"/></Svg.G>
              <Svg.G fill="#78a364ff" x="58" y="90" transform="rotate(132.73,32,0)"><Svg.Path d="M32 2 C32 2 16 48 32 64 C32 64 48 48 32 2 Z"/><Svg.Circle cx="32" cy="80" r="10"/></Svg.G>
              <Svg.G fill="#b15e6eff" x="58" y="90" transform="rotate(165.91,32,0)"><Svg.Path d="M32 2 C32 2 16 48 32 64 C32 64 48 48 32 2 Z"/><Svg.Circle cx="32" cy="80" r="10"/></Svg.G>
              <Svg.G fill="#487faeff" x="58" y="90" transform="rotate(199.09,32,0)"><Svg.Path d="M32 2 C32 2 16 48 32 64 C32 64 48 48 32 2 Z"/><Svg.Circle cx="32" cy="80" r="10"/></Svg.G>
              <Svg.G fill="#52afe1ff" x="58" y="90" transform="rotate(232.27,32,0)"><Svg.Path d="M32 2 C32 2 16 48 32 64 C32 64 48 48 32 2 Z"/><Svg.Circle cx="32" cy="80" r="10"/></Svg.G>
              <Svg.G fill="#56b0a4ff" x="58" y="90" transform="rotate(265.45,32,0)"><Svg.Path d="M32 2 C32 2 16 48 32 64 C32 64 48 48 32 2 Z"/><Svg.Circle cx="32" cy="80" r="10"/></Svg.G>
              <Svg.G fill="#995455ff" x="58" y="90" transform="rotate(298,32,0)"><Svg.Path d="M32 2 C32 2 16 48 32 64 C32 64 48 48 32 2 Z"/><Svg.Circle cx="32" cy="80" r="10"/></Svg.G>
              <Svg.G fill="#6f7074ff" x="58" y="90" transform="rotate(329.5,32,0)"><Svg.Path d="M32 2 C32 2 16 48 32 64 C32 64 48 48 32 2 Z"/><Svg.Circle cx="32" cy="80" r="10"/></Svg.G>
              {/* Interaction */}
              <Svg.Polygon  points="90,90 110,180 70,180" fill="none" onPress={this._onPressButton} />
              <Svg.Polygon  points="90,90 70,180 20,160" fill="none" onPress={this._onPressButton} />
              <Svg.Polygon  points="90,90 20,160 0,105" fill="none" onPress={this._onPressButton} />
            </Svg>
          </View>
          <View style={styles.textGetStarted}>
            <Text  style={styles.h1}>Learning Compass</Text>
            <Text style={styles.subtitle}>OECD Education 2030 aims to build a common understanding of the knowledge, skills, attitudes and values necessary to shape the future towards 2030. OECD Education 2030 aims to build a common understanding of the knowledge, skills, attitudes and values necessary to shape the future towards 2030.
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

/* Style */
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
    fontFamily: "noto-sans-thin",
    color:'#212121',
    fontSize: 20,
    textAlign: 'center'
  },
  buttonContainer: {
    margin: 20
  },
});
