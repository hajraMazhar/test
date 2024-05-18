import express from "express";
import {registeruser,login,delete1,update1} from "../controller/studentendpoint.js";
const router = express.Router();
router.post("/register",registeruser);
router.get("/login",login);
router.delete("/delete/:id",delete1);
router.put("/update1/:id",update1);
export default router;