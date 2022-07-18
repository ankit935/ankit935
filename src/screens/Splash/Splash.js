import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import LottieView from 'lottie-react-native';

export default function Splash() {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('DashBoard');
    }, 5000);
  }, []);
  return (
    <View style={{backgroundColor: '#B4E197', flex: 1}}>
      <LottieView
        source={require('../../../assets/lottie.json')}
        autoPlay
        loop
      />
      <Text>Shree Vandana School</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
