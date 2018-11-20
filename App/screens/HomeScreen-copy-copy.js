import React from 'react';
import { Text } from 'react-native-elements';

import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';



export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>

          <View style={styles.getStartedContainer}>


            <View style={styles.coverGetStarted}>
              <Image
                source={
                  require('../assets/images/cover_book.jpg')
                }
                style={styles.coverGetStartedImage}
              />
            </View>

            <View style={styles.textGetStarted}>
              <Text h1>Learning Compass</Text>
              <Text>OECD Education 2030 aims to build a common understanding of the knowledge, skills, attitudes and values necessary to shape the future towards 2030.</Text>
            </View>


          </View>

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

const width = '80%';
const height = '100%';


const styles = StyleSheet.create({



  container: {
    flex: 1,
    width: "100%",
    backgroundColor: '#006eff',
  },
  contentContainer: {
    paddingTop: 30,
  },
  coverGetStarted: {
    width: "100%",
    flex:2,
    alignItems: 'center',
  },
  textGetStarted: {
    flex:1,
    color:'#fff',
    alignItems: 'center',
    marginBottom: 20,
  },
  coverGetStartedImage: {
    flex:1,
    width: "100%",
    resizeMode: 'cover',
  },
  getStartedContainer: {
    flex:1,
    width: "100%",
    alignItems: 'center',
  },




  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
