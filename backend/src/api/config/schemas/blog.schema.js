import mongoose from "mongoose"

const blogSchema = new mongoose.Schema({
  title:{
    type:String,
    required: true
  },
  description:{
    type:String,
    required:true
  },
  imageUrl:{
    type:String,
    required:true
  },
  createdBy:{
    type: mongoose.Types.ObjectId, 
    ref: "user"
  },
  date:{
    type:Date,
    required:true
  }
})
 const blog = mongoose.model("blog",blogSchema)
 export default blog