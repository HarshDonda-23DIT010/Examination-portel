import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from '@reduxjs/toolkit';
import { authApi } from './api/authApi';
import authReducer from './slices/authSlice';
import studentReducer from './slices/studentSlice';
import { studentApi } from './api/studentApi';

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
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }).concat(authApi.middleware , studentApi.middleware),
});

export const persistor = persistStore(store);
export default store;
