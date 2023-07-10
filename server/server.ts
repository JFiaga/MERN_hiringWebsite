import express, { Request, Response } from "express";
import dotenv from 'dotenv'
import helmet from "helmet";
import cors from 'cors'
import mongoose from "mongoose";
import userRoute from "./routes/user.route.ts";
import profileRoute from "./routes/profile.route.ts";
import messageRoute from "./routes/message.route.ts";
import userAuth from "./routes/auth.route.ts";
import cookieParser from "cookie-parser";
import { errorHandler } from "./middleware/errorHandler.ts";


dotenv.config()
const app = express();
app.use(cors ({origin:'http://localhost:3000', credentials:true}))
app.use(express.json());
app.use(cookieParser())
app.use(helmet());


mongoose.set("strictQuery", true);
const connect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/jhire");
    console.log("connect to mongoDB");
  } catch (error) {
    console.log(error);
  }
};


// router
app.get("/", (req: Request, res: Response) => {
  res.sendStatus(200);
});

app.use("/api/user", userRoute);
app.use("/api/auth", userAuth);
app.use("/api/profile", profileRoute);
app.use("/api/message", messageRoute);


app.use(errorHandler)

app.listen(8801, () => {
  connect();
  console.log("Listen at port 8801");
    
});
