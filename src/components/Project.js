import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Project = (props) => {
  return (
    <div className="project">
      <div className="project-image">
        <img className="fullwidth-img" src={props.project.image} alt="" />
      </div>
      <Link to={props.project.pageLink} style={{ textDecorationLine: "none" }} target="_blank">
        <h3 className="project-title bold1">{props.project.name}</h3>
      </Link>
      <p className="project-description">{props.project.description}</p>
      <div className="project-links ">
        <div className="container-fluid">
          <div className="row">
            <Link className="project-bt-a project-bt-align-left col-6" to={props.project.pageLink} style={{ textDecorationLine: "none" }} target="_blank">
              <button className="btn btn-outline-primary ">Site</button>
            </Link>
            <Link className="project-bt-a project-bt-align-right col-6" to={props.project.codeLink} style={{ textDecorationLine: "none" }} target="_blank">
              <button className="btn btn-outline-primary ">Code</button>
            </Link>
          </div>
        </div>
      </div>
    </div>

  );
};
Project.propTypes = {
  project: PropTypes.object.isRequired,
};
export default Project;