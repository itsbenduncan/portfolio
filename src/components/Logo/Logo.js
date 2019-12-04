import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import logo from './logo.png';
import Typing from 'react-typing-animation';
import instagram from './instagram.png';
import twitter from './twitter.png';
import github from './github.png';

const Logo = () => {
    return (
        // <div className='Logo'>
        //     <Tilt className='Tilt br2 shadow-2' options={{ max: 25, scale: 1.05, }} style={{ height: 150, width: 150 }} >
        //         <div className='Tilt-inner'>
        //             <img style={{paddingTop: '5px'}} alt='logo' src={logo} />
        //             <Typing>
        //                 <div className='type-text'>itsbenduncan</div>
        //             </Typing>
        //         </div>
        //     </Tilt>
        //     <div className='social'>
        //         <img className='badge' alt='instagram' src={instagram} />
        //         <img className='badge' alt='instagram' src={instagram} />
        //         <img className='badge' alt='instagram' src={instagram} />
        //     </div>
        // </div>

        <div>
            <div class="Logo1">
                <Tilt className='tilt2 br2 shadow-2' options={{ max: 25, scale: 1.05, }} style={{ height: 150, width: 150 }} >
                    <img className='inner3' style={{paddingTop: '5px'}} alt='logo' src={logo} />
                    <Typing>
                        <div className='inner-text'>itsbenduncan</div>
                    </Typing>
                </Tilt>
                <div className='social-icons'>
                    <img className='inner2' alt='github' src={github} />
                    <img className='inner2' alt='instagram' src={instagram} />
                    <img className='inner2' alt='twitter' src={twitter} />
                </div>
            </div>
        </div>

    )
}

export default Logo;