import React from "react";
import Nav from "../components/Nav";
import { BrowserRouter } from "react-router-dom";

function Header() {
  
  return (
    <header className="header">
      {/* Hamburger icon */}
      {/* <input className="side-menu" type="checkbox" id="side-menu" />
      <label className="hamb" htmlFor="side-menu">
        <span className="hamb-line"></span>
      </label> */}
      <BrowserRouter>
      <Nav />
      </BrowserRouter>
      {/* <div className="nav-container">
        <nav className="nav">
          <ul className="nav--ul__one">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Menu</a>
            </li>
            <li>
              <a href="/">Reservations</a>
            </li>
            <li>
              <a href="/">Order Online</a>
            </li>
            <li>
              <a href="/">Login</a>
            </li>
          </ul>
        </nav>
      </div>
      <span className="hamburger-menu">menu</span> */}
    </header>
  );
}

export default Header;
