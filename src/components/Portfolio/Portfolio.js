import React from 'react';
import './Portfolio.css';
import Tilt from 'react-tilt';
import brain from './brain.png';

const Portfolio = () => {
    return (
        <div>
            <div className='pTitle'>
                portfolio
            </div>
            <div className="portfolio">
                <div className="portfolio-container">
                        <Tilt className='ptilt br2 shadow-2' options={{ max: 25, scale: 1.05, }} >
                            <div className='p-card'>
                                <img src={brain} className="brain" />
                                <div className="pDescription">
                                    face-recognition
                                </div>
                            </div>
                        </Tilt>
                </div>
                <div className="portfolio-container">
                        <Tilt className='ptilt br2 shadow-2' options={{ max: 25, scale: 1.05, }} >
                            <div className='p-card'>
                                e-commerce
                            </div>
                        </Tilt>
                </div>
                <div className="portfolio-container">
                    <Tilt className='ptilt br2 shadow-2' options={{ max: 25, scale: 1.05, }} >
                            <div className='p-card'>
                                this portfolio
                            </div>
                        </Tilt>
                </div>
                <div className="portfolio-container">
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