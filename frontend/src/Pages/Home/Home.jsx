import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from "axios"
import Card from '../../components/Card'
import Navbar from '../../components/Navbar'
const Home = () => {
  const [data,setData] = useState([]);
  const [loading,setLoading] = useState(true);
  useEffect(()=>{
    async function serverCall(){
      const response = await axios.get("http://localhost:3000/v1/blog/readAllBlogs")
      console.log(response.data)
      setData(response.data)
      setLoading(false)
    }
    serverCall()
  },[])
  return (
    
    <div>
      <Navbar/>
      {
        loading?
        <>Loading...</>:
        (
          <div className='blog-content'>
            {
              data.map((item,index)=>(
                <div key={index}>
                  <Card title={item.title} description={item.description} date={item.date} imageUrl={item.imageUrl}  createdBy={item.createdBy.name}/>
                </div>
              ))
            }
          </div>
        )
      }
    </div>
  )
}

export default Home
//1.password  reset
//2. email otp
