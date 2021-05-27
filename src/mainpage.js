import React, { useState } from 'react';
import "./index.css";
import WorkLinks from "./worklinks.js";
import ContactLinks from "./contactlinks.js";
import MainWindow from "./mainwindow.js";



const Main = () => {




    return (

        <div className="container-fluid">

            <div className="row fullwidth">

                <div className="col-2 black">
                    <WorkLinks />
                </div>

                <div className="col-8 black">
                    <MainWindow />
                </div>

                <div className="col-2 black contacts">
                    <ContactLinks />
                </div>

            </div>


        </div>
    )
}

export default Main;