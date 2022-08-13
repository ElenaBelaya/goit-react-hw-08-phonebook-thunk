import { configureStore } from '@reduxjs/toolkit';
import contacts from './items';
import filter from './filter';

export const store = configureStore({
  reducer: {
    contacts,
    filter,
  },
});
