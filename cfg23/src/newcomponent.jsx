import React from "react";
import "./newcomponent.css";
import "./styles/parent.css";
import line from "./assets/line.png";
import bar from "./assets/color_bar.png";

function showNotesField() {
  document.getElementById("notesField").style.display = "block";
}

//return the child information based on which child was clicked, displaying their scores
function NewComponent({ onDelete }) {
  //handle the event where the new component rendered wants to be deleted
  const handleDelete = () => {
    onDelete();
  };
  return (
    <div className="scoresView">
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
      <p>Parent contact information:</p>
      <form>
        <button type="button" onclick="showNotesField()">
          Add Note
        </button>
        <div id="notesField" style="display: none;">
          <textarea
            id="noteInput"
            rows="4"
            cols="50"
            placeholder="Enter your note here..."
          ></textarea>
          <button type="button" onclick="saveNote()">
            Save Note
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewComponent;
