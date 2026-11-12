// import mongoose from "mongoose";
// import { DB_NAME } from "./constants.js";
// import express from "express";
import connectDB from "./db/index.js";
import env from "dotenv";


env.config({
    path: "./.env",
});


connectDB()

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGO_BD_URI}/${DB_NAME}`);
//     const app = express();
//     app.on("error", (err) => {
//       console.log("Error while connecting to MongoDB", err);
//       throw err;
//     });
//     app.listen(process.env.PORT, () => {
//       console.log(`Server is running on port ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.log("Error while connecting to MongoDB", error);
//   }
// })();
