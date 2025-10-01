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
import AddStudentsToSubject from './pages/faculties/AddStudentsToSubject';
import ViewStudents from './pages/faculties/ViewStudents';
import EditStudents from './pages/faculties/EditStudents';
import ManageSubject from './pages/faculties/ManageSubject';
import ManageFaculty from './pages/faculties/ManageFaculty';
import ManageExam from './pages/faculties/ManageExam';
import AssignStudentsToExam from './pages/faculties/AssignStudentsToExam';
import AddSubject from './pages/hod/AddSubject';
import YearSetting from './pages/setting/YearSetting';
import MySubjects from './pages/faculties/MySubjects';

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
      {
        path: '/add-subjects',
        element: <ProtectedRoute><AddSubject /></ProtectedRoute>
      },
      {
        path: '/settings',
        element: <ProtectedRoute><YearSetting /></ProtectedRoute>
      },



      
      // for the Faculties only
      {
        path: '/my-subjects',
        element: <ProtectedRoute><MySubjects /></ProtectedRoute>
      },
      {
        path: '/manage-subject/:subjectId',
        element: <ProtectedRoute><ManageSubject /></ProtectedRoute>
      },
      {
        path: '/manage-faculty/:subjectId',
        element: <ProtectedRoute><ManageFaculty /></ProtectedRoute>
      },
      {
        path: '/manage-exam/:subjectId',
        element: <ProtectedRoute><ManageExam /></ProtectedRoute>
      },
      {
        path: '/assign-students-to-exam/:examId',
        element: <ProtectedRoute><AssignStudentsToExam /></ProtectedRoute>
      },
      {
        path: '/add-students-to-subject',
        element: <ProtectedRoute><AddStudentsToSubject /></ProtectedRoute>
      },
      {
        path: '/view-students',
        element: <ProtectedRoute><ViewStudents /></ProtectedRoute>
      },
      {
        path: '/edit-students-in-subject',
        element: <ProtectedRoute><EditStudents /></ProtectedRoute>
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
