import React from 'react'
import {ReactComponent as Logo} from '../assets/Logo.svg';
import '../styles/footer.css';


function Footer() {
  return (
    <footer>
      <div className="top">
      <Logo/>
        <div className="pages">
          <ul>
            <h3>Navigation</h3>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Reservations</a></li>
            <li><a href="#">Order Online</a></li>
            <li><a href="#">Login</a></li>
          </ul>

          <ul>
            <h3>Contact</h3>
            <li><a href="#">Address</a></li>
            <li><a href="#">Phone Number</a></li>
            <li><a href="#">Email</a></li>

          </ul>

          <ul>
            <h3>Social Media Links</h3>
            <li><a href="#">Address</a></li>
            <li><a href="#">Phone Number</a></li>
            <li><a href="#">Email</a></li>
          </ul>
        </div>
        <div className="newsletter">
          <h3>Stay in Touch</h3>
          <form>
            <input
              type="email"
              name="newsletter_email"
              id="newsletter_email"
              placeholder="Email"
            />
            <input type="button" value="Submit" />
          </form>
        </div>
      </div>
      <div className="social">
        <i className="fab fa-linkedin"></i>
        <i className="fab fa-github"></i>
        <i className="fab fa-facebook"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-youtube"></i>
      </div>
      <div className="info">
        <div className="legal">
          <a href="#">Terms & Conditions</a><a href="#">Privacy Policy</a>
        </div>
        <div className="copyright">2024 Copyright &copy;Little Lemon</div>
      </div>
    </footer>
  )
}

export default Footer