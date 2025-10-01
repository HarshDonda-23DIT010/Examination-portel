import express from 'express';
import { protect } from '../middlewares/auth.middlware.js';
import { addSubjectFaculties, getFacultyBySubject, removeSubjectFaculty, updateSubjectFaculty } from '../controllers/subjectFaculty.controller.js';



const router = express.Router();

router.post('/assign', protect, addSubjectFaculties);
router.get('/assigned-faculty/:subjectId', protect, getFacultyBySubject);
router.put('/update/:facultyAssignmentId', protect, updateSubjectFaculty);
router.delete('/remove/:facultyAssignmentId', protect, removeSubjectFaculty);


export default router