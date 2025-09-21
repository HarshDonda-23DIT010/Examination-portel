import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { 
  useGetStudentsBySemesterAndDepartmentQuery 
} from '../../store/api/studentApi';
import { 
  useGetSubjectStudentsQuery,
  useUpdateSubjectStudentsMutation 
} from '../../store/api/subjectApi';
import { 
  ChevronRight, 
  Home, 
  Book, 
  Users, 
  Edit, 
  Search, 
  Filter,
  Check,
  X,
  BookOpen,
  GraduationCap,
  Building2,
  AlertCircle,
  Loader2,
  Save,
  RefreshCw
} from 'lucide-react';
import { toast } from 'sonner';

const EditStudents = () => {
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
  const [currentStudents, setCurrentStudents] = useState([]);

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
    data: subjectStudentsData,
    isLoading: isLoadingCurrentStudents
  } = useGetSubjectStudentsQuery(subject?.id, {
    skip: !subject?.id
  });

  const {
    data: studentsData,
    isLoading: isLoadingStudents,
    error: studentsError
  } = useGetStudentsBySemesterAndDepartmentQuery(
    { semester, department: selectedDepartment },
    { skip: !selectedDepartment || !semester }
  );

  const [updateSubjectStudents, { isLoading: isUpdating }] = useUpdateSubjectStudentsMutation();

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

  // Set current students when data loads
  useEffect(() => {
    if (subjectStudentsData?.data?.students) {
      const currentStudentIds = subjectStudentsData.data.students.map(s => s.id);
      setCurrentStudents(subjectStudentsData.data.students);
      setSelectedStudents(currentStudentIds);
    }
  }, [subjectStudentsData]);

  useEffect(() => {
    if (studentsData?.data) {
      const filtered = studentsData.data.filter(student =>
        student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.studentId.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.email.toLowerCase().includes(searchTerm.toLowerCase())
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

  const handleReset = () => {
    const currentStudentIds = currentStudents.map(s => s.id);
    setSelectedStudents(currentStudentIds);
  };

  const handleUpdateStudents = async () => {
    try {
      const result = await updateSubjectStudents({
        subjectId: subject.id,
        studentIds: selectedStudents,
        yearId,
        semester
      }).unwrap();

      toast.success(`Successfully updated students for ${subject.name}`);
      navigate('/my-subjects');
    } catch (error) {
      console.error('Error updating students:', error);
      toast.error(error?.data?.message || 'Failed to update students');
    }
  };

  // Calculate changes
  const originalStudentIds = currentStudents.map(s => s.id);
  const addedStudents = selectedStudents.filter(id => !originalStudentIds.includes(id));
  const removedStudents = originalStudentIds.filter(id => !selectedStudents.includes(id));
  const hasChanges = addedStudents.length > 0 || removedStudents.length > 0;

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
        <span className="text-gray-900 font-medium">Edit Students</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-4">
          <Edit className="h-8 w-8 text-blue-600" />
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Edit Students</h1>
            <p className="text-gray-600">
              Modify student enrollment for <span className="font-semibold text-blue-600">{subject.name}</span> 
              {' '}in {selectedYearObject?.year} - Semester {semester}
            </p>
          </div>
        </div>
      </div>

      {/* Changes Summary */}
      {hasChanges && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
          <div className="flex items-start">
            <AlertCircle className="h-5 w-5 text-yellow-400 mt-0.5 mr-3" />
            <div>
              <h3 className="text-sm font-medium text-yellow-800">Pending Changes</h3>
              <div className="text-sm text-yellow-700 mt-1">
                {addedStudents.length > 0 && (
                  <p>• Adding {addedStudents.length} students</p>
                )}
                {removedStudents.length > 0 && (
                  <p>• Removing {removedStudents.length} students</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

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
              
              <div className="flex items-center space-x-3">
                {hasChanges && (
                  <button
                    onClick={handleReset}
                    className="text-sm text-gray-600 hover:text-gray-700 font-medium flex items-center"
                  >
                    <RefreshCw className="h-4 w-4 mr-1" />
                    Reset
                  </button>
                )}
                {filteredStudents.length > 0 && (
                  <button
                    onClick={handleSelectAll}
                    className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                  >
                    {selectedStudents.length === filteredStudents.length ? 'Deselect All' : 'Select All'}
                  </button>
                )}
              </div>
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
                {filteredStudents.map(student => {
                  const isSelected = selectedStudents.includes(student.id);
                  const wasOriginallySelected = originalStudentIds.includes(student.id);
                  const isAdded = isSelected && !wasOriginallySelected;
                  const isRemoved = !isSelected && wasOriginallySelected;
                  
                  return (
                    <div
                      key={student.id}
                      onClick={() => handleStudentSelect(student.id)}
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                        isSelected
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      } ${isRemoved ? 'opacity-60' : ''}`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                            isSelected
                              ? 'border-blue-500 bg-blue-500'
                              : 'border-gray-300'
                          }`}>
                            {isSelected && (
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
                        
                        <div className="flex items-center space-x-2">
                          {isAdded && (
                            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-md font-medium">
                              Adding
                            </span>
                          )}
                          {isRemoved && (
                            <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-md font-medium">
                              Removing
                            </span>
                          )}
                          {wasOriginallySelected && !isAdded && !isRemoved && (
                            <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-md font-medium">
                              Enrolled
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Action Buttons */}
          {filteredStudents.length > 0 && (
            <div className="p-6 border-t border-gray-200 bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-600">
                  <span className="font-semibold">{selectedStudents.length}</span> students selected
                  {hasChanges && (
                    <span className="ml-2 text-yellow-600">
                      ({addedStudents.length} added, {removedStudents.length} removed)
                    </span>
                  )}
                </div>
                
                <div className="flex space-x-3">
                  <button
                    onClick={() => navigate('/my-subjects')}
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleUpdateStudents}
                    disabled={!hasChanges || isUpdating}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center"
                  >
                    {isUpdating ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin mr-2" />
                        Updating...
                      </>
                    ) : (
                      <>
                        <Save className="h-4 w-4 mr-2" />
                        Save Changes
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

export default EditStudents;
