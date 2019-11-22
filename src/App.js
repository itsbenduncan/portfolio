import React from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import About from './components/About/About';
import './App.css';

const particleOptions = {
  particles: {
    number: {
      value: 125,
      density: {
          enable: true,
          value_area: 700,
      }
    }
    ,move: {
      enable: true,
      speed: 1.5,
    }
    ,line_linked: {
      opacity: .15,
      width: 1.25,
    }
  }
}

function App() {
  return (
    <div className="App">
      <Particles 
        className='Particles'
        params={particleOptions}
      />
      <Logo />
      <About />
      <Navigation />
      {/*
      <Head />
      <ModeSwitch />
      <ContactForm />
      */}
    </div>
  );
}

export default App;
