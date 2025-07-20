import {
  createApi,
  fetchBaseQuery
} from '@reduxjs/toolkit/query/react';
import {
  setCredentials,
  logout,
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
      const token = localStorage.getItem('FacultyAccessToken');
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
          const {
            data
          } = result;

          // Store the access token
          if (data?.AccessToken) {
            localStorage.setItem('FacultyAccessToken', data.AccessToken);
          }

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
    updatePassword: builder.mutation({
      query: ({ userId, oldPassword, newPassword }) => ({
        url: `/change-pass/${userId}`,
        method: 'PUT',
        body: {
          oldPassword,
          newPassword
        },
      }),
      invalidatesTags: ['Auth'],
    }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useUpdatePasswordMutation,
} = authApi;
