import { createSlice } from '@reduxjs/toolkit';

const studentSlice = createSlice({
  name: 'student',
  initialState: {
    students: [],
    selectedStudent: null,
    filters: {
      searchTerm: '',
      semester: '',
      div: ''
    }
  },
  reducers: {
    setStudents: (state, action) => {
      state.students = action.payload;
    },
    addStudent: (state, action) => {
      state.students.push(action.payload);
    },
    updateStudent: (state, action) => {
      const index = state.students.findIndex(
        student => student.studentId === action.payload.studentId
      );
      if (index !== -1) {
        state.students[index] = action.payload;
      }
    },
    removeStudent: (state, action) => {
      state.students = state.students.filter(
        student => student.studentId !== action.payload
      );
    },
    setSelectedStudent: (state, action) => {
      state.selectedStudent = action.payload;
    },
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    clearFilters: (state) => {
      state.filters = {
        searchTerm: '',
        semester: '',
        div: ''
      };
    }
  }
});

export const {
  setStudents,
  addStudent,
  updateStudent,
  removeStudent,
  setSelectedStudent,
  setFilters,
  clearFilters
} = studentSlice.actions;

export default studentSlice.reducer;
