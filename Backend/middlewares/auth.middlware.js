import jwt from 'jsonwebtoken';
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from '../utils/apiError.js';
import prisma from '../DB/db.config.js';

export const protect = asyncHandler(async (req, res, next) => {
  const token = req.cookies.AccessToken;

  if (!token) {
    throw new ApiError(401, "Unauthorized request - token missing or malformed");
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // console.log(decoded.id);
    

    const user = await prisma.user.findFirst({
      where: { id: parseInt(decoded.id) },
      select: {
        userId: true,
        name: true,
        department: true,
        email: true,
        role: true
      }
    });

    if (!user) {
      throw new ApiError(401, "Unauthorized: User not found");
    }

    req.user = user;
    next();
  } catch (error) {
    throw new ApiError(401, "Unauthorized: " + error.message);
  }
});

