import React, { useState } from 'react';

import "./index.css";


const Loading = () => {

    const [renderText, setRenderText] = useState("");

    const loopText = () => {

        const InitText = "INITIALIZING portV3.0..."
        const InitTextArray = InitText.split("");
        let renderArray = [];

     

        for (let i = 0; i < InitTextArray.length; i++) {

            renderArray.push(InitTextArray[i]);
            setRenderText(renderArray);

            console.log(renderText);
        }
    };




    return (

        <div className='black' onLoad={loopText}>
            <div id='#loadingdiv'>
                <h1>{renderText}</h1>
            </div>
        </div>
    )
}

export default Loading;