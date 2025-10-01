import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from '@reduxjs/toolkit';
import { authApi } from './api/authApi';
import authReducer from './slices/authSlice';
import studentReducer from './slices/studentSlice';
import { yearApi } from './api/yearApi';
import { studentApi } from './api/studentApi';
import { subjectApi } from './api/subjectApi';
import { subjectFacultyApi } from './api/subjectFacultyApi';
import { examApi } from './api/examApi';

const persistConfig = {
  key: 'faculty-root',
  storage,
  whitelist: ['auth', 'student'], 
};

const rootReducer = combineReducers({
  auth: authReducer,
  student: studentReducer,
  [authApi.reducerPath]: authApi.reducer,
  [studentApi.reducerPath]: studentApi.reducer,
  [yearApi.reducerPath]: yearApi.reducer,
  [subjectApi.reducerPath]: subjectApi.reducer,
  [subjectFacultyApi.reducerPath]: subjectFacultyApi.reducer,
  [examApi.reducerPath]: examApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }).concat(authApi.middleware , studentApi.middleware , yearApi.middleware , subjectApi.middleware, subjectFacultyApi.middleware, examApi.middleware),
});

export const persistor = persistStore(store);
export default store;
