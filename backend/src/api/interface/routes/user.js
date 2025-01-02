import { Signup } from "../controller/user_controller.js"


const userRouter = (router) =>{
  router.post("/user/signup",Signup)
}

export default userRouter