import express from "express"
import userRouter from "../api/interface/routes/user.js"
import blogRouter from "../api/interface/routes/blog.js"
 const createRouter = () =>{
  const router = express.Router()
  userRouter(router)
  blogRouter(router)
  return router
}

export default createRouter