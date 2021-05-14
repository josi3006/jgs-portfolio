import React, { useState } from 'react';
import "./index.css";
import "./glitch.css";



const Links = () => {

    const link1 = <div className="glitchlink">One link</div>;
    const link2 = <div className="glitchlink">Two link</div>
    const link3 = <div className="glitchlink">Three link</div>
    const link4 = <div className="glitchlink">Fourtch link</div>
    const link5 = <div className="glitchlink">FIve link</div>

    


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