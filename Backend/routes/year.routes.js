import express from 'express';

import { protect } from '../middlewares/auth.middlware.js';
import { AdminProtect } from '../middlewares/admin.middlware.js';
import { addNewYear, getAllYear } from '../controllers/year.controller.js';

const router = express.Router();

router.post('/add-new-year', protect, AdminProtect, addNewYear);
router.get('/get-all-years', protect, getAllYear);

export default router