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
         const token = localStorage.getItem('AccessToken');
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
         query: () => '/get-all-years',
         method: 'GET',
         providesTags: ['Year'],
      }),
      addYear: builder.mutation({
         query: (yearData) => ({
            url: '/add-new-year',
            method: 'POST',
            body: yearData,
         }),
         invalidatesTags: ['Year'],
      }),
   }),
})

export const {
   useAddYearMutation,
   useGetYearsQuery
} = yearApi;

