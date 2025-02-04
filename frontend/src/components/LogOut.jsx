import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const LogOut = () => {
  const navigate = useNavigate()
  const handleLogOut=()=>{
    localStorage.clear()
    navigate("/")

  }
  return (
    <div>
      <li onClick={handleLogOut}>Logout</li>
    </div>
  )
}

export default LogOut
