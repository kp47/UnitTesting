import {all, fork} from 'redux-saga/effects';

import watchOnLoginScreenRequest from '../redux/login/saga';

export default function* rootSaga() {
  yield all([fork(watchOnLoginScreenRequest)]);
}
