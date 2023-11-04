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
import Guide from "./Guide";

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
          <Route path="/guide" element={<Guide />}/>
          <Route path="/create" element={<CreateAccount />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
