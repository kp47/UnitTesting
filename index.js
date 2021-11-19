/* eslint-disable prettier/prettier */
/**
 * @format
 */

import React from 'react';
import {AppRegistry, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {name as appName} from './app.json';
import Navigator from './src/navigation';
import {store} from './src/networking/store';

const ReduxApp = () => (
  <Provider store={store}>
    <StatusBar barStyle={'dark-content'} backgroundColor={'#FFFFFF'} />
    <Navigator />
  </Provider>
);

AppRegistry.registerComponent(appName, () => ReduxApp);
