/* eslint-disable prettier/prettier */
/**
 * @format
 */

import React from 'react';
import {AppRegistry, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {name as appName} from './app.json';
import App from './src/screens/Login/login';
import {store} from './src/networking/store';

const ReduxApp = () => (
  <Provider store={store}>
    <StatusBar barStyle={'dark-content'} backgroundColor={'#FFFFFF'} />
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => ReduxApp);
