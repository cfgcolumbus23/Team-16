import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Login from "./Login";
import Parent from "./Parent";

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Homepage />}/>
                    <Route path="/login" element={<Login />}/>
                    <Route path="/parent" element={<Parent />}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
