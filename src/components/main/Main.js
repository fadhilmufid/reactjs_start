import React from 'react';
import "./Main.css";
import Editor from "../editor/editor";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from '../charts/Dashboard';

const Main = () => {
  return (
    <main>
      <div className="main__container">
        {/* <!-- MAIN TITLE STARTS HERE --> */}

        <div className="main__title">
          <div className="main__greeting">
            <h1>Create File</h1>
            <p>Test File</p>
          </div>
        </div>

        {/* <!-- MAIN TITLE ENDS HERE --> */}


        {/* <!-- EDITOR STARTS HERE --> */}
        <div>
        <Router>
            <Routes>
                <Route path="/create-documents"  element={<Editor />} />
                <Route path="/Dashboard"  element={<Dashboard />} />   
            </Routes>
        </Router>
        </div>
        {/* <!-- EDITOR ENDS HERE --> */}
      </div>
    </main>
  );
};

export default Main;
