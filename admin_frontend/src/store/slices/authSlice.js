import {
  createSlice
} from '@reduxjs/toolkit';

const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  isAuthenticated: !!localStorage.getItem('AccessToken'),
  users: [],
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
      localStorage.setItem('user', JSON.stringify(user));
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.users = [];
      localStorage.removeItem('AccessToken');
      localStorage.removeItem('user');
    },
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    addUsers: (state, action) => {
      state.users.push(action.payload);
    },
  },
});

export const {
  setCredentials,
  logout,
  setUsers,
  addUsers
} = authSlice.actions;
export default authSlice.reducer;