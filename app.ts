import express, { Request, Response } from "express";
import dotenv from "dotenv";
import connectDB from "./config/mongodb";

dotenv.config();

const PORT = process.env.PORT;
const dbUrl = process.env.DATABASE_URI;

const app = express();

// connectDB(dbUrl);

app.get("/", (req: Request, res: Response) => {
  res.send(`<h1 style="color: aqua; font-size:8rem">Hello Express</h1>`);
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
