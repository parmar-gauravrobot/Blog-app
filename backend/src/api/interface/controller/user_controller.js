
import env from "../../../infrastructure/env.js"
import user from "../../config/schemas/user.schema.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


export const Signup = async(req,res) =>{
  const body = req.body
  try {
    const users =  await user.findOne({email: body.email})
    console.log(users)
    if(users || users !== null){
      return res.status(403).json({
        msg: "user already exists"
      })
    } 

    const hashedPass = await bcrypt.hash(body.password,env.SALT)
    const response = await user.create({
      name: body.name,
      username: body.username,
      email: body.email,
      password: hashedPass
    })
    const token = jwt.sign(response._id.toHexString(),env.SECRET_KEY)
    res.json({
      token: token,
      username: response.username
    })
  } catch (error) {
    console.log("error while signing up",error)
     return res.status(401).json({
      msg: "error while signing up"
    })
  }

}

export const Singin = async (req,res)=>{
  const body = req.body
  try {
    const checkUser = await user.findOne({email:body.email})
    if(!checkUser || checkUser===null){
      return res.status(403).json({
        msg:"user does not exist. Please signUp first!"
      })
    }
    const comparePass = await bcrypt.compare(body.password,checkUser.password)
    if(!comparePass || comparePass===null){
      return res.status(403).json({
        msg:"You entered wrong Password"
      })
    }

    const token =  jwt.sign(checkUser._id.toHexString(),env.SECRET_KEY)
    res.send({
      msg:"User signIn successfully",
      token:token
    })
    
  } catch (error) {
    console.log("errorr while signIn", error)
    res.status(401).json({
      msg:"error occured while singin"
    })
    
  }
}