import mongoose from "mongoose";
import env from "../../infrastructure/env.js";

async function dbConnection() {
  mongoose
    .connect(env.MONGO_URI)
    .then(() => {
      console.log("database connected successfully");
    })
    .catch((error) => {
      console.log("error occured while connecting to database", error);
    });
}

export default dbConnection
