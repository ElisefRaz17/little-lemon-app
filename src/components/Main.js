import React from "react";
import Card from "./Cards/Cards";
import styles from "../styles/main.css";

function Main() {
  return (
    <main>
      <div className="hero">
        <div className="hero-details">
          <p className="hero-title">Little Lemon 
            <p className="hero-description">We are a family owned Mediterranean restaurant, focused on
          traditional recipes served with a modern twist. </p> </p>
          {/* <p
            style={{
              width: "100%",
              flexBasis: "50%",
              margin: "10px 0",
              padding: "20px",
              boxSizing: "border-box",
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              justifyContent: "center",
            }} className="hero-description"
          >
            {/* <p className="hero-description"> */}
              {/* We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist. */}
            {/* </p> */}
          {/* </p>  */}
        </div>
      </div>
      <div className="section-container">
        <span className="section-title">This weeks specials!</span>
        <button className="online-menu-btn">Online Menu</button>
      </div>
      <Card />
    </main>
  );
}

export default Main;
