import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useGetSubjectStudentsQuery } from '../../store/api/subjectApi';
import { 
  ChevronRight, 
  Home, 
  Book, 
  Users, 
  Eye, 
  Search, 
  Download,
  BookOpen,
  GraduationCap,
  Building2,
  AlertCircle,
  Loader2,
  Mail,
  IdCard,
  Hash
} from 'lucide-react';

const ViewStudents = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedYearObject } = useSelector((state) => state.auth);

  // Get subject data from navigation state
  const { subject, yearId, semester } = location.state || {};

  const [searchTerm, setSearchTerm] = React.useState('');

  // RTK Query hook
  const {
    data: subjectStudentsData,
    isLoading,
    error
  } = useGetSubjectStudentsQuery(subject?.id, {
    skip: !subject?.id
  });

  const subjectData = subjectStudentsData?.data?.subject;
  const students = subjectStudentsData?.data?.students || [];

  // Filter students based on search term
  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.studentId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.div.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (student.batch && student.batch.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Group students by department
  const studentsByDepartment = filteredStudents.reduce((acc, student) => {
    if (!acc[student.department]) {
      acc[student.department] = [];
    }
    acc[student.department].push(student);
    return acc;
  }, {});

  // Export to CSV function
  const handleExport = () => {
    if (students.length === 0) return;

    const csvData = [
      ['Student ID', 'Name', 'Email', 'Department', 'Division', 'Batch', 'Semester'],
      ...students.map(student => [
        student.studentId,
        student.name,
        student.email,
        student.department,
        student.div,
        student.batch || 'N/A',
        student.semester
      ])
    ];

    const csvContent = csvData.map(row => row.join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${subject.code}_${subject.name}_students.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  React.useEffect(() => {
    if (!subject || !yearId || !semester) {
      navigate('/my-subjects');
    }
  }, [subject, yearId, semester, navigate]);

  if (!subject) {
    return (
      <div className="flex justify-center items-center min-h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
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
        <span className="text-gray-900 font-medium">View Students</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-4">
          <Eye className="h-8 w-8 text-blue-600" />
          <div>
            <h1 className="text-3xl font-bold text-gray-900">View Students</h1>
            <p className="text-gray-600">
              Students enrolled in <span className="font-semibold text-blue-600">{subject.name}</span>
              {' '}for {selectedYearObject?.year} - Semester {semester}
            </p>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <Users className="h-5 w-5 text-gray-600" />
            <h2 className="text-lg font-semibold text-gray-900">Student List</h2>
          </div>
          
          <div className="flex items-center space-x-3">
            {students.length > 0 && (
              <button
                onClick={handleExport}
                className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <Download className="h-4 w-4 mr-2" />
                Export CSV
              </button>
            )}
          </div>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search students by name, student ID, email, division, or batch..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Content */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        {isLoading ? (
          <div className="flex justify-center items-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
            <span className="ml-2 text-gray-600">Loading students...</span>
          </div>
        ) : error ? (
          <div className="p-6">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-center">
                <AlertCircle className="h-5 w-5 text-red-400 mr-3" />
                <p className="text-red-800">
                  {error?.data?.message || 'Failed to load students'}
                </p>
              </div>
            </div>
          </div>
        ) : students.length === 0 ? (
          <div className="text-center py-12">
            <Users className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No students enrolled</h3>
            <p className="text-gray-500 mb-4">
              This subject doesn't have any students enrolled yet.
            </p>
            <button
              onClick={() => navigate('/add-students-to-subject', { 
                state: { subject, yearId, semester } 
              })}
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Users className="h-4 w-4 mr-2" />
              Add Students
            </button>
          </div>
        ) : filteredStudents.length === 0 ? (
          <div className="text-center py-12">
            <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No students found</h3>
            <p className="text-gray-500">
              No students match your search criteria. Try a different search term.
            </p>
          </div>
        ) : (
          <div className="p-6">

            {/* Students by Department */}
            <div className="space-y-6">
              {Object.entries(studentsByDepartment).map(([department, deptStudents]) => (
                <div key={department} className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-gray-50 px-6 py-3 border-b border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                      <Building2 className="h-5 w-5 mr-2 text-gray-600" />
                      {department} ({deptStudents.length} students)
                    </h3>
                  </div>
                  
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Student
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Student ID
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Email
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Division
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Batch
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Semester
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {deptStudents.map((student) => (
                          <tr key={student.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                                  <span className="text-blue-600 font-medium text-sm">
                                    {student.name.split(' ').map(n => n[0]).join('')}
                                  </span>
                                </div>
                                <div className="ml-4">
                                  <div className="text-sm font-medium text-gray-900">{student.name}</div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center text-sm text-gray-900">
                                <IdCard className="h-4 w-4 mr-2 text-gray-400" />
                                <span className="font-mono">{student.studentId}</span>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center text-sm text-gray-900">
                                <Mail className="h-4 w-4 mr-2 text-gray-400" />
                                {student.email}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                Div {student.div}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                Batch {student.batch || 'N/A'}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center text-sm text-gray-900">
                                <Hash className="h-4 w-4 mr-2 text-gray-400" />
                                {student.semester}
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        {students.length > 0 && (
          <div className="p-6 border-t border-gray-200 bg-gray-50">
            <div className="flex justify-between items-center">
              <button
                onClick={() => navigate('/my-subjects')}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Back to Subjects
              </button>
              
              <button
                onClick={() => navigate('/edit-students-in-subject', { 
                  state: { subject, yearId, semester } 
                })}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center"
              >
                <Users className="h-4 w-4 mr-2" />
                Edit Students
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewStudents;
