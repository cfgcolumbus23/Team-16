import React, { useState } from "react";
import { useState } from "react";
import profile_pic from "./assets/profile.png";

function childBar() {
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

  // Loop through the image URLs and create <img> elements
  const output_images = () =>
    children.map((child, index) => {
      // Create an <img> element
      const imageElement = <img src={child} key={index}></img>;
      // Append the <img> element to the image container
      return imageElement;
    });

  <div className="child-list">{output_images()}</div>;
}
function organizerView() {}

export default organizerView;
