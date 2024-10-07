import React from 'react';
import './TechnologyScrollBar.css';

// Import the logos from the images folder
import reactLogo from '../images/react.svg';
import nodeLogo from '../images/nodedotjs.svg';
import expressLogo from '../images/express.svg';
import mongoLogo from '../images/mongodb.svg';
import jsLogo from '../images/javascript.svg';
import reduxLogo from '../images/redux.svg';
import nextLogo from '../images/nextdotjs.svg';
import htmlCssLogo from '../images/html5.svg';
import graphqlLogo from '../images/graphql.svg';

export function TechnologyScrollBar() {
  const logos = [
    { src: reactLogo, alt: 'React Logo' },
    { src: nodeLogo, alt: 'Node.js Logo' },
    { src: expressLogo, alt: 'Express Logo' },
    { src: mongoLogo, alt: 'MongoDB Logo' },
    { src: jsLogo, alt: 'JavaScript Logo' },
    { src: reduxLogo, alt: 'Redux Logo' },
    { src: nextLogo, alt: 'Next.js Logo' },
    { src: htmlCssLogo, alt: 'HTML & CSS Logo' },
    { src: graphqlLogo, alt: 'GraphQL Logo' }
  ];

  return (
    <div className="scroll-bar-container">
      <div className="scroll-bar-content">
        {logos.concat(logos).map((logo, index) => (
          <div className="scroll-item" key={index}>
            <img src={logo.src} alt={logo.alt} className="tech-logo" />
          </div>
        ))}
      </div>
    </div>
  );
}
