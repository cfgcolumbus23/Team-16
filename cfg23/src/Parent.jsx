import React, { useState, useEffect } from "react";
import axios from "axios";
import profilePic from "./assets/profile.png";
import "./styles/normalize.css";
import "./styles/parent.css";
import "./styles/scoresview.css";
import "./styles/profileview.css";
import "./styles/referralview.css";
import profile_pic from './assets/profile.png';
import bar from './assets/color_bar.png';
import line from './assets/line.png';

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

// Get a quick overview of a child's scores and categorical progress
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
          <p>More ^</p>
        </section>
        <section className="scoresSection">
          <h3>Mathematics: {assessment.math}</h3>
          <img className="bar" src={bar} alt="progress-bar" />
          <div className="line">
            <img id="line" src={line} alt="line" />
          </div>
          <p>More ^</p>
        </section>
        <section className="scoresSection">
          <h3>Language Literacy: {assessment.literacy}</h3>
          <img className="bar" src={bar} alt="progress-bar" />
          <div className="line">
            <img id="line" src={line} alt="line" />
          </div>
          <p>More ^</p>
        </section>
        <section className="scoresSection">
          <h3>Physical Development: {assessment.physical}</h3>
          <img className="bar" src={bar} alt="progress-bar" />
          <div className="line">
            <img id="line" src={line} alt="line" />
          </div>
          <p>More ^</p>
        </section>
      </div>
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

export default function ParentView() {
  return (
    <div className="parentView">
      <ChildBar />
      <ScoresView />
      <div className="parentContainer">
        <ProfileView />
        <ReferralView />
      </div>
    </div>
  );
}
