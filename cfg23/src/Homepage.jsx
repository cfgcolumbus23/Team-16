import React from 'react';
import './App.css';
import "./Homepage.css";
import {Link} from 'react-router-dom';
import profile_image from './assets/profile.png';
import FR5_logo from './assets/FR5-horizontal-logo.png';

//Renders the homepage
function Homepage() {
  return (
  <>
    <header>
      <div class="homepage">
        <h1>Welcome</h1>
      </div>
      <div class="navigation-container">
        <div class="site-navigation">
          {/* NavBar menu items */}
          <a href="/Create">Create Account</a>
          <a href="https://futurereadyfive.org/">Contact Us</a>
        </div>
        <div>
          <img className="logo" src={FR5_logo} alt="Future Ready Five Logo"/>
        </div>
      </div>
    </header>
    {/* Container holding the login containers */}
    <div className="main-container">
      <div className = "main-section">
        <div className = "section_1">
          <h1>Parents</h1>
          <img className='parents' src={profile_image} alt="Profile"/>
          <p>Parents of children registered with Future Ready Five please login here!</p>
          {/* Routes to different component pages */}
          <Link className="login" to="/LoginParent">
            <button className="button2">Login</button>
          </Link>
        </div>
        <div className = "section_2">
          <h1>Guides</h1>
          <img className='guides' src={profile_image} alt="Profile"/>
          <p>Intervention guides registered with Future Ready Five please login here!</p>  
          {/* Routes to different component pages */}        
          <Link className="login" to="/LoginGuide">
            <button className="button2">Login</button>
          </Link>
        </div>
        <div className = "section_3">
          <h1>Organizations</h1>
          <img className='organizations' src={profile_image} alt="Profile"/>
          <p>Intervention organizations registered with Future Ready Five please login here!</p>   
          {/* Routes to different component pages */}       
          <Link className="login" to="/LoginOrg">
              <button className="button2">Login</button>
          </Link>
        </div>
      </div>
    </div>
    <div className = "footer">
    </div>
  </>
  );
}

export default Homepage;
