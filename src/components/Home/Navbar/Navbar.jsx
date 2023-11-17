import React from "react";
import logo from "../../../Assets/logo.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="nav-item">
        <div className="main-logo">
          <img src={logo} alt="logo" />
          <h2>IGSTUDIO</h2>
        </div>
        <div className="lists">
            <h5>Home</h5>
            <h5>Attornies</h5>
            <h5>PracticeArea</h5>
            <h5>About Us</h5>
        </div>
        <div className="contact-btn">
            <button className="btn">Contact Us</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
