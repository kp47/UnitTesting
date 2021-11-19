import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './styles';

const Intro = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');

  // const loader: any = useSelector(isLoading);

  const navigateToLogin = () => {
    navigation.navigate('Login', {name: name});
  };

  return (
    <View>
      <View style={styles.logo}>
        <Image
          source={require('../../images/react_native.png')}
          style={styles.images}
        />
      </View>
      <View style={styles.form}>
        <TextInput
          testID={'name'}
          style={styles.inputFormItems}
          placeholder="Enter your name.."
          onChangeText={text => setName(text)}
          value={name}
        />
        <TouchableOpacity
          testID={'Enter'}
          onPress={navigateToLogin}
          style={styles.register}>
          <Text style={styles.text}>Enter</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Intro;
