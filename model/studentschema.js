import mongoose from "mongoose";
const student = new mongoose.Schema({
    name:{
        type: String,
        lower: true,
        require: true
    },
    email:{
        type: String,
        lower: true,
        require: true,
        unique: true
    },
    password:{
        required: true,
        type: String,
    },
});
const register = mongoose.model("ITstudent",student);
export default register;