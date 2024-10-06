import React from 'react';
import './SectionHeader.css'; // Importing the CSS file

export function SectionHeader({ title, description }) {
  return (
    <div className="section-header">
      <h2 className="section-title">{title}</h2>
      <p className="section-description">{description}</p>
    </div>
  );
}
