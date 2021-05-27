import React, { useState } from 'react';
import "./index.css";
import "./glitch.css";



const WorkLinks = () => {

    const [link1, setLink1] = useState('');
    const [link2, setLink2] = useState('');
    const [link3, setLink3] = useState('');
    const [link4, setLink4] = useState('');
    const [link5, setLink5] = useState('');
    const [link6, setLink6] = useState('');
    const [link7, setLink7] = useState('');




    setTimeout(() => {
        setLink1(<div className="glitchlink mt-5">Kirby</div>);
    }, 800);
    setTimeout(() => {
        setLink2(<div className="glitchlink mt-2">Recipeezy</div>);
    }, 1400);
    setTimeout(() => {
        setLink3(<div className="glitchlink mt-2">Roll Call</div>);
    }, 1600);
    setTimeout(() => {
        setLink4(<div className="glitchlink mt-2">WxApp</div>);
    }, 1800);
    setTimeout(() => {
        setLink5(<div className="glitchlink mt-2">FireChat</div>);
    }, 2000);
    setTimeout(() => {
        setLink6(<div className="glitchlink mt-2">PayeePages</div>);
    }, 2200);
    setTimeout(() => {
        setLink7(<div className="fadelink" onClick={replay}>Replay</div>);
    }, 3000);

    function replay() {
        window.location.reload();
    }

    return (

        <div className="container-fluid">

            {link1}
            {link2}
            {link3}
            {link4}
            {link5}
            {link6}

            {link7}

        </div>

    )
}

export default WorkLinks;