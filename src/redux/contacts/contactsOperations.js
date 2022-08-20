import * as contactsAPI from './contactsAPI';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getContacts = createAsyncThunk(
  'contacts/getContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await contactsAPI.getContacts();
      return contacts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContacts = createAsyncThunk(
  'contacts/addContacts',
  async (contact, { rejectWithValue }) => {
    try {
      await contactsAPI.addContacts(contact);
      const contacts = await contactsAPI.getContacts();
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const removeContacts = createAsyncThunk(
  'contacts/removeContacts',
  async id => {
    try {
      await contactsAPI.removeContacts(id);
      const contacts = await contactsAPI.getContacts();
      return contacts;
    } catch (error) {
      console.log(error);
    }
  }
);
