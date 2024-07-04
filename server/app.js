import express from "express";
import cookieParser from "cookie-parser";
import authRoute from "./routes/authRoute.js";
import cors from "cors";
import dotenv from 'dotenv';
dotenv.config();
const app=express();


app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use('/api/auth',authRoute);

app.listen(3000,()=>{ 
    console.log("Server is running on port 3000");
});