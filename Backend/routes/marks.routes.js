import express from 'express';
import { 
    uploadStudentMarks, 
    uploadBulkMarks, 
    getExamMarks, 
    getStudentExamMarks, 
    updateStudentMarks, 
    deleteStudentMarks 
} from '../controllers/marks.controller.js';
import { protect } from '../middlewares/auth.middlware.js';

const router = express.Router();

// Upload marks for a single student
router.post('/upload-single', protect, uploadStudentMarks);

// Upload marks for multiple students (bulk upload)
router.post('/upload-bulk', protect, uploadBulkMarks);

// Get all marks for an exam
router.get('/exam/:examId', protect, getExamMarks);

// Get marks for a specific student in an exam
router.get('/exam/:examId/student/:studentId', protect, getStudentExamMarks);

// Update marks for a specific student
router.put('/update/:marksId', protect, updateStudentMarks);

// Delete marks for a specific student
router.delete('/delete/:marksId', protect, deleteStudentMarks);

export default router;