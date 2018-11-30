import React from 'react';
import {Image, Text, Platform, ScrollView, StyleSheet, TouchableOpacity, View, StatusBar, Animated, Alert, AppRegistry, Button, TouchableHighlight, WebView, TouchableNativeFeedback, TouchableWithoutFeedback, AsyncStorage } from 'react-native';

export default class LearnScreen extends React.Component {
  static navigationOptions = {
    title: 'Introduction',
  };

  /* Body */
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.textGetStarted}>
            <Text  style={styles.h1}>Introduction</Text>
            <Text style={styles.subtitle}>Life satisfaction is the way in which people show their emotions, feelings and how they feel about their directions and options for the future. It is a measure of well-being assessed in terms of mood, satisfaction with relationships, achieved goals, self-concepts, and self-perceived ability to cope with one's daily life. Life satisfaction involves a favorable attitude towards one's life rather than an assessment of current feelings. Life satisfaction has been measured in relation to economic standing, degree of education, experiences, residence, among many other topics.
            </Text>
          </View>

          <WebView
           source={{uri: 'https://www.youtube.com/embed/o08ykAqLOxk'}}
           style={{width: "100%", height: 400}} />
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
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
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
