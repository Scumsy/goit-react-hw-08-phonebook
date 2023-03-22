import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: '',
  isLoading: false,
};

const handlePending = state => {
  state.isLoading = true;
  state.error = '';
};

const handleError = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder.addCase(register.pending, handlePending);
    builder.addCase(register.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    });
    builder.addCase(register.rejected, handleError);

    builder.addCase(logIn.pending, handlePending);
    builder.addCase(logIn.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    });
    builder.addCase(logIn.rejected, handleError);

    builder.addCase(logOut.pending, handlePending);
    builder.addCase(logOut.fulfilled, (state, action) => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isLoading = false;
    });
    builder.addCase(logOut.rejected, handleError);

    builder.addCase(refreshUser.pending, state => {
      state.isRefreshing = true;
      state.isLoading = true;
    });
    builder.addCase(refreshUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
      state.isLoading = false;
    });
    builder.addCase(refreshUser.rejected, state => {
      state.isRefreshing = false;
      state.isLoading = false;
    });
  },
});

export const authReducer = authSlice.reducer;
