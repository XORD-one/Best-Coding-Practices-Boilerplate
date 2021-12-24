import { combineReducers } from 'redux';
import counterReducer from '../slices/counterSlice';

const reducers = combineReducers({
  counter: counterReducer,
});

export default reducers;
