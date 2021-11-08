/**
 * @format
 */

import {render} from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import Login from '../src/screens/Login/login';

describe('App Screen page test', () => {
  test('Check to see if renders properly', () => {
    const component = <Login />;

    const wrapper = render(component);
    expect(wrapper).toBeTruthy();
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
