import { combineReducers } from 'redux';
import Settings from './Setting';
import Common from './Common';
import Feature from './Feature';
import Department from './Department';
import User from './User';

const reducers = () =>
  combineReducers({
    settings: Settings,
    common: Common,
    feature: Feature,
    department: Department,
    user: User,
  });

export default reducers;
