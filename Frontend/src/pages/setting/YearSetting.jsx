import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Calendar, BookOpen, ChevronDown } from 'lucide-react';
import { useGetYearsQuery } from '@/store/api/yearApi';
import { setYearAndSemester } from '@/store/slices/authSlice';

const YearSetting = () => {
   const dispatch = useDispatch();
   const { selectedYearObject: reduxSelectedYearObject, selectedSemester: reduxSelectedSemester } = useSelector((state) => state.auth);
   const [localSelectedYearObject, setLocalSelectedYearObject] = useState(reduxSelectedYearObject || null);
   const [localSelectedSemester, setLocalSelectedSemester] = useState(reduxSelectedSemester || '');
   const { data, isLoading, error } = useGetYearsQuery();
   
   // Only sync with Redux state on component mount, not on every Redux change
   useEffect(() => {
      // This will only run once when component mounts
      // Don't sync during normal operations to keep local and Redux state separate
   }, []); // Empty dependency array

   const academicYears = data?.data || [];

   // Semester options based on odd/even selection
   const getSemesterOptions = (yearObject) => {
      if (!yearObject || !yearObject.year) return [];
      
      if (yearObject.year.includes('odd')) {
         return [
            { value: '1', label: 'Semester 1' },
            { value: '3', label: 'Semester 3' },
            { value: '5', label: 'Semester 5' },
            { value: '7', label: 'Semester 7' }
         ];
      } else if (yearObject.year.includes('even')) {
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
      const selectedYearId = parseInt(e.target.value);
      const selectedYearObj = academicYears.find(year => year.id === selectedYearId);
      
      setLocalSelectedYearObject(selectedYearObj || null);
      setLocalSelectedSemester(''); // Reset semester when year changes
      // Don't update Redux here - only update local state
   };

   const handleSemesterChange = (e) => {
      const semesterValue = e.target.value;
      setLocalSelectedSemester(semesterValue);
      // Don't update Redux here - only update local state
   };

   const handleSaveConfiguration = () => {
      if (localSelectedYearObject && localSelectedSemester) {
         // Update Redux store with selected values
         dispatch(setYearAndSemester({
            yearObject: localSelectedYearObject,
            semester: localSelectedSemester
         }));
         
         // Reset local UI state to clear selections
         setLocalSelectedYearObject(null);
         setLocalSelectedSemester('');
         
         alert('Configuration saved successfully!');
      }
   };

   const handleReset = () => {
      // Only reset local UI state, don't clear Redux store
      setLocalSelectedYearObject(null);
      setLocalSelectedSemester('');
   };

   const handleClearSavedConfiguration = () => {
      // Clear both local state and Redux store
      setLocalSelectedYearObject(null);
      setLocalSelectedSemester('');
      dispatch(setYearAndSemester({ yearObject: null, semester: '' }));
      alert('Saved configuration cleared successfully!');
   };

   const semesterOptions = getSemesterOptions(localSelectedYearObject);

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

            {/* Current Saved Configuration Display */}
            {(reduxSelectedYearObject || reduxSelectedSemester) && (
               <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                     <div className="flex items-center">
                        <div className="flex-shrink-0">
                           <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                           </svg>
                        </div>
                        <div className="ml-3">
                           <h3 className="text-sm font-medium text-green-800">Currently Saved Configuration</h3>
                           <div className="mt-2 text-sm text-green-700">
                              {reduxSelectedYearObject && (
                                 <div>
                                    <p>Academic Year: <span className="font-medium">{reduxSelectedYearObject.year}</span></p>
                                    <p>Year ID: <span className="font-medium">{reduxSelectedYearObject.id}</span></p>
                                    <p>Start Date: <span className="font-medium">{new Date(reduxSelectedYearObject.startDate).toLocaleDateString()}</span></p>
                                    <p>End Date: <span className="font-medium">{new Date(reduxSelectedYearObject.endDate).toLocaleDateString()}</span></p>
                                 </div>
                              )}
                              {reduxSelectedSemester && (
                                 <p>Semester: <span className="font-medium">Semester {reduxSelectedSemester}</span></p>
                              )}
                           </div>
                        </div>
                     </div>
                     <button
                        onClick={handleClearSavedConfiguration}
                        className="px-3 py-1 text-xs bg-red-100 text-red-700 border border-red-300 rounded hover:bg-red-200 transition duration-200"
                     >
                        Clear Saved
                     </button>
                  </div>
               </div>
            )}

            {/* Loading State */}
            {isLoading && (
               <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
                  <p className="mt-2 text-gray-600">Loading academic years...</p>
               </div>
            )}

            {/* Error State */}
            {error && (
               <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                  <div className="flex">
                     <div className="ml-3">
                        <h3 className="text-sm font-medium text-red-800">Error Loading Data</h3>
                        <p className="mt-1 text-sm text-red-700">
                           Failed to load academic years. Please try again later.
                        </p>
                     </div>
                  </div>
               </div>
            )}

            {/* Settings Card */}
            {!isLoading && !error && (
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
                              value={localSelectedYearObject?.id || ''}
                              onChange={handleYearChange}
                              className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 appearance-none bg-white text-gray-900"
                           >
                              <option value="">Select Academic Year & Type</option>
                              {academicYears.map(year => (
                                 <React.Fragment key={year.id}>
                                    <option value={year.id}>
                                       {year.year} 
                                    </option>
                                 </React.Fragment>
                              ))}
                           </select>
                           <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                              <ChevronDown className="h-5 w-5 text-gray-400" />
                           </div>
                        </div>
                        {localSelectedYearObject && (
                           <div className="mt-2 p-2 bg-blue-50 rounded-md">
                              <p className="text-sm text-blue-700">
                                 Selected: <span className="font-medium">{localSelectedYearObject.year.replace('-', ' ').toUpperCase()}</span>
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
                              value={localSelectedSemester}
                              onChange={handleSemesterChange}
                              disabled={!localSelectedYearObject}
                              className={`w-full pl-10 pr-10 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 appearance-none bg-white ${
                                 !localSelectedYearObject 
                                    ? 'border-gray-200 text-gray-400 bg-gray-50 cursor-not-allowed' 
                                    : 'border-gray-300 text-gray-900'
                              }`}
                           >
                              <option value="">
                                 {!localSelectedYearObject ? 'Select Academic Year First' : 'Select Semester'}
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
                        {localSelectedSemester && (
                           <div className="mt-2 p-2 bg-green-50 rounded-md">
                              <p className="text-sm text-green-700">
                                 Selected: <span className="font-medium">Semester {localSelectedSemester}</span>
                              </p>
                           </div>
                        )}
                     </div>
                  </div>

                  {/* Current Selection Summary */}
                  {localSelectedYearObject && localSelectedSemester && (
                     <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                        <h3 className="text-lg font-semibold text-blue-900 mb-2">Current Configuration</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                           <div>
                              <span className="text-blue-700 font-medium">Academic Year:</span>
                              <span className="ml-2 text-blue-900">
                                 {localSelectedYearObject.year.split('-').slice(0, 2).join('-')}
                              </span>
                           </div>
                           <div>
                              <span className="text-blue-700 font-medium">Session Type:</span>
                              <span className="ml-2 text-blue-900 capitalize">
                                 {localSelectedYearObject.year.includes('odd') ? 'Odd Semester' : 'Even Semester'}
                              </span>
                           </div>
                           <div>
                              <span className="text-blue-700 font-medium">Current Semester:</span>
                              <span className="ml-2 text-blue-900">Semester {localSelectedSemester}</span>
                           </div>
                           <div>
                              <span className="text-blue-700 font-medium">Status:</span>
                              <span className="ml-2 text-green-600 font-medium">Active</span>
                           </div>
                           <div>
                              <span className="text-blue-700 font-medium">Start Date:</span>
                              <span className="ml-2 text-blue-900">{new Date(localSelectedYearObject.startDate).toLocaleDateString()}</span>
                           </div>
                           <div>
                              <span className="text-blue-700 font-medium">End Date:</span>
                              <span className="ml-2 text-blue-900">{new Date(localSelectedYearObject.endDate).toLocaleDateString()}</span>
                           </div>
                        </div>
                     </div>
                  )}

                  {/* Action Buttons */}
                  <div className="mt-8 flex justify-end space-x-4">
                     <button
                        onClick={handleReset}
                        className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition duration-200 font-medium"
                     >
                        Reset
                     </button>
                     <button
                        onClick={handleSaveConfiguration}
                        disabled={!localSelectedYearObject || !localSelectedSemester}
                        className={`px-6 py-2 rounded-lg font-medium transition duration-200 ${
                           localSelectedYearObject && localSelectedSemester
                              ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-md'
                              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }`}
                     >
                        Save Configuration
                     </button>
                  </div>
               </div>
            </div>
            )}

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

export default YearSetting;
