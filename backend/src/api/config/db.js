import mongoose from "mongoose";
import env from "../../infrastructure/env.js";
import AWS from "aws-sdk"

AWS.config.update({
    accessKeyId: env.AWS_ACCESS_KEY, 
    secretAccessKey: env.AWS_SECRET_KEY, 
    region: env.AWS_REGION
})


export const s3 = new AWS.S3()
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
