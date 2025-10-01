import {
   createApi,
   fetchBaseQuery
} from '@reduxjs/toolkit/query/react';
import {
   EXAM_ENDPOINTS
} from '../../utils/EndPoints.js';

export const examApi = createApi({
   reducerPath: 'examApi',
   baseQuery: fetchBaseQuery({
      baseUrl: EXAM_ENDPOINTS,
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
   tagTypes: ['Exam'],
   endpoints: (builder) => ({
      createExam: builder.mutation({
         query: (examData) => ({
            url: '/create',
            method: 'POST',
            body: examData,
         }),
         invalidatesTags: ['Exam'],
      }),
      updateExam: builder.mutation({
         query: ({ examId, ...updateData }) => ({
            url: `/update/${examId}`,
            method: 'PUT',
            body: updateData,
         }),
         invalidatesTags: ['Exam'],
      }),
      getExamsBySubject: builder.query({
         query: (subjectId) => ({
            url: `/subject/${subjectId}`,
            method: 'GET',
         }),
         providesTags: ['Exam'],
      }),
      getExamById: builder.query({
         query: (examId) => ({
            url: `/${examId}`,
            method: 'GET',
         }),
         providesTags: ['Exam'],
      }),
      deleteExam: builder.mutation({
         query: (examId) => ({
            url: `/${examId}`,
            method: 'DELETE',
         }),
         invalidatesTags: ['Exam'],
      }),
      addExamStudents: builder.mutation({
         query: ({ examId, studentIds }) => ({
            url: `/add-student/${examId}`,
            method: 'POST',
            body: { studentIds },
         }),
         invalidatesTags: ['Exam'],
      }),
      updateExamStudents: builder.mutation({
         query: ({ examId, studentIds }) => ({
            url: `/update-student/${examId}`,
            method: 'PUT',
            body: { studentIds },
         }),
         invalidatesTags: ['Exam'],
      })
   })
})

export const {
   useCreateExamMutation,
   useUpdateExamMutation,
   useGetExamsBySubjectQuery,
   useGetExamByIdQuery,
   useDeleteExamMutation,
   useAddExamStudentsMutation,
   useUpdateExamStudentsMutation
} = examApi;