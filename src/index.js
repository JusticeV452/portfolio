import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/Home.scss";
import "./scss/index.scss";
import Home from "./Home";
import Projects from "./Projects";
import DevLogs from "./DevLogs";
import reportWebVitals from "./reportWebVitals";
import SiteNav from "./components/SiteNav";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

function SiteRouter() {
  // Page not auto scrolling to element after entering from another page
  // https://github.com/vercel/next.js/issues/11109#issuecomment-751429015
  React.useEffect(() => {
    const path = window.location.hash;
    if (path && path.includes("#")) {
      setTimeout(() => {
        const id = path.replace("#", "");
        const el = window.document.getElementById(id);
        if (!el) {
          window.location.href = "/projects";
        }
        const navbar = window.document.getElementById("site-nav");
        const rect = el.getBoundingClientRect();
        window.top.scroll({
          top: window.scrollY + rect.top - navbar.clientHeight,
          behavior: "smooth",
        });
      }, 600);
    }
  });

  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/platfarmer-devlogs" element={<DevLogs />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

root.render(
  <React.StrictMode>
    <SiteNav />
    <SiteRouter />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
