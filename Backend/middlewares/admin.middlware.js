import { ApiError } from '../utils/apiError.js';
import { asyncHandler } from '../utils/asyncHandler.js';

export const AdminProtect = asyncHandler((req, res, next) => {
  const user = req.user;

  if (user.role !== "Admin") {
    console.log(user.role);
    
    throw new ApiError(401, "You don't have credentials to access this route.");
  }

  next(); // Proceed if role is Admin
});
