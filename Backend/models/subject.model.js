import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema({
    subjectCode: {
        type: String,
        required: true,
        trim: true
    },
    subjectName: {
        type: String,
        required: true,
        trim: true
    },
    semester: {
        type: Number,
        required: true,
        validate: {
            validator: function (v) {
                return [1, 2, 3, 4, 5, 6, 7, 8].includes(v)
            },
            message: props => `${props.value} is not valid semester!`
        }
    },
    subjectHead: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    department: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Department'
        }
    ],
    student: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Student'
        }
    ]

}, { timestamps: true })

export const Subject = mongoose.model("Subject", subjectSchema)