import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import header_pic from "../assets/restauranfood.jpg";

const Header = () => {
  return(
   <header className="header">
      <section>
        <div className="hero-section">
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>
            <p>We are a family owned Mediterranean restaurant, focused
              on traditional recipes served with a modern twist.
            </p>
            <Link to="/booking"><button aria-label="On Click">Reserve Table</button></Link>
        </div>
        <div className="banner-img">
          <img src={header_pic} alt=""/>
        </div>
      </section>
   </header>
  )
}
export default Header
