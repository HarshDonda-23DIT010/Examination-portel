import mongoose from "mongoose"

const departmentSchema = new mongoose.Schema({
    departmentName : {
        type:String,
        required:true,
        trim:true,
        unique:true,
        enum : ["DCS","DIT","DCS"]
    },
    HOD:{
        types:mongoose.Schema.Types.ObjectId,
        ref : 'User'
    }
},{timestamps:true})

export const Department = mongoose.model("Department",departmentSchema);