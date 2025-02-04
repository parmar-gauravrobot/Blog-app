import React from "react";
import { TiHome } from "react-icons/ti";
import { FaCircleUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import LogOut from "./LogOut";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome, faSearch, faUser, faPhone, faShoppingBag } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div className="navbar">
      <h4>
        <Link to="/" className="nav-home">
          <TiHome />
          Home
        </Link>
      </h4>

      
      {localStorage.getItem("token") ? (
        <>
          <ul type="none" className="nav-list">
            <li><Link to="/profile" className="nav-list-li"> My Blogs</Link></li>
            <li><Link to="/post" className="nav-list-li">Create Blogs</Link></li>
            <li className="nav-list-li"><LogOut/></li>
            <li className="avtar-text">{localStorage.getItem("username").split('')[0].toUpperCase()}</li>
          </ul>
        </>
      ) : 
      <h4>
        <Link to="/signin" className="nav-home">
          {" "}
          Login
        </Link>
      </h4>
      }

      {/*       
<div className="myDIV">Hover over me.</div>
<div className="hide">I am shown when someone hovers over the div above.</div> */}
    </div>
  );
};

export default Navbar;
