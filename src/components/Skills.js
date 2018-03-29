import React from "react";

const PATH_ROOT = "https://cdn.rawgit.com/KKUSIAKU/Personal-Page/master";

const text = " It has survived not only five centuries, but also the leap into electronic";

const WEBDEV = "I provide full web development, from scratch, to build an application that matchs unique needs.";

const RESPONSIVE = " I build a website that adapts to the viewer media using great open-source tools";

const ACCESSIBILITY = "Accessibility is at the heart of my work from the the start. I assure a project matchs the latest ARIA  recommendations";

const SKILLS_LIST = [
  { header: "DEVELOPMENT", description: WEBDEV, icon: "/images/code-icon.svg" },
  { header: "RESPONSIVE", description: RESPONSIVE, icon: "/images/responsive-web-icon.svg" },
  { header: "ACCESSIBILITY", description: ACCESSIBILITY, icon: "/images/accessibility-icon.svg" }
];

const Section = ({ header, description, icon }) => (
  <div className='card my-2 p-0'>
    <section className="card-body skill-section">
      <div className="card-img-top skill-section-image d-flex justify-content-center py-2">
        <img className ="service-icon" src={PATH_ROOT + icon} alt="service-icon" />
      </div>
      <div className="card-title d-flex justify-content-center ">
        <h3>{header}</h3>
      </div>
      <article className="card-text skill-section-description d-flex justify-content-center px-4">
        <p className="text-center" >{description}</p>
      </article>
    </section>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" >
      <h2 className="section-title">MY SERVICES</h2>
      <p className="skill-section-annonce">Your web application avalaible on any platform regardless its size</p>
      <div className="container">
        <div className="card-deck flex-row flex-wrap justify-content-center">
          { SKILLS_LIST.map(skill => <Section {...skill} key={skill.header}/>)}
        </div>
      </div>
    </section >
  );
};

export default Skills;

/*

  <div className='card p-0'>
    <section className="card-body skill-section">
      <div className="card-img-top skill-section-icon">
        <img src={icon} alt="service-icon" />
      </div>
      <div className="card-title skill-section-header">
        <h3>{header}</h3>
      </div>
      <article className="card-text skill-section-description">
        <p>{description}</p>
      </article>
    </section>
  </div>
*/