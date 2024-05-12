import express from "express";
import bodyparser from "body-parser";
import dotenv from "dotenv";
import connectdb from "./Database/connection.js";
import router from "./route/routing.js";

const app = express();
dotenv.config();
app.use(bodyparser.json());
app.use("/api/v1",router);
connectdb();

app.listen(process.env.PORT,()=>{
    console.log(`Server is listen at the port ${process.env.PORT}`);
})
