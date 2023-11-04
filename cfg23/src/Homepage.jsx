import React from 'react';
import {createRoot} from 'react-dom/client';
import logo from './logo.svg';
import './App.css';
import "./Homepage.css";
import {Link} from 'react-router-dom';
import profile_image from './assets/profile.png';
import FR5_logo from './assets/FR5-horizontal-logo.png';

function Homepage() {
  return (
  <>
    <header>
      <div>
        <img className="logo" src={FR5_logo}/>
      </div>
      <div>
        <button href="https://futurereadyfive.org/">Website</button>
        <button>Create Account</button>
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
        <img className='parent-login' src={profile_image}/>
        <img className='guide-login' src={profile_image}/>
        <img className='organization-login' src={profile_image}/>
      </div>
      {/* Routes each login to the Login component */}
      <div className= "logins">
        <Link className="login" to="/login">
          <button>Login</button>
        </Link>
        <Link className="login" to="/login">
          <button>Login</button>
        </Link>
        <Link className="login" to="/login">
          <button>Login</button>
        </Link>
      </div>
    </div>

  </>
  );
}

export default Homepage;
