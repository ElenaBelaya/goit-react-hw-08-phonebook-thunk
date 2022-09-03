import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './auth/auth-slice';
import contactsReducer from './contacts/contactsSlice';
import filter from 'redux/filter';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const ContactsFilterReducer = combineReducers({
  contactsReducer,
  filter,
});

const contactPersistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};

const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: persistReducer(contactPersistConfig, ContactsFilterReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  //  authReducer.middleware,
  // contactsReducer.middleware,
});

export const persistor = persistStore(store);
export default store;
