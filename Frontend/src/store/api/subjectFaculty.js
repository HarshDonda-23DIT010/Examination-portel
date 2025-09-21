import {
   createApi,
   fetchBaseQuery
} from '@reduxjs/toolkit/query/react';
import {
   setCredentials,
   logout,
} from '../slices/authSlice';
import {
   SUBJECT_FACULTY_ENDPOINTS
} from '../../utils/EndPoints.js';

export const subjectFacultyApi = createApi({
   reducerPath: 'subjectFacultyApi',
   baseQuery: fetchBaseQuery({
      baseUrl: SUBJECT_FACULTY_ENDPOINTS,
      prepareHeaders: (headers, {
         getState
      }) => {
         const token = localStorage.getItem('FacultyAccessToken');
         if (token) {
            headers.set('authorization', `Bearer ${token}`);
         }
         return headers;
      },
      credentials: 'include'
   }),
   tagTypes: ['SubjectFaculty'],
   endpoints: (builder) => ({
      addSubjectFaculty: builder.mutation({
         query: (subjectFacultyData) => ({
            url: '/assign',
            method: 'POST',
            body: subjectFacultyData,
         }),
         invalidatesTags: ['SubjectFaculty'],
      }),
   })
})