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
  <div className={`${props.classNames} m-2 p-2`}>
    <div className="d-flex ">
      <div className="d-flex align-items-center justify-content-center contact-item-icon w-25 ">
        {props.icon}
      </div>
      <div className="contact-item-info w-75">
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
    <div className="contact-container">
      <div className="d-flex flex-wrap justify-content-center">
        <ContactItem {...PHONE_CONTACT} />
        <ContactItem {...EMAIL_CONTACT} />
        <ContactItem {...LINKEDIN_CONTACT} />
      </div>
    </div>
    <footer className="cop-right"><p> @ 2017 koku Kusisaku</p></footer>
  </footer>
);

export default Contact; 