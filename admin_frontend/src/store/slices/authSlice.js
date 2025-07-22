import {
  createSlice
} from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isAuthenticated: !!localStorage.getItem('AccessToken'),
  users: [],
  selectedYearObject: null,
  selectedSemester: null,
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
      state.selectedYearObject = null;
      state.selectedSemester = null;
      localStorage.removeItem('AccessToken');
      localStorage.removeItem('user');
      localStorage.removeItem('selectedYearObject');
      localStorage.removeItem('selectedSemester');
    },
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    addUsers: (state, action) => {
      state.users.push(action.payload);
    },
    setSelectedYearObject: (state, action) => {
      state.selectedYearObject = action.payload;
      if (action.payload === null) {
        localStorage.removeItem('selectedYearObject');
      } else {
        localStorage.setItem('selectedYearObject', JSON.stringify(action.payload));
      }
    },
    setSelectedSemester: (state, action) => {
      state.selectedSemester = action.payload;
      if (action.payload === '' || action.payload === null) {
        localStorage.removeItem('selectedSemester');
      } else {
        localStorage.setItem('selectedSemester', JSON.stringify(action.payload));
      }
    },
    setYearAndSemester: (state, action) => {
      const {
        yearObject,
        semester
      } = action.payload;
      state.selectedYearObject = yearObject;
      state.selectedSemester = semester;

      if (yearObject === null && semester === '') {
        localStorage.removeItem('selectedYearObject');
        localStorage.removeItem('selectedSemester');
      } else {
        localStorage.setItem('selectedYearObject', JSON.stringify(yearObject));
        localStorage.setItem('selectedSemester', JSON.stringify(semester));
      }
    }
  },
});

export const {
  setCredentials,
  logout,
  setUsers,
  addUsers,
  setSelectedYearObject,
  setSelectedSemester,
  setYearAndSemester
} = authSlice.actions;
export default authSlice.reducer;