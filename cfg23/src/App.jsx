import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Imports the different React components to reference
import Homepage from "./Homepage";
import Login from "./Login";
import ParentView from "./Parent";
import Guide from "./Guide";

//Links all components to each other, allowing for easy component change
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/parent" element={<ParentView />} />
          <Route path="/guide" element={<Guide />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
