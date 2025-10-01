import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { 
  Home, 
  ChevronRight, 
  Users, 
  BookOpen, 
  Trophy,
  Plus,
  Filter,
  Search,
  Settings,
  GraduationCap,
  Book,
  Calendar,
  User,
  Building2,
  Hash
} from 'lucide-react';
import { useGetExamsBySubjectQuery, useDeleteExamMutation } from '../../store/api/examApi';
import ExamCard from '../../components/ExamCard';
import { toast } from 'sonner';

const ManageSubject = () => {
   const navigate = useNavigate();
   const location = useLocation();
   const { subjectId } = useParams();
   const { user } = useSelector((state) => state.auth);

   // Get subject data from location state or fetch from API
   const [subjectData, setSubjectData] = useState(location.state?.subjectData || null);
   const [searchTerm, setSearchTerm] = useState('');
   const [statusFilter, setStatusFilter] = useState('all');

   // API hooks
   const { data: examsData, isLoading: examsLoading } = useGetExamsBySubjectQuery(subjectId);
   const [deleteExam, { isLoading: isDeleting }] = useDeleteExamMutation();

   // Extract roles from the subject data structure
   const roles = subjectData?.roles || [];

   // Check if user is Subject Coordinator based on the roles array
   const isSubjectCoordinator = user.id == subjectData?.coordinatorId;

   // Get subject info
   const subject = subjectData?.subject || subjectData;

   const exams = examsData?.data || [];

   // Get faculty's exams (exams assigned to this faculty)
   const facultyExams = exams.filter(exam => exam.facultyId === user.id);

   // Filter exams based on search and status
   const getFilteredExams = () => {
     let filtered = facultyExams;

     // Apply search filter
     if (searchTerm) {
       const searchLower = searchTerm.toLowerCase();
       filtered = filtered.filter(exam =>
         exam.name.toLowerCase().includes(searchLower) ||
         exam.department.toLowerCase().includes(searchLower) ||
         exam.division.toLowerCase().includes(searchLower) ||
         exam.batch.toLowerCase().includes(searchLower)
       );
     }

     // Apply status filter
     if (statusFilter !== 'all') {
       filtered = filtered.filter(exam => exam.status === statusFilter);
     }

     return filtered;
   };

   const filteredExams = getFilteredExams();

   // Extract departments from the boolean flags
   const getDepartments = () => {
      const depts = [];
      if (subject?.dep_IT) depts.push('IT');
      if (subject?.dep_CE) depts.push('CE');
      if (subject?.dep_CSE) depts.push('CSE');
      return depts;
   };

   // Handler functions
   const handleAssignStudents = (exam) => {
     navigate(`/assign-students-to-exam/${exam.id}`, {
       state: {
         exam,
         subject,
         subjectData
       }
     });
   };

   const handleEditExam = (exam) => {
     navigate(`/manage-exam/${subjectId}`, {
       state: {
         subject,
         subjectData,
         editExam: exam
       }
     });
   };

   const handleDeleteExam = async (exam) => {
     if (!confirm(`Are you sure you want to delete the exam "${exam.name}"?`)) {
       return;
     }

     try {
       await deleteExam(exam.id).unwrap();
       toast.success('Exam deleted successfully!');
     } catch (error) {
       console.error('Error deleting exam:', error);
       toast.error('Failed to delete exam');
     }
   };

   const handleViewExam = (exam) => {
     navigate(`/view-exam/${exam.id}`, {
       state: {
         exam,
         subject,
         subjectData
       }
     });
   };

   const handleManageIndividualExam = (exam) => {
     navigate(`/manage-individual-exam/${exam.id}`, {
       state: {
         exam,
         subject,
         subjectData
       }
     });
   };

   const handleManageExam = () => {
      navigate(`/manage-exam/${subjectId}`, {
         state: {
            subject: subjectData?.subject || subjectData,
            subjectData
         }
      });
   };

   const handleManageFaculty = () => {
      navigate(`/manage-faculty/${subjectId}`, {
         state: {
            subject: subjectData?.subject || subjectData,
            subjectData
         }
      });
   };

   useEffect(() => {
      // If no subject data in state, you would fetch it using the subjectId
      if (!subjectData && subjectId) {
         console.log('Fetching subject data for ID:', subjectId);
      }
   }, [subjectId, subjectData]);

   if (!subjectData) {
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
            
            {/* Header with Breadcrumb and Action Buttons */}
            <div className="flex items-center justify-between mb-8">
               {/* Breadcrumb Navigation */}
               <nav className="flex items-center space-x-2 text-sm text-gray-600">
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
                  <span className="text-gray-900 font-medium">Manage Subject</span>
               </nav>

               {/* Action Buttons */}
               {isSubjectCoordinator && (
                  <div className="flex items-center gap-3">
                     {/* Manage Faculty Button */}
                     <button
                        onClick={handleManageFaculty}
                        className="inline-flex items-center px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors shadow-sm"
                     >
                        <Users className="w-5 h-5 mr-2" />
                        Manage Faculty
                     </button>

                     {/* Manage Exam Button */}
                     <button
                        onClick={handleManageExam}
                        className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-sm"
                     >
                        <BookOpen className="w-5 h-5 mr-2" />
                        Manage Exam
                     </button>
                  </div>
               )}
            </div>
 

            {/* Search and Filters */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
               <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-gray-900 flex items-center">
                     <Trophy className="w-5 h-5 mr-2 text-blue-600" />
                     Your Exams ({filteredExams.length})
                  </h2>
               </div>

               <div className="flex flex-col md:flex-row gap-4">
                  {/* Search */}
                  <div className="flex-1 relative">
                     <Search className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                     <input
                        type="text"
                        placeholder="Search exams by name, department, division, or batch..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                     />
                  </div>

                  {/* Status Filter */}
                  <div className="relative">
                     <Filter className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                     <select
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                        className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white min-w-[150px]"
                     >
                        <option value="all">All Status</option>
                        <option value="Pending">Pending</option>
                        <option value="Taken">Taken</option>
                     </select>
                  </div>
               </div>
            </div>

            {/* Exams Grid */}
            {examsLoading ? (
               <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                  <p className="mt-4 text-gray-600">Loading exams...</p>
               </div>
            ) : filteredExams.length === 0 ? (
               <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
                  <Trophy className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                     {searchTerm || statusFilter !== 'all' ? 'No exams match your filters' : 'No exams assigned yet'}
                  </h3>
                  <p className="text-gray-500 mb-6">
                     {searchTerm || statusFilter !== 'all' 
                        ? 'Try adjusting your search or filter criteria' 
                        : 'You don\'t have any exams assigned for this subject yet.'}
                  </p>
                  {(!searchTerm && statusFilter === 'all') && isSubjectCoordinator && (
                     <button
                        onClick={handleManageExam}
                        className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                     >
                        <Plus className="w-5 h-5 mr-2" />
                        Create First Exam
                     </button>
                  )}
               </div>
            ) : (
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredExams.map((exam) => (
                     <ExamCard
                        key={exam.id}
                        exam={exam}
                        onAssignStudents={handleAssignStudents}
                        onEditExam={handleEditExam}
                        onDeleteExam={handleDeleteExam}
                        onViewExam={handleViewExam}
                        onManageExam={handleManageIndividualExam}
                        showActions={true}
                     />
                  ))}
               </div>
            )}
         </div>
      </div>
   );
};

export default ManageSubject;