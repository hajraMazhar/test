import mongoose from "mongoose";
const connecttodb = async ()=>{
    try{
    await mongoose.connect(process.env.DATABASE, {
         dbName: "practice" 
    //     // useNewUrlParser: true,
    //     // useUnifiedTopology: true
    });
     console.log("Connected TO Database");
    }
    catch(error){
        console.log(error);
        // res.send({
        //     message:"found error"
        // })
    }
}

export default connecttodb;