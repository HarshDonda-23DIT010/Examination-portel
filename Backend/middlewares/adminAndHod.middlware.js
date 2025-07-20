import { ApiError } from '../utils/apiError.js';
import { asyncHandler } from '../utils/asyncHandler.js';

export const adminAndHodProtect = asyncHandler((req, res, next) => {
    const user = req.user;

    if (user.role !== "HOD" && user.role != "Admin") {
        throw new ApiError(401, "You don't have credentials to access this route.");
    }

    next(); // Proceed if role is Admin
});
