import React, { useState, useRef } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { 
  useGetExamMarksQuery,
  useUploadStudentMarksMutation,
  useUploadBulkMarksMutation,
  useUpdateStudentMarksMutation,
  useDeleteStudentMarksMutation
} from '../../store/api/marksApi';
import {
  ChevronRight,
  Home,
  Trophy,
  Users,
  Upload,
  FileSpreadsheet,
  Plus,
  Edit,
  Trash2,
  Save,
  X,
  AlertCircle,
  Loader2,
  CheckCircle,
  DownloadCloud,
  Search
} from 'lucide-react';
import { toast } from 'sonner';
import * as XLSX from 'xlsx';

const ManageExamMarks = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { examId } = useParams();
  const fileInputRef = useRef(null);

  // Get exam data from navigation state or fetch if needed
  const { exam: examFromState } = location.state || {};

  // State management
  const [activeTab, setActiveTab] = useState('overview');
  const [editingMarkId, setEditingMarkId] = useState(null);
  const [editingMarks, setEditingMarks] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [newMarks, setNewMarks] = useState({ studentId: '', earnedMarks: '' });

  // API calls
  const {
    data: marksData,
    isLoading: marksLoading,
    error: marksError,
    refetch: refetchMarks
  } = useGetExamMarksQuery(examId, {
    skip: !examId
  });

  const [uploadStudentMarks, { isLoading: uploadingStudent }] = useUploadStudentMarksMutation();
  const [uploadBulkMarks, { isLoading: uploadingBulk }] = useUploadBulkMarksMutation();
  const [updateStudentMarks, { isLoading: updating }] = useUpdateStudentMarksMutation();
  const [deleteStudentMarks, { isLoading: deleting }] = useDeleteStudentMarksMutation();

  const exam = examFromState || marksData?.data?.exam;

  // Handle individual mark upload
  const handleUploadStudentMarks = async () => {
    if (!newMarks.studentId || newMarks.earnedMarks === '') {
      toast.error('Please select a student and enter marks');
      return;
    }

    const marks = parseInt(newMarks.earnedMarks);
    if (marks !== -1 && (marks < 0 || marks > exam?.totalMarks)) {
      toast.error(`Marks must be between 0 and ${exam?.totalMarks}, or -1 for absent students`);
      return;
    }

    try {
      await uploadStudentMarks({
        examId,
        studentId: newMarks.studentId,
        earnedMarks: marks
      }).unwrap();

      const statusMessage = marks === -1 ? 'Student marked as absent!' : 'Marks uploaded successfully!';
      toast.success(statusMessage);
      setShowAddModal(false);
      setNewMarks({ studentId: '', earnedMarks: '' });
      
      // Refetch to get updated exam status
      const previousStatus = exam?.status;
      refetchMarks().then(() => {
        // Check if exam status changed to 'Taken' after refetch
        setTimeout(() => {
          if (previousStatus !== 'Taken' && marksData?.data?.exam?.status === 'Taken') {
            toast.success('🎉 Exam completed! All students have been marked and exam status updated to "Taken".');
          }
        }, 500); // Small delay to ensure data is updated
      });
    } catch (error) {
      console.error('Error uploading marks:', error);
      toast.error(error?.data?.message || 'Failed to upload marks');
    }
  };

  // Handle Excel file upload
  const handleExcelUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (e) => {
      try {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);

        // Skip header/instruction rows and validate data
        const parsedMarksData = jsonData
          .filter(row => {
            // Skip instruction rows
            const studentId = row['Student ID'] || row['studentId'] || row['Student Number'];
            return studentId && 
                   studentId !== 'Instructions: Fill the \'Earned Marks\' column (Max: ' + exam?.totalMarks + ')' &&
                   studentId !== '---';
          })
          .map(row => {
            const studentId = row['Student ID'] || row['studentId'] || row['Student Number'];
            const studentName = row['Student Name'] || row['name'] || row['Name'];
            const earnedMarks = row['Earned Marks'] || row['earnedMarks'] || row['Marks'];
            
            return {
              studentNumber: studentId,
              studentName: studentName,
              earnedMarks: earnedMarks === '' ? null : parseInt(earnedMarks)
            };
          })
          .filter(item => {
            // Include rows with valid marks (including -1 for absent)
            return item.studentNumber && 
                   item.earnedMarks !== null && 
                   !isNaN(item.earnedMarks) &&
                   (item.earnedMarks === -1 || item.earnedMarks >= 0);
          });

        if (parsedMarksData.length === 0) {
          toast.error('No valid marks data found in Excel file. Please ensure you have filled the "Earned Marks" column with valid numbers or -1 for absent students.');
          return;
        }

        // Validate that all students exist in eligible students list
        const eligibleStudentNumbers = marksData?.data?.eligibleStudents?.map(s => s.studentId) || [];
        const invalidStudents = parsedMarksData.filter(item => 
          !eligibleStudentNumbers.includes(item.studentNumber)
        );

        if (invalidStudents.length > 0) {
          toast.error(`Some students are not eligible for this exam: ${invalidStudents.map(s => s.studentNumber).join(', ')}`);
          return;
        }

        // Upload bulk marks (without overwriting existing marks by default)
        const result = await uploadBulkMarks({
          examId,
          marksData: parsedMarksData,
          overwriteExisting: false
        }).unwrap();

        // Show detailed success message
        let message = `Successfully uploaded marks for ${result.uploadedCount} students!`;
        if (result.skippedCount > 0) {
          message += ` ${result.skippedCount} students were skipped (marks already exist).`;
        }
        if (result.errors && result.errors.length > 0) {
          message += ` ${result.errors.length} errors occurred.`;
        }

        toast.success(message);

        // Show details of skipped students if any
        if (result.skippedStudents && result.skippedStudents.length > 0) {
          const skippedDetails = result.skippedStudents.map(s => 
            `${s.studentNumber} (existing: ${s.existingMarks === -1 ? 'Absent' : s.existingMarks})`
          ).join(', ');
          toast.info(`Skipped students: ${skippedDetails}`);
        }
        
        // Refetch to get updated exam status
        const previousStatus = exam?.status;
        refetchMarks().then(() => {
          // Check if exam status changed to 'Taken' after refetch
          setTimeout(() => {
            if (previousStatus !== 'Taken' && marksData?.data?.exam?.status === 'Taken') {
              toast.success('🎉 Exam completed! All students have been marked and exam status updated to "Taken".');
            }
          }, 500); // Small delay to ensure data is updated
        });
      } catch (error) {
        console.error('Error processing Excel file:', error);
        toast.error(error?.data?.message || 'Failed to process Excel file');
      }
    };
    reader.readAsArrayBuffer(file);
    
    // Clear the input
    event.target.value = '';
  };

  // Handle mark editing
  const startEditing = (markId, currentMarks) => {
    setEditingMarkId(markId);
    setEditingMarks(currentMarks.toString());
  };

  const saveEdit = async (markId) => {
    try {
      await updateStudentMarks({
        marksId: markId,
        earnedMarks: parseInt(editingMarks)
      }).unwrap();

      toast.success('Marks updated successfully!');
      setEditingMarkId(null);
      setEditingMarks('');
      
      // Refetch to get updated exam status
      const previousStatus = exam?.status;
      refetchMarks().then(() => {
        // Check if exam status changed to 'Taken' after refetch
        setTimeout(() => {
          if (previousStatus !== 'Taken' && marksData?.data?.exam?.status === 'Taken') {
            toast.success('🎉 Exam completed! All students have been marked and exam status updated to "Taken".');
          }
        }, 500); // Small delay to ensure data is updated
      });
    } catch (error) {
      console.error('Error updating marks:', error);
      toast.error(error?.data?.message || 'Failed to update marks');
    }
  };

  const cancelEdit = () => {
    setEditingMarkId(null);
    setEditingMarks('');
  };

  // Handle mark deletion
  const handleDeleteMarks = async (markId) => {
    if (!confirm('Are you sure you want to delete these marks?')) return;

    try {
      await deleteStudentMarks(markId).unwrap();
      toast.success('Marks deleted successfully!');
      refetchMarks();
    } catch (error) {
      console.error('Error deleting marks:', error);
      toast.error(error?.data?.message || 'Failed to delete marks');
    }
  };

  // Download Excel template
  const downloadTemplate = () => {
    if (!marksData?.data?.eligibleStudents) {
      toast.error('No student data available for template');
      return;
    }

    // Create template with all eligible students
    const templateData = marksData.data.eligibleStudents.map(student => {
      // Check if student already has marks
      const existingMarks = marksData.data.marks.find(mark => mark.studentId === student.id);
      
      return {
        'Student ID': student.studentId,
        'Student Name': student.name,
        'Earned Marks': existingMarks ? existingMarks.earnedMarks : '' // Pre-fill if marks exist, otherwise empty
      };
    });

    // Add header row with instructions
    const headerData = [
      {
        'Student ID': `Instructions: Fill the 'Earned Marks' column (Max: ${exam?.totalMarks}, -1 for absent)`,
        'Student Name': 'Do not modify Student ID or Name columns',
        'Earned Marks': 'Enter marks here →'
      },
      {
        'Student ID': '---',
        'Student Name': '---',
        'Earned Marks': '---'
      },
      ...templateData
    ];

    const worksheet = XLSX.utils.json_to_sheet(headerData);
    
    // Style the header rows
    const range = XLSX.utils.decode_range(worksheet['!ref']);
    worksheet['!cols'] = [
      { width: 15 }, // Student ID column
      { width: 25 }, // Student Name column  
      { width: 15 }  // Earned Marks column
    ];

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Marks Template');
    
    const fileName = `${exam?.name?.replace(/[^a-zA-Z0-9]/g, '_') || 'exam'}_marks_template.xlsx`;
    XLSX.writeFile(workbook, fileName);
    
    toast.success(`Template downloaded with ${templateData.length} students!`);
  };

  // Filter functions
  const getFilteredStudents = () => {
    if (!marksData?.data) return [];
    
    const { marks, studentsWithoutMarks } = marksData.data;
    const allStudents = [...marks, ...studentsWithoutMarks.map(student => ({ student, earnedMarks: null, effectiveMarks: null }))];
    
    if (!searchTerm) return allStudents;
    
    return allStudents.filter(item =>
      item.student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.student.studentId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.student.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const filteredStudents = getFilteredStudents();

  // Loading state
  if (marksLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-12 w-12 text-blue-600 mx-auto animate-spin mb-4" />
          <p className="text-gray-600">Loading exam marks...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (marksError) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Error Loading Marks</h2>
          <p className="text-gray-600 mb-4">Failed to load exam marks data</p>
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Go Back
          </button>
        </div>
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
        <button
          onClick={() => navigate(-1)}
          className="hover:text-blue-600 transition-colors"
        >
          Manage Subject
        </button>
        <ChevronRight className="h-4 w-4" />
        <span className="text-gray-900 font-medium">Manage Exam Marks</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-4">
          <Trophy className="h-8 w-8 text-blue-600" />
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Manage Exam Marks</h1>
            <p className="text-gray-600">
              Upload and manage marks for <span className="font-semibold text-blue-600">{exam?.name}</span>
            </p>
          </div>
        </div>
      </div>

      {/* Exam Info Card */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 mb-6 border border-blue-100">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-4">
            <div className="bg-blue-600 p-3 rounded-lg">
              <Trophy className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">{exam?.name}</h3>
              <p className="text-gray-600 font-mono text-sm">{exam?.subject?.name} ({exam?.subject?.code})</p>
              <div className="flex items-center space-x-4 mt-2">
                <div className="flex items-center text-sm text-gray-700">
                  <Trophy className="h-4 w-4 mr-1" />
                  Total: {exam?.totalMarks} marks
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  Effective: {exam?.effectiveMarks} marks
                </div>
                <div className="flex items-center text-sm">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    exam?.status === 'Taken' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {exam?.status || 'Pending'}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600">Progress</p>
            <div className="mt-1">
              <span className="text-2xl font-bold text-blue-600">
                {marksData?.data?.statistics?.studentsWithMarks || 0}
              </span>
              <span className="text-gray-600">
                /{marksData?.data?.statistics?.totalEligibleStudents || 0}
              </span>
            </div>
            <p className="text-xs text-gray-500">Students completed</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-6">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('overview')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'overview'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Overview & Statistics
            </button>
            <button
              onClick={() => setActiveTab('marks')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'marks'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Manage Marks
            </button>
            <button
              onClick={() => setActiveTab('upload')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'upload'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Upload Marks
            </button>
          </nav>
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Statistics Cards */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Students</p>
                <p className="text-2xl font-bold text-gray-900">
                  {marksData?.data?.statistics?.totalEligibleStudents || 0}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="bg-green-100 p-3 rounded-lg">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Marks Uploaded</p>
                <p className="text-2xl font-bold text-gray-900">
                  {marksData?.data?.statistics?.studentsWithMarks || 0}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="bg-yellow-100 p-3 rounded-lg">
                <AlertCircle className="h-6 w-6 text-yellow-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Pending</p>
                <p className="text-2xl font-bold text-gray-900">
                  {marksData?.data?.statistics?.pendingStudents || 0}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'upload' && (
        <div className="space-y-6">
          {/* Upload Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Individual Upload */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center mb-4">
                <Plus className="h-5 w-5 text-green-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">Add Individual Marks</h3>
              </div>
              <p className="text-gray-600 mb-4">Upload marks for a single student</p>
              <button
                onClick={() => setShowAddModal(true)}
                className="w-full inline-flex items-center justify-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg transition-colors"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Student Marks
              </button>
            </div>

            {/* Bulk Upload */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center mb-4">
                <FileSpreadsheet className="h-5 w-5 text-blue-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">Bulk Upload via Excel</h3>
              </div>
              <p className="text-gray-600 mb-4">Upload marks for multiple students using Excel file with pre-populated student information</p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
                <p className="text-sm text-blue-800 font-medium mb-1">Template includes:</p>
                <ul className="text-xs text-blue-700 space-y-1">
                  <li>• All eligible students (ID, Name)</li>
                  <li>• Pre-filled existing marks</li>
                  <li>• Instructions for uploading</li>
                  <li>• Only fill the "Earned Marks" column</li>
                </ul>
              </div>
              <div className="space-y-3">
                <button
                  onClick={downloadTemplate}
                  className="w-full inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-gray-700 hover:bg-gray-50 text-sm font-medium rounded-lg transition-colors"
                >
                  <DownloadCloud className="w-4 h-4 mr-2" />
                  Download Template
                </button>
                <div className="relative">
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".xlsx,.xls"
                    onChange={handleExcelUpload}
                    className="hidden"
                  />
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    disabled={uploadingBulk}
                    className="w-full inline-flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors disabled:opacity-50"
                  >
                    {uploadingBulk ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Uploading...
                      </>
                    ) : (
                      <>
                        <Upload className="w-4 h-4 mr-2" />
                        Upload Excel File
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'marks' && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Student Marks</h3>
              <button
                onClick={() => setShowAddModal(true)}
                className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Marks
              </button>
            </div>

            {/* Search */}
            <div className="relative">
              <Search className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search students by name, ID, or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Student
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Earned Marks
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Effective Marks
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
                {filteredStudents.map((item, index) => (
                  <tr key={item.id || `pending-${index}`} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{item.student.name}</div>
                        <div className="text-sm text-gray-500">{item.student.studentId}</div>
                        <div className="text-xs text-gray-400">{item.student.email}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {editingMarkId === item.id ? (
                        <input
                          type="number"
                          value={editingMarks}
                          onChange={(e) => setEditingMarks(e.target.value)}
                          min="0"
                          max={exam?.totalMarks}
                          className="w-20 px-2 py-1 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-blue-500"
                        />
                      ) : (
                        <span className="text-sm text-gray-900">
                          {item.earnedMarks !== null ? `${item.earnedMarks}/${exam?.totalMarks}` : '-'}
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm text-gray-900">
                        {item.effectiveMarks !== null ? `${item.effectiveMarks}/${exam?.effectiveMarks}` : '-'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        item.earnedMarks !== null 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {item.earnedMarks !== null ? 'Completed' : 'Pending'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      {editingMarkId === item.id ? (
                        <div className="flex space-x-2">
                          <button
                            onClick={() => saveEdit(item.id)}
                            disabled={updating}
                            className="text-green-600 hover:text-green-900"
                            title="Save"
                          >
                            <Save className="w-4 h-4" />
                          </button>
                          <button
                            onClick={cancelEdit}
                            className="text-gray-600 hover:text-gray-900"
                            title="Cancel"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ) : (
                        <div className="flex space-x-2">
                          {item.earnedMarks !== null ? (
                            <>
                              <button
                                onClick={() => startEditing(item.id, item.earnedMarks)}
                                className="text-blue-600 hover:text-blue-900"
                                title="Edit"
                              >
                                <Edit className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => handleDeleteMarks(item.id)}
                                disabled={deleting}
                                className="text-red-600 hover:text-red-900"
                                title="Delete"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </>
                          ) : (
                            <button
                              onClick={() => {
                                setNewMarks({ studentId: item.student.id, earnedMarks: '' });
                                setShowAddModal(true);
                              }}
                              className="text-green-600 hover:text-green-900"
                              title="Add Marks"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Add Marks Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Add Student Marks</h3>
              <button
                onClick={() => setShowAddModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Student
                </label>
                <select
                  value={newMarks.studentId}
                  onChange={(e) => setNewMarks({ ...newMarks, studentId: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Choose a student...</option>
                  {marksData?.data?.studentsWithoutMarks?.map(student => (
                    <option key={student.id} value={student.id}>
                      {student.name} ({student.studentId})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Earned Marks (Max: {exam?.totalMarks})
                </label>
                <input
                  type="number"
                  value={newMarks.earnedMarks}
                  onChange={(e) => setNewMarks({ ...newMarks, earnedMarks: e.target.value })}
                  min="0"
                  max={exam?.totalMarks}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter marks"
                />
              </div>

              <div className="flex space-x-3 pt-4">
                <button
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleUploadStudentMarks}
                  disabled={uploadingStudent}
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors"
                >
                  {uploadingStudent ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin inline mr-2" />
                      Adding...
                    </>
                  ) : (
                    'Add Marks'
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageExamMarks;