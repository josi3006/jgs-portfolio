import React, { useState } from 'react';
import splash from './images/googleblock.png';

import "./index.css";


const IsGlitchy = () => {

    const [Glitching, setGlitching] = useState(false)

    window.addEventListener('mousemove', () => {
        setGlitching(true);
    })

    return (

        <div className="covers">
            {
                Glitching ? (
                    <div className="glitchbox">
                        <img src={splash} alt="splash" className='fullsize' />
                    </div>) : (
                    <div className="staticbox">
                        <img src={splash} alt="splash" className='fullsize' />
                    </div>)
            }

        </div>
    )
}

export default IsGlitchy;