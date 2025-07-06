import mongoose from "mongoose"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    userId: {
        type: Number,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: [true, "password is required"],
    },
    department: {
        type: String,
        required: true,
        enum: ["DCS", "DCE", "DIT"]
    },
    refreshToken : {
        type : String
    },
}, { timestamps: true })


export const User = mongoose.model("User", userSchema);

// before save any data check password is bcrypted or not
userSchema.pre("save", async function (next) {

    // check password is modified
    if (!this.isModified("password")) return next();

    // hash password
    this.password = await bcrypt.hash(this.password, 10);
    next();
})

// check password is correct or not
userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
}

// generate access token
userSchema.methods.generateAccessToken = function () {
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

userSchema.methods.generateRefreshTokem = function () {

           return jwt.sign({
                _id : this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn : process.env.REFRESH_TOKEN_EXPIRY
        }
    
    )

}

