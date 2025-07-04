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
            <h3>Express Your Thought</h3>
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
              Compete Among Your <strong>Classmates</strong> 
            </p>
          </div>

          <div className="card">
            <div className="icon">
              <img src={rupee} alt="Rupees" />
            </div>
            <h3>Beyond Language, Beyond Limits</h3>
            
            <p>Empowering <strong>Every Student</strong> to Share Their Thoughts Freely <br/>Write In Any Language</p>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeenDabba;
