import mongoose from "mongoose"

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    studentId: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true,
        enum: ["DCS", "DCE", "DIT"]
    }
}, { timestamps: true })

export const StudentSchema = mongoose.model("StudentSchema", studentSchema);