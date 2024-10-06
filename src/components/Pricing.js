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
      details: 'Enhanced landing page includes more customization, optimized SEO, and seamless form integration.' 
    },
    { 
      service: 'One-Page Site with Scheduling', 
      description: 'One-page site, scheduling/contact features', 
      price: '$800 - $1,500', 
      details: 'Ideal for service-based businesses, this package includes integrated scheduling and contact forms.' 
    },
    { 
      service: 'Custom One-Page Site', 
      description: 'Interactive elements, custom API integration', 
      price: '$1,500 - $2,500', 
      details: 'Completely customized one-page website with advanced features like interactive elements and API integrations.' 
    },
    { 
      service: 'Maintenance Package', 
      description: 'Up to 5 hours of updates/month', 
      price: '$100 - $150/month', 
      details: 'Monthly maintenance package for keeping your site updated and secure, including content updates.' 
    },
    { 
      service: 'Additional Revisions', 
      description: 'Revisions beyond included rounds', 
      price: '$50/hour', 
      details: 'Need more changes? Get additional rounds of revisions billed at an hourly rate.' 
    }
  ];

  const toggleExpanded = (index) => {
    setExpanded(expanded === index ? null : index); // Toggle expand/collapse
  };

  return (
    <section className="pricing-section">
      <div className="pricing-container">
      <SectionHeader
  title="Pricing"/>
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
