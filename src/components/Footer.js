import React from 'react';
import './Footer.css';

export function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-left">
            <h3 className="footer-logo">WebDevCaleb</h3>
            <p className="footer-description">
              Affordable web solutions for businesses of all sizes. Contact us to get started.
            </p>
          </div>
          <div className="footer-right">
            <p className="footer-email">
              Email: <a href="mailto:shawcaleb1688@gmail.com">shawcaleb1688@gmail.com</a>
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} WebDevCaleb. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}