import React from 'react';
import './Navbar.css';
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";


function Navbar() {
    // const gradientStyle = {
    //     background: 'linear-gradient(to right, #0e1010,rgb(13, 94, 201))',
    //     WebkitBackgroundClip: 'text',
    //     WebkitTextFillColor: 'transparent',
    //     fontWeight: 700,
    //     fontSize: '1.4rem',
    //     fontFamily: 'DM Sans, sans-serif',
    // };
    // const alpha ={
    //     fontFamily: 'DM Sans, sans-serif',


    // };

    const navigate = useNavigate();
  const handleSubmit = (e) => {
navigate("/dashboard");   
  };

    return (
        <header className="navbar">
            <div className="left-section">
                {/* Logo with gradient */}
                {/* <span style={gradientStyle}>P
                <span style={{...gradientStyle, fontSize: '1rem' }}>RENEUR</span>
                <span style={alpha}>X</span>


                </span> */}
        <img src={logo} alt="Company Logo" className='logomy'/>
                
            </div>

            <nav className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/">Prize Pool</Link>
            <Link to="/rule">Rules</Link>
            
            <Link to="/contact">Contact Us</Link>

            




        
            </nav>

            <div className="right-section">
                <button onClick={handleSubmit} className='login-btn'>Login </button>
            </div>
            

        </header>
    );
}

export default Navbar;
