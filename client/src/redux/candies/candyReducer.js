import {BUY_CANDY} from './candyTypes';

const initialCandyState = {
  numOfCandies: 10
}

const candyReducer = (state = initialCandyState, action) => {
  switch (action.type) {
    case BUY_CANDY: return {
      ...state,
      numOfCandies: state.numOfCandies - 1
    }
    default: return state
  }
}

export default candyReducer;
