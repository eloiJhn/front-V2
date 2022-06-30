import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Link } from "react-router-dom";
import App from "./App";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <div>
      <Link to="/">Go to Home</Link> <br />
      <Link to="/champions">Go to About</Link> <br />
      <Link to="/any-route">404 page</Link>
      <App />
    </div>
  </Router>
);