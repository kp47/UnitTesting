import {AxiosResponse} from 'axios';
import * as actionTypes from '../../types';

export const GET_LOGIN_SCREEN_REQUEST = 'GET_LOGIN_SCREEN_REQUEST';
export const GET_LOGIN_SCREEN_SUCCESS = 'GET_LOGIN_SCREEN_SUCCESS';
export const GET_LOGIN_SCREEN_ERROR = 'GET_LOGIN_SCREEN_ERROR';

export interface GetLoginScreenRequest {
  type: typeof GET_LOGIN_SCREEN_REQUEST;
  payload: actionTypes.LoginPostRequest;
}

export interface GetLoginScreenSuccess {
  type: typeof GET_LOGIN_SCREEN_SUCCESS;
  payload: actionTypes.LoginPostResponse;
}

export interface GetLoginScreenError {
  type: typeof GET_LOGIN_SCREEN_ERROR;
  payload: any;
}

export const getLoginScreenRequest = (
  payload: actionTypes.LoginPostRequest,
): GetLoginScreenRequest => {
  // console.log(JSON.stringify(payload));
  return {
    type: GET_LOGIN_SCREEN_REQUEST,
    payload,
  };
};
export const getLoginScreenSuccess = (
  payload: actionTypes.LoginPostResponse,
): GetLoginScreenSuccess => {
  return {
    type: GET_LOGIN_SCREEN_SUCCESS,
    payload: payload,
  };
};

export const getLoginScreenError = (
  error: AxiosResponse,
): GetLoginScreenError => ({
  type: GET_LOGIN_SCREEN_ERROR,
  payload: error,
});

export type ActionTypes =
  | GetLoginScreenRequest
  | GetLoginScreenSuccess
  | GetLoginScreenError;
