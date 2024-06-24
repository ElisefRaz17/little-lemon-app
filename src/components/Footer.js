import React from 'react'
import {ReactComponent as Logo} from '../assets/Logo.svg';
import '../styles/footer.css';

function Footer() {
  return (
    <footer className='footer-container'>
      <div className='footer-logo'>
      <Logo/>
      </div>
    </footer>
  )
}

export default Footer