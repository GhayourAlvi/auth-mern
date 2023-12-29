const express = require('express');

import connectToMongo from "./db";
import dotenv from "dotenv";
import userRoute from "./Routes/user"
import authRoute from "./Routes/auth"
import { ErrorResponse } from "./Interfaces/ErrorResponse";

dotenv.config()
connectToMongo();
const app=express();

app.use(express.json())
app.listen(3000, () => {
    console.log('Server listening on port 3000');
  });


app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);


// Middleware for handling errors
app.use((err: any, req: any, res: any, next: any) => {
  const statusCode: number = err.statusCode || 500;
  const message: string = err.message || 'Internal Server Error';

  const errorResponse: ErrorResponse = {
    success: false,
    message,
    statusCode,
  };
  res.status(statusCode).json(errorResponse);
});





