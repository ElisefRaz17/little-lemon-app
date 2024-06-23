import React, { useState } from "react";
import "../styles/nav.css";
import logo from "../assets/Logo.png";
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";
import { ReactComponent as Hamburger } from "../assets/Hamburger.svg";
import { ReactComponent as Logo } from "../assets/Logo.svg";

function Nav() {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <Logo />
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
        </div>
        <div className={`nav-elements ${showNavbar && "active"}`}>
          <ul className="menu">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/">About</NavLink>
            </li>
            <li>
              <NavLink to="/">Menu</NavLink>
            </li>
            <li>
              <NavLink to="/">Reservations</NavLink>
            </li>
            <li>
              <NavLink to="/">Order Online</NavLink>
            </li>
            <li>
              <NavLink to="/">Login</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
