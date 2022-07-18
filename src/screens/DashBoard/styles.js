import {StyleSheet} from 'react-native';
import * as COLORS from '../../assets/colors';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY_LIGHT,
  },
  childContainer: {
    height: 100,
    backgroundColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 15,
    marginHorizontal: 0,
    top: '5%',
    paddingHorizontal: 20,
  },
  titleTxt: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.TEXTBOX_DARK,
  },
  labelContainer: {
    backgroundColor: 'white',

    // top: '10%',
    // paddingHorizontal: 10,
  },
});

export default styles;
