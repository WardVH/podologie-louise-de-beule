import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Footer from '../components/footer';
import '../../sass/style.scss';
import Header from "../components/header";
import Navigation from "../components/navigation";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Podologie"/>
    <Header />
    <Navigation/>
    <div className={"body"}>
      {children()}
    </div>
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
