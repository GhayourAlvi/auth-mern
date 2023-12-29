const express = require('express');

import connectToMongo from "./db";
import dotenv from "dotenv";
import userRoute from "./Routes/user"

dotenv.config()
connectToMongo();
const app=express();


app.listen(3000, () => {
    console.log('Server listening on port 3000');
  });


app.use("/api/user", userRoute);






