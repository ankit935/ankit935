import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import React, {useState} from 'react';
import styles from './styles';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const onPressLogin = async () => {
    setLoading(true);
    try {
      const doLogin = await auth().signInWithEmailAndPassword(email, password);
      setLoading(false);
      if (doLogin.user) {
        alert('Login Success');
      }
    } catch (error) {
      console.log('Error>>>>>>>', error.message.slice(22, -1));
      setLoading(false);
      alert(`${error.message}`);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="enter your Email"
        value={email}
        onChangeText={text => {
          setEmail(text);
        }}
        style={styles.textFiled}
      />
      <TextInput
        placeholder="enter your Password"
        value={password}
        onChangeText={text => {
          setPassword(text);
        }}
        style={styles.textFiled}
      />
      <TouchableOpacity onPress={onPressLogin} style={styles.loginBtn}>
        <Text>Login</Text>
      </TouchableOpacity>
      {loading ? <ActivityIndicator size={25} /> : null}
    </View>
  );
}
