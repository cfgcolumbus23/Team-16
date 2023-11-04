import React, { useState } from "react";
import ChildBar from "./childbar";
import NewComponent from "./newcomponent";
import "./styles/normalize.css";
import "./Create.css";
import "./styles/scoresview.css";
import "./styles/profileview.css";
import "./styles/referralview.css";
import profile_pic from "./assets/profile.png";

//manages a state in order to control the visibility of a New component based on
//how the user interacts. If an image is clicked, shownewcomponent is set to true,
//which displays the new component.If delete action is triggered, shownewcomponent is set
//back to false, which hides the new component.
function ParentComponent() {
  const [showNewComponent, setShowNewComponent] = useState(false);

  const handleImageClick = (index) => {
    setShowNewComponent(true);
  };
  const handleDelete = () => {
    setShowNewComponent(false);
  };

  return (
    <div className="parentView">
      <ChildBar handleImageClick={handleImageClick} />
      {showNewComponent && (
        <div className="new-component">
          <NewComponent onDelete={handleDelete} />
        </div>
      )}
    </div>
  );
}

export default ParentComponent;
