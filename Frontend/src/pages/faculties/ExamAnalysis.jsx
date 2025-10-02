import React, { useState, useRef } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useGetExamAnalysisQuery } from '../../store/api/examApi';
import {
   ChevronRight,
   Home,
   BarChart3,
   Download,
   Users,
   TrendingUp,
   Award,
   AlertCircle,
   Loader2,
   FileText,
   PieChart,
   Activity,
   Target,
   Filter,
   Search,
   Eye,
   Info,
   Building
} from 'lucide-react';
import { toast } from 'sonner';
import {
   BarChart,
   Bar,
   XAxis,
   YAxis,
   CartesianGrid,
   Tooltip,
   Legend,
   ResponsiveContainer,
   PieChart as RechartsPieChart,
   Pie,
   Cell,
   LineChart,
   Line,
   Area,
   AreaChart
} from 'recharts';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import html2canvas from 'html2canvas';

const ExamAnalysis = () => {
   const navigate = useNavigate();
   const location = useLocation();
   const { examId } = useParams();
   const chartRef = useRef(null);

   // Get exam data from navigation state
   const { exam, subject, subjectData } = location.state || {};

  // State management
  const [activeTab, setActiveTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');
  const [hoveredData, setHoveredData] = useState(null);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);   const {
      data: analysisData,
      isLoading: analysisLoading,
      error: analysisError
   } = useGetExamAnalysisQuery(examId, {
      skip: !examId
   });

   // Color schemes
   const COLORS = {
      primary: '#3B82F6',
      secondary: '#8B5CF6',
      success: '#10B981',
      warning: '#F59E0B',
      danger: '#EF4444',
      info: '#06B6D4',
      gray: '#6B7280'
   };

   const GRADE_COLORS = ['#EF4444', '#F59E0B', '#10B981', '#3B82F6', '#8B5CF6'];

   // Helper functions
   const formatPercentage = (value) => `${value}%`;
   const formatNumber = (value) => value.toLocaleString();

  // Filter students based on search only
  const getFilteredResults = () => {
    if (!analysisData?.data?.detailedResults) return [];
    
    let filtered = analysisData.data.detailedResults;
    
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(result =>
        result.student.name.toLowerCase().includes(searchLower) ||
        result.student.studentId.toLowerCase().includes(searchLower) ||
        result.student.email.toLowerCase().includes(searchLower)
      );
    }
    
    return filtered;
  };   // Generate histogram data for marks distribution
   const getMarksHistogramData = () => {
      if (!analysisData?.data?.detailedResults) return [];

      const results = analysisData.data.detailedResults.filter(result => result.status !== 'Absent');
      const totalMarks = analysisData.data.exam.totalMarks;

      // Create bins for histogram (intervals of 10 marks each)
      const binSize = Math.max(10, Math.ceil(totalMarks / 10));
      const numBins = Math.ceil(totalMarks / binSize);

      const bins = [];
      for (let i = 0; i < numBins; i++) {
         const start = i * binSize;
         const end = Math.min((i + 1) * binSize - 1, totalMarks);
         bins.push({
            range: `${start}-${end}`,
            start: start,
            end: end,
            count: 0
         });
      }

      // Count students in each bin
      results.forEach(result => {
         const marks = result.earnedMarks;
         for (let i = 0; i < bins.length; i++) {
            if (marks >= bins[i].start && marks <= bins[i].end) {
               bins[i].count++;
               break;
            }
         }
      });

      return bins;
   };

  // Helper function to capture chart as image with fallback methods
  const captureChartAsImage = async (chartSelector) => {
    try {
      console.log('Attempting to capture chart:', chartSelector);
      let chartElement = document.querySelector(chartSelector);
      
      if (!chartElement) {
        console.warn(`Chart element not found: ${chartSelector}`);
        // Try alternative selectors - look for ResponsiveContainer within the chart element
        const allChartElements = document.querySelectorAll('[data-chart]');
        console.log('Available chart elements:', Array.from(allChartElements).map(el => el.getAttribute('data-chart')));
        
        // Try to find by chart type in selector
        if (chartSelector.includes('score-distribution')) {
          chartElement = document.querySelector('[data-chart="score-distribution"] .recharts-wrapper');
        } else if (chartSelector.includes('histogram')) {
          chartElement = document.querySelector('[data-chart="histogram"] .recharts-wrapper');
        } else if (chartSelector.includes('department-performance')) {
          chartElement = document.querySelector('[data-chart="department-performance"] .recharts-wrapper');
        }
        
        if (!chartElement) {
          return null;
        }
      }
      
      console.log('Found chart element:', chartElement);
      console.log('Element dimensions:', chartElement.offsetWidth, 'x', chartElement.offsetHeight);
      
      // Ensure the element is visible
      const rect = chartElement.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) {
        console.warn('Chart element has zero dimensions:', rect);
        return null;
      }
      
      // Wait a bit for chart to fully render
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const canvas = await html2canvas(chartElement, {
        backgroundColor: '#ffffff',
        scale: 1.5, // Good quality without being too large
        logging: false, // Disable logging for cleaner output
        useCORS: true,
        allowTaint: true,
        foreignObjectRendering: true,
        width: chartElement.offsetWidth,
        height: chartElement.offsetHeight,
        scrollX: 0,
        scrollY: 0
      });
      
      const imageData = canvas.toDataURL('image/jpeg', 0.9); // Use JPEG for smaller file size
      console.log('Successfully captured chart:', chartSelector, 'Data length:', imageData.length);
      return imageData;
    } catch (error) {
      console.error('Error capturing chart:', chartSelector, error);
      return null;
    }
  };

  // Generate comprehensive PDF Report with graphs and analysis
  const generatePDFReport = async () => {
    if (!analysisData?.data) {
      toast.error('No data available for PDF generation');
      return;
    }

    setIsGeneratingPDF(true);

    try {
      // Ensure we're on the charts tab for capturing
      if (activeTab !== 'charts') {
        setActiveTab('charts');
        // Wait for tab switch to complete
        await new Promise(resolve => setTimeout(resolve, 500));
      }
      
      // Capture chart images before generating PDF
      toast.info('Capturing charts for PDF...');
      console.log('Starting chart capture process...');
      
      const scoreDistributionChart = await captureChartAsImage('[data-chart="score-distribution"]');
      console.log('Score distribution chart captured:', !!scoreDistributionChart);
      
      const histogramChart = await captureChartAsImage('[data-chart="histogram"]');
      console.log('Histogram chart captured:', !!histogramChart);
      
      const departmentChart = await captureChartAsImage('[data-chart="department-performance"]');
      console.log('Department chart captured:', !!departmentChart);
      
      const doc = new jsPDF();
      
      // Debug: Check if autoTable is available
      console.log('jsPDF instance:', doc);
      console.log('autoTable function:', autoTable);
      
      const data = analysisData.data;
      const exam = data.exam;
      const stats = data.statistics;

      // Header
      doc.setFontSize(24);
      doc.setTextColor(59, 130, 246);
      doc.text('Comprehensive Exam Analysis Report', 20, 25);
      
      doc.setFontSize(12);
      doc.setTextColor(0, 0, 0);
      doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 20, 35);
      doc.text(`Report Type: Complete Analysis with Student Breakdown`, 20, 45);

      // Exam Details Section
      doc.setFontSize(18);
      doc.setTextColor(139, 69, 19);
      doc.text('Exam Information', 20, 65);
      
      const examDetails = [
        ['Exam Name', exam?.name || 'N/A'],
        ['Subject', exam?.subject ? `${exam.subject.name} (${exam.subject.code})` : 'N/A'],
        ['Date', exam?.date ? new Date(exam.date).toLocaleDateString() : 'N/A'],
        ['Total Marks', exam?.totalMarks?.toString() || 'N/A'],
        ['Effective Marks', exam?.effectiveMarks?.toString() || 'N/A'],
        ['Department', exam?.department || 'N/A'],
        ['Division', exam?.division || 'N/A'],
        ['Batch', exam?.batch === 'NONE' ? 'All Batches' : `Batch ${exam?.batch || 'N/A'}`],
        ['Status', exam?.status || 'N/A']
      ];

      autoTable(doc, {
        startY: 70,
        head: [['Field', 'Value']],
        body: examDetails,
        theme: 'striped',
        headStyles: { fillColor: [59, 130, 246], textColor: 255 },
        margin: { left: 20, right: 20 },
        styles: { fontSize: 10 }
      });

      // Statistical Overview Section
      let yPos = doc.lastAutoTable ? doc.lastAutoTable.finalY + 20 : 150;
      doc.setFontSize(18);
      doc.setTextColor(139, 69, 19);
      doc.text('Statistical Overview', 20, yPos);

      const statisticsData = [
        ['Total Students', stats?.totalStudents?.toString() || '0'],
        ['Present Students', stats?.presentStudents?.toString() || '0'],
        ['Absent Students', stats?.absentCount?.toString() || '0'],
        ['Pending Marks', stats?.pendingCount?.toString() || '0'],
        ['Average Marks', `${stats?.averageMarks || 0}/${exam?.totalMarks || 0}`],
        ['Average Effective Marks', `${stats?.averageEffectiveMarks || 0}/${exam?.effectiveMarks || 0}`],
        ['Highest Marks', `${stats?.highestMarks || 0}/${exam?.totalMarks || 0}`],
        ['Lowest Marks', `${stats?.lowestMarks || 0}/${exam?.totalMarks || 0}`],
        ['Median Marks', `${stats?.medianMarks || 0}/${exam?.totalMarks || 0}`],
        ['Pass Rate', `${stats?.passRate || 0}%`],
        ['Fail Rate', `${stats?.failRate || 0}%`],
        ['Standard Deviation', stats?.standardDeviation?.toString() || '0']
      ];

      autoTable(doc, {
        startY: yPos + 5,
        head: [['Metric', 'Value']],
        body: statisticsData,
        theme: 'striped',
        headStyles: { fillColor: [16, 185, 129], textColor: 255 },
        margin: { left: 20, right: 20 },
        styles: { fontSize: 10 }
      });

      // Score Range Distribution Analysis
      yPos = (doc.lastAutoTable ? doc.lastAutoTable.finalY : yPos + 50) + 20;
      doc.setFontSize(18);
      doc.setTextColor(139, 69, 19);
      doc.text('Score Range Distribution Analysis', 20, yPos);

      // Add score distribution chart image if captured
      if (scoreDistributionChart) {
        try {
          console.log('Adding score distribution chart to PDF');
          doc.addImage(scoreDistributionChart, 'JPEG', 20, yPos + 10, 170, 85);
          yPos += 105;
          console.log('Score distribution chart added successfully');
        } catch (error) {
          console.error('Error adding score distribution chart to PDF:', error);
        }
      } else {
        console.warn('Score distribution chart not captured, skipping...');
      }

      // Add descriptive text
      doc.setFontSize(11);
      doc.setTextColor(0, 0, 0);
      doc.text('This section shows how students performed across different score ranges:', 20, yPos + 10);

      const scoreRangeData = (data.scoreDistribution || []).map(range => [
        `${range.range}%`,
        range.count?.toString() || '0',
        `${(((range.count || 0) / (stats?.presentStudents || 1)) * 100).toFixed(1)}%`,
        range.count > 0 ? 'Students present in this range' : 'No students in this range'
      ]);

      autoTable(doc, {
        startY: yPos + 15,
        head: [['Score Range', 'Student Count', 'Percentage', 'Analysis']],
        body: scoreRangeData,
        theme: 'striped',
        headStyles: { fillColor: [139, 92, 246], textColor: 255 },
        margin: { left: 20, right: 20 },
        styles: { fontSize: 9 }
      });

      // Score Range - Student Details
      yPos = (doc.lastAutoTable ? doc.lastAutoTable.finalY : yPos + 50) + 15;
      doc.setFontSize(16);
      doc.setTextColor(220, 38, 127);
      doc.text('Students by Score Range', 20, yPos);

      // Group students by score ranges
      const studentsByRange = {};
      (data.detailedResults || []).forEach(result => {
        const percentage = result.percentage;
        let range = '';
        if (percentage >= 0 && percentage <= 20) range = '0-20%';
        else if (percentage >= 21 && percentage <= 40) range = '21-40%';
        else if (percentage >= 41 && percentage <= 60) range = '41-60%';
        else if (percentage >= 61 && percentage <= 80) range = '61-80%';
        else if (percentage >= 81 && percentage <= 100) range = '81-100%';

        if (!studentsByRange[range]) {
          studentsByRange[range] = [];
        }
        studentsByRange[range].push(result);
      });

      // Add students for each range
      yPos += 10;
      Object.entries(studentsByRange).forEach(([range, students]) => {
        if (students.length === 0) return;

        // Check if we need a new page
        if (yPos > 250) {
          doc.addPage();
          yPos = 25;
        }

        doc.setFontSize(14);
        doc.setTextColor(59, 130, 246);
        doc.text(`Score Range: ${range} (${students.length} students)`, 20, yPos);

        const rangeStudentData = students.map(student => [
          student.student?.studentId || 'N/A',
          student.student?.name || 'N/A',
          student.student?.department || 'N/A',
          `Div ${student.student?.div || 'N/A'}`,
          `${student.earnedMarks || 0}/${exam?.totalMarks || 0}`,
          `${student.percentage || 0}%`,
          student.status || 'N/A'
        ]);

        autoTable(doc, {
          startY: yPos + 5,
          head: [['Student ID', 'Name', 'Dept', 'Division', 'Marks', 'Percentage', 'Status']],
          body: rangeStudentData,
          theme: 'grid',
          headStyles: { fillColor: [59, 130, 246], textColor: 255, fontSize: 8 },
          margin: { left: 15, right: 15 },
          styles: { fontSize: 7 },
          columnStyles: {
            0: { cellWidth: 20 },
            1: { cellWidth: 35 },
            2: { cellWidth: 20 },
            3: { cellWidth: 20 },
            4: { cellWidth: 25 },
            5: { cellWidth: 20 },
            6: { cellWidth: 20 }
          }
        });

        yPos = (doc.lastAutoTable ? doc.lastAutoTable.finalY : yPos + 50) + 15;
      });

      // Marks Histogram Analysis
      doc.addPage();
      yPos = 25;
      doc.setFontSize(18);
      doc.setTextColor(139, 69, 19);
      doc.text('Marks Histogram Distribution', 20, yPos);

      // Add histogram chart image if captured
      if (histogramChart) {
        try {
          console.log('Adding histogram chart to PDF');
          doc.addImage(histogramChart, 'JPEG', 20, yPos + 10, 170, 85);
          yPos += 105;
          console.log('Histogram chart added successfully');
        } catch (error) {
          console.error('Error adding histogram chart to PDF:', error);
        }
      } else {
        console.warn('Histogram chart not captured, skipping...');
      }

      doc.setFontSize(11);
      doc.setTextColor(0, 0, 0);
      doc.text('Detailed breakdown of student performance by actual marks ranges:', 20, yPos + 10);

      const histogramData = getMarksHistogramData().map(bin => [
        bin.range,
        bin.count.toString(),
        `${((bin.count / (stats?.presentStudents || 1)) * 100).toFixed(1)}%`
      ]);

      autoTable(doc, {
        startY: yPos + 15,
        head: [['Marks Range', 'Student Count', 'Percentage']],
        body: histogramData,
        theme: 'striped',
        headStyles: { fillColor: [99, 102, 241], textColor: 255 },
        margin: { left: 20, right: 20 },
        styles: { fontSize: 10 }
      });

      // Histogram - Student Details
      yPos = (doc.lastAutoTable ? doc.lastAutoTable.finalY : yPos + 50) + 15;
      doc.setFontSize(16);
      doc.setTextColor(220, 38, 127);
      doc.text('Students by Marks Range', 20, yPos);

      // Group students by histogram bins
      const studentsByMarksRange = {};
      const histogramBins = getMarksHistogramData();
      
      (data.detailedResults || []).forEach(result => {
        const marks = result.earnedMarks;
        for (let bin of histogramBins) {
          if (marks >= bin.start && marks <= bin.end) {
            if (!studentsByMarksRange[bin.range]) {
              studentsByMarksRange[bin.range] = [];
            }
            studentsByMarksRange[bin.range].push(result);
            break;
          }
        }
      });

      yPos += 10;
      Object.entries(studentsByMarksRange).forEach(([range, students]) => {
        if (students.length === 0) return;

        // Check if we need a new page
        if (yPos > 250) {
          doc.addPage();
          yPos = 25;
        }

        doc.setFontSize(14);
        doc.setTextColor(99, 102, 241);
        doc.text(`Marks Range: ${range} (${students.length} students)`, 20, yPos);

        const marksRangeData = students.map(student => [
          student.student?.studentId || 'N/A',
          student.student?.name || 'N/A',
          student.student?.department || 'N/A',
          `${student.earnedMarks || 0}/${exam?.totalMarks || 0}`,
          `${student.percentage || 0}%`,
          student.status || 'N/A'
        ]);

        autoTable(doc, {
          startY: yPos + 5,
          head: [['Student ID', 'Name', 'Dept', 'Marks', 'Percentage', 'Status']],
          body: marksRangeData,
          theme: 'grid',
          headStyles: { fillColor: [99, 102, 241], textColor: 255, fontSize: 8 },
          margin: { left: 15, right: 15 },
          styles: { fontSize: 8 },
          columnStyles: {
            0: { cellWidth: 25 },
            1: { cellWidth: 40 },
            2: { cellWidth: 25 },
            3: { cellWidth: 30 },
            4: { cellWidth: 25 },
            5: { cellWidth: 25 }
          }
        });

        yPos = (doc.lastAutoTable ? doc.lastAutoTable.finalY : yPos + 50) + 15;
      });

      // Complete Student Results
      doc.addPage();
      yPos = 25;
      doc.setFontSize(18);
      doc.setTextColor(139, 69, 19);
      doc.text('Complete Student Results', 20, yPos);

      const allStudentResults = (data.detailedResults || []).map((result, index) => [
        (index + 1).toString(),
        result.student?.studentId || 'N/A',
        result.student?.name || 'N/A',
        result.student?.department || 'N/A',
        `Div ${result.student?.div || 'N/A'}`,
        `${result.earnedMarks || 0}`,
        `${result.percentage || 0}%`,
        result.status || 'N/A'
      ]);

      autoTable(doc, {
        startY: yPos + 10,
        head: [['#', 'Student ID', 'Name', 'Dept', 'Division', 'Marks', 'Percentage', 'Status']],
        body: allStudentResults,
        theme: 'striped',
        headStyles: { fillColor: [59, 130, 246], textColor: 255 },
        margin: { left: 10, right: 10 },
        styles: { fontSize: 8 },
        columnStyles: {
          0: { cellWidth: 15 },
          1: { cellWidth: 25 },
          2: { cellWidth: 40 },
          3: { cellWidth: 20 },
          4: { cellWidth: 20 },
          5: { cellWidth: 20 },
          6: { cellWidth: 20 },
          7: { cellWidth: 20 }
        }
      });

      // Summary Page
      doc.addPage();
      doc.setFontSize(20);
      doc.setTextColor(139, 69, 19);
      doc.text('Analysis Summary', 20, 30);

      doc.setFontSize(12);
      doc.setTextColor(0, 0, 0);
      const summaryText = [
        `This comprehensive report analyzed ${stats?.totalStudents || 0} students for the exam "${exam?.name || 'N/A'}".`,
        ``,
        `Key Findings:`,
        `• ${stats?.presentStudents || 0} students appeared for the exam`,
        `• ${stats?.absentCount || 0} students were absent`,
        `• ${stats?.pendingCount || 0} students have pending marks`,
        `• Average performance: ${stats?.averageMarks || 0}/${exam?.totalMarks || 0} (${Math.round(((stats?.averageMarks || 0) / (exam?.totalMarks || 1)) * 100)}%)`,
        `• Pass rate: ${stats?.passRate || 0}% (${Math.floor(((stats?.presentStudents || 0) * (stats?.passRate || 0)) / 100)} students passed)`,
        `• Highest score: ${stats?.highestMarks || 0}/${exam?.totalMarks || 0}`,
        `• Lowest score: ${stats?.lowestMarks || 0}/${exam?.totalMarks || 0}`,
        ``,
        `This report includes detailed breakdowns by:`,
        `• Score range distribution with student lists`,
        `• Marks histogram analysis with student details`,
        `• Complete alphabetical student results`,
        ``,
        `Generated on: ${new Date().toLocaleString()}`,
        `Report covers all visualization data with corresponding student analysis.`
      ];

      let textY = 50;
      summaryText.forEach(line => {
        doc.text(line, 20, textY);
        textY += 6;
      });

      // Save the PDF
      const fileName = `${(exam?.name || 'Exam_Analysis').replace(/[^a-zA-Z0-9]/g, '_')}_Complete_Analysis_Report.pdf`;
      doc.save(fileName);
      
      toast.success('Comprehensive PDF report with all graphs and student analysis generated successfully!');
      
    } catch (error) {
      console.error('PDF generation error:', error);
      toast.error(`Failed to generate PDF report: ${error.message}`);
    } finally {
      setIsGeneratingPDF(false);
    }
  };

   // Custom tooltip component
   const CustomTooltip = ({ active, payload, label }) => {
      if (active && payload && payload.length) {
         return (
            <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
               <p className="font-medium">{`${label}`}</p>
               {payload.map((entry, index) => (
                  <p key={index} style={{ color: entry.color }}>
                     {`${entry.name}: ${entry.value}`}
                  </p>
               ))}
            </div>
         );
      }
      return null;
   };

   // Error state
   if (analysisError) {
      return (
         <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="text-center">
               <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
               <h2 className="text-xl font-semibold text-gray-900 mb-2">Error Loading Analysis</h2>
               <p className="text-gray-600 mb-4">Failed to load exam analysis data</p>
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

   // Loading state
   if (analysisLoading) {
      return (
         <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="text-center">
               <Loader2 className="h-12 w-12 text-blue-600 mx-auto animate-spin mb-4" />
               <p className="text-gray-600">Loading exam analysis...</p>
            </div>
         </div>
      );
   }

   const data = analysisData?.data;
   const examData = data?.exam || exam;
   const statistics = data?.statistics || {};
   const filteredResults = getFilteredResults();

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
               {subject?.name || 'Subject'}
            </button>
            <ChevronRight className="h-4 w-4" />
            <span className="text-gray-900 font-medium">Exam Analysis</span>
         </nav>

         {/* Header */}
         <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
            <div className="flex items-start justify-between">
               <div>
                  <h1 className="text-3xl font-bold text-gray-900 flex items-center">
                     <BarChart3 className="h-8 w-8 text-blue-600 mr-3" />
                     Exam Analysis
                  </h1>
                  <p className="mt-2 text-gray-600">
                     Comprehensive analysis for <span className="font-semibold text-blue-600">{examData?.name}</span>
                  </p>
                  <div className="mt-3 flex items-center space-x-4 text-sm text-gray-500">
                     <span className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {statistics.totalStudents || 0} Students
                     </span>
                     <span className="flex items-center">
                        <Award className="h-4 w-4 mr-1" />
                        {statistics.presentStudents || 0} Completed
                     </span>
                     <span className="flex items-center">
                        <Target className="h-4 w-4 mr-1" />
                        {statistics.passRate || 0}% Pass Rate
                     </span>
                  </div>
               </div>
               <button
                  onClick={generatePDFReport}
                  disabled={isGeneratingPDF}
                  className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-colors"
               >
                  {isGeneratingPDF ? (
                     <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Generating...
                     </>
                  ) : (
                     <>
                        <Download className="w-4 h-4 mr-2" />
                        Export PDF
                     </>
                  )}
               </button>
            </div>
         </div>

         {/* Tabs */}
         <div className="mb-6">
            <div className="border-b border-gray-200">
               <nav className="-mb-px flex space-x-8">
                  <button
                     onClick={() => setActiveTab('overview')}
                     className={`py-2 px-1 border-b-2 font-medium text-sm ${activeTab === 'overview'
                           ? 'border-blue-500 text-blue-600'
                           : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                        }`}
                  >
                     Overview & Statistics
                  </button>
                  <button
                     onClick={() => setActiveTab('charts')}
                     className={`py-2 px-1 border-b-2 font-medium text-sm ${activeTab === 'charts'
                           ? 'border-blue-500 text-blue-600'
                           : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                        }`}
                  >
                     Charts & Graphs
                  </button>
                  <button
                     onClick={() => setActiveTab('students')}
                     className={`py-2 px-1 border-b-2 font-medium text-sm ${activeTab === 'students'
                           ? 'border-blue-500 text-blue-600'
                           : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                        }`}
                  >
                     Student Results
                  </button>
               </nav>
            </div>
         </div>

         {/* Tab Content */}
         {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
               {/* Statistics Cards */}
               <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                     <div className="flex items-center justify-between">
                        <div>
                           <p className="text-sm text-gray-600">Average Marks</p>
                           <p className="text-2xl font-bold text-blue-600">
                              {statistics.averageMarks || 0}
                           </p>
                           <p className="text-xs text-gray-500">
                              /{examData?.totalMarks}
                           </p>
                        </div>
                        <TrendingUp className="h-8 w-8 text-blue-600" />
                     </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                     <div className="flex items-center justify-between">
                        <div>
                           <p className="text-sm text-gray-600">Pass Rate</p>
                           <p className="text-2xl font-bold text-green-600">
                              {statistics.passRate || 0}%
                           </p>
                           <p className="text-xs text-gray-500">
                              {statistics.presentStudents - Math.floor((statistics.presentStudents * (statistics.failRate || 0)) / 100)} passed
                           </p>
                        </div>
                        <Award className="h-8 w-8 text-green-600" />
                     </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                     <div className="flex items-center justify-between">
                        <div>
                           <p className="text-sm text-gray-600">Highest Score</p>
                           <p className="text-2xl font-bold text-purple-600">
                              {statistics.highestMarks || 0}
                           </p>
                           <p className="text-xs text-gray-500">
                              /{examData?.totalMarks}
                           </p>
                        </div>
                        <Activity className="h-8 w-8 text-purple-600" />
                     </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                     <div className="flex items-center justify-between">
                        <div>
                           <p className="text-sm text-gray-600">Attendance</p>
                           <p className="text-2xl font-bold text-indigo-600">
                              {statistics.totalStudents > 0 ? Math.round(((statistics.totalStudents - statistics.absentCount) / statistics.totalStudents) * 100) : 0}%
                           </p>
                           <p className="text-xs text-gray-500">
                              {statistics.totalStudents - statistics.absentCount}/{statistics.totalStudents}
                           </p>
                        </div>
                        <Users className="h-8 w-8 text-indigo-600" />
                     </div>
                  </div>
               </div>

               {/* Quick Stats Summary */}
               <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Summary</h3>
                  <div className="space-y-4">
                     <div className="flex items-center justify-between py-2 border-b border-gray-100">
                        <span className="text-sm text-gray-600">Total Students</span>
                        <span className="font-semibold">{statistics.totalStudents || 0}</span>
                     </div>
                     <div className="flex items-center justify-between py-2 border-b border-gray-100">
                        <span className="text-sm text-gray-600">Present</span>
                        <span className="font-semibold text-green-600">{statistics.presentStudents || 0}</span>
                     </div>
                     <div className="flex items-center justify-between py-2 border-b border-gray-100">
                        <span className="text-sm text-gray-600">Absent</span>
                        <span className="font-semibold text-red-600">{statistics.absentCount || 0}</span>
                     </div>
                     <div className="flex items-center justify-between py-2 border-b border-gray-100">
                        <span className="text-sm text-gray-600">Pending</span>
                        <span className="font-semibold text-yellow-600">{statistics.pendingCount || 0}</span>
                     </div>
                     <div className="flex items-center justify-between py-2 border-b border-gray-100">
                        <span className="text-sm text-gray-600">Median Score</span>
                        <span className="font-semibold">{statistics.medianMarks || 0}</span>
                     </div>
                     <div className="flex items-center justify-between py-2">
                        <span className="text-sm text-gray-600">Std Deviation</span>
                        <span className="font-semibold">{statistics.standardDeviation || 0}</span>
                     </div>
                  </div>
               </div>
            </div>
         )}

         {activeTab === 'charts' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
               {/* Marks Histogram */}
               <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6" data-chart="histogram">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                     <BarChart3 className="h-5 w-5 mr-2 text-indigo-600" />
                     Marks Distribution Histogram
                  </h3>
                  <ResponsiveContainer width="100%" height={300}>
                     <BarChart data={getMarksHistogramData()}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis
                           dataKey="range"
                           angle={-45}
                           textAnchor="end"
                           height={70}
                        />
                        <YAxis />
                        <Tooltip content={<CustomTooltip />} />
                        <Legend />
                        <Bar dataKey="count" fill={COLORS.secondary} name="Students" />
                     </BarChart>
                  </ResponsiveContainer>
               </div>

          {/* Marks Distribution Bar Chart */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6" data-chart="score-distribution">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <BarChart3 className="h-5 w-5 mr-2 text-blue-600" />
              Score Range Distribution
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data?.scoreDistribution || []}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="range" />
                <YAxis />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Bar dataKey="count" fill={COLORS.primary} name="Students" />
              </BarChart>
            </ResponsiveContainer>
          </div>               {/* Pass/Fail Pie Chart */}
               <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                     <PieChart className="h-5 w-5 mr-2 text-green-600" />
                     Pass/Fail Distribution
                  </h3>
                  <ResponsiveContainer width="100%" height={300}>
                     <RechartsPieChart>
                        <Tooltip content={<CustomTooltip />} />
                        <Legend />
                        <Pie
                           data={[
                              { name: 'Pass', value: statistics.passRate || 0, fill: COLORS.success },
                              { name: 'Fail', value: statistics.failRate || 0, fill: COLORS.danger }
                           ]}
                           cx="50%"
                           cy="50%"
                           outerRadius={80}
                           dataKey="value"
                           label={({ value }) => `${value}%`}
                        />
                     </RechartsPieChart>
                  </ResponsiveContainer>
               </div>

               {/* Department Performance */}
               {data?.departmentPerformance?.length > 0 && (
                  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6" data-chart="department-performance">
                     <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <Building className="h-5 w-5 mr-2 text-purple-600" />
                        Department Performance
                     </h3>
                     <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={data.departmentPerformance}>
                           <CartesianGrid strokeDasharray="3 3" />
                           <XAxis dataKey="department" />
                           <YAxis />
                           <Tooltip content={<CustomTooltip />} />
                           <Legend />
                           <Bar dataKey="averageMarks" fill={COLORS.secondary} name="Average Marks" />
                        </BarChart>
                     </ResponsiveContainer>
                  </div>
               )}

               {/* Statistics Overview */}
               <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                     <Activity className="h-5 w-5 mr-2 text-indigo-600" />
                     Performance Metrics
                  </h3>
                  <ResponsiveContainer width="100%" height={300}>
                     <AreaChart
                        data={[
                           { metric: 'Average', value: statistics.averageMarks || 0 },
                           { metric: 'Median', value: statistics.medianMarks || 0 },
                           { metric: 'Highest', value: statistics.highestMarks || 0 },
                           { metric: 'Lowest', value: statistics.lowestMarks || 0 }
                        ]}
                     >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="metric" />
                        <YAxis />
                        <Tooltip content={<CustomTooltip />} />
                        <Area type="monotone" dataKey="value" stroke={COLORS.info} fill={COLORS.info} fillOpacity={0.3} />
                     </AreaChart>
                  </ResponsiveContainer>
               </div>
            </div>
         )}

         {activeTab === 'students' && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
               <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                     <h3 className="text-lg font-semibold text-gray-900">
                        Student Results ({filteredResults.length})
                     </h3>
                     <div className="flex items-center space-x-4">
                        <div className="relative">
                           <Search className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                           <input
                              type="text"
                              placeholder="Search students..."
                              value={searchTerm}
                              onChange={(e) => setSearchTerm(e.target.value)}
                              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                           />
                        </div>
                     </div>
                  </div>
               </div>

               <div className="overflow-x-auto">
                  <table className="w-full">
                     <thead className="bg-gray-50">
                        <tr>
                           <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Student
                           </th>
                           <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Department
                           </th>
                           <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Division
                           </th>
                           <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Marks
                           </th>
                           <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Percentage
                           </th>
                           <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Status
                           </th>
                        </tr>
                     </thead>
                     <tbody className="bg-white divide-y divide-gray-200">
                        {filteredResults.map((result, index) => (
                           <tr key={result.student.id} className="hover:bg-gray-50">
                              <td className="px-6 py-4 whitespace-nowrap">
                                 <div className="flex items-center">
                                    <div className="flex-shrink-0 h-10 w-10">
                                       <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                                          <span className="text-sm font-medium text-blue-600">
                                             {result.student.name.charAt(0).toUpperCase()}
                                          </span>
                                       </div>
                                    </div>
                                    <div className="ml-4">
                                       <div className="text-sm font-medium text-gray-900">
                                          {result.student.name}
                                       </div>
                                       <div className="text-sm text-gray-500">
                                          {result.student.studentId}
                                       </div>
                                    </div>
                                 </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                 <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                    {result.student.department}
                                 </span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                 Div {result.student.div}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                 <span className="font-medium">{result.earnedMarks}</span>
                                 <span className="text-gray-500">/{examData?.totalMarks}</span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                 <div className="flex items-center">
                                    <span className="font-medium">{result.percentage}%</span>
                                    <div className="ml-2 w-16 bg-gray-200 rounded-full h-2">
                                       <div
                                          className="bg-blue-600 h-2 rounded-full"
                                          style={{ width: `${result.percentage}%` }}
                                       ></div>
                                    </div>
                                 </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                 <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${result.status === 'Pass' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                                    }`}>
                                    {result.status}
                                 </span>
                              </td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>

               {filteredResults.length === 0 && (
                  <div className="text-center py-12">
                     <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                     <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        No results found
                     </h3>
                     <p className="text-gray-500">
                        Try adjusting your search or filter criteria
                     </p>
                  </div>
               )}
            </div>
         )}
      </div>
   );
};
export default ExamAnalysis;
