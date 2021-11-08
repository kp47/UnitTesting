/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ActionTypes,
  GET_LOGIN_SCREEN_SUCCESS,
  GET_LOGIN_SCREEN_REQUEST,
  GET_LOGIN_SCREEN_ERROR,
} from './action';

const initialState = {
  token: '',
  loginError: false,
  isLoading: false,
};

const loginReducer = (state: any = initialState, action: ActionTypes) => {
  switch (action.type) {
    case GET_LOGIN_SCREEN_REQUEST:
      return {
        ...state,
        isLoading: true,
        loginError: false,
      };

    case GET_LOGIN_SCREEN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        loginError: false,
        token: action.payload,
      };

    case GET_LOGIN_SCREEN_ERROR:
      return {
        ...state,
        isLoading: false,
        loginError: true,
        errorResponse: action.payload,
      };

    default:
      return state;
  }
};

export default loginReducer;
