import { s3 } from "../../config/db.js";
import multer from "multer"
import path from "path"
import fs from "fs"


const storage = multer.diskStorage({
  destination: (req,file,cb) =>{
      cb(null,'/')
  },
  filename: (req,file,cb)=>{
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
})
export const upload = multer({storage: storage})
export const fileUpload = async(file) =>{
  const params = {
      Bucket: 'gauravblog',
      Key: file.filename,
      Body: fs.readFileSync(file.path),

  }
  s3.upload(params, (err,data) =>{
      if(err){
          console.log(err)
          return err
      }
      console.log(data.Location)
  })
//   const url = s3.getSignedUrl('getObject',{
//       Bucket: "gauravblog",
//       Key: file.filename,
//   })
  return {
    filename: file.filename
  }

}