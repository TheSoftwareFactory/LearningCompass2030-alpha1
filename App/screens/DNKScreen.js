import React from 'react';
import {Image, Text, Platform, ScrollView, StyleSheet, TouchableOpacity, View, 
StatusBar, Animated, Alert, AppRegistry, Button, TouchableHighlight, WebView, TouchableNativeFeedback, TouchableWithoutFeedback, AsyncStorage } from 'react-native';

export default class CreditScreen extends React.Component {
  static navigationOptions = {
    title: 'Credit Page',
  };

  /* Body */
  render() {
    const {navigate} = this.props.navigation;
    jump = () => { }

      return (
        <View style={styles.container}>
          <ScrollView>
          <TouchableOpacity onPress={() => jump()} > 
              <View style={styles.bottomTouch} >
                 <Text  style={styles.head}> {"\n"} PSY Test {"\n"} </Text>
                 <Text  style={styles.contents}> {"\n"} You can make a psychological test to help find your interest. {"\n"} </Text>
               </View>
           </TouchableOpacity>
           <TouchableOpacity onPress={() => jump()} > 
              <View style={styles.bottomTouch} >
                 <Text  style={styles.head}> {"\n"} Statistics {"\n"} </Text>
                 <Text  style={styles.contents}> {"\n"} See the report and statistics of each of the 11 field. {"\n"} </Text>
               </View>
           </TouchableOpacity>
           <TouchableOpacity onPress={() => jump()} > 
              <View style={styles.bottomTouch} >
                 <Text  style={styles.head}> {"\n"} Others' experience {"\n"} </Text>
                 <Text  style={styles.contents}> {"\n"} See students' narratives and suggestions of how they develop themselvs on these 11 fields. {"\n"} </Text>
               </View>
           </TouchableOpacity>
           <TouchableOpacity onPress={() => jump()} > 
              <View style={styles.bottomTouch} >
                 <Text  style={styles.head}> {"\n"} Others' experience {"\n"} </Text>
                 <Text  style={styles.contents}> {"\n"} See students' narratives and suggestions of how they develop themselvs on these 11 fields. {"\n"} </Text>
               </View>
           </TouchableOpacity>
          </ScrollView>
        </View>
      );
  }
}

/* Style */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:  '#b3d5d6',
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
  items: {
    backgroundColor : '#3b3a70',
    marginRight: "5%",
    marginLeft: "5%",
    alignItems: 'center',
    margin: 10,
  },
  bottomTouch : {
     alignItems : 'center',
     backgroundColor : '#915b45',
     marginRight: "5%",
     marginLeft: "5%",
     margin : 10,
  },
  head : {
    fontFamily: "noto-sans-thin",
    color:'#fff',
    fontSize: 30,
    textAlign: 'center',
    margin : 10,
    fontWeight : 'bold',
  },
  subtitle: {
    fontFamily: "noto-sans-thin",
    color:'#fff',
    fontSize: 20,
    textAlign: 'center',
    margin : 10,
  },
  contents: {
    fontFamily: "serif",
    color: '#b3d5d6',
    fontSize: 20,
    textAlign: 'center',
    margin : 10,
    fontWeight : 'normal',
  },
});
