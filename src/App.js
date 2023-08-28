import './input.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import VerticalLines from './components/VerticalLines';
import Menu from './components/Menu';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [showMenu, setShowMenu] = useState(false);

  function clickShow() {
    setShowMenu((current) => !current);
  }

  return (
    <div className="App">
      <Navbar showMenu={showMenu} onClick={clickShow} />
      <Menu showMenu={showMenu} onClick={clickShow} />
      <VerticalLines />
      <Hero />
      <AboutMe />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
