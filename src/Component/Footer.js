import React from 'react';
import './Footer.css'
import logo from '../assets/logo.png';
import { Link } from "react-router-dom";

import whatsappIcon from '../assets/whatsapp.png'; // Make sure this path is correct

function Footer() {
  return (
    <div className='footer'>
      <div className="footer-container">
        <div className="footer-brand">
          <img src={logo} alt="PreneurX Logo" />
        </div>
        {/* <Logo/> */}

        <div className="footer-links">
          <Link to="/">Home</Link> 
          <Link to="/about">About us</Link>
          <Link to="/policy">Privacy Policy</Link>


          // <a href="/about">About us</a>
          // <a href="/policy">Privacy Policy</a>
          <Link to="/terms">Terms & Condition</Link> 
          <Link to="/contact">Contact us</Link>


          // <a href="/contact">Contact Us</a>
        </div>

        <div className="footer-social">
          <a href="/"><img src={whatsappIcon} alt="WhatsApp" /></a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 PreneurX. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
