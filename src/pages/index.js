import React from 'react';
import Title from "../components/title";
import CallToAction from "../components/cta";

const IndexPage = () => (
  <main>
    <div className={"container"}>
      <Title value={"Podologie"}/>

      <div className="row">
        <div className="col-sm-4">
          <CallToAction to={'/podologie#instrumentale-behandeling'} className="nav-link">Pedicure<br/><span>(Instrumentale behandeling)</span></CallToAction>
        </div>
        <div className="col-sm-4">
          <CallToAction to={'/podologie#biomechanisch-onderzoek-ganganalyse'} className="nav-link">Biomechanisch onderzoek & ganganalyse</CallToAction>
        </div>
        <div className="col-sm-4">
          <CallToAction to={'/podologie#zooltherapie-schoenadvies'} className="nav-link">Zooltherapie en schoenadvies</CallToAction>
        </div>
      </div>
    </div>
  </main>
);

export default IndexPage;