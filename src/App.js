import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import Contact from "./components/contact";
import About from "./components/About";
import Main from "./components/Main";
import NavBar from "./components/NavBar"; 

const router = (
  <Router>
    <div>
      <NavBar/>
      <About />
      <Main />
      <Contact/>
    </div>
  </Router>
);

render(
  router,
  document.getElementById("app")
);