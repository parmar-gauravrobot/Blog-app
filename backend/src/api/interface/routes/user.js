import { createBlog,deleteMyBlogs,readAllBlogs, readMyBlogs, updateMyBlogs } from "../controller/blog-controller.js"
import { generateOtp, Signin, Signup } from "../controller/user_controller.js"
import authMiddleware from "../../lib/authMiddleware.js"
import { upload } from "../model/blog.model.js"

const userRouter = (router) =>{
  const multiple = [authMiddleware,upload.single('file')]
  router.post("/user/signup",Signup),
  router.post("/user/generateOtp",generateOtp),
  router.post("/user/signin", Signin),
  router.post("/user/createBlog",multiple,createBlog),
  router.get("/user/readAllBlogs",readAllBlogs)
  router.get("/user/readMyBlogs",authMiddleware, readMyBlogs)
  router.delete("/user/deleteMyBlogs",authMiddleware, deleteMyBlogs)
  router.put("/user/updateMyBlogs", authMiddleware, updateMyBlogs)

}

export default userRouter