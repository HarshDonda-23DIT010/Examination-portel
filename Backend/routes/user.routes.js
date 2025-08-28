import express from 'express';

import { register, loginAdmin, logout, getAllUsers, userUpdateByAdminAndHOD, removeUser, changePassword, loginFaculties } from '../controllers/user.controller.js';
import { protect } from '../middlewares/auth.middlware.js';
import { AdminProtect } from '../middlewares/admin.middlware.js';

const router = express.Router();

router.post('/register', register);
router.post('/login-Admin', loginAdmin);
router.post('/login-Faculty', loginFaculties);
router.get('/logout', logout);
router.put('/update-user', protect, userUpdateByAdminAndHOD);
router.put('/change-pass/:userId', protect, changePassword);
router.get('/delete-user/:userId', protect, removeUser);
router.get('/get-all-users', protect, getAllUsers);

export default router