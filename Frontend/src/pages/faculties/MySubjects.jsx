import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useGetFacultySubjectsQuery } from '../../store/api/subjectApi';
import { Book, BookOpen, Users, Award } from 'lucide-react';
import SubjectCard from '../SubjectCard';

const MySubjects = () => {
  const navigate = useNavigate();
  
  // Extract only required details from store
  const { user, selectedYearObject, selectedSemester } = useSelector((state) => state.auth);
  
  // Get only the IDs we need
  const userId = user?.id;
  const yearId = selectedYearObject?.id;
  const semester = selectedSemester;
  
  const { 
    data: subjectsData, 
    isLoading, 
    error 
  } = useGetFacultySubjectsQuery(
    { 
      userId, 
      yearId, 
      semester 
    },
    { 
      skip: !userId || !yearId || !semester 
    }
  );

  const subjects = subjectsData?.data || [];

  // Check if year and semester are configured
  const isConfigured = yearId && semester;

  // Handler functions for student management
  const handleAddStudents = (subject) => {
    navigate('/add-students-to-subject', { 
      state: { 
        subject,
        yearId,
        semester
      } 
    });
  };

  const handleEditStudents = (subject) => {
    navigate('/edit-students-in-subject', { 
      state: { 
        subject,
        yearId,
        semester
      } 
    });
  };

  const handleViewStudents = (subject) => {
    navigate('/view-students', { 
      state: { 
        subject,
        yearId,
        semester
      } 
    });
  };

  const handleManageSubject = (subject) => {
    // Navigate to subject management page (to be implemented)
    console.log('Managing subject:', subject);
    // For now, you can navigate to a management page or show a modal
    // navigate('/manage-subject', { 
    //   state: { 
    //     subject,
    //     yearId,
    //     semester
    //   } 
    // });
  };

  // Show configuration error if year or semester is not selected
  if (!isConfigured) {
    return (
      <div className="p-6">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <svg className="h-6 w-6 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-lg font-medium text-red-800">Configuration Required</h3>
              <div className="mt-2 text-sm text-red-700">
                <p className="mb-2">Please configure the following to view your subjects:</p>
                <ul className="list-disc pl-5 space-y-1">
                  {!yearId && <li>Select an academic year</li>}
                  {!semester && <li>Select a semester</li>}
                </ul>
                <p className="mt-3">
                  Go to your profile or settings to configure the academic year and semester.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-6 m-4">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-red-800">Error loading subjects</h3>
            <p className="text-sm text-red-700 mt-1">
              {error?.data?.message || 'Something went wrong while fetching your subjects.'}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-4">
          <Book className="h-8 w-8 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-900">My Subjects</h1>
        </div>
        <p className="text-gray-600">
          Subjects where you serve as a coordinator or faculty member for{' '}
          <span className="font-semibold text-blue-600">
            {selectedYearObject?.year} - Semester {selectedSemester}
          </span>
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <BookOpen className="h-8 w-8 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Total Subjects</p>
              <p className="text-2xl font-semibold text-gray-900">{subjects.length}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Award className="h-8 w-8 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">As Coordinator</p>
              <p className="text-2xl font-semibold text-gray-900">
                {subjects.filter(s => s.roles.includes('SubjectCoordinator')).length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">As Faculty</p>
              <p className="text-2xl font-semibold text-gray-900">
                {subjects.filter(s => s.roles.includes('Faculty')).length}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Subjects List */}
      {subjects.length === 0 ? (
        <div className="text-center py-16">
          <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <Book className="h-12 w-12 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No subjects found</h3>
          <p className="text-gray-500 max-w-md mx-auto">
            You are not assigned to any subjects for the selected year and semester. 
            Contact your administrator if you believe this is an error.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {subjects.map((subjectData) => (
            <SubjectCard
              key={subjectData.subject.id}
              subjectData={subjectData}
              onAddStudents={handleAddStudents}
              onEditStudents={handleEditStudents}
              onViewStudents={handleViewStudents}
              onManageSubject={handleManageSubject}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MySubjects;
