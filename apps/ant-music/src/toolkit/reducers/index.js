import { combineReducers } from 'redux';
import Settings from './Setting';

const reducers = () =>
  combineReducers({
    settings: Settings,
  });

export default reducers;
