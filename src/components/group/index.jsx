import React from "react";

import "./_group.scss";

const Group = props => (

  props.imageLeft ? (
    <div className="row group">
      <div className="col-md-6">
        <img
          src={props.imageUrl}
          className="img-fluid"
        />
      </div>
      <div className="col-md-6">
        { props.children }
      </div>
    </div>
  ) : (
    <div className="row group">
      <div className="col-md-6">
        { props.children }
      </div>
      <div className="col-md-6">
        <img
          src={props.imageUrl}
          className="img-fluid"
        />
      </div>
    </div>
  )
);

export default Group;
