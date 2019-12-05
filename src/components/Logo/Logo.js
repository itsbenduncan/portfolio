import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import logo from './logo.png';
import Typing from 'react-typing-animation';
import instagram from './instagram.png';
import twitter from './twitter.png';
import github from './github.png';

const Logo = ({ onRouteChange }) => {
    return (
        <div>
            <div className="navigator">
                <div class="logo-elements">
                    <Tilt className='tilt2 br2 shadow-2' options={{ max: 25, scale: 1.05, }} >
                        <img className='logo' alt='logo' src={logo} />
                        <Typing>
                            <div className='name'>itsbenduncan</div>
                        </Typing>
                    </Tilt>
                    <div className='social-wrap'>
                        <a href="https://github.com/itsbenduncan" target={"_blank"}>
                            <div className='social-pixel'>
                                <img className='social-icon' alt='github' src={github} />
                            </div>
                        </a>
                        <a href="https://instagram.com/itsbenduncan" target={"_blank"}>
                            <div className='social-pixel'>
                                <img className='social-icon' alt='instagram' src={instagram} />
                            </div>
                        </a>
                        <a href="https://twitter.com/itsbenduncan" target={"_blank"}>
                            <div className='social-pixel'>
                                <img className='social-icon' alt='twitter' src={twitter} />
                            </div>
                        </a>
                    </div>
                </div>
                <div class="nav-buttons">
                    <div class="button-container">
                        <button className='pixel' onClick={() => onRouteChange('About')} > About </button>
                        <button className='pixel' onClick={() => onRouteChange('Portfolio')} > Portfolio </button>
                        <button className='pixel' onClick={() => onRouteChange('Contact')} > Contact </button>
                    </div>    
                </div>
            </div>

        {/* <div class="navigator">
            <div class="ben-elements">
                <div class="tilt">
                    <div class="logo"></div>
                    <div class="name">itsbenduncan</div>
                </div>  
                <div class="social-wrap">
                    <div class="social-icon"></div> 
                    <div class="social-icon"></div> 
                    <div class="social-icon"></div> 
                </div>
            </div>
            <div class="nav-buttons">
                <div class="button-container">
                <div class="nav-button">about</div>
                <div class="nav-button">portfolio</div>
                <div class="nav-button">contact</div>
            </div>
        </div> */}
    </div>
    )
}

export default Logo;