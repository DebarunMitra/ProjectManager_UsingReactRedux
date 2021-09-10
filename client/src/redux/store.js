import {createStore} from 'redux'
import candyReducer from './candies/candyReducer'

const store = createStore(candyReducer)


export default store;
