import React, { useState, useRef } from 'react';
import logo from "../assets/logo.png";
import "./Studentnav.css";

function Studentnav() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const fileInputRef = useRef(null);

  return (
    <div>
      <div className="header1">
        <img src={logo} alt="Company Logo" className="logo" />
        <div className="hamburger" onClick={() => setDropdownVisible(!dropdownVisible)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <hr />

      <div className="navbar1">
        <div className="nav-links1">
                    <a href="/dashboard">Home</a>

          <a href="/classclash">Clash class</a>
                <a href="/round2">School Showdown</a>
                <a href="/finale">PreneurX Talent-Clash</a>
                <a href="/rules">Rules</a>
        </div>
      </div>

      <hr />

      {/* DROPDOWN MENU (MOBILE) */}
      {dropdownVisible && (
        <div className="dropdown">
          <div onClick={() => fileInputRef.current.click()}>📸 Add/Change Profile Picture</div>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={(e) => {
              const file = e.target.files[0];
              // handle image
            }}
          />
          <div>❓ Need Help</div>
          <div>🔔 Notifications</div>
          <div>🚪 Log Out</div>
        </div>
      )}
    </div>
  );
}

export default Studentnav;
