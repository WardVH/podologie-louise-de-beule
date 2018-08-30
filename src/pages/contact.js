import React from "react";
import Title from "../components/title";
import Form from "../components/form";
import Location from "../components/location";
import ContactInfo from "../components/contactInfo";
import ExternalCallToAction from "../components/externalcta";

import "./_contact.scss";

const Contact = () => (
  <div className={"container"}>
    <Title value={"Contact"}/>

    <div className="row group">
      <div className="col-md-4">
        <Location />
        <ContactInfo />
      </div>
      <div className="col-md-8">
        <Form />
      </div>
    </div>

    <div className="external-cta-container">
      <h3>Afspraken kunnen gemakkelijk online gemaakt worden</h3>
      <ExternalCallToAction href={"#"}>
        Maak een afspraak
      </ExternalCallToAction>
    </div>
  </div>
);

export default Contact;