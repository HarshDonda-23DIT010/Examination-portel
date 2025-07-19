import express from 'express';

import { register, login, logout, getFaculties } from '../controllers/auth.controllers.js';
import { protect } from '../middlewares/auth.middlewares.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);
router.get('/get-faculties' ,protect, getFaculties);

export default router