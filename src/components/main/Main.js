import React from 'react';
import "./Main.css";
import Editor from "../editor/editor";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from '../charts/Dashboard';

const Main = () => {
  return (
    <main>
      <div className="main__container">
       {/* <!-- MAIN STARTS HERE --> */}
        <div>
        <Router>
            <Routes>
                <Route path="/" element ={<Navigate to="/Dashboard"  />} /> 
                <Route path="/create-documents"  element={<Editor />} />
                <Route path="/Dashboard"  element={<Dashboard />} />
                <Route path="/reactjs_start" element ={<Navigate to="/Dashboard"  />} />   
            </Routes>
        </Router>
        </div>
        {/* <!-- MAIN ENDS HERE --> */}
      </div>
    </main>
  );
};

export default Main;
