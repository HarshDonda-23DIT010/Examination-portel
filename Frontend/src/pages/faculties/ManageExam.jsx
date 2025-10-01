import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { 
  Home, 
  ChevronRight, 
  Users, 
  Plus, 
  Trash2, 
  Save, 
  User,
  GraduationCap,
  Building,
  BookOpen,
  X,
  Edit,
  Search,
  ChevronDown,
  Calendar,
  Clock,
  Trophy,
  FileText,
  Eye
} from 'lucide-react';
import { useGetFacultiesQuery } from '../../store/api/authApi';
import { useGetSubjectFacultyQuery } from '../../store/api/subjectFacultyApi';
import { 
  useCreateExamMutation, 
  useGetExamsBySubjectQuery, 
  useUpdateExamMutation, 
  useDeleteExamMutation 
} from '../../store/api/examApi';
import { toast } from 'sonner';

const ManageExam = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { subjectId } = useParams();
  const { user } = useSelector((state) => state.auth);
  
  // Get subject data from location state
  const subjectData = location.state?.subjectData;
  const subject = subjectData?.subject || subjectData;

  // API hooks
  const { data: facultiesData, isLoading: facultiesLoading } = useGetFacultiesQuery();
  const { data: subjectFacultyData, isLoading: subjectFacultyLoading } = useGetSubjectFacultyQuery(subjectId);
  const { data: examsData, isLoading: examsLoading } = useGetExamsBySubjectQuery(subjectId);
  const [createExam, { isLoading: isCreating }] = useCreateExamMutation();
  const [updateExam, { isLoading: isUpdating }] = useUpdateExamMutation();
  const [deleteExam, { isLoading: isDeleting }] = useDeleteExamMutation();

  // Local state
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingExam, setEditingExam] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    facultyId: '',
    totalMarks: '',
    effectiveMarks: '',
    department: 'DCS',
    division: 'DCS1',
    batch: 'A',
    status: 'Pending'
  });
  
  // Faculty search states
  const [facultySearchTerm, setFacultySearchTerm] = useState('');
  const [isFacultyDropdownOpen, setIsFacultyDropdownOpen] = useState(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.faculty-dropdown')) {
        setIsFacultyDropdownOpen(false);
      }
    };

    if (isFacultyDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isFacultyDropdownOpen]);

  // Get subject faculties for faculty selection
  const getSubjectFaculties = () => {
    return subjectFacultyData?.data || [];
  };

  // Filter faculties based on search term
  const getFilteredFaculties = () => {
    const faculties = getSubjectFaculties();
    if (!facultySearchTerm) return faculties;
    
    return faculties.filter(assignment => 
      assignment.faculty?.name.toLowerCase().includes(facultySearchTerm.toLowerCase()) ||
      assignment.faculty?.userId.toLowerCase().includes(facultySearchTerm.toLowerCase()) ||
      assignment.department.toLowerCase().includes(facultySearchTerm.toLowerCase())
    );
  };

  // Get selected faculty details
  const getSelectedFacultyDetails = () => {
    if (!formData.facultyId) return null;
    const assignment = getSubjectFaculties().find(assignment => 
      assignment.faculty?.id.toString() === formData.facultyId.toString()
    );
    return assignment;
  };

  const handleFacultySelect = (facultyId) => {
    setFormData(prev => ({ ...prev, facultyId }));
    setIsFacultyDropdownOpen(false);
    setFacultySearchTerm('');
  };

  // Get available departments based on subject
  const getAvailableDepartments = () => {
    const departments = [];
    if (subject?.dep_CSE) departments.push({ value: 'DCS', label: 'Computer Science (DCS)' });
    if (subject?.dep_IT) departments.push({ value: 'DIT', label: 'Information Technology (DIT)' });
    if (subject?.dep_CE) departments.push({ value: 'DCE', label: 'Computer Engineering (DCE)' });
    return departments;
  };

  // Get available divisions based on available departments and selected department
  const getAvailableDivisions = () => {
    const divisions = [];
    
    // If a specific department is selected, only show divisions for that department
    if (formData.department) {
      if (formData.department === 'DCS' && subject?.dep_CSE) {
        divisions.push({ value: 'DCS1', label: 'DCS1' });
        divisions.push({ value: 'DCS2', label: 'DCS2' });
      } else if (formData.department === 'DIT' && subject?.dep_IT) {
        divisions.push({ value: 'DIT1', label: 'DIT1' });
        divisions.push({ value: 'DIT2', label: 'DIT2' });
      } else if (formData.department === 'DCE' && subject?.dep_CE) {
        divisions.push({ value: 'DCE1', label: 'DCE1' });
        divisions.push({ value: 'DCE2', label: 'DCE2' });
      }
    } else {
      // If no department selected, show all available divisions
      if (subject?.dep_CSE) {
        divisions.push({ value: 'DCS1', label: 'DCS1' });
        divisions.push({ value: 'DCS2', label: 'DCS2' });
      }
      if (subject?.dep_IT) {
        divisions.push({ value: 'DIT1', label: 'DIT1' });
        divisions.push({ value: 'DIT2', label: 'DIT2' });
      }
      if (subject?.dep_CE) {
        divisions.push({ value: 'DCE1', label: 'DCE1' });
        divisions.push({ value: 'DCE2', label: 'DCE2' });
      }
    }
    
    return divisions;
  };

  // Initialize form data with first available department and division
  useEffect(() => {
    const availableDepartments = getAvailableDepartments();
    const availableDivisions = getAvailableDivisions();
    
    if (availableDepartments.length > 0 && !formData.department) {
      setFormData(prev => ({
        ...prev,
        department: availableDepartments[0].value,
        division: availableDivisions[0]?.value || 'DCS1'
      }));
    }
  }, [subject]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'department') {
      // When department changes, update division to the first available division for that department
      const availableDivisions = getAvailableDivisions();
      const departmentSpecificDivisions = availableDivisions.filter(div => 
        div.value.startsWith(value)
      );
      
      setFormData(prev => ({ 
        ...prev, 
        [name]: value,
        division: departmentSpecificDivisions[0]?.value || availableDivisions[0]?.value || 'DCS1'
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleCreateExam = async () => {
    if (!formData.name || !formData.date || !formData.facultyId || !formData.totalMarks || !formData.effectiveMarks || !formData.department) {
      toast.error('Please fill all required fields');
      return;
    }

    try {
      const examData = {
        ...formData,
        subjectId: parseInt(subjectId),
        facultyId: parseInt(formData.facultyId),
        totalMarks: parseInt(formData.totalMarks),
        effectiveMarks: parseInt(formData.effectiveMarks),
        yearId: subject.yearId
      };

      await createExam(examData).unwrap();
      
      // Reset form
      resetForm();
      setIsDialogOpen(false);
      
      toast.success('Exam created successfully!');
    } catch (error) {
      console.error('Error creating exam:', error);
      toast.error('Error creating exam. Please try again.');
    }
  };

  const handleUpdateExam = async () => {
    if (!formData.name || !formData.date || !formData.facultyId || !formData.totalMarks || !formData.effectiveMarks || !formData.department) {
      toast.error('Please fill all required fields');
      return;
    }

    try {
      const updateData = {
        examId: editingExam.id,
        ...formData,
        facultyId: parseInt(formData.facultyId),
        totalMarks: parseInt(formData.totalMarks),
        effectiveMarks: parseInt(formData.effectiveMarks)
      };

      await updateExam(updateData).unwrap();
      
      // Reset form
      resetForm();
      setEditingExam(null);
      setIsDialogOpen(false);
      
      toast.success('Exam updated successfully!');
    } catch (error) {
      console.error('Error updating exam:', error);
      toast.error('Error updating exam. Please try again.');
    }
  };

  const handleEditExam = (exam) => {
    setEditingExam(exam);
    setFormData({
      name: exam.name,
      date: exam.date.split('T')[0], // Format date for input
      facultyId: exam.facultyId.toString(),
      totalMarks: exam.totalMarks.toString(),
      effectiveMarks: exam.effectiveMarks.toString(),
      department: exam.department,
      division: exam.division,
      batch: exam.batch,
      status: exam.status
    });
    setIsDialogOpen(true);
  };

  const handleDeleteExam = async (examId) => {
    if (!confirm('Are you sure you want to delete this exam?')) {
      return;
    }

    try {
      await deleteExam(examId).unwrap();
      toast.success('Exam deleted successfully!');
    } catch (error) {
      console.error('Error deleting exam:', error);
      toast.error('Error deleting exam. Please try again.');
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      date: '',
      facultyId: '',
      totalMarks: '',
      effectiveMarks: '',
      department: 'DCS',
      division: 'DCS1',
      batch: 'A',
      status: 'Pending'
    });
    setFacultySearchTerm('');
    setIsFacultyDropdownOpen(false);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
    setEditingExam(null);
    resetForm();
  };

  const exams = examsData?.data || [];

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getStatusBadgeColor = (status) => {
    switch (status) {
      case 'Pending':
        return 'bg-yellow-100 text-yellow-700';
      case 'Taken':
        return 'bg-green-100 text-green-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  if (!subject) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading subject data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Header with Breadcrumb and Add Button */}
        <div className="flex items-center justify-between mb-8">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
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
              onClick={() => navigate(`/manage-subject/${subjectId}`, { state: { subjectData } })}
              className="hover:text-blue-600 transition-colors"
            >
              Manage Subject
            </button>
            <ChevronRight className="h-4 w-4" />
            <span className="text-gray-900 font-medium">Manage Exams</span>
          </nav>

          {/* Add Exam Button */}
          <button
            onClick={() => setIsDialogOpen(true)}
            className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-sm"
          >
            <Plus className="w-5 h-5 mr-2" />
            Add Exam
          </button>
        </div>

        {/* Subject Info */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                {subject.name} ({subject.code})
              </h1>
              <p className="text-gray-600">Semester {subject.semester} • Manage Exams</p>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500">Total Exams</div>
              <div className="text-2xl font-bold text-blue-600">{exams.length}</div>
            </div>
          </div>
        </div>

        {/* Exams List */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Exams</h2>
          </div>

          {examsLoading ? (
            <div className="p-6 text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-2 text-gray-600">Loading exams...</p>
            </div>
          ) : exams.length === 0 ? (
            <div className="p-12 text-center">
              <Trophy className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No exams created yet</h3>
              <p className="text-gray-500 mb-4">Get started by creating your first exam</p>
              <button
                onClick={() => setIsDialogOpen(true)}
                className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
              >
                <Plus className="w-4 h-4 mr-2" />
                Create Exam
              </button>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Exam Details
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Faculty
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Department
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Division & Batch
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Marks
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Students
                    </th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {exams.map((exam) => (
                    <tr key={exam.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <BookOpen className="w-4 h-4 text-blue-600 mr-3" />
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {exam.name}
                            </div>
                            <div className="text-sm text-gray-500 flex items-center">
                              <Calendar className="w-3 h-3 mr-1" />
                              {formatDate(exam.date)}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {exam.faculty?.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {exam.faculty?.userId} • {exam.faculty?.department}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {exam.department}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex gap-2">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                            {exam.division}
                          </span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Batch {exam.batch}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          <div>Total: {exam.totalMarks}</div>
                          <div>Effective: {exam.effectiveMarks}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusBadgeColor(exam.status)}`}>
                          {exam.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {exam._count?.eligibleStudents || 0} students
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <button
                            onClick={() => handleEditExam(exam)}
                            className="inline-flex items-center px-3 py-1 border border-transparent text-xs font-medium rounded text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            title="Edit Exam"
                          >
                            <Edit className="w-3 h-3 mr-1" />
                            Edit
                          </button>
                          <button
                            onClick={() => handleDeleteExam(exam.id)}
                            disabled={isDeleting}
                            className="inline-flex items-center px-3 py-1 border border-transparent text-xs font-medium rounded text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50"
                            title="Delete Exam"
                          >
                            <Trash2 className="w-3 h-3 mr-1" />
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Add/Edit Exam Dialog */}
        {isDialogOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 overflow-y-auto h-full w-full z-50">
            <div className="relative top-20 mx-auto p-5 border w-full max-w-2xl shadow-lg rounded-md bg-white">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <Plus className="w-6 h-6 text-blue-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">
                    {editingExam ? 'Edit Exam' : 'Create New Exam'}
                  </h3>
                </div>
                <button
                  onClick={handleDialogClose}
                  className="p-1 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4">
                {/* Exam Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <BookOpen className="w-4 h-4 inline mr-1" />
                    Exam Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter exam name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                {/* Date */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Calendar className="w-4 h-4 inline mr-1" />
                    Exam Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                {/* Faculty Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <User className="w-4 h-4 inline mr-1" />
                    Assign Faculty
                  </label>
                  
                  {/* Custom Searchable Dropdown */}
                  <div className="relative faculty-dropdown">
                    <div
                      onClick={() => setIsFacultyDropdownOpen(!isFacultyDropdownOpen)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer bg-white flex items-center justify-between"
                    >
                      <div className="flex-1">
                        {formData.facultyId ? (
                          <span className="text-gray-900">
                            {getSelectedFacultyDetails()?.faculty?.name} ({getSelectedFacultyDetails()?.faculty?.userId}) - {getSelectedFacultyDetails()?.department}
                          </span>
                        ) : (
                          <span className="text-gray-500">Select Faculty</span>
                        )}
                      </div>
                      <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${isFacultyDropdownOpen ? 'rotate-180' : ''}`} />
                    </div>

                    {/* Dropdown */}
                    {isFacultyDropdownOpen && (
                      <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-hidden">
                        {/* Search Input */}
                        <div className="p-2 border-b border-gray-200">
                          <div className="relative">
                            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                              type="text"
                              placeholder="Search faculty..."
                              value={facultySearchTerm}
                              onChange={(e) => setFacultySearchTerm(e.target.value)}
                              className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                              onClick={(e) => e.stopPropagation()}
                            />
                          </div>
                        </div>

                        {/* Faculty List */}
                        <div className="max-h-48 overflow-y-auto">
                          {getFilteredFaculties().length > 0 ? (
                            getFilteredFaculties().map((assignment) => (
                              <div
                                key={assignment.id}
                                onClick={() => handleFacultySelect(assignment.faculty.id)}
                                className={`px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm ${
                                  formData.facultyId === assignment.faculty.id.toString() ? 'bg-blue-50 text-blue-700' : 'text-gray-900'
                                }`}
                              >
                                <div className="font-medium">{assignment.faculty.name}</div>
                                <div className="text-xs text-gray-500 flex items-center gap-2">
                                  <span>{assignment.faculty.userId}</span>
                                  <span>•</span>
                                  <span className="inline-flex items-center px-1.5 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-700">
                                    {assignment.department}
                                  </span>
                                  <span>•</span>
                                  <span className="text-xs">
                                    Batches: {[
                                      assignment.aBatch && 'A',
                                      assignment.bBatch && 'B', 
                                      assignment.cBatch && 'C',
                                      assignment.dBatch && 'D'
                                    ].filter(Boolean).join(', ') || 'None'}
                                  </span>
                                </div>
                              </div>
                            ))
                          ) : (
                            <div className="px-3 py-2 text-sm text-gray-500">
                              No faculty found
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Only faculties assigned to this subject are shown
                  </p>
                </div>

                {/* Department */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Building className="w-4 h-4 inline mr-1" />
                    Department
                  </label>
                  <select
                    name="department"
                    value={formData.department}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {getAvailableDepartments().map(dept => (
                      <option key={dept.value} value={dept.value}>
                        {dept.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Division and Batch */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Division
                    </label>
                    <select
                      name="division"
                      value={formData.division}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      {getAvailableDivisions().map(div => (
                        <option key={div.value} value={div.value}>
                          {div.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Batch
                    </label>
                    <select
                      name="batch"
                      value={formData.batch}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="A">A</option>
                      <option value="B">B</option>
                      <option value="C">C</option>
                      <option value="D">D</option>
                      <option value="NONE">NONE</option>
                    </select>
                  </div>
                </div>

                {/* Marks */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Total Marks
                    </label>
                    <input
                      type="number"
                      name="totalMarks"
                      value={formData.totalMarks}
                      onChange={handleInputChange}
                      placeholder="Enter total marks"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Effective Marks
                    </label>
                    <input
                      type="number"
                      name="effectiveMarks"
                      value={formData.effectiveMarks}
                      onChange={handleInputChange}
                      placeholder="Enter effective marks"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Status */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Status
                  </label>
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="Pending">Pending</option>
                    <option value="Taken">Taken</option>
                  </select>
                </div>

                {/* Dialog Buttons */}
                <div className="flex justify-end space-x-3 mt-6">
                  <button
                    onClick={handleDialogClose}
                    className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={editingExam ? handleUpdateExam : handleCreateExam}
                    disabled={(editingExam ? isUpdating : isCreating)}
                    className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                  >
                    {(editingExam ? isUpdating : isCreating) ? (
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                    ) : (
                      <Save className="w-4 h-4 mr-2" />
                    )}
                    {editingExam ? 'Update Exam' : 'Create Exam'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageExam;