import {FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE} from './customerTypes';

const initialState = {
  loading: false,
  customers: [],
  error: ''
}

const customerReducer = (state = initialState, action) => {
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
      customers: action.payload,
      error: ''
    }

    case FETCH_USERS_FAILURE:
    return{
      loading: false,
      customers: [],
      error: action.payload
    }

    default: return state
  }
}

export default customerReducer;
