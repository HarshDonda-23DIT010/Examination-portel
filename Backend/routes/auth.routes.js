import express from 'express';

import { register, login, logout } from '../controllers/auth.controllers.js';
import { protect } from '../middlewares/auth.middlewares.js';

const router = express.Router();

router.post('/register',protect, register);
router.post('/login',protect, login);
router.post('/logout', logout);

export default router