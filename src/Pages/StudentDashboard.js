import React, { useState, useEffect } from 'react';
import Studentnav from '../Component/Studentnav';
import Footer from '../Component/Footer'

function StudentDashboard() {
  // const [dropdownVisible, setDropdownVisible] = useState(false);
  const [post, setPost] = useState('');
  const [posted, setPosted] = useState('');
  const [profilePic, setProfilePic] = useState('');
  const [student, setStudent] = useState(null);
  // const fileInputRef = useRef(null);

const student1 = JSON.parse(localStorage.getItem("studentUser"));
const studentId = student1?._id;console.log(studentId);
  const styles = {
    body: {
      margin: 0,
      padding: 0,
      background: '#f5f8fa',
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      overflowX: 'hidden',
      boxSizing: 'border-box',
    },
    container: {
      maxWidth: '600px',
      width: '90%',
      margin: '50px auto',
      background: 'white',
      borderRadius: '10px',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
      padding: '20px',
    },
    profileHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      marginBottom: '20px',
    },
    profileImage: {
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      objectFit: 'cover',
    },
    profileText: {
      h3: {
        margin: 0,
        fontSize: '18px',
        background: 'linear-gradient(to right, #083ca0, black)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      },
      p: {
        marginTop: -5,
        fontSize: '16px',
        fontWeight: 'bolder',
        color: '#515151',
      },
    },
    uploadBox: {
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
      alignItems: 'flex-start',
      width: '100%',
    },
    textarea: {
      width: '100%',
      minHeight: '100px',
      padding: '10px',
      fontSize: '16px',
      border: '1px solid #ccc',
      borderRadius: '8px',
      resize: 'none',
    },
    button: {
      background: 'linear-gradient(to right, #083ca0, black)',
      color: 'white',
      border: 'none',
      padding: '8px 16px',
      borderRadius: '4px',
      fontSize: '14px',
      cursor: 'pointer',
      fontWeight: 'bold',
    },
    postDisplay: {
      marginTop: '20px',
      padding: '10px',
      background: '#f9f9f9',
      borderRadius: '6px',
      width: '100%',
    },
    postActions: {
      marginTop: '10px',
      display: 'flex',
      gap: '10px',
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const profileRes = await fetch(`https://backend-gpe5.onrender.com/api/student/me/${studentId}`);
        const studentData = await profileRes.json();
        console.log(studentData);
        setStudent(studentData);
        setProfilePic(studentData.profilePic || "https://img.freepik.com/premium-vector/profile-picture-placeholder-avatar-silhouette-gray-tones-icon-colored-shapes-gradient_1076610-40164.jpg?semt=ais_hybrid&w=740");

        const postRes = await fetch(`https://backend-gpe5.onrender.com/api/student/post/${studentId}`);
        const postData = await postRes.json();
        if (postData?.content) {
          setPosted(postData.content);
        }
      } catch (err) {
        console.error("Error loading student or post", err);
      }
    };

    if (studentId) fetchData();
  }, [studentId]);

  const handlePostSubmit = async () => {
    if (!post.trim()) return;

    try {
      const res = await fetch("https://backend-gpe5.onrender.com/api/student/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ studentId, content: post.trim() }),
      });

      // const data = await res.json();
      if (res.ok) {
        setPosted(post.trim());
        setPost('');
      } else {
        alert("Failed to save post");
      }
    } catch (err) {
      console.error("Error saving post", err);
      alert("Server error");
    }
  };

  return (
    <>
    <div style={styles.body}>
      <Studentnav />

      <div style={styles.container}>
        <div style={styles.profileHeader}>
          <img src={profilePic || "https://img.freepik.com/premium-vector/profile-picture-placeholder-avatar-silhouette-gray-tones-icon-colored-shapes-gradient_1076610-40164.jpg?semt=ais_hybrid&w=740"} alt="Profile" style={styles.profileImage} />
          <div>
            <h3 style={styles.profileText.h3}>{student?.name || "..."}</h3>
            <p style={styles.profileText.p}>{student?.school || "..."}</p>
          </div>
        </div>

        {!posted && (
          <div style={styles.uploadBox}>
            <textarea
              placeholder="Your story, your glory – let’s hear it!"
              style={styles.textarea}
              value={post}
              onChange={(e) => setPost(e.target.value)}
            />
            <button style={styles.button} onClick={handlePostSubmit}>
              Post
            </button>
          </div>
        )}

         {posted && (
          <div style={styles.postDisplay}>
            <p>{posted}</p>
            <div style={styles.postActions}>
              <button
                style={styles.button}
                onClick={() => {
                  setPost(posted);
                  setPosted('');
                }}
              >
                Edit
              </button>
              <button
                style={styles.button}
                onClick={() => {
                  setPosted('');
                  setPost('');
                }}
              >
                Delete
              </button>
            </div>
          </div>
        )} 
      </div>
    </div>
          
          <div style={{
      position: "fixed",
      bottom: 0,
      left: 0,
      width: "100%",
      backgroundColor: "#222",
      color: "#fff",
      textAlign: "center",
      padding: "15px 0",
      zIndex: 100
    }}>
      <Footer/>
    </div>
          </>
  );
}

export default StudentDashboard;
