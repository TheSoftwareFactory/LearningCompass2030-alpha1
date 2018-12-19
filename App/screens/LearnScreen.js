import React from 'react';
import {Image, Text, Platform, ScrollView, StyleSheet, TouchableOpacity, View, StatusBar, Animated, Alert, AppRegistry, Button, TouchableHighlight, WebView, TouchableNativeFeedback, TouchableWithoutFeedback, AsyncStorage } from 'react-native';




export default class LearnScreen extends React.Component {
  static navigationOptions = {
    title: 'Introduction',
  };

  state = {
    finished: false
  };

    componentDidMount() {
      var db = require('../assets/data.json');
      const { navigation } = this.props;
      AsyncStorage.getItem(db[global.construct]['items'][`${navigation.state.params.id}`]['key']).then((token) => {
        if(token==="done"){
          this.setState({
            finished: true
          });
        }
      });
    }

  /* Body db[global.construct]['items'][0]['key'] */
  render() {
    var db = require('../assets/data.json');
    const { navigation } = this.props;
    const { navigate } = this.props.navigation;
    var contents = db[global.construct]['items'][`${navigation.state.params.id}`]['content'].map(function (item,i) {
       switch (item.type) {
         case "h1": return (<Text key={i} style={styles.h1}>{item.data}</Text>); break;
         case "h2": return (<Text key={i} style={styles.h2}>{item.data}</Text>); break;
         case "p": return (<Text key={i} style={styles.p}>{item.data}</Text>); break;
         case "youtube": return ( <WebView key={i} source={{uri: `${item.data}`}} style={{width: '100%', height: 400, marginTop:20,marginBottom:20,}} />); break;
         default: return (<Text key={i} style={styles.subtitle}>Data loading error.</Text>); // TODO : catch to error server
       }
     });
     
     _check = () => {
       AsyncStorage.getItem(global.construct+'Val')
       .then((value) => {
         if(value===null) value = 0;
         AsyncStorage.setItem(global.construct+'Val', ""+Number(Number(value)+1))
         .then((value) => {
           AsyncStorage.setItem(db[global.construct]['items'][`${navigation.state.params.id}`]['key'], 'done')
           .then((value) => {
             navigate('Links');
           })
         })
       })
     }

     _unCheck = () => {
       AsyncStorage.getItem(global.construct+'Val')
       .then((value) => {
         if(value===null) value = 0;
         AsyncStorage.setItem(global.construct+'Val', ""+Number(Number(value)-1))
         .then((value) => {
           AsyncStorage.setItem(db[global.construct]['items'][`${navigation.state.params.id}`]['key'], 'read')
           .then((value) => {
             navigate('Links');
           })
         })
       })
     }

    if (this.state.finished) {
      button =  <TouchableNativeFeedback background={TouchableNativeFeedback.SelectableBackground()}  onPress={() => _unCheck()} style={styles.button}>
                  <View style={{width: "100%", marginTop: 20, height: 80, backgroundColor: "#51eb5c", alignItems: 'center', flex: 1, justifyContent: 'center',}}>
                    <Text style={{color:'#fff', fontSize: 20, textAlign: 'center',}}>CHAPTER FINISHED</Text>
                  </View>
                </TouchableNativeFeedback>;
    }
    else {
      button =  <TouchableNativeFeedback background={TouchableNativeFeedback.SelectableBackground()} onPress={() => _check()} style={styles.button}>
                  <View style={{width: "100%", marginTop: 20, height: 80, backgroundColor: "#7451eb", alignItems: 'center', flex: 1, justifyContent: 'center',}}>
                    <Text style={{color:'#fff', fontSize: 20, textAlign: 'center',}}>I FINISHED THIS CHAPTER</Text>
                  </View>
                </TouchableNativeFeedback>;
    }

    var db = require('../assets/data.json');
    return (
      <View style={styles.container}>
        <ScrollView>
          {contents}
          {button}
          <Text></Text>
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
    textAlign: 'center',
    margin:"5%",
  },
  h2: {
    fontFamily: "noto-sans-light",
    color:'#212121',
    fontSize: 35,
    marginLeft:"5%",
    marginRight:"5%",
  },
  subtitle: {
    fontFamily: "noto-sans-thin",
    color:'#212121',
    fontSize: 20,
    textAlign: 'center',
    margin:10,
  },
  p: {
    fontFamily: "noto-sans-thin",
    color:'#212121',
    fontSize: 20,
    marginLeft:"5%",
    marginRight:"5%",
  },
  button: {
    marginTop:50,
    padding: 20,
  },
});
