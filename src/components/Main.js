import React from "react";
import Card from "./Cards/Cards";
import headerPhoto from "../assets/restauranfood.jpg";
import styles from "../styles/main.css";
import Testimonials from "./Testimonials/Testimonials";

function Main() {
  return (
    <main>
      <div className="hero wrapper">
        <div className="hero-details">
          <div className="hero-text">
            <div
              style={{
                fontSize: "64px",
                color: " #F4CE14",
                fontFamily: "MarkaziText-Medium",
                paddingTop: "50px",
                height: "115px",
              }}
            >
              Little Lemon
            </div>
            <div
              style={{ fontFamily: "MarkaziText-Regular", color: "white", fontSize: "40px" }}
            >
              Chicago
            </div>
            <p className="hero-description">
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
            <div style={{paddingTop:'20px'}}>
              <button className="reserve-btn">Reserve a Table</button>
            </div>
          </div>
          <div style={{ margin: "50px 40px 0 0", marginRight: "auto" }}>
            <img
              src={headerPhoto}
              style={{
                borderRadius: "16px",
                width: "375px",
                height: "387px",
              }}
              alt="hero"
              className="hero-image"
            />
          </div>
        </div>
      </div>
      <div className="section-container">
        <span className="section-title">This weeks specials!</span>
        <button className="online-menu-btn">Online Menu</button>
        {/* <div>
          <button className="online-menu-btn">Online Menu</button>
        </div> */}
      </div>
      <Card />
      {/* <div className='testimonial-container'> */}
       <Testimonials/>
    {/* </div> */}
    </main>
  );
}

export default Main;
