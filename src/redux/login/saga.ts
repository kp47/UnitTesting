import {put, takeEvery, SagaReturnType, call} from 'redux-saga/effects';
import * as actionCreators from './action';
import {requestApi, AxiosProps} from '../../networking/api';
import {AxiosResponse} from 'axios';

function* getLoginResponse({
  payload,
}: actionCreators.GetLoginScreenRequest): SagaReturnType<any> {
  try {
    const requestParams: AxiosProps = {
      type: 'POST',
      url: 'api/login',
      params: JSON.stringify(payload),
    };
    const response: AxiosResponse = yield call(requestApi, requestParams);
    console.log(JSON.stringify(response));
    yield put(actionCreators.getLoginScreenSuccess(response.data));
  } catch (error) {
    // console.log('errorResponseLogin', JSON.stringify(error));

    yield put(actionCreators.getLoginScreenError(error));
  }
}

export default function* watchOnLoginScreenRequest() {
  yield takeEvery(actionCreators.GET_LOGIN_SCREEN_REQUEST, getLoginResponse);
}
