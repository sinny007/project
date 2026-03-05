import express from "express";
import jwt from "jsonwebtoken";
import Admin from "../models/Admin.js";
const router=express.Router();

router.post("/login", async(req,res)=>{
 const {username,password}=req.body;
 const admin = await Admin.findOne({username,password});
 if(!admin) return res.send("Invalid");

 const token = jwt.sign({id:admin._id},"SECRET");
 res.json({token});
});

export default router;