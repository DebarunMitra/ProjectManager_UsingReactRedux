import {combineReducers} from 'redux';
import candyReducer from './candies/candyReducer';
import cookieReducer from './cookies/cookieReducer';

const rootReducer = combineReducers({
  candy: candyReducer,
  cookie: cookieReducer
})

export default rootReducer;
