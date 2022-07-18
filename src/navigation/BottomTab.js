import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {DashBoard, Login} from '../screens';
const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{headerShown: false}}
        name="DashBoard"
        component={DashBoard}
      />
      <Tab.Screen
        options={{headerShown: false}}
        name="Login"
        component={Login}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
