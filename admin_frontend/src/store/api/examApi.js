import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const EXAM_BASE_URL = 'http://localhost:5000/api/v1/exam';

export const examApi = createApi({
   reducerPath: 'examApi',
   baseQuery: fetchBaseQuery({
      baseUrl: EXAM_BASE_URL,
      prepareHeaders: (headers, { getState }) => {
         const token = localStorage.getItem('AdminAccessToken');
         if (token) {
            headers.set('authorization', `Bearer ${token}`);
         }
         return headers;
      },
      credentials: 'include'
   }),
   tagTypes: ['Exam'],
   endpoints: (builder) => ({
      getExamsBySubject: builder.query({
         query: ({ subjectId }) => ({
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
      getExamStudents: builder.query({
         query: (examId) => ({
            url: `/students/${examId}`,
            method: 'GET',
         }),
         providesTags: ['Exam'],
      }),
      getExamAnalysis: builder.query({
         query: (examId) => ({
            url: `/analysis/${examId}`,
            method: 'GET',
         }),
         providesTags: ['Exam'],
      })
   })
});

export const {
   useGetExamsBySubjectQuery,
   useGetExamByIdQuery,
   useGetExamStudentsQuery,
   useGetExamAnalysisQuery
} = examApi;