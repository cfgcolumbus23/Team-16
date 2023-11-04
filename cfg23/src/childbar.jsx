import React from "react";
import "./styles/normalize.css";
import "./Create.css";
import "./styles/scoresview.css";
import "./styles/profileview.css";
import "./styles/referralview.css";
import profile_pic from "./assets/profile.png";

function ChildBar({ handleImageClick }) {
  const children = [
    { img: profile_pic, name: "Child 1 Name", info: "Information" },
    { img: profile_pic, name: "Child 2 Name", info: "Information" },
    { img: profile_pic, name: "Child 3 Name", info: "Information" },
    { img: profile_pic, name: "Child 4 Name", info: "Information" },
    { img: profile_pic, name: "Child 5 Name", info: "Information" },
    { img: profile_pic, name: "Child 6 Name", info: "Information" },
    { img: profile_pic, name: "Child 7 Name", info: "Information" },
    { img: profile_pic, name: "Child 8 Name", info: "Information" },
  ];
 
  const handleClick = (index) => {
    console.log(`Image clicked: ${index}`);
    handleImageClick(index);
  };
  return (
    <div className="childBar">
      <div className="title">
        <h3 align="center">Assigned Students</h3>
      </div>
      <div className="rand">
        {children.map((child, index) => (
          <section className="childSection" key={index}>
            <img
              src={child.img}
              alt="Profile"
              className="img"
              onClick={() => handleClick(index)}
            />
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

export default ChildBar;
