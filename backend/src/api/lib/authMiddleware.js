import jwt from "jsonwebtoken"
import env from "../../infrastructure/env.js"

export default function authMiddleware(req,res,next){
  const token = req.headers.authorization
  try {
    const verify = jwt.verify(token,env.SECRET_KEY)
    if(!verify){
      return res.status(401).json({
        msg:"token required"
      })
    }
      req.userId= verify
      next()
    
  } catch (error) {
    console.log("error occured in auth middlewares", error)
    res.json({
      msg:"error occur in middlewares"
    })
  }

}