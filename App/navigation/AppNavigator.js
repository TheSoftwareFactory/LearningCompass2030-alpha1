import React from 'react';
import { Platform } from 'react-native';
import { createSwitchNavigator, createStackNavigator, createBottomTabNavigator } from 'react-navigation';


import HomeScreen from '../screens/HomeScreen';
import LinksScreen from './LinksNavigator';

export default createSwitchNavigator({
  Home: HomeScreen,
  Links: LinksScreen,
});
