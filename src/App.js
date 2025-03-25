import React, { useState } from 'react';
import { HeaderSimple } from './components/HeaderSimple';
import { HeroTitle } from './components/HeroTitle';
import { Cards } from './components/Cards';
import { AboutMe } from './components/AboutMe';
import { Pricing } from './components/Pricing';
import { ContactUs } from './components/ContactUs';
import { TechnologyScrollBar } from './components/TechnologyScrollBar';
import { scroller } from 'react-scroll';
import { Footer } from './components/Footer';
import { Analytics } from "@vercel/analytics/react"

function App() {
  const [preFilledMessage, setPreFilledMessage] = useState(''); // State to manage pre-filled message

  // Scroll function to smoothly move to the contact form
  const scrollToContactForm = () => {
    scroller.scrollTo('contact-form-section', {
      smooth: true,
      duration: 500,
      offset: -100, // Adjust to accommodate header height, if needed
    });
  };

  return (
    <div>
      <HeaderSimple />
      <main>
        <HeroTitle />
        <Cards />
        <AboutMe />
        <TechnologyScrollBar />
        <Pricing setPreFilledMessage={setPreFilledMessage} scrollToContactForm={scrollToContactForm} />
        <ContactUs preFilledMessage={preFilledMessage} />
      </main>
      <Footer/>
      <Analytics />
    </div>
  );
}

export default App;
