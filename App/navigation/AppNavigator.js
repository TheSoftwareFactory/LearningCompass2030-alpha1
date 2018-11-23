import React from 'react';
import { Platform } from 'react-native';
import { createSwitchNavigator, createStackNavigator, createBottomTabNavigator } from 'react-navigation';


import HomeScreen from '../screens/HomeScreen';
import LinksScreen from './LinksNavigator';
import LearnScreen from '../screens/LearnScreen';

export default createStackNavigator({
  Home: HomeScreen,
  Links: LinksScreen,
  Learn: LearnScreen
}, { 
  headerMode: 'none'
});
