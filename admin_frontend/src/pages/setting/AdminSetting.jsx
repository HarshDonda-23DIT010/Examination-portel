import React, { useState } from 'react';
import { Calendar, BookOpen, ChevronDown } from 'lucide-react';

const AdminSetting = () => {
   const [selectedYear, setSelectedYear] = useState('');
   const [selectedSemester, setSelectedSemester] = useState('');

   // Generate academic years
   const generateAcademicYears = () => {
      const currentYear = new Date().getFullYear();
      const years = [];
      
      for (let i = 0; i < 5; i++) {
         const startYear = currentYear + i;
         const endYear = startYear + 1;
         years.push({
            value: `${startYear}-${endYear.toString().slice(-2)}`,
            label: `${startYear}-${endYear.toString().slice(-2)}`
         });
      }
      return years;
   };

   const academicYears = generateAcademicYears();

   // Semester options based on odd/even selection
   const getSemesterOptions = (yearType) => {
      if (yearType.includes('odd')) {
         return [
            { value: '1', label: 'Semester 1' },
            { value: '3', label: 'Semester 3' },
            { value: '5', label: 'Semester 5' },
            { value: '7', label: 'Semester 7' }
         ];
      } else if (yearType.includes('even')) {
         return [
            { value: '2', label: 'Semester 2' },
            { value: '4', label: 'Semester 4' },
            { value: '6', label: 'Semester 6' },
            { value: '8', label: 'Semester 8' }
         ];
      }
      return [];
   };

   const handleYearChange = (e) => {
      setSelectedYear(e.target.value);
      setSelectedSemester(''); // Reset semester when year changes
   };

   const semesterOptions = getSemesterOptions(selectedYear);

   return (
      <div className="min-h-screen bg-gray-50 p-4 lg:p-6">
         <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-8">
               <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                  Admin Settings
               </h1>
               <p className="text-gray-600">
                  Configure academic year and semester settings for the examination portal
               </p>
            </div>

            {/* Settings Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
               {/* Card Header */}
               <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
                  <h2 className="text-xl font-semibold text-white flex items-center">
                     <Calendar className="h-6 w-6 mr-2" />
                     Academic Session Configuration
                  </h2>
               </div>

               {/* Card Content */}
               <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     {/* Academic Year Dropdown */}
                     <div className="space-y-2">
                        <label htmlFor="academicYear" className="block text-sm font-medium text-gray-700 mb-3">
                           Academic Year & Type
                        </label>
                        <div className="relative">
                           <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <Calendar className="h-5 w-5 text-gray-400" />
                           </div>
                           <select
                              id="academicYear"
                              value={selectedYear}
                              onChange={handleYearChange}
                              className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 appearance-none bg-white text-gray-900"
                           >
                              <option value="">Select Academic Year & Type</option>
                              {academicYears.map(year => (
                                 <React.Fragment key={year.value}>
                                    <option value={`${year.value}-odd`}>
                                       {year.label} - Odd Semester
                                    </option>
                                    <option value={`${year.value}-even`}>
                                       {year.label} - Even Semester
                                    </option>
                                 </React.Fragment>
                              ))}
                           </select>
                           <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                              <ChevronDown className="h-5 w-5 text-gray-400" />
                           </div>
                        </div>
                        {selectedYear && (
                           <div className="mt-2 p-2 bg-blue-50 rounded-md">
                              <p className="text-sm text-blue-700">
                                 Selected: <span className="font-medium">{selectedYear.replace('-', ' ').toUpperCase()}</span>
                              </p>
                           </div>
                        )}
                     </div>

                     {/* Semester Dropdown */}
                     <div className="space-y-2">
                        <label htmlFor="semester" className="block text-sm font-medium text-gray-700 mb-3">
                           Semester
                        </label>
                        <div className="relative">
                           <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <BookOpen className="h-5 w-5 text-gray-400" />
                           </div>
                           <select
                              id="semester"
                              value={selectedSemester}
                              onChange={(e) => setSelectedSemester(e.target.value)}
                              disabled={!selectedYear}
                              className={`w-full pl-10 pr-10 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 appearance-none bg-white ${
                                 !selectedYear 
                                    ? 'border-gray-200 text-gray-400 bg-gray-50 cursor-not-allowed' 
                                    : 'border-gray-300 text-gray-900'
                              }`}
                           >
                              <option value="">
                                 {!selectedYear ? 'Select Academic Year First' : 'Select Semester'}
                              </option>
                              {semesterOptions.map(semester => (
                                 <option key={semester.value} value={semester.value}>
                                    {semester.label}
                                 </option>
                              ))}
                           </select>
                           <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                              <ChevronDown className="h-5 w-5 text-gray-400" />
                           </div>
                        </div>
                        {selectedSemester && (
                           <div className="mt-2 p-2 bg-green-50 rounded-md">
                              <p className="text-sm text-green-700">
                                 Selected: <span className="font-medium">Semester {selectedSemester}</span>
                              </p>
                           </div>
                        )}
                     </div>
                  </div>

                  {/* Current Selection Summary */}
                  {selectedYear && selectedSemester && (
                     <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                        <h3 className="text-lg font-semibold text-blue-900 mb-2">Current Configuration</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                           <div>
                              <span className="text-blue-700 font-medium">Academic Year:</span>
                              <span className="ml-2 text-blue-900">
                                 {selectedYear.split('-').slice(0, 2).join('-')}
                              </span>
                           </div>
                           <div>
                              <span className="text-blue-700 font-medium">Session Type:</span>
                              <span className="ml-2 text-blue-900 capitalize">
                                 {selectedYear.includes('odd') ? 'Odd Semester' : 'Even Semester'}
                              </span>
                           </div>
                           <div>
                              <span className="text-blue-700 font-medium">Current Semester:</span>
                              <span className="ml-2 text-blue-900">Semester {selectedSemester}</span>
                           </div>
                           <div>
                              <span className="text-blue-700 font-medium">Status:</span>
                              <span className="ml-2 text-green-600 font-medium">Active</span>
                           </div>
                        </div>
                     </div>
                  )}

                  {/* Action Buttons */}
                  <div className="mt-8 flex justify-end space-x-4">
                     <button
                        onClick={() => {
                           setSelectedYear('');
                           setSelectedSemester('');
                        }}
                        className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition duration-200 font-medium"
                     >
                        Reset
                     </button>
                     <button
                        disabled={!selectedYear || !selectedSemester}
                        className={`px-6 py-2 rounded-lg font-medium transition duration-200 ${
                           selectedYear && selectedSemester
                              ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-md'
                              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }`}
                     >
                        Save Configuration
                     </button>
                  </div>
               </div>
            </div>

            {/* Info Card */}
            <div className="mt-6 bg-amber-50 border border-amber-200 rounded-lg p-4">
               <div className="flex items-start">
                  <div className="flex-shrink-0">
                     <svg className="h-5 w-5 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                     </svg>
                  </div>
                  <div className="ml-3">
                     <h3 className="text-sm font-medium text-amber-800">Important Note</h3>
                     <p className="mt-1 text-sm text-amber-700">
                        Changing the academic session configuration will affect all examination schedules and student records. 
                        Please ensure all current examinations are completed before making changes.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default AdminSetting;
