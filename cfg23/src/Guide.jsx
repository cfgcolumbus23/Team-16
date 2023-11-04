import React from 'react';
import {createRoot} from 'react-dom/client';
import "./Guide.css";
import {Link} from 'react-router-dom';
import profile_pic from './assets/profile.png';

export default function Guide() {
    const children = [
        profile_pic,
        profile_pic,
        profile_pic,
        profile_pic,
        profile_pic,
        profile_pic,
        profile_pic,
        profile_pic,
        profile_pic,
    ]
    // Loop through the image URLs and create <img> elements
    const output_images = () => children.map((child, index) => {
        // Create an <img> element
        const imageElement = <img src={child} key={index}></img>
        // Append the <img> element to the image container
        return imageElement;
    });


    {/* Loops through images to display within the child list */}
    
    return (
        <>
            <div>
                <div className="list-title">
                    <h1>Your Students</h1>
                </div>
                {/* Displays the children pictures in the viewer */}
                <div className="child-list">
                    {output_images()}
                </div>
            </div>
        </>
    );
}
