import {
  fork,
} from 'redux-saga/effects';

import usersSaga from './sagas/users';
import messagesSaga from './sagas/messages';

export default function* rootSaga(...args) {
  yield [
    fork(usersSaga, ...args),
    fork(messagesSaga, ...args),
  ];
}
