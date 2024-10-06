import React, { useEffect, useRef } from 'react';
import './TechnologyScrollBar.css';

export function TechnologyScrollBar() {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    let scrollAmount = 0;
    const speed = 2; // Speed of scrolling

    const scroll = () => {
      scrollAmount += speed;
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0; // Reset scroll to loop continuously
      }
      scrollContainer.scrollLeft = scrollAmount;
    };

    const interval = setInterval(scroll, 20); // Adjust interval for smoothness

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="scroll-bar-container">
      <div className="scroll-bar-content" ref={scrollContainerRef}>
        <div className="scroll-item">React</div>
        <div className="scroll-item">Node.js</div>
        <div className="scroll-item">Express</div>
        <div className="scroll-item">MongoDB</div>
        <div className="scroll-item">JavaScript</div>
        <div className="scroll-item">Redux</div>
        <div className="scroll-item">Next.js</div>
        <div className="scroll-item">HTML & CSS</div>
        <div className="scroll-item">GraphQL</div>
        {/* Repeat for a looping effect */}
        <div className="scroll-item">React</div>
        <div className="scroll-item">Node.js</div>
        <div className="scroll-item">Express</div>
        <div className="scroll-item">MongoDB</div>
        <div className="scroll-item">JavaScript</div>
        <div className="scroll-item">Redux</div>
        <div className="scroll-item">Next.js</div>
        <div className="scroll-item">HTML & CSS</div>
        <div className="scroll-item">GraphQL</div>
      </div>
    </div>
  );
}
