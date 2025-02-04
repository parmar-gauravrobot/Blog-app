import axios from "axios";
import "./Signup.css";
import {Toaster,toast} from "sonner"
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {

  // const [name, setName]= useState("")
  // const [username, setUsername]= useState("")
  // const [email, setEmail]= useState("")
  // const [password, setPassword]= useState()
  const [userdata,setUserdata] = useState({
    name: "",
    username: "",
    email: "",
    password: ""
  })
  const navigate = useNavigate()
  function handleChange(e,type){
    setUserdata(prev=>({
      ...prev,
      [type]: e.target.value
    }))
  }
  // const [authType,setAuthType] = useState("signup")
 async function onSubmit(e){
    e.preventDefault()
    try {
      const response = await  axios.post("http://localhost:3000/v1/user/signup",userdata)
      console.log(response.data)
      localStorage.setItem("token",response.data.token)
      localStorage.setItem("username",response.data.username)
      toast.success("Signup succesful")
      setTimeout(()=>{
        navigate("/")
      },2000)
    } catch (error) {
      console.log(error)
      toast.error("error while signup")
    }
  }


  return (
    <div className="form-container">
      <div className="forms">
        <h2 className="heading">Create account</h2>
        <form onSubmit={onSubmit} className="signup-form">
         
          <AddLabel type="text" name="Name" id="name" placeholder="enter your name " onChange={(e)=>{handleChange(e,"name")}}/>
          <AddLabel type="text" name="Username" id="username" placeholder="enter your username "onChange={(e)=>{handleChange(e,"username")}}/>
          <AddLabel type="email" name="Email" id="email" placeholder="enter your email " onChange={(e)=>{handleChange(e,"email")}}/>
          <AddLabel type="password" name="Password" id="password" placeholder="enter your password " onChange={(e)=>{handleChange(e,"password")}} />

          <button type="submit"  id="submit-btn" >
            Sign Up
          </button>
          <p>
          Do you already have an account? <Link to="/signin">Signin</Link>
          {/* Do you already have an account? <a  onClick={()=>setAuthType("signin")}>SignIn</a> */}
          </p>
        </form>
      </div>
      {/* {
        authType === "signup"? (
        <div className="forms">
        <h2 className="heading">Create your account</h2>
        <form onSubmit={onSubmit}>
         
          <AddLabel type="text" name="name" id="name" placeholder="enter your name " onChange={(e)=>{setName(e.target.value)}}/>
          <AddLabel type="text" name="username" id="username" placeholder="enter your username " onChange={(e)=>{setUsername(e.target.value)}}/>
          <AddLabel type="email" name="email" id="email" placeholder="enter your email " onChange={(e)=>{setEmail(e.target.value)}}/>
          <AddLabel type="password" name="password" id="password" placeholder="enter your password " onChange={(e)=>{setPassword(e.target.value)}} />

          <button type="submit"  id="submit-btn" >
            Sign Up
          </button>
          <p>
            Do you already have an account? <a  onClick={()=>setAuthType("signin")}>SignIn</a>
          </p>
        </form>
      </div>
        ):(
          <div className="forms">
                <h2>SignIn to your account</h2>
                <form>
                  <AddLabel
                    type="email"
                    name="email"
                    id="email"
                    placeholder="enter your email "
                  />
                  <AddLabel
                    type="password"
                    name="password"
                    id="password"
                    placeholder="enter your password "
                  />
                  <button type="submit" name="submit" id="submit-btn">
                    Sign In
                  </button>
                  <p>
                    New user? <a  onClick={()=>{setAuthType("signup")}}>SignUp</a>
                  </p>
                </form>
              </div>
        )
      } */}
      <div className="image" >
         
      </div>
      <Toaster />
    </div>
  );
};



export const AddLabel=({type,id,name,placeholder,onChange})=>{

  return(
    <div className="card-container">
    <label htmlFor={id}>
      <p className="labelFormTitle">{name}</p>
      <input type={type} name={name} id={id} placeholder={placeholder} onChange={onChange}/>
    </label>

    </div>
  )

}



export default Signup;
