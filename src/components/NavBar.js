import React from "react";

const NavBar = () => (
  <header className="page-header navbar-light bg-light fixed-top">
    <div id="page-header-container">
      <div className="container-fluid">
        <div className="row row-border justify-content-between">
          <div className=" brand-container col-2 menu-border">
            <a href="#" className="navbar-brand">Koku KUSIAKU</a>
          </div>
          <div className="menu-container col-6 menu-border">
            <nav id="menu1" className="navbar navbar-expand-md navbar-light bg-light menu-border">
              <p></p>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu" aria-controls="menu" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="menu">
                <ul className="navbar-nav  container justify-content-end">
                  <li className="nav-item"><a className="nav-link" href="#about">ABOUT</a></li>
                  <li className="nav-item"><a className="nav-link" href="#skills">SKILLS</a></li>
                  <li className="nav-item"><a className="nav-link" href="#portofolio">PORTOFOLIO</a></li>
                  <li className="nav-item"><a className="nav-link" href="#contact">CONTACT</a></li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>);

export default NavBar;
