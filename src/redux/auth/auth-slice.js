import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshingCurrentUser: false,
  error: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.pending](state) {
      state.error = false;
    },
    [authOperations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.error = false;
    },
    [authOperations.register.rejected](state) {
      state.error = true;
    },
    [authOperations.logIn.pending](state) {
      state.isLoggedIn = false;
      state.error = false;
    },
    [authOperations.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.error = false;
    },
    [authOperations.logIn.rejected](state) {
      state.error = true;
      state.isLoggedIn = false;
    },
    [authOperations.logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [authOperations.currentUser.pending](state) {
      state.isRefreshingCurrentUser = false;
    },
    [authOperations.currentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshingCurrentUser = true;
    },
    [authOperations.currentUser.rejected](state) {
      state.isRefreshingCurrentUser = false;
      state.error = true;
    },
  },
});

export default authSlice.reducer;
