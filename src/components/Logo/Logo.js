import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import logo from './logo.png';
import Typing from 'react-typing-animation';
import instagram from './instagram.png';

const Logo = () => {
    return (
        <div className='Logo'>
            <Tilt className="Tilt br2 shadow-2" options={{ max: 25, scale: 1.05, }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner" >
                    <img style={{paddingTop: '5px'}} alt='logo' src={logo} />
                    <Typing>
                        <h1>itsbenduncan</h1>
                    </Typing>
                </div>
            </Tilt>
            <img className="badge" alt='instagram' src={instagram} />
        </div>
    )
}

export default Logo;