import React, { useState } from "react";
import "../styles/nav.css";
import logo from "../assets/Logo.png";
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";
import { ReactComponent as Hamburger } from "../assets/Hamburger.svg";
import { ReactComponent as Logo } from "../assets/Logo.svg";

const Nav = () => {
  return(
    <nav>
      <a href='/'>
        <Logo />
      </a>

      {/** mobile navbar */}
      <div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      {/* nav items*/}
      <ul>
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
