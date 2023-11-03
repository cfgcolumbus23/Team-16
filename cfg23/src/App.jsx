import React from 'react';
import {createRoot} from 'react-dom/client';
import logo from './logo.svg';
import './App.css';
//import parent_image from '/Users/Shrit/Desktop/cfg/Team-16/cfg23/src/assets/parent_login_circle.jpeg';
//import guide_image from '/Users/Shrit/Desktop/cfg/Team-16/cfg23/src/assets/guide_login_circle.jpg';
//import org_image from '/Users/Shrit/Desktop/cfg/Team-16/cfg23/src/assets/organization_login_circle.jpg';
import profile_image from '/Users/Shrit/Desktop/cfg/Team-16/cfg23/src/assets/profile.png';

function App() {
  return (
  <>
    <div className="homepage">
      <div className="titles">
        <h1>Parents</h1>
        <h1>Guides</h1>
        <h1>Organizations</h1>
      </div>
      <div className="logins">
        <img className='parent-login' src={profile_image}/>
        <img className='guide-login' src={profile_image}/>
        <img className='organization-login' src={profile_image}/>
      </div>
    </div>

  </>
  );
}

export default App;
