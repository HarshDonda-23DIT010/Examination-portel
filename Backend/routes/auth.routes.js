import express from 'express';

import { register, login, logout, getFaculties } from '../controllers/user.controllers.js';
import { protect } from '../middlewares/auth.middlewares.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/logout', logout);
router.get('/get-all-faculties', protect, getFaculties);

export default router