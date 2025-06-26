import React, { useState } from "react";

const RegisterUserForm = () => {
  const [role, setRole] = useState("student");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [dob, setDob] = useState("");
  const [school, setSchool] = useState("a");
  const [classLevel, setClassLevel] = useState("seventh");

  const schoolOptions = ["a", "b", "c", "x", "y", "z"];
  const classOptions = ["seventh", "eighth", "ninth", "tenth"];

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      role,
      name,
      mobile,
      dob,
      school,
      classLevel: role === "student" ? classLevel : null,
    };

    try {
      const res = await fetch("https://backend-gpe5.onrender.com/api/admin/register-user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (res.ok) {
        alert("User registered successfully");
        setName("");
        setMobile("");
        setDob("");
        setSchool("a");
        setClassLevel("seventh");
      } else {
        alert(data.message || "Registration failed");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Server error");
    }
  };

  return (
    <div style={{ marginTop: "30px", padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
      <h3>Register Student/Teacher</h3>
      <form onSubmit={handleSubmit}>
        <label>Role</label>
        <select value={role} onChange={(e) => setRole(e.target.value)} required>
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
        </select>

        <br /><label>Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

        <br /><label>Mobile</label>
        <input type="tel" value={mobile} onChange={(e) => setMobile(e.target.value)} required />

        <br /><label>DOB</label>
        <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} required />

        <br /><label>School</label>
        <select value={school} onChange={(e) => setSchool(e.target.value)} required>
          {schoolOptions.map((s) => (
            <option key={s} value={s}>{s.toUpperCase()}</option>
          ))}
        </select>

        {role === "student" && (
          <>
            <br /><label>Class</label>
            <select value={classLevel} onChange={(e) => setClassLevel(e.target.value)} required>
              {classOptions.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </>
        )}

        <br /><br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterUserForm;
