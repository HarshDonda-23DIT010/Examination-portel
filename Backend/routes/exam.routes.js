import express from 'express';
import { addExamStudents, createExam, updateExam, updateExamStudents, getExamsBySubject, getExamById, deleteExam, getExamStudents, getExamAnalysis } from '../controllers/exam.controller.js';
import { protect } from '../middlewares/auth.middlware.js';




const router = express.Router();

router.post('/create', protect, createExam);
router.put('/update/:examId', protect, updateExam);
router.get('/subject/:subjectId', protect, getExamsBySubject);
router.get('/:examId', protect, getExamById);
router.delete('/:examId', protect, deleteExam);
router.post('/add-student/:examId', protect, addExamStudents);
router.put('/update-student/:examId', protect, updateExamStudents);
router.get('/students/:examId', protect, getExamStudents);
router.get('/analysis/:examId', protect, getExamAnalysis);



export default router