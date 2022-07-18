import {Platform, StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  navigationBarStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    // paddingTop: Platform.OS === 'ios' ? 10 : 0,
    backgroundColor: 'white', //colors.COLOR_PRIMARY_APP,
    flexDirection: 'row',
    height: 50,
    marginTop: Platform.OS === 'ios' ? 30 : 0,
  },
  title: {
    fontSize: 18,
    // color: colors.COLOR_PRIMARY_APP,
    // fontFamily: FONTS.FONT_BRANDON_BOLD,
  },
  button: {
    position: 'absolute',
    padding: 7,
    height: '100%',
    alignItems: 'center',
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  separator: {
    position: 'absolute',
    height: 0.5,
    // backgroundColor: colors.COLOR_SEPARATOR,
    bottom: 0,
    width: '100%',
  },
  searchIcon: {
    height: 18,
    width: 18,
  },
  showImageIcon: {
    height: 27,
    width: 27,
  },
});
