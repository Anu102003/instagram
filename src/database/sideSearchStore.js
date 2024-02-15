import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import searchUserReducer from './reducers';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['searchUserData'],
};

const persistedReducer = persistReducer(persistConfig, searchUserReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
