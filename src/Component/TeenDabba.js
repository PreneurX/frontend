import React from 'react';
import "./TeenDabba.css";
import book from "../assets/book.png";
import trophy from "../assets/trophy.png";
import rupee from "../assets/rupees.png";
function TeenDabba() {
  return (
    <div>
      <div className="page-wrapper">
        <div className="cards-container">
          <div className="card">
            <div className="icon">
              <img src={book} alt="School Icon" />
            </div>
            <h3>Top 5 Schools</h3>
            <p>
              The Ultimate Showdown Of <strong>School Stars</strong>
            </p>
          </div>

          <div className="card">
            <div className="icon">
              <img src={trophy} alt="Trophy" />
            </div>
            <h3>Big Dream, Small Entry</h3>
            <p>
              Compete For <strong>₹50000+</strong> <br />
              At Just <strong>₹49</strong>
            </p>
          </div>

          <div className="card">
            <div className="icon">
              <img src={rupee} alt="Rupees" />
            </div>
            <h3>Victory At Every Level</h3>
            <p><strong>90</strong> Class Winners</p>
            <p><strong>50</strong> Inter School Battle Winners</p>
            <p>Total <strong>140</strong> Reasons To Celebrate</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeenDabba;
