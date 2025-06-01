import React from 'react';
import './Footer.css'
import logo from '../assets/logo.png';
import Logo from './Logo'
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
          <a href="/index.html">Home</a>
          <a href="/aboutus.html">About Us</a>
          <a href="/privacy.html">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Contact Us</a>
        </div>

        <div className="footer-social">
          <a href="#"><img src={whatsappIcon} alt="WhatsApp" /></a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 PreneurX. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
