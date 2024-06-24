import React from "react";
import "../styles/about.css";
import restaurant from "../assets/restaurant.jpg";
import people from "../assets/Mario and Adrian b.jpg";
function About() {
  return (
    <div className="about-container">
      <div className="about-details">
        <div className="about-text">
          <div className="title">Little Lemon</div>
          <div className="subtitle">Chicago</div>
          <div className="about-description">
            We opened our shop back in 2015 in the heart of our hometown,
            Chicago. Our family uses special family-recipes that have been
            passed from generation to generation. When you dine with us we hope
            all our customers leave with a sense of community and appreciate
            with us.
          </div>
        </div>
        <div className="picture-container">
            <img src={restaurant} className="about-pic" alt="about-pic" id="restaurant-pic"/>
            <img src={people} className="about-pic" alt="about-pic" id="people-pic"/>
          </div>
      </div>
    </div>
  );
}

export default About;
