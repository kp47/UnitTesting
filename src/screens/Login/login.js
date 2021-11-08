import React, {useEffect, useState} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getLoginScreenRequest} from '../../redux/login/action';
import {
  // isLoading,
  getAllLoginScreenError,
  getAllLoginScreenSuccess,
} from '../../redux/login/selector';
import styles from './styles';

const Login = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const token: any = useSelector(getAllLoginScreenSuccess);
  const LoginScreenListError: any = useSelector(getAllLoginScreenError);
  // const loader: any = useSelector(isLoading);

  useEffect(() => {
    LoginScreenListError && alert('Error') && setError(true);
    token && alert(token?.token);
  }, [LoginScreenListError, token]);

  const validate = () => {
    dispatch(
      getLoginScreenRequest({
        email: email,
        password: password,
      }),
    );
  };

  return (
    <View>
      <View style={styles.logo}>
        <Image
          source={require('../../images/react_native.png')}
          style={styles.images}
        />
        {error && (
          <Text style={[styles.login, styles.errorColor]}>
            {'Username & Password do not match.'}
          </Text>
        )}
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.inputFormItems}
          placeholder="Email "
          onChangeText={text => setEmail(text)}
          value={email}
        />
        <TextInput
          style={styles.inputFormItems}
          placeholder="Password "
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
          value={password}
        />
        <TouchableOpacity activeOpacity={0.9}>
          <Text style={[styles.login, styles.fpStyle]}>
            {'Forgot Password?'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => validate()} style={styles.register}>
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.mainLinks}>
        <TouchableOpacity activeOpacity={0.9}>
          <Image
            source={require('../../images/facebook.png')}
            style={styles.links}
          />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.9}>
          <Image
            source={require('../../images/google.png')}
            style={styles.links}
          />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.9}>
          <Image
            source={require('../../images/twitter.png')}
            style={styles.links}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity activeOpacity={0.9}>
        <Text style={styles.login}>
          {"Don't have an account?"}
          <Text style={styles.boldText}>{' Register'}</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
