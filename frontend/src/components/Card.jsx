import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({title,description,date,imageUrl,createdBy}) => {
  const navigate = useNavigate()
  function handleClick(){
    let item = {
      title,
      description,
      date,
      imageUrl,
      createdBy
    }
    navigate("/fullView",{state: item})
  }
  return (
    <div className='card' onClick={handleClick}>
      <div className='card-img' >
      {imageUrl && <img src={imageUrl} alt={title} className="card-image" />}
      </div>
      <div className="card-data">
        <h1 className='card-title'>{title}</h1>
        <p className='card-description'>{description.slice(0,148)}...</p>
        <p className='card-date'>{date.slice(0,10)}</p>
      </div>

    </div>
  )
}

export default Card
