import express from "express";
import Contact from "../models/Contact.js";
const router = express.Router();

// API ดึงข้อความทั้งหมด
router.get("/", async(req,res)=>{
 const data = await Contact.find().sort({date:-1});
 res.json(data);
});

export default router;