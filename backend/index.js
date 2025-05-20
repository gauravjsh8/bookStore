import express, { urlencoded } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import bookRoutes from "./routes/bookRoutes.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
const MONGO_URI = process.env.MONGO_URI;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use(express.json());
app.use(urlencoded({ extended: true }));

app.use("/api/books", bookRoutes);
const dbConnect = () => {
  try {
    mongoose.connect(MONGO_URI);
    console.log("Conneced to the db successfully");
  } catch (error) {
    console.log("Error: ", error);
  }
};

dbConnect();
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

console.log("Hello there");
