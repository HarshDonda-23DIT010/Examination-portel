import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { 
   ArrowLeft, 
   BookOpen, 
   Users, 
   Calendar, 
   Clock, 
   Award, 
   BarChart3, 
   Eye, 
   Plus,
   FileText,
   TrendingUp,
   CheckCircle,
   XCircle,
   AlertCircle
} from 'lucide-react';
import { useSelector } from 'react-redux';
import { toast } from 'sonner';
import { useGetExamsBySubjectQuery } from '../../store/api/examApi';

const SubjectDetails = () => {
   const { subjectId } = useParams();
   const location = useLocation();
   const navigate = useNavigate();
   const { user, selectedYearObject, currentYear } = useSelector((state) => state.auth);
   
   const { subject, yearId, semester } = location.state || {};
   
   // Real API calls
   const { 
      data: examsData, 
      isLoading: isLoadingExams, 
      error: examsError 
   } = useGetExamsBySubjectQuery(
      { subjectId }, 
      { skip: !subjectId }
   );

   // Check if current year matches selected year for access control
   // For admin panel, allow access if currentYear is not set yet
   const isCurrentYear = !currentYear || selectedYearObject?.id === currentYear?.id;
   const canManageExams = isCurrentYear;

   const exams = examsData?.data || [];
   const currentSubject = subject;

   const handleViewAnalysis = (exam) => {
      navigate(`/exam-analysis/${exam.id}`, {
         state: {
            exam: exam,
            subject: currentSubject
         }
      });
   };

   const getStatusBadge = (status) => {
      const statusConfig = {
         'DRAFT': { color: 'bg-gray-100 text-gray-800', icon: FileText },
         'SCHEDULED': { color: 'bg-blue-100 text-blue-800', icon: Calendar },
         'ACTIVE': { color: 'bg-green-100 text-green-800', icon: CheckCircle },
         'COMPLETED': { color: 'bg-purple-100 text-purple-800', icon: CheckCircle },
         'CANCELLED': { color: 'bg-red-100 text-red-800', icon: XCircle }
      };
      
      const config = statusConfig[status] || statusConfig['DRAFT'];
      const IconComponent = config.icon;
      
      return (
         <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${config.color}`}>
            <IconComponent className="h-3 w-3 mr-1" />
            {status}
         </span>
      );
   };

   const canViewAnalysis = (exam) => {
      return exam.status === 'COMPLETED' || exam.status === 'ACTIVE';
   };

   // Loading state
   if (isLoadingExams) {
      return (
         <div className="flex items-center justify-center min-h-screen">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
         </div>
      );
   }

   if (!subject && !currentSubject) {
      return (
         <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="text-center">
               <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
               <h2 className="text-xl font-semibold text-gray-900 mb-2">Subject not found</h2>
               <p className="text-gray-600 mb-4">The subject information could not be loaded.</p>
               <button
                  onClick={() => navigate('/add-subjects')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
               >
                  Back to Subjects
               </button>
            </div>
         </div>
      );
   }

   return (
      <div className="min-h-screen bg-gray-50 p-4 lg:p-6">
         <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
               <div className="flex items-center space-x-4">
                  <button
                     onClick={() => navigate('/add-subjects')}
                     className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                     <ArrowLeft className="h-5 w-5 text-gray-600" />
                  </button>
                  <div>
                     <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
                        {subject.name}
                     </h1>
                     <p className="text-gray-600 mt-1">
                        {subject.code} • Semester {semester}
                     </p>
                  </div>
               </div>
            </div>

            {/* Subject Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
               {/* Subject Type */}
               <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center">
                     <div className="p-3 bg-blue-100 rounded-lg">
                        <BookOpen className="h-6 w-6 text-blue-600" />
                     </div>
                     <div className="ml-4">
                        <p className="text-sm font-medium text-gray-600">Subject Type</p>
                        <p className="text-lg font-semibold text-gray-900 capitalize">
                           {subject.type === 'universityElective' ? 'Univ. Elective' : subject.type}
                        </p>
                     </div>
                  </div>
               </div>

               {/* Coordinator */}
               <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center">
                     <div className="p-3 bg-green-100 rounded-lg">
                        <Users className="h-6 w-6 text-green-600" />
                     </div>
                     <div className="ml-4">
                        <p className="text-sm font-medium text-gray-600">Coordinator</p>
                        <p className="text-lg font-semibold text-gray-900">
                           {subject.subjectCoordinator?.name || 'Not Assigned'}
                        </p>
                     </div>
                  </div>
               </div>

               {/* Theory Credits */}
               <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center">
                     <div className="p-3 bg-purple-100 rounded-lg">
                        <Award className="h-6 w-6 text-purple-600" />
                     </div>
                     <div className="ml-4">
                        <p className="text-sm font-medium text-gray-600">Theory Credits</p>
                        <p className="text-lg font-semibold text-gray-900">
                           {subject.theory_credite || 0}
                        </p>
                     </div>
                  </div>
               </div>

               {/* Practical Credits */}
               <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center">
                     <div className="p-3 bg-orange-100 rounded-lg">
                        <Clock className="h-6 w-6 text-orange-600" />
                     </div>
                     <div className="ml-4">
                        <p className="text-sm font-medium text-gray-600">Practical Credits</p>
                        <p className="text-lg font-semibold text-gray-900">
                           {subject.practical_credite || 0}
                        </p>
                     </div>
                  </div>
               </div>
            </div>

            {/* Exams Section */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
               <div className="px-6 py-4 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                     <div>
                        <h2 className="text-lg font-semibold text-gray-900">Exams</h2>
                        <p className="text-sm text-gray-600">
                           All exams for this subject ({exams.length} total)
                        </p>
                     </div>
                  </div>
               </div>

               <div className="overflow-x-auto">
                  {isLoadingExams ? (
                     <div className="flex justify-center items-center py-12">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                     </div>
                  ) : exams.length === 0 ? (
                     <div className="text-center py-12">
                        <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-500 mb-2">No exams found</p>
                        <p className="text-sm text-gray-400">No exams have been created for this subject yet.</p>
                     </div>
                  ) : (
                     <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                           <tr>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                 Exam Name
                              </th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                 Date
                              </th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                 Division
                              </th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                 Batch
                              </th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                 Total Marks
                              </th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                 Status
                              </th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                 Actions
                              </th>
                           </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                           {exams.map((exam, index) => (
                              <tr key={exam.id} className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-blue-50 transition-colors duration-150`}>
                                 <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm font-medium text-gray-900">{exam.name}</div>
                                    <div className="text-sm text-gray-500">{exam.department}</div>
                                 </td>
                                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    {exam.date ? new Date(exam.date).toLocaleDateString() : 'Not Set'}
                                 </td>
                                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    {exam.division || 'All'}
                                 </td>
                                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    {exam.batch === 'NONE' ? 'All Batches' : `Batch ${exam.batch}`}
                                 </td>
                                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    {exam.totalMarks}
                                 </td>
                                 <td className="px-6 py-4 whitespace-nowrap">
                                    {getStatusBadge(exam.status)}
                                 </td>
                                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    <div className="flex items-center space-x-2">
                                       {canViewAnalysis(exam) && (
                                          <button
                                             onClick={() => handleViewAnalysis(exam)}
                                             className="p-2 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-lg transition-colors"
                                             title="View Exam Analysis"
                                          >
                                             <BarChart3 className="h-4 w-4" />
                                          </button>
                                       )}
                                       <button
                                          onClick={() => navigate(`/exam-analysis/${exam.id}`, {
                                             state: {
                                                exam: exam,
                                                subject: subject
                                             }
                                          })}
                                          className="p-2 text-green-600 hover:text-green-800 hover:bg-green-50 rounded-lg transition-colors"
                                          title="View Exam Details"
                                       >
                                          <Eye className="h-4 w-4" />
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

            {/* Subject Details */}
            <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
               <h3 className="text-lg font-semibold text-gray-900 mb-4">Subject Details</h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                     <h4 className="text-sm font-medium text-gray-700 mb-3">Hours & Credits</h4>
                     <div className="space-y-2">
                        <div className="flex justify-between">
                           <span className="text-sm text-gray-600">Theory Hours:</span>
                           <span className="text-sm font-medium text-gray-900">{subject.theory_hour || 0}</span>
                        </div>
                        <div className="flex justify-between">
                           <span className="text-sm text-gray-600">Practical Hours:</span>
                           <span className="text-sm font-medium text-gray-900">{subject.practical_hour || 0}</span>
                        </div>
                        <div className="flex justify-between">
                           <span className="text-sm text-gray-600">Theory Credits:</span>
                           <span className="text-sm font-medium text-gray-900">{subject.theory_credite || 0}</span>
                        </div>
                        <div className="flex justify-between">
                           <span className="text-sm text-gray-600">Practical Credits:</span>
                           <span className="text-sm font-medium text-gray-900">{subject.practical_credite || 0}</span>
                        </div>
                     </div>
                  </div>
                  <div>
                     <h4 className="text-sm font-medium text-gray-700 mb-3">Marks Distribution</h4>
                     <div className="space-y-2">
                        <div className="flex justify-between">
                           <span className="text-sm text-gray-600">Theory Internal:</span>
                           <span className="text-sm font-medium text-gray-900">{subject.theory_int_marks || 0}</span>
                        </div>
                        <div className="flex justify-between">
                           <span className="text-sm text-gray-600">Theory External:</span>
                           <span className="text-sm font-medium text-gray-900">{subject.theory_ext_marks || 0}</span>
                        </div>
                        <div className="flex justify-between">
                           <span className="text-sm text-gray-600">Practical Internal:</span>
                           <span className="text-sm font-medium text-gray-900">{subject.practical_int_marks || 0}</span>
                        </div>
                        <div className="flex justify-between">
                           <span className="text-sm text-gray-600">Practical External:</span>
                           <span className="text-sm font-medium text-gray-900">{subject.practical_ext_marks || 0}</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default SubjectDetails;