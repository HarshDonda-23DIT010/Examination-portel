import React from 'react';
import { 
  Calendar, 
  Trophy, 
  UserPlus, 
  Clock, 
  Building, 
  Hash, 
  Users,
  Edit,
  Trash2,
  Eye,
  Settings,
  BarChart3
} from 'lucide-react';

const ExamCard = ({ 
  exam, 
  onAssignStudents,
  onViewExam,
  onManageExam,
  onViewStudents,
  onEditStudents,
  onAnalyzeExam,
  showActions = true 
}) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getStatusBadgeColor = (status) => {
    switch (status) {
      case 'Pending':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'Taken':
        return 'bg-green-100 text-green-700 border-green-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getDepartmentColor = (department) => {
    switch (department) {
      case 'DCS':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'DIT':
        return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'DCE':
        return 'bg-orange-100 text-orange-700 border-orange-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md hover:border-gray-300 transition-all duration-200 group">
      {/* Card Header */}
      <div className="p-6 pb-4">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Trophy className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {exam.name}
                </h3>
                <div className="flex items-center text-sm text-gray-600 mt-1">
                  <Calendar className="w-4 h-4 mr-1" />
                  {formatDate(exam.date)}
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-end space-y-2">
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getStatusBadgeColor(exam.status)}`}>
              <Clock className="w-3 h-3 mr-1" />
              {exam.status}
            </span>
          </div>
        </div>

        {/* Exam Details Grid */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600 flex items-center">
                <Building className="w-4 h-4 mr-1" />
                Department
              </span>
              <span className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium border ${getDepartmentColor(exam.department)}`}>
                {exam.department}
              </span>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600 flex items-center">
                <Hash className="w-4 h-4 mr-1" />
                Division
              </span>
              <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-indigo-100 text-indigo-700 border border-indigo-200">
                {exam.division}
              </span>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Total Marks</span>
              <span className="font-semibold text-gray-900">{exam.totalMarks}</span>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Batch</span>
              <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-emerald-100 text-emerald-700 border border-emerald-200">
                {exam.batch === 'NONE' ? 'All Batches' : `Batch ${exam.batch}`}
              </span>
            </div>
          </div>
        </div>

        {/* Student Count */}
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center text-sm text-gray-600">
            <Users className="w-4 h-4 mr-2" />
            Assigned Students
          </div>
          <span className="text-lg font-bold text-blue-600">
            {exam._count?.eligibleStudents || 0}
          </span>
        </div>
      </div>

      {/* Card Actions */}
      {showActions&& (
        <div className="px-6 pb-6">
          <div className="grid grid-cols-2 gap-3 mb-3">
            {exam.status == 'Pending' && (<button
              onClick={() => onAssignStudents(exam)}
              className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors"
            >
              <UserPlus className="w-4 h-4 mr-2" />
              Assign Students
            </button>)}
            
            {onManageExam && (
              <button
                onClick={() => onManageExam(exam)}
                className="inline-flex items-center justify-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg transition-colors"
              >
                <Settings className="w-4 h-4 mr-2" />
                Manage
              </button>
            )}
          </div>
          
          {/* Student Management Buttons */}
          <div className="grid grid-cols-2 gap-3 mb-3">
            {onViewStudents && (
              <button
                onClick={() => onViewStudents(exam)}
                className="inline-flex items-center justify-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition-colors"
              >
                <Users className="w-4 h-4 mr-2" />
                View Students
              </button>
            )}
            
            {onEditStudents && (
              <button
                onClick={() => onEditStudents(exam)}
                className="inline-flex items-center justify-center px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white text-sm font-medium rounded-lg transition-colors"
              >
                <Edit className="w-4 h-4 mr-2" />
                Edit Students
              </button>
            )}
          </div>
          
          <div className="flex items-center space-x-3">
            {onAnalyzeExam && (
              <button
                onClick={() => onAnalyzeExam(exam)}
                disabled={exam.status !== 'Taken'}
                className={`flex-1 inline-flex items-center justify-center px-3 py-2 border text-sm font-medium rounded-lg transition-colors ${
                  exam.status === 'Taken'
                    ? 'border-blue-300 text-blue-700 hover:bg-blue-50 hover:border-blue-400'
                    : 'border-gray-200 text-gray-400 cursor-not-allowed bg-gray-50'
                }`}
                title={exam.status === 'Taken' ? 'View exam analysis and statistics' : 'Analysis available only for completed exams'}
              >
                <BarChart3 className="w-4 h-4 mr-2" />
                Analysis
              </button>
            )}
      
          </div>
        </div>
      )}
    </div>
  );
};

export default ExamCard;
