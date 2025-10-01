import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { 
  useGetSubjectStudentsQuery 
} from '../../store/api/subjectApi';
import { 
  useAddExamStudentsMutation 
} from '../../store/api/examApi';
import { 
  ChevronRight, 
  Home, 
  Users, 
  UserPlus, 
  Search, 
  Filter,
  Check,
  BookOpen,
  GraduationCap,
  Building2,
  AlertCircle,
  Loader2,
  Trophy,
  Calendar,
  Hash
} from 'lucide-react';
import { toast } from 'sonner';

const AssignStudentsToExam = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { examId } = useParams();
  const { selectedYearObject } = useSelector((state) => state.auth);

  // Get exam data from navigation state
  const { exam, subject, subjectData } = location.state || {};

  // State management
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredStudents, setFilteredStudents] = useState([]);

  const { 
    data: studentsData, 
    isLoading: studentsLoading, 
    error: studentsError 
  } = useGetSubjectStudentsQuery(subject?.id, {
    skip: !subject?.id
  });

  const [addExamStudents, { isLoading: isAssigning }] = useAddExamStudentsMutation();

  // Get department color for UI consistency
  const getDepartmentColor = (dept) => {
    const colors = {
      'IT': 'text-blue-600 bg-blue-50',
      'CE': 'text-green-600 bg-green-50', 
      'CSE': 'text-purple-600 bg-purple-50'
    };
    return colors[dept] || 'text-gray-600 bg-gray-50';
  };

  // Filter students based on exam criteria and search
  useEffect(() => {
    if (!studentsData?.data?.students) {
      setFilteredStudents([]);
      return;
    }

    let filtered = studentsData.data.students;

    // Filter by division if exam has specific division (not ALL)
    if (exam?.division && exam.division !== 'ALL') {
      console.log('Exam division:', exam.division, 'Sample student div:', studentsData.data.students[0]?.div);
      filtered = filtered.filter(student => student.div === exam.division);
    }

    // Filter by batch if exam has specific batch (not NONE or ALL)  
    if (exam?.batch && exam.batch !== 'NONE' && exam.batch !== 'ALL') {
      filtered = filtered.filter(student => student.batch === exam.batch);
    }

    // Apply search filter
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(student =>
        student.name.toLowerCase().includes(searchLower) ||
        student.email.toLowerCase().includes(searchLower) ||
        student.studentId.toLowerCase().includes(searchLower)
      );
    }

    setFilteredStudents(filtered);
  }, [studentsData, exam, searchTerm]);

  // Get available divisions and batches from students for display
  const getAvailableOptions = () => {
    if (!studentsData?.data?.students) return { divisions: [], batches: [] };

    const divisions = [...new Set(studentsData.data.students.map(s => s.div))].filter(Boolean);
    const batches = [...new Set(studentsData.data.students.map(s => s.batch))].filter(Boolean);

    return { divisions, batches };
  };

  const { divisions, batches } = getAvailableOptions();

  // Handle student selection
  const toggleStudentSelection = (student) => {
    setSelectedStudents(prev => {
      const isSelected = prev.find(s => s.id === student.id);
      if (isSelected) {
        return prev.filter(s => s.id !== student.id);
      } else {
        return [...prev, student];
      }
    });
  };

  const selectAllStudents = () => {
    setSelectedStudents(filteredStudents);
  };

  const clearSelection = () => {
    setSelectedStudents([]);
  };

  // Handle assignment submission
  const handleAssignStudents = async () => {
    if (selectedStudents.length === 0) {
      toast.error('Please select at least one student');
      return;
    }

    try {
      const studentIds = selectedStudents.map(s => s.id);
      await addExamStudents({ 
        examId: exam.id, 
        studentIds 
      }).unwrap();
      
      toast.success(`Successfully assigned ${selectedStudents.length} students to the exam!`);
      navigate(-1); // Go back to previous page
    } catch (error) {
      console.error('Error assigning students:', error);
      toast.error(error?.data?.message || 'Failed to assign students to exam');
    }
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
  if (!exam || studentsLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-12 w-12 text-blue-600 mx-auto animate-spin mb-4" />
          <p className="text-gray-600">Loading exam and student data...</p>
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
          onClick={() => navigate(-1)}
          className="hover:text-blue-600 transition-colors"
        >
          Manage Subject
        </button>
        <ChevronRight className="h-4 w-4" />
        <span className="text-gray-900 font-medium">Assign Students to Exam</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-4">
          <UserPlus className="h-8 w-8 text-blue-600" />
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Assign Students to Exam</h1>
            <p className="text-gray-600">
              Assign students to <span className="font-semibold text-blue-600">{exam.name}</span>
              {' '}for {subject?.name} ({subject?.code})
            </p>
          </div>
        </div>
      </div>

      {/* Exam Info Card */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 mb-6 border border-blue-100">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-4">
            <div className="bg-blue-600 p-3 rounded-lg">
              <Trophy className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">{exam.name}</h3>
              <p className="text-gray-600 font-mono text-sm">{subject?.name} ({subject?.code})</p>
              <div className="flex items-center space-x-4 mt-2">
                <div className="flex items-center text-sm text-gray-700">
                  <Building2 className="h-4 w-4 mr-1" />
                  {exam.department}
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <Users className="h-4 w-4 mr-1" />
                  Division {exam.division}
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <Hash className="h-4 w-4 mr-1" />
                  Batch {exam.batch}
                </div>
                {exam.date && (
                  <div className="flex items-center text-sm text-gray-700">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(exam.date).toLocaleDateString()}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600">Exam Status</p>
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium mt-1 ${
              exam.status === 'Pending' 
                ? 'text-yellow-800 bg-yellow-100' 
                : 'text-green-800 bg-green-100'
            }`}>
              {exam.status}
            </span>
          </div>
        </div>
      </div>

      {/* Exam Criteria Info */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
        <div className="flex items-center space-x-3 mb-4">
          <Filter className="h-5 w-5 text-gray-600" />
          <h2 className="text-lg font-semibold text-gray-900">Exam Criteria</h2>
        </div>
        
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm text-blue-800 font-medium mb-2">Students shown are enrolled in this subject and match:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-3 bg-white rounded-lg border">
              <div className="text-sm font-medium text-gray-700">Division</div>
              <div className="text-lg font-bold text-blue-600">{exam.division || 'All'}</div>
            </div>
            <div className="text-center p-3 bg-white rounded-lg border">
              <div className="text-sm font-medium text-gray-700">Batch</div>
              <div className="text-lg font-bold text-blue-600">{exam.batch === 'NONE' || exam.batch === 'ALL' ? 'All' : exam.batch}</div>
            </div>
            <div className="text-center p-3 bg-white rounded-lg border">
              <div className="text-sm font-medium text-gray-700">Department</div>
              <div className="text-lg font-bold text-blue-600">{exam.department}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Students List */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <Users className="h-5 w-5 text-gray-600" />
              <h2 className="text-lg font-semibold text-gray-900">
                Enrolled Students - {subject?.name}
              </h2>
            </div>
            
            {filteredStudents.length > 0 && (
              <button
                onClick={() => selectedStudents.length === filteredStudents.length ? clearSelection() : selectAllStudents()}
                className="text-sm text-blue-600 hover:text-blue-700 font-medium"
              >
                {selectedStudents.length === filteredStudents.length ? 'Deselect All' : 'Select All'}
              </button>
            )}
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search students by name, student ID, or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="p-6">
          {studentsLoading ? (
            <div className="flex justify-center items-center py-8">
              <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
              <span className="ml-2 text-gray-600">Loading students...</span>
            </div>
          ) : studentsError ? (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-center">
                <AlertCircle className="h-5 w-5 text-red-400 mr-3" />
                <p className="text-red-800">
                  {studentsError?.data?.message || 'Failed to load students'}
                </p>
              </div>
            </div>
          ) : filteredStudents.length === 0 ? (
            <div className="text-center py-8">
              <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No students found</h3>
              <p className="text-gray-500">
                {searchTerm 
                  ? 'No enrolled students match your search criteria' 
                  : 'No students enrolled in this subject match the exam criteria'
                }
              </p>
              <p className="text-sm text-gray-400 mt-2">
                Exam requires: Division {exam.division}, Batch {exam.batch}
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {filteredStudents.map(student => (
                <div
                  key={student.id}
                  onClick={() => toggleStudentSelection(student)}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                    selectedStudents.find(s => s.id === student.id)
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                        selectedStudents.find(s => s.id === student.id)
                          ? 'border-blue-500 bg-blue-500'
                          : 'border-gray-300'
                      }`}>
                        {selectedStudents.find(s => s.id === student.id) && (
                          <Check className="h-3 w-3 text-white" />
                        )}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{student.name}</h4>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                          <span className="font-mono">{student.studentId}</span>
                          <span>{student.email}</span>
                          <span className="bg-gray-100 px-2 py-1 rounded text-xs">
                            Div {student.div}
                          </span>
                          <span className="bg-gray-100 px-2 py-1 rounded text-xs">
                            Batch {student.batch}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        {filteredStudents.length > 0 && (
          <div className="p-6 border-t border-gray-200 bg-gray-50">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-600">
                <span className="font-semibold">{selectedStudents.length}</span> students selected
              </p>
              
              <div className="flex space-x-3">
                <button
                  onClick={() => navigate(-1)}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAssignStudents}
                  disabled={selectedStudents.length === 0 || isAssigning}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center"
                >
                  {isAssigning ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin mr-2" />
                      Assigning Students...
                    </>
                  ) : (
                    <>
                      <UserPlus className="h-4 w-4 mr-2" />
                      Assign {selectedStudents.length} Students
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AssignStudentsToExam;