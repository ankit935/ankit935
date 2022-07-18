import {StyleSheet} from 'react-native';
import * as COLORS from '../../assets/colors';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY_LIGHT,
  },
  textFiled: {
    marginHorizontal: 20,
    height: 50,
    backgroundColor: COLORS.TEXTBOX_DARK,
    marginTop: 10,
    borderRadius: 10,
    paddingHorizontal: 10,
    top: '30%',
    elevation: 8,
    borderWidth: 0.4,
  },
  loginBtn: {
    backgroundColor: COLORS.LOGINBTN_MEDIUM,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 50,
    marginTop: 10,
    borderRadius: 10,
    top: '35%',
    borderWidth: 1,
    borderColor: '#1A374D',
    elevation: 10,
  },
});
export default styles;
