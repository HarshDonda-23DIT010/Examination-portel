import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { 
  useGetStudentsBySemesterAndDepartmentQuery 
} from '../../store/api/studentApi';
import { 
  useAddStudentsInSubjectMutation 
} from '../../store/api/subjectApi';
import { 
  ChevronRight, 
  Home, 
  Book, 
  Users, 
  UserPlus, 
  Search, 
  Filter,
  Check,
  X,
  BookOpen,
  GraduationCap,
  Building2,
  AlertCircle,
  Loader2
} from 'lucide-react';
import { toast } from 'sonner';

const AddStudentsToSubject = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedYearObject } = useSelector((state) => state.auth);

  // Get subject data from navigation state
  const { subject, yearId, semester } = location.state || {};

  // State management
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredStudents, setFilteredStudents] = useState([]);

  // Get available departments from subject
  const getAvailableDepartments = () => {
    if (!subject) return [];
    
    const departments = [];
    if (subject.dep_CSE) departments.push({ code: 'DCS', name: 'Computer Science' });
    if (subject.dep_CE) departments.push({ code: 'DCE', name: 'Civil Engineering' });
    if (subject.dep_IT) departments.push({ code: 'DIT', name: 'Information Technology' });
    
    return departments;
  };

  const availableDepartments = getAvailableDepartments();

  // RTK Query hooks
  const {
    data: studentsData,
    isLoading: isLoadingStudents,
    error: studentsError
  } = useGetStudentsBySemesterAndDepartmentQuery(
    { semester, department: selectedDepartment },
    { skip: !selectedDepartment || !semester }
  );

  const [addStudentsToSubject, { isLoading: isAddingStudents }] = useAddStudentsInSubjectMutation();

  // Effects
  useEffect(() => {
    if (!subject || !yearId || !semester) {
      navigate('/my-subjects');
      return;
    }
    
    // Auto-select department if only one is available
    if (availableDepartments.length === 1) {
      setSelectedDepartment(availableDepartments[0].code);
    }
  }, [subject, yearId, semester, navigate, availableDepartments]);

  useEffect(() => {
    if (studentsData?.data) {
      const filtered = studentsData.data.filter(student =>
        student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.studentId.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (student.batch && student.batch.toLowerCase().includes(searchTerm.toLowerCase()))
      );
      setFilteredStudents(filtered);
    }
  }, [studentsData, searchTerm]);

  // Handlers
  const handleStudentSelect = (studentId) => {
    setSelectedStudents(prev => 
      prev.includes(studentId) 
        ? prev.filter(id => id !== studentId)
        : [...prev, studentId]
    );
  };

  const handleSelectAll = () => {
    const allStudentIds = filteredStudents.map(student => student.id);
    setSelectedStudents(
      selectedStudents.length === allStudentIds.length ? [] : allStudentIds
    );
  };

  const handleAddStudents = async () => {
    if (selectedStudents.length === 0) {
      toast.error('Please select at least one student');
      return;
    }

    try {
      const result = await addStudentsToSubject({
        subjectId: subject.id,
        studentIds: selectedStudents,
        yearId,
        semester
      }).unwrap();

      toast.success(`Successfully added ${selectedStudents.length} students to ${subject.name}`);
      navigate('/my-subjects');
    } catch (error) {
      console.error('Error adding students:', error);
      toast.error(error?.data?.message || 'Failed to add students to subject');
    }
  };

  // Loading state
  if (!subject) {
    return (
      <div className="flex justify-center items-center min-h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
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
        <span className="text-gray-900 font-medium">Add Students</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-4">
          <UserPlus className="h-8 w-8 text-blue-600" />
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Add Students to Subject</h1>
            <p className="text-gray-600">
              Add students to <span className="font-semibold text-blue-600">{subject.name}</span> 
              {' '}for {selectedYearObject?.year} - Semester {semester}
            </p>
          </div>
        </div>
      </div>

      {/* Subject Info Card */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 mb-6 border border-blue-100">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-4">
            <div className="bg-blue-600 p-3 rounded-lg">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">{subject.name}</h3>
              <p className="text-gray-600 font-mono text-sm">{subject.code}</p>
              <div className="flex items-center space-x-4 mt-2">
                <div className="flex items-center text-sm text-gray-700">
                  <GraduationCap className="h-4 w-4 mr-1" />
                  Semester {subject.semester}
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <Book className="h-4 w-4 mr-1" />
                  {subject.type}
                </div>
              </div>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600">Available Departments</p>
            <div className="flex space-x-2 mt-1">
              {availableDepartments.map(dept => (
                <span 
                  key={dept.code}
                  className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-md font-medium"
                >
                  {dept.code}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Department Selection */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
        <div className="flex items-center space-x-3 mb-4">
          <Building2 className="h-5 w-5 text-gray-600" />
          <h2 className="text-lg font-semibold text-gray-900">Select Department</h2>
        </div>
        
        {availableDepartments.length === 0 ? (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="flex items-center">
              <AlertCircle className="h-5 w-5 text-red-400 mr-3" />
              <p className="text-red-800">No departments found for this subject.</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {availableDepartments.map(dept => (
              <button
                key={dept.code}
                onClick={() => setSelectedDepartment(dept.code)}
                className={`p-4 rounded-lg border-2 transition-all ${
                  selectedDepartment === dept.code
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-gray-200 hover:border-gray-300 text-gray-700'
                }`}
              >
                <div className="text-center">
                  <p className="font-semibold">{dept.code}</p>
                  <p className="text-sm">{dept.name}</p>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Students List */}
      {selectedDepartment && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <Users className="h-5 w-5 text-gray-600" />
                <h2 className="text-lg font-semibold text-gray-900">
                  Students - {availableDepartments.find(d => d.code === selectedDepartment)?.name}
                </h2>
              </div>
              
              {filteredStudents.length > 0 && (
                <button
                  onClick={handleSelectAll}
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
            {isLoadingStudents ? (
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
                    ? 'No students match your search criteria' 
                    : `No students found for ${availableDepartments.find(d => d.code === selectedDepartment)?.name} in semester ${semester}`
                  }
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {filteredStudents.map(student => (
                  <div
                    key={student.id}
                    onClick={() => handleStudentSelect(student.id)}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      selectedStudents.includes(student.id)
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                          selectedStudents.includes(student.id)
                            ? 'border-blue-500 bg-blue-500'
                            : 'border-gray-300'
                        }`}>
                          {selectedStudents.includes(student.id) && (
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
                    onClick={() => navigate('/my-subjects')}
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleAddStudents}
                    disabled={selectedStudents.length === 0 || isAddingStudents}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center"
                  >
                    {isAddingStudents ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin mr-2" />
                        Adding Students...
                      </>
                    ) : (
                      <>
                        <UserPlus className="h-4 w-4 mr-2" />
                        Add {selectedStudents.length} Students
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AddStudentsToSubject;