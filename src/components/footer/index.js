import React from 'react';
import './_footer.scss';
import ContactInfo from "../contactInfo";
import Location from "../location";

const Footer = () =>
  (<footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col col-sm-6 col-md-9">
          <h3>Locatie</h3>
          <div>
            <div className="location-name">Podologie Louise De Beule</div>
            <Location />
          </div>
        </div>
        <div className="col col-sm-6 col-md-3">
          <h3>Contact</h3>
          <ContactInfo />
        </div>
      </div>
    </div>
  </footer>);

export default Footer;
