import counter from './counter';
import { combineReducers } from 'redux';
import loginUser from './login';

export default combineReducers({
  counter,
  loginUser,
});
