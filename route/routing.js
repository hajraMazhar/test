import express from "express";
import registerstd from "../controller/studentendpoint.js";
const router = express.Router();
router.post("/register",registerstd);


export default router;