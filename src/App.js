import React from 'react';
import { HeaderSimple } from './components/HeaderSimple';
import { HeroTitle } from './components/HeroTitle';
import { Cards } from './components/Cards'; 

function App() {
  return (
    <div>
      <HeaderSimple />
      <main>
        <HeroTitle />
        <Cards /> 
      </main>
    </div>
  );
}

export default App;
