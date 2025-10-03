import React, { useState, useEffect } from 'react';
import { Search, Plus, X, User, Mail, Building, BookOpen, Users, GraduationCap, Edit, Clock, Award, Eye, BarChart3 } from 'lucide-react';
import { useAddSubjectMutation, useGetSubjectByYearAndSemQuery, useUpdateSubjectMutation } from '@/store/api/subjectApi';
import { useGetFacultiesQuery } from '@/store/api/authApi';
import { toast } from 'sonner';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const AddSubject = () => {
   const navigate = useNavigate();
   const { user, selectedYearObject, selectedSemester } = useSelector((state) => state.auth);
   const [isDialogOpen, setIsDialogOpen] = useState(false);
   const [isUpdateDialogOpen, setIsUpdateDialogOpen] = useState(false);
   const [searchTerm, setSearchTerm] = useState('');
   const [selectedSubject, setSelectedSubject] = useState(null);
   
   const [formData, setFormData] = useState({
      code: '',
      name: '',
      semester: selectedSemester || '',
      coordinatorId: '',
      departments: {
         DCS: false,
         DCE: false,
         DIT: false
      },
      type: '',
      theory_hour: '',
      practical_hour: '',
      theory_credite: '',
      practical_credite: '',
      theory_int_marks: '',
      practical_int_marks: '',
      theory_ext_marks: '',
      practical_ext_marks: '',
      yearId: selectedYearObject?.id || ''
   });
   
   const [updateFormData, setUpdateFormData] = useState({
      code: '',
      name: '',
      coordinatorId: '',
      departments: {
         DCS: false,
         DCE: false,
         DIT: false
      },
      type: '',
      theory_hour: '',
      practical_hour: '',
      theory_credite: '',
      practical_credite: '',
      theory_int_marks: '',
      practical_int_marks: '',
      theory_ext_marks: '',
      practical_ext_marks: ''
   });
   
   const [formErrors, setFormErrors] = useState({});
   const [updateFormErrors, setUpdateFormErrors] = useState({});
   const [coordinatorSearch, setCoordinatorSearch] = useState('');
   const [updateCoordinatorSearch, setUpdateCoordinatorSearch] = useState('');
   const [isCoordinatorDropdownOpen, setIsCoordinatorDropdownOpen] = useState(false);
   const [isUpdateCoordinatorDropdownOpen, setIsUpdateCoordinatorDropdownOpen] = useState(false);

   const [addSubject, { isLoading: isCreating }] = useAddSubjectMutation();
   const [updateSubject, { isLoading: isUpdating }] = useUpdateSubjectMutation();
   const { data: subjectsData, isLoading: isLoadingSubjects, error, refetch } = useGetSubjectByYearAndSemQuery(
      { yearId: selectedYearObject?.id, semester: selectedSemester },
      { skip: !selectedYearObject?.id || !selectedSemester }
   );
   const { data: facultiesData } = useGetFacultiesQuery();

   // Update form data when year/semester changes
   useEffect(() => {
      setFormData(prev => ({
         ...prev,
         semester: selectedSemester || '',
         yearId: selectedYearObject?.id || ''
      }));
   }, [selectedSemester, selectedYearObject]);

   let subjects = subjectsData?.data || [];

   // Show all faculties for admin
   let faculties = facultiesData?.data || [];

   // Filter faculties based on search term for add form
   const filteredFaculties = faculties.filter(faculty =>
      faculty.name.toLowerCase().includes(coordinatorSearch.toLowerCase()) ||
      faculty.userId.toLowerCase().includes(coordinatorSearch.toLowerCase()) ||
      faculty.department.toLowerCase().includes(coordinatorSearch.toLowerCase())
   );

   // Filter faculties based on search term for update form
   const filteredUpdateFaculties = faculties.filter(faculty =>
      faculty.name.toLowerCase().includes(updateCoordinatorSearch.toLowerCase()) ||
      faculty.userId.toLowerCase().includes(updateCoordinatorSearch.toLowerCase()) ||
      faculty.department.toLowerCase().includes(updateCoordinatorSearch.toLowerCase())
   );

   // Get selected coordinator for display
   const selectedCoordinator = faculties.find(faculty => faculty.id === formData.coordinatorId);
   const selectedUpdateCoordinator = faculties.find(faculty => faculty.id === updateFormData.coordinatorId);

   // Handle coordinator selection
   const handleCoordinatorSelect = (facultyId) => {
      setFormData(prev => ({ ...prev, coordinatorId: facultyId }));
      setIsCoordinatorDropdownOpen(false);
      setCoordinatorSearch('');
      if (formErrors.coordinatorId) {
         setFormErrors(prev => ({ ...prev, coordinatorId: '' }));
      }
   };

   const handleUpdateCoordinatorSelect = (facultyId) => {
      setUpdateFormData(prev => ({ ...prev, coordinatorId: facultyId }));
      setIsUpdateCoordinatorDropdownOpen(false);
      setUpdateCoordinatorSearch('');
      if (updateFormErrors.coordinatorId) {
         setUpdateFormErrors(prev => ({ ...prev, coordinatorId: '' }));
      }
   };

   // Filter subjects based on search term
   const filteredSubjects = subjects.filter(subject =>
      subject.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      subject.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      subject.subjectCoordinator?.name.toLowerCase().includes(searchTerm.toLowerCase())
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

   const handleDepartmentChange = (e) => {
      const { name, checked } = e.target;
      setFormData(prev => ({
         ...prev,
         departments: {
            ...prev.departments,
            [name]: checked
         }
      }));
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

   const handleUpdateDepartmentChange = (e) => {
      const { name, checked } = e.target;
      setUpdateFormData(prev => ({
         ...prev,
         departments: {
            ...prev.departments,
            [name]: checked
         }
      }));
   };

   const validateForm = () => {
      const errors = {};

      if (!formData.code.trim()) errors.code = 'Subject code is required';
      if (!formData.name.trim()) errors.name = 'Subject name is required';
      if (!formData.coordinatorId) errors.coordinatorId = 'Coordinator is required';
      if (!formData.type) errors.type = 'Subject type is required';
      
      // Check if at least one department is selected
      const hasSelectedDepartment = Object.values(formData.departments).some(selected => selected);
      if (!hasSelectedDepartment) errors.departments = 'Please select at least one department';

      setFormErrors(errors);
      return Object.keys(errors).length === 0;
   };

   const validateUpdateForm = () => {
      const errors = {};

      if (!updateFormData.code.trim()) errors.code = 'Subject code is required';
      if (!updateFormData.name.trim()) errors.name = 'Subject name is required';
      if (!updateFormData.coordinatorId) errors.coordinatorId = 'Coordinator is required';
      if (!updateFormData.type) errors.type = 'Subject type is required';
      
      // Check if at least one department is selected
      const hasSelectedDepartment = Object.values(updateFormData.departments).some(selected => selected);
      if (!hasSelectedDepartment) errors.departments = 'Please select at least one department';

      setUpdateFormErrors(errors);
      return Object.keys(errors).length === 0;
   };

   const formatFormDataForAPI = (data) => {
      // Convert departments object to array format expected by API
      const selectedDepartments = Object.keys(data.departments).filter(dept => data.departments[dept]);
      
      return {
         ...data,
         departments: selectedDepartments
      };
   };

   const handleSubmit = async (e) => {
      e.preventDefault();

      if (!validateForm()) return;

      try {
         const apiData = formatFormDataForAPI(formData);
         await addSubject(apiData).unwrap();
         toast.success('Subject added successfully!');
         
         // Reset form
         setFormData({
            code: '',
            name: '',
            semester: selectedSemester || '',
            coordinatorId: '',
            departments: {
               DCS: false,
               DCE: false,
               DIT: false
            },
            type: '',
            theory_hour: '',
            practical_hour: '',
            theory_credite: '',
            practical_credite: '',
            theory_int_marks: '',
            practical_int_marks: '',
            theory_ext_marks: '',
            practical_ext_marks: '',
            yearId: selectedYearObject?.id || ''
         });
         setIsDialogOpen(false);
         refetch();
      } catch (error) {
         console.error('Failed to add subject:', error);
         toast.error(error?.data?.message || 'Failed to add subject. Please try again.');
      }
   };

   const handleUpdateSubmit = async (e) => {
      e.preventDefault();

      if (!validateUpdateForm()) return;

      try {
         const apiData = formatFormDataForAPI(updateFormData);
         await updateSubject(apiData).unwrap();
         toast.success('Subject updated successfully!');
         setIsUpdateDialogOpen(false);
         setSelectedSubject(null);
         refetch();
      } catch (error) {
         console.error('Failed to update subject:', error);
         toast.error(error?.data?.message || 'Failed to update subject. Please try again.');
      }
   };

   const handleViewSubject = (subject) => {
      navigate(`/subjects/${subject.id}`, { 
         state: { 
            subject: subject,
            yearId: selectedYearObject?.id,
            semester: selectedSemester 
         } 
      });
   };

   const handleEdit = (subject) => {
      setSelectedSubject(subject);
      setUpdateFormData({
         code: subject.code,
         name: subject.name,
         coordinatorId: subject.coordinatorId,
         departments: {
            DCS: subject.dep_CSE || false,
            DCE: subject.dep_CE || false,
            DIT: subject.dep_IT || false
         },
         type: subject.type,
         theory_hour: subject.theory_hour || 0,
         practical_hour: subject.practical_hour || 0,
         theory_credite: subject.theory_credite || 0,
         practical_credite: subject.practical_credite || 0,
         theory_int_marks: subject.theory_int_marks || 0,
         practical_int_marks: subject.practical_int_marks || 0,
         theory_ext_marks: subject.theory_ext_marks || 0,
         practical_ext_marks: subject.practical_ext_marks || 0
      });
      setUpdateFormErrors({});
      setUpdateCoordinatorSearch('');
      setIsUpdateDialogOpen(true);
   };

   const closeDialog = () => {
      setIsDialogOpen(false);
      setFormData({
         code: '',
         name: '',
         semester: selectedSemester || '',
         coordinatorId: '',
         departments: {
            DCS: false,
            DCE: false,
            DIT: false
         },
         type: '',
         theory_hour: '',
         practical_hour: '',
         theory_credite: '',
         practical_credite: '',
         theory_int_marks: '',
         practical_int_marks: '',
         theory_ext_marks: '',
         practical_ext_marks: '',
         yearId: selectedYearObject?.id || ''
      });
      setFormErrors({});
      setCoordinatorSearch('');
      setIsCoordinatorDropdownOpen(false);
   };

   const closeUpdateDialog = () => {
      setIsUpdateDialogOpen(false);
      setSelectedSubject(null);
      setUpdateFormData({
         code: '',
         name: '',
         coordinatorId: '',
         departments: {
            DCS: false,
            DCE: false,
            DIT: false
         },
         type: '',
         theory_hour: '',
         practical_hour: '',
         theory_credite: '',
         practical_credite: '',
         theory_int_marks: '',
         practical_int_marks: '',
         theory_ext_marks: '',
         practical_ext_marks: ''
      });
      setUpdateFormErrors({});
      setUpdateCoordinatorSearch('');
      setIsUpdateCoordinatorDropdownOpen(false);
   };

   return (
      <div className="min-h-screen bg-gray-50 p-4 lg:p-6">
         <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
               <div>
                  <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Subject Management</h1>
                  <p className="text-gray-600 mt-1">
                     Manage subjects for all departments - 
                     {selectedYearObject && selectedSemester ? 
                        ` ${selectedYearObject.year} (Semester ${selectedSemester})` : 
                        ' Please select year and semester from settings'
                     }
                  </p>
               </div>

               {/* Add Subject Button */}
               <button
                  onClick={() => setIsDialogOpen(true)}
                  disabled={!selectedYearObject?.id || !selectedSemester}
                  className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg transition duration-200 shadow-md"
               >
                  <Plus className="h-5 w-5" />
                  <span>Add Subject</span>
               </button>
            </div>

            {/* Year/Semester Info */}
            {(!selectedYearObject || !selectedSemester) && (
               <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
                  <div className="flex">
                     <div className="ml-3">
                        <h3 className="text-sm font-medium text-amber-800">Configuration Required</h3>
                        <p className="mt-1 text-sm text-amber-700">
                           Please select academic year and semester from the settings page to manage subjects.
                        </p>
                     </div>
                  </div>
               </div>
            )}

            {/* Search Section */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
               <div className="flex items-center space-x-4">
                  <div className="relative flex-1 max-w-md">
                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-gray-400" />
                     </div>
                     <input
                        type="text"
                        placeholder="Search subjects by name, code, or coordinator..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                     />
                  </div>
                  <div className="px-6 py-4 ml-16">
                     <h2 className="text-lg font-semibold text-gray-900">Subjects List</h2>
                     <p className="text-sm text-gray-600">Total: {filteredSubjects.length} subjects</p>
                  </div>
               </div>
            </div>

            {/* Subjects Table */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
               <div className="overflow-x-auto">
                  {isLoadingSubjects ? (
                     <div className="flex justify-center items-center py-12">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                     </div>
                  ) : filteredSubjects.length === 0 ? (
                     <div className="text-center py-12">
                        <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-500">No subjects found</p>
                     </div>
                  ) : (
                     <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                           <tr>
                              <th className="px-6 py-3 text-center text-sm font-medium text-gray-500 uppercase tracking-wider">
                                 Code
                              </th>
                              <th className="px-6 py-3 text-center text-sm font-medium text-gray-500 uppercase tracking-wider">
                                 Name
                              </th>
                              <th className="px-6 py-3 text-center text-sm font-medium text-gray-500 uppercase tracking-wider">
                                 Type
                              </th>
                              <th className="px-6 py-3 text-center text-sm font-medium text-gray-500 uppercase tracking-wider">
                                 Departments
                              </th>
                              <th className="px-6 py-3 text-center text-sm font-medium text-gray-500 uppercase tracking-wider">
                                 Coordinator
                              </th>
                              <th className="px-6 py-3 text-center text-sm font-medium text-gray-500 uppercase tracking-wider">
                                 Credits
                              </th>
                              <th className="px-6 py-3 text-center text-sm font-medium text-gray-500 uppercase tracking-wider">
                                 Actions
                              </th>
                           </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                           {filteredSubjects.map((subject, index) => (
                              <tr key={subject.code || index} className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-blue-50 transition-colors duration-150`}>
                                 <td className="px-6 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                                    {subject.code}
                                 </td>
                                 <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-900">
                                    {subject.name}
                                 </td>
                                 <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-500">
                                    <span className={`px-2 py-1 text-xs rounded-full ${
                                       subject.type === 'major' ? 'bg-blue-100 text-blue-800' :
                                       subject.type === 'elective' ? 'bg-green-100 text-green-800' :
                                       subject.type === 'universityElective' ? 'bg-purple-100 text-purple-800' :
                                       'bg-gray-100 text-gray-800'
                                    }`}>
                                       {subject.type === 'universityElective' ? 'Univ. Elective' : 
                                        subject.type.charAt(0).toUpperCase() + subject.type.slice(1)}
                                    </span>
                                 </td>
                                 <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-500">
                                    <div className="flex justify-center space-x-1">
                                       {subject.dep_CSE && <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded">DCS</span>}
                                       {subject.dep_CE && <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">DCE</span>}
                                       {subject.dep_IT && <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">DIT</span>}
                                    </div>
                                 </td>
                                 <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-500">
                                    {subject.subjectCoordinator?.name || 'N/A'}
                                 </td>
                                 <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-500">
                                    <div className="text-xs">
                                       {subject.theory_credite && <div>T: {subject.theory_credite}</div>}
                                       {subject.practical_credite && <div>P: {subject.practical_credite}</div>}
                                    </div>
                                 </td>
                                 <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-500">
                                    <div className="flex items-center justify-center space-x-2">
                                       <button
                                          onClick={() => handleViewSubject(subject)}
                                          className="p-2 text-green-600 hover:text-green-800 hover:bg-green-50 rounded-lg transition-colors"
                                          title="View Subject Details"
                                       >
                                          <Eye className="h-4 w-4" />
                                       </button>
                                       <button
                                          onClick={() => handleEdit(subject)}
                                          className="p-2 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-lg transition-colors"
                                          title="Edit Subject"
                                       >
                                          <Edit className="h-4 w-4" />
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

         {/* Add Subject Dialog */}
         {isDialogOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center">
               {/* Backdrop with blur */}
               <div
                  className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
                  onClick={closeDialog}
               ></div>

               {/* Dialog Content */}
               <div className="relative bg-white rounded-lg shadow-xl max-w-6xl w-full mx-4 max-h-[90vh] overflow-y-auto z-10">
                  {/* Header */}
                  <div className="flex items-center justify-between p-6 border-b border-gray-200">
                     <h2 className="text-xl font-semibold text-gray-900">Add New Subject</h2>
                     <button
                        onClick={closeDialog}
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                     >
                        <X className="h-6 w-6" />
                     </button>
                  </div>

                  {/* Form Content */}
                  <form onSubmit={handleSubmit} className="p-6 space-y-6">
                     {/* Four Column Layout */}
                     <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {/* First Column - Basic Info */}
                        <div className="space-y-4">
                           <h3 className="text-lg font-medium text-gray-900 border-b pb-2">Basic Information</h3>
                           
                           {/* Subject Code */}
                           <div>
                              <label htmlFor="code" className="block text-sm font-medium text-gray-700 mb-2">
                                 Subject Code
                              </label>
                              <input
                                 id="code"
                                 name="code"
                                 type="text"
                                 value={formData.code}
                                 onChange={handleInputChange}
                                 className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${formErrors.code ? 'border-red-300' : 'border-gray-300'}`}
                                 placeholder="e.g., CS101"
                              />
                              {formErrors.code && <p className="text-red-500 text-xs mt-1">{formErrors.code}</p>}
                           </div>

                           {/* Subject Name */}
                           <div>
                              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                 Subject Name
                              </label>
                              <input
                                 id="name"
                                 name="name"
                                 type="text"
                                 value={formData.name}
                                 onChange={handleInputChange}
                                 className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${formErrors.name ? 'border-red-300' : 'border-gray-300'}`}
                                 placeholder="Enter subject name"
                              />
                              {formErrors.name && <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>}
                           </div>

                           {/* Subject Type */}
                           <div>
                              <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">
                                 Subject Type
                              </label>
                              <select
                                 id="type"
                                 name="type"
                                 value={formData.type}
                                 onChange={handleInputChange}
                                 className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${formErrors.type ? 'border-red-300' : 'border-gray-300'}`}
                              >
                                 <option value="">Select Type</option>
                                 <option value="major">Major</option>
                                 <option value="elective">Elective</option>
                                 <option value="universityElective">University Elective</option>
                              </select>
                              {formErrors.type && <p className="text-red-500 text-xs mt-1">{formErrors.type}</p>}
                           </div>

                           {/* Departments */}
                           <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                 Departments
                              </label>
                              <div className="space-y-2">
                                 <label className="flex items-center">
                                    <input
                                       type="checkbox"
                                       name="DCS"
                                       checked={formData.departments.DCS}
                                       onChange={handleDepartmentChange}
                                       className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                    />
                                    <span className="ml-2 text-sm text-gray-700">DCS (Computer Science)</span>
                                 </label>
                                 <label className="flex items-center">
                                    <input
                                       type="checkbox"
                                       name="DCE"
                                       checked={formData.departments.DCE}
                                       onChange={handleDepartmentChange}
                                       className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                    />
                                    <span className="ml-2 text-sm text-gray-700">DCE (Computer Engineering)</span>
                                 </label>
                                 <label className="flex items-center">
                                    <input
                                       type="checkbox"
                                       name="DIT"
                                       checked={formData.departments.DIT}
                                       onChange={handleDepartmentChange}
                                       className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                    />
                                    <span className="ml-2 text-sm text-gray-700">DIT (Information Technology)</span>
                                 </label>
                              </div>
                              {formErrors.departments && <p className="text-red-500 text-xs mt-1">{formErrors.departments}</p>}
                           </div>
                        </div>

                        {/* Second Column - Coordinator */}
                        <div className="space-y-4">
                           <h3 className="text-lg font-medium text-gray-900 border-b pb-2">Coordinator</h3>
                           
                           {/* Coordinator */}
                           <div>
                              <label htmlFor="coordinatorId" className="block text-sm font-medium text-gray-700 mb-2">
                                 Subject Coordinator
                              </label>
                              <div className="relative">
                                 {/* Selected Value Display / Search Input */}
                                 <div className="relative">
                                    <input
                                       type="text"
                                       placeholder={selectedCoordinator ? `${selectedCoordinator.name} (${selectedCoordinator.userId}) - ${selectedCoordinator.department}` : "Search and select coordinator..."}
                                       value={coordinatorSearch}
                                       onChange={(e) => {
                                          setCoordinatorSearch(e.target.value);
                                          setIsCoordinatorDropdownOpen(true);
                                       }}
                                       onFocus={() => setIsCoordinatorDropdownOpen(true)}
                                       className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${formErrors.coordinatorId ? 'border-red-300' : 'border-gray-300'}`}
                                    />
                                    {selectedCoordinator && (
                                       <button
                                          type="button"
                                          onClick={() => {
                                             setFormData(prev => ({ ...prev, coordinatorId: '' }));
                                             setCoordinatorSearch('');
                                          }}
                                          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                       >
                                          <X className="h-4 w-4" />
                                       </button>
                                    )}
                                 </div>

                                 {/* Dropdown List */}
                                 {isCoordinatorDropdownOpen && (
                                    <div className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                                       {filteredFaculties.length === 0 ? (
                                          <div className="px-4 py-2 text-sm text-gray-500">No coordinators found</div>
                                       ) : (
                                          filteredFaculties.map(faculty => (
                                             <div
                                                key={faculty.id}
                                                onClick={() => handleCoordinatorSelect(faculty.id)}
                                                className="px-4 py-2 hover:bg-blue-50 cursor-pointer border-b border-gray-100 last:border-b-0"
                                             >
                                                <div className="font-medium text-gray-900">{faculty.name}</div>
                                                <div className="text-sm text-gray-500">
                                                   {faculty.userId} • {faculty.department}
                                                </div>
                                             </div>
                                          ))
                                       )}
                                    </div>
                                 )}

                                 {/* Click outside to close */}
                                 {isCoordinatorDropdownOpen && (
                                    <div
                                       className="fixed inset-0 z-40"
                                       onClick={() => setIsCoordinatorDropdownOpen(false)}
                                    ></div>
                                 )}
                              </div>
                              {formErrors.coordinatorId && <p className="text-red-500 text-xs mt-1">{formErrors.coordinatorId}</p>}
                           </div>
                        </div>

                        {/* Third Column - Hours & Credits */}
                        <div className="space-y-4">
                           <h3 className="text-lg font-medium text-gray-900 border-b pb-2">Hours & Credits</h3>
                           
                           {/* Theory Hours */}
                           <div>
                              <label htmlFor="theory_hour" className="block text-sm font-medium text-gray-700 mb-2">
                                 Theory Hours
                              </label>
                              <input
                                 id="theory_hour"
                                 name="theory_hour"
                                 type="number"
                                 value={formData.theory_hour}
                                 onChange={handleInputChange}
                                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                 placeholder="0"
                              />
                           </div>

                           {/* Practical Hours */}
                           <div>
                              <label htmlFor="practical_hour" className="block text-sm font-medium text-gray-700 mb-2">
                                 Practical Hours
                              </label>
                              <input
                                 id="practical_hour"
                                 name="practical_hour"
                                 type="number"
                                 value={formData.practical_hour}
                                 onChange={handleInputChange}
                                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                 placeholder="0"
                              />
                           </div>

                           {/* Theory Credits */}
                           <div>
                              <label htmlFor="theory_credite" className="block text-sm font-medium text-gray-700 mb-2">
                                 Theory Credits
                              </label>
                              <input
                                 id="theory_credite"
                                 name="theory_credite"
                                 type="number"
                                 value={formData.theory_credite}
                                 onChange={handleInputChange}
                                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                 placeholder="0"
                              />
                           </div>

                           {/* Practical Credits */}
                           <div>
                              <label htmlFor="practical_credite" className="block text-sm font-medium text-gray-700 mb-2">
                                 Practical Credits
                              </label>
                              <input
                                 id="practical_credite"
                                 name="practical_credite"
                                 type="number"
                                 value={formData.practical_credite}
                                 onChange={handleInputChange}
                                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                 placeholder="0"
                              />
                           </div>
                        </div>

                        {/* Fourth Column - Marks */}
                        <div className="space-y-4">
                           <h3 className="text-lg font-medium text-gray-900 border-b pb-2">Marks Distribution</h3>
                           
                           {/* Theory Internal Marks */}
                           <div>
                              <label htmlFor="theory_int_marks" className="block text-sm font-medium text-gray-700 mb-2">
                                 Theory Internal Marks
                              </label>
                              <input
                                 id="theory_int_marks"
                                 name="theory_int_marks"
                                 type="number"
                                 value={formData.theory_int_marks}
                                 onChange={handleInputChange}
                                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                 placeholder="0"
                              />
                           </div>

                           {/* Theory External Marks */}
                           <div>
                              <label htmlFor="theory_ext_marks" className="block text-sm font-medium text-gray-700 mb-2">
                                 Theory External Marks
                              </label>
                              <input
                                 id="theory_ext_marks"
                                 name="theory_ext_marks"
                                 type="number"
                                 value={formData.theory_ext_marks}
                                 onChange={handleInputChange}
                                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                 placeholder="0"
                              />
                           </div>

                           {/* Practical Internal Marks */}
                           <div>
                              <label htmlFor="practical_int_marks" className="block text-sm font-medium text-gray-700 mb-2">
                                 Practical Internal Marks
                              </label>
                              <input
                                 id="practical_int_marks"
                                 name="practical_int_marks"
                                 type="number"
                                 value={formData.practical_int_marks}
                                 onChange={handleInputChange}
                                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                 placeholder="0"
                              />
                           </div>

                           {/* Practical External Marks */}
                           <div>
                              <label htmlFor="practical_ext_marks" className="block text-sm font-medium text-gray-700 mb-2">
                                 Practical External Marks
                              </label>
                              <input
                                 id="practical_ext_marks"
                                 name="practical_ext_marks"
                                 type="number"
                                 value={formData.practical_ext_marks}
                                 onChange={handleInputChange}
                                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                 placeholder="0"
                              />
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
                           <span>{isCreating ? 'Adding...' : 'Add Subject'}</span>
                        </button>
                     </div>
                  </form>
               </div>
            </div>
         )}

         {/* Update Subject Dialog - Similar structure with updateFormData */}
         {isUpdateDialogOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center">
               <div
                  className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
                  onClick={closeUpdateDialog}
               ></div>

               <div className="relative bg-white rounded-lg shadow-xl max-w-6xl w-full mx-4 max-h-[90vh] overflow-y-auto z-10">
                  <div className="flex items-center justify-between p-6 border-b border-gray-200">
                     <h2 className="text-xl font-semibold text-gray-900">Update Subject</h2>
                     <button
                        onClick={closeUpdateDialog}
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                     >
                        <X className="h-6 w-6" />
                     </button>
                  </div>

                  <form onSubmit={handleUpdateSubmit} className="p-6 space-y-6">
                     <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {/* Similar structure as add form but with updateFormData and read-only code */}
                        <div className="space-y-4">
                           <h3 className="text-lg font-medium text-gray-900 border-b pb-2">Basic Information</h3>
                           
                           <div>
                              <label htmlFor="updateCode" className="block text-sm font-medium text-gray-700 mb-2">Subject Code</label>
                              <input
                                 id="updateCode"
                                 name="code"
                                 type="text"
                                 value={updateFormData.code}
                                 readOnly
                                 className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 cursor-not-allowed"
                              />
                           </div>

                           <div>
                              <label htmlFor="updateName" className="block text-sm font-medium text-gray-700 mb-2">Subject Name</label>
                              <input
                                 id="updateName"
                                 name="name"
                                 type="text"
                                 value={updateFormData.name}
                                 onChange={handleUpdateInputChange}
                                 className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${updateFormErrors.name ? 'border-red-300' : 'border-gray-300'}`}
                              />
                              {updateFormErrors.name && <p className="text-red-500 text-xs mt-1">{updateFormErrors.name}</p>}
                           </div>

                           <div>
                              <label htmlFor="updateType" className="block text-sm font-medium text-gray-700 mb-2">Subject Type</label>
                              <select
                                 id="updateType"
                                 name="type"
                                 value={updateFormData.type}
                                 onChange={handleUpdateInputChange}
                                 className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${updateFormErrors.type ? 'border-red-300' : 'border-gray-300'}`}
                              >
                                 <option value="">Select Type</option>
                                 <option value="major">Major</option>
                                 <option value="elective">Elective</option>
                                 <option value="universityElective">University Elective</option>
                              </select>
                              {updateFormErrors.type && <p className="text-red-500 text-xs mt-1">{updateFormErrors.type}</p>}
                           </div>

                           <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">Departments</label>
                              <div className="space-y-2">
                                 <label className="flex items-center">
                                    <input
                                       type="checkbox"
                                       name="DCS"
                                       checked={updateFormData.departments.DCS}
                                       onChange={handleUpdateDepartmentChange}
                                       className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                    />
                                    <span className="ml-2 text-sm text-gray-700">DCS (Computer Science)</span>
                                 </label>
                                 <label className="flex items-center">
                                    <input
                                       type="checkbox"
                                       name="DCE"
                                       checked={updateFormData.departments.DCE}
                                       onChange={handleUpdateDepartmentChange}
                                       className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                    />
                                    <span className="ml-2 text-sm text-gray-700">DCE (Computer Engineering)</span>
                                 </label>
                                 <label className="flex items-center">
                                    <input
                                       type="checkbox"
                                       name="DIT"
                                       checked={updateFormData.departments.DIT}
                                       onChange={handleUpdateDepartmentChange}
                                       className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                    />
                                    <span className="ml-2 text-sm text-gray-700">DIT (Information Technology)</span>
                                 </label>
                              </div>
                              {updateFormErrors.departments && <p className="text-red-500 text-xs mt-1">{updateFormErrors.departments}</p>}
                           </div>
                        </div>

                        {/* Coordinator Column */}
                        <div className="space-y-4">
                           <h3 className="text-lg font-medium text-gray-900 border-b pb-2">Coordinator</h3>
                           
                           <div>
                              <label htmlFor="updateCoordinatorId" className="block text-sm font-medium text-gray-700 mb-2">Subject Coordinator</label>
                              <div className="relative">
                                 {/* Selected Value Display / Search Input */}
                                 <div className="relative">
                                    <input
                                       type="text"
                                       placeholder={selectedUpdateCoordinator ? `${selectedUpdateCoordinator.name} (${selectedUpdateCoordinator.userId}) - ${selectedUpdateCoordinator.department}` : "Search and select coordinator..."}
                                       value={updateCoordinatorSearch}
                                       onChange={(e) => {
                                          setUpdateCoordinatorSearch(e.target.value);
                                          setIsUpdateCoordinatorDropdownOpen(true);
                                       }}
                                       onFocus={() => setIsUpdateCoordinatorDropdownOpen(true)}
                                       className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${updateFormErrors.coordinatorId ? 'border-red-300' : 'border-gray-300'}`}
                                    />
                                    {selectedUpdateCoordinator && (
                                       <button
                                          type="button"
                                          onClick={() => {
                                             setUpdateFormData(prev => ({ ...prev, coordinatorId: '' }));
                                             setUpdateCoordinatorSearch('');
                                          }}
                                          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                       >
                                          <X className="h-4 w-4" />
                                       </button>
                                    )}
                                 </div>

                                 {/* Dropdown List */}
                                 {isUpdateCoordinatorDropdownOpen && (
                                    <div className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                                       {filteredUpdateFaculties.length === 0 ? (
                                          <div className="px-4 py-2 text-sm text-gray-500">No coordinators found</div>
                                       ) : (
                                          filteredUpdateFaculties.map(faculty => (
                                             <div
                                                key={faculty.id}
                                                onClick={() => handleUpdateCoordinatorSelect(faculty.id)}
                                                className="px-4 py-2 hover:bg-blue-50 cursor-pointer border-b border-gray-100 last:border-b-0"
                                             >
                                                <div className="font-medium text-gray-900">{faculty.name}</div>
                                                <div className="text-sm text-gray-500">
                                                   {faculty.userId} • {faculty.department}
                                                </div>
                                             </div>
                                          ))
                                       )}
                                    </div>
                                 )}

                                 {/* Click outside to close */}
                                 {isUpdateCoordinatorDropdownOpen && (
                                    <div
                                       className="fixed inset-0 z-40"
                                       onClick={() => setIsUpdateCoordinatorDropdownOpen(false)}
                                    ></div>
                                 )}
                              </div>
                              {updateFormErrors.coordinatorId && <p className="text-red-500 text-xs mt-1">{updateFormErrors.coordinatorId}</p>}
                           </div>
                        </div>

                        {/* Hours & Credits and Marks columns - similar to add form */}
                        <div className="space-y-4">
                           <h3 className="text-lg font-medium text-gray-900 border-b pb-2">Hours & Credits</h3>
                           
                           <div>
                              <label htmlFor="updateTheoryHour" className="block text-sm font-medium text-gray-700 mb-2">Theory Hours</label>
                              <input
                                 id="updateTheoryHour"
                                 name="theory_hour"
                                 type="number"
                                 value={updateFormData.theory_hour}
                                 onChange={handleUpdateInputChange}
                                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                              />
                           </div>

                           <div>
                              <label htmlFor="updatePracticalHour" className="block text-sm font-medium text-gray-700 mb-2">Practical Hours</label>
                              <input
                                 id="updatePracticalHour"
                                 name="practical_hour"
                                 type="number"
                                 value={updateFormData.practical_hour}
                                 onChange={handleUpdateInputChange}
                                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                              />
                           </div>

                           <div>
                              <label htmlFor="updateTheoryCredite" className="block text-sm font-medium text-gray-700 mb-2">Theory Credits</label>
                              <input
                                 id="updateTheoryCredite"
                                 name="theory_credite"
                                 type="number"
                                 value={updateFormData.theory_credite}
                                 onChange={handleUpdateInputChange}
                                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                              />
                           </div>

                           <div>
                              <label htmlFor="updatePracticalCredite" className="block text-sm font-medium text-gray-700 mb-2">Practical Credits</label>
                              <input
                                 id="updatePracticalCredite"
                                 name="practical_credite"
                                 type="number"
                                 value={updateFormData.practical_credite}
                                 onChange={handleUpdateInputChange}
                                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                              />
                           </div>
                        </div>

                        <div className="space-y-4">
                           <h3 className="text-lg font-medium text-gray-900 border-b pb-2">Marks Distribution</h3>
                           
                           <div>
                              <label htmlFor="updateTheoryIntMarks" className="block text-sm font-medium text-gray-700 mb-2">Theory Internal Marks</label>
                              <input
                                 id="updateTheoryIntMarks"
                                 name="theory_int_marks"
                                 type="number"
                                 value={updateFormData.theory_int_marks}
                                 onChange={handleUpdateInputChange}
                                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                              />
                           </div>

                           <div>
                              <label htmlFor="updateTheoryExtMarks" className="block text-sm font-medium text-gray-700 mb-2">Theory External Marks</label>
                              <input
                                 id="updateTheoryExtMarks"
                                 name="theory_ext_marks"
                                 type="number"
                                 value={updateFormData.theory_ext_marks}
                                 onChange={handleUpdateInputChange}
                                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                              />
                           </div>

                           <div>
                              <label htmlFor="updatePracticalIntMarks" className="block text-sm font-medium text-gray-700 mb-2">Practical Internal Marks</label>
                              <input
                                 id="updatePracticalIntMarks"
                                 name="practical_int_marks"
                                 type="number"
                                 value={updateFormData.practical_int_marks}
                                 onChange={handleUpdateInputChange}
                                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                              />
                           </div>

                           <div>
                              <label htmlFor="updatePracticalExtMarks" className="block text-sm font-medium text-gray-700 mb-2">Practical External Marks</label>
                              <input
                                 id="updatePracticalExtMarks"
                                 name="practical_ext_marks"
                                 type="number"
                                 value={updateFormData.practical_ext_marks}
                                 onChange={handleUpdateInputChange}
                                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                              />
                           </div>
                        </div>
                     </div>

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
                           <span>{isUpdating ? 'Updating...' : 'Update Subject'}</span>
                        </button>
                     </div>
                  </form>
               </div>
            </div>
         )}
      </div>
   );
};

export default AddSubject;
