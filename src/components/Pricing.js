import React from 'react';
import { SectionHeader } from './SectionHeader';
import './Pricing.css';

export function Pricing({ setPreFilledMessage, scrollToContactForm }) {
  const pricingData = [
    {
      service: 'Starter Package',
      description: 'Perfect for small businesses with a simple, professional online presence',
      price: '$150 - $350',
      details: (
        <>
          <ul>
            <li>Basic Landing Page (up to 5 sections, basic form)</li>
            <li>Mobile optimization</li>
            <li>Hosting free for the first month ($10 - $50/month)*</li>
            <li>Basic support for the first month</li>
          </ul>
        </>
      )
    },
    {
      service: 'Business Package',
      description: 'For businesses looking for more customization and SEO',
      price: '$400 - $700',
      details: (
        <>
          <ul>
            <li>Enhanced Landing Page (up to 7 sections, form integration)</li>
            <li>Basic SEO setup</li>
            <li>Hosting free for the first month ($10 - $50/month)*</li>
            <li>1 month of maintenance and support</li>
          </ul>
        </>
      )
    },
    {
      service: 'Professional Package',
      description: 'Ideal for service-based businesses with scheduling needs',
      price: '$1,000 - $2,000',
      details: (
        <>
          <ul>
            <li>One-Page Site with Scheduling (contact form and scheduling system)</li>
            <li>Mobile optimization</li>
            <li>Basic SEO setup</li>
            <li>Hosting free for the first month ($10 - $50/month)*</li>
            <li>3 months of maintenance and support</li>
            <li>Integration with third-party services (e.g., Google Calendar, MailChimp)</li>
          </ul>
        </>
      )
    },
    {
      service: 'Full-Stack E-Commerce Package',
      description: 'A fully custom e-commerce website with complete back-end integration',
      price: '$10,000',
      details: (
        <>
          <ul>
            <li>Full-Stack E-Commerce Store with product listings, cart functionality, and checkout</li>
            <li>Payment gateway integration</li>
            <li>Inventory management and order processing</li>
            <li>Basic SEO setup</li>
            <li>3 months of maintenance and support</li>
          </ul>
        </>
      )
    },
    {
      service: 'Ongoing Maintenance & Hosting',
      description: 'Monthly ongoing maintenance and hosting services',
      price: '$10 - $50/month',
      details: (
        <>
          <ul>
            <li>Hosting for the website</li>
            <li>Ongoing updates, bug fixes, and minor content updates</li>
            <li>Priority support for technical issues</li>
            <li>Could be more if ordering E-Commerce package</li>
          </ul>
        </>
      )
    },
  ];


  const handleLearnMoreClick = (service) => {
    const messageTemplates = {
      'Starter Package': 'I’m interested in the Starter Package, which includes a Basic Landing Page with up to 5 sections, mobile optimization, and more. Could you provide more details about mobile optimization and timeline?',
      'Business Package': 'I’m considering the Business Package with enhanced landing page and SEO. Could you let me know more about customization options and pricing?',
      'Professional Package': 'I would like to know more about the Professional Package with scheduling features. How does the scheduling system work, and what other features are included?',
      'Full-Stack E-Commerce Package': 'I’m interested in the Full-Stack E-Commerce Package. Could you provide more details on product listings, cart functionality, payment processing, and the backend integration?',
      'Ongoing Maintenance & Hosting': 'I’m interested in ongoing Maintenance and Hosting services. Can you provide details on what’s included and pricing for e-commerce plans?'
    };
  
    const message = messageTemplates[service];
    setPreFilledMessage(message); // Update the message in the contact form
    scrollToContactForm(); // Scroll to the contact form when "Learn More" is clicked
  };

  return (
    <section className="pricing-section">
      <div className="pricing-container">
        <SectionHeader title="Website Development Pricing Sheet" />
        <div className="pricing-grid">
          {pricingData.map((item, index) => (
            <div
              className="pricing-card"
              key={index}
            >
              <h3 className="pricing-service">{item.service}</h3>
              <p className="pricing-description">{item.description}</p>
              <p className="pricing-price">{item.price}</p>

              <div className="pricing-details">
                <p>{item.details}</p>
              </div>

              <button
                className="learn-more-button"
                onClick={() => handleLearnMoreClick(item.service)}
              >
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
