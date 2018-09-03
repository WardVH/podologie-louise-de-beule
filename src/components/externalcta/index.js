import React from "react";


import "./_externalCta.scss";

const ExternalCallToAction = (props) => (
  <div className="external-cta button">
    {props.children}
  </div>
);

export default ExternalCallToAction;