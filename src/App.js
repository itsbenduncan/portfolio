import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Test from './components/Test/Test';
import './App.css';

function App() {
  return (
    <div className="App">
      <Logo />
      <Test />
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
