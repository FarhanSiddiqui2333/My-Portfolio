import React, { useEffect, useRef } from "react";
import "../App.css";

const AnimatedBlob = () => {
  const blobRef = useRef(null);

  useEffect(() => {
    const blob = blobRef.current;
    let angle = 0;

    if (!blob) return;

    const animateBlob = () => {
      const blobRect = blob.getBoundingClientRect();
      const blobWidth = blobRect.width;
      const blobHeight = blobRect.height;

      const radiusX = window.innerWidth / 4; // 1/4 of screen width
      const radiusY = window.innerHeight / 4; // 1/4 of screen height

      const centerX = window.innerWidth / 2 - blobWidth / 2;
      const centerY = window.innerHeight / 2 - blobHeight / 2;

      const x = centerX + radiusX * Math.cos(angle);
      const y = centerY + radiusY * Math.sin(angle);

      blob.style.transform = `translate(${x}px, ${y}px)`;

      angle += 0.007;
      requestAnimationFrame(animateBlob);
    };

    animateBlob();
  }, []);

  return <div className="animateBG" ref={blobRef}></div>;
};

export default AnimatedBlob;
