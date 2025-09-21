import express from 'express';
import { protect } from '../middlewares/auth.middlware.js';
import { AddSubjectFaculties } from '../controllers/subjectFaculty.controller.js';



const router = express.Router();

router.post('/assign',protect, AddSubjectFaculties);


export default router