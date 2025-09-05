import { configureStore, combineReducers } from '@reduxjs/toolkit';
import phonebookReducer from './phonebookSlice';

import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const phonebookPersistConfig = {
  key: 'phonebook',
  storage,
  whitelist: ['phonebook'],
};

const rootReducer = combineReducers({
  phonebook: phonebookReducer,
});

const persistedReducer = persistReducer(phonebookPersistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
