import lodashGet from 'lodash/get';

import {
  ACTION_GET_USERS_SUCCESS,
  ACTION_GET_USERS_ERROR,

  ACTION_GET_CURRENT_USER_SUCCESS,
  ACTION_GET_CURRENT_USER_ERROR,

  ACTION_AUTHENTICATE_USER_SUCCESS,
  ACTION_AUTHENTICATE_USER_ERROR,

  ACTION_LOGOUT_USER_SUCCESS,
  ACTION_LOGOUT_USER_ERROR,
} from "../actions/messages";

// NOTE 'REQUEST' actions are handled by the saga, which handles the
// asynch requests via promises, resulting in and dispatching the
// appropriate 'SUCCESS' OR 'ERROR' action.

// store key
export const STORE_KEY = 'users';

// initial state
const initialState = {
  allUsers: [],
  currentUser: null,
  error: null,
};

// state selectors
export function extractState(globalState) {
  return (globalState[STORE_KEY] || initialState);
}

export function extractAllUsers(globalState) {
  return extractState(globalState).allUsers;
}

export function extractCurrentUser(globalState) {
  return extractState(globalState).currentUser;
}

// reducer
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ACTION_GET_USERS_SUCCESS: {
      const { users } = action.payload;
      return {
        ...state,
        allUsers: allUsers,
      };
    }

    case ACTION_GET_USERS_ERROR: {
      const { error } = action.payload;
      return {
        ...state,
        error: error,
      };
    }

    case ACTION_GET_CURRENT_USER_SUCCESS: {
      const { currentUser } = action.payload;
      return {
        ...state,
        currentUser: currentUser,
      };
    }

    case ACTION_GET_CURRENT_USER_ERROR: {
      const { error } = action.payload;
      return {
        ...state,
        error: error,
      };
    }

    case ACTION_AUTHENTICATE_USER_SUCCESS: {
      const { currentUser } = action.payload;
      return {
        ...state,
        currentUser: currentUser,
      };
    }

    case ACTION_AUTHENTICATE_USER_ERROR: {
      const { error } = action.payload;
      return {
        ...state,
        error: error,
      };
    }

    case ACTION_LOGOUT_USER_SUCCESS: {
      const { currentUser } = action.payload;
      return {
        ...state,
        currentUser: null,
      };
    }

    // NOTE (this should have its own error namespace/key within the state)
    case ACTION_LOGOUT_USER_ERROR: {
      const { error } = action.payload;
      return {
        ...state,
        error: error,
      };
    }

    default:
      return state;
  }
}

export default reducer;
