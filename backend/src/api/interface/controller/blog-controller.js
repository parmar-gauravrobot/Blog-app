
import env from "../../../infrastructure/env.js"
import blog from "../../config/schemas/blog.schema.js"
import { fileUpload } from "../model/blog.model.js"

export const  createBlog=async(req,res)=>{
  const body= req.body
  const file = req.file
  const currentDate = Date.now()
  console.log(body)
  console.log(file)
  try {
    const uploaded = await fileUpload(file)
    const url = `${env.AWS_DOMAIN}/${uploaded.filename}`
    console.log(url)
    const response = await blog.create({
      title:body.title,
      description:body.description,
      imageUrl: url,
      createdBy:req.userId,
      date: currentDate,

    })
    res.json({
      msg:"blog created successfully"
    })
  } catch (error) {
    console.log("error occured while posting a blog",error)
    res.status(401).json({
      msg:"error occured while creating a blog"
    })
    
  }
}

export const readAllBlogs = async(req,res)=>{
  try {
    const response = await blog.find()
    res.json()
    
  } catch (error) {
    //403 for catch errror
    //401 for anauthorized error
    res.status(403).json({
      msg:"error occured while reading blogs"
    })
    
  }

}

export const readMyBlogs = async(req,res)=>{
  try {
    const response = await blog.find({createdBy:req.userId})
    res.json(response)
    
  } catch (error) {
    res.status(403).json({
      msg:"error occured while reading mt blogs"
    })
    
  }

}

export const deleteMyBlogs = async(req,res)=>{
  const body = req.body
  try {
    const response= await blog.deleteOne({_id: body.id})
    res.json({
      msg: "deleted succesfully"
    })
  } catch (error) {
    res.status(403).json({
      msg:"error occured while deleting my blog"
    })
    
  }

}

export const updateMyBlogs = async(req,res) =>{
  const body= req.body
  try {
    const response= await blog.updateOne({_id:body.id},{
      title:body.title,
      description:body.description,
      date: body.date,
      createdBy: req.userId,
      imageUrl: body.imageUrl
    })
    res.json({
      msg: "updated successfully"
    })
  } catch (error) {
    console.log("error in updating", error)
    res.status(403).json({
      msg:"error occured while updating blog"
    })
    
  }

}
