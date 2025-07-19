import bcrypt from 'bcrypt';
import prisma from '../DB/db.config.js';

import {
  generateToken
} from '../utils/helper.js';
import { ApiResponse } from '../utils/apiResponse.js';
import { ApiError } from '../utils/apiError.js';
import { asyncHandler } from '../utils/asyncHandler.js';


export const register = asyncHandler(async (req, res) => {
  const {
    userId,
    name,
    email,
    password,
    department,
    role
  } = req.body;

  if (
    !userId ||
    !name ||
    !email ||
    !password ||
    !department ||
    !role
  ) {
    throw new ApiError(
      400,
      "Fill all the fields."
    )
  }

  const existingUser = await prisma.user.findFirst({
    where: {
      OR: [
        { userId: userId },
        { email: email }
      ]
    }
  });

  if (existingUser) {
    const conflictField = existingUser.userId === userId ? 'User ID' : 'Email';
    throw new ApiError(
      409,
      `${conflictField} alredy exist.`
    );
  }

  const hashed = await bcrypt.hash(password, 10);
  const _user = {
    userId,
    name,
    email,
    password: hashed,
    department,
    role
  };

  const user = await prisma.user.create({
    data: _user
  });

  res.status(201).json(new ApiResponse(
    200,
    {
      userId: user.userId,
      name: user.name,
      email: user.email,
      department: user.department,
      role: user.role
    },
    'User registered successfully',
  ));
})

export const login = asyncHandler(async (req, res) => {
  const {
    userId,
    password
  } = req.body;

  if (
    !userId ||
    !password
  ) {
    throw new ApiError(
      400,
      "Fill all the fields."
    )
  }

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

  const accessToken = generateToken(user.id);

  const options = {
    httpOnly: true,
    secure: false,
    sameSite: 'lax',
    maxAge: 24 * 60 * 60 * 1000, // 1 day
  }

  return res
    .status(200)
    .cookie("AccessToken", accessToken, options)
    .json(new ApiResponse(
      200,
      {
        userId: user.userId,
        name: user.name,
        email: user.email,
        department: user.department,
        role: user.role
      },
      "Login Successful"
    ))
})

export const logout = asyncHandler((req, res) => {
  const options = {
    httpOnly: true,
    secure: true
  };

  return res
    .status(200)
    .clearCookie("AccessToken", options)
    .json(new ApiResponse(200, {}, "User logged out"))
})

export const getFaculties = asyncHandler(async (req, res) => {

  const faculties = await prisma.user.findMany({
    where: {
      role: 'Faculty'
    },
    select: {
      userId: true,
      name: true,
      email: true,
      department: true,
      role: true
    }
  });

  return res.status(200).json(
    new ApiResponse(
      200,
      faculties,
      "All Faculty fetched successfully."
    )
  );

})


