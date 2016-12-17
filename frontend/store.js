import { createStore, applyMiddleware } from 'redux';

import reducer from './reducer';


const Store = createStore(
  reducer,
);

export default Store;
