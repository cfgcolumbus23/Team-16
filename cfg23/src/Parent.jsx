import React from "react";
import profilePic from "./assets/profile.png";
import "./styles/normalize.css";
import "./styles/parent.css";
import "./styles/scoresview.css";
import "./styles/profileview.css";
import "./styles/referralview.css";
import profile_pic from './assets/profile.png'

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
      <h3 align="center">Children</h3>
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

// Get a quick overview of a child's scores and categorical progress
function ScoresView() {
  return (
    <div className="scoresView">
      <h2>"Child 1's" Scores:</h2>
      <h3>Overall Score: ---%</h3>
      <section className="scoresSection">
        <h3>Category 1:</h3>
        <p>----+--</p>
        <p>More ^</p>
      </section>
      <section className="scoresSection">
        <h3>Category 2:</h3>
        <p>----+--</p>
        <p>More ^</p>
      </section>
      <section className="scoresSection">
        <h3>Category 3:</h3>
        <p>----+--</p>
        <p>More ^</p>
      </section>
      <section className="scoresSection">
        <h3>Category 4:</h3>
        <p>----+--</p>
        <p>More ^</p>
      </section>
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
      <section className="referralSection">
        <p>Category 1 Referrals:</p>
        <p>Group a</p>
        <p>Group b</p>
        <p>Group c</p>
      </section>
      <section className="referralSection">
        <p>Category 2 Referrals:</p>
        <p>Group i</p>
        <p>Group j</p>
        <p>Group k</p>
      </section>
      <section className="referralSection">
        <p>Category 3 Referrals:</p>
        <p>Group q</p>
        <p>Group r</p>
        <p>Group s</p>
      </section>
      <section className="referralSection">
        <p>Category 4 Referrals:</p>
        <p>Group x</p>
        <p>Group y</p>
        <p>Group z</p>
      </section>
    </div>
  );
}

export default function ParentView() {
  return (
    <div className="parentView">
      <ChildBar />
      <ScoresView />
      <ProfileView />
      <ReferralView />
    </div>
  );
}
