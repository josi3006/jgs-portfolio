import React, { useState } from 'react';
import "./index.css";
import Links from "./links.js";



const Main = () => {




    return (

        <div className="container-fluid">

            <div className="row fullwidth">

                <div className="col-2 black">
                    <Links />
                </div>

                <div className="col-8">
                    I'm a col!
                </div>

                <div className="col-2 black">
                    I'm a col!
                </div>

            </div>


        </div>
    )
}

export default Main;