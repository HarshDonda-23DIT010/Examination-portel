import {
   createApi,
   fetchBaseQuery
} from '@reduxjs/toolkit/query/react';
import {
   SUBJECT_ENDPOINTS
} from '../../utils/EndPoints.js';

export const subjectApi = createApi({
   reducerPath: 'subjectApi',
   baseQuery: fetchBaseQuery({
      baseUrl: SUBJECT_ENDPOINTS,
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
   tagTypes: ['Subject'],
   endpoints: (builder) => ({
      addSubject: builder.mutation({
         query: (subjectData) => ({
            url: '/add-new',
            method: 'POST',
            body: subjectData,
         }),
         invalidatesTags: ['Subject'],
      }),
      getSubjectByYearAndSem: builder.query({
         query: ({ yearId, semester }) => ({
            url: `/get-subject-by-year-semester/${yearId}/${semester}`,
            method: 'GET',
         }),
         providesTags: ['Subject'],
      }),
      updateSubject: builder.mutation({
         query: (subjectData) => ({
            url: '/update',
            method: 'PUT',
            body: subjectData,
         }),
         invalidatesTags: ['Subject'],
      }),
      getFacultySubjects: builder.query({
         query: ({ userId, yearId, semester }) => ({
            url: `/get-faculty-subjects/${userId}/${yearId}/${semester}`,
            method: 'GET',
         }),
         providesTags: ['Subject'],
      }),
      addStudentsInSubject: builder.mutation({
         query: (data) => ({
            url: '/add-students-in-subject',
            method: 'POST',
            body: data,
         }),
         invalidatesTags: ['Subject'],
      }),
      getSubjectStudents: builder.query({
         query: (subjectId) => ({
            url: `/subject-students/${subjectId}`,
            method: 'GET',
         }),
         providesTags: ['Subject'],
      }),
      updateSubjectStudents: builder.mutation({
         query: ({ subjectId, ...data }) => ({
            url: `/update-subject-students/${subjectId}`,
            method: 'PUT',
            body: data,
         }),
         invalidatesTags: ['Subject'],
      }),
   })
});

export const {
   useAddSubjectMutation,
   useGetSubjectByYearAndSemQuery,
   useUpdateSubjectMutation,
   useGetFacultySubjectsQuery,
   useAddStudentsInSubjectMutation,
   useGetSubjectStudentsQuery,
   useUpdateSubjectStudentsMutation
} = subjectApi;
