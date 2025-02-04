import dotenv from "dotenv"

dotenv.config()

const env = {
  PORT: process.env.PORT || 8080,
  MONGO_URI: process.env.MONGO_URI || "",
  SECRET_KEY: process.env.SECRET_KEY || "",
  SALT: parseInt(process.env.SALT) || 10,
  AWS_ACCESS_KEY: process.env.AWS_ACCESS_KEY || "",
  AWS_SECRET_KEY: process.env.AWS_SECRET_KEY || "",
  AWS_REGION: process.env.AWS_REGION || "",
  AWS_DOMAIN: process.env.AWS_DOMAIN || "",
  EMAIL_USER: process.env.EMAIL_USER || "",
  EMAIL_PASS: process.env.EMAIL_PASS || ""
}

export default env