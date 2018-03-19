import React from "react";
import Project from "./Project";
import PropTypes from "prop-types";

const ProjectList = (props) => (
  <section id="portofolio">
    <h2 className = "section-title">Portofolio</h2>
    <div className="container">
      <div className="row">
        {props.projectlist.map((project, index) => <Project project={project} key={index} />)}
      </div>
    </div>
  </section >
);

ProjectList.propTypes = {
  projectlist: PropTypes.array.isRequired,
};
export default ProjectList;