import express, { Errback, ErrorRequestHandler, NextFunction, Request, Response } from "express";
import dotenv from 'dotenv'
import helmet from "helmet";
import mongoose from "mongoose";
import userRoute from "./routes/user.route.ts";
import profileRoute from "./routes/profile.route.ts";
import messageRoute from "./routes/message.route.ts";
import userAuth from "./routes/auth.route.ts";
import cookieParser from "cookie-parser";


dotenv.config()
const app = express();
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


app.use((err: any,req:Request,res:Response,next:NextFunction) => {

  const errorStatus = err.status || 500
  const errorMessage  = err.message  || 'something went wrong'

  return res.status(errorStatus).send(errorMessage)

})


app.listen(8800, () => {
  connect();
  console.log("Listen at port 8800");
    
});
