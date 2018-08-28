import React from "react";

import "./_paragraph.scss";

const Paragraph = props => (
  <div className={"paragraph"}>
    <a name={props.anchor}><h2>{ props.title }</h2></a>
    { props.children }
  </div>
);

export default Paragraph;