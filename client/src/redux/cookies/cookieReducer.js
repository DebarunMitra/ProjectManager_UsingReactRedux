import {BUY_COOKIE} from './cookieTypes';

const initialCookieState = {
  numOfCookies: 15
}

const cookieReducer = (state = initialCookieState, action) => {
  switch (action.type) {
    case BUY_COOKIE: return {
      ...state,
      numOfCookies: state.numOfCookies - 1
    }
    default: return state
  }
}

export default cookieReducer;
