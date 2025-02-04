import React, { useEffect, useState } from "react";
import { toast, Toaster } from "sonner";
import axios from "axios";
import "./profile.css"
import Navbar from "../../components/Navbar";

const CreateBlog = () => {
  const [blogdata, setBlogdata] = useState({
    title: "",
    description: "",
  });
  const [image,setImage]= useState(null)

  async function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData()
    formData.append("title",blogdata.title)
    formData.append("description",blogdata.description)
    formData.append("file",image)
    try {
      const response = await axios.post(
        "http://localhost:3000/v1/user/createBlog",formData,
        {
          headers: {
              Authorization: localStorage.getItem("token")
      }
    });
      
      console.log(response);
      toast.success("blog created");
    } catch (error) {
      toast.error("error in create post")
      console.log(error)
    }
  }

  useEffect(()=>{
    console.log(image)
  },[image])

  // async function onSubmit(e){
  //   e.preventDefault()
  //   const response = await axios.post("http://localhost:3000/v1/user/createBlog",{
  //     headers: {
  //       Authorization: localStorage.getItem("token")
  //     }
  //   })
  //   toast.info('create')
  //   console.log(response)

  // }

  function handleChange(e, type ) {
    setBlogdata((prev) => ({
      ...prev,
      [type]: e.target.value,
    }));
    console.log(blogdata.image)

  }

  return (
    <>
    <Navbar/>
    <div className="create-form-container">
    
      <div className="create-form">
      <form onSubmit={(e)=>{onSubmit(e)}} className="create-form">
        <h1>Create Blog</h1>
      
        <label htmlFor="title">
          <p>Title</p>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="enter blog title"
            onChange={(e) => {
              handleChange(e, "title");
            }}
          />
        </label>
        <label htmlFor="description">
          <p>Description</p>
          <textarea
            name="description"
            id="description"
            placeholder="enter all about blog "
            onChange={(e) => {
              handleChange(e, "description")
            }}
          ></textarea>
        </label>

        <label htmlFor="image">
          <input
            type="file"
            name="image"
            id="image"
            accept="image/*"
            onChange={(e) => {
              console.log(e.target.files)
              setImage(e.target.files[0])
            }}
          />
        </label>

        <button type="submit" id="submit-btn">
          Add Blog
        </button>
        <Toaster />
      </form>
      </div>
      <div className="create-image"></div>
    </div>
    </>
  );
};

// const AddBlogLabel = ({ type, name, id, placeholder }) => {
//   return (
//     <label htmlFor={id}>
//       <input type={type} name={name} id={id} placeholder={placeholder} />
//     </label>
//   );
// };

export default CreateBlog;
