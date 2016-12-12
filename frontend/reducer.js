import { combineReducers } from 'redux';

// Reducers from this app.
import { reducer as users, STORE_KEY as USERS_STORE_KEY } from './reducers/users';
import { reducer as messages, STORE_KEY as MESSAGES_STORE_KEY } from './reducers/messages';

const reducersToCombine = {
  [USERS_STORE_KEY]: users,
  [MESSAGES_STORE_KEY]: messages,
};

const combinedReducer = combineReducers(reducersToCombine);

export default function rootReducer( state = {}, action ) {
  let nextState = state;

  // Transform the state with all the reducers combined into a single function.
  nextState = combinedReducer(nextState, action);

  return nextState;
}
