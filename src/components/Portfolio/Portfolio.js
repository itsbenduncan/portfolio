import React from 'react';
import './Portfolio.css';
import Tilt from 'react-tilt';
import brain from './brain.png';

const Portfolio = () => {
    return (
        <div className="scroller">
            <div className='pTitle'>
                portfolio
            </div>
            <div className="portfolio">
            <div className="scroller">
                <a className="portfolio-container" 
                    href="https://brave-kowalevski-9f9922.netlify.com"
                    target={"_blank"} >
                        <Tilt className='ptilt br2 shadow-2' options={{ max: 25, scale: 1.05, }} >
                            <div className='p-card'>
                                <img src={brain} alt='brain' className="brain" />
                                <div className="pDescription">
                                    face-recognition
                                </div>
                            </div>
                        </Tilt>
                </a>
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
        </div>    
    )
}

export default Portfolio;