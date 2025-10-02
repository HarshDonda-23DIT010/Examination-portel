import React, { useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useGetExamStudentsQuery } from '../../store/api/examApi';
import {
  ChevronRight,
  Home,
  Trophy,
  Users,
  Search,
  CheckCircle,
  XCircle,
  Clock,
  Building,
  Hash,
  Mail,
  User,
  AlertCircle,
  Loader2,
  ArrowLeft,
  Edit
} from 'lucide-react';
import { toast } from 'sonner';

const ExamStudents = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { examId } = useParams();
  const { exam: examFromState, subject, subjectData } = location.state || {};

  // State management
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all'); // all, with-marks, without-marks

  // API calls
  const {
    data: examStudentsData,
    isLoading: studentsLoading,
    error: studentsError,
    refetch: refetchStudents
  } = useGetExamStudentsQuery(examId, {
    skip: !examId
  });

  const exam = examFromState || examStudentsData?.data?.exam;
  const students = examStudentsData?.data?.students || [];
  const statistics = examStudentsData?.data?.statistics || {};

  // Filter functions
  const getFilteredStudents = () => {
    let filtered = [...students];

    // Apply search filter
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(student =>
        student.name.toLowerCase().includes(searchLower) ||
        student.studentId.toLowerCase().includes(searchLower) ||
        student.email.toLowerCase().includes(searchLower) ||
        student.department.toLowerCase().includes(searchLower) ||
        student.div.toLowerCase().includes(searchLower) ||
        student.batch.toLowerCase().includes(searchLower)
      );
    }

    // Apply status filter
    if (filterStatus === 'with-marks') {
      filtered = filtered.filter(student => student.hasMarks);
    } else if (filterStatus === 'without-marks') {
      filtered = filtered.filter(student => !student.hasMarks);
    }

    return filtered;
  };

  const filteredStudents = getFilteredStudents();

  const getStatusBadgeColor = (status) => {
    switch (status) {
      case 'Pending':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'Taken':
        return 'bg-green-100 text-green-700 border-green-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getMarksDisplay = (student) => {
    if (!student.hasMarks) {
      return <span className="text-gray-400">No marks</span>;
    }

    const marks = student.marks;
    if (marks.earnedMarks === -1) {
      return <span className="text-red-600 font-medium">Absent</span>;
    }

    return (
      <div className="text-sm">
        <div className="font-medium text-gray-900">
          {marks.earnedMarks}/{exam?.totalMarks}
        </div>
        <div className="text-gray-500">
          Effective: {marks.effectiveMarks}/{exam?.effectiveMarks}
        </div>
      </div>
    );
  };

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

  // Error state
  if (studentsError) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Error Loading Students</h2>
          <p className="text-gray-600 mb-4">Failed to load exam students data</p>
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
          onClick={() => navigate(`/manage-subject/${subject?.id || exam?.subject?.id}`)}
          className="hover:text-blue-600 transition-colors"
        >
          {subject?.name || exam?.subject?.name}
        </button>
        <ChevronRight className="h-4 w-4" />
        <span className="text-gray-900">Exam Students</span>
      </nav>

      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-4">
            <div className="bg-blue-600 p-3 rounded-lg">
              <Trophy className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{exam?.name}</h1>
              <p className="text-gray-600 font-mono text-sm">
                {exam?.subject?.name} ({exam?.subject?.code})
              </p>
              <div className="flex items-center space-x-4 mt-2">
                <div className="flex items-center text-sm text-gray-700">
                  <Trophy className="h-4 w-4 mr-1" />
                  Total: {exam?.totalMarks} marks
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  Effective: {exam?.effectiveMarks} marks
                </div>
                <div className="flex items-center text-sm">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusBadgeColor(exam?.status)}`}>
                    {exam?.status || 'Pending'}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex space-x-3">
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </button>
            <button
              onClick={() => navigate(`/assign-students-to-exam/${examId}`, {
                state: { exam, subject, subjectData, editMode: true }
              })}
              className="inline-flex items-center px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition-colors"
            >
              <Edit className="h-4 w-4 mr-2" />
              Edit Students
            </button>
          </div>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Total Students</p>
              <p className="text-2xl font-bold text-gray-900">{statistics.totalStudents || 0}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="bg-green-100 p-3 rounded-lg">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">With Marks</p>
              <p className="text-2xl font-bold text-gray-900">{statistics.studentsWithMarks || 0}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="bg-yellow-100 p-3 rounded-lg">
              <Clock className="h-6 w-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Pending</p>
              <p className="text-2xl font-bold text-gray-900">{statistics.pendingStudents || 0}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search students by name, ID, email, department..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Status Filter */}
          <div className="relative">
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="pl-4 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white min-w-[180px]"
            >
              <option value="all">All Students</option>
              <option value="with-marks">With Marks</option>
              <option value="without-marks">Without Marks</option>
            </select>
          </div>
        </div>
      </div>

      {/* Students List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">
            Students ({filteredStudents.length})
          </h2>
        </div>

        {filteredStudents.length === 0 ? (
          <div className="p-12 text-center">
            <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {searchTerm || filterStatus !== 'all' ? 'No students match your filters' : 'No students assigned'}
            </h3>
            <p className="text-gray-500">
              {searchTerm || filterStatus !== 'all' 
                ? 'Try adjusting your search or filter criteria' 
                : 'No students have been assigned to this exam yet.'}
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Student
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Department
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Division & Batch
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Marks Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Marks
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredStudents.map((student) => (
                  <tr key={student.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="bg-blue-100 h-10 w-10 rounded-full flex items-center justify-center">
                          <User className="h-5 w-5 text-blue-600" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {student.name}
                          </div>
                          <div className="text-sm text-gray-500 font-mono">
                            {student.studentId}
                          </div>
                          <div className="text-sm text-gray-500 flex items-center">
                            <Mail className="h-3 w-3 mr-1" />
                            {student.email}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                        {student.department}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <div className="flex items-center space-x-2">
                        <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-indigo-100 text-indigo-700">
                          {student.div}
                        </span>
                        <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-emerald-100 text-emerald-700">
                          {student.batch === 'NONE' ? 'All' : student.batch}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {student.hasMarks ? (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Completed
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                          <Clock className="h-3 w-3 mr-1" />
                          Pending
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {getMarksDisplay(student)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExamStudents;