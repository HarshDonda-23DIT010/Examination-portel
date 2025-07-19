import express from 'express';

import { register, login, logout, getAllUsers } from '../controllers/user.controllers.js';
import { protect } from '../middlewares/auth.middlware.js';
import { AdminProtect } from '../middlewares/admin.middlware.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/logout', logout);
router.get('/get-all-users', protect, getAllUsers);

export default router