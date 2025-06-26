import React, { useEffect } from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Loading = () => {
  useEffect(() => {
    // Simulate loading complete after full page load
    window.addEventListener("load", () => {
      document.body.classList.add("loaded");
    });
  }, []);

  return (
    <>
      {/* Preloader */}
      <DotLottieReact
      src="https://lottie.host/61ab2c58-b4d6-45f1-b2c8-a4f17a341d8d/Clq2lMc5mV.lottie"
      loop
      autoplay
    />


      {/* Main Content */}
      

      {/* Styles */}
     
    </>
  );
};

export default Loading;
