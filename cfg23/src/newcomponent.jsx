import React from "react";
import "./newcomponent.css";
import "./styles/parent.css";
import line from "./assets/line.png";
import bar from "./assets/color_bar.png";

//return the child information based on which child was clicked, displaying their scores
function NewComponent({ onDelete }) {
  const handleDelete = () => {
    onDelete();
  };
  const Edit = () => {};
  return (
    <div className="scoresView">
      <div>
        <button onClick={handleDelete}>X</button>
        <h2>"Child 1's" Scores:</h2>
        <h3>Overall Score: ---%</h3>
        <div className="scoresContainer">
          <section className="scoresSection">
            <h3>Category 1:</h3>
            <img className="bar" src={bar} alt="progress-bar" />
            <div className="line">
              <img id="line" src={line} alt="line" />
            </div>
            <p>More ^</p>
          </section>
          <section className="scoresSection">
            <h3>Category 2:</h3>
            <img className="bar" src={bar} alt="progress-bar" />
            <div className="line">
              <img id="line" src={line} alt="line" />
            </div>
            <p>More ^</p>
          </section>
          <section className="scoresSection">
            <h3>Category 3:</h3>
            <img className="bar" src={bar} alt="progress-bar" />
            <div className="line">
              <img id="line" src={line} alt="line" />
            </div>
            <p>More ^</p>
          </section>
          <section className="scoresSection">
            <h3>Category 4:</h3>
            <img className="bar" src={bar} alt="progress-bar" />
            <div className="line">
              <img id="line" src={line} alt="line" />
            </div>
            <p>More ^</p>
          </section>
        </div>
        <br></br>
        <div className="buttonsand">
          <div className="edit">
            <button onClick={Edit}>Edit Child Attendance</button>
          </div>
          <div className="parent-contact">
            <h3>Parent Contact Information</h3>
            <p>Email: parent@example.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewComponent;
