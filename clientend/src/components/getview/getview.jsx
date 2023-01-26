import React from 'react';
import { useState, useEffect } from 'react';
import moreicon from '../../assets/image/more_icon.png'
import sharebtn from '../../assets/image/share.png'
import like from '../../assets/image/heart.png'
import Heading from '../heading/heading';
import "../getview/getview.css"



export default function View() {

    const [postdata, setPostdata] = useState("");

    const fetchApi = async () => {
        const result = await fetch("http://localhost:8080/user");
        setPostdata(await result.json())
    }

    useEffect(() => {
        fetchApi()
    }, [])

    console.log(data);
    if (!postdata) {
        return (
            <h1>Your Page is Loading</h1>
        )
    }

    return (
        <>
            <Heading />
            {postdata?.result.map((e) => {
                console.log(e)
                const arr_date = e.postedAt.split(" ")
                const date = `${arr_date[0]} ${arr_date[2]} ${arr_date[1]} ${arr_date[3]}`
                return (
                    <div id="main_v">
                        <div id="header">
                            <h2 id="name_v">{e.author}</h2>
                            <img src={moreicon} alt="moreicon" />
                        </div>
                        <p id="location_view">{e.location}</p>
                        <div id="img_v">
                            <img src={`http://localhost:8080/user/${e.fileName}`} alt="posted_img" />
                        </div>
                        <div id="likeAndShare">
                            <img src={like} alt="likeicon" id="likes" />
                            <img src={sharebtn} alt="shareicon" id="share" />
                            <p id='date'>{date}</p>
                        </div>
                        <p id='count'>{e.likes}</p>
                        <p id="description_v">{e.description}</p>
                    </div>
                )
            })}
        </>
    )
}