import mongoose from "mongoose"


const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    minLength: 6,
    required: true
  }
})

const user = mongoose.model("user",userSchema)

export default user