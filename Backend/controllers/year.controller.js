import prisma from "../DB/db.config.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const addNewYear = asyncHandler(async (req, res) => {
    let { year, startDate, endDate } = req.body;

    if (!year || !startDate || !endDate) {
        throw new ApiError(400, "Please provide academic year, startDate, and endDate.");
    }

    // Step 1: Normalize year string
    year = year.trim().toLowerCase().replace(/[^0-9a-zA-Z]/g, '-');
    const match = year.match(/(\d{4})[-_@]?(\d{4})[-_/\\:]?(odd|even)/);

    if (!match) {
        throw new ApiError(400, "Invalid academic year format. Use format like '2025-2026/odd'");
    }

    const startYear = match[1];
    const endYear = match[2];
    const semester = match[3];

    const formattedYear = `${startYear}-${endYear}/${semester}`;

    // Step 2: Validate & convert date inputs
    const start = new Date(startDate);
    const end = new Date(endDate);

    if (isNaN(start) || isNaN(end)) {
        throw new ApiError(400, "Invalid startDate or endDate format. Use YYYY-MM-DD.");
    }

    // Step 3: Check for duplicates
    const exists = await prisma.year.findFirst({
        where: { year: formattedYear }
    });


    if (exists) {
        throw new ApiError(409, "Academic year already exists.");
    }

    // Step 4: Create new academic year
    const newYear = await prisma.year.create({
        data: {
            year: formattedYear,
            startDate: start,
            endDate: end
        }
    });

    res.status(201).json(new ApiResponse(
        201,
        newYear,
        "Academic year added successfully."
    ));
});


// export const removeYear = asyncHandler()