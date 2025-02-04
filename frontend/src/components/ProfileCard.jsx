import React from "react";
import { FaPencil } from "react-icons/fa6";
import { Link } from "react-router-dom";


const ProfileCard = ({title, description,imageUrl,date}) => {
  return (
    <div className="card">
      <div className="card-img">
        {imageUrl && <img src={imageUrl} alt={title} className="card-image" />}
      </div>
      <div className="card-data">
        <div className="profile-card-title">
          <h1 className="card-title">{title}</h1>
          
        </div>
        <button className="edit-btn" >
          <Link to="/post">
          <FaPencil className="edit" />
          </Link>
          </button>
        <p className="card-description">{description.slice(0, 148)}...</p>
        <p className="card-date">{date.slice(0, 10)}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
