import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Imports the different React components to reference
import Homepage from "./Homepage";
import LoginParent from "./LoginParent";
import LoginGuide from "./LoginGuide";
import LoginOrg from "./LoginOrg";
import ParentView from "./Parent";
import CreateAccount from "./Create";
import GuideComponent from "./Guide";
import OrganizerView from "./organizer";
import ParentComponent from "./organizer";
import ChildBar from "./childbar";

//Links all components to each other, allowing for easy component change
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/loginParent" element={<LoginParent />} />
          <Route path="/loginGuide" element={<LoginGuide />} />
          <Route path="/loginOrg" element={<LoginOrg />} />
          <Route path="/parent" element={<ParentView />} />
          <Route path="/guide" element={<GuideComponent />} />
          <Route path="/create" element={<CreateAccount />} />
          <Route path="/organizer" element={<ParentComponent />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
