import React from 'react';
import { HeaderSimple } from './components/HeaderSimple';
import { HeroTitle } from './components/HeroTitle';
import { Cards } from './components/Cards'; 
import { AboutMe } from './components/AboutMe';
import { Pricing } from './components/Pricing';
import { ContactUs } from './components/ContactUs';
import { TechnologyScrollBar } from './components/TechnologyScrollBar';

function App() {
  return (
    <div>
      <HeaderSimple />
      <main>
        <HeroTitle />
        <Cards /> 
        <AboutMe />
        <TechnologyScrollBar /> 
        <Pricing />
        <ContactUs />
      </main>
    </div>
  );
}

export default App;
