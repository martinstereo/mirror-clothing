import { compose, legacy_createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { thunk } from "redux-thunk";


import { rootReducer } from "./root-reducer";

import { persistStore, persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage"

const middleWares = [
  process.env.NODE_ENV === 'development' && logger,
  thunk,
].filter(Boolean);


const persistConfig = {
  key: 'key',
  storage,
  whitelist: ['cart'],
}

const composeEnhancer =
  (process.env.NODE_ENV !== 'production' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const persistedReducer = persistReducer(persistConfig, rootReducer)

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares))

export const store = legacy_createStore(persistedReducer, undefined, composedEnhancers)

export const persistor = persistStore(store)
