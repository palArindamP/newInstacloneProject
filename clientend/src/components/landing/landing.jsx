import React from 'react';

import { Link } from 'react-router-dom';
import lens from "../../assects/Image/lens.png";
import "../landing/landing.css"

export default function Landingpage() {
    return (
        <>
            <h1 id="l_heading">Landing Page</h1>
            <div id='main_l'>
                <div id='img_landingPage'>
                    <img src={lens} alt="img2" id="img_l" />
                </div>
                <div id='side'>
                    <p id="p"> 10X TEAM 04 </p>
                    <Link to="/post"><button id="btn">Enter</button></Link>
                </div>
            </div>
        </>
    );
}