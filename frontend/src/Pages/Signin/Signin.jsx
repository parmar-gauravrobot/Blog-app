import React, { useState } from "react";
import "./Signin.css";
import { AddLabel } from "../signup/Signup";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Toaster, toast } from "sonner";

const Signin = () => {
  // const [email,setEmail]= useState("")
  // const [password, setPassword] = useState("")

  const [userdata, setUserdata]= useState({
    email:"",
    password:""
  })

  const navigate= useNavigate()
  async function onSubmit(e){
    e.preventDefault()
    try {
      const serverCall = await axios.post("http://localhost:3000/v1/user/signin",userdata)
      console.log(serverCall)
      toast.success("login successfull")
      localStorage.setItem("token",serverCall.data.token)
      localStorage.setItem("username",serverCall.data.username)
      setTimeout(()=>{
        navigate("/")
      },2000)

    } catch (error) {
      toast.warning("set true crediantial")
    }
  }
  function handleChange(e,type){
    setUserdata(prev=>({
      ...prev,
      [type] : e.target.value
    }))
  }


  return (
    <div className="form-container">
    <div className="forms">
      <h2>SignIn</h2>
      <form onSubmit={onSubmit}>
        <AddLabel type="email" name="Email" id="email" placeholder="enter your email " onChange={(e)=>{handleChange(e,"email")}}/>
        <AddLabel type="password" name="Password" id="password" placeholder="enter your password " onChange={(e)=>{handleChange(e,"password")}}/>
        <button type="submit"   id="submit-btn">
          Sign In
        </button>
        <p>
          New user? <Link to="/signup">Signup</Link>
        </p>
      </form>
    </div>
    <div className="image"></div>
    <Toaster />
    </div>
  );
};


export default Signin;
