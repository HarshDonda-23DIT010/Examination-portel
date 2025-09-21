import {
  createSlice
} from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isAuthenticated: !!localStorage.getItem('FacultyAccessToken'),
  selectedYearObject: null,
  selectedSemester: null,
  currentYear: null
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
      localStorage.removeItem('selectedYearObject');
      localStorage.removeItem('selectedSemester');
      localStorage.removeItem('currentYear');
    },
    setSelectedYearObject: (state, action) => {
      state.selectedYearObject = action.payload;
      if (action.payload === null) {
        localStorage.removeItem('selectedYearObject');
      } else {
        localStorage.setItem('selectedYearObject', JSON.stringify(action.payload));
      }
    },
    setCurrentYear: (state, action) => {
      state.currentYear = action.payload;
      if (action.payload === null) {
        localStorage.removeItem('currentYear');
      } else {
        localStorage.setItem('currentYear', JSON.stringify(action.payload));
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
        semester,
        currentYear
      } = action.payload;
      state.selectedYearObject = yearObject;
      state.selectedSemester = semester;
      state.currentYear = currentYear;

      if (yearObject === null && semester === '') {
        localStorage.removeItem('selectedYearObject');
        localStorage.removeItem('selectedSemester');
        localStorage.removeItem('currentYear');
      } else {
        localStorage.setItem('selectedYearObject', JSON.stringify(yearObject));
        localStorage.setItem('selectedSemester', JSON.stringify(semester));
        localStorage.setItem('currentYear', JSON.stringify(currentYear));
      }
    }
  },
});

export const {
  setCredentials,
  logout,
  setSelectedYearObject,
  setSelectedSemester,
  setYearAndSemester,
  setCurrentYear,

} = authSlice.actions;
export default authSlice.reducer;