import React from 'react';
import { Book, User, Clock, BookOpen, Users, Award, Briefcase, Plus, Edit, Eye, GraduationCap } from 'lucide-react';

const SubjectCard = ({ subjectData, onAddStudents, onEditStudents, onViewStudents }) => {
   const { subject, roles } = subjectData;

   const getRoleBadgeColor = (role) => {
      switch (role) {
         case 'SubjectCoordinator':
            return 'bg-blue-100 text-blue-800 border-blue-200';
         case 'Faculty':
            return 'bg-green-100 text-green-800 border-green-200';
         default:
            return 'bg-gray-100 text-gray-800 border-gray-200';
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
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden">
         {/* Header with gradient background */}
         <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 border-b border-gray-100">
            <div className="flex items-start justify-between mb-3">
               <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                     <BookOpen className="h-5 w-5 text-blue-600" />
                     <h3 className="text-xl font-bold text-gray-900">
                        {subject.name}
                     </h3>
                     <p className="text-sm text-gray-600 font-mono bg-white px-2 py-1 rounded-md inline-block">
                        {subject.code}
                     </p>
                  </div>
                  {/* Subject Type and Semester */}
                  <div className="flex items-center gap-4">
                     <div className="flex items-center text-sm text-gray-700 bg-white px-3 py-1 rounded-lg">
                        <Briefcase className="w-4 h-4 mr-2 text-blue-600" />
                        <span className="capitalize font-medium">{subject.type?.toLowerCase()}</span>
                     </div>
                     <div className="flex items-center text-sm text-gray-700 bg-white px-3 py-1 rounded-lg">
                        <Clock className="w-4 h-4 mr-2 text-blue-600" />
                        <span className="font-medium">Semester {subject.semester}</span>
                     </div>
                  </div>
               </div>

               {/* Role Badges */}
               <div className="flex flex-wrap gap-2">
                  {[...new Set(roles)]
                     .filter(role => ['SubjectCoordinator', 'Faculty'].includes(role))
                     .map((role) => (
                        <span
                           key={role}
                           className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border-2 ${getRoleBadgeColor(role)}`}
                        >
                           {role === 'SubjectCoordinator' ? (
                              <>
                                 <Award className="w-3 h-3 mr-1" />
                                 Coordinator
                              </>
                           ) : (
                              <>
                                 <User className="w-3 h-3 mr-1" />
                                 Faculty
                              </>
                           )}
                        </span>
                     ))}
               </div>
            </div>


         </div>

         {/* Main Content */}
         <div className="p-6">
            {/* Department Info */}
            <div className="mb-6">
               <div className="flex items-center gap-2 mb-3">
                  <GraduationCap className="h-4 w-4 text-gray-600" />
                  <p className="text-sm font-medium text-gray-700">Departments</p>
               </div>
               <div className="flex flex-wrap gap-2">
                  {getDepartmentBadges().map(dept => (
                     <span
                        key={dept}
                        className="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 border border-purple-200"
                     >
                        {dept}
                     </span>
                  ))}
               </div>
            </div>
            {/* Academic Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
               {/* Theory Section */}
               <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                  <h4 className="text-sm font-semibold text-blue-900 mb-2 flex items-center">
                     <Book className="w-4 h-4 mr-2" />
                     Theory
                  </h4>
                  <div className="space-y-1">
                     <p className="text-sm text-blue-800">
                        <span className="font-medium">{subject.theory_hour || 0}</span> hours •
                        <span className="font-medium"> {subject.theory_credite || 0}</span> credits
                     </p>
                     <p className="text-xs text-blue-700">
                        Internal: <span className="font-medium">{subject.theory_int_marks || 0}</span> •
                        External: <span className="font-medium">{subject.theory_ext_marks || 0}</span>
                     </p>
                  </div>
               </div>

               {/* Practical Section */}
               <div className="bg-green-50 rounded-lg p-4 border border-green-100">
                  <h4 className="text-sm font-semibold text-green-900 mb-2 flex items-center">
                     <Briefcase className="w-4 h-4 mr-2" />
                     Practical
                  </h4>
                  <div className="space-y-1">
                     <p className="text-sm text-green-800">
                        <span className="font-medium">{subject.practical_hour || 0}</span> hours •
                        <span className="font-medium"> {subject.practical_credite || 0}</span> credits
                     </p>
                     <p className="text-xs text-green-700">
                        Internal: <span className="font-medium">{subject.practical_int_marks || 0}</span> •
                        External: <span className="font-medium">{subject.practical_ext_marks || 0}</span>
                     </p>
                  </div>
               </div>
            </div>


            {/* Student Status and Actions */}
            <div className="border-t pt-4">
               <div className="flex items-center justify-between">
                  {/* Student Count */}
                  <div className="flex items-center gap-3">
                     <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-gray-600" />
                        <span className="text-sm font-medium text-gray-700">
                           {subject._count?.students || 0} Students
                        </span>
                     </div>
                     {/* Status Indicator */}
                     <div className={`px-2 py-1 rounded-full text-xs font-medium ${subject.hasStudents
                        ? 'bg-green-100 text-green-800 border border-green-200'
                        : 'bg-yellow-100 text-yellow-800 border border-yellow-200'
                        }`}>
                        {subject.hasStudents ? 'Active' : 'No Students'}
                     </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-2">
                     {/* Only show action buttons if user is SubjectCoordinator */}
                     {roles.includes('SubjectCoordinator') ? (
                        !subject.hasStudents ? (
                           <button
                              onClick={() => onAddStudents(subject)}
                              className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors duration-200 shadow-sm"
                           >
                              <Plus className="w-4 h-4 mr-2" />
                              Add Students
                           </button>
                        ) : (
                           <div className="flex items-center gap-2">
                              <button
                                 onClick={() => onViewStudents(subject)}
                                 className="inline-flex items-center px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium rounded-lg transition-colors duration-200"
                              >
                                 <Eye className="w-4 h-4 mr-2" />
                                 View
                              </button>
                              <button
                                 onClick={() => onEditStudents(subject)}
                                 className="inline-flex items-center px-3 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg transition-colors duration-200 shadow-sm"
                              >
                                 <Edit className="w-4 h-4 mr-2" />
                                 Edit
                              </button>
                           </div>
                        )
                     ) : (
                        /* Show view button only for Faculty role */
                        subject.hasStudents && (
                           <button
                              onClick={() => onViewStudents(subject)}
                              className="inline-flex items-center px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium rounded-lg transition-colors duration-200"
                           >
                              <Eye className="w-4 h-4 mr-2" />
                              View Students
                           </button>
                        )
                     )}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default SubjectCard;
