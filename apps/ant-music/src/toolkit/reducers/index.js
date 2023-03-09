import { combineReducers } from 'redux';
import Settings from './Setting';
import Common from './Common';
import Feature from './Feature';
import Department from './Department';
import User from './User';
import Genre from './Genre';
import Mood from './Mood';
import Theme from './Theme';
import Effect from './Effect';
import Instrument from './Instrument';

const reducers = () =>
  combineReducers({
    settings: Settings,
    common: Common,
    feature: Feature,
    department: Department,
    user: User,
    genre: Genre,
    mood: Mood,
    theme: Theme,
    effect: Effect,
    instrument: Instrument,
  });

export default reducers;
