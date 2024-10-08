import React, { useState } from 'react';
import { SectionHeader } from './SectionHeader';
import './Pricing.css';

export function Pricing({ setPreFilledMessage, scrollToContactForm }) {
  const [expanded, setExpanded] = useState(null);

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

  const messageTemplates = {
    'Basic Landing Page': 'I’m interested in the Basic Landing Page package, which includes up to 5 sections and a basic form. Could you provide more details about mobile optimization and timeline?',
    'Enhanced Landing Page': 'I’m considering the Enhanced Landing Page package with form integration. Could you let me know more about the customization options and pricing?',
    'One-Page Site with Scheduling': 'I would like to know more about the One-Page Site with Scheduling. How does the scheduling system work, and what other features are included?',
    'Third-Party Hosting': 'I’m interested in the Third-Party Hosting option. Could you provide details on what hosting plan would be best for my business and the associated costs?',
    'Maintenance + Hosting': 'I’m considering the Maintenance + Hosting package for ongoing support and updates. Could you provide more information on what’s included in this plan?'
  };

  const toggleExpanded = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const handleLearnMoreClick = (service) => {
    console.log("Setting pre-filled message:", messageTemplates[service]); // Debug log
    setPreFilledMessage(messageTemplates[service]); // Update the message in the contact form
    scrollToContactForm(); // Scroll to contact form when "Learn More" is clicked
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

              {expanded === index && (
                <>
                  <div className="pricing-details">
                    <p>{item.details}</p>
                  </div>

                  <button
                    className="learn-more-button"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent card from collapsing when clicking the button
                      handleLearnMoreClick(item.service);
                    }}
                  >
                    Learn More
                  </button>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
