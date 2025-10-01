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
  ChevronDown
} from 'lucide-react';
import { useGetFacultiesQuery } from '../../store/api/authApi';
import { useAddSubjectFacultyMutation, useGetSubjectFacultyQuery, useUpdateSubjectFacultyMutation, useRemoveSubjectFacultyMutation } from '../../store/api/subjectFacultyApi';
import { toast } from 'sonner';

const ManageFaculty = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { subjectId } = useParams();
  const { user } = useSelector((state) => state.auth);

  // Get subject data from location state
  const subjectData = location.state?.subjectData;
  const subject = subjectData?.subject || subjectData;

  // API hooks
  const { data: facultiesData, isLoading: facultiesLoading } = useGetFacultiesQuery();
  const { data: assignedFacultyData, isLoading: assignedLoading } = useGetSubjectFacultyQuery(subjectId);
  const [addSubjectFaculty, { isLoading: isAdding }] = useAddSubjectFacultyMutation();
  const [updateSubjectFaculty, { isLoading: isUpdating }] = useUpdateSubjectFacultyMutation();
  const [removeSubjectFaculty, { isLoading: isRemoving }] = useRemoveSubjectFacultyMutation();

  // Local state
  const [selectedFaculty, setSelectedFaculty] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedBatches, setSelectedBatches] = useState({
    aBatch: false,
    bBatch: false,
    cBatch: false,
    dBatch: false
  });
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingFaculty, setEditingFaculty] = useState(null);
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

  // Get available departments based on subject
  const getAvailableDepartments = () => {
    const departments = [];
    if (subject?.dep_IT) departments.push({ value: 'DIT', label: 'IT' });
    if (subject?.dep_CE) departments.push({ value: 'DCE', label: 'CE' });
    if (subject?.dep_CSE) departments.push({ value: 'DCS', label: 'CSE' });
    return departments;
  };

  // Get all faculties (no filtering by department)
  const getAllFaculties = () => {
    return facultiesData?.data || [];
  };

  // Filter faculties based on search term
  const getFilteredFaculties = () => {
    const faculties = getAllFaculties();
    if (!facultySearchTerm) return faculties;

    return faculties.filter(faculty =>
      faculty.name.toLowerCase().includes(facultySearchTerm.toLowerCase()) ||
      faculty.userId.toLowerCase().includes(facultySearchTerm.toLowerCase()) ||
      faculty.department.toLowerCase().includes(facultySearchTerm.toLowerCase())
    );
  };

  // Get selected faculty details
  const getSelectedFacultyDetails = () => {
    if (!selectedFaculty) return null;
    return getAllFaculties().find(faculty => faculty.id.toString() === selectedFaculty.toString());
  };

  const handleFacultySelect = (facultyId) => {
    setSelectedFaculty(facultyId);
    setIsFacultyDropdownOpen(false);
    setFacultySearchTerm('');
  };

  const handleBatchChange = (batch, checked) => {
    setSelectedBatches(prev => ({
      ...prev,
      [batch]: checked
    }));
  };

  const handleAddFaculty = async () => {
    if (!selectedFaculty || !selectedDepartment) {
      toast.error('Please select faculty and department');
      return;
    }

    try {
      const facultyData = {
        facultyId: parseInt(selectedFaculty),
        subjectId: parseInt(subjectId),
        department: selectedDepartment,
        ...selectedBatches,
        yearId: subject?.yearId || 1
      };

      await addSubjectFaculty(facultyData).unwrap();

      // Reset form
      setSelectedFaculty('');
      setSelectedDepartment('');
      setSelectedBatches({
        aBatch: false,
        bBatch: false,
        cBatch: false,
        dBatch: false
      });
      setIsDialogOpen(false);

      toast.success('Faculty assigned successfully!');
    } catch (error) {
      console.error('Error adding faculty:', error);
      toast.error('Error adding faculty. Please try again.');
    }
  };

  const handleRemoveFaculty = async (assignmentId) => {
    if (!confirm('Are you sure you want to remove this faculty from the subject?')) {
      return;
    }

    try {
      await removeSubjectFaculty(assignmentId).unwrap();
      toast.success('Faculty removed successfully!');
    } catch (error) {
      console.error('Error removing faculty:', error);
      toast.error('Error removing faculty. Please try again.');
    }
  };

  const handleEditFaculty = (assignment) => {
    setEditingFaculty(assignment);
    setSelectedFaculty(assignment.facultyId.toString());
    setSelectedDepartment(assignment.department);
    setSelectedBatches({
      aBatch: assignment.aBatch || false,
      bBatch: assignment.bBatch || false,
      cBatch: assignment.cBatch || false,
      dBatch: assignment.dBatch || false
    });
    setIsDialogOpen(true);
  };

  const handleUpdateFaculty = async () => {
    if (!selectedFaculty || !selectedDepartment) {
      toast.error('Please select faculty and department');
      return;
    }

    try {
      const updateData = {
        facultyAssignmentId: editingFaculty.id,
        facultyId: parseInt(selectedFaculty),
        department: selectedDepartment,
        ...selectedBatches
      };

      await updateSubjectFaculty(updateData).unwrap();

      // Reset form
      setSelectedFaculty('');
      setSelectedDepartment('');
      setSelectedBatches({
        aBatch: false,
        bBatch: false,
        cBatch: false,
        dBatch: false
      });
      setEditingFaculty(null);
      setIsDialogOpen(false);

      toast.success('Faculty updated successfully!');
    } catch (error) {
      console.error('Error updating faculty:', error);
      toast.error('Error updating faculty. Please try again.');
    }
  };

  const resetForm = () => {
    setSelectedFaculty('');
    setSelectedDepartment('');
    setSelectedBatches({
      aBatch: false,
      bBatch: false,
      cBatch: false,
      dBatch: false
    });
    setEditingFaculty(null);
    setFacultySearchTerm('');
    setIsFacultyDropdownOpen(false);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
    resetForm();
  };

  const assignedFaculties = assignedFacultyData?.data || [];

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
            onClick={() => navigate(`/manage-subject/${subjectId}`, { state: location.state })}
            className="hover:text-blue-600 transition-colors"
          >
            Manage Subject
          </button>
          <ChevronRight className="h-4 w-4" />
          <span className="text-gray-900 font-medium">Manage Faculty</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <Users className="h-8 w-8 text-purple-600" />
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Manage Faculty</h1>
                <p className="text-gray-600">
                  Assign faculty for <span className="font-semibold text-purple-600">{subject.name}</span>
                  {' '}({subject.code}) - Semester {subject.semester}
                </p>
              </div>
            </div>

            {/* Add Faculty Button */}
            <button
              onClick={() => setIsDialogOpen(true)}
              className="inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors shadow-sm"
            >
              <Plus className="w-5 h-5 mr-2" />
              Add Faculty
            </button>
          </div>
        </div>

        {/* Faculty Table */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Assigned Faculty</h2>
            <span className="text-sm text-gray-500">
              {assignedFaculties.length} faculty assigned
            </span>
          </div>

          {assignedLoading ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600 mx-auto"></div>
              <p className="mt-2 text-gray-600">Loading assigned faculty...</p>
            </div>
          ) : assignedFaculties.length === 0 ? (
            <div className="text-center py-8">
              <Users className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">No faculty assigned yet</p>
              <p className="text-sm text-gray-400">Click "Add Faculty" button to assign faculty</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Faculty Details
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Original Dept.
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Assigned Dept.
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Role
                    </th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Batch A
                    </th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Batch B
                    </th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Batch C
                    </th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Batch D
                    </th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {assignedFaculties.map((assignment) => (
                    <tr key={assignment.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <User className="w-4 h-4 text-gray-400 mr-2" />
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {assignment.faculty?.name || 'Unknown Faculty'}
                            </div>
                            <div className="text-sm text-gray-500">
                              {assignment.faculty?.userId || 'N/A'}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                          {assignment.faculty?.department || 'N/A'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {assignment.department}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${assignment.role === 'SubjectCoordinator'
                            ? 'bg-purple-100 text-purple-800'
                            : 'bg-green-100 text-green-800'
                          }`}>
                          {assignment.role}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        {assignment.aBatch ? (
                          <span className="inline-flex items-center justify-center w-6 h-6 bg-green-100 text-green-800 rounded-full text-xs font-semibold">
                            ✓
                          </span>
                        ) : (
                          <span className="inline-flex items-center justify-center w-6 h-6 bg-gray-100 text-gray-400 rounded-full text-xs">
                            ✗
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        {assignment.bBatch ? (
                          <span className="inline-flex items-center justify-center w-6 h-6 bg-green-100 text-green-800 rounded-full text-xs font-semibold">
                            ✓
                          </span>
                        ) : (
                          <span className="inline-flex items-center justify-center w-6 h-6 bg-gray-100 text-gray-400 rounded-full text-xs">
                            ✗
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        {assignment.cBatch ? (
                          <span className="inline-flex items-center justify-center w-6 h-6 bg-green-100 text-green-800 rounded-full text-xs font-semibold">
                            ✓
                          </span>
                        ) : (
                          <span className="inline-flex items-center justify-center w-6 h-6 bg-gray-100 text-gray-400 rounded-full text-xs">
                            ✗
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        {assignment.dBatch ? (
                          <span className="inline-flex items-center justify-center w-6 h-6 bg-green-100 text-green-800 rounded-full text-xs font-semibold">
                            ✓
                          </span>
                        ) : (
                          <span className="inline-flex items-center justify-center w-6 h-6 bg-gray-100 text-gray-400 rounded-full text-xs">
                            ✗
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <button
                            onClick={() => handleEditFaculty(assignment)}
                            className="inline-flex items-center px-3 py-1 border border-transparent text-xs font-medium rounded text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            title="Edit Faculty"
                          >
                            <Edit className="w-3 h-3 mr-1" />
                            Edit
                          </button>
                          <button
                            onClick={() => handleRemoveFaculty(assignment.id)}
                            disabled={isRemoving}
                            className="inline-flex items-center px-3 py-1 border border-transparent text-xs font-medium rounded text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50"
                            title="Remove Faculty"
                          >
                            <Trash2 className="w-3 h-3 mr-1" />
                            Remove
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
      </div>

      {/* Add Faculty Dialog */}
      {isDialogOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <Plus className="w-6 h-6 text-green-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">
                  {editingFaculty ? 'Edit Faculty' : 'Add Faculty'}
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
              {/* Faculty Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <User className="w-4 h-4 inline mr-1" />
                  Faculty
                </label>

                {/* Custom Searchable Dropdown */}
                <div className="relative faculty-dropdown">
                  {/* Display Selected Faculty or Search Input */}
                  <div
                    onClick={() => setIsFacultyDropdownOpen(!isFacultyDropdownOpen)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent cursor-pointer bg-white flex items-center justify-between"
                  >
                    <div className="flex-1">
                      {selectedFaculty ? (
                        <span className="text-gray-900">
                          {getSelectedFacultyDetails()?.name} ({getSelectedFacultyDetails()?.userId}) - {getSelectedFacultyDetails()?.department}
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
                            className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                            onClick={(e) => e.stopPropagation()}
                          />
                        </div>
                      </div>

                      {/* Faculty List */}
                      <div className="max-h-48 overflow-y-auto">
                        {getFilteredFaculties().length > 0 ? (
                          getFilteredFaculties().map((faculty) => (
                            <div
                              key={faculty.id}
                              onClick={() => handleFacultySelect(faculty.id)}
                              className={`px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm ${selectedFaculty === faculty.id.toString() ? 'bg-purple-50 text-purple-700' : 'text-gray-900'
                                }`}
                            >
                              <div className="font-medium">{faculty.name} ({faculty.userId})</div>
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
                  Any faculty can be assigned regardless of their original department
                </p>
              </div>

              {/* Department Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Building className="w-4 h-4 inline mr-1" />
                  Assignment Department
                </label>
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="">Select Department</option>
                  {getAvailableDepartments().map((dept) => (
                    <option key={dept.value} value={dept.value}>
                      {dept.label}
                    </option>
                  ))}
                </select>

              </div>


              {/* Batch Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  <BookOpen className="w-4 h-4 inline mr-1" />
                  Assigned Batches
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {['A', 'B', 'C', 'D'].map((batch) => {
                    const batchKey = `${batch.toLowerCase()}Batch`;
                    return (
                      <label key={batch} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedBatches[batchKey]}
                          onChange={(e) => handleBatchChange(batchKey, e.target.checked)}
                          className="mr-2 h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                        />
                        <span className="text-sm text-gray-700">Batch {batch}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Dialog Buttons */}
              <div className="flex justify-end space-x-3 mt-6">
                <button
                  onClick={handleDialogClose}
                  className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                >
                  Cancel
                </button>
                <button
                  onClick={editingFaculty ? handleUpdateFaculty : handleAddFaculty}
                  disabled={(editingFaculty ? isUpdating : isAdding) || !selectedFaculty || !selectedDepartment}
                  className="flex items-center px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-md transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                  {(editingFaculty ? isUpdating : isAdding) ? (
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                  ) : (
                    <Plus className="w-4 h-4 mr-2" />
                  )}
                  {editingFaculty ? 'Update Faculty' : 'Add Faculty'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    //  </div>
  );
};

export default ManageFaculty;