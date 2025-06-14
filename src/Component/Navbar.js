import React from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";
import Login from "../Pages/Login";

function Navbar() {
    const gradientStyle = {
        background: 'linear-gradient(to right, #0e1010,rgb(13, 94, 201))',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontWeight: 700,
        fontSize: '1.4rem',
        fontFamily: 'DM Sans, sans-serif',
    };
    const alpha ={
        fontFamily: 'DM Sans, sans-serif',


    };

    return (
        <header className="navbar">
            <div className="left-section">
                {/* Logo with gradient */}
                <span style={gradientStyle}>P
                <span style={{...gradientStyle, fontSize: '1rem' }}>RENEUR</span>
                <span style={alpha}>X</span>


                </span>
                
            </div>

            <nav className="nav-links">
                <a href="/">Home</a>
                <a href="#">Prize Pool</a>
                <a href="#">Rules</a>
                <a href="#">Crown Keepers</a>
                <a href="#">Contact Us</a>
            </nav>

            <div className="right-section">
                <button><Link className="login-btn" to="/login">Login</Link> </button>
            </div>
            

        </header>
    );
}

export default Navbar;
