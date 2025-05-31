import React from 'react'

function Display() {
    const gradientStyle = {
        background: 'linear-gradient(to right, #0e1010,rgb(13, 94, 201))',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontWeight: 700,
        fontSize: '4rem',
        fontFamily: 'DM Sans, sans-serif',
    };
    const alpha = {
        fontFamily: 'DM Sans, sans-serif',
        fontSize: '4rem',


    };
    return (
        <div>
            <span style={gradientStyle}>P
                <span style={{ ...gradientStyle, fontSize: '3rem' }}>RENEUR</span>
                <span style={alpha}>X- </span>

            </span>
            <span style={{ ...gradientStyle, fontSize: '4rem' }}>Talent Clash</span>

        </div>
    )
};

export default Display