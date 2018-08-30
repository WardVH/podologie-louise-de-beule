import React from "react";
import './_form.scss';

const Form = () => (
  <form method="POST" action="https://formspree.io/info@podologiedebeule.be">
    <div className="form-row">
      <div className="col-md-6">
        <input type="text" name="name" className="form-control" placeholder="Naam" />
      </div>
      <div className="col-md-6">
        <input type="email" name="email" className="form-control" placeholder="Emailadres" />
      </div>
    </div>
    <div className="form-row">
      <div className="col">
        <input type="text" name="subject" className="form-control" placeholder="Onderwerp" />
      </div>
    </div>
    <div className="form-row">
      <div className="col">
        <textarea name="message" rows={10} className="form-control" placeholder="Bericht" />
      </div>
    </div>
    <div className="form-row">
      <div className="col">
        <button className="btn" type="submit">Verzenden</button>
      </div>
    </div>
  </form>
);

export default Form;
