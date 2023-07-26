import express, { Request, Response } from "express";
import dotenv from 'dotenv'
import helmet from "helmet";
import cors from 'cors'
import mongoose from "mongoose";
import userRoute from "./routes/user.route.ts";
import recruiterAuthRoute from './routes/authRecruiter.route.ts'
import profileRoute from "./routes/profile.route.ts";
import experiencesRoute from "./routes/experiences.route.ts";
import authRoute from "./routes/auth.route.ts";
import messagesListRoute from "./routes/messagesList.route.ts";
import messageDiscussionRoute from "./routes/messageDiscussion.route.ts";
import cookieParser from "cookie-parser";
import { errorHandler } from "./middleware/errorHandler.ts";


dotenv.config()
const app = express();
app.use(cors ({origin:'http://localhost:3000', credentials:true}))
// app.use(cors ({origin:'https://jhire.vercel.app', credentials:true}))

app.use(express.json());
app.use(cookieParser())
app.use(helmet());


mongoose.set("strictQuery", true);
const connect = async () => {
  try {
    // await mongoose.connect("mongodb://localhost:27017/jhire");
    // await mongoose.connect(`mongodb+srv://fiagafils:${process.env["ATLAS_SECRET"]}@cluster0.ebedins.mongodb.net/`)
    await mongoose.connect(`mongodb+srv://fiagafils:${process.env["ATLAS_SECRET"]}@cluster0.ebedins.mongodb.net/?retryWrites=true&w=majority";`)
    console.log("connect to mongoDB ATLAS"); 
  } catch (error) {
    console.log(error);
  }
};


// router
app.get("/", (req: Request, res: Response) => {
  res.json("Jhire Api");
});

app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/authRecruiter", recruiterAuthRoute);
app.use("/api/profile", profileRoute);
app.use("/api/experiences", experiencesRoute);
app.use("/api/messagesList", messagesListRoute); 
app.use("/api/messageDiscussion", messageDiscussionRoute);

 
app.use(errorHandler)
 
app.listen(8800, () => {
  connect();
  console.log("Listen at port 8800");
});
