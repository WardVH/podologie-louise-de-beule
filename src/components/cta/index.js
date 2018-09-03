import React from 'react';
import Link from "gatsby-link"

import "./_cta.scss";

const CallToAction = props => (
  <div className="call-to-action button h-75">
    <Link to={props.to}>
      {props.children}
    </Link>
  </div>
);

export default CallToAction;
