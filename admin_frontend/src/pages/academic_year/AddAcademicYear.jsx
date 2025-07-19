import React, { useState } from 'react';
import { Calendar, Plus, BookOpen, Clock, AlertCircle } from 'lucide-react';
import { useAddYearMutation } from '../../store/api/yearApi';
import { toast } from 'sonner';

const AddAcademicYear = () => {
  const [formData, setFormData] = useState({
    year: '',
    startDate: '',
    endDate: '',
    semester: 'odd'
  });
  const [formErrors, setFormErrors] = useState({});
  
  const [addYear, { isLoading: isSubmitting }] = useAddYearMutation();

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

  const validateForm = () => {
    const errors = {};
    const currentYear = new Date().getFullYear();

    // Year validation
    if (!formData.year.trim()) {
      errors.year = 'Academic year is required';
    } else {
      // Check format like 2025-2026
      const yearPattern = /^(\d{4})-(\d{4})$/;
      const match = formData.year.match(yearPattern);
      
      if (!match) {
        errors.year = 'Invalid format. Use YYYY-YYYY (e.g., 2025-2026)';
      } else {
        const startYear = parseInt(match[1]);
        const endYear = parseInt(match[2]);
        
        if (endYear !== startYear + 1) {
          errors.year = 'End year must be one year after start year';
        }
        
        if (startYear < currentYear - 1 || startYear > currentYear + 5) {
          errors.year = 'Year must be within reasonable range';
        }
      }
    }

    // Start date validation
    if (!formData.startDate) {
      errors.startDate = 'Start date is required';
    }

    // End date validation
    if (!formData.endDate) {
      errors.endDate = 'End date is required';
    } else if (formData.startDate && new Date(formData.endDate) <= new Date(formData.startDate)) {
      errors.endDate = 'End date must be after start date';
    }

    // Semester validation
    if (!formData.semester) {
      errors.semester = 'Semester is required';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      // Format the year data according to your API requirements
      // Ensure dates are in yyyy-mm-dd format for backend
      const formatDate = (dateString) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toISOString().split('T')[0]; // Returns yyyy-mm-dd format
      };

      const yearData = {
        year: `${formData.year}/${formData.semester}`,
        startDate: formatDate(formData.startDate),
        endDate: formatDate(formData.endDate)
      };

      console.log('Sending year data:', yearData); // For debugging

      await addYear(yearData).unwrap();
      
      toast.success('Academic year added successfully!');
      
      // Reset form
      setFormData({
        year: '',
        startDate: '',
        endDate: '',
        semester: 'odd'
      });
      setFormErrors({});
      
    } catch (error) {
      console.error('Failed to add academic year:', error);
      toast.error(error.data?.message || 'Failed to add academic year. Please try again.');
    }
  };

  const generateYearSuggestions = () => {
    const currentYear = new Date().getFullYear();
    const suggestions = [];
    for (let i = -1; i <= 2; i++) {
      const startYear = currentYear + i;
      const endYear = startYear + 1;
      suggestions.push(`${startYear}-${endYear}`);
    }
    return suggestions;
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Academic Year Management</h1>
          </div>
          <p className="text-gray-600">Add and manage academic years for the examination portal</p>
        </div>

        {/* Main Form Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-gray-50 px-8 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center space-x-2">
              <Plus className="h-5 w-5" />
              <span>Add New Academic Year</span>
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Left Column */}
              <div className="space-y-6">
                {/* Academic Year Input */}
                <div>
                  <label htmlFor="year" className="block text-sm font-semibold text-gray-700 mb-3">
                    Academic Year
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Calendar className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="year"
                      name="year"
                      type="text"
                      value={formData.year}
                      onChange={handleInputChange}
                      className={`w-full pl-12 pr-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all ${formErrors.year ? 'border-red-300' : 'border-gray-200'}`}
                      placeholder="e.g., 2025-2026"
                    />
                  </div>
                  {formErrors.year && (
                    <p className="text-red-500 text-sm mt-2 flex items-center space-x-1">
                      <AlertCircle className="h-4 w-4" />
                      <span>{formErrors.year}</span>
                    </p>
                  )}
                  
                  {/* Year Suggestions */}
                  <div className="mt-3">
                    <p className="text-xs text-gray-500 mb-2">Quick suggestions:</p>
                    <div className="flex flex-wrap gap-2">
                      {generateYearSuggestions().map((suggestion) => (
                        <button
                          key={suggestion}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, year: suggestion }))}
                          className="px-3 py-1 text-xs bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100 transition-colors"
                        >
                          {suggestion}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Semester Selection */}
                <div>
                  <label htmlFor="semester" className="block text-sm font-semibold text-gray-700 mb-3">
                    Semester
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Clock className="h-5 w-5 text-gray-400" />
                    </div>
                    <select
                      id="semester"
                      name="semester"
                      value={formData.semester}
                      onChange={handleInputChange}
                      className={`w-full pl-12 pr-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all ${formErrors.semester ? 'border-red-300' : 'border-gray-200'}`}
                    >
                      <option value="odd">Odd Semester</option>
                      <option value="even">Even Semester</option>
                    </select>
                  </div>
                  {formErrors.semester && (
                    <p className="text-red-500 text-sm mt-2 flex items-center space-x-1">
                      <AlertCircle className="h-4 w-4" />
                      <span>{formErrors.semester}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Start Date */}
                <div>
                  <label htmlFor="startDate" className="block text-sm font-semibold text-gray-700 mb-3">
                    Start Date
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Calendar className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="startDate"
                      name="startDate"
                      type="date"
                      value={formData.startDate}
                      onChange={handleInputChange}
                      className={`w-full pl-12 pr-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all ${formErrors.startDate ? 'border-red-300' : 'border-gray-200'}`}
                    />
                  </div>
                  {formErrors.startDate && (
                    <p className="text-red-500 text-sm mt-2 flex items-center space-x-1">
                      <AlertCircle className="h-4 w-4" />
                      <span>{formErrors.startDate}</span>
                    </p>
                  )}
                </div>

                {/* End Date */}
                <div>
                  <label htmlFor="endDate" className="block text-sm font-semibold text-gray-700 mb-3">
                    End Date
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Calendar className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="endDate"
                      name="endDate"
                      type="date"
                      value={formData.endDate}
                      onChange={handleInputChange}
                      className={`w-full pl-12 pr-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all ${formErrors.endDate ? 'border-red-300' : 'border-gray-200'}`}
                    />
                  </div>
                  {formErrors.endDate && (
                    <p className="text-red-500 text-sm mt-2 flex items-center space-x-1">
                      <AlertCircle className="h-4 w-4" />
                      <span>{formErrors.endDate}</span>
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Form Preview */}
            {formData.year && formData.semester && (
              <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h3 className="text-sm font-semibold text-blue-900 mb-2">Preview:</h3>
                <p className="text-blue-800">
                  Academic Year: <span className="font-bold">{formData.year}/{formData.semester}</span>
                </p>
                {formData.startDate && formData.endDate && (
                  <p className="text-blue-800 text-sm mt-1">
                    Duration: {new Date(formData.startDate).toLocaleDateString()} - {new Date(formData.endDate).toLocaleDateString()}
                  </p>
                )}
              </div>
            )}

            {/* Submit Button */}
            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-lg transition duration-200 flex items-center space-x-2 font-semibold"
              >
                {isSubmitting ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                ) : (
                  <Plus className="h-5 w-5" />
                )}
                <span>{isSubmitting ? 'Adding...' : 'Add Academic Year'}</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddAcademicYear;
