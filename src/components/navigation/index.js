import React from "react";
import Link from "gatsby-link"

import Logo from "./assets/logo.svg";

import "./_navigation.scss";

const Navigation = () => (
  <nav className="navbar navbar-expand-lg navigation">
    <div className={"container"}>
      <Link to={'/'} className={"navbar-brand"} activeClassName="active">
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
          <Link to={'/over-mezelf'} className="nav-link" activeClassName="active">Over mezelf</Link>
        </li>
        <li className="nav-item">
          <Link to={'/podologie'} className="nav-link" activeClassName="active">Podologie</Link>
        </li>
        <li className="nav-item">
          <Link to={'/informatie'} className="nav-link" activeClassName="active">Info</Link>
        </li>
        <li className="nav-item">
          <Link to={'/contact'} className="nav-link" activeClassName="active">Contact</Link>
        </li>
      </ul>
    </div>
    </div>
  </nav>
);

export default Navigation;