import React from 'react';
import './Portfolio.css';
import Tilt from 'react-tilt';

const Portfolio = () => {
    return (
        <div>
            <div className='pTitle'>
                portfolio
            </div>
            <div className="portfolio">
                <div className='p-row'>
                    <Tilt className='ptilt br2 shadow-2' options={{ max: 25, scale: 1.05, }} >
                        <div className='p-card'>
                            face-recognition
                        </div>
                    </Tilt>
                    <Tilt className='ptilt br2 shadow-2' options={{ max: 25, scale: 1.05, }} >
                        <div className='p-card'>
                            e-commerce
                        </div>
                    </Tilt>
                </div>
                <div className='p-row'>
                <Tilt className='ptilt br2 shadow-2' options={{ max: 25, scale: 1.05, }} >
                        <div className='p-card'>
                            this portfolio
                        </div>
                    </Tilt>
                    <Tilt className='ptilt br2 shadow-2' options={{ max: 25, scale: 1.05, }} >
                        <div className='p-card'>
                            blog
                        </div>
                    </Tilt>
                </div>
            </div>
        </div>    
    )
}

export default Portfolio;