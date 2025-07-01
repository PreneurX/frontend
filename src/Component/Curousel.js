import React from 'react'
import { Link } from "react-router-dom";

import './Curousel.css';
function Curousel() {
    return (
        <div className='abc'>
        <hr/>
        
            <div className="mobile-carousel">
                
                <div className="carousel-option"><Link to="/">Home</Link></div>
                <div className="carousel-option">
                <a href="https://drive.google.com/uc?export=download&id=1AsLMl2fZvA2qurMzAg2ZH7OC0zjK5rIv"
                target="_blank"
                rel="noopener noreferrer"
  >
                Prize Pool
               </a>
            </div>
                <div className="carousel-option"><Link to="/rule">Rules</Link></div>
                
                <div className="carousel-option"><Link to="/contact">Contact Us</Link></div>
                <div className="carousel-option"><Link to="/">Team</Link></div>
              
       

            </div>
        <hr/>

        </div>
    )
}

export default Curousel
