import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import LandingHeader from './LandingHeader';

const LandingPage = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/home' />;
  }

  return (
    <Fragment>
      <LandingHeader />
    </Fragment>
  );
};

LandingPage.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(LandingPage);
