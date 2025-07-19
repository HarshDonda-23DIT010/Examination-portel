import express from 'express';

import { protect } from '../middlewares/auth.middlware.js';
import { adminAndHodProtect } from '../middlewares/adminAndHod.middlware.js';
import { addOneStudent, bulkUploadStudents, getAllStudent, updateStudent } from '../controllers/student.controller.js';
import upload from '../utils/multer/upload.js';

const router = express.Router();

router.post('/add-one-student', protect, adminAndHodProtect, addOneStudent);
router.route('/bulk-upload-student').post(upload.single('file'), adminAndHodProtect, bulkUploadStudents);
router.put('/update-one-user', protect, adminAndHodProtect, updateStudent);
router.get('/get-all-students', protect, getAllStudent)



export default router   