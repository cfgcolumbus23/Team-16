import React from 'react';
import {createRoot} from 'react-dom/client';
import logo from './logo.svg';
import './App.css';
import "./Homepage.css";
import {Link} from 'react-router-dom';
import profile_image from './assets/profile.png';

function Homepage() {
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
      <div className= "logins">
        <Link className="login" to="/login">
          <h1>Login</h1>
        </Link>
        <Link className="login" to="/login">
          <h1>Login</h1>
        </Link>
        <Link className="login" to="/login">
          <h1>Login</h1>
        </Link>
      </div>
    </div>

  </>
  );
}

export default Homepage;
