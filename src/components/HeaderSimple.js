import React, { useState } from 'react';
import { Container, Group, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Link } from 'react-scroll';
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
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <Link
      key={link.label}
      to={link.link}
      smooth={true}
      duration={500}
      className={`link ${active === link.link ? 'active' : ''}`}
      onClick={() => setActive(link.link)}
    >
      {link.label}
    </Link>
  ));

  return (
    <header className="header">
      <Container size="md" className="inner">
        <div className="logo">
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