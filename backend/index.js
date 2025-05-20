import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
const MONGO_URI = process.env.MONGO_URI;

app.get("/", (req, res) => {
  res.send("Hello World");
});

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
