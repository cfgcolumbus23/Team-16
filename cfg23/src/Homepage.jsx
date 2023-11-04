import React from 'react';
import './App.css';
import "./Homepage.css";
import {Link} from 'react-router-dom';
import profile_image from './assets/profile.png';
import FR5_logo from './assets/FR5-horizontal-logo.png';
import Create from "./Create";

function Homepage() {
  return (
  <>
    <header>
      <div>
        <img className="logo" src={FR5_logo} alt="Future Ready Five Logo"/>
      </div>
      <div>
        <a href="https://futurereadyfive.org/"><button className="button">Future Ready Five Website</button></a>
        <Link to="/Create">
          <button className="button">Create Account</button>
        </Link>
      </div>
    </header>
    <div className="homepage">
      {/* Lists the names of each login prompt and stylizes them*/}
      <div className="titles">
        <h1>Parents</h1>
        <h1>Guides</h1>
        <h1>Organizations</h1>
      </div>
      <div className="logins">
        <img className='parent-login' src={profile_image} alt="Profile"/>
        <img className='guide-login' src={profile_image} alt="Profile"/>
        <img className='organization-login' src={profile_image} alt="Profile"/>
      </div>
      {/* Routes each login to the Login component */}
      <div className= "logins">
        <Link className="login" to="/login">
          <button className="link-button">Login</button>
        </Link>
        <Link className="login" to="/login">
          <button className="link-button">Login</button>
        </Link>
        <Link className="login" to="/login">
          <button className="link-button">Login</button>
        </Link>
      </div>
    </div>

  </>
  );
}

export default Homepage;
