import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshingCurrentUser: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.pending](state) {
      state.error = null;
    },
    [authOperations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.register.rejected](state, action) {
      state.error = action.payload;
    },
    [authOperations.logIn.pending](state) {
      state.isLoggedIn = false;
      state.token = null;
      state.error = null;
    },
    [authOperations.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.logIn.rejected](state, action) {
      state.isLoggedIn = false;
      state.error = action.payload;
    },
    [authOperations.logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.isLoggedIn = false;
    },
    [authOperations.currentUser.pending](state) {
      state.isRefreshingCurrentUser = false;
      state.error = null;
    },
    [authOperations.currentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshingCurrentUser = true;
    },
    [authOperations.currentUser.rejected](state, action) {
      state.isRefreshingCurrentUser = false;
      state.error = action.payload;
    },
  },
});

export default authSlice.reducer;
