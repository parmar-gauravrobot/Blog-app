import React from "react";
import Navbar from "../../components/Navbar";
import { useLocation } from "react-router-dom";
import "./FullView.css";

const FullView = () => {
  const location = useLocation();
  const data = location.state;
  console.log(data);
  return (
    <div>
      <Navbar />
      <div className="parent">
        <div className="leftPart">
          <img src={data.imageUrl} alt="" />
          <h1>{data.title}</h1>
          <p>{data.description}</p>
        </div>
        <div className="rightPart">
          <h4>{data.date.slice(0, 10)}</h4>
          <h4>Author: {data.createdBy.charAt(0).toUpperCase() + data.createdBy.slice(1).toLowerCase()}</h4>
        </div>
      </div>
    </div>
  );
};

export default FullView;
