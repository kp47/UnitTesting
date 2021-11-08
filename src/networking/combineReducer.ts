import {combineReducers, Reducer} from '@reduxjs/toolkit';
import loginReducer from '../redux/login/reducer';

const rootReducer: Reducer<any, any> = combineReducers({
  loginReducer,
});

export default rootReducer;
