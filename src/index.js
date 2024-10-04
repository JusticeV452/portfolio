import React from 'react';
import ReactDOM from 'react-dom/client';
import "./scss/Home.scss";
import './scss/index.scss';
import Home from './Home';
import Projects from './Projects';
import DevLogs from './DevLogs';
import reportWebVitals from './reportWebVitals';
import SiteNav from './components/SiteNav';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Resume from "./documents/Justice_Vidal_Resume.pdf";

const PDFViewer = () => {
  return (
    <div>
      <iframe src={Resume} width="100%" height="1000px" />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SiteNav />
    <Router>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/platfarmer-devlogs" element={<DevLogs />} />
        <Route path="/resume" element={<PDFViewer />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
