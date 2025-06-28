import React from 'react'
import { Link } from "react-router-dom";

import './Curousel.css';
function Curousel() {
    return (
        <div>
        <hr/>
        
            <div className="mobile-carousel">
        <hr/>
        
                
                <div className="carousel-option"><Link to="/">Home</Link></div>
                <div className="carousel-option"><Link to="/">Prize Pool</Link></div>
                <div className="carousel-option"><Link to="/rule">Rules</Link></div>
                
                <div className="carousel-option"><Link to="/contact">Contact us</Link></div>
                <div className="carousel-option"><Link to="/">Team</Link></div>
                {/* <div className="carousel-option"><a href="#">Trending</a></div>
                <div className="carousel-option"><a href="#">Trending</a></div>  */}
        <hr/>

            </div>
        <hr/>

        </div>
    )
}

export default Curousel
