import express from 'express';

import { protect } from '../middlewares/auth.middlware.js';
import { AdminProtect } from '../middlewares/admin.middlware.js';
import { addNewYear } from '../controllers/year.controller.js';

const router = express.Router();

router.post('/add-new-year', protect, AdminProtect, addNewYear);


export default router   