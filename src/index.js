import React from 'react';
import ReactDom from 'react-dom';
import "./index.css";
import App from './App';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

ReactDom.render(
    <Router>
        <Routes>
            <Route path="/create-documents"  element={<App />} />
        </Routes>
    </Router>
, document.getElementById('root')
);
