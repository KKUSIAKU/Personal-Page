import React from "react";
import Announces from "./Announces.js";


const PATH_ROOT = "https://cdn.rawgit.com/KokuKUSIAKU/HOME/master";


const STACK_REGISTRY = [
  { name: "HTML5", icon: { url: PATH_ROOT + "/images/hml5-plain.svg", alt: "html language icon" } },
  { name: "CSS3", icon: { url: PATH_ROOT + "/images/css3-plain.svg", alt: "CSS language icon" } },
  { name: "Bootstrap", icon: { url: PATH_ROOT + "/images/bootstrap-plain.svg?", alt: "Bootstrap framework icon" } },
  { name: "JavaScript", icon: { url: PATH_ROOT + "/images/javascript-plain.svg?sanitize=true", alt: "JavaScript language icon" } },
  { name: "React", icon: { url: PATH_ROOT + "/images/react-original.svg", alt: "React framework icon" } },
  { name: "Redux", icon: { url: PATH_ROOT + "/images/redux-plain.svg", alt: "Redux framework icon" } },
  { name: "Jasmine", icon: { url: PATH_ROOT + "/images/jasmine-plain.svg", alt: "Jasmine testing framework icon" } },
  { name: "Webpack", icon: { url: PATH_ROOT + "/images/webpack-plain.svg", alt: "Webpack tool icon" } },
  { name: "Git", icon: { url: PATH_ROOT + "/images/git-plain.svg", alt: "Git tool icon" } },
];

const messages = [
  "I built website with the latest technologies that offer great performance and flexibility.",
  "Every project is specific. That is why I work hard to achieve customised website.",
  "My tech stack is JavaScript focused on both Back End and Front End sides.",
  "Looking to increase your team to handle temporary work load or long term collaborator? Drop me a line for a chat!"
];

const StackItem = ({ name, icon }) => (
  <div className="stack-item d-flex align-items-center border border-white">
    <div className="stack-item-icon ">
      <img src={icon.url} alt={icon.alt} />
    </div>
    <div className="stack-item-name">
      <p className="no-margin">{name}</p>
    </div>
  </div>
);

const Stack = () => (
  <section id="stack" className="stack-background">
    <div className="stack-wrapper stack-background">
      <div className="container-fluid no-gutters p-0">
        <h2 className="stack-title">My Stack </h2>
        <div className="row m-0">
          <div className="stack-introduction col-md-5">
            <span className="stack-introduction-text "><Announces messages = {messages}/></span>
          </div>
          <div className="stack-container col-md-7">
            <div className="stack-list row">
              {STACK_REGISTRY.map((item, index) => <div className="col-sm-6 col-md-4 p-2 " key={index}><StackItem {...item}  /></div>)}
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
);
export default Stack;

// <span className="stack-introduction-text">I work with and I possess grounded expertise on these technologies</span>