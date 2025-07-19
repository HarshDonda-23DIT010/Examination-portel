import bcrypt from 'bcrypt';
import prisma from '../DB/db.config.js';

import {
  sendTokenResponse
} from '../utils/helper.js';

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
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: {
        userId
      }
    });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        error: 'User with this ID already exists'
      });
    }

    // Check if email already exists
    const existingEmail = await prisma.user.findUnique({
      where: {
        email
      }
    });

    if (existingEmail) {
      return res.status(400).json({
        success: false,
        error: 'User with this email already exists'
      });
    }

    const hashed = await bcrypt.hash(password, 10);
    const _user = {
      userId,
      name,
      email,
      password: hashed,
      department,
      role
    }
    
    const user = await prisma.user.create({
       data: _user
    }); 

    res.status(201).json({
      success: true,
      message: 'User registered successfully',
      user: {
        userId: user.userId,
        name: user.name,
        email: user.email,
        department: user.department,
        role: user.role
      }
    });
  } catch (err) {
    console.error('Registration error:', err);
    res.status(400).json({
      success: false,
      error: err.message
    });
  }
};

export const login = async (req, res) => {
  const {
    userId,
    password
  } = req.body;
  const user = await prisma.user.findUnique({
    where: {
      userId
    }
  });

  if (!user) return res.status(401).json({
    error: 'User not found'
  });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(401).json({
    error: 'Invalid password'
  });

  sendTokenResponse(res, user);
};

export const logout = (req, res) => {
  res.clearCookie('access_token', {
    httpOnly: true,
    secure: false, // set to true if using HTTPS
    sameSite: 'lax', // adjust based on frontend setup
  });

  return res.status(200).json({
    success: true,
    message: 'Logged out successfully'
  });
};

export const getFaculties = async (req, res) => {
  try {
    const faculties = await prisma.user.findMany({
      where: {
        role: 'Faculty' 
      },
      select: {
        userId: true,
        name: true,
        email: true,
        department: true
      }
    });

    return res.status(200).json({
      success: true,
      faculties
    });
  } catch (error) {
    console.error('Get faculties error:', error);
    return res.status(500).json({
      success: false,
      error: error.message
    });
  }
}