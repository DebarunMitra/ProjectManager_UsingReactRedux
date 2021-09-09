const redux = require('redux')
const reduxLogger = require('redux-logger')
const createStore = redux.createStore
const logger = reduxLogger.createLogger()
const applyMiddleware = redux.applyMiddleware
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')

const initialState = {
  loading: false,
  users: [],
  error: ''
}


const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

const fetchUserRequest = () => {
  return {
    type: FETCH_USERS_REQUEST
  }
}


const fetchUserSuccess = users => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users
  }
}

const fetchUserFailure = error => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error
  }
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case FETCH_USERS_REQUEST:
    return{
      ...state,
      loading: true
    }

    case FETCH_USERS_SUCCESS:
    return{
      ...state,
      loading: false,
      users: action.payload,
      error: ''
    }

    case FETCH_USERS_FAILURE:
    return{
      loading: false,
      users: [],
      error: action.payload
    }
  }
}

const fetchUsers = () => {
  return function(dispatch) {
    dispatch(fetchUserRequest())
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      const usersData = response.data.map(user => user.id)
      dispatch(fetchUserSuccess(usersData))
    })
    .catch(error => {
      dispatch(fetchUserFailure(error.message))
    })
  }
}

const store = createStore(reducer, applyMiddleware(logger, thunkMiddleware))
store.subscribe(() => {console.log(store.getState())})
store.dispatch(fetchUsers())
