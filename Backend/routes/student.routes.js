import express from 'express';

import { protect } from '../middlewares/auth.middlware.js';
import { adminAndHodProtect } from '../middlewares/adminAndHod.middlware.js';
import { addOneStudent, bulkPromoteStudent, bulkUploadStudents, getDepartmentStudent, selectedStudentPromote, updateStudent } from '../controllers/student.controller.js';
import upload from '../utils/multer/upload.js';

const router = express.Router();

router.post('/add-one-student', protect, adminAndHodProtect, addOneStudent);
router.route('/bulk-upload-student').post(
    upload.single('file'),
    protect,
    adminAndHodProtect,
    bulkUploadStudents
);
router.put('/update-one-user', protect, adminAndHodProtect, updateStudent);
router.get('/get-department-students/:department', protect, getDepartmentStudent)
router.put(
    '/bulk-promote-student',
    upload.single('file'),
    protect,
    adminAndHodProtect,
    bulkPromoteStudent
)
router.put('/promote-selected-student',protect,adminAndHodProtect,selectedStudentPromote)



export default router   