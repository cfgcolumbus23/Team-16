import React from "react";
import profilePic from "./assets/profile.png";
import "./styles/normalize.css";
import "./styles/parent.css";
import "./styles/scoresview.css";
import "./styles/profileview.css";
import "./styles/referralview.css";

// Child view section
function ChildBar() {
  return (
    <div className="childBar">
      <section className="childSection">
        <h2>Children</h2>
      </section>
      <section className="childSection">
        <img src={profilePic} alt="Profile Pic" height="108" width="108"></img>
        <p>Child 1</p>
      </section>
      <section className="childSection">
        <img src={profilePic} alt="Profile Pic" height="108" width="108"></img>
        <p>Child 2</p>
      </section>
      <section className="childSection">
        <img src={profilePic} alt="Profile Pic" height="108" width="108"></img>
        <p>Child 3</p>
      </section>
    </div>
  );
}

// Get a quick overview of a child's scores and categorical progress
function ScoresView() {
  return (
    <div className="scoresView">
      <h2>"Child 1's" Scores:</h2>
      <h3>Overall Score: ---%</h3>
      <div className="scoresContainer">
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
