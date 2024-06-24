import React, { useState } from "react";
import "../styles/nav.css";
import logo from "../assets/Logo.png";
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";
import { ReactComponent as Hamburger } from "../assets/Hamburger.svg";
import { ReactComponent as Logo } from "../assets/Logo.svg";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu =  () => {
    setMenuOpen(!menuOpen);
  }
  return(
    <nav className={`navbar ${menuOpen ? "open" : ""}`}>
      <a href='/' className="logo">
        <Logo />
      </a>

      {/** mobile navbar */}
      <div className="menu-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      {/* nav items*/}
      <ul className={`nav-links ${menuOpen ? "visible":""}`}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Services</a>
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
  )
}

export default Nav;
