import React, { useState } from 'react';
import { Search, Plus, X, User, Mail, Lock, Building, Users, Eye, EyeOff, Edit, Trash2 } from 'lucide-react';
import { useCreateFacultyMutation, useGetFacultiesQuery, useUpdateFacultyMutation, useDeleteFacultyMutation } from '../../store/api/authApi';
import { toast } from 'sonner';

const AddFaculties = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isUpdateDialogOpen, setIsUpdateDialogOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [selectedFaculty, setSelectedFaculty] = useState(null);
  const [formData, setFormData] = useState({
    userId: '',
    name: '',
    email: '',
    password: '',
    department: '',
    role: ''
  });
  const [updateFormData, setUpdateFormData] = useState({
    userId: '',
    name: '',
    email: '',
    password: '',
    department: '',
    role: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [updateFormErrors, setUpdateFormErrors] = useState({});

  const [createFaculty, { isLoading: isCreating }] = useCreateFacultyMutation();
  const [updateFaculty, { isLoading: isUpdating }] = useUpdateFacultyMutation();
  const [deleteFaculty, { isLoading: isDeleting }] = useDeleteFacultyMutation();
  const { data: facultiesData, isLoading: isLoadingFaculties, error, refetch } = useGetFacultiesQuery();

  const faculties = facultiesData?.data || [];

  // Filter faculties based on search term
  const filteredFaculties = faculties.filter(faculty =>
    faculty.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faculty.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faculty.userId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faculty.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleUpdateInputChange = (e) => {
    const { name, value } = e.target;
    setUpdateFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field
    if (updateFormErrors[name]) {
      setUpdateFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.userId.trim()) errors.userId = 'User ID is required';
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) errors.email = 'Email is required';
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email is invalid';
    if (!formData.password.trim()) errors.password = 'Password is required';
    if (formData.password.length < 6) errors.password = 'Password must be at least 6 characters';
    if (!formData.department.trim()) errors.department = 'Department is required';
    if (!formData.role.trim()) errors.role = 'Role is required';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const validateUpdateForm = () => {
    const errors = {};

    if (!updateFormData.userId.trim()) errors.userId = 'User ID is required';
    if (!updateFormData.name.trim()) errors.name = 'Name is required';
    if (!updateFormData.email.trim()) errors.email = 'Email is required';
    if (updateFormData.email && !/\S+@\S+\.\S+/.test(updateFormData.email)) errors.email = 'Email is invalid';
    if (!updateFormData.password.trim()) errors.password = 'Password is required';
    if (updateFormData.password.length < 6) errors.password = 'Password must be at least 6 characters';
    if (!updateFormData.department.trim()) errors.department = 'Department is required';
    if (!updateFormData.role.trim()) errors.role = 'Role is required';

    setUpdateFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      await createFaculty(formData).unwrap();
      toast.success('Faculty created successfully!');
      // Reset form
      setFormData({
        userId: '',
        name: '',
        email: '',
        password: '',
        department: '',
        role: ''
      });
      setIsDialogOpen(false);
      // Refetch faculties to update the table
      refetch();
    } catch (error) {
      console.error('Failed to create faculty:', error);
      toast.error('Failed to create faculty. Please try again.');
    }
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();

    if (!validateUpdateForm()) return;

    try {
      await updateFaculty(updateFormData).unwrap();
      toast.success('Faculty updated successfully!');
      setIsUpdateDialogOpen(false);
      setSelectedFaculty(null);
      // Refetch faculties to update the table
      refetch();
    } catch (error) {
      console.error('Failed to update faculty:', error);
      toast.error('Failed to update faculty. Please try again.');
    }
  };

  const handleEdit = (faculty) => {
    setSelectedFaculty(faculty);
    setUpdateFormData({
      userId: faculty.userId,
      name: faculty.name,
      email: faculty.email,
      password: '', // Don't populate password for security
      department: faculty.department,
      role: faculty.role
    });
    setUpdateFormErrors({});
    setIsUpdateDialogOpen(true);
  };

  const handleDelete = async (userId) => {
    if (window.confirm('Are you sure you want to delete this faculty member?')) {
      try {
        await deleteFaculty(userId).unwrap();
        toast.success('Faculty deleted successfully!');
        refetch();
      } catch (error) {
        console.error('Failed to delete faculty:', error);
        toast.error('Failed to delete faculty. Please try again.');
      }
    }
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setFormData({
      userId: '',
      name: '',
      email: '',
      password: '',
      department: '',
      role: ''
    });
    setFormErrors({});
    setShowPassword(false);
  };

  const closeUpdateDialog = () => {
    setIsUpdateDialogOpen(false);
    setSelectedFaculty(null);
    setUpdateFormData({
      userId: '',
      name: '',
      email: '',
      password: '',
      department: '',
      role: ''
    });
    setUpdateFormErrors({});
    setShowPassword(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 lg:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Faculty Management</h1>
            <p className="text-gray-600 mt-1">Manage faculty members and their information</p>
          </div>

          {/* Add Faculty Button */}
          <button
            onClick={() => setIsDialogOpen(true)}
            className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition duration-200 shadow-md"
          >
            <Plus className="h-5 w-5" />
            <span>Add Faculty</span>
          </button>
        </div>

        {/* Search Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-center space-x-4">
            <div className="relative flex-1 max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search faculties by name, email, ID, or department..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="px-6 py-4 ml-16">
              <h2 className="text-lg font-semibold text-gray-900">Faculty List</h2>
              <p className="text-sm text-gray-600">Total: {filteredFaculties.length} faculties</p>
            </div>
          </div>
        </div>

        {/* Faculty Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            {isLoadingFaculties ? (
              <div className="flex justify-center items-center py-12">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              </div>
            ) : error ? (
              <div className="text-center py-12">
                <p className="text-red-600">Error loading faculties. Please try again.</p>
              </div>
            ) : filteredFaculties.length === 0 ? (
              <div className="text-center py-12">
                <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">No faculties found</p>
              </div>
            ) : (
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-center text-sm font-medium text-gray-500 uppercase tracking-wider">
                      User ID
                    </th>
                    <th className="px-6 py-3 text-center text-sm font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-center text-sm font-medium text-gray-500 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-3 text-center text-sm font-medium text-gray-500 uppercase tracking-wider">
                      Department
                    </th>
                    <th className="px-6 py-3 text-center text-sm font-medium text-gray-500 uppercase tracking-wider">
                      Role
                    </th>
                    <th className="px-6 py-3 text-center text-sm font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredFaculties.map((faculty, index) => (
                    <tr key={faculty.userId || index} className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-blue-50 transition-colors duration-150`}>
                      <td className="px-6 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                        {faculty.userId}
                      </td>
                      <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-900">
                        {faculty.name}
                      </td>
                      <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-500">
                        {faculty.email}
                      </td>
                      <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-500">
                        {faculty.department}
                      </td>
                      <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-500">
                        {faculty.role}
                      </td>
                      <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex items-center justify-center space-x-2">
                          <button
                            onClick={() => handleEdit(faculty)}
                            className="p-2 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-lg transition-colors"
                            title="Edit Faculty"
                          >
                            <Edit className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(faculty.userId)}
                            disabled={isDeleting}
                            className="p-2 text-red-600 hover:text-red-800 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50"
                            title="Delete Faculty"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>

      {/* Add Faculty Dialog */}
      {isDialogOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop with blur */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={closeDialog}
          ></div>
          
          {/* Dialog Content */}
          <div className="relative bg-white rounded-lg shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto z-10">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">Add New Faculty</h2>
              <button
                onClick={closeDialog}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            {/* Form Content */}
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {/* Two Column Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Left Column */}
              <div className="space-y-4">
                {/* User ID */}
                <div>
                  <label htmlFor="userId" className="block text-sm font-medium text-gray-700 mb-2">
                    User ID
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="userId"
                      name="userId"
                      type="text"
                      value={formData.userId}
                      onChange={handleInputChange}
                      className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${formErrors.userId ? 'border-red-300' : 'border-gray-300'}`}
                      placeholder="Enter user ID"
                    />
                  </div>
                  {formErrors.userId && <p className="text-red-500 text-xs mt-1">{formErrors.userId}</p>}
                </div>

                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${formErrors.name ? 'border-red-300' : 'border-gray-300'}`}
                      placeholder="Enter full name"
                    />
                  </div>
                  {formErrors.name && <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${formErrors.email ? 'border-red-300' : 'border-gray-300'}`}
                      placeholder="Enter email address"
                    />
                  </div>
                  {formErrors.email && <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>}
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                {/* Password */}
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      value={formData.password}
                      onChange={handleInputChange}
                      className={`w-full pl-10 pr-12 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${formErrors.password ? 'border-red-300' : 'border-gray-300'}`}
                      placeholder="Enter password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                  {formErrors.password && <p className="text-red-500 text-xs mt-1">{formErrors.password}</p>}
                </div>

                {/* Department */}
                <div>
                  <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-2">
                    Department
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Building className="h-5 w-5 text-gray-400" />
                    </div>
                    <select
                      id="department"
                      name="department"
                      value={formData.department}
                      onChange={handleInputChange}
                      className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${formErrors.department ? 'border-red-300' : 'border-gray-300'}`}
                    >
                      <option value="">Select Department</option>
                      <option value="DCS">DCS</option>
                      <option value="DIT">DIT</option>
                      <option value="DCE">DCE</option>
                    </select>
                  </div>
                  {formErrors.department && <p className="text-red-500 text-xs mt-1">{formErrors.department}</p>}
                </div>

                {/* Role */}
                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                    Role
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Users className="h-5 w-5 text-gray-400" />
                    </div>
                    <select
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${formErrors.role ? 'border-red-300' : 'border-gray-300'}`}
                    >
                      <option value="">Select role</option>
                      <option value="HOD">HOD</option>
                      <option value="Faculty">Faculty</option>
                      <option value="Admin">Admin</option>
                    </select>
                  </div>
                  {formErrors.role && <p className="text-red-500 text-xs mt-1">{formErrors.role}</p>}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-end space-x-3 p-6 border-t border-gray-200 bg-gray-50">
              <button
                type="button"
                onClick={closeDialog}
                className="px-4 py-2 text-gray-700 bg-white hover:bg-gray-50 border border-gray-300 rounded-lg transition duration-200"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isCreating}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-lg transition duration-200 flex items-center space-x-2"
              >
                {isCreating ? (
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                ) : (
                  <Plus className="h-4 w-4" />
                )}
                <span>{isCreating ? 'Adding...' : 'Add Faculty'}</span>
              </button>
            </div>
          </form>
          </div>
        </div>
      )}

      {/* Update Faculty Dialog */}
      {isUpdateDialogOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop with blur */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={closeUpdateDialog}
          ></div>
          
          {/* Dialog Content */}
          <div className="relative bg-white rounded-lg shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto z-10">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">Update Faculty</h2>
              <button
                onClick={closeUpdateDialog}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            {/* Form Content */}
            <form onSubmit={handleUpdateSubmit} className="p-6 space-y-6">
            {/* Two Column Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Left Column */}
              <div className="space-y-4">
                {/* User ID - Read Only */}
                <div>
                  <label htmlFor="updateUserId" className="block text-sm font-medium text-gray-700 mb-2">
                    User ID
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="updateUserId"
                      name="userId"
                      type="text"
                      value={updateFormData.userId}
                      readOnly
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg bg-gray-50 cursor-not-allowed"
                      placeholder="User ID (Read Only)"
                    />
                  </div>
                </div>

                {/* Name */}
                <div>
                  <label htmlFor="updateName" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="updateName"
                      name="name"
                      type="text"
                      value={updateFormData.name}
                      onChange={handleUpdateInputChange}
                      className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${updateFormErrors.name ? 'border-red-300' : 'border-gray-300'}`}
                      placeholder="Enter full name"
                    />
                  </div>
                  {updateFormErrors.name && <p className="text-red-500 text-xs mt-1">{updateFormErrors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="updateEmail" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="updateEmail"
                      name="email"
                      type="email"
                      value={updateFormData.email}
                      onChange={handleUpdateInputChange}
                      className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${updateFormErrors.email ? 'border-red-300' : 'border-gray-300'}`}
                      placeholder="Enter email address"
                    />
                  </div>
                  {updateFormErrors.email && <p className="text-red-500 text-xs mt-1">{updateFormErrors.email}</p>}
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                {/* Password */}
                <div>
                  <label htmlFor="updatePassword" className="block text-sm font-medium text-gray-700 mb-2">
                    New Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="updatePassword"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      value={updateFormData.password}
                      onChange={handleUpdateInputChange}
                      className={`w-full pl-10 pr-12 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${updateFormErrors.password ? 'border-red-300' : 'border-gray-300'}`}
                      placeholder="Enter new password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                  {updateFormErrors.password && <p className="text-red-500 text-xs mt-1">{updateFormErrors.password}</p>}
                </div>

                {/* Department */}
                <div>
                  <label htmlFor="updateDepartment" className="block text-sm font-medium text-gray-700 mb-2">
                    Department
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Building className="h-5 w-5 text-gray-400" />
                    </div>
                    <select
                      id="updateDepartment"
                      name="department"
                      value={updateFormData.department}
                      onChange={handleUpdateInputChange}
                      className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${updateFormErrors.department ? 'border-red-300' : 'border-gray-300'}`}
                    >
                      <option value="">Select Department</option>
                      <option value="DCS">DCS</option>
                      <option value="DIT">DIT</option>
                      <option value="DCE">DCE</option>
                    </select>
                  </div>
                  {updateFormErrors.department && <p className="text-red-500 text-xs mt-1">{updateFormErrors.department}</p>}
                </div>

                {/* Role */}
                <div>
                  <label htmlFor="updateRole" className="block text-sm font-medium text-gray-700 mb-2">
                    Role
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Users className="h-5 w-5 text-gray-400" />
                    </div>
                    <select
                      id="updateRole"
                      name="role"
                      value={updateFormData.role}
                      onChange={handleUpdateInputChange}
                      className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${updateFormErrors.role ? 'border-red-300' : 'border-gray-300'}`}
                    >
                      <option value="">Select role</option>
                      <option value="HOD">HOD</option>
                      <option value="Faculty">Faculty</option>
                      <option value="Admin">Admin</option>
                    </select>
                  </div>
                  {updateFormErrors.role && <p className="text-red-500 text-xs mt-1">{updateFormErrors.role}</p>}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-end space-x-3 p-6 border-t border-gray-200 bg-gray-50">
              <button
                type="button"
                onClick={closeUpdateDialog}
                className="px-4 py-2 text-gray-700 bg-white hover:bg-gray-50 border border-gray-300 rounded-lg transition duration-200"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isUpdating}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-lg transition duration-200 flex items-center space-x-2"
              >
                {isUpdating ? (
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                ) : (
                  <Edit className="h-4 w-4" />
                )}
                <span>{isUpdating ? 'Updating...' : 'Update Faculty'}</span>
              </button>
            </div>
          </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddFaculties;
