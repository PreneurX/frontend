import React, { useEffect } from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Loading = () => {
  useEffect(() => {
    window.addEventListener("load", () => {
      document.body.classList.add("loaded");
    });
  }, []);

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      width: '100vw',
      backgroundColor: '#fff', // optional: white background while loading
    }}>
      <DotLottieReact
        src="https://lottie.host/61ab2c58-b4d6-45f1-b2c8-a4f17a341d8d/Clq2lMc5mV.lottie"
        loop
        autoplay
        style={{ width: '300px', height: '300px' }} // control size
      />
    </div>
  );
};

export default Loading;
