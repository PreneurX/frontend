import React from 'react'
import './Curousel.css';
function Curousel() {
    return (
        <div>
            <div className="mobile-carousel">
                
                <div className="carousel-option"><a href="#">Home</a></div>
                <div className="carousel-option"><a href="#">Prize Pool</a></div>
                <div className="carousel-option"><a href="#">Rules</a></div>
                <div className="carousel-option"><a href="#">Crown Keepers</a></div>
                <div className="carousel-option"><a href="#">Contact us</a></div>
                <div className="carousel-option"><a href="#">Team</a></div>
                {/* <div className="carousel-option"><a href="#">Trending</a></div>
                <div className="carousel-option"><a href="#">Trending</a></div>  */}

            </div>

        </div>
    )
}

export default Curousel