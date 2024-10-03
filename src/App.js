import React from 'react';
import { HeaderSimple } from './components/HeaderSimple';
import { HeroTitle } from './components/HeroTitle';
import { Cards } from './components/Cards'; 
import { AboutMe } from './components/AboutMe';
import { Pricing } from './components/Pricing';

function App() {
  return (
    <div>
      <HeaderSimple />
      <main>
        <HeroTitle />
        <Cards /> 
        <AboutMe />
        <Pricing />
      </main>
    </div>
  );
}

export default App;
