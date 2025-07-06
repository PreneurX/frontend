import React, { useState, useRef } from 'react';
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/Context";
import "./Studentnav.css";
import { Link } from "react-router-dom";

function Studentnav() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const fileInputRef = useRef(null);
    const { logout } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/login"); // or wherever your login route is
  };

  return (
    <div>
      <div className="header1">
        <Link to="/">
        <img src={logo} alt="PreneurX" className="logo" />
        </Link>
        <div className="hamburger" onClick={() => setDropdownVisible(!dropdownVisible)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <hr />

      <div className="navbar1">
        <div className="nav-links1">
 
<Link to="/dashboard">Profile</Link>
          <Link to="/classclash">Class Clash</Link>

          
          <Link to="/leaderboard">Leaderboard</Link>
                    <Link to="/rule">Rules</Link>
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
            onChange={async (e) => {
              const file = e.target.files[0];
              if (!file) return;

              const formData = new FormData();
              formData.append("profilePic", file);

const student1 = JSON.parse(localStorage.getItem("studentUser"));
const studentId = student1?._id;console.log(studentId);
              try {
                const res = await fetch(`https://backend-gpe5.onrender.com/api/student/upload-profile/${studentId}`, {
                  method: "POST",
                  body: formData,
                });

                const data = await res.json();
                if (res.ok) {
                  alert("Profile picture updated!");
                  window.location.reload(); // or update state to refresh UI
                } else {
                  alert(data.message || "Upload failed frontend");
                }
              } catch (err) {
                console.error("Upload error", err);
                alert("Server error");
              }
            }}

          />
          <div>❓ Need Help</div>
          <div>🔔 Notifications</div>
          <div onClick={handleLogout}>🚪 Log Out</div>
        </div>
      )}
    </div>
  );
}

export default Studentnav;
