import express from 'express';
import { addSubject, updateSubject,getSubjectByYearAnsSemester } from '../controllers/subject.controller.js';
import { protect } from '../middlewares/auth.middlware.js';
import { adminAndHodProtect } from '../middlewares/adminAndHod.middlware.js';



const router = express.Router();

router.post('/add-new', protect, adminAndHodProtect, addSubject);
router.put('/update', protect, adminAndHodProtect, updateSubject);
router.get('/get-subject-by-year-semester/:yearId/:semester' ,protect , adminAndHodProtect, getSubjectByYearAnsSemester);


export default router