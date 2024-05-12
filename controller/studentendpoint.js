import register from "../model/studentschema.js";
 import bcrypt from "bcrypt";
const registeruser = async(req,res)=>{
    try{
const {name,email,password} = req.body;
    if(!name || !email || !password){
    res.send({
        message: "Field Required"
    }); 
}
const hash = await bcrypt.hash(password,10);
const Newsavestudent = new register({name,email,password:hash}).save();
res.send({
message: "New Student Created"
});
}

    catch(error){
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}
export default registeruser;