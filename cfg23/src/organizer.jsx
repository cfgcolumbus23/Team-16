import React, { useState } from "react";
import ChildBar from "./childbar";
import NewComponent from "./newcomponent";
import profile_pic from "./assets/profile.png";

function ParentComponent() {
  const [showNewComponent, setShowNewComponent] = useState(false);

  const handleImageClick = (index) => {
    setShowNewComponent(true);
  };

  return (
    <div>
      <ChildBar handleImageClick={handleImageClick} />
      {showNewComponent && <NewComponent />}
    </div>
  );
}

export default ParentComponent;
