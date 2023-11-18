import React from "react";
import "./Intro.css";
import Cards from "./Card/Cards";
const Intro = () => {
  return (
    <div className="main">
      <div className="main-intro">
        <div className="left-intro">
            <div>
            <h1>Let's Introduce..</h1>
            
            <h1> OurSelves</h1>

            </div>
            

        </div>
        <div className="right-intro">
        <div>
            <h1>Criminal Lawyer</h1>
            
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit, atque vel dolorum cum iure itaque quas unde esse, similique consequatur reprehenderit molestiae velit necessitatibus enim vero quam ipsum ex magni? Veritatis animi vel officia voluptatem quia? </p>

            </div>

        </div>
      </div>
    <div className="whychooseus">
        <div className="whychooseus-text">
            <h1>Why Choose Us?</h1></div>
        <div className="whychooseus-cards">
            <Cards/>
            <Cards/>
            <Cards/>
        </div>

    </div>


    </div>
  );
};

export default Intro;
