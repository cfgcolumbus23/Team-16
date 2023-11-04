import React from 'react';
import {createRoot} from 'react-dom/client';
import "./Guide.css";
import {Link} from 'react-router-dom';
import profile_pic from './assets/profile.png';

export default function Guide() {

    {/* Loops through images to display within the child list */}
    for (let i = 0; i < 20; i++) {            
        const element = '<img src="' + {profile_pic} + '">'
        document.querySelector('.child-list').innerHTML += element;
    }
    return (
        <>
            {/* Displays the children pictures in the viewer */}
            <div className="child-list"></div>
            <img src={profile_pic}/>
        </>
    );
}
