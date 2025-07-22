import {
   createApi,
   fetchBaseQuery
} from '@reduxjs/toolkit/query/react';
import {
   ACADEMIC_YEAR_ENDPOINTS
} from '../../utils/EndPoints.js';

export const yearApi = createApi({
   reducerPath: 'yearApi',
   baseQuery: fetchBaseQuery({
      baseUrl: ACADEMIC_YEAR_ENDPOINTS,
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
   tagTypes: ['Year'],
   endpoints: (builder) => ({
      getYears: builder.query({
         query: () => ({
            url: '/get-all-years',
            method: 'GET',
         }),
         providesTags: ['Year'],
      }),
   }),
})

export const {
   useGetYearsQuery
} = yearApi;