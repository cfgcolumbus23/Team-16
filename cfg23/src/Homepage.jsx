import React from 'react';
import './App.css';
import "./Homepage.css";
import {Link} from 'react-router-dom';
import profile_image from './assets/profile.png';
import FR5_logo from './assets/FR5-horizontal-logo.png';

function Homepage() {
  return (
  <>
    <header>
      <div class="homepage">
        <h1>Welcome</h1>
      </div>
      <div class="navigation-container">
        <div class="site-navigation">
          <a href="/Create">Create Account</a>
          <a href="https://futurereadyfive.org/">Contact Us</a>
        </div>
        <div>
          <img className="logo" src={FR5_logo} alt="Future Ready Five Logo"/>
        </div>
      </div>
    </header>
    <div className="main-container">
      <div className = "main-section">
        <div className = "section_1">
          <h1>Parents</h1>
          <img className='parents' src={profile_image} alt="Profile"/>
          <p>Parents of children registered with Future Ready Five please login here!</p>
          <Link className="login" to="/LoginParent">
            <button className="button2">Login</button>
        </Link>
        </div>
        <div className = "section_2">
          <h1>Guides</h1>
          <img className='guides' src={profile_image} alt="Profile"/>
          <p>Intervention guides registered with Future Ready Five please login here!</p>          
        <Link className="login" to="/LoginGuide">
            <button className="button2">Login</button>
        </Link>
        </div>
        <div className = "section_3">
          <h1>Organizations</h1>
          <img className='organizations' src={profile_image} alt="Profile"/>
          <p>Intervention organizations registered with Future Ready Five please login here!</p>          
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

      {/* <div>
        <img className="logo" src={FR5_logo} alt="Future Ready Five Logo"/>
      </div> */}
      {/* <div>
        <a href="https://futurereadyfive.org/"><button className="button">Future Ready Five Website</button></a>
        <Link to="/Create">
          <button className="button">Create Account</button>
        </Link>
      </div> */}

            {/* Lists the names of each login prompt and stylizes them*/}
      {/* <div className="titles">
        <h1>Parents</h1>
        <h1>Guides</h1>
        <h1>Organizations</h1>
      </div> */}
      {/* <div className="logins">
        <img className='parent-login' src={profile_image} alt="Profile"/>
        <img className='guide-login' src={profile_image} alt="Profile"/>
        <img className='organization-login' src={profile_image} alt="Profile"/>
      </div> */}
      {/* Routes each login to the Login component */}
      {/* <div className= "logins">
        <Link className="login" to="/login">
          <button className="link-button">Login</button>
        </Link>
        <Link className="login" to="/loginGuide">
          <button className="link-button">Login</button>
        </Link>
        <Link className="login" to="/loginOrg">
          <button className="link-button">Login</button>
        </Link>
      </div> */}
