import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

import Colors from '../constants/Colors';
import LearnScreen from '../screens/LearnScreen';

const LinksStack = createStackNavigator({
  Links: {
    screen: LinksScreen,
    },
}
);

LinksStack.navigationOptions = {
  tabBarLabel: 'Learn',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-book' : 'md-book'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Share',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-share' : 'md-share'}
    />
  ),
};

export default createBottomTabNavigator(
  {
  LinksStack:{
    screen: LinksStack,
  },
  SettingsStack,
  },
  {
      tabBarOptions: {
          showLabel: true,
          activeTintColor: Colors.tabIconSelected,
          inactiveTintColor: Colors.tabIconDefault,
          style: {
              backgroundColor: Colors.tabBar,
          }
      }
  },
  {
    header: {
      visible: false
    }
  }
);
