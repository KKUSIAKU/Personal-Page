import React from "react";
import Project from "./Project";
import PropTypes from "prop-types";

const ProjectList = (props) => (
  <section id="portofolio">
    <h2 className="section-title">Portofolio</h2>
    <div className="container-fluid">
      <div className="row">
        <div className="card-deck flex-row flex-wrap m-5">
          {props.projectlist.map((project, index) => <div className ="card m-1"><Project project={project} key={index} /></div>)}
        </div>
      </div>
    </div>
  </section >
);

ProjectList.propTypes = {
  projectlist: PropTypes.array.isRequired,
};
export default ProjectList;