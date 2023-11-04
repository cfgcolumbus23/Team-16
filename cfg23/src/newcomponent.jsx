import React from "react";
import "./newcomponent.css";
function NewComponent({ onDelete }) {
  const handleDelete = () => {
    onDelete();
  };
  return (
    <div className="newcomponent">
      <div className="scoresView">
        <button onClick={handleDelete}>X</button>
        <h2>"Child 1's" Scores:</h2>
        <h3>Overall Score: ---%</h3>
        <div className="scoresContainer">
          <section className="scoresS">
            <h3>Category 1:</h3>
            <p>----+--</p>
          </section>
          <section className="scoresS">
            <h3>Category 2:</h3>
            <p>----+--</p>
          </section>
          <section className="scoresS">
            <h3>Category 3:</h3>
            <p>----+--</p>
          </section>
          <section className="scoresS">
            <h3>Category 4:</h3>
            <p>----+--</p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default NewComponent;
