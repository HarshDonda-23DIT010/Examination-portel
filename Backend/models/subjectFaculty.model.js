import mongoose from "mongoose"

const subjectFacultySchema = new mongoose.Schema({
    faculty:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    subject:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Subject'
    },
    department:{
        type : mongoose.Schema.Types.ObjectId,
        ref:'Department'
    }
},{timestamps:true})

export const SubjectFaculty = mongoose.model("SubjectFaculty",subjectFacultySchema);