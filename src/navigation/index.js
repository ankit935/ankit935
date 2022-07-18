import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Splash, Login, DashBoard} from '../screens';
import BottomTab from './BottomTab';

const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();
const Tab = createBottomTabNavigator();

export default function AppNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Splash"
        component={Splash}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="DashBoard"
        component={BottomTab}
      />
    </Stack.Navigator>
  );
}

// export const MyDrawer = () => {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="DashBoard" component={AppNavigation} />
//     </Drawer.Navigator>
//   );
// };

// export const MyBottomTab = () => {
//   return (
//     <BottomTab.Navigator>
//       <BottomTab.Screen name="DashBoard" component={DashBoard} />
//       <BottomTab.Screen name="Login" component={Login} />
//       <BottomTab.Screen name="DashBoard" component={DashBoard} />
//       <BottomTab.Screen name="DashBoard" component={DashBoard} />
//     </BottomTab.Navigator>
//   );
// };
const styles = StyleSheet.create({});
