import { User } from "../models/user.model.js"
import { ApiError } from "../utils/apiError.js"

const generateAccessToken = async (userId) => {
    try {
        const user = await User.findOne({ userId })
        const accessToken = user.generateAccessToken()

        return accessToken;
    } catch (error) {
        throw new ApiError(500, "Somethings went wrong while generating Access Token.")
    }
}

