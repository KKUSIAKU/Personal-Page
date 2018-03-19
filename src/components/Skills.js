import React from "react";

const text = " It has survived not only five centuries, but also the leap into electronic";

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
            <Section header="DEVELOPMENT" description={text}
              icon="../../images/svg_test_web.svg" />
          </div>
          <div className=" skill-section-item col-md-6 col-lg-4">
            <Section header="RESPONSIVE"
              description="By using bootstrap or handcoded CSS, I ensure most projects work cross device out of the box"
              icon="../../images/responsive_copy.svg" />
          </div>
          <div className="skill-section-item col-md-6 col-lg-4">
            <Section header="ACCESSIBILITY" description={text}
              icon="../../images/svg_test_web.svg" />
          </div>
        </div>
      </div>
    </section >
  );
};

export default Skills;

