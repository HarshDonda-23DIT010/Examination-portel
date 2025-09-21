import express from 'express';
import { protect } from '../middlewares/auth.middlware.js';
import { addSubjectFaculties, getFacultyBySubject } from '../controllers/subjectFaculty.controller.js';



const router = express.Router();

router.post('/assign', protect, addSubjectFaculties);
router.get('/assigned-faculty/:subjectId', protect, getFacultyBySubject);


export default router