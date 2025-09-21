import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Home, ChevronRight, Users, Save, Edit3, BookOpen, GraduationCap, Settings } from 'lucide-react';

const ManageSubject = () => {
   const navigate = useNavigate();
   const location = useLocation();
   const { subjectId } = useParams();
   const { user } = useSelector((state) => state.auth);

   // Get subject data from location state or fetch from API
   const [subjectData, setSubjectData] = useState(location.state?.subjectData || null);

   // Extract roles from the subject data structure
   const roles = subjectData?.roles || [];

   // Check if user is Subject Coordinator based on the roles array
   const isSubjectCoordinator = user.id == subjectData?.coordinatorId;

   useEffect(() => {
      // If no subject data in state, you would fetch it using the subjectId
      if (!subjectData && subjectId) {
         // TODO: Fetch subject data from API using subjectId
         console.log('Fetching subject data for ID:', subjectId);
      }
   }, [subjectId, subjectData]);

   const handleBack = () => {
      navigate('/my-subjects');
   };

   const handleManageFaculty = () => {
      // Navigate to faculty management page
      navigate(`/manage-faculty/${subjectId}`, {
         state: {
            subject: subjectData?.subject || subjectData,
            subjectData
         }
      });
   };

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

   const subject = subjectData?.subject || subjectData;

   // Extract departments from the boolean flags
   const getDepartments = () => {
      const depts = [];
      if (subject?.dep_IT) depts.push('IT');
      if (subject?.dep_CE) depts.push('CE');
      if (subject?.dep_CSE) depts.push('CSE');
      return depts;
   };

   return (
      <div className="min-h-screen bg-gray-50">
         {/* Main Content */}
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className='flex items-center justify-between mb-8'>
               {/* Breadcrumb Navigation */}
               <nav className="flex items-center space-x-2 mt-4 text-sm text-gray-600 mb-6">
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
               {/* Manage Faculty Button */}
               {isSubjectCoordinator && (
                  <button
                     onClick={handleManageFaculty}
                     className="inline-flex items-center px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors shadow-sm"
                  >
                     <Users className="w-5 h-5 mr-2" />
                     Manage Faculty
                  </button>
               )}

            </div>

            {/* Header */}
            <div className="mb-8">
               <div className="flex items-center justify-between mb-4">



               </div>
            </div>

            <div className="space-y-8">

            </div>
         </div>
      </div>
   );
};

export default ManageSubject;