import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import splash from './images/googleblock.png';
import "./index.css";


const IsGlitchy = () => {

    const [Glitching, setGlitching] = useState(false)

    const history = useHistory();

    // const redirect = () => {
    //     console.log('you clicked me!');
    //     setTimeout(() => {history.push('/loadingpage')}, 5000);

    // }


    window.addEventListener('mousemove', () => {
        setGlitching(true);
        setTimeout(() => {history.push('/loadingpage')}, 5000);
    }, {once: true});

    return (

        <div className="covers">

            {/* <div>            <button onClick={redirect} />
            </div> */}
            {/* {
                Glitching ? (
                    <div className="glitchbox">
                        <img src={splash} alt="splash" className='fullsize' />
                    </div>) : (
                    <div className="staticbox">
                        <img src={splash} alt="splash" className='fullsize' />
                    </div>)
            } */}


        </div>
    )
}

export default IsGlitchy;