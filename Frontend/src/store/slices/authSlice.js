import {
  createSlice
} from '@reduxjs/toolkit';

const initialState = {
  user: JSON.parse(localStorage.getItem('faculty-user')) || null,
  isAuthenticated: !!localStorage.getItem('FacultyAccessToken'),
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const {
        user
      } = action.payload;
      state.user = user;
      state.isAuthenticated = true;
      localStorage.setItem('faculty-user', JSON.stringify(user));
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem('FacultyAccessToken');
      localStorage.removeItem('faculty-user');
    },
  },
});

export const {
  setCredentials,
  logout,
} = authSlice.actions;
export default authSlice.reducer;
