import React, { useState, useEffect } from 'react';
import { Container, Group, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Link, Events, scroller } from 'react-scroll';
import './HeaderSimple.css';
import codeBlock from '../images/codeBlock.png';

const links = [
  { link: 'hero-title-section', label: 'Home' },
  { link: 'about-me-section', label: 'About Me' },
  { link: 'pricing-section', label: 'Pricing' },
  { link: 'contact-form-section', label: 'Contact' },
];

export function HeaderSimple() {
  const [opened, { toggle }] = useDisclosure(false);
  const [activeSection, setActiveSection] = useState(links[0].link);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setActiveSection('hero-title-section'); // Set to "Home" when scrolled to the top
      }
    };

    // Register scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Register event listeners for react-scroll events
    Events.scrollEvent.register('begin', () => {});
    Events.scrollEvent.register('end', () => {});

    return () => {
      // Unregister event listeners when component is unmounted
      window.removeEventListener('scroll', handleScroll);
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  const items = links.map((link) => (
    <Link
      key={link.label}
      to={link.link}
      smooth={true}
      duration={500}
      spy={true}
      offset={-100} // Adjust to accommodate the header height
      className={`link ${activeSection === link.link ? 'active' : ''}`}
      onSetActive={() => setActiveSection(link.link)}
    >
      {link.label}
    </Link>
  ));

  return (
    <header className="header">
      <Container size="md" className="inner">
        <div className="logo" onClick={() => scroller.scrollTo('hero-title-section', { smooth: true, duration: 500 })}>
          <img src={codeBlock} alt="logo" />
          Shaw Development
        </div>
        <Group spacing={5} className="links">
          {items}
        </Group>
        <Burger opened={opened} onClick={toggle} className="burger" size="sm" />
      </Container>
    </header>
  );
}
