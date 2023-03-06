import { combineReducers } from 'redux';
import Settings from './Setting';
import Common from './Common';
import Feature from './Feature';

const reducers = () =>
  combineReducers({
    settings: Settings,
    common: Common,
    feature: Feature,
  });

export default reducers;
