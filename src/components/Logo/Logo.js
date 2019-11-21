import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import logo from './logo.png';

const Logo = () => {
    return (
        <div className='Logo'>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner">
                    <img style={{paddingTop: '5px'}} alt='logo' src={logo} />
                    <h1> itsbenduncan </h1>
                </div>
            </Tilt>
        </div>
    )
}

export default Logo;