import React from 'react';
import './AboutMe.css';
import codeBlock from '../images/codeBlock.png';

export function AboutMe() {
  return (
    <section className="about-me-section">
      <div className="about-me-container">
        <div className="about-me-image">
          <img src={codeBlock} alt="Your Name" />
        </div>
        <div className="about-me-content">
          <h2 className="about-me-title">About Me</h2>
          <p className="about-me-description">
            Hi! I'm Caleb, a passionate freelance software engineer dedicated to helping small businesses grow with custom software solutions. I specialize in building websites, mobile apps, and automation tools that streamline operations and drive results.
          </p>
          <p className="about-me-description">
            Whether you need a brand-new website, or improvements to your existing one, I’m here to help you bring your vision to life. I work closely with clients to understand their goals and deliver high-quality solutions that meet their needs.
          </p>
          <button className="about-me-button">Get in Touch</button>
        </div>
      </div>
    </section>
  );
}
