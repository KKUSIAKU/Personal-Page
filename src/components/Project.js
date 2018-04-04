import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

/**
 * @function Project A React Component. It is in addition a bootstrap card component. Thus efficient styling 
 * will be obtained when used in a block level (HTML level 1) element with bootrtrap card-group or card-desk class
 *
 * 
 */

const FooterLink = (props) => {
  return (
    <Link className="project-bt-a" to={props.link} style={{ textDecorationLine: "none" }} target="_blank">
      <button className=" project-btn border border-0  w-100 ">{props.text}</button>
    </Link>
  );
};

const Project = (props) => {
  return (
    <div className="card">
      <img className="card-img-top" src={props.project.image} alt="" />
      <div className="card-body">
        <Link to={props.project.pageLink} style={{ textDecorationLine: "none" }} target="_blank">
          <h3 className="project-title bold1 m-2">{props.project.name}</h3>
        </Link>
        <p className="project-description m-2">{props.project.description}</p>
      </div>
      <div className="card-footer d-flex flex-row justify-content-between p-1">
        <FooterLink link={props.project.pageLink} text={"Site"} />
        <FooterLink link={props.project.codeLink} text={"Code"} />
      </div>
    </div>
  );
};



Project.propTypes = {
  project: PropTypes.object.isRequired,
};
export default Project;

/*
          <Link className="project-bt-a" to={props.project.pageLink} style={{ textDecorationLine: "none" }} target="_blank">
            <button className="btn btn-outline-primary ">Site</button>
          </Link>
          <Link className="project-bt-a mr-auto" to={props.project.codeLink} style={{ textDecorationLine: "none" }} target="_blank">
            <button className="btn btn-outline-primary  ">Code</button>
          </Link>



                  <div className="project-links m-2">
          <div className="card-footer d-flex flex-row align-items-start">
            <div className="p-2"> oneoen
          </div>
            <div className="mr-auto p-2"> oneoen
          </div>
          </div
*/