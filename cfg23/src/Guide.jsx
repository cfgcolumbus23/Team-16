import React, { useState } from "react";
import ChildBar from "./childbar";
import NewComponent from "./newcomponent";
import "./styles/normalize.css";
import "./Create.css";
import "./styles/scoresview.css";
import "./styles/profileview.css";
import "./styles/referralview.css";
import profile_pic from "./assets/profile.png";
import Attendance from "./Attendance";

function GuideComponent() {
  const [showNewComponent, setShowNewComponent] = useState(false);
  const [showAttendance, setShowAttendance] = useState(false);

  const handleImageClick = (index) => {
    setShowNewComponent(true);
    setShowAttendance(true);
  };
  const handleDelete = () => {
    setShowNewComponent(false);
    setShowAttendance(false);
  };

  return (
    <div className="parentView">
      <ChildBar handleImageClick={handleImageClick} />
      {showNewComponent && (
        <div className="new-component">
          <NewComponent onDelete={handleDelete} />
          <Attendance onDelete={handleDelete} />
        </div>
      )}
    </div>
  );


}

export default GuideComponent;
