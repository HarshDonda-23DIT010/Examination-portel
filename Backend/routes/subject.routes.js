import express from 'express';
import { addSubject, updateSubject,getSubjectByYearAnsSemester, getFacultySubjects, addStudentsInSubject, getSubjectStudents, updateSubjectStudents } from '../controllers/subject.controller.js';
import { protect } from '../middlewares/auth.middlware.js';
import { adminAndHodProtect } from '../middlewares/adminAndHod.middlware.js';



const router = express.Router();

router.post('/add-new', protect, adminAndHodProtect, addSubject);
router.put('/update', protect, adminAndHodProtect, updateSubject);
router.get('/get-subject-by-year-semester/:yearId/:semester' ,protect , adminAndHodProtect, getSubjectByYearAnsSemester);
router.get('/get-faculty-subjects/:userId/:yearId/:semester',protect, getFacultySubjects);
router.post("/add-students-in-subject", protect, addStudentsInSubject);
router.get("/subject-students/:subjectId", protect, getSubjectStudents);
router.put("/update-subject-students/:subjectId", protect, updateSubjectStudents);
export default router