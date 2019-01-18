import React from 'react';
import {Image, Text, Platform, ScrollView, StyleSheet, TouchableOpacity, View, StatusBar, Animated, Alert, AppRegistry, Button, TouchableHighlight, TouchableNativeFeedback, TouchableWithoutFeedback, AsyncStorage } from 'react-native';

export default class LinksScreen extends React.Component {

    /* Layout Configuration */
    static navigationOptions = {header: null,};

  /* Body */
  render() {
    const {navigate} = this.props.navigation;
    const { navigation } = this.props;
    const name = navigation.getParam('construct', 'ERROR');
    var db = require('../assets/data.json');

    var contents = db[global.construct]['items'].map(function (item, i) {
     return (
       <TouchableNativeFeedback key={i} onPress={() => navigate('Learn', {id: i})} background={TouchableNativeFeedback.SelectableBackground()}>
         <View style={StyleSheet.flatten([styles.itemContainer,{backgroundColor: global.color,}])} >
           <Text style={styles.h2}>{item.title}</Text>
           <Text style={styles.description}>{item.subtitle}</Text>
         </View>
       </TouchableNativeFeedback>
     );
    });

    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.textGetStarted}>
            <Text style={styles.subtitle}>{db[global.construct]['subtitle']}</Text>
          </View>
          <View style={styles.items}>
          {contents}
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
  itemContainer: {
    width:"100%",
    height:300,
    borderRadius: 10,
    margin: "5%",
    padding: 50,
    justifyContent:'center',
  },
  getStartedContainer: {
    flex:1,
    width: "100%",
    alignItems: 'center',
  },
  items: {
    marginRight: "5%",
    marginLeft: "5%",
    alignItems: 'center',
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
    margin: 10,
  },
  h2: {
    fontFamily: "noto-sans-light",
    color:'#fff',
    fontSize: 40,
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: "noto-sans-thin",
    color:'#212121',
    fontSize: 20,
    textAlign: 'center',
  },
  description: {
    fontFamily: "noto-sans-thin",
    color:'#fff',
    fontSize: 20,
    textAlign: 'center',
  },
  button: {
    margin: 20,
    padding: 20,
    color:"#841584",
  },
});
