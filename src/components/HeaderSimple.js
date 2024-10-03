import React, { useState } from 'react';
import { Container, Group, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import './HeaderSimple.css';
import logo from '../images/logo.png';

const links = [
  { link: '/Home', label: 'Home' },
  { link: '/About', label: 'About Me' },
  { link: '/Pricing', label: 'Pricing' },
  { link: '/Contact', label: 'Contact' },
];

export function HeaderSimple() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={`link ${active === link.link ? 'active' : ''}`}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <header className="header">
      <Container size="md" className="inner">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <Group spacing={5} className="links">
          {items}
        </Group>
        <Burger opened={opened} onClick={toggle} className="burger" size="sm" />
      </Container>
    </header>
  );
}
