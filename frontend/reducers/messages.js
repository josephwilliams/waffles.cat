import {
  ACTION_ADD_MESSAGE_SUCCESS,
  ACTION_ADD_MESSAGE_ERROR,

  ACTION_DELETE_MESSAGE_SUCCESS,
  ACTION_DELETE_MESSAGE_ERROR,

  ACTION_LIKE_MESSAGE_SUCCESS,
  ACTION_LIKE_MESSAGE_ERROR,

  ACTION_UNLIKE_MESSAGE_SUCCESS,
  ACTION_UNLIKE_MESSAGE_ERROR,
} from "../actions/messages";

// NOTE 'REQUEST' actions are handled by the saga, which handles the
// asynch requests via promises, resulting in and dispatching the
// appropriate 'SUCCESS' OR 'ERROR' action.

const defaultState = {
  messages: []
};

const reducer = (oldState = defaultState, action) => {
  switch(action.type) {
    case ADD_FRUIT:
      return {
        fruits: [
          ...oldState.fruits,
          action.fruit
        ]
      };
    case CLEAR:
      return _defaultState;
    default:
      return oldState;
  }
}

export default reducer;
