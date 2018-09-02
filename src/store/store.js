import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import apiMiddleware from './apiMiddleware';
import rootReducer from '../reducers/index';

const initialState = {};
const middleware = [thunk];
const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(
    ...middleware,
    apiMiddleware
  )
);

export default store;
