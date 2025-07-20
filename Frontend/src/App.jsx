import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/store';
import { Toaster } from './components/ui/sonner';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';
import MainLayout from './layout/MainLayout';
import Welcome from './pages/Welcome';
import Profile from './pages/profile/Profile';
import AddFaculties from './pages/hod/AddFaculties';
import AddStudents from './pages/hod/AddStudents';

const appRouter = createBrowserRouter([
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <ProtectedRoute><Welcome /></ProtectedRoute>
      },
      {
        path: '/profile',
        element: <ProtectedRoute><Profile /></ProtectedRoute>
      },
      {
        path: '/add-faculty',
        element: <ProtectedRoute><AddFaculties /></ProtectedRoute>
      },
      {
        path: '/add-students',
        element: <ProtectedRoute><AddStudents /></ProtectedRoute>
      },
      
    ]
  }
]);

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={appRouter} />
        <Toaster />
      </PersistGate>
    </Provider>
  )
}

export default App;
