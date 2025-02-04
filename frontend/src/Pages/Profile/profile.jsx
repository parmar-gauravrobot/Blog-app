import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from "axios"
// import Card from '../../components/Card'
import Navbar from '../../components/Navbar'
import ProfileCard from '../../components/ProfileCard'
const Profile = () => {
  const [data,setData] = useState([]);
  const [loading,setLoading] = useState(true);
  useEffect(()=>{
    async function server(){
      const response = await axios.get("http://localhost:3000/v1/user/readMyBlogs",{
        headers: {
          Authorization: localStorage.getItem("token")
        }
      })
      console.log(response.data)
      setData(response.data)
      setLoading(false)
    }
    server()
  },[])
  return (
    
    <div>
      <Navbar/>
      {
        loading?
        <h1>Loading...</h1>:
        (
          <div className='blog-content'>
            {
              data.map((item,index)=>(
                <div key={index} className='card-myblog'>
                  <ProfileCard title={item.title} description={item.description} date={item.date} imageUrl={item.imageUrl}  />
                </div>
              ))
            }
          </div>
        )
      }
    </div>
  )
}

export default Profile
