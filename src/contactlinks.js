import React, { useState } from 'react';
import "./index.css";
import "./glitch.css";



const ContactLinks = () => {

    const [link1, setLink1] = useState('');
    const [link2, setLink2] = useState('');
    const [link3, setLink3] = useState('');
    const [link4, setLink4] = useState('');
    const [link5, setLink5] = useState('');
    const [link6, setLink6] = useState('');



    setTimeout(() => {
        setLink1(<div className="glitchlink mt-5">Email</div>);
    }, 2000);
    setTimeout(() => {
        setLink2(<div className="glitchlink mt-2">Call</div>);
    }, 2400);
    setTimeout(() => {
        setLink3(<div className="glitchlink mt-2">Contact Form</div>);
    }, 2500);
    setTimeout(() => {
        setLink4(<div className="glitchlink mt-2">LinkedIn</div>);
    }, 2600);
    setTimeout(() => {
        setLink5(<div className="glitchlink mt-2">Github</div>);
    }, 3000);
    setTimeout(() => {
        setLink6(<div className="glitchlink mt-2 mb-5">Resume</div>);
    }, 3200);

    return (

        <div className="container-fluid contacts">

            {link1}
            {link2}
            {link3}
            {link4}
            {link5}
            {link6}

        </div>

    )
}

export default ContactLinks;