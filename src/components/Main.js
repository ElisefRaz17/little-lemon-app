import React from "react";
import Card from "./Cards/Cards";
import headerPhoto from "../assets/restauranfood.jpg";
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
            <div>
              <button className="reserve-btn">Reserve a Table</button>
            </div>
            {/* <div
              style={{
                width: "100%",
                justifyContent: "flex-end",
                display: "flex",
              }}
            > */}
            <img
              src={headerPhoto}
              style={{
                borderRadius: "16px",
                width: "375px",
                height: "387px",
                justifyContent: "flex-end",
                display: "flex",
                position:'relative',
                marginTop:'-200px',
                marginLeft: 'auto'
              }}
              alt="hero"
            />
            {/* </div> */}
          </div>
          {/* <div style={{float:'right', width:'49%'}}>
            <img src={headerPhoto} style={{borderRadius:'16px', width:'375px', height:'387px'}}/>

          </div> */}
        </div>
        {/* <img src={headerPhoto} style={{borderRadius:'16px', width:'375px', height:'387px', float:'right', position:'relative', bottom:'230px', right:'400px'}}/> */}
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
