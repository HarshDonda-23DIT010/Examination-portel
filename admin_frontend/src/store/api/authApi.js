import {
  createApi,
  fetchBaseQuery
} from '@reduxjs/toolkit/query/react';
import {
  setCredentials,
  logout,
  setUsers,
} from '../slices/authSlice';
import {
  USER_ENDPOINTS
} from '../../utils/EndPoints.js';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: USER_ENDPOINTS,
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
          const result = await queryFulfilled;
          const { data } = result;
          
          dispatch(setCredentials({
            user: data.data,
          }));
        } catch (error) {
          console.error('Login failed:', error);
        }
      },
      invalidatesTags: ['Auth'],
    }),
    logout: builder.mutation({
      query: () => ({
        url: '/logout',
        method: 'GET',
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
      invalidatesTags: ['Auth'],
    }),
    CreateFaculty: builder.mutation({
      query: (facultyData) => ({
        url: '/register',
        method: 'POST',
        body: facultyData,
      }),
      invalidatesTags: ['Auth'],
    }),
    getFaculties: builder.query({
      query: () => ({
        url: '/get-all-users',
        method: 'GET',
      }),
      async onQueryStarted(arg, {
        dispatch,
        queryFulfilled
      }) {
        try {
          const {
            data
          } = await queryFulfilled;
          if (data.success && data.data) {
            dispatch(setUsers(data.data));
          }
        } catch (error) {
          console.error('Failed to fetch faculties:', error);
        }
      },
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