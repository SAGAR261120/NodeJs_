// import mongoose from "mongoose";
// import { DB_NAME } from "./constants.js";
// import express from "express";
import connectDB from "./db/index.js";
import env from "dotenv";


env.config({
    path: "./.env",
});

const PORT = process.env.port || 8000

const startServer = async () => {
    try {
        await connectDB();

        app.on("error", (error) => {
            console.log("Server Error:", error);
        });

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });

    } catch (error) {
        console.log("Error while connecting to MongoDB:", error);
        process.exit(1);
    }
};

startServer();

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
