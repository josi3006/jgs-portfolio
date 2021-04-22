import React, { useState } from 'react';
import splash from './images/googleblock.png';

import "./index.css";


const IsGlitchy = () => {

    const [Glitching, setGlitching] = useState(false)

    window.addEventListener('mousemove', () => {
        setGlitching(true);
    })

    return (

        <div>
            {
                Glitching ? (
                    <div className="glitchbox">
                        <img src={splash} alt="splash" />
                    </div>) : (
                    <div className="staticbox">
                        <img src={splash} alt="splash" />
                    </div>)
            }

        </div>
    )
}

export default IsGlitchy;