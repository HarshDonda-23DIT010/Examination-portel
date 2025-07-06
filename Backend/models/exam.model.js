import mongoose from "mongoose"

const examSchema = new mongoose.Schema({
    ExamName: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    subject: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subject'
    },
    faculty: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    eligibleStudent: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Student'
        }
    ],
    totalMarks: {
        type: Number,
        required: true
    }
}, { timestamps: true })

export const Exam = mongoose.model("Exam", examSchema);