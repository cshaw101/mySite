import React from 'react';
import './HeroTitle.css'; // Import the CSS file

export function HeroTitle() {
  return (
    <div className="hero-wrapper">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">A fully featured React components library</h1>
        <p className="hero-description">
          Build fully functional accessible web applications faster than ever – Mantine includes more than 120 customizable components
          and hooks to cover you in any situation.
        </p>
        <div className="hero-buttons">
          <button className="hero-button primary">Get started</button>
          <button className="hero-button outline">Source code</button>
        </div>
      </div>
    </div>
  );
}
