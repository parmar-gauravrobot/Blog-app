import dotenv from "dotenv"

dotenv.config()

const env = {
  PORT: process.env.PORT || 8080,
  MONGO_URI: process.env.MONGO_URI || "",
  SECRET_KEY: process.env.SECRET_KEY || "",
  SALT: parseInt(process.env.SALT) || 10
}

export default env