import express from "express";
import Blog from "../models/Blog.js";
const router = express.Router();

router.get("/", async(req,res)=>{
 res.json(await Blog.find());
});

router.post("/", async(req,res)=>{
 await Blog.create(req.body);
 res.json({success:true});
});

export default router;