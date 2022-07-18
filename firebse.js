import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import firebase from '@react-native-firebase/app';
export default function firebse() {
  useEffect(() => {
    firebase.initializeApp(
      {
        apiKey: 'AIzaSyCYcbUdS3Gv7O_DaspUOjZTHW1Nbj-0FN8',
        authDomain: 'vandana-school.firebaseapp.com',
        projectId: 'vandana-school',
        storageBucket: 'vandana-school.appspot.com',
        messagingSenderId: '280601519438',
        appId: '1:280601519438:web:d5afb910e1d67746e8ea1f',
        measurementId: 'G-B6MVRRG16B',
        databaseURL: 'https://vandana-school-default-rtdb.firebaseio.com/',
      },
      [],
    );
  });

  return (
    <View>
      <Text>firebse</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
