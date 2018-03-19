import React from "react";
import PropTypes from 'prop-types';

const PHONE_CONTACT = {
  classNames: "contact-item",
  icon: <i className="fa fa-mobile contact-icon" aria-hidden="true"></i>,
  header: "Let Us Chat!",
  text: "+44 473 630 4971"
};

const EMAIL_CONTACT = {
  classNames: "contact-item",
  icon: <i className="fa fa-at  contact-icon" aria-hidden="true"></i>,
  header: "Drop me a line!",
  text: "kusiaku.k@gmail.com"
};

const LINKEDIN_CONTACT = {
  classNames: "contact-item",
  icon: <i className="fa fa-linkedin contact-icon" aria-hidden="true"></i>,
  header: "Follow me!",
  text: <a href="www.linkedin.com" target="_blank">Linkedin</a>
};

const ContactItem = (props) => (
  <div className={props.classNames}>
    <div className="row no-gutters align-items-center">
      <div className="col-3 contact-item-icon">
        {props.icon}
      </div>
      <div className="col-9 contact-item-info">
        <h3 className="contact-item-header">{props.header}</h3>
        <p>{props.text}</p>
      </div>
    </div>
  </div>
);

ContactItem.prototype = {
  classNames: PropTypes.string,
  icon: PropTypes.element.isRequired,
  header: PropTypes.string.isRequired,
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]).isRequired,
};

const Contact = () => (
  <footer id="contact">
    <div className="container-fluid contact-container">
      <div className="row  contact-item-wrapper">
        <ContactItem {...PHONE_CONTACT} />
        <ContactItem {...EMAIL_CONTACT} />
        <ContactItem {...LINKEDIN_CONTACT} />
      </div>
    </div>
    <footer className="cop-right"><p> @ 2017 koku Kusisaku</p></footer>
  </footer>
);

export default Contact; 