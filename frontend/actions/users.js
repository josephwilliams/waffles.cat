// users actions
export const ACTION_GET_USERS_REQUEST = 'ACTION_GET_USERS_REQUEST';
export const ACTION_GET_USERS_SUCCESS = 'ACTION_GET_USERS_SUCCESS';
export const ACTION_GET_USERS_ERROR = 'ACTION_GET_USERS_ERROR';

// get current user
export const ACTION_GET_CURRENT_USER_REQUEST = 'ACTION_GET_CURRENT_USER_REQUEST';
export const ACTION_GET_CURRENT_USER_SUCCESS = 'ACTION_GET_CURRENT_USER_SUCCESS';
export const ACTION_GET_CURRENT_USER_ERROR = 'ACTION_GET_CURRENT_USER_ERROR';

// authenticate user (sign-up or login)
// (NOTE) by using Firebase and implementing only Facebook-based authentication,
// signup and login are effectively the same, i.e. based on the same function
// (see the users saga), and occur only when 'ACTION_GET_CURRENT_USER_REQUEST' fails
export const ACTION_AUTHENTICATE_USER_REQUEST = 'ACTION_AUTHENTICATE_USER_REQUEST';
export const ACTION_AUTHENTICATE_USER_SUCCESS = 'ACTION_AUTHENTICATE_USER_SUCCESS';
export const ACTION_AUTHENTICATE_USER_ERROR = 'ACTION_AUTHENTICATE_USER_ERROR';

// logout current user
export const ACTION_LOGOUT_USER_REQUEST = 'ACTION_LOGOUT_USER_REQUEST';
export const ACTION_LOGOUT_USER_SUCCESS = 'ACTION_LOGOUT_USER_SUCCESS';
export const ACTION_LOGOUT_USER_ERROR = 'ACTION_LOGOUT_USER_ERROR';
