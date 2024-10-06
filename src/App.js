import React from 'react';
import { HeaderSimple } from './components/HeaderSimple';
import { HeroTitle } from './components/HeroTitle';
import { Cards } from './components/Cards'; 
import { AboutMe } from './components/AboutMe';
import { Pricing } from './components/Pricing';
import { ContactUs } from './components/ContactUs';

function App() {
  return (
    <div>
      <HeaderSimple />
      <main>
        <HeroTitle />
        <Cards /> 
        <AboutMe />
        <Pricing />
        <ContactUs />
      </main>
    </div>
  );
}

export default App;
