import { createSlice } from '@reduxjs/toolkit';
import contactsOperations from './contactsOperations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [contactsOperations.getContacts.fulfilled](state, action) {
      state.items = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    [contactsOperations.addContacts.fulfilled](state, action) {
      state.items = action.payload.items;
      state.isLoading = false;
      state.error = null;
    },
    [contactsOperations.removeContacts.fulfilled](state, action) {
      state.items = action.payload.items;
    },
  },
});

export default contactsSlice.reducer;
