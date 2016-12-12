import lodashGet from 'lodash/get';

import {
  ACTION_ADD_MESSAGE_SUCCESS,
  ACTION_ADD_MESSAGE_ERROR,

  ACTION_LIKE_MESSAGE_SUCCESS,
  ACTION_LIKE_MESSAGE_ERROR,

  ACTION_UNLIKE_MESSAGE_SUCCESS,
  ACTION_UNLIKE_MESSAGE_ERROR,
} from "../actions/messages";

// NOTE 'REQUEST' actions are handled by the saga, which handles the
// asynch requests via promises, resulting in and dispatching the
// appropriate 'SUCCESS' OR 'ERROR' action.

// store key
export const STORE_KEY = 'messages';

// initial state
const initialState = {
  messages: [],
};

// state selectors
export function extractState(globalState) {
  return (globalState[STORE_KEY] || initialState);
}

export function extractAllMessages(globalState) {
  return extractState(globalState).messages;
}

export function extractAddMessageError(globalState) {
  return lodashGet(globalState, 'addMessageError', null);
}

// reducer
const reducer = (oldState = initialState, action) => {
  switch(action.type) {
    case ACTION_GET_MESSAGES_SUCCESS: {
      const { messages } = action.payload;
      return {
        ...oldState,
        messages: messages,
      }
    }

    case ACTION_GET_MESSAGES_ERROR: {
      const { messages } = action.payload;
      return {
        ...oldState,
        messages: null,
      }
    }

    case ACTION_ADD_MESSAGE_SUCCESS: {
      const { addedMessage } = action.payload;
      return {
        ...oldState,
        messages: [
          addedMessage,
          ...oldState.messages,
        ],
      };
    }

    case ACTION_ADD_MESSAGE_ERROR: {
      const { addMessageError } = action.payload;
      return {
        ...oldState,
        addMessageError: addMessageError,
      };
    }

    default:
      return oldState;
  }
}

export default reducer;
