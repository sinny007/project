import express from "express";
import mongoose from "mongoose";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import cors from "cors";
import Contact from "./models/Contact.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// MongoDB Connect
mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));

// Send Contact
app.post("/contact", async (req,res)=>{
  const {name,email,message} = req.body;

  // Save to MongoDB
  await Contact.create({name,email,message});

  // Send Email
  const transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
      user:process.env.EMAIL,
      pass:process.env.EMAIL_PASS
    }
  });

  await transporter.sendMail({
    from: email,
    to: process.env.EMAIL,
    subject: "New Portfolio Contact",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  });

  res.json({success:true});
});

import contactRoutes from "./routes/contact.js";
app.use("/api/contact", contactRoutes);

import authRoutes from "./routes/auth.js";
app.use("/api/auth",authRoutes);


app.listen(3000, ()=>console.log("Server running http://localhost:3000"));