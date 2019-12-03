import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Social from './components/Social/Social';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
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

class App extends Component {
  constructor () {
    super();
    this.state = {
      input: '',
      route: 'About',
    }
  }

  onRouteChange = (route) => {
    this.setState({route: route});
  }

  render() {
    return (
      <div className="App">
        <Particles 
          className='Particles'
          params={particleOptions}
        />
        <Social />
        <Logo />
        { this.state.route === 'Portfolio'
          ? <Portfolio onRouteChange={this.onRouteChange} />
          :  this.state.route === 'Contact'
          ? <Contact onRouteChange={this.onRouteChange} />
          : ( this.state.route === 'About'
            ? <About onRouteChange={this.onRouteChange} />
            : <div>
            </div>
          )
        }
        <Navigation 
          onRouteChange={this.onRouteChange} 
        />
      </div>
    );
  }
}

export default App;
