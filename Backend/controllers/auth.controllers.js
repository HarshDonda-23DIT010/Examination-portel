import bcrypt from 'bcrypt';
import prisma from '../DB/db.config.js';

import { sendTokenResponse } from '../utils/helper.js';

export const register = async (req, res) => {
      const {
    userId,
    name,
    email,
    password,
    department,
    role
  } = req.body;


  try {
    const hashed = await bcrypt.hash(password, 10);
    const _user = {
        userId,
        name,
        email,
        password: hashed,
        department,
        role
    }
    const user = await prisma.user.create({ data:_user });

    sendTokenResponse(res, user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) return res.status(401).json({ error: 'User not found' });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(401).json({ error: 'Invalid password' });

  sendTokenResponse(res, user);
};

export const logout = (req, res) => {
  res.clearCookie('access_token', {
    httpOnly: true,
    secure: false,   // set to true if using HTTPS
    sameSite: 'lax', // adjust based on frontend setup
  });

  return res.status(200).json({ success: true, message: 'Logged out successfully' });
};

