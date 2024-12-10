import { compose, legacy_createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

import { persistStore, persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage"


const middleWares = [process.env.NODE_ENV === 'development' && logger]


const persistConfig = {
  key: 'key',
  storage,
  blacklist: ['user'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


const composedEnhancers = compose(applyMiddleware(...middleWares))

export const store = legacy_createStore(persistedReducer, undefined, composedEnhancers)

export const persistor = persistStore(store)