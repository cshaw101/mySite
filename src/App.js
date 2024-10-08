import React, { useState } from 'react';
import { HeaderSimple } from './components/HeaderSimple';
import { HeroTitle } from './components/HeroTitle';
import { Cards } from './components/Cards'; 
import { AboutMe } from './components/AboutMe';
import { Pricing } from './components/Pricing';
import { ContactUs } from './components/ContactUs';
import { TechnologyScrollBar } from './components/TechnologyScrollBar';

function App() {
  const [preFilledMessage, setPreFilledMessage] = useState(''); // State to manage pre-filled message

  return (
    <div>
      <HeaderSimple />
      <main>
        <HeroTitle />
        <Cards /> 
        <AboutMe />
        <TechnologyScrollBar /> 
        {/* Pass setPreFilledMessage to Pricing to allow it to update the message */}
        <Pricing setPreFilledMessage={setPreFilledMessage} />
        {/* Pass preFilledMessage to ContactUs to display the updated message */}
        <ContactUs preFilledMessage={preFilledMessage} />
      </main>
    </div>
  );
}

export default App;
