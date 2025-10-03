import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from '@reduxjs/toolkit';
import { authApi } from './api/authApi';
import { yearApi } from './api/yearApi';
import authReducer from './slices/authSlice';
import { subjectApi } from './api/subjectApi';
import { examApi } from './api/examApi';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'], 
};

const rootReducer = combineReducers({
  auth: authReducer,
  [authApi.reducerPath]: authApi.reducer,
  [yearApi.reducerPath]: yearApi.reducer,
  [subjectApi.reducerPath]: subjectApi.reducer,
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
    }).concat(authApi.middleware, yearApi.middleware, subjectApi.middleware, examApi.middleware),
});

export const persistor = persistStore(store);
export default store;
