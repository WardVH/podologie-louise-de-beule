import React from "react";

import "./_header.scss";
import MakeAppointment from "../makeAppointment";

const Header = () => (
  <nav className="navbar header">
    <div className="container">
      <span className="navbar-text ml-auto"><MakeAppointment/></span>
    </div>
  </nav>
);

export default Header;
