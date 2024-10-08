import React from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll
import './HeroTitle.css'; // Import the CSS file

export function HeroTitle() {
  return (
    <section id="hero-title-section" className="hero-wrapper">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">
          Custom <span className="gradient-text">Software Solutions</span> for A Business Like Yours
        </h1>
        <p className="hero-description">
          Empower your business with tailored software designed to streamline operations, improve efficiency, and drive growth. Whether you need a website, mobile app, or automation solution, we provide flexible, scalable services to meet your needs.
        </p>
        <div className="hero-buttons">
          <Link
            to="pricing-section" // ID of the pricing section
            smooth={true}
            duration={500}
            offset={-100} // Adjust to accommodate the header height if necessary
          >
            <button className="hero-button primary">Get started</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
