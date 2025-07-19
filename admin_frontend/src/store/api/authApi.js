import {
  createApi,
  fetchBaseQuery
} from '@reduxjs/toolkit/query/react';
import {
  setCredentials,
  logout
} from '../slices/authSlice';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api/v1/user',
    prepareHeaders: (headers, {
      getState
    }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
    credentials: 'include'
  }),
  tagTypes: ['Auth'],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: '/login',
        method: 'POST',
        body: credentials,
      }),
      async onQueryStarted(arg, {
        dispatch,
        queryFulfilled
      }) {
        try {
          const {
            data
          } = await queryFulfilled;
          dispatch(setCredentials({
            user: data.user,
            token: data.token
          }));
        } catch (error) {
          console.error('Login failed:', error);
        }
      },
      // invalidatesTags: ['Auth'],
    }),
    logout: builder.mutation({
      query: () => ({
        url: '/logout',
        method: 'POST',
      }),
      async onQueryStarted(arg, {
        dispatch,
        queryFulfilled
      }) {
        try {
          await queryFulfilled;
          dispatch(logout());
        } catch (error) {
          dispatch(logout());
        }
      },
      // invalidatesTags: ['Auth'],
    }),
    CreateFaculty: builder.mutation({
      query: (facultyData) => ({
        url: '/register',
        method: 'POST',
        body: facultyData,
      }),
    }),
    getFaculties: builder.query({
        query: () => ({
          url: '/get-all-faculties',
          method: 'GET',
        }),
        providesTags: ['Auth'],
    }),

  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useCreateFacultyMutation,
  useGetFacultiesQuery
} = authApi;