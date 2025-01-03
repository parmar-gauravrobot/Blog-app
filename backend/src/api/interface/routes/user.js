import { Signup, Singin } from "../controller/user_controller.js"


const userRouter = (router) =>{
  router.post("/user/signup",Signup),
  router.post("/user/signin", Singin)
}

export default userRouter