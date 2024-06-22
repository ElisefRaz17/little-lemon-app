import React from "react";
import Card from "./Cards/Cards";
import styles from '../styles/main.css';

function Main() {
  return (
    <main>
      <div className="hero">
        <div>
           <p>Little Lemon</p>
        </div>
        
      </div>
      <div className="section-container"><span className="section-title">This weeks specials!</span><button className="online-menu-btn">Online Menu</button></div>
      <Card />
    </main>
  );
}

export default Main;
