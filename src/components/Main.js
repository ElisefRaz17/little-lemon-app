import React from "react";
import Card from "./Cards/Cards";
import headerPhoto from "../assets/restauranfood.jpg";
import styles from "../styles/main.css";

function Main() {
  return (
    <main>
      <div className="hero wrapper">
        <div className="hero-details">
          <div className="hero-title">
            Little Lemon
            <p className="hero-description">
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
            <div>
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
                // justifyContent: "flex-end",
                // display: "flex",
                // position:'relative',
                // marginTop:'-200px',
                // marginLeft: 'auto'
              }}
              alt="hero"
              className="hero-image"
            />
          </div>
        </div>
      </div>
      <div className="section-container">
        <span className="section-title">This weeks specials!</span>
        <div>
          <button className="online-menu-btn">Online Menu</button>
        </div>
      </div>
      <Card />
    </main>
  );
}

export default Main;
