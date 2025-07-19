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

  if (!["Admin", "HOD", "Faculty"].includes(role)) {
    throw new ApiError(401, "Your role does not match allowed roles.");
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


// when below function called then userId will be not change therefore in the frontend disable userId field.
export const userUpdateByAdminAndHOD = asyncHandler(async (req, res) => {

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

  if (!["Admin", "HOD", "Faculty"].includes(role)) {
    throw new ApiError(401, "Your role does not match allowed roles.");
  }

  const existingUser = await prisma.user.findFirst({
    where: {
      OR: [
        { userId: userId },
        { email: email }
      ]
    }
  });

  if (!existingUser) {
    throw new ApiError(
      409,
      `user not exist.`
    );
  }

  const hashed = await bcrypt.hash(password, 10);

  const user = await prisma.user.update({
    where: {
      userId
    },
    data: {
      name,
      email,
      password: hashed,
      department,
      role
    }
  });

  return res.status(200).json(
    new ApiResponse(
      200,
      user,
      "User updates successfully."
    )
  )
})

export const changePassword = asyncHandler(async (req, res) => {
  const { oldPassword, newPassword } = req.body;
  const { userId } = req.params;

  // 1. Find the user
  const user = await prisma.user.findUnique({
    where: { userId }
  });

  if (!user) {
    throw new ApiError(404, "User not found.");
  }

  // 2. Compare old password
  const isMatch = await bcrypt.compare(oldPassword, user.password);
  if (!isMatch) {
    throw new ApiError(401, "Old password is incorrect.");
  }

  // 3. Hash new password
  const hashedNewPassword = await bcrypt.hash(newPassword, 10);

  // 4. Update password in DB
  await prisma.user.update({
    where: { userId },
    data: {
      password: hashedNewPassword
    }
  });

  // 5. Respond
  return res.status(200).json(
    new ApiResponse(200, null, "Password changed successfully.")
  );
});


export const removeUser = asyncHandler(async (req, res) => {
  const { userId } = req.params;

  // 1. Check if user exists
  const user = await prisma.user.findUnique({
    where: { userId }
  });

  if (!user) {
    throw new ApiError(404, "User not found.");
  }

  // 2. Delete user
  await prisma.user.delete({
    where: { userId }
  });

  // 3. Return success response
  return res.status(200).json(
    new ApiResponse(200, null, `User with userId '${userId}' deleted successfully.`)
  );
});


export const getAllUsers = asyncHandler(async (req, res) => {

  const faculties = await prisma.user.findMany({
    where: {
      NOT: {
        role: "Admin"
      }
    }
  });

  return res.status(200).json(
    new ApiResponse(
      200,
      faculties,
      "All users fetched successfully."
    )
  );

})

