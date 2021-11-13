/**
 * @format
 */

import {act, fireEvent, render, waitFor} from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import {Provider} from 'react-redux';
import {store} from '../src/networking/store';
import {
  getLoginScreenError,
  getLoginScreenRequest,
} from '../src/redux/login/action';
import loginReducer from '../src/redux/login/reducer';
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
    await act(async () => wrapper.rerender(component));

    // wait for appearance inside an assertion
    await waitFor(() => {
      expect(
        wrapper.getByText('Username & Password do not match.'),
      ).toBeTruthy();
    });
  });

  test('Check to see if action works properly', async () => {
    expect(
      getLoginScreenRequest({
        email: 'eve.holt@reqres.in',
        password: 'cityslicka',
      }),
    ).toEqual({
      type: 'GET_LOGIN_SCREEN_REQUEST',
      payload: {
        email: 'eve.holt@reqres.in',
        password: 'cityslicka',
      },
    });

    expect(
      getLoginScreenError({
        status: '400',
      }),
    ).toEqual({
      type: 'GET_LOGIN_SCREEN_ERROR',
      payload: {
        status: '400',
      },
    });
  });

  test('Check to see if reducers works properly', async () => {
    const initialState = {
      token: '',
      loginError: false,
      isLoading: false,
    };

    expect(loginReducer(undefined, {})).toEqual(initialState);

    expect(
      loginReducer(
        {},
        {
          type: 'GET_LOGIN_SCREEN_REQUEST',
        },
      ),
    ).toEqual({isLoading: true, loginError: false});

    expect(
      loginReducer(
        {},
        {
          type: 'GET_LOGIN_SCREEN_SUCCESS',
          payload: {
            token: 'QpwL5tke4Pnpja7X4',
          },
        },
      ),
    ).toEqual({
      isLoading: false,
      loginError: false,
      token: {
        token: 'QpwL5tke4Pnpja7X4',
      },
    });
  });
});
