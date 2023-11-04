import React from "react";
import profile_pic from "./assets/profile.png";
import "./childbar.css";

function ChildBar({ handleImageClick }) {
  const children = [
    profile_pic,
    profile_pic,
    profile_pic,
    profile_pic,
    profile_pic,
    profile_pic,
    profile_pic,
    profile_pic,
    profile_pic,
  ];

  const handleClick = (index) => {
    console.log(`Image clicked: ${index}`);
    handleImageClick(index);
  };

  const output_images = () =>
    children.map((child, index) => (
      <img
        src={child}
        alt={`Child ${index}`}
        key={index}
        onClick={() => handleClick(index)}
      ></img>
    ));

  return <div className="child-list">{output_images()}</div>;
}

export default ChildBar;
