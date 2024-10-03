import React from 'react';
import { HeaderSimple } from './components/HeaderSimple';
import { HeroTitle } from './components/HeroTitle';
import { Cards } from './components/Cards'; 
import { AboutMe } from './components/AboutMe';

function App() {
  return (
    <div>
      <HeaderSimple />
      <main>
        <HeroTitle />
        <Cards /> 
        <AboutMe />
      </main>
    </div>
  );
}

export default App;
