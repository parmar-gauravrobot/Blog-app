
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
    res.status(401).json({
      msg: "error while signing up"
    })
  }

}