import React, { useState } from 'react';
import "./index.css";
import "./glitch.css";



const Links = () => {

    const [link1, setLink1] = useState('');
    const [link2, setLink2] = useState('');
    const [link3, setLink3] = useState('');
    const [link4, setLink4] = useState('');
    const [link5, setLink5] = useState('');



    setTimeout(() => {
        setLink1(<div className="glitchlink">One link</div>);
    }, 200);
    setTimeout(() => {
        setLink2(<div className="glitchlink">two link</div>);
    }, 800);
    setTimeout(() => {
        setLink3(<div className="glitchlink">three link</div>);
    }, 1000);
    setTimeout(() => {
        setLink4(<div className="glitchlink">four link</div>);
    }, 1200);
    setTimeout(() => {
        setLink5(<div className="glitchlink">five link</div>);
    }, 1400);


    return (

        <div className="container-fluid">


            {link1}
            {link2}
            {link3}
            {link4}
            {link5}


        </div>

    )
}

export default Links;