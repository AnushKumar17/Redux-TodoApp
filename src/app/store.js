import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Define a configuration for redux-persist
const persistConfig = {
  key: 'root', // key for the localStorage key
  storage, // define which storage to use
};

// Wrap the root reducer with redux-persist
const persistedReducer = persistReducer(persistConfig, todoReducer);

// Create the Redux store with the persisted reducer
export const store = configureStore({
  reducer: persistedReducer,
});

// Create a persistor object to persist the store
export const persistor = persistStore(store);
