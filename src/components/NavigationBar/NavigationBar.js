import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import * as IMAGES from '../../assets/images';
import styles from './styles';

export default function NavigationBar({
  isSearch,
  isShowImage,
  isBack,
  searchPress,
  showImage,
  backPress,
  title,
  logoutPress,
  isSetting,
  settingPress,
  user_id,
  isDrawer,
  onDrawerPress,
}) {
  const renderLogoutButton = () => {
    return (
      <TouchableOpacity
        style={[styles.button, {right: 20}]}
        // onPress={() => {
        //   settingPress();
        // }}
      >
        <Image
          style={styles.searchIcon}
          resizeMode={'contain'}
          source={IMAGES.IC_SETTINGS}
        />
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.navigationBarStyle}>
      {/* {isSearch ? (
        <TouchableOpacity
          activeOpacity={1.0}
          style={[styles.button, {right: 15}]}
          onPress={() => {
            searchPress();
          }}>
          <Image
            style={styles.searchIcon}
            resizeMode={'contain'}
            source={IMAGES.IC_SEARCH}
          />
        </TouchableOpacity>
      ) : null} */}

      {/* {isShowImage ? (
        <TouchableOpacity
          activeOpacity={1.0}
          style={[styles.button, {right: 15}]}
          onPress={() => {
            showImage();
          }}>
          <Image
            style={styles.showImageIcon}
            resizeMode={'contain'}
            source={IMAGES.IC_SHOW_IMAGE}
          />
        </TouchableOpacity>
      ) : null} */}
      {isBack ? (
        <TouchableOpacity
          activeOpacity={1.0}
          style={[styles.button, {left: 8}]}
          onPress={() => {
            backPress();
          }}>
          <Image
            style={styles.searchIcon}
            resizeMode={'contain'}
            source={IMAGES.IC_BACK}
          />
        </TouchableOpacity>
      ) : null}
      {isDrawer ? (
        <TouchableOpacity
          style={[styles.button, {left: 8}]}
          onPress={() => {
            onDrawerPress();
          }}>
          <Image
            style={styles.searchIcon}
            resizeMode={'contain'}
            source={IMAGES.IC_MENU}
          />
        </TouchableOpacity>
      ) : null}
      {renderLogoutButton()}
      <Text style={styles.title}>{title}</Text>
      <View style={styles.separator} />
    </View>
  );
}
