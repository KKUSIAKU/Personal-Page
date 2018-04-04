import React from "react";
import Project from "./Project";
import PropTypes from "prop-types";

const ProjectList = (props) => (
  <section id="portofolio">
    <h2 className="section-title">Portofolio</h2>
    <div className="card-group flex-row flex-wrap justify-content-center m-0">
      {props.projectlist.map((project, index) => <div className="card border-0 m-2" key={index}><Project project={project} key={index} /></div>)}
    </div>
  </section >
);

ProjectList.propTypes = {
  projectlist: PropTypes.array.isRequired,
};
export default ProjectList;