import React from 'react';
import { BookOpen, Users, Award, Plus, Edit, Eye, Clock, User, Settings } from 'lucide-react';
import { useSelector } from 'react-redux';

const SubjectCard = ({ subjectData, onAddStudents, onEditStudents, onViewStudents, onManageSubject }) => {
   const { subject, roles, departments } = subjectData;
   const { currentYear, selectedYearObject } = useSelector((state) => state.auth);

   // Check if current year and selected year are the same
   const isCurrentYear = currentYear && selectedYearObject &&
      currentYear.id === selectedYearObject.id;

   const getRoleBadgeColor = (role) => {
      switch (role) {
         case 'SubjectCoordinator':
            return 'bg-blue-100 text-blue-700';
         case 'Faculty':
            return 'bg-green-100 text-green-700';
         default:
            return 'bg-gray-100 text-gray-700';
      }
   };

   const getDepartmentBadges = () => {
      const departments = [];
      if (subject.dep_CSE) departments.push('DCS');
      if (subject.dep_CE) departments.push('DCE');
      if (subject.dep_IT) departments.push('DIT');
      return departments;
   };

   return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200 p-4">
         {/* Header */}
         <div className="flex items-start justify-between mb-3">
            <div className="flex-1 min-w-0">
               <div className="flex items-center gap-2 mb-1">
                  <BookOpen className="h-4 w-4 text-blue-600 flex-shrink-0" />
                  <h3 className="text-lg font-semibold text-gray-900 truncate">
                     {subject.name}
                  </h3>
               </div>
               <p className="text-sm text-gray-500 font-mono">{subject.code}</p>
            </div>

            {/* Role Badge */}
            <div className="flex-shrink-0">
               {roles.includes('SubjectCoordinator') ? (
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                     <Award className="w-3 h-3 mr-1" />
                     Coordinator
                  </span>
               ) : (
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                     <User className="w-3 h-3 mr-1" />
                     Faculty
                  </span>
               )}
            </div>
         </div>

         {/* Info Row */}
         <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-4 text-sm text-gray-600">
               <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  <span>Sem {subject.semester}</span>
               </div>
               <div className="flex items-center gap-1">
                  <Users className="h-3 w-3" />
                  <span>{subject._count?.students || 0}</span>
               </div>
            </div>
         </div>

         {/* Department Information */}
         <div className="mb-3 space-y-2">
            {/* Subject Available Departments */}
            <div>
               <div className="text-xs font-medium text-gray-500 mb-1">Subject Available In:</div>
               <div className="flex gap-1 flex-wrap">
                  {getDepartmentBadges().map(dept => (
                     <span
                        key={dept}
                        className="px-2 py-1 text-xs font-medium rounded bg-blue-100 text-blue-700"
                     >
                        {dept}
                     </span>
                  ))}
               </div>
            </div>

            {/* Faculty Assigned Departments */}
            {departments && departments.length > 0 && (
               <div>
                  <div className="text-xs font-medium text-gray-500 mb-1">You are Faculty in:</div>
                  <div className="flex gap-1 flex-wrap">
                     {departments.map(dept => (
                        <span
                           key={dept}
                           className="px-2 py-1 text-xs font-medium rounded bg-green-100 text-green-700"
                        >
                           {dept}
                        </span>
                     ))}
                  </div>
               </div>
            )}
         </div>

         {/* Academic Details - Compact */}
         <div className="mb-3 p-3 bg-gray-50 rounded-lg">
            <div className="grid grid-cols-2 gap-3 text-xs">
               {/* Theory */}
               <div className="space-y-1">
                  <div className="font-medium text-blue-700">Theory</div>
                  <div className="text-gray-600">
                     {subject.theory_hour || 0}h • {subject.theory_credite || 0}cr
                  </div>
                  <div className="text-gray-500">
                     Int: {subject.theory_int_marks || 0} | Ext: {subject.theory_ext_marks || 0}
                  </div>
               </div>

               {/* Practical */}
               <div className="space-y-1">
                  <div className="font-medium text-green-700">Practical</div>
                  <div className="text-gray-600">
                     {subject.practical_hour || 0}h • {subject.practical_credite || 0}cr
                  </div>
                  <div className="text-gray-500">
                     Int: {subject.practical_int_marks || 0} | Ext: {subject.practical_ext_marks || 0}
                  </div>
               </div>
            </div>
         </div>

         {/* Actions */}
         <div className="space-y-2">
            {/* First row - Status and student management */}
            <div className="flex items-center justify-between pt-3 border-t border-gray-100">
               {/* Status */}
               <div className={`px-2 py-1 rounded-full text-xs font-medium ${subject.hasStudents
                     ? 'bg-green-100 text-green-700'
                     : 'bg-yellow-100 text-yellow-700'
                  }`}>
                  {subject.hasStudents ? 'Active' : 'No Students'}
               </div>

               {/* Student Management Buttons */}
               <div className="flex items-center gap-1">
                  {roles.includes('SubjectCoordinator') ? (
                     !subject.hasStudents ? (
                        <button
                           onClick={() => onAddStudents(subject)}
                           disabled={!isCurrentYear}
                           className={`inline-flex items-center px-3 py-1.5 text-xs font-medium rounded transition-colors ${isCurrentYear
                                 ? 'bg-blue-600 hover:bg-blue-700 text-white'
                                 : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                              }`}
                           title={!isCurrentYear ? 'Only available for current academic year' : ''}
                        >
                           <Plus className="w-3 h-3 mr-1" />
                           Add
                        </button>
                     ) : (
                        <>
                           <button
                              onClick={() => onViewStudents(subject)}
                              className="inline-flex items-center px-2 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-medium rounded transition-colors"
                           >
                              <Eye className="w-3 h-3 mr-1" />
                              View
                           </button>
                           <button
                              onClick={() => onEditStudents(subject)}
                              disabled={!isCurrentYear}
                              className={`inline-flex items-center px-2 py-1.5 text-xs font-medium rounded transition-colors ${isCurrentYear
                                    ? 'bg-green-600 hover:bg-green-700 text-white'
                                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                 }`}
                              title={!isCurrentYear ? 'Only available for current academic year' : ''}
                           >
                              <Edit className="w-3 h-3 mr-1" />
                              Edit
                           </button>
                        </>
                     )
                  ) : (
                     subject.hasStudents && (
                        <button
                           onClick={() => onViewStudents(subject)}
                           className="inline-flex items-center px-2 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-medium rounded transition-colors"
                        >
                           <Eye className="w-3 h-3 mr-1" />
                           View
                        </button>
                     )
                  )}
               </div>
            </div>

            {/* Second row - Manage Subject button (always available) */}
            <div className="flex justify-center">
               <button
                  onClick={() => onManageSubject(subject)}
                  className="inline-flex items-center px-3 py-1.5 bg-purple-600 hover:bg-purple-700 text-white text-xs font-medium rounded transition-colors w-full justify-center"
               >
                  <Settings className="w-3 h-3 mr-1" />
                  Manage Subject
               </button>
            </div>
         </div>
      </div>
   );
};

export default SubjectCard;
