import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import persistedReducer from './combineReducer';
import sagas from './saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(sagas);

export {store, sagaMiddleware};
