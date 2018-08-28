import React from "react";
import Link from "gatsby-link"

import Logo from "./logo.svg";

const Navigation = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className={"container"}>
      <Link to={'/'} className={"navbar-brand"}>
        <img src={Logo}
             width="208"
             height="150"
             className="d-inline-block align-top"
             alt="Logo"
        />
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"/>
    </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link to={'/'} className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to={'/over-mezelf'} className="nav-link">Over mezelf</Link>
        </li>
        <li className="nav-item">
          <Link to={'/podologie'} className="nav-link">Podologie</Link>
        </li>
        <li className="nav-item">
          <Link to={'/informatie'} className="nav-link">Info</Link>
        </li>
        <li className="nav-item">
          <Link to={'/contact'} className="nav-link">Contact</Link>
        </li>
      </ul>
    </div>
    </div>
  </nav>
);

export default Navigation;