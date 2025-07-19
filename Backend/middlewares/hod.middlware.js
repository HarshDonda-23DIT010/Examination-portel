import { ApiError } from '../utils/apiError.js';
import { asyncHandler } from '../utils/asyncHandler.js';

export const HODProtect = asyncHandler((req, res, next) => {
    const user = req.user;

    if (user.role !== "HOD") {
        throw new ApiError(401, "You don't have credentials to access this route.");
    }

    next(); // Proceed if role is Admin
});
