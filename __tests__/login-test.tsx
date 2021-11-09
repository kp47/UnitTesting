/**
 * @format
 */

import {render, fireEvent, act, waitFor} from '@testing-library/react-native';
import React from 'react';
import {Provider} from 'react-redux';
import {store} from '../src/networking/store';
import 'react-native';
import Login from '../src/screens/Login/login';

describe('Login Screen page test', () => {
  test('Check to see if renders properly', async () => {
    const component = (
      <Provider store={store}>
        <Login />
      </Provider>
    );

    const wrapper = render(component);
    expect(wrapper).toBeTruthy();
    expect(wrapper.toJSON()).toMatchSnapshot();

    const textToEnter = 'InvalidUsername';
    // const textToEnter = 'eve.holt@reqres.in';
    const input = await wrapper.findByTestId('userName');
    fireEvent.changeText(input, textToEnter);

    const passwordToEnter = 'InvalidPassword';
    // const passwordToEnter = 'cityslicka';
    const passwordInput = await wrapper.findByTestId('password');
    fireEvent.changeText(passwordInput, passwordToEnter);

    await act(async () => fireEvent.press(wrapper.getByTestId('login')));
    wrapper.rerender(component);

    // wait for appearance inside an assertion
    await waitFor(() => {
      expect(
        wrapper.getByText('Username & Password do not match.'),
      ).toBeTruthy();
    });
  });
});
