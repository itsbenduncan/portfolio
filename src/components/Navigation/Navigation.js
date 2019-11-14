import React from 'react';
import './Navigation.css';

const Navigation = () => {
    return (
        <nav style={{display: 'Flex', justifyContent: 'flex-end'}}>
            <p className='pixel'> About </p>
            <p className='pixel'> Portfolio </p>
            <p className='pixel'> Contact </p>
        </nav>
    )
}

export default Navigation;