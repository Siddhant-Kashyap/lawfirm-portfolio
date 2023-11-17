import React from "react";
import "./HeroSection.css";
import heroImg from "../../../Assets/hero-image.png";
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const HeroSection = () => {
  return (
    <div className="main-section">
      <div className="left">
        <div className="hero-heading">
          <h2 className="h1-left">You don't have to </h2>

          <h1 className="h2-left">Fight them Alone. </h1>
         
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus odio voluptatem hic, quidem fugit voluptatibus itaque amet, eos reiciendis aliquid quos enim, exercitationem in suscipit modi? Dolorem nostrum necessitatibus ullam ab voluptatem cupiditate ipsum doloribus aspernatur quidem perspiciatis ea at accusamus placeat quo cum ducimus, tempore tempora est numquam eos nam minus quas delectus illum! Aperiam dicta consequuntur deleniti totam?</p>
          <div className="email-hero">
            <MailOutlineIcon/>
            <input type="text" placeholder="Enter your eamil address" />
          <button>Let's Talk</button>

        </div>
        
        </div>
       
      </div>
      <div className="right">
        <img src={heroImg} alt="heroimg" />
      </div>
    </div>
  );
};

export default HeroSection;
