import React from "react";
import profilePic from "./assets/profile.png";
import "./styles/normalize.css";
import "./styles/parent.css";
import "./styles/scoresview.css";
import "./styles/profileview.css";
import "./styles/referralview.css";
import "./styles/linkview.css";
import profile_pic from './assets/profile.png';
import bar from './assets/color_bar.png';
import line from './assets/line.png';
import Attendance from "./Attendance";

// ChildBar
function ChildBar() {
  const children = [
    { img: profile_pic, name: 'Child 1 Name', info: 'Information' },
    { img: profile_pic, name: 'Child 2 Name', info: 'Information' },
    { img: profile_pic, name: 'Child 3 Name', info: 'Information' },
    { img: profile_pic, name: 'Child 4 Name', info: 'Information' },
    { img: profile_pic, name: 'Child 5 Name', info: 'Information' },
    { img: profile_pic, name: 'Child 6 Name', info: 'Information' },
    // { img: profile_pic, name: 'Child 7 Name', info: 'Information' },
    // { img: profile_pic, name: 'Child 8 Name', info: 'Information' },
  ];
  return (
    <div className="childBar">
      <div class="title">
        <h3 align="center">Children</h3>
        <h4 align="center">Select a Student</h4>
      </div>
      <div className = "rand">
      {children.map((child, index) => (
        <section className="childSection" key={index}>
          <img src={child.img} alt="Profile" className="img" />
          <p>{child.name}</p>
          <div className="div">
            <p>{child.info}</p>
          </div>
        </section>
      ))}
      </div>
    </div>
  );
}

// View the scores of the child
function ScoresView() {
  return (
    <div className="scoresView">
      <h2>"Child 1's" Scores:</h2>
      <h3>Overall Score: ---%</h3>
      <div className="scoresContainer">
        <section className="scoresSection">
          <h3>Category 1:</h3>
          <img className="bar" src={bar} alt="progress-bar" />
          <div className="line">
            <img id="line" src={line} alt="line" />
          </div>
          <button className="more" onClick={()=>{ alert("Score 1: 265 Excellent and ready for Kindergarten \nScore 2: 265 Excellent and ready for Kindergarten\nScore 3: 220 Below expectations\nScore 4: 240 Needs a little more improvement.");}}>More ^</button>
          <div className="score">
            <h3>Score: </h3>
          </div>
        </section>
        <section className="scoresSection">
          <h3>Category 2:</h3>
          <img className="bar" src={bar} alt="progress-bar" />
          <div className="line">
            <img id="line" src={line} alt="line" />
          </div>
          <button className="more" onClick={()=>{ alert("Score 1: 265 Excellent and ready for Kindergarten \nScore 2: 265 Excellent and ready for Kindergarten\nScore 3: 220 Below expectations\nScore 4: 240 Needs a little more improvement."); }}>More ^</button>
          <div className="score">
            <h3>Score: </h3>
          </div>
        </section>
        <section className="scoresSection">
          <h3>Category 3:</h3>
          <img className="bar" src={bar} alt="progress-bar" />
          <div className="line">
            <img id="line" src={line} alt="line" />
          </div>
          <button className="more" onClick={()=>{ alert("Score 1: 265 Excellent and ready for Kindergarten \nScore 2: 265 Excellent and ready for Kindergarten\nScore 3: 220 Below expectations\nScore 4: 240 Needs a little more improvement."); }}>More ^</button>
          <div className="score">
            <h3>Score: </h3>
          </div>
        </section>
        <section className="scoresSection">
          <h3>Category 4:</h3>
          <img className="bar" src={bar} alt="progress-bar" />
          <div className="line">
            <img id="line" src={line} alt="line" />
          </div>
          <button className="more" onClick={()=>{ alert("Score 1: 265 Excellent and ready for Kindergarten \nScore 2: 265 Excellent and ready for Kindergarten\nScore 3: 220 Below expectations\nScore 4: 240 Needs a little more improvement."); }}>More ^</button>
          <div className="score">
            <h3>Score: </h3>
          </div>
        </section>
      </div>
    </div>
  );

}

// Displays additional links for future features
function LinkView() {
  return (
    <div className="linkView">
      <ul>
        <li><a href="http://localhost:8000/request_data/api/parentToChildren/1/">api/parentToChildren/1/</a></li>
        <li><a href="http://localhost:8000/request_data/api/childToAssessmentDetails/1/">api/childToAssessmentDetails/1/</a></li>
        <li><a href="http://localhost:8000/request_data/api/guideToChildren/1/">api/guideToChildren/1/</a></li>
        <li><a href="http://localhost:8000/request_data/api/childToGuide/1/">api/childToGuide/1/</a></li>
        <li><a href="http://localhost:8000/request_data/api/child/1/">api/child/1/</a></li>
        <li><a href="http://localhost:8000/request_data/api/childToOrganizations/1/">api/childToOrganizations/1/</a></li>
        <li><a href="http://localhost:8000/request_data/api/organizationToChildren/1/">api/organizationToChildren/1/</a></li>
        <li><a href="http://localhost:8000/request_data/api/organization/1/">api/organization/1/</a></li>
        <li><a href="http://localhost:8000/request_data/api/guide/1/">api/guide/1/</a></li>
      </ul>
    </div>
  );
}

// View the profile of the intervention guide
function ProfileView() {
  return (
    <div className="profileView">
      <img src={profilePic} alt="Profile Pic"></img>
      <p>Name: Guide 1</p>
      <p>Contact Info: guide1@jpmc.com</p>
    </div>
  );
}

// View the programs and organizations the guide has recommended
function ReferralView() {
  return (
    <div className="referralView">
      <div className="referralContainer">
        <section className="referralSection">
          <h3>Category 1 Referrals:</h3>
          <p>Group a</p>
          <p>Group b</p>
          <p>Group c</p>
        </section>
        <section className="referralSection">
          <h3>Category 2 Referrals:</h3>
          <p>Group i</p>
          <p>Group j</p>
          <p>Group k</p>
        </section>
        <section className="referralSection">
          <h3>Category 3 Referrals:</h3>
          <p>Group q</p>
          <p>Group r</p>
          <p>Group s</p>
        </section>
        <section className="referralSection">
          <h3>Category 4 Referrals:</h3>
          <p>Group x</p>
          <p>Group y</p>
          <p>Group z</p>
        </section>
      </div>
    </div>
  );
}

// Compiles all parts into a complete deliverable
export default function ParentView() {
  return (
    <div className="parentView">
      <ChildBar />
      <ScoresView />
      {/* Attendance module, custom with disabled boxes */}
      <div className="attendance">
            <fieldset>
            <legend><h4>Which days did this child attend?</h4></legend>
              <div className="dayCheckbox">
                <input type="checkbox" name="monday" disabled="" checked="true"></input>
                <label for="monday">Monday</label>
              </div>
              <div className="dayCheckbox">
                <input type="checkbox" name="tuesday" disabled=""></input>
                <label for="tuesday">Tuesday</label>
              </div>
              <div className="dayCheckbox">
                <input type="checkbox" name="wednesday" disabled=""></input>
                <label for="wednesday">Wednesday</label>
              </div>
              <div className="dayCheckbox">
                <input type="checkbox" name="thursday" disabled="" checked="true"></input>
                <label for="thursday">Thursday</label>
              </div>
              <div className="dayCheckbox">
                <input type="checkbox" name="friday" disabled="" checked="true"></input>
                <label for="friday">Friday</label>
              </div>
              <div className="dayCheckbox">
                <input type="checkbox" name="saturday" disabled=""></input>
                <label for="saturday">Saturday</label>
              </div>
              <div className="dayCheckbox">
                <input type="checkbox" name="sunday" disabled=""></input>
                <label for="sunday">Sunday</label>
              </div>
            </fieldset>
            <div className="spacer"></div>
            <LinkView />
      </div>
      {/* Other remaining main blocks */}
      <div>
        <ProfileView />
        <ReferralView />
      </div>
    </div>
  );
}
