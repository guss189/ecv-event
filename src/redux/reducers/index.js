import { combineReducers } from 'redux';

import generalReducer from './general-reducer';

export default combineReducers({
  generalReducer: generalReducer,
});
