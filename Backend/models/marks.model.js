import mongoose from "mongoose";

const marksSchema = new mongoose.Schema({
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student'
    },
    subject: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subject'
    },
    exam: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Exam'
    },
    earnedMarks: {
        type: Number,
        required: true
    }
}, { timestamps: true })

export const Marks = mongoose.model("Marks", marksSchema)