import React from "react";


import "./_externalCta.scss";

const ExternalCallToAction = (props) => (
  <div className="external-cta button">
    <a href={props.href}>
      {props.children}
    </a>
  </div>
);

export default ExternalCallToAction;