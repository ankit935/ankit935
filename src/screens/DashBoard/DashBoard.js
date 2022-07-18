import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {NavigationBar} from '../../components';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import styles from './styles';
import {LABLES} from './mock';
import database from '@react-native-firebase/database';

export default function DashBoard() {
  const navigation = useNavigation();

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: '#BFA2DB',
          height: 100,
          width: '35%',
          marginHorizontal: 10,
          marginVertical: 10,
          borderRadius: 10,

          borderWidth: 0.4,
          shadowColor: 'black',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.23,
          shadowRadius: 2.62,
          elevation: 5,
        }}>
        <View>
          <Text>{item.id}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {/* <NavigationBar
        title={'Dashboard'}
        isSearch
        isBack={false}
        logoutPress={() => {
          navigation.goBack();
        }}
        searchPress={() => {
          onSearchClick();
        }}
        isSetting
        user_id={1}
        // onDrawerPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        // settingPress={() => navigation.navigate('Setting', {user_id: id})}
      /> */}
      <View style={styles.childContainer}>
        <Text style={styles.titleTxt}>
          WelCome Ankit, {'\n'}in Vandana School
        </Text>
      </View>
      <View
        style={{
          // alignItems: 'center',
          // justifyContent: 'center',
          flex: 1,
          top: '10%',
        }}>
        <FlatList
          columnWrapperStyle={{justifyContent: 'space-between'}}
          style={styles.labelContainer}
          data={LABLES}
          numColumns={2}
          centerContent={true}
          contentContainerStyle={{
            alignSelf: 'center',
          }}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
}
