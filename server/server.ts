import express, { Request, Response } from "express";
import mongoose from "mongoose";

const app = express();

mongoose.set("strictQuery", true);

const connect = async () => {
    try {
    await mongoose.connect('mongodb://localhost:27017/')
    console.log('connect to mongoDB')
} catch (error) {
    console.log(error)
}}


app.get("/", (req: Request, res: Response) => {

  res.sendStatus(200);

});

app.listen(3000, () => {
    connect()
  console.log("Listen at port 3000");
});
