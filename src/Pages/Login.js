import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/Context";


const LoginPage = () => {
  const [mobile, setMobile] = useState("");
  const [dob, setDob] = useState("");
  const navigate = useNavigate();
   const { login } = useAuth();

const handleSubmit = async (e) => {
 
  e.preventDefault();

  try {
    const res = await fetch("https://backend-gpe5.onrender.com/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ mobile, dob })
    });

    const data = await res.json();
    if (res.ok) {
      login(data.token, data.user, data.role);  
      if (data.role === "student") {
        navigate("/dashboard");
      } else if (data.role === "teacher") {
        navigate("/tdash");
      }
    } else {
      alert(data.message || "Login failed");
    }
  } catch (err) {
    console.error("Login error:", err);
    alert("Server error");
  }
};



  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Welcome Back</h2>
        <p style={styles.subtitle}>Login to continue</p>
        <form style={styles.form} onSubmit={handleSubmit}>
          <label style={styles.label}>Mobile Number</label>
          <input
            type="tel"
            // pattern="[0-9]{10}"
            placeholder="Enter your mobile number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
            style={styles.input}
          />
          <label style={styles.label}>Date of Birth</label>
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
            style={styles.input}
          />
          <button type="submit" style={styles.button}>Login</button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#f4f6fa",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#fff",
    padding: "40px",
    borderRadius: "16px",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "400px",
  },
  title: {
    color: "#083CA0",
    marginBottom: "8px",
    fontSize: "28px",
    textAlign: "center",
  },
  subtitle: {
    color: "#515151",
    marginBottom: "32px",
    fontSize: "14px",
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    fontSize: "14px",
    marginBottom: "6px",
    color: "#515151",
  },
  input: {
    padding: "10px 12px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    marginBottom: "20px",
    fontSize: "16px",
  },
  button: {
    backgroundColor: "#083CA0",
    color: "#fff",
    padding: "12px",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background 0.3s ease",
  },
};

export default LoginPage;
