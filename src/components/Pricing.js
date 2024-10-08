import React, { useState } from 'react';
import { SectionHeader } from './SectionHeader';
import './Pricing.css'; 

export function Pricing() {
  const [expanded, setExpanded] = useState(null); // Track which card is expanded

  const pricingData = [
    { 
      service: 'Basic Landing Page', 
      description: 'Single page, up to 5 sections, basic form', 
      price: '$200 - $400', 
      details: 'Perfect for small businesses looking for an online presence with a simple, professional look. Includes mobile optimization.' 
    },
    { 
      service: 'Enhanced Landing Page', 
      description: 'Up to 7 sections, form integration', 
      price: '$500 - $600', 
      details: 'Enhanced landing page includes more customization, and seamless form integration.' 
    },
    { 
      service: 'One-Page Site with Scheduling', 
      description: 'One-page site, scheduling/contact features', 
      price: '$800 - $1,500', 
      details: 'Ideal for service-based businesses, this package includes integrated scheduling and contact forms.' 
    },
    { 
      service: 'Third-Party Hosting', 
      description: 'Hosting services provided by developer', 
      price: '$50 - $100 Monthly', 
      details: 'Hosting services provided by the developer to ensure smooth operation and upkeep of the site. Pricing depends on the hosting requirements.' 
    },
    { 
      service: 'Maintenance + Hosting', 
      description: 'Ongoing support and issue resolution', 
      price: '$150-250 Monthly', 
      details: 'Ongoing maintenance services for resolving issues, updating content, and providing technical support as needed.' 
    },
  ];

  const toggleExpanded = (index) => {
    setExpanded(expanded === index ? null : index); // Toggle expand/collapse
  };

  return (
    <section className="pricing-section">
      <div className="pricing-container">
        <SectionHeader title="Website Development Pricing Sheet" />
        <div className="pricing-grid">
          {pricingData.map((item, index) => (
            <div 
              className={`pricing-card ${expanded === index ? 'expanded' : ''}`} 
              key={index} 
              onClick={() => toggleExpanded(index)}
            >
              <h3 className="pricing-service">{item.service}</h3>
              <p className="pricing-description">{item.description}</p>
              <p className="pricing-price">{item.price}</p>
              
              {/* Conditional rendering of additional details */}
              {expanded === index && (
                <div className="pricing-details">
                  <p>{item.details}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
