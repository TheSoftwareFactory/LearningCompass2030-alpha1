import React, { Component } from 'react';
import {Image, Text, ToastAndroid, Platform, NavigatorIOS, ScrollView, StyleSheet, TouchableOpacity, View, StatusBar, Animated, Alert, AppRegistry, Button, TouchableHighlight, TouchableNativeFeedback, TouchableWithoutFeedback, AsyncStorage } from 'react-native';
import { WebBrowser } from 'expo';
import { Constants, Svg } from 'expo';

export default class HomeScreen extends React.Component {

  /* Layout Configuration */
  static navigationOptions = {
    headerMode: 'none',
  };


  /* Scripts */
  _onPressButton() {WebBrowser.openBrowserAsync('http://www.oecd.org/');}
   /*_onPetalPress() {Platform.OS === 'ios' ? this.props.navigator.push('Links', {name: 'heart'}) : this.props.navigation('Links', {name: 'heart'});} */

   /* Data Structure */
  state = {
     'satisfactionValue': '',
  }

  componentDidMount = () => {
    try {
      const value = AsyncStorage.getItem('satisfactionvalue');
      if (value !== null) {
        this.setState({ 'satisfactionvalue': value });
      }
      else{
        this.setState({ 'satisfactionvalue': "0.5" });
      }
     } catch (error) {
       this.setState({ 'satisfactionvalue': "0.5" });
     }
  }

  setName = () => {
     AsyncStorage.setItem('satisfactionvalue', "0.5");
     this.setState({ 'satisfactionvalue': "0.5" });
  }


  /*
  /* Body */
  render() {
    const {navigate} = this.props.navigation;
    _onPetalPress = (petalId,petalName) => {global.construct = petalId; navigate('Links',{ construct: petalName });}
    _onPetalLongPress= (petal) => {Platform.OS === 'ios' ? true : ToastAndroid.show(petal, ToastAndroid.SHORT);}

    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.coverGetStarted}>
          <Svg version="1.1" viewBox="0 0 100 100" width="100%" height="100%">
           <Svg.Path d="m49.2 49.2s-12.6-23.5-24.9-23c0 0 0.491 12.4 24.9 23z" fill="#88b41b" stroke-width=".547"/>
           <Svg.Circle transform="rotate(133)" cx="2.81" cy="-26.8" r="5.47" fill="#88b41b" stroke-width=".547"/>
           <Svg.Path d="m19.1 24c0.392-1.89 0.258-3.24 0.286-5.39-1.35-0.579-2.79-1.05-3.87-1.35-0.559-0.145 0.331-0.557 0.744-0.789 2.58 0.509 1.25 0.448 4.09 1.15 0.0288 2.09 0.0039 3.67 0.0246 6.05 0.0589-2.03 0.116-4.1 0.174-6.04-1.42-0.429-2.8-0.857-4.3-1.27l-1.35 0.932-0.0762 5.83c1.42 0.386 4.08 1.35 4.31 0.877z" fill="#fff" stroke-width=".216"/>
           <Svg.Path d="m20 19.7c-0.0675-0.454-0.101 4.1-0.043 3.02 0.0261-0.561 0.0526-2.37 0.0427-3.02z" fill="#fff" stroke-width=".14"/>
           <Svg.Path d="m48.9 49.8s-23.4-12.8-33.5-5.63c0 0 7.19 10.1 33.5 5.63z" fill="#48b845" stroke-width=".547"/>
           <Svg.Circle transform="rotate(99.5)" cx="41" cy="-13.8" r="5.47" fill="#48b845" stroke-width=".547"/>
           <Svg.Path d="m7.26 45.4s1.32-0.431 2.27-0.738c0-0.0803-0.264-0.492-0.586-0.915-0.461-0.604-0.523-0.808-0.289-0.953 0.164-0.101 0.387-0.128 0.497-0.0603 0.344 0.213-0.226-0.694-0.715-1.14-0.564-0.51-0.596-0.798-0.0883-0.798 0.285 0 0.197-0.186-0.359-0.76-0.496-0.332-1.09-1.59-1.39-1.84-0.371 0.663-0.711 1.42-1.21 1.95-0.515 0.538-0.537 0.619-0.186 0.686 0.341 0.0656 0.293 0.196-0.335 0.911-0.671 0.764-0.693 0.835-0.264 0.835 0.614 0 0.591 0.314-0.0883 1.2-0.306 0.401-0.557 0.79-0.557 0.864 0.567 0.285 2.08 0.771 2.08 0.771l-0.0178 0.935 1.23 0.0067z" fill="#fff" stroke-width=".223"/>
           <Svg.Path d="m49.7 48.9s2.37-26.6-8.26-32.9c0 0-6.36 10.6 8.26 32.9z" fill="#cf4a80" stroke-width=".547"/>
           <Svg.Circle transform="rotate(166)" cx="-36.3" cy="-16.8" r="5.47" fill="#cf4a80" stroke-width=".547"/>
           <Svg.G fill="#fff" stroke-width=".22">
            <Svg.Path d="m39.9 10.5c0.0735-0.191 0.134-0.617 0.134-0.946 0-0.329 0.104-0.703 0.232-0.83 0.128-0.128 0.202-0.816 0.165-1.53l-0.067-1.3h-2.42l-0.067 1.3c-0.0368 0.714 0.0374 1.4 0.165 1.53 0.128 0.128 0.232 0.592 0.232 1.03 0 0.44 0.066 0.866 0.147 0.946 0.289 0.289 1.35 0.144 1.48-0.201z"/>
            <Svg.Path d="m37 9.66c0.0345-0.363 0.165-0.864 0.29-1.11 0.125-0.249 0.196-0.893 0.157-1.43l-0.0697-0.977-2.09-0.134v1.33c0 0.742 0.0976 1.33 0.22 1.33 0.121 0 0.22 0.403 0.22 0.895 0 0.846 0.0328 0.891 0.605 0.825 0.493-0.0567 0.617-0.192 0.668-0.73z"/>
            <Svg.Path d="m42.7 9.55c0-0.484 0.099-0.88 0.22-0.88 0.122 0 0.22-0.591 0.22-1.33v-1.33l-2.09 0.134-0.0683 1.08c-0.0376 0.592 0.0367 1.18 0.165 1.31 0.128 0.128 0.233 0.544 0.233 0.923 0 0.825 0.13 0.983 0.807 0.983 0.452 0 0.514-0.105 0.514-0.88z"/>
            <Svg.Path d="m36.9 5.44c0.183-0.477-0.349-1.01-0.826-0.826-0.368 0.141-0.501 0.769-0.222 1.05s0.907 0.145 1.05-0.222z"/>
            <Svg.Path d="m42.7 5.23c0.0876-0.614-0.616-0.904-0.981-0.404-0.366 0.5-0.118 1.02 0.447 0.938 0.281-0.04 0.494-0.253 0.534-0.534z"/>
            <Svg.Path d="m39.8 4.88c0.0602-0.523-0.0082-0.605-0.502-0.605-0.609 0-0.91 0.438-0.692 1.01 0.228 0.594 1.11 0.297 1.19-0.401z"/>
           </Svg.G>
           <Svg.Path d="m50.3 48.9s16.5-20.9 11.1-32.1c0 0-11.1 5.41-11.1 32.1z" fill="#2593c9" stroke-width=".547"/>
           <Svg.Circle transform="rotate(199)" cx="-63.6" cy="12.9" r="5.47" fill="#2593c9" stroke-width=".547"/>
           <Svg.G fill="#fff" stroke-width=".232">
            <Svg.Path d="m67.8 11.5 0.0422-2.82s-0.944-0.236-0.944 0.309c0 0.331-0.157 0.459-0.561 0.459-0.363 0-0.605-0.162-0.684-0.459-0.106-0.396-0.321-0.459-1.57-0.459-1.34 0-1.44 0.0339-1.3 0.459 0.128 0.392 0.0422 0.459-0.583 0.459-0.562 0-0.709-0.45-0.656-0.752 0.0398-0.226-0.704-0.138-0.704-0.138s-0.0583 1.67-0.0583 2.96c2.34 0.0024 4.68 6.15e-4 7.02-0.0176z"/>
            <Svg.Path d="m62.4 8.61c0-0.316-0.106-0.574-0.235-0.574-0.263 0-0.437 0.706-0.193 0.944 0.26 0.253 0.428 0.231 0.428-0.37z"/>
            <Svg.Path d="m66.5 8.5c-0.0677-0.252-0.217-0.459-0.331-0.459-0.239 0-0.283 0.768-0.0574 0.988 0.273 0.266 0.514-0.0622 0.388-0.53z"/>
            <Svg.Path d="m64 5.05c-0.846 0.0269-1.64 0.381-1.64 1.04 0 0.224-0.257 0.279-0.942 0.203-0.71-0.0546-0.642 1.18-0.651 1.96 0 0 0.705 0.102 0.779-0.0873 0.0745-0.189 0.361-0.581 0.611-0.581 0.249 0 0.514 0.341 0.589 0.531 0.0992 0.252 0.507 0.158 1.52 0.158 1.08 0 1.35 0.174 1.35-0.0932 0-0.214 0.259-0.595 0.625-0.595 0.366 0 0.589 0.13 0.589 0.344 0 0.216 0.224 0.344 0.602 0.344 0.563 0 0.29-0.0739 0.311-0.991-0.0719-0.969 0.141-0.96-0.777-0.963-0.612-0.00172-0.958-0.118-1.03-0.344-0.2-0.651-1.1-0.952-1.94-0.925zm0.262 0.698c0.852 0 1.17 0.0826 1.1 0.287-0.105 0.312-1.86 0.526-2.13 0.26-0.396-0.386-0.0927-0.546 1.03-0.546z"/>
           </Svg.G>
           <Svg.Path d="m50.8 49.3s25.3-8.48 26.8-20.8c0 0-12.3-1.57-26.8 20.8z" fill="#49b1ff" stroke-width=".547"/>
           <Svg.Circle transform="rotate(232)" cx="-70.1" cy="52.7" r="5.47" fill="#49b1ff" stroke-width=".547"/>
           <Svg.Path d="m87 19.6c-2.3 0.714-4.05 1.3-6.38 2.58 0.425 1.08 1.06 1.77 1.81 2.77 2.2-1.01 4.4-2.02 6.6-3.03-0.624-0.662-1.28-2.24-2.03-2.32zm-2.33 1.32c0.594 0 1.38 0.599 1.38 1.05 0 0.905-1.4 1.41-2.21 0.796-0.749-0.567-0.173-1.85 0.83-1.85zm0.0442 0.5c-0.0763-0.118-0.326-0.0054-0.414 0.0834-0.382 0.912 1.08 0.615 0.191 1.05-0.149 0.223 0.62 0.107 0.654-0.242 0.0343-0.348-0.656-0.234-0.701-0.521-0.0233-0.151 0.353-0.244 0.27-0.373zm4.1 1.11c-0.0997-0.0995-5.88 2.5-6.14 2.76-0.0636 0.0635-0.552-0.464-1.09-1.17-0.534-0.709-1.02-1.24-1.07-1.18-0.126 0.125 1.76 2.71 1.98 2.71 0.0156 0 1.42-0.627 3.12-1.39 3.19-1.44 3.39-1.54 3.2-1.72zm-0.19 0.766c-0.172 0.0071-1.62 0.627-3.22 1.38l-2.91 1.36-0.538-0.587c-0.296-0.323-0.745-0.87-0.998-1.22-0.253-0.346-0.511-0.581-0.574-0.522 0.49 1.06 1.1 1.75 1.85 2.76 1.44-0.635 2.95-1.31 4.25-1.91 2.14-0.974 2.68-1.29 2.14-1.27z" fill="#fff" stroke-width=".215"/>
           <Svg.G>
            <Svg.Path d="m51 49.9s25.8 6.73 33.8-2.69c0 0-9.43-8.04-33.8 2.69z" fill="#55b2ae" stroke-width=".547"/>
            <Svg.Path y="1" d="m52.4 49.8s16.1 17.3 26.6 14.1c0 0-3.21-10.5-26.6-14.1z" fill="#923953" stroke-width=".485"/>
            <Svg.Circle transform="rotate(265)" cx="-53.8" cy="89.6" r="5.47" fill="#55b2ae" stroke-width=".547"/>
            <Svg.Circle transform="rotate(-62)" cx="-19.4" cy="107" r="4.85" fill="#923953" stroke-width=".485"/>
           </Svg.G>
           <Svg.Path d="m93.7 42.6c-0.331 0-3.78 3-3.78 3s0.392 0.421 0.734 0.421c0.138 1.04 0.265 2.29 0.233 3.81 0.0687 0.0687 1.38 0.115 2.91 0.104l2.79-0.0219c0.15-1.03-0.432-3.75 0.203-4.03l0.985-0.22-0.78-0.555c-1.15-0.447-0.406-2.49-1.28-2.5-0.622 0.108-0.432 0.657-0.705 0.991-0.527-0.247-0.803-0.725-1.31-0.991zm-1.2 4.21c0.716-0.274 1.32 0 1.98 0v2.73c-0.529-0.0986-1.32 0.208-1.98 0z" fill="#fff" stroke-width=".248"/>
           <Svg.Path d="m87.4 70.1c0 0.372-0.128 0.403-1.63 0.403-1.5 0-1.63-0.0316-1.63-0.403 0-0.326 0.128-0.403 0.672-0.403h0.672v-4.64h-0.816c-1.06 0.0048-1.18 0.101-1.76 1.41-0.447 1.01-0.46 1.11-0.155 1.24 0.483 0.201 1.25 0.188 1.57-0.0262 0.244-0.162 0.238-0.282-0.048-0.911-0.181-0.398-0.692-1.19-0.683-1.27 0.0089-0.0794 0.587 0.701 0.834 1.24 0.247 0.541 0.406 1.1 0.353 1.25-0.133 0.365-1.06 0.669-1.66 0.548-0.904-0.182-1.02-0.56-0.53-1.73 0.92-2.22 0.571-2.18 3.28-2.26 2.92 0 2.88-0.164 1.14 3.03 0 0.168 1.09 0.301 1.57 0.191 0.455-0.105 0.431-0.188 0.345-0.543l-0.713-1.83 0.935 1.81c0.12 0.243 0.166 0.585 0.102 0.759-0.167 0.456-1.05 0.759-1.63 0.557-0.853-0.299-0.92-0.684-0.355-2.05 0.333-0.813 0.985-1.47-0.35-1.42h-0.864v4.64h0.672c0.544 0 0.672 0.0768 0.672 0.403z" fill="#fff" stroke-width=".197"/>
           <Svg.Path d="m50.5 50.9s5.23 26.1 17.2 29.2c0 0 3.1-12-17.2-29.2z" fill="#666" stroke-width=".547"/>
           <Svg.Circle transform="rotate(-30.5)" cx="17.7" cy="112" r="5.47" fill="#666" stroke-width=".547"/>
           <Svg.Path d="m73.6 90.4c0-1.09-0.0679-1.3-0.611-1.84-0.923-0.929-0.736-1.25 0.683-1.18 0.907 0.0442 1.16-0.0074 1.09-0.223-0.0484-0.154-0.421-0.31-0.828-0.346-0.707-0.0628-0.74-0.1-0.739-0.846v-0.78l-1.1 0.0718c-0.971 0.0636-1.16 0.153-1.61 0.779-0.731 1.01-0.636 1.37 0.15 0.565 0.607-0.618 1.35-0.904 1.35-0.517-8.21e-4 0.0873-0.181 0.444-0.401 0.793-0.271 0.43-0.401 0.993-0.401 1.75l-0.0012 1.11c-0.429 0.0132-2-0.0999-2.01 0.317 0.499 0.557 1.53 0.317 2.42 0.317v-0.952c0-0.524 0.0737-0.952 0.164-0.952 0.09 0 0.407 0.267 0.705 0.593 0.43 0.472 0.541 0.797 0.541 1.59 0 0.742 0.0765 0.993 0.302 0.993 0.234 0 0.302-0.278 0.302-1.23z" fill="#fff" stroke-width=".206"/>
           <Svg.Path d="m74.2 84.6c0.259-0.432-0.135-1.02-0.683-1.02-0.462 0-0.706 0.766-0.377 1.18 0.305 0.386 0.775 0.315 1.06-0.16z" fill="#fff" stroke-width=".206"/>
           <Svg.Path d="m50 51.1s-8.76 25.2 0 33.9c0 0 8.76-8.76 0-33.9z" fill="#e38200" stroke-width=".547"/>
           <Svg.Circle cx="50" cy="93.8" r="5.47" fill="#e38200" stroke-width=".547"/>
           <Svg.Path d="m52.7 91.7c-1.79-1.93-2.77 0.165-2.77 0.165s-1.35-2.23-3.13-0.481c-1.67 1.65 1.35 4.73 3.21 6.28 2.03-1.67 4.17-4.36 2.69-5.96z" fill="#fff" stroke-width=".238"/>
           <Svg.Path d="m49.4 50.9s-21.1 16.3-18.6 28.4c0 0 12.1-2.54 18.6-28.4z" fill="#88238c" stroke-width=".547"/>
           <Svg.Circle transform="rotate(33.2)" cx="69.2" cy="58.3" r="5.47" fill="#88238c" stroke-width=".547"/>
           <Svg.Path d="m27 88c0.703-0.0389 1.41-0.0782 2.11-0.117-0.0434-0.727-0.0869-1.45-0.13-2.18-0.66-0.04-1.32-0.0804-1.98-0.121-0.0387-0.705-0.0773-1.41-0.116-2.12h-2.09v2.22h-2.11v2.22h2.11v2.42h2.09c0.0384-0.772 0.0767-1.54 0.115-2.32z" fill="#fff" stroke-width=".197"/>
           <Svg.Path d="m49 50.4s-26.6 2.07-31.1 13.6c0 0 11.5 4.51 31.1-13.6z" fill="#d4b000" stroke-width=".547"/>
           <Svg.Circle transform="rotate(66.4)" cx="65.8" cy="18.1" r="5.47" fill="#d4b000" stroke-width=".547"/>
           <Svg.G fill="#fff" stroke-width=".217">
            <Svg.Path d="m10.1 67.7c0.6 0.424 3.31 3.46 3.76 3.04 0.0814-0.931-2.46-2.9-3.35-3.62l0.636-0.544c0.514-0.482 2.77-1.63 2.56-2.06-1.29-0.299-2.65 1.77-3.79 1.98-1.07-0.364-2.78-2.07-3.76-2.23-0.375 0-0.36 0.655 0.0179 0.781 1.13 0.593 1.93 1.21 3.01 1.96-0.44 0.717-3.67 2.86-3.36 3.67 1.1 0.276 3.53-3.52 4.28-2.97z"/>
            <Svg.Path d="m12.1 70.5c0.585-0.389-0.0092-0.545-2.17-0.571-2.13-0.0252-2.93 0.236-2.09 0.585 1.1 0.0694 3.79-0.0432 4.26-0.0148z"/>
            <Svg.Path d="m13 67.3c0-1.07-0.071-1.44-0.265-1.37-0.274 0.0946-0.485 1.98-0.284 2.53 0.281 0.768 0.549 0.201 0.549-1.16z"/>
            <Svg.Path d="m7.6 67c-0.0334-0.789-0.121-0.998-0.417-0.998-0.313 0-0.374 0.203-0.374 1.23 0 1.16 0.0257 1.22 0.417 0.998 0.331-0.186 0.408-0.44 0.374-1.23z"/>
            <Svg.Path d="m12 64.7c0.335-0.34-0.359-0.456-2.33-0.388-1.9 0.0653-2.45 0.346-1.09 0.596 0.996-0.129 3.17 0.0444 3.42-0.208z"/>
           </Svg.G>
           <Svg.G fill="none">
            <Svg.Path d="m50 50 13.4 50.5-29.3-0.314z" onPress={() => _onPetalPress('LifeSatisfaction','Life Satisfaction')} onLongPress={() => _onPetalLongPress('Life Statifaction')} />
            <Svg.Path d="m50 51.1-15.6 49.1-25-15.5z" onPress={() => _onPetalPress('Health','Health')} onLongPress={() => _onPetalLongPress('Health')}/>
            <Svg.Path d="m50.5 49.9-40.8 33.5-11.5-27.7z" onPress={() => _onPetalPress('CivicEngagement','Civic Engagement')} onLongPress={() => _onPetalLongPress('Civic Engagement')}/>
            <Svg.Path d="m49.5 51-51.3 4.74 4.62-29z" onPress={() => _onPetalPress('Environment','Environment')} onLongPress={() => _onPetalLongPress('Environment')}/>
            <Svg.Path d="m49.4 51.6-46.6-24.8 21.1-21.3z" onPress={() => _onPetalPress('Education','Education')} onLongPress={() => _onPetalLongPress('Education')}/>
            <Svg.Path d="m49 50.4-26.7-44.1 28.2-8.51z" onPress={() => _onPetalPress('Community','Community')} onLongPress={() => _onPetalLongPress('Community')}/>
            <Svg.Path d="m49 50.9 1.54-52.8 28.4 9.47z" onPress={() => _onPetalPress('Jobs','Jobs')} onLongPress={() => _onPetalLongPress('Jobs')}/>
            <Svg.Path d="m50.1 50.3 28.9-42.7 19.5 22z" onPress={() => _onPetalPress('Income','Income')} onLongPress={() => _onPetalLongPress('Income')}/>
            <Svg.Path d="m50 50 48.2-21.6 3.87 29.7z" onPress={() => _onPetalPress('Housing','Housing')} onLongPress={() => _onPetalLongPress('Housing')}/>
            <Svg.Path d="m51.1 50.6 51 7.46-11.3 27.1z" onPress={() => _onPetalPress('WorkLifeBalance','Work-Life Balance')} onLongPress={() => _onPetalLongPress('Work-Life Balance')}/>
            <Svg.Path d="m50.6 50.6 39.3 35.2-25.6 15.6z" onPress={() => _onPetalPress('Safety','Safety')} onLongPress={() => _onPetalLongPress('Safety')}/>
           </Svg.G>
          </Svg>
          </View>

          <View style={styles.textGetStarted}>
            <Text  style={styles.h1}>Learning Compass</Text>
            <Text style={styles.subtitle}>This application aims to build an understanding of the knowledge, skills, attitudes, and values necessary to shape the future. Choose a construct to develop by touching one of the petals of the flower.
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
    margin:"2%",
    width: "96%",
    height: 400,
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
