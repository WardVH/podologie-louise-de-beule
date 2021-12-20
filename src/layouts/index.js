import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Footer from '../components/footer';
import '../../sass/style.scss';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Podologie - Louise De Beule"/>
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
