import React from "react";
import projects from "../data/projects";

import ProjectList from "./ProjectList";
import Skills from "./Skills"; 
import Stacks from "./Stacks"; 

const Main = () => (
  <main id="main" >
    <Skills/>
    <Stacks/>
    <ProjectList projectlist = {projects}/>
  </main>
);

export default Main; 