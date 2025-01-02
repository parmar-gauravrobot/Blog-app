import express from "express"
import env from "./src/infrastructure/env.js"
import cors from "cors"
import dbConnection from "./src/api/config/db.js"
import createRouter  from "./src/infrastructure/routes.js"


const app = express()

app.use(express.json())
app.use(cors())

dbConnection()
app.use("/v1",createRouter())
app.listen(env.PORT,()=>{
  console.log("server connected successfully")
})