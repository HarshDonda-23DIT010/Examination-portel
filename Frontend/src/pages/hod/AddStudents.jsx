import React, { useState, useRef } from 'react';
import { Search, Plus, X, User, Mail, Building, Users, GraduationCap, Upload, FileSpreadsheet, Edit, Trash2, Download } from 'lucide-react';
import { useAddOneStudentMutation, useBulkUploadStudentsMutation, useGetDepartmentStudentsQuery, useUpdateStudentMutation } from '@/store/api/studentApi';
import { toast } from 'sonner';
import { useSelector, useDispatch } from 'react-redux';
import { setStudents, addStudent, updateStudent as updateStudentAction } from '@/store/slices/studentSlice';

const AddStudents = () => {
   const { user } = useSelector((state) => state.auth);
   const { students } = useSelector((state) => state.student);
   const dispatch = useDispatch();
   
   console.log('Auth state user:', user);
   console.log('User department:', user?.department);
   
   const [isDialogOpen, setIsDialogOpen] = useState(false);
   const [isUpdateDialogOpen, setIsUpdateDialogOpen] = useState(false);
   const [isBulkUploadOpen, setIsBulkUploadOpen] = useState(false);
   const [searchTerm, setSearchTerm] = useState('');
   const [selectedStudent, setSelectedStudent] = useState(null);
   const [uploadFile, setUploadFile] = useState(null);
   const fileInputRef = useRef(null);
   
   const [formData, setFormData] = useState({
      studentId: '',
      name: '',
      email: '',
      department: user?.department || '',
      semester: '',
      div: '',
      batch: ''
   });
   
   const [updateFormData, setUpdateFormData] = useState({
      studentId: '',
      name: '',
      div: '',
      batch: ''
   });
   
   const [formErrors, setFormErrors] = useState({});
   const [updateFormErrors, setUpdateFormErrors] = useState({});

   const [addOneStudent, { isLoading: isCreating }] = useAddOneStudentMutation();
   const [bulkUploadStudents, { isLoading: isUploading }] = useBulkUploadStudentsMutation();
   const [updateStudentMutation, { isLoading: isUpdating }] = useUpdateStudentMutation();
   const { data: studentsData, isLoading: isLoadingStudents, error, refetch } = useGetDepartmentStudentsQuery(user?.department, {
      skip: !user?.department
   });

   // Update Redux store when data is fetched
   React.useEffect(() => {
      if (studentsData?.data) {
         // Students are now automatically dispatched by the API
         // dispatch(setStudents(studentsData.data));
      }
   }, [studentsData, dispatch]);

   // Filter students based on search term
   const filteredStudents = students.filter(student =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.studentId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.semester.toString().includes(searchTerm) ||
      student.div.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (student.batch && student.batch.toLowerCase().includes(searchTerm.toLowerCase()))
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

      if (!formData.studentId.trim()) errors.studentId = 'Student ID is required';
      if (!formData.name.trim()) errors.name = 'Name is required';
      if (!formData.email.trim()) errors.email = 'Email is required';
      if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email is invalid';
      if (!formData.semester) errors.semester = 'Semester is required';
      if (!formData.div.trim()) errors.div = 'Division is required';
      if (!formData.batch.trim()) errors.batch = 'Batch is required';

      setFormErrors(errors);
      return Object.keys(errors).length === 0;
   };

   const validateUpdateForm = () => {
      const errors = {};

      if (!updateFormData.studentId.trim()) errors.studentId = 'Student ID is required';
      if (!updateFormData.name.trim()) errors.name = 'Name is required';
      if (!updateFormData.div.trim()) errors.div = 'Division is required';
      if (!updateFormData.batch.trim()) errors.batch = 'Batch is required';

      setUpdateFormErrors(errors);
      return Object.keys(errors).length === 0;
   };

   const handleSubmit = async (e) => {
      e.preventDefault();

      if (!validateForm()) return;

      try {
         const result = await addOneStudent(formData).unwrap();
         toast.success('Student added successfully!');
         // Student is automatically added to Redux store by the API
         // dispatch(addStudent(result.data));
         
         // Reset form
         setFormData({
            studentId: '',
            name: '',
            email: '',
            department: user?.department || '',
            semester: '',
            div: '',
            batch: ''
         });
         setIsDialogOpen(false);
         refetch();
      } catch (error) {
         console.error('Failed to add student:', error);
         toast.error(error?.data?.message || 'Failed to add student. Please try again.');
      }
   };

   const handleUpdateSubmit = async (e) => {
      e.preventDefault();

      if (!validateUpdateForm()) return;

      try {
         const result = await updateStudentMutation(updateFormData).unwrap();
         toast.success('Student updated successfully!');
         setIsUpdateDialogOpen(false);
         setSelectedStudent(null);
         refetch();
      } catch (error) {
         console.error('Failed to update student:', error);
         toast.error(error?.data?.message || 'Failed to update student. Please try again.');
      }
   };

   const handleEdit = (student) => {
      setSelectedStudent(student);
      setUpdateFormData({
         studentId: student.studentId,
         name: student.name,
         div: student.div,
         batch: student.batch || ''
      });
      setUpdateFormErrors({});
      setIsUpdateDialogOpen(true);
   };

   const handleFileChange = (e) => {
      const file = e.target.files[0];
      if (file) {
         if (file.type !== 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' && 
             file.type !== 'application/vnd.ms-excel') {
            toast.error('Please upload only Excel files (.xlsx or .xls)');
            return;
         }
         setUploadFile(file);
      }
   };

   const handleBulkUpload = async () => {
      if (!uploadFile) {
         toast.error('Please select a file to upload');
         return;
      }

      const formData = new FormData();
      formData.append('file', uploadFile);

      try {
         await bulkUploadStudents(formData).unwrap();
         toast.success('Students uploaded successfully!');
         setIsBulkUploadOpen(false);
         setUploadFile(null);
         if (fileInputRef.current) {
            fileInputRef.current.value = '';
         }
         refetch();
      } catch (error) {
         console.error('Failed to upload students:', error);
         toast.error(error?.data?.message || 'Failed to upload students. Please try again.');
      }
   };

   const downloadTemplate = () => {
      // Create sample data for Excel template
      const templateData = [
         {
            studentId: '23DCE001',
            name: 'Sample Student',
            email: 'student@example.com',
            department:'DCE',
            semester: 5,
            div: 'DCE1',
            batch: 'A'
         },
         {
            studentId: '23DCS001',
            name: 'Sample Student 2',
            email: 'student2@example.com',
            department: 'DCS',
            semester: 3,
            div: 'DCS1',
            batch: 'B'
         },
         {
            studentId: '23DIT001',
            name: 'Sample Student 3',
            email: 'student3@example.com',
            department:'DIT',
            semester: 4,
            div: 'DIT1',
            batch: 'C'
         }
      ];
      
      // Create Excel workbook using SheetJS
      import('xlsx').then((XLSX) => {
         const workbook = XLSX.utils.book_new();
         const worksheet = XLSX.utils.json_to_sheet(templateData);
         
         // Add worksheet to workbook
         XLSX.utils.book_append_sheet(workbook, worksheet, 'Students');
         
         // Write and download the Excel file
         XLSX.writeFile(workbook, 'students_template.xlsx');
      }).catch(error => {
         console.error('Error creating Excel file:', error);
         toast.error('Failed to download template. Please try again.');
      });
   };

   const closeDialog = () => {
      setIsDialogOpen(false);
      setFormData({
         studentId: '',
         name: '',
         email: '',
         department: user?.department || '',
         semester: '',
         div: '',
         batch: ''
      });
      setFormErrors({});
   };

   const closeUpdateDialog = () => {
      setIsUpdateDialogOpen(false);
      setSelectedStudent(null);
      setUpdateFormData({
         studentId: '',
         name: '',
         div: ''
      });
      setUpdateFormErrors({});
   };

   const closeBulkUploadDialog = () => {
      setIsBulkUploadOpen(false);
      setUploadFile(null);
      if (fileInputRef.current) {
         fileInputRef.current.value = '';
      }
   };

   return (
      <div className="min-h-screen bg-gray-50 p-4 lg:p-6">
         <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
               <div>
                  <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Student Management</h1>
                  <p className="text-gray-600 mt-1">Manage students and their information for {user?.department} department</p>
               </div>

               {/* Action Buttons */}
               <div className="flex space-x-3">
                  <button
                     onClick={() => setIsBulkUploadOpen(true)}
                     className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition duration-200 shadow-md"
                  >
                     <Upload className="h-5 w-5" />
                     <span>Bulk Upload</span>
                  </button>
                  <button
                     onClick={() => setIsDialogOpen(true)}
                     className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition duration-200 shadow-md"
                  >
                     <Plus className="h-5 w-5" />
                     <span>Add Student</span>
                  </button>
               </div>
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
                        placeholder="Search students by name, email, ID, semester, division, or batch..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                     />
                  </div>
                  <div className="px-6 py-4 ml-16">
                     <h2 className="text-lg font-semibold text-gray-900">Students List</h2>
                     <p className="text-sm text-gray-600">Total: {filteredStudents.length} students</p>
                  </div>
               </div>
            </div>

            {/* Students Table */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
               <div className="overflow-x-auto">
                  {isLoadingStudents ? (
                     <div className="flex justify-center items-center py-12">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                     </div>
                  ) : error ? (
                     <div className="text-center py-12">
                        <p className="text-red-600">Error loading students. Please try again.</p>
                     </div>
                  ) : filteredStudents.length === 0 ? (
                     <div className="text-center py-12">
                        <GraduationCap className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-500">No students found</p>
                     </div>
                  ) : (
                     <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                           <tr>
                              <th className="px-6 py-3 text-center text-sm font-medium text-gray-500 uppercase tracking-wider">
                                 Student ID
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
                                 Semester
                              </th>
                              <th className="px-6 py-3 text-center text-sm font-medium text-gray-500 uppercase tracking-wider">
                                 Division
                              </th>
                              <th className="px-6 py-3 text-center text-sm font-medium text-gray-500 uppercase tracking-wider">
                                 Batch
                              </th>
                              <th className="px-6 py-3 text-center text-sm font-medium text-gray-500 uppercase tracking-wider">
                                 Actions
                              </th>
                           </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                           {filteredStudents.map((student, index) => (
                              <tr key={student.studentId || index} className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-blue-50 transition-colors duration-150`}>
                                 <td className="px-6 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                                    {student.studentId}
                                 </td>
                                 <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-900">
                                    {student.name}
                                 </td>
                                 <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-500">
                                    {student.email}
                                 </td>
                                 <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-500">
                                    {student.department}
                                 </td>
                                 <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-500">
                                    {student.semester}
                                 </td>
                                 <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-500">
                                    {student.div}
                                 </td>
                                 <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-500">
                                    {student.batch || 'N/A'}
                                 </td>
                                 <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-500">
                                    <div className="flex items-center justify-center space-x-2">
                                       <button
                                          onClick={() => handleEdit(student)}
                                          className="p-2 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-lg transition-colors"
                                          title="Edit Student"
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

         {/* Add Student Dialog */}
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
                     <h2 className="text-xl font-semibold text-gray-900">Add New Student</h2>
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
                           {/* Student ID */}
                           <div>
                              <label htmlFor="studentId" className="block text-sm font-medium text-gray-700 mb-2">
                                 Student ID
                              </label>
                              <div className="relative">
                                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <User className="h-5 w-5 text-gray-400" />
                                 </div>
                                 <input
                                    id="studentId"
                                    name="studentId"
                                    type="text"
                                    value={formData.studentId}
                                    onChange={handleInputChange}
                                    className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${formErrors.studentId ? 'border-red-300' : 'border-gray-300'}`}
                                    placeholder="Enter student ID"
                                 />
                              </div>
                              {formErrors.studentId && <p className="text-red-500 text-xs mt-1">{formErrors.studentId}</p>}
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

                           {/* Department */}
                           <div>
                              <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-2">
                                 Department
                              </label>
                              <div className="relative">
                                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Building className="h-5 w-5 text-gray-400" />
                                 </div>
                                 <input
                                    id="department"
                                    name="department"
                                    type="text"
                                    value={formData.department}
                                    readOnly
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg bg-gray-50 cursor-not-allowed"
                                    placeholder="Department (Auto-filled)"
                                 />
                              </div>
                           </div>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-4">
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

                           {/* Semester */}
                           <div>
                              <label htmlFor="semester" className="block text-sm font-medium text-gray-700 mb-2">
                                 Semester
                              </label>
                              <div className="relative">
                                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <GraduationCap className="h-5 w-5 text-gray-400" />
                                 </div>
                                 <select
                                    id="semester"
                                    name="semester"
                                    value={formData.semester}
                                    onChange={handleInputChange}
                                    className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${formErrors.semester ? 'border-red-300' : 'border-gray-300'}`}
                                 >
                                    <option value="">Select Semester</option>
                                    {[1, 2, 3, 4, 5, 6, 7, 8].map(sem => (
                                       <option key={sem} value={sem}>{sem}</option>
                                    ))}
                                 </select>
                              </div>
                              {formErrors.semester && <p className="text-red-500 text-xs mt-1">{formErrors.semester}</p>}
                           </div>

                           {/* Division */}
                           <div>
                              <label htmlFor="div" className="block text-sm font-medium text-gray-700 mb-2">
                                 Division
                              </label>
                              <div className="relative">
                                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Users className="h-5 w-5 text-gray-400" />
                                 </div>
                                 <select
                                    id="div"
                                    name="div"
                                    value={formData.div}
                                    onChange={handleInputChange}
                                    className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${formErrors.div ? 'border-red-300' : 'border-gray-300'}`}
                                 >
                                    <option value="">Select Division</option>
                                    <option value="DIT1">DIT1</option>
                                    <option value="DIT2">DIT2</option>
                                    <option value="DCS1">DCS1</option>
                                    <option value="DCS2">DCS2</option>
                                    <option value="DCE1">DCE1</option>
                                    <option value="DCE2">DCE2</option>
                                 </select>
                              </div>
                              {formErrors.div && <p className="text-red-500 text-xs mt-1">{formErrors.div}</p>}
                           </div>

                           {/* Batch */}
                           <div>
                              <label htmlFor="batch" className="block text-sm font-medium text-gray-700 mb-2">
                                 Batch
                              </label>
                              <div className="relative">
                                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Users className="h-5 w-5 text-gray-400" />
                                 </div>
                                 <select
                                    id="batch"
                                    name="batch"
                                    value={formData.batch}
                                    onChange={handleInputChange}
                                    className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${formErrors.batch ? 'border-red-300' : 'border-gray-300'}`}
                                 >
                                    <option value="">Select Batch</option>
                                    <option value="A">A</option>
                                    <option value="B">B</option>
                                    <option value="C">C</option>
                                    <option value="D">D</option>
                                 </select>
                              </div>
                              {formErrors.batch && <p className="text-red-500 text-xs mt-1">{formErrors.batch}</p>}
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
                           <span>{isCreating ? 'Adding...' : 'Add Student'}</span>
                        </button>
                     </div>
                  </form>
               </div>
            </div>
         )}

         {/* Update Student Dialog */}
         {isUpdateDialogOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center">
               {/* Backdrop with blur */}
               <div
                  className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
                  onClick={closeUpdateDialog}
               ></div>

               {/* Dialog Content */}
               <div className="relative bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto z-10">
                  {/* Header */}
                  <div className="flex items-center justify-between p-6 border-b border-gray-200">
                     <h2 className="text-xl font-semibold text-gray-900">Update Student</h2>
                     <button
                        onClick={closeUpdateDialog}
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                     >
                        <X className="h-6 w-6" />
                     </button>
                  </div>

                  {/* Form Content */}
                  <form onSubmit={handleUpdateSubmit} className="p-6 space-y-6">
                     {/* Student ID - Read Only */}
                     <div>
                        <label htmlFor="updateStudentId" className="block text-sm font-medium text-gray-700 mb-2">
                           Student ID
                        </label>
                        <div className="relative">
                           <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <User className="h-5 w-5 text-gray-400" />
                           </div>
                           <input
                              id="updateStudentId"
                              name="studentId"
                              type="text"
                              value={updateFormData.studentId}
                              readOnly
                              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg bg-gray-50 cursor-not-allowed"
                              placeholder="Student ID (Read Only)"
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

                     {/* Division */}
                     <div>
                        <label htmlFor="updateDiv" className="block text-sm font-medium text-gray-700 mb-2">
                           Division
                        </label>
                        <div className="relative">
                           <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <Users className="h-5 w-5 text-gray-400" />
                           </div>
                           <select
                              id="updateDiv"
                              name="div"
                              value={updateFormData.div}
                              onChange={handleUpdateInputChange}
                              className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${updateFormErrors.div ? 'border-red-300' : 'border-gray-300'}`}
                           >
                              <option value="">Select Division</option>
                              <option value="DIT1">DIT1</option>
                              <option value="DIT2">DIT2</option>
                              <option value="DCS1">DCS1</option>
                              <option value="DCS2">DCS2</option>
                              <option value="DCE1">DCE1</option>
                              <option value="DCE2">DCE2</option>
                           </select>
                        </div>
                        {updateFormErrors.div && <p className="text-red-500 text-xs mt-1">{updateFormErrors.div}</p>}
                     </div>

                     {/* Batch */}
                     <div>
                        <label htmlFor="updateBatch" className="block text-sm font-medium text-gray-700 mb-2">
                           Batch
                        </label>
                        <div className="relative">
                           <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <Users className="h-5 w-5 text-gray-400" />
                           </div>
                           <select
                              id="updateBatch"
                              name="batch"
                              value={updateFormData.batch}
                              onChange={handleUpdateInputChange}
                              className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${updateFormErrors.batch ? 'border-red-300' : 'border-gray-300'}`}
                           >
                              <option value="">Select Batch</option>
                              <option value="A">A</option>
                              <option value="B">B</option>
                              <option value="C">C</option>
                              <option value="D">D</option>
                           </select>
                        </div>
                        {updateFormErrors.batch && <p className="text-red-500 text-xs mt-1">{updateFormErrors.batch}</p>}
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
                           <span>{isUpdating ? 'Updating...' : 'Update Student'}</span>
                        </button>
                     </div>
                  </form>
               </div>
            </div>
         )}

         {/* Bulk Upload Dialog */}
         {isBulkUploadOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center">
               {/* Backdrop with blur */}
               <div
                  className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
                  onClick={closeBulkUploadDialog}
               ></div>

               {/* Dialog Content */}
               <div className="relative bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto z-10">
                  {/* Header */}
                  <div className="flex items-center justify-between p-6 border-b border-gray-200">
                     <h2 className="text-xl font-semibold text-gray-900">Bulk Upload Students</h2>
                     <button
                        onClick={closeBulkUploadDialog}
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                     >
                        <X className="h-6 w-6" />
                     </button>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-6">
                     {/* Instructions */}
                     <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <div className="flex">
                           <FileSpreadsheet className="h-5 w-5 text-blue-400 mt-0.5" />
                           <div className="ml-3">
                              <h3 className="text-sm font-medium text-blue-800">Excel Upload Instructions</h3>
                              <div className="mt-2 text-sm text-blue-700">
                                 <ul className="list-disc pl-5 space-y-1">
                                    <li>Upload an Excel file (.xlsx or .xls) with student data</li>
                                    <li>Required columns: studentId, name, email, department, semester, div</li>
                                    <li>Make sure there are no duplicate student IDs or emails</li>
                                    <li>Department should match your current department: {user?.department}</li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>

                     {/* Download Template */}
                     <div className="flex justify-center">
                        <button
                           onClick={downloadTemplate}
                           className="flex items-center space-x-2 bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition duration-200"
                        >
                           <Download className="h-4 w-4" />
                           <span>Download Template</span>
                        </button>
                     </div>

                     {/* File Upload */}
                     <div>
                        <label htmlFor="file" className="block text-sm font-medium text-gray-700 mb-2">
                           Select Excel File
                        </label>
                        <input
                           ref={fileInputRef}
                           id="file"
                           type="file"
                           accept=".xlsx,.xls"
                           onChange={handleFileChange}
                           className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                        {uploadFile && (
                           <p className="mt-2 text-sm text-green-600">
                              Selected: {uploadFile.name}
                           </p>
                        )}
                     </div>

                     {/* Footer */}
                     <div className="flex items-center justify-end space-x-3 pt-6 border-t border-gray-200">
                        <button
                           type="button"
                           onClick={closeBulkUploadDialog}
                           className="px-4 py-2 text-gray-700 bg-white hover:bg-gray-50 border border-gray-300 rounded-lg transition duration-200"
                        >
                           Cancel
                        </button>
                        <button
                           onClick={handleBulkUpload}
                           disabled={!uploadFile || isUploading}
                           className="px-4 py-2 bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white rounded-lg transition duration-200 flex items-center space-x-2"
                        >
                           {isUploading ? (
                              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                           ) : (
                              <Upload className="h-4 w-4" />
                           )}
                           <span>{isUploading ? 'Uploading...' : 'Upload Students'}</span>
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         )}
      </div>
   );
};

export default AddStudents;
