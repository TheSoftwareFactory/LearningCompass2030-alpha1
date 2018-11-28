import React from 'react';
import {Image, Text, Platform, ScrollView, StyleSheet, TouchableOpacity, View, StatusBar, Animated, Alert, AppRegistry, Button, TouchableHighlight, TouchableNativeFeedback, TouchableWithoutFeedback, AsyncStorage } from 'react-native';

export default class LinksScreen extends React.Component {

    /* Layout Configuration */
    static navigationOptions = {
      header: null,
    };

  /* Body */
  render() {
    const {navigate} = this.props.navigation;
    const { navigation } = this.props;
    const name = navigation.getParam('construct', 'Title');
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.textGetStarted}>
            <Text  style={styles.h1}>{name}</Text>
            <Text style={styles.subtitle}>OECD Education 2030 aims to build a common understanding of the knowledge, skills, attitudes and values necessary to shape the future towards 2030. OECD Education 2030 aims to build a common understanding of the knowledge, skills, attitudes and values necessary to shape the future towards 2030.
            </Text>
          </View>
          <View>
          <Button
            style={styles.button}
            onPress={() => navigate('Learn', {name: 'heart'})}
            title="Learn More"
            />
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
  button: {
    margin: 20,
    padding: 20,
    color:"#841584",
  },
});
