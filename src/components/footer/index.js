import React from 'react';
import './_footer.scss';

const Footer = () =>
  (<footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-sm-9">
          <h3>Locatie</h3>
          <div>
            <div className="location-name">Podologie Louise De Beule</div>
            <div className="location-body">Zandstraat 245<br/>9170 Sint-Pauwels</div>
          </div>
        </div>
        <div className="col-sm-3">
          <h3>Contact</h3>
          <div>
            <span>0470 95 54 05</span>
            <br/>
            <span>info@podologiedebeule.be</span>
          </div>
        </div>
      </div>
    </div>
  </footer>);

export default Footer;
