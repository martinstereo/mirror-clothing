//import { compose, legacy_createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
//import { thunk } from "redux-thunk";
//import createSagaMiddleware from 'redux-saga';
//import { rootSaga } from './root-saga';
import { configureStore } from '@reduxjs/toolkit';

import { rootReducer } from './root-reducer';

import { persistStore /* persistReducer */ } from 'redux-persist';

//import storage from 'redux-persist/lib/storage';

//const sagaMiddleware = createSagaMiddleware();

const middleWares = [process.env.NODE_ENV === 'development' && logger].filter(
  Boolean
);

/* const persistConfig = {
  key: 'key',
  storage,
  whitelist: ['cart'],
}; */

/* const composeEnhancer =
  (process.env.NODE_ENV !== 'production' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose; */

//const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(middleWares),
});

/* export const store = legacy_createStore(
  persistedReducer,
  undefined,
  composedEnhancers
); */

/* sagaMiddleware.run(rootSaga); */

export const persistor = persistStore(store);
