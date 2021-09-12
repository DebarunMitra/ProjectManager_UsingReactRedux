import {combineReducers} from 'redux';
import candyReducer from './candies/candyReducer';
import cookieReducer from './cookies/cookieReducer';
import customerReducer from './customers/customerReducer';

const rootReducer = combineReducers({
  candy: candyReducer,
  cookie: cookieReducer,
  customers: customerReducer
})

export default rootReducer;
