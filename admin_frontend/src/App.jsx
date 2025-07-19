import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Login from './pages/Login';
import Welcome from './pages/Welcome';
import ProtectedRoute from './components/ProtectedRoute';
import MainLayout from './layout/MainLayout';
import './App.css'
import AddFaculties from './pages/faculties/AddFaculties';

const appRouter = createBrowserRouter([
  {

    path: 'login',
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
        path: 'add-faculties',
        element: <ProtectedRoute><AddFaculties /></ProtectedRoute>
      },
      
      // Admin routes can be added here later

    ]
  }
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  )
}

export default App
