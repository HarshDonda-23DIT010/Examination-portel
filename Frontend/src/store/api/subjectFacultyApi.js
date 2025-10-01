import {
   createApi,
   fetchBaseQuery
} from '@reduxjs/toolkit/query/react';
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
      getSubjectFaculty: builder.query({
         query: (subjectId) => ({
            url: `/assigned-faculty/${subjectId}`,
            method: 'GET',
         }),
         providesTags: ['SubjectFaculty'],
      }),
      updateSubjectFaculty: builder.mutation({
         query: ({ facultyAssignmentId, ...updateData }) => ({
            url: `/update/${facultyAssignmentId}`,
            method: 'PUT',
            body: updateData,
         }),
         invalidatesTags: ['SubjectFaculty'],
      }),
      removeSubjectFaculty: builder.mutation({
         query: (facultyAssignmentId) => ({
            url: `/remove/${facultyAssignmentId}`,
            method: 'DELETE',
         }),
         invalidatesTags: ['SubjectFaculty'],
      })
   })
})

export const {
   useAddSubjectFacultyMutation,
   useGetSubjectFacultyQuery,
   useUpdateSubjectFacultyMutation,
   useRemoveSubjectFacultyMutation
} = subjectFacultyApi;