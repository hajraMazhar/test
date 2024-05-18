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


const login = async(req,res)=>{
    try{
    const {email} = req.body;
    const loginuser = await register.findOne({email:email});
    if(!loginuser){
        res.send({
            message: "enter correct email"
        })
    }
    else{
        res.send({
            message: "login successfully"
        })
        console.log("login successfully");
    }
    }
    catch(error){
        console.log(err.message);
        res.send({
            message:`error occur ${err.message}`
        })
    }
}
const delete1 = async(req,res)=>{
    try{
     const deleteuser = await register.deleteOne();
     if(!deleteuser)
        {
            res.send({
                message:"User not deleted"
            })
        }
    else{
        res.send({
            message:"User Deleted",
            success:"true"
        })
    }
    }
    catch(error){
        console.log(err.message);
        res.send({
            message:`error occur ${err.message}`
        })
}
}
const update1 = async(req,res)=>{
    try{
     const updateuser = await register.updateOne({...req.body});
     if(!updateuser)
        {
            res.send({
                message:"User not updated"
            })
        }
    else{
        res.send({
            message:"User updated",
            success:"true"
        })
        console.log(updateuser);
    }
    }
    catch(error){
        console.log(err.message);
        res.send({
            message:`error occur ${err.message}`
        })
}
}
export {registeruser,login,delete1,update1};