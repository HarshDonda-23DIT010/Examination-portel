import {
   STUDENT_ENDPOINTS
} from '../../utils/EndPoints.js';
import {
   createApi,
   fetchBaseQuery
} from '@reduxjs/toolkit/query/react';
import {
   setStudents,
   addStudent,
   updateStudent as updateStudentAction
} from '../slices/studentSlice';

export const studentApi = createApi({
   reducerPath: 'studentApi',
   baseQuery: fetchBaseQuery({
      baseUrl: STUDENT_ENDPOINTS,
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
   tagTypes: ['Student'],
   endpoints: (builder) => ({
      addOneStudent: builder.mutation({
         query: (studentData) => ({
            url: '/add-one-student',
            method: 'POST',
            body: studentData,
         }),
         async onQueryStarted(arg, { dispatch, queryFulfilled }) {
            try {
               const { data } = await queryFulfilled;
               if (data.success && data.data) {
                  dispatch(addStudent(data.data));
               }
            } catch (error) {
               console.error('Failed to add student:', error);
            }
         },
         invalidatesTags: ['Student'],
      }),
      bulkUploadStudents: builder.mutation({
         query: (formData) => ({
            url: '/bulk-upload-student',
            method: 'POST',
            body: formData,
         }),
         invalidatesTags: ['Student'],
      }),
      getDepartmentStudents: builder.query({
         query: (department) => ({
            url: `/get-department-students/${department}`,
            method: 'GET',
         }),
         async onQueryStarted(arg, { dispatch, queryFulfilled }) {
            try {
               const { data } = await queryFulfilled;
               if (data.success && data.data) {
                  dispatch(setStudents(data.data));
               }
            } catch (error) {
               console.error('Failed to fetch students:', error);
            }
         },
         providesTags: ['Student'],
      }),
      updateStudent: builder.mutation({
         query: (studentData) => ({
            url: '/update-one-user',
            method: 'PUT',
            body: studentData,
         }),
         async onQueryStarted(arg, { dispatch, queryFulfilled }) {
            try {
               const { data } = await queryFulfilled;
               if (data.success && data.data) {
                  dispatch(updateStudentAction(data.data));
               }
            } catch (error) {
               console.error('Failed to update student:', error);
            }
         },
         invalidatesTags: ['Student'],
      }),
      getStudentsBySemesterAndDepartment: builder.query({
         query: ({ semester, department }) => ({
            url: `/students/${semester}/${department}`,
            method: 'GET',
         }),
         async onQueryStarted(arg, { dispatch, queryFulfilled }) {
            try {
               const { data } = await queryFulfilled;
               if (data.success && data.data) {
                  dispatch(setStudents(data.data));
               }
            } catch (error) {
               console.error('Failed to fetch students by semester and department:', error);
            }
         },
         providesTags: ['Student'],
      }),
   })
});

export const {
   useAddOneStudentMutation,
   useBulkUploadStudentsMutation,
   useGetDepartmentStudentsQuery,
   useUpdateStudentMutation,
   useGetStudentsBySemesterAndDepartmentQuery
} = studentApi;