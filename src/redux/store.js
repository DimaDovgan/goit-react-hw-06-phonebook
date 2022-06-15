import { configureStore ,getDefaultMiddleware} from '@reduxjs/toolkit';
import { rootReduser } from './redusers/reduser'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import { combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage' 
import loger from 'redux-logger'
//const middleware=[...getDefaultMiddleware(),loger]

const rootReducerLocal = combineReducers({
  rootReduser,
})
 
const persistConfig = {
  key: 'root',
  storage,
}
 
const persistedReducer = persistReducer(persistConfig, rootReducerLocal)
 






const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    // middleware,
})

export const persistor=persistStore(store)

export default store;