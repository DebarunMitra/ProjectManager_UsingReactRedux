import {FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE} from './customerTypes';
import axios from 'axios';

export const fetchUserRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
    info: "Requesting to the customers API"
  }
}


export const fetchUserSuccess = customers => {
  return {
    type: FETCH_USERS_SUCCESS,
    info: "Got the customers data from API",
    payload: customers
  }
}

export const fetchUserFailure = error => {
  return {
    type: FETCH_USERS_FAILURE,
    info: "Request failed for the customers API",
    payload: error
  }
}

export const fetchUsers = () => {
  return function(dispatch) {
    dispatch(fetchUserRequest())
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      const usersData = response.data.map(user => user)
      dispatch(fetchUserSuccess(usersData))
    })
    .catch(error => {
      dispatch(fetchUserFailure(error.message))
    })
  }
}
