import React from 'react';
import './Display.css'; // Import external CSS

function Display() {
    return (
        <div className="display-container">
            <span className="gradient-text">
                P
                <span className="sub-gradient">RENEUR</span>
                <span className="alpha-text">X- </span>
            </span>
            <span className="gradient-text">Talent Clash</span>
            <br />
            <pre>
                <span className="gradient-subtext">VOTE    FOR    THE    BEST</span>
            </pre>
            <span className="third-text">DISCOVER AND SUPPORT THE TALENT OF YOUR SCHOOL</span>
        </div>
    );
}

export default Display;
