import {
   createApi,
   fetchBaseQuery
} from '@reduxjs/toolkit/query/react';
import {
   MARKS_ENDPOINTS
} from '../../utils/EndPoints.js';

export const marksApi = createApi({
   reducerPath: 'marksApi',
   baseQuery: fetchBaseQuery({
      baseUrl: MARKS_ENDPOINTS,
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
   tagTypes: ['Marks'],
   endpoints: (builder) => ({
      uploadStudentMarks: builder.mutation({
         query: (marksData) => ({
            url: '/upload-single',
            method: 'POST',
            body: marksData,
         }),
         invalidatesTags: ['Marks'],
      }),
      uploadBulkMarks: builder.mutation({
         query: (bulkMarksData) => ({
            url: '/upload-bulk',
            method: 'POST',
            body: bulkMarksData,
         }),
         invalidatesTags: ['Marks'],
      }),
      getExamMarks: builder.query({
         query: (examId) => ({
            url: `/exam/${examId}`,
            method: 'GET',
         }),
         providesTags: ['Marks'],
      }),
      getStudentExamMarks: builder.query({
         query: ({ examId, studentId }) => ({
            url: `/exam/${examId}/student/${studentId}`,
            method: 'GET',
         }),
         providesTags: ['Marks'],
      }),
      updateStudentMarks: builder.mutation({
         query: ({ marksId, earnedMarks }) => ({
            url: `/update/${marksId}`,
            method: 'PUT',
            body: { earnedMarks },
         }),
         invalidatesTags: ['Marks'],
      }),
      deleteStudentMarks: builder.mutation({
         query: (marksId) => ({
            url: `/delete/${marksId}`,
            method: 'DELETE',
         }),
         invalidatesTags: ['Marks'],
      })
   })
})

export const {
   useUploadStudentMarksMutation,
   useUploadBulkMarksMutation,
   useGetExamMarksQuery,
   useGetStudentExamMarksQuery,
   useUpdateStudentMarksMutation,
   useDeleteStudentMarksMutation
} = marksApi;