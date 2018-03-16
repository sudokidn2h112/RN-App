import { combineReducers } from 'redux';
import chuDeReducers from './chuDeReducers';
import yKienReducers from './yKienReducers';
import navigationReducers from "./navigationReducers";

export default combineReducers({
    chuDeReducers,
    yKienReducers,
    navigationReducers,
  });