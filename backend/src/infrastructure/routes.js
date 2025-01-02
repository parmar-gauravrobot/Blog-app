import express from "express"
import userRouter from "../api/interface/routes/user.js"
 const createRouter = () =>{
  const router = express.Router()
  userRouter(router)
  return router
}

export default createRouter