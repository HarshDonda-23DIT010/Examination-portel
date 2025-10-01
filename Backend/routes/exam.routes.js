import express from 'express';
import { addExamStudents, createExam, updateExam, updateExamStudents } from '../controllers/exam.controller.js';
import { protect } from '../middlewares/auth.middlware.js';




const router = express.Router();

router.post('/create', protect, createExam);
router.put('/update', protect, updateExam);
router.post('/add-student/:examId', protect, addExamStudents);
router.put('/update-student/:examId', protect, updateExamStudents);



export default router