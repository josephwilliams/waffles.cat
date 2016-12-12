import { createStore, applyMiddleware } from 'redux';
// import createSagaMiddleware from 'redux-saga';

import reducer from './reducer';
// import rootSaga from './rootSaga';

// create the saga middleware
// const sagaMiddleware = createSagaMiddleware();

// mount it on the Store
const Store = createStore(
  reducer,
  // applyMiddleware(sagaMiddleware)
);

// then run the saga
// sagaMiddleware.run(rootSaga);

export default Store;
