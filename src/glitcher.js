import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import splash from './images/googleblock.png';
import "./index.css";
import "./glitch.css";


const IsGlitchy = () => {

    const [Glitching, setGlitching] = useState(false)

    const history = useHistory();

    

    window.addEventListener('mousemove', () => {
        setGlitching(true);
        setTimeout(() => {history.push('/mainpage')}, 5000);
    }, {once: true});

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