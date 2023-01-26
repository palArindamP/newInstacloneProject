import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import "../posting/posting.css"
import Heading from "../heading/heading";



export default function Post() {

    const [imageFile, setImageFile] = useState('');
    const [username, setUsername] = useState('')
    const [location, setLocation] = useState('')
    const [description, setDescritpion] = useState("");


    function Handelpost() {
        

        const dataset = new FormData();
        formdata.append("fileName", imageFile);
        formdata.append("author", username);
        formdata.append("location", location);
        formdata.append("description", description);
        fetch("http://localhost:8080/user", {
            method: "POST",
            body: dataset
        })
        
    }


    return (
        <>
            <Heading />
            <div id="post_main">
                <div>
                    <label htmlFor="file">Choose Your Image : </label>
                    <input type="file"  id="inputFile" accept=".jpg, .jpeg, .png, .gif" onChange={(e) => { setImageFile(e.target.files[0]) }} />
                </div>
                <div>
                    <label htmlFor="name">Name : </label>
                    <input type="text" value={username} id="inputName" placeholder="Enter Your Name" onChange={(e) => { setUsername(e.target.value) }}  />
                </div>
                <div>
                    <label htmlFor="location"> Location :</label>
                    <input type="text" value={location} id="inputLocation" placeholder="enter your location" onChange={(e) => { setLocation(e.target.value) }}  />
                </div>
                <div>
                    <label>description :</label>
                    <input type="text" value={description} id='inputDescription' placeholder='Type What You feel' onChange={(e) => { setDescritpion(e.target.value) }}  />
                </div>
                <Link to="/view">
                    <div>
                        <button onClick={Handelpost} id="post_btn">Post</button>
                    </div>
                </Link>
            </div>
        </>
    )
}