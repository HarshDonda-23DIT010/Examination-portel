import React from 'react';
import { useSelector } from 'react-redux';
import { useGetFacultySubjectsQuery } from '../../store/api/subjectApi';
import { Book, User, Clock, BookOpen, Users, Award, Briefcase } from 'lucide-react';

const MySubjects = () => {
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

  const getRoleBadgeColor = (role) => {
    switch (role) {
      case 'SubjectCoordinator':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Faculty':
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

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
        <div className="text-center py-12">
          <Book className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-sm font-medium text-gray-900">No subjects found</h3>
          <p className="mt-1 text-sm text-gray-500">
            You are not assigned to any subjects for the selected year and semester.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {subjects.map((subjectData) => {
            const { subject, roles } = subjectData;
            
            return (
              <div 
                key={subject.id} 
                className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200"
              >
                <div className="p-6">
                  {/* Subject Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {subject.name}
                      </h3>
                      <p className="text-sm text-gray-500 font-mono">
                        Code: {subject.code}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {[...new Set(roles)]
                        .filter(role => ['SubjectCoordinator', 'Faculty'].includes(role))
                        .map((role) => (
                        <span
                          key={role}
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getRoleBadgeColor(role)}`}
                        >
                          {role === 'SubjectCoordinator' ? (
                            <>
                              <Award className="w-3 h-3 mr-1" />
                              Coordinator
                            </>
                          ) : (
                            <>
                              <User className="w-3 h-3 mr-1" />
                              Faculty
                            </>
                          )}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Subject Details */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Briefcase className="w-4 h-4 mr-2" />
                      <span className="capitalize">{subject.type?.toLowerCase()}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>Semester {subject.semester}</span>
                    </div>
                  </div>

                  {/* Department Info */}
                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-2">Departments:</p>
                    <div className="flex flex-wrap gap-2">
                      {subject.dep_CSE && (
                        <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-800">
                          DCS
                        </span>
                      )}
                      {subject.dep_CE && (
                        <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-800">
                          DCE
                        </span>
                      )}
                      {subject.dep_IT && (
                        <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-800">
                          DIT
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Academic Details */}
                  <div className="border-t pt-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-500">Theory</p>
                        <p className="font-medium text-gray-900">
                          {subject.theory_hour || 0}h • {subject.theory_credite || 0} credits
                        </p>
                        <p className="text-xs text-gray-500">
                          Internal: {subject.theory_int_marks || 0} • External: {subject.theory_ext_marks || 0}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-500">Practical</p>
                        <p className="font-medium text-gray-900">
                          {subject.practical_hour || 0}h • {subject.practical_credite || 0} credits
                        </p>
                        <p className="text-xs text-gray-500">
                          Internal: {subject.practical_int_marks || 0} • External: {subject.practical_ext_marks || 0}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MySubjects;
