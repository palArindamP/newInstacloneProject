import React from 'react';
import { Link } from 'react-router-dom';
import camera from '../../assets/image/camera1.png'
import logo from '../../assets/image/icon.png'
import "../heading/heading.css"


export default function Heading() {
    return (
        <div id="main_h" >
            <Link to="/">
                <img src={logo} alt="logo" id='logo_h' />
            </Link>
            <h1 id="heading">InstaClone</h1>
            <Link to="/post">
                <img src={camera} alt="camera" id='camera_h' />
            </Link>
        </div>
    )
}