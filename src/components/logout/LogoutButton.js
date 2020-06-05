import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Button } from 'semantic-ui-react';

import { logoutUser } from '../../actions/auth';

const LogoutButton = ({ logoutUser }) => {
  return (
    <Button secondary onClick={logoutUser}>
      Logout
    </Button>
  );
};

LogoutButton.propTypes = {
  logoutUser: PropTypes.func.isRequired,
};

export default connect(null, { logoutUser })(LogoutButton);
