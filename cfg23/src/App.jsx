import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Imports the different React components to reference
import Homepage from "./Homepage";
import Login from "./Login";
import ParentView from "./Parent";
import CreateAccount from "./Create";
import Guide from "./Guide";
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
          <Route path="/login" element={<Login />} />
          <Route path="/parent" element={<ParentView />} />
<<<<<<< HEAD
          <Route path="/guide" element={<Guide />} />

          <Route path="/organizer" element={<ParentComponent />}></Route>
=======
          <Route path="/guide" element={<Guide />}/>
          <Route path="/create" element={<CreateAccount />}/>
>>>>>>> dbd8f48db41f779bb7d1d0d2c090160614745df7
        </Routes>
      </BrowserRouter>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
