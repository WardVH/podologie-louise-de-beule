import React from 'react';
import Title from "../components/title";
import CallToAction from "../components/cta";
import Carousel from "../components/carousel";

const IndexPage = () => (
  <main>
    <Carousel />
    <div className={"container"}>
      <Title value={"Podologie"}/>
      <div className="row">
        <div className="col-md-4">
          <CallToAction to={'/podologie#instrumentale-behandeling'}>Pedicure<br/><span>(Instrumentale behandeling)</span></CallToAction>
        </div>
        <div className="col-md-4">
          <CallToAction to={'/podologie#biomechanisch-onderzoek-ganganalyse'}>Biomechanisch onderzoek & ganganalyse</CallToAction>
        </div>
        <div className="col-md-4">
          <CallToAction to={'/podologie#zooltherapie-schoenadvies'}>Zooltherapie en schoenadvies</CallToAction>
        </div>
      </div>
    </div>
  </main>
);

export default IndexPage;