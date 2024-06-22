import React from "react";
import Card from "./Cards/Cards";
import styles from "../styles/main.css";

function Main() {
  return (
    <main>
      <div className="hero">
        <div className="hero-details">
          <div className="hero-title">
            Little Lemon
            <p className="hero-description">
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
            <button className="reserve-btn">Reserve a Table</button>
          </div>
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
