import React, { useState, useEffect } from "react";
import "./styles/normalize.css";
import "./Create.css";
import "./styles/scoresview.css";
import "./styles/profileview.css";
import "./styles/referralview.css";
import profile_pic from './assets/profile.png'
import axios from "axios";

function ChildBar() {
  // const children = [
  //   { img: profile_pic, name: 'Child 1 Name', info: 'Information' },
  //   { img: profile_pic, name: 'Child 2 Name', info: 'Information' },
  //   { img: profile_pic, name: 'Child 3 Name', info: 'Information' },
  //   { img: profile_pic, name: 'Child 4 Name', info: 'Information' },
  //   { img: profile_pic, name: 'Child 5 Name', info: 'Information' },
  //   { img: profile_pic, name: 'Child 6 Name', info: 'Information' },
  //   { img: profile_pic, name: 'Child 7 Name', info: 'Information' },
  //   { img: profile_pic, name: 'Child 8 Name', info: 'Information' },
  // ];

  const [children, setChildrenData] = useState([]);

  useEffect(() => {
    // Make an Axios GET request to your Django backend's API endpoint for children
    axios.get("http://localhost:8000/request_data/api/guideToChildren/1/?format=json")
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

export default function ParentView() {
  return (
    <div className="parentView">
      <ChildBar />
    </div>
  );
}
