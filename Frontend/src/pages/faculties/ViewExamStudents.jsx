import React, { useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useGetExamStudentsQuery } from '../../store/api/examApi';
import { 
  ChevronRight, 
  Home, 
  Users, 
  Search, 
  Eye,
  Edit,
  BookOpen,
  GraduationCap,
  Building2,
  AlertCircle,
  Loader2,
  Trophy,
  Calendar,
  Hash,
  CheckCircle,
  XCircle,
  UserCheck
} from 'lucide-react';

const ViewExamStudents = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { examId } = useParams();

  // Get exam data from navigation state
  const { exam, subject, subjectData } = location.state || {};

  // State management
  const [searchTerm, setSearchTerm] = useState('');

  const { 
    data: examStudentsData, 
    isLoading: studentsLoading, 
    error: studentsError 
  } = useGetExamStudentsQuery(examId, {
    skip: !examId
  });

  // Get department color for UI consistency
  const getDepartmentColor = (dept) => {
    const colors = {
      'DIT': 'text-blue-600 bg-blue-50',
      'DCE': 'text-green-600 bg-green-50', 
      'DCS': 'text-purple-600 bg-purple-50'
    };
    return colors[dept] || 'text-gray-600 bg-gray-50';
  };

  // Filter students based on search
  const getFilteredStudents = () => {
    if (!examStudentsData?.data?.students) return [];
    
    let filtered = examStudentsData.data.students;
    
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(student =>
        student.name.toLowerCase().includes(searchLower) ||
        student.studentId.toLowerCase().includes(searchLower) ||
        student.email.toLowerCase().includes(searchLower)
      );
    }
    
    return filtered;
  };

  const filteredStudents = getFilteredStudents();

  // Navigate to edit students
  const handleEditStudents = () => {
    navigate(`/assign-students-to-exam/${examId}`, {
      state: {
        exam,
        subject,
        subjectData,
        editMode: true
      }
    });
  };

  // Error state
  if (studentsError) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Error Loading Students</h2>
          <p className="text-gray-600 mb-4">Failed to load students for this exam</p>
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  // Loading state
  if (studentsLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-12 w-12 text-blue-600 mx-auto animate-spin mb-4" />
          <p className="text-gray-600">Loading exam students...</p>
        </div>
      </div>
    );
  }

  const examData = examStudentsData?.data?.exam || exam;
  const students = examStudentsData?.data?.students || [];
  const statistics = examStudentsData?.data?.statistics || {};

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
        <button
          onClick={() => navigate('/')}
          className="flex items-center hover:text-blue-600 transition-colors"
        >
          <Home className="h-4 w-4" />
        </button>
        <ChevronRight className="h-4 w-4" />
        <button
          onClick={() => navigate('/my-subjects')}
          className="hover:text-blue-600 transition-colors"
        >
          My Subjects
        </button>
        <ChevronRight className="h-4 w-4" />
        <button
          onClick={() => navigate(-1)}
          className="hover:text-blue-600 transition-colors"
        >
          {subject?.name || 'Subject'}
        </button>
        <ChevronRight className="h-4 w-4" />
        <span className="text-gray-900 font-medium">View Exam Students</span>
      </nav>

      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Exam Students</h1>
            <p className="mt-2 text-gray-600">
              Students assigned to <span className="font-semibold text-blue-600">{examData?.name}</span>
            </p>
          </div>
          <button
            onClick={handleEditStudents}
            className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
          >
            <Edit className="w-4 h-4 mr-2" />
            Edit Students
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Exam Details */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Exam Details</h2>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Exam Name</span>
                <span className="text-sm font-medium text-gray-900">{examData?.name}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Subject</span>
                <span className="text-sm font-medium text-gray-900">
                  {examData?.subject?.name} ({examData?.subject?.code})
                </span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Date</span>
                <span className="text-sm font-medium text-gray-900">
                  {examData?.date ? new Date(examData.date).toLocaleDateString() : 'Not set'}
                </span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Total Marks</span>
                <span className="text-sm font-medium text-gray-900">{examData?.totalMarks}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Effective Marks</span>
                <span className="text-sm font-medium text-gray-900">{examData?.effectiveMarks}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Department</span>
                <span className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium ${getDepartmentColor(examData?.department)}`}>
                  {examData?.department}
                </span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Division</span>
                <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-indigo-100 text-indigo-700">
                  {examData?.division === 'ALL' ? 'All Divisions' : `Division ${examData?.division}`}
                </span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Batch</span>
                <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-emerald-100 text-emerald-700">
                  {examData?.batch === 'NONE' ? 'All Batches' : `Batch ${examData?.batch}`}
                </span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Status</span>
                <span className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium ${
                  examData?.status === 'Taken' 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-yellow-100 text-yellow-700'
                }`}>
                  {examData?.status || 'Pending'}
                </span>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Statistics</h2>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <div className="flex items-center text-sm text-blue-700">
                  <Users className="w-4 h-4 mr-2" />
                  Total Students
                </div>
                <span className="text-lg font-bold text-blue-600">
                  {statistics.totalStudents || students.length}
                </span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <div className="flex items-center text-sm text-green-700">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  With Marks
                </div>
                <span className="text-lg font-bold text-green-600">
                  {statistics.studentsWithMarks || 0}
                </span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                <div className="flex items-center text-sm text-yellow-700">
                  <XCircle className="w-4 h-4 mr-2" />
                  Pending Marks
                </div>
                <span className="text-lg font-bold text-yellow-600">
                  {statistics.pendingStudents || statistics.totalStudents - statistics.studentsWithMarks}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Students List */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900">
                  Assigned Students ({filteredStudents.length})
                </h2>
              </div>
              
              {/* Search */}
              <div className="relative">
                <Search className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search students by name, ID, or email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="p-6">
              {filteredStudents.length === 0 ? (
                <div className="text-center py-12">
                  <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {searchTerm ? 'No students match your search' : 'No students assigned'}
                  </h3>
                  <p className="text-gray-500 mb-6">
                    {searchTerm 
                      ? 'Try adjusting your search criteria' 
                      : 'No students have been assigned to this exam yet.'}
                  </p>
                  {!searchTerm && (
                    <button
                      onClick={handleEditStudents}
                      className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                    >
                      <UserCheck className="w-5 h-5 mr-2" />
                      Assign Students
                    </button>
                  )}
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-4">
                  {filteredStudents.map((student) => (
                    <div
                      key={student.id}
                      className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all"
                    >
                      <div className="flex-1">
                        <div className="flex items-center space-x-4">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                              <span className="text-sm font-semibold text-blue-600">
                                {student.name.charAt(0).toUpperCase()}
                              </span>
                            </div>
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate">
                              {student.name}
                            </p>
                            <p className="text-sm text-gray-500 truncate">
                              {student.studentId} • {student.email}
                            </p>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <span className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium ${getDepartmentColor(student.department)}`}>
                              {student.department}
                            </span>
                            <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-indigo-100 text-indigo-700">
                              Div {student.div}
                            </span>
                            <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-emerald-100 text-emerald-700">
                              Batch {student.batch}
                            </span>
                          </div>
                          
                          <div className="flex items-center">
                            {student.hasMarks ? (
                              <div className="flex items-center text-green-600">
                                <CheckCircle className="w-5 h-5 mr-1" />
                                <span className="text-sm font-medium">
                                  {student.marks?.earnedMarks === -1 ? 'Absent' : `${student.marks?.earnedMarks}/${examData?.totalMarks}`}
                                </span>
                              </div>
                            ) : (
                              <div className="flex items-center text-yellow-600">
                                <XCircle className="w-5 h-5 mr-1" />
                                <span className="text-sm font-medium">No marks</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewExamStudents;