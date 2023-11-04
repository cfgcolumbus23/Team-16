import React from 'react';
import {createRoot} from 'react-dom/client';
import "./Guide.css";
import {Link} from 'react-router-dom';
import profile_pic from './assets/profile.png';

export default function Guide() {

    const children = [
        {profile_pic},
        {profile_pic},
        {profile_pic},
        {profile_pic}
    ]

    ///console.log(document.toString());
    // Get a reference to the image container <div>
    const imageContainer = document.getElementById('child-list');

    // Loop through the image URLs and create <img> elements
    children.forEach((child) => {
        ///console.log(typeof imageContainer);
        // Create an <img> element
        const imageElement = document.createElement('img');
        if (imageElement != null) {
            // Set the src attribute to the image URL
            imageElement.src = child;
            // Append the <img> element to the image container
            imageContainer.appendChild(child);
        } else {
            console.log("unsupported");
        }
    });


    {/* Loops through images to display within the child list */}
    
    return (
        <>
            <div>
                <div className="list-title">
                    <h1>Your Students</h1>
                </div>
                {/* Displays the children pictures in the viewer */}
                <div id="child-list"></div>
            </div>
        </>
    );
}
