import React from 'react';
import { Platform } from 'react-native';
import { createSwitchNavigator, createStackNavigator, createBottomTabNavigator } from 'react-navigation';


import HomeScreen from '../screens/HomeScreen';
import LinksScreen from './LinksNavigator';
import LearnScreen from '../screens/LearnScreen';

export default createStackNavigator(
  {
    // Name
    Home: {
      // Screen imported
      screen: HomeScreen,
      // navigationOptions for the screen
      navigationOptions: {
        header: null
      }
    },
    // Name
    Links: {
      // Screen imported
      screen: LinksScreen,
      // navigationOptions for the screen ({ navigation }) => (`${navigation.state.params.construct}`),
      navigationOptions: ({ navigation }) => ({
        title: `${navigation.state.params.construct}`,
      }),
    },
    // Name
    Learn: {
      // Screen imported
      screen: LearnScreen,
      // navigationOptions for the screen
      navigationOptions: ({ navigation }) => ({
        title: "Introduction",
      }),
        },
  },
);
