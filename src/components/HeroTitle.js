import React from 'react';
import './HeroTitle.css'; // Import the CSS file
import { Link } from 'react-scroll';

export function HeroTitle() {
  return (
    <div className="hero-wrapper">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">
          Custom <span className="gradient-text">Software Solutions</span> for A Business Like Yours
        </h1>
        <p className="hero-description">
          Empower your business with tailored software designed to streamline operations, improve efficiency, and drive growth. Whether you need a website, mobile app, or automation solution, we provide flexible, scalable services to meet your needs.
        </p>
        <div className="hero-buttons">
          <Link to="pricing-section" smooth={true} duration={500}>
            <button className="hero-button primary">Get started</button>
          </Link>
        </div>
      </div>
    </div>
  );
}