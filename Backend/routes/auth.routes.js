import express from 'express';

import { register, login, logout, getFaculties } from '../controllers/user.controllers.js';
import { protect } from '../middlewares/auth.middlware.js';
import { AdminProtect } from '../middlewares/admin.middlware.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/logout', logout);
router.get('/get-all-faculties', protect, getFaculties);

export default router