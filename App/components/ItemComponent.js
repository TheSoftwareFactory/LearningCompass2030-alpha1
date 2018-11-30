import React, { Component } from 'react';
import {Image, Text, Platform, NavigatorIOS, ScrollView, StyleSheet, TouchableOpacity, View, StatusBar, Animated, Alert, AppRegistry, Button, TouchableHighlight, TouchableNativeFeedback, TouchableWithoutFeedback, AsyncStorage } from 'react-native';
// withNavigation function to provide the navigation prop automatically
import { withNavigation } from 'react-navigation';

export class ItemComponent extends React.Component {

  render() {
    const {navigate} = this.props.navigation;
    return (
        <TouchableNativeFeedback onPress={() => navigate('Learn', {name: 'heart'})} background={TouchableNativeFeedback.SelectableBackground()}>
          <View style={styles.container} >
            <Text style={styles.h1}>Learning Compass</Text>
            <Text style={styles.subtitle}>This application aims to build an understanding of the knowledge, skills, attitudes, and values necessary to shape the future. Choose a construct to develop by touching one of the petals of the flower.</Text>
          </View>
        </TouchableNativeFeedback>

    );


  }
}

export default withNavigation(ItemComponent);

/* Style */
const styles = StyleSheet.create({
  container: {
    height:200,
    width:"100%",
    backgroundColor: '#009cff',
    borderRadius: 20,
    margin: "5%",
    padding: "5%",
    overflow: 'hidden',
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
    fontFamily: "noto-sans-regular",
    color:'#212121',
    fontSize: 40,
    width:"100%",
    color:'#fff',
  },
  subtitle: {
    fontFamily: "noto-sans-thin",
    color:'#212121',
    fontSize: 15,
    textAlign: 'center',
    color:'#fff',
  },
  button: {
    margin: 20,
    padding: 20,
    color:"#841584",
  },
});
