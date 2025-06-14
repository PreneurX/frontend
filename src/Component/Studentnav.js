import React, { useState, useRef } from 'react';
import Logo from '../Component/Logo';

function Studentnav() {
 const [dropdownVisible, setDropdownVisible] = useState(false);


    
  const styles = {
    body: {
      margin: 0,
      padding: 0,
      background: '#f5f8fa',
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      overflowX: 'hidden',
      boxSizing: 'border-box',
    },
    header: {
      width: '100%',
      background: 'white',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 20px',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
    },
    logo: {
      height: '22px',
      paddingTop: '4px',
      width: 'auto',
      objectFit: 'contain',
      cursor: 'pointer',
    },
    hamburger: {
      width: '35px',
      height: '25px',
      borderRadius: '5px',
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      padding: '5px',
      background: 'linear-gradient(to right, #083ca0, black)',
    },
    hamburgerBar: {
      height: '3px',
      background: 'white',
      borderRadius: '2px',
      transition: '0.3s',
    },
    navbar: {
      width: '100%',
      background: 'white',
      display: 'flex',
      justifyContent: 'space-around',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    },
    navLinks: {
      display: 'flex',
      gap: '20px',
      flexWrap: 'wrap',
    },
    navLink: {
      textDecoration: 'none',
      color: '#515151',
      fontSize: '22px',
      fontVariantCaps: 'all-petite-caps',
      padding: '5px 10px',
      borderRadius: '4px',
      transition: 'background 0.2s',
    },
    dropdown: {
      position: 'absolute',
      top: '60px',
      right: '20px',
      background: 'white',
      border: '1px solid #ccc',
      borderRadius: '8px',
      boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
      display: dropdownVisible ? 'flex' : 'none',
      flexDirection: 'column',
      minWidth: '180px',
      zIndex: 999,
    },
    dropdownItem: {
      padding: '10px 15px',
      textDecoration: 'none',
      color: '#083ca0',
      fontWeight: 600,
      borderBottom: '1px solid #eee',
      cursor: 'pointer',
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
        margin: 0,
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
  return (
    <div><div style={styles.header}>
        <Logo/>
        <div style={styles.hamburger} onClick={() => setDropdownVisible(!dropdownVisible)}>
          <span style={styles.hamburgerBar}></span>
          <span style={styles.hamburgerBar}></span>
          <span style={styles.hamburgerBar}></span>
        </div>
      </div>


      <div style={styles.navbar}>
        <div style={styles.navLinks}>
          {['Clash Class', 'School Showdown', 'PreneurX Talent Clash', 'Rules'].map((link, i) => (
            <a key={i} href="/classclash" style={styles.navLink}>{link}</a>
          ))}
        </div>
      </div>
      
      
      </div>
  )
}

export default Studentnav