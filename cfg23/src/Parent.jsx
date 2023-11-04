import React, { useState, useEffect } from "react";
import axios from "axios";
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
  // const children = [
  //   { img: profile_pic, name: 'Child 1 Name', info: 'Information' },
  //   { img: profile_pic, name: 'Child 2 Name', info: 'Information' },
  //   { img: profile_pic, name: 'Child 3 Name', info: 'Information' },
  //   { img: profile_pic, name: 'Child 4 Name', info: 'Information' },
  //   { img: profile_pic, name: 'Child 5 Name', info: 'Information' },
  //   { img: profile_pic, name: 'Child 6 Name', info: 'Information' },
  //   // { img: profile_pic, name: 'Child 7 Name', info: 'Information' },
  //   // { img: profile_pic, name: 'Child 8 Name', info: 'Information' },
  // ];

  const [children, setChildrenData] = useState([]);

  useEffect(() => {
    // Make an Axios GET request to your Django backend's API endpoint for children
    axios.get("http://localhost:8000/request_data/api/parentToChildren/1/?format=json")
      .then((response) => {
        setChildrenData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching children:', error);
      });
  }, []); // The empty dependency array ensures the effect runs only once on component mount

  return (
    <div className="childBar">
      <div class="title">
        <h3 align="center">Children</h3>
        <h4 align="center">Select a Student</h4>
      </div>
      <div className="rand">
        {children.map((child, index) => (
          <section className="childSection" key={index}>
            <img src={profile_pic} alt="Profile" className="img" />
            <p>{child.first_name} {child.last_name}</p>
            <div className="div">
              <p>{child.birthdate}</p>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

// View the scores of the child
function ScoresView() {

  const [assessment, setAssessmentData] = useState([]);
  useEffect(() => {
    // Make an Axios GET request to your Django backend's API endpoint for children
    axios.get("http://localhost:8000/request_data/api/childToAssessmentDetail/1/?format=json")
      .then((response) => {
        setAssessmentData(response.data[0]);
      })
      .catch((error) => {
        console.error('Error fetching assessments:', error);
      });
  }, []); // The empty dependency array ensures the effect runs only once on component mount

  return (
    <div className="scoresView">
      <h2>Scores</h2>
      <h3>Overall Score: {assessment.overall}</h3>
      <div className="scoresContainer">
        <section className="scoresSection">
          <h3>Social Foundations: {assessment.social}</h3>
          <img className="bar" src={bar} alt="progress-bar" />
          <div className="line">
            <img id="line" src={line} alt="line" />
          </div>
          <button className="more" onClick={()=>{ alert("Score 1: 265 Excellent and ready for Kindergarten \nScore 2: 265 Excellent and ready for Kindergarten\nScore 3: 220 Below expectations\nScore 4: 240 Needs a little more improvement.");}}>More ^</button>
        </section>
        <section className="scoresSection">
          <h3>Mathematics: {assessment.math}</h3>
          <img className="bar" src={bar} alt="progress-bar" />
          <div className="line">
            <img id="line" src={line} alt="line" />
          </div>
          <button className="more" onClick={()=>{ alert("Score 1: 265 Excellent and ready for Kindergarten \nScore 2: 265 Excellent and ready for Kindergarten\nScore 3: 220 Below expectations\nScore 4: 240 Needs a little more improvement."); }}>More ^</button>
        </section>
        <section className="scoresSection">
          <h3>Language Literacy: {assessment.literacy}</h3>
          <img className="bar" src={bar} alt="progress-bar" />
          <div className="line">
            <img id="line" src={line} alt="line" />
          </div>
          <button className="more" onClick={()=>{ alert("Score 1: 265 Excellent and ready for Kindergarten \nScore 2: 265 Excellent and ready for Kindergarten\nScore 3: 220 Below expectations\nScore 4: 240 Needs a little more improvement."); }}>More ^</button>
        </section>
        <section className="scoresSection">
          <h3>Physical Development: {assessment.physical}</h3>
          <img className="bar" src={bar} alt="progress-bar" />
          <div className="line">
            <img id="line" src={line} alt="line" />
          </div>
          <button className="more" onClick={()=>{ alert("Score 1: 265 Excellent and ready for Kindergarten \nScore 2: 265 Excellent and ready for Kindergarten\nScore 3: 220 Below expectations\nScore 4: 240 Needs a little more improvement."); }}>More ^</button>
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
        <li><a href="http://localhost:8000/request_data/api/childToAssessmentDetail/1/">api/childToAssessmentDetail/1/</a></li>
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

  const [guide, setGuideData] = useState({});
  useEffect(() => {
    // Make an Axios GET request to your Django backend's API endpoint for children
    axios.get("http://localhost:8000/request_data/api/childToGuide/1/?format=json")
      .then((response) => {
        setGuideData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching guides:', error);
      });
  }, []); // The empty dependency array ensures the effect runs only once on component mount

  return (
    <div className="profileView">
      <img src={profilePic} alt="Profile Pic"></img>
      <p>{guide.first_name} {guide.last_name}</p>
      <p>{guide.email}</p>
    </div>
  );
}

// View the programs and organizations the guide has recommended
function ReferralView() {

  return (
    <div className="referralView">
      <div className="referralContainer">
        <section className="referralSection">
          <h3>Social Foundations Referrals:</h3>
          <p>Columbus Library</p>
          <p>Columbus Math Center</p>
        </section>
        <section className="referralSection">
          <h3>Mathematics Referrals:</h3>
          <p>Columbus Library</p>
          <p>Columbus Math Center</p>
        </section>
        <section className="referralSection">
          <h3>Language Literacy Referrals:</h3>
          <p>Columbus Library</p>
          <p>Franklin County Center</p>
        </section>
        <section className="referralSection">
          <h3>Physical Development Referrals:</h3>
          <p>Planet Fitness</p>
          <p>Hyde Park</p>
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
