import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Champions from "./components/Champions";


const BasicExample = () =>
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Champions} />
    </div>
  </Router>;

render(<BasicExample />, document.getElementById("root"));