import React from 'react';
import './Navbar.css';
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        navigate("/dashboard");   
    };

    return (
        <header className="navbar">
            <div className="left-section">
                {/* ✅ Logo wrapped in Link to homepage */}
                <Link to="/">
                    <img src={logo} alt="PreneurX Logo" className="logomy" />
                </Link>
            </div>

            <nav className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/">Prize Pool</Link>
                <Link to="/rule">Rules</Link>
                <Link to="/contact">Contact Us</Link>
            </nav>

            <div className="right-section">
                <button onClick={handleSubmit} className='login-btn'>Login</button>
            </div>
        </header>
    );
}

export default Navbar;
