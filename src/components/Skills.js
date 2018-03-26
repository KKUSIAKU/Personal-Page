import React from "react";

const text = " It has survived not only five centuries, but also the leap into electronic";

const WEBDEV = "I provide full web development, from scratch, to build an application that matchs unique needs.";

const RESPONSIVE = " I build a website that adapts to the viewer media using great open-source tools";

const ACCESSIBILITY  = "Accessibility is at the heart of my work from the the start. I assure a project matchs the latest ARIA  recommendations";

const Section = ({ header, description, icon }) => (
  <section className="skill-section">
    <div className="skill-section-icon">
      <img src={icon} alt="service-icon" />
    </div>
    <div className="skill-section-header">
      <h3>{header}</h3>
    </div>
    <article className="skill-section-description">
      <p>{description}</p>
    </article>
  </section>
);

const Skills = () => {
  return (
    <section id="skills" >
      <h2 className="section-title">MY SERVICES</h2>
      <p className="skill-section-annonce">Your web application avalaible on any platform regardless its size</p>
      <div className="container">
        <div className="row">
          <div className="skill-section-item col-md-6 col-lg-4">
            <Section header="DEVELOPMENT" description={WEBDEV}
              icon="../../images/svg_test_web.svg" />
          </div>
          <div className=" skill-section-item col-md-6 col-lg-4">
            <Section header="RESPONSIVE"
              description = {RESPONSIVE}
              icon="../../images/responsive_copy.svg" />
          </div>
          <div className="skill-section-item col-md-6 col-lg-4">
            <Section header="ACCESSIBILITY" description={ACCESSIBILITY}
              icon="../../images/svg_test_web.svg" />
          </div>
        </div>
      </div>
    </section >
  );
};

export default Skills;

