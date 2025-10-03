import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/store';
import { Toaster } from './components/ui/sonner';
import Login from './pages/Login';
import Welcome from './pages/Welcome';
import ProtectedRoute from './components/ProtectedRoute';
import MainLayout from './layout/MainLayout';
import './App.css'
import AddFaculties from './pages/faculties/AddFaculties';
import AdminSetting from './pages/setting/AdminSetting';
import Profile from './pages/Profile/Profile';
import AddAcademicYear from './pages/academic_year/AddAcademicYear';
import AddSubject from './pages/subject/AddSubject';
import SubjectDetails from './pages/subject/SubjectDetails';
import ExamAnalysis from './pages/ExamAnalysis';

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
      {
        path: 'profile',
        element: <ProtectedRoute><Profile /></ProtectedRoute>
      },
      {
        path: 'admin/settings',
        element: <ProtectedRoute><AdminSetting/></ProtectedRoute>
      },
      {
        path: 'academic-year',
        element: <ProtectedRoute><AddAcademicYear/></ProtectedRoute>
      },
      {
        path: 'add-subjects',
        element: <ProtectedRoute><AddSubject/></ProtectedRoute>
      },
      {
        path: 'subjects/:subjectId',
        element: <ProtectedRoute><SubjectDetails/></ProtectedRoute>
      },
      {
        path: 'exam-analysis/:examId',
        element: <ProtectedRoute><ExamAnalysis/></ProtectedRoute>
      }
      // Admin routes can be added here later

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

export default App
 