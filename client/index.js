const redux = require('redux')
const reduxLogger = require('redux-logger')
const createStore = redux.createStore
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()

const BUY_CANDY = 'BUY_CANDY'
const BUY_ICECREAM = 'BUY_ICECREAM'

function buyCandy () {
  return {
    type: BUY_CANDY,
    info: 'First redux action'
  }
}

function buyIceCream () {
  return {
    type: BUY_ICECREAM
  }
}

// const initialState = {
//   numOfCandies: 10,
//   numOfIceCreams: 20
// }

const initialCandyState = {
  numOfCandies: 10
}

const initialIceCreamState = {
  numOfIceCreams: 20
}

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case BUY_CANDY: return {
//       ...state,
//       numOfCandies: state.numOfCandies - 1
//     }
//     case BUY_ICECREAM: return {
//       ...state,
//       numOfIceCreams: state.numOfIceCreams - 1
//     }
//     default: return state
//   }
// }

const candyReducer = (state = initialCandyState, action) => {
  switch (action.type) {
    case BUY_CANDY: return {
      ...state,
      numOfCandies: state.numOfCandies - 1
    }
    default: return state
  }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM: return {
      ...state,
      numOfIceCreams: state.numOfIceCreams - 1
    }
    default: return state
  }
}

const rootReducer = combineReducers({
  candy: candyReducer,
  iceCream: iceCreamReducer
})
const store = createStore(rootReducer, applyMiddleware(logger))
console.log('Initial State ', store.getState())
const unsubscribe = store.subscribe(() => { })
store.dispatch(buyCandy())
store.dispatch(buyCandy())
store.dispatch(buyCandy())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe()
