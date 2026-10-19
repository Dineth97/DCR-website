import React from 'react';
import Navbar from './Components/Navbar';

// Components imports
import Home from './Components/Home';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Education from './Components/Education';
import TechTicker from './Components/TechTicker'; // අලුතින් හදපු TechTicker එක Import කළා
import Services from './Components/Services';
import BusinessSocial from './Components/BusinessSocial';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import BatakolaAchchiAd from './Components/BatakolaAchchiAd';

function App() {
  return (
    <div>
      <Navbar />

      {/* 1. Home Section */}
      <section id="home">
        <Home />
      </section>

      {/* 2. About Section */}
      <section id="about">
        <About />
      </section>

      {/* 3. Portfolio Section */}
      <section id="portfolio">
        <Portfolio />
      </section>

      {/* 4. Education Section */}
      <section id="education">
        <Education />
      </section>

      {/* Education සහ Services අතර මැදට Infinite Tech Ticker එක */}
      <TechTicker />

      {/* 5. Services Section */}
      <section id="services">
        <Services />
      </section>

      {/* 6. Business & Social Section */}
      <section id="business">
        <BusinessSocial />
      </section>

      <BatakolaAchchiAd />

      {/* 7. Resume Section */}
      <section id="resume">
        <Resume />
      </section>

      {/* 8. Contact Section */}
      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}

export default App;